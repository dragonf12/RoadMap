import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const context = vm.createContext({window: {}});
vm.runInContext(read('dist/content.js'), context);
vm.runInContext(read('dist/logic.js'), context);
const {stages, resources, tracks, projects, careers, certificates} = context.window.ROADMAP;
const core = context.PathCore;

assert.equal(stages.length, 12);
assert.equal(projects.length, 4);
assert.equal(tracks.length, 3);
assert.equal(new Set(stages.map(s => s.id)).size, stages.length);
assert.equal(new Set(resources.map(r => r.id)).size, resources.length);
for (const stage of stages) {
  assert.ok(stage.why.length > 80 && stage.prerequisite.length > 30);
  assert.ok(stage.groups.length > 0 && stage.checkpoints.length >= 4 && stage.practice.length >= 4);
  assert.ok(stage.project.deliverables.length >= 4);
  assert.ok(stage.example.code.length > 20);
  for (const id of stage.resources) assert.ok(resources.some(r => r.id === id), `Missing resource ${id}`);
  for (const group of stage.groups) for (const item of group.items) assert.ok(item.name && item.description.length > 30);
}
for (const project of projects) assert.ok(stages.some(s => s.id === project.stage));
for (const item of [...resources, ...certificates.filter(c => c.url)]) {
  assert.equal(new URL(item.url).protocol, 'https:');
}

// Import and progression checks exercise user-visible behavior, including bad input.
let state = core.defaults(stages);
let progress = core.progress(state, stages);
assert.equal(progress.done, 0);
assert.equal(progress.total, 60);
assert.equal(progress.complete, 0);
assert.equal(progress.next, stages[0].id);
state = core.toggleObjective(state, `${stages[0].id}:0`, true, stages);
assert.equal(core.progress(state, stages).done, 1);
assert.equal(core.progress(state, stages).complete, 0);
state = core.toggleObjective(state, `${stages[0].id}:0`, true, stages);
assert.equal(core.progress(state, stages).done, 1, 'Duplicate marking must be idempotent');
state = core.toggleStage(state, stages[0].id, stages);
assert.equal(core.progress(state, stages).complete, 1);
assert.equal(core.progress(state, stages).next, stages[1].id);
state = core.toggleStage(state, stages[0].id, stages);
assert.equal(core.progress(state, stages).done, 0);
for (const s of stages) state = core.toggleStage(state, s.id, stages);
assert.equal(core.progress(state, stages).percent, 100);
assert.equal(core.progress(state, stages).complete, 12);
const roundtrip = core.validateState(JSON.parse(JSON.stringify(state)), stages, tracks);
assert.equal(core.progress(roundtrip, stages).done, 60);
assert.throws(() => core.validateState({version: 99, completed: []}, stages, tracks));
assert.throws(() => core.validateState({version: 1, completed: ['<img src=x onerror=alert(1)>']}, stages, tracks));
assert.throws(() => core.validateState({version: 1, completed: 'all'}, stages, tracks));
assert.throws(() => core.toggleObjective(state, 'fake:0', true, stages));
const sanitized = core.validateState({version: 1, completed: [], selected: '<script>', track: 'unknown', hours: 100}, stages, tracks);
assert.equal(sanitized.selected, stages[0].id);
assert.equal(sanitized.track, null);
assert.equal(sanitized.hours, 16);
for (let hours = 4; hours <= 16; hours++) {
  const breakdown = core.weeklyHours(hours);
  assert.equal(breakdown.reduce((a, b) => a + b, 0), hours);
  assert.ok(breakdown.every(h => h >= 0));
}

const html = read('dist/index.html');
for (const source of [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1])) {
  if (source.startsWith('#') || source.startsWith('https:')) continue;
  assert.ok(fs.existsSync(path.join(root, 'dist', source)), `Missing asset ${source}`);
}
const ids = [...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size, 'HTML IDs must be unique');
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `Broken section #${match[1]}`);
for (const file of ['dist/content.js', 'dist/logic.js', 'dist/app.js']) {
  const result = spawnSync(process.execPath, ['--check', path.join(root, file)], {encoding: 'utf8'});
  assert.equal(result.status, 0, result.stderr);
}
const hostingPath = path.join(root, '.openai/hosting.json');
if (fs.existsSync(hostingPath)) {
  const hosting = JSON.parse(fs.readFileSync(hostingPath, 'utf8'));
  assert.equal(hosting.static.directory, 'dist');
}

console.log(`PASS: ${stages.length} stages, ${progress.total} objectives, ${resources.length} resources, ${careers.length} career steps and ${certificates.length} certificate entries.`);
console.log('PASS: progression, completion, import/export validation, weekly allocations, assets, anchors and JavaScript syntax.');

if (process.argv.includes('--write-docs')) {
  let md = '# PATH — De Backend a Cloud & Security\n\nRoadmap personal de David. 18–24 meses orientativos, 12 etapas, 4 proyectos y 3 rutas. Aprende en paralelo con la universidad y avanza según lo que puedes demostrar.\n\n';
  md += 'Prioridad inmediata: **Java → Git → SQL → Spring Boot**. Practica seguridad desde el inicio.\n\n';
  md += '| Etapa | Meses | Objetivo |\n|---|---|---|\n' + stages.map((s,i)=>`| ${i+1}. ${s.title} | ${s.months} | ${s.summary} |`).join('\n') + '\n\n';
  for (const [i,s] of stages.entries()) {
    md += `## ${i+1}. ${s.title} — Meses ${s.months}\n\n${s.why}\n\n**Punto de partida:** ${s.prerequisite}\n\n`;
    for (const group of s.groups) md += `### ${group.title}\n\n` + group.items.map(item=>`- **${item.name}:** ${item.description}`).join('\n') + '\n\n';
    md += '### Práctica\n\n' + s.practice.map((t,j)=>`${j+1}. ${t}`).join('\n') + '\n\n';
    md += `### Proyecto: ${s.project.title}\n\n${s.project.description}\n\n` + s.project.deliverables.map(t=>`- ${t}`).join('\n') + '\n\n';
    md += `**${s.example.label}**\n\n\`\`\`text\n${s.example.code}\n\`\`\`\n\n`;
    md += '### Criterios para avanzar\n\n' + s.checkpoints.map(t=>`- [ ] ${t}`).join('\n') + '\n\n';
    md += '### Recursos oficiales\n\n' + s.resources.map(id=>{const r=resources.find(r=>r.id===id);return `- [${r.name}](${r.url}) — ${r.label}`;}).join('\n') + '\n\n';
  }
  md += '## Especialidades\n\n';
  for (const t of tracks) md += `### ${t.name}\n\n${t.description}\n\n**Pregunta:** ${t.question}\n\n${t.tasks.map(x=>`- ${x}`).join('\n')}\n\n**Profundiza:** ${t.deepen}\n\n**Posibilidades:** ${t.path}\n\n**Experimento:** ${t.experiment}\n\n`;
  md += 'Los títulos cambian entre empresas; DevOps, SRE y Platform no son una secuencia obligatoria de ascensos.\n\n## Proyectos de portafolio\n\n';
  for (const p of projects) md += `### ${p.number}. ${p.title}\n\n${p.description} **${p.period}.**\n\n${p.evidence.map(t=>`- ${t}`).join('\n')}\n\n`;
  md += 'Arquitectura posible: ESP32 + LoRa → gateway → HTTPS / balanceador → API Java en Docker (Kubernetes al avanzar) → PostgreSQL / RDS en red privada. GitHub Actions y Terraform automatizan pruebas, controles e infraestructura. Prometheus, Grafana y OpenTelemetry ofrecen observabilidad; CloudTrail audita actividad. WAF es opcional según el laboratorio.\n\n';
  md += 'Cada proyecto debe incluir README, instrucciones reproducibles, pruebas, arquitectura, decisiones y una demo. Usa datos de muestra y configuración sin credenciales.\n\n## Empleo\n\n';
  for (const c of careers) md += `### ${c.period}: ${c.title}\n\n${c.jobs.map(t=>`- ${t}`).join('\n')}\n\n**Evidencia:** ${c.evidence}\n\n`;
  md += 'Los tiempos no garantizan empleo. Año 1: buen Backend/Software Developer. Año 2: entender sistemas reales y su operación. Año 3+: profundizar en una especialidad.\n\n## Certificaciones\n\n| Momento | Certificación | Propósito | Prioridad |\n|---|---|---|---|\n';
  md += certificates.map(c=>`| ${c.moment} | ${c.url?`[${c.name}](${c.url})`:c.name} | ${c.description} | ${c.priority} |`).join('\n') + '\n\n';
  md += 'Consulta temarios y requisitos actuales con el proveedor antes de pagar. [PMP](https://www.pmi.org/certifications/project-management-pmp) exige experiencia y otros requisitos. PMI Student Membership es una membresía, no una certificación. No necesitas todas las certificaciones; proyectos y experiencia tienen prioridad.\n\n';
  md += '## Plan semanal\n\nEjemplo con 8 horas: 2 horas de documentación, 4 de construcción, 1 de pruebas y repaso y 1 para documentar el avance. Ajusta a tu carga universitaria. Practica inglés técnico 15–20 minutos diarios. Si usas IA, comprueba y explica el código.\n\n';
  md += 'Primera semana:\n\n1. Prepara un JDK compatible, IDE, Git y GitHub.\n2. Crea una clase Producto y una lista en un inventario de consola.\n3. Añade crear, listar y buscar; valida datos y depura un error.\n4. Sube commits y README; elige la siguiente mejora.\n\n';
  md += '## Biblioteca de referencia\n\n' + resources.map(r=>`- [${r.name}](${r.url}) — ${r.label}`).join('\n') + '\n';
  fs.writeFileSync(path.join(root,'ROADMAP.md'),md);
  console.log('ROADMAP.md generated from the same content as the website.');
}

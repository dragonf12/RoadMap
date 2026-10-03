(function () {
  "use strict";
  const {stages, tracks, projects, careers, certificates, resources} = window.ROADMAP;
  const Core = window.PathCore;
  const STORAGE_KEY = "path-cloud-roadmap-v1";
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const esc = (value) => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const num = (value) => String(value + 1).padStart(2, "0");
  const iconPaths = {
    grid:'<rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/>',
    route:'<circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M8 5h8a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h8"/>',
    branch:'<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 7v10m0-6c7 0 12-1 12-4"/>',
    code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16"/>',
    terminal:'<rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>',
    layers:'<path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"/>',
    box:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5ZM3 8l9 5 9-5m-9 5v9M7.5 5.5l9 5"/>',
    briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12c5 4 13 4 18 0m-11 1h4v3h-4z"/>',
    award:'<circle cx="12" cy="8" r="5"/><path d="m8 12-2 9 6-3 6 3-2-9"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 4h2m4 0h2m-8 4h2"/>',
    book:'<path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    download:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4"/>',
    'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'arrow-left':'<path d="M20 12H4m6-6-6 6 6 6"/>',
    'arrow-up-right':'<path d="M6 18 18 6M6 6h12v12"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-9v.1"/>',
    search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    spark:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    cloud:'<path d="M7 19a5 5 0 0 1-1-10 7 7 0 0 1 13-1 5.5 5.5 0 0 1 0 11H7Z"/>',
    braces:'<path d="M8 3H6v6c0 2-2 3-3 3 1 0 3 1 3 3v6h2m8-18h2v6c0 2 2 3 3 3-1 0-3 1-3 3v6h-2"/>',
    hexagon:'<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><circle cx="12" cy="12" r="4"/><path d="M12 2v6m0 8v6M3 7l6 3m6 4 6 3M3 17l6-3m6-4 6-3"/>',
    git:'<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="15" r="2"/><path d="M6 7v10m0-8c8 0 12 1 12 4"/>',
    shield:'<path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>',
    lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
    activity:'<path d="M2 12h4l3-8 5 16 3-8h5"/>',
    cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>',
    database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
    clipboard:'<rect x="5" y="5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m8 14 3 3 5-6"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.code}</svg>`;
  function hydrateIcons(root = document) {
    $$('[data-icon]', root).forEach(element => {
      const html = icon(element.dataset.icon);
      if (element.classList.contains("nav-link") || element.classList.contains("small-button")) element.insertAdjacentHTML("afterbegin", html);
      else element.innerHTML = html;
      element.removeAttribute("data-icon");
    });
  }
  let state = Core.defaults(stages);
  let storageAvailable = true;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) state = Core.validateState(JSON.parse(stored), stages, tracks);
  } catch (_) {storageAvailable = false;}
  let activeTab = "learn";
  let filterCategory = "Todos";
  let toastTimer;
  function toast(message) {
    const element = $("#toast"); element.textContent = message; element.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => {element.hidden = true;}, 4500);
  }
  function persist() {
    try {localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); storageAvailable = true;}
    catch (_) {if (storageAvailable) toast("El navegador no permite guardar. Exporta tu progreso para conservarlo."); storageAvailable = false;}
  }
  function stageState(stage) {
    const count = Core.progress(state, stages).counts[stage.id];
    return count === stage.checkpoints.length ? "complete" : count ? "partial" : "";
  }
  function renderTimeline() {
    $("#timeline").innerHTML = stages.map((s, i) => `<button class="timeline-card phase-${s.phase}" data-stage="${s.id}" ${s.id === state.selected ? 'aria-current="step"' : ""} aria-label="Etapa ${num(i)}: ${esc(s.title)}, meses ${s.months}${stageState(s) === "complete" ? ", completada" : ""}"><span class="timeline-meta"><span class="timeline-num">${num(i)}</span>${icon(s.icon)}</span><strong>${esc(s.short)}</strong><span class="timeline-months">Meses ${s.months}</span>${stageState(s) === "complete" ? `<span class="timeline-check">${icon("check")}</span>` : ""}</button>`).join("");
  }
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  function renderStageList() {
    const query = normalize($("#stage-search").value.trim());
    const found = stages.filter(s => normalize(JSON.stringify(s)).includes(query));
    $("#stage-list").innerHTML = found.length ? found.map(s => `<button class="stage-item ${stageState(s)}" data-stage="${s.id}" ${s.id === state.selected ? 'aria-current="step"' : ""}><span class="stage-item-num">${num(stages.indexOf(s))}</span><span class="stage-item-main"><strong>${esc(s.title)}</strong><small>Meses ${s.months}</small></span><span class="stage-item-state">${stageState(s) === "complete" ? icon("check") : ""}</span></button>`).join("") : '<p class="empty-search">No hay etapas con ese tema. Prueba Java, IAM, Linux o Kubernetes.</p>';
  }
  function topicsHTML(s) {
    return s.groups.map((g, i) => `<section class="topic-group"><h4><span class="group-num">${i + 1}</span>${esc(g.title)}</h4><ul class="topic-list">${g.items.map(item => `<li><strong>${esc(item.name)}</strong><p>${esc(item.description)}</p></li>`).join("")}</ul></section>`).join("") + `<div class="practice-panel"><h4>${icon("code")} Llévalo a la práctica</h4><ol>${s.practice.map(item => `<li>${esc(item)}</li>`).join("")}</ol></div>`;
  }
  function projectHTML(s) {
    return `<div class="project-header"><span class="eyebrow">TU PROYECTO EN ESTA ETAPA</span><h4>${esc(s.project.title)}</h4><p>${esc(s.project.description)}</p></div><div class="deliverables"><h4>Qué debes entregar</h4><ul>${s.project.deliverables.map(item => `<li>${icon("check")}<span>${esc(item)}</span></li>`).join("")}</ul></div><div class="code-example"><div class="code-heading"><span>${esc(s.example.label)}</span><button class="copy-code" id="copy-code" aria-label="Copiar ejemplo de ${esc(s.example.language)}">${icon("copy")} Copiar</button></div><pre><code>${esc(s.example.code)}</code></pre></div>`;
  }
  function checkpointsHTML(s) {
    const count = Core.progress(state, stages).counts[s.id];
    const complete = count === s.checkpoints.length;
    return `<div class="check-intro"><h4>¿Estás listo para avanzar?</h4><p>Marca lo que ya puedes demostrar con tu proyecto. Haber visto un tutorial es un comienzo; poder hacerlo y explicarlo es la meta.</p></div><div class="checkpoint-list">${s.checkpoints.map((text, i) => {const id = `${s.id}:${i}`; return `<label class="checkpoint"><input type="checkbox" data-objective="${id}" ${state.completed.includes(id) ? "checked" : ""}><span>${esc(text)}</span></label>`;}).join("")}</div><div class="checkpoint-meta"><span>Objetivos demostrados</span><strong>${count} / ${s.checkpoints.length}</strong></div><div class="stage-progress-bar"><span style="width:${count / s.checkpoints.length * 100}%"></span></div><button class="complete-stage" id="complete-stage">${icon("check")} ${complete ? "Desmarcar esta etapa" : "Marcar todos los objetivos"}</button><p class="checkpoint-help">Puedes trabajar en varias etapas. Regresa cuando necesites reforzar una base y conserva ejemplos de tu avance en GitHub.</p>`;
  }
  function stageResourcesHTML(s) {
    return `<div class="check-intro"><h4>Aprende desde la fuente.</h4><p>Utiliza una guía para comenzar y vuelve a la documentación cuando necesites entender un detalle.</p></div><div class="stage-resources" style="margin-top:18px">${s.resources.map(id => {const r = resources.find(r => r.id === id); return `<a class="stage-resource" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer"><span><strong>${esc(r.name)}</strong><small>${esc(r.label)}</small></span>${icon("arrow-up-right")}</a>`;}).join("")}</div>`;
  }
  function renderStage() {
    const s = stages.find(s => s.id === state.selected); const index = stages.indexOf(s);
    const tabs = [{id:"learn",label:"Aprende",icon:"book"},{id:"build",label:"Construye",icon:"code"},{id:"check",label:"Avanza",icon:"clipboard"},{id:"resources",label:"Recursos",icon:"arrow-up-right"}];
    const panelHTML = activeTab === "learn" ? topicsHTML(s) : activeTab === "build" ? projectHTML(s) : activeTab === "check" ? checkpointsHTML(s) : stageResourcesHTML(s);
    $("#stage-detail").innerHTML = `<div class="stage-topline"><span class="stage-number-label">ETAPA ${num(index)} <span>/ 12</span></span><span class="duration-badge">${icon("clock")} Meses ${s.months}</span></div><div class="stage-header"><span class="stage-large-icon">${icon(s.icon)}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p></div></div><div class="stage-tags">${s.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div><p class="stage-intro">${esc(s.why)}</p><div class="prerequisite"><strong>Tu punto de partida</strong>${esc(s.prerequisite)}</div><div class="stage-tabs" role="tablist" aria-label="Contenido de la etapa ${num(index)}">${tabs.map(t => `<button class="stage-tab" role="tab" id="tab-${t.id}" data-tab="${t.id}" aria-selected="${t.id === activeTab}" aria-controls="stage-panel" tabindex="${t.id === activeTab ? 0 : -1}">${icon(t.icon)}${t.label}</button>`).join("")}</div><div class="tab-panel" id="stage-panel" role="tabpanel" aria-labelledby="tab-${activeTab}" tabindex="0">${panelHTML}</div><div class="stage-footer"><button id="previous-stage" ${index === 0 ? "disabled" : ""}>${icon("arrow-left")} Etapa anterior</button><span>Una habilidad a la vez.</span><button id="next-stage" ${index === stages.length - 1 ? "disabled" : ""}>Siguiente etapa ${icon("arrow-right")}</button></div>`;
  }
  function updateProgress() {
    const p = Core.progress(state, stages);
    $("#side-percent").textContent = `${p.percent}%`;
    $("#side-count").textContent = `${p.complete} de 12 etapas completadas`;
    $("#side-bar").style.width = `${p.percent}%`;
    $("#hero-percent").innerHTML = `${p.percent}<span>%</span>`;
    $("#progress-ring").style.setProperty("--progress", `${p.percent}%`);
    $("#hero-completed").textContent = p.complete === 12 ? "¡Completaste toda la ruta!" : p.done ? `${p.complete} de 12 etapas completadas` : "Tu camino empieza aquí";
    $("#criteria-count").textContent = `${p.done} de ${p.total} objetivos completados`;
    $("#start-button").innerHTML = `${p.done ? "Continuar mi ruta" : "Comenzar mi ruta"} ${icon("arrow-right")}`;
  }
  function selectStage(id, scroll = false) {
    if (!stages.some(s => s.id === id)) return;
    state = {...state, selected:id}; activeTab = "learn"; persist();
    renderTimeline(); renderStageList(); renderStage();
    if (scroll) $(".explorer").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block:"start"});
  }
  function renderTracks() {
    $("#track-grid").innerHTML = tracks.map(t => `<article class="track-card ${t.color} ${state.track === t.id ? "chosen" : ""}"><div class="track-header"><span class="track-icon">${icon(t.icon)}</span>${state.track === t.id ? '<span class="track-status">Mi ruta a explorar</span>' : ""}</div><span class="eyebrow">${esc(t.eyebrow)}</span><h3>${esc(t.name)}</h3><p>${esc(t.description)}</p><div class="track-question">${esc(t.question)}</div><ul>${t.tasks.map(text => `<li>${esc(text)}</li>`).join("")}</ul><details class="track-details"><summary>Cómo probar esta ruta</summary><p><strong>Un experimento:</strong> ${esc(t.experiment)}</p><p><strong>Profundiza:</strong> ${esc(t.deepen)}</p><p><strong>Posibilidades:</strong> ${esc(t.path)}</p></details><button class="select-track" data-track="${t.id}" aria-pressed="${state.track === t.id}">${icon(state.track === t.id ? "check" : "arrow-right")}${state.track === t.id ? "Ruta elegida · cambiar cuando quieras" : "Quiero explorar esta ruta"}</button></article>`).join("");
  }
  function renderProjects() {
    $("#project-grid").innerHTML = projects.map(p => `<article class="project-card"><div class="project-card-top"><span class="project-icon">${icon(p.icon)}</span><span class="project-subtitle">${esc(p.subtitle)}</span><span>PROYECTO ${p.number}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="project-evidence">${p.evidence.map(text => `<span>${esc(text)}</span>`).join("")}</div><div class="project-card-bottom"><span>${esc(p.period)}</span><a class="text-link" href="#journey" data-open-stage="${p.stage}">Ver la etapa ${icon("arrow-up-right")}</a></div></article>`).join("");
  }
  function renderCareers() {
    $("#career-grid").innerHTML = careers.map(c => `<article class="career-card"><span class="career-period">${esc(c.period)}</span><h3>${esc(c.title)}</h3><div class="career-jobs">${c.jobs.map(job => `<span>${esc(job)}</span>`).join("")}</div><p class="career-evidence"><strong>QUÉ PUEDES DEMOSTRAR</strong>${esc(c.evidence)}</p></article>`).join("");
    $("#cert-rows").innerHTML = certificates.map(c => `<tr><td>${esc(c.moment)}</td><td>${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.name)} ${icon("arrow-up-right")}</a>` : esc(c.name)}${c.moment === "Gestión de proyectos" ? '<br><a href="https://www.pmi.org/certifications/project-management-pmp" target="_blank" rel="noopener noreferrer">Requisitos PMP ↗</a>' : ""}</td><td>${esc(c.description)}</td><td><span class="priority">${esc(c.priority)}</span></td></tr>`).join("");
  }
  function renderWeek() {
    $("#hours").value = state.hours; $("#hours-value").textContent = state.hours;
    const times = Core.weeklyHours(state.hours);
    const rows = [{icon:"book",title:"Aprender con documentación",text:"Un concepto y sus ejemplos. Toma notas con tus palabras."},{icon:"code",title:"Construir y experimentar",text:"La mitad del tiempo para código, laboratorio y proyecto."},{icon:"activity",title:"Depurar, probar y repasar",text:"Reproduce un error, encuentra su causa y comprueba la solución."},{icon:"git",title:"Documentar y cerrar la semana",text:"Un commit, evidencia de tu avance y una meta siguiente."}];
    $("#weekly-breakdown").innerHTML = rows.map((r, i) => `<div class="week-row">${icon(r.icon)}<div><strong>${r.title}</strong><p>${r.text}</p></div><span>${times[i].toLocaleString("es-MX")} <small>h</small></span></div>`).join("");
  }
  function renderResources() {
    const categories = ["Todos", ...new Set(resources.map(r => r.category))];
    $("#resource-filters").innerHTML = categories.map(c => `<button class="resource-filter" data-category="${esc(c)}" aria-pressed="${c === filterCategory}">${esc(c)}</button>`).join("");
    $("#resources-grid").innerHTML = resources.filter(r => filterCategory === "Todos" || r.category === filterCategory).map(r => `<a class="resource-card" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer"><div><span class="eyebrow">${esc(r.category)}</span><strong>${esc(r.name)}</strong><p>${esc(r.label)}</p></div>${icon("arrow-up-right")}</a>`).join("");
  }
  function printHTML() {
    const p = Core.progress(state, stages);
    return `<div class="print-cover"><p class="print-label">PATH · Roadmap personal de David</p><h1>De Backend a Cloud & Security</h1><p>18–24 meses orientativos · 12 etapas · 4 proyectos · 3 rutas</p><p>Una base común: Java → Git → SQL → Spring Boot → Linux y redes → Docker → AWS. Después: automatización, fiabilidad y seguridad.</p><p>Avance al imprimir: ${p.done}/${p.total} objetivos y ${p.complete}/12 etapas. Los tiempos no garantizan contratación; avanza por habilidades demostradas.</p><h2>El mapa</h2><ol>${stages.map(s => `<li><strong>${esc(s.title)}</strong> · Meses ${s.months}<br>${esc(s.summary)}</li>`).join("")}</ol><h2>Tus prioridades</h2><p>Año 1: ser un buen desarrollador con Java, Spring, SQL, Git, Linux y Docker. Año 2: entender sistemas reales, cloud, CI/CD, IaC, observabilidad y seguridad. Año 3+: profundizar una especialidad.</p></div>${stages.map((s, i) => `<section class="print-stage"><p class="print-label">Etapa ${num(i)} · Meses ${s.months}</p><h2>${esc(s.title)}</h2><p><strong>${esc(s.summary)}</strong></p><p>${esc(s.why)}</p><p><strong>Punto de partida:</strong> ${esc(s.prerequisite)}</p>${s.groups.map(g => `<h3>${esc(g.title)}</h3><ul>${g.items.map(item => `<li><strong>${esc(item.name)}:</strong> ${esc(item.description)}</li>`).join("")}</ul>`).join("")}<h3>Práctica</h3><ol>${s.practice.map(t => `<li>${esc(t)}</li>`).join("")}</ol><h3>Proyecto: ${esc(s.project.title)}</h3><p>${esc(s.project.description)}</p><ul>${s.project.deliverables.map(t => `<li>${esc(t)}</li>`).join("")}</ul><h4>${esc(s.example.label)}</h4><pre>${esc(s.example.code)}</pre><h3>Criterios para avanzar</h3><ul>${s.checkpoints.map((t,j) => `<li><span class="print-check">[${state.completed.includes(`${s.id}:${j}`) ? "X" : " "}]</span> ${esc(t)}</li>`).join("")}</ul><h3>Recursos</h3><ul>${s.resources.map(id=>{const r=resources.find(r=>r.id===id);return `<li><strong>${esc(r.name)}:</strong> <a href="${esc(r.url)}">${esc(r.url)}</a></li>`;}).join("")}</ul></section>`).join("")}<section class="print-stage"><h2>Tres rutas de especialización</h2>${tracks.map(t=>`<h3>${esc(t.name)}</h3><p>${esc(t.description)}</p><p><strong>Pregunta:</strong> ${esc(t.question)}</p><ul>${t.tasks.map(item=>`<li>${esc(item)}</li>`).join("")}</ul><p><strong>Profundiza:</strong> ${esc(t.deepen)}</p><p><strong>Posibilidades:</strong> ${esc(t.path)}</p><p><strong>Experimento:</strong> ${esc(t.experiment)}</p>`).join("")}<h2>Cuatro proyectos de portafolio</h2>${projects.map(pr=>`<h3>${pr.number}. ${esc(pr.title)}</h3><p>${esc(pr.description)} · ${esc(pr.period)}</p><ul>${pr.evidence.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>`).join("")}<h3>Arquitectura posible</h3><p>ESP32 + LoRa → gateway → HTTPS y balanceador → API Java en Docker (Kubernetes al avanzar) → PostgreSQL / RDS en red privada. GitHub Actions + Terraform automatizan pruebas, controles y despliegue. Prometheus, Grafana y OpenTelemetry ayudan a observar; CloudTrail audita actividad.</p></section><section class="print-stage"><h2>Empleo</h2>${careers.map(c=>`<h3>${esc(c.period)}: ${esc(c.title)}</h3><p>${esc(c.jobs.join(" · "))}</p><p>${esc(c.evidence)}</p>`).join("")}<h2>Certificaciones posibles</h2><table><thead><tr><th>Momento</th><th>Certificación</th><th>Propósito</th><th>Prioridad</th></tr></thead><tbody>${certificates.map(c=>`<tr><td>${esc(c.moment)}</td><td>${c.url?`<a href="${esc(c.url)}">${esc(c.name)}</a>`:esc(c.name)}</td><td>${esc(c.description)}</td><td>${esc(c.priority)}</td></tr>`).join("")}</tbody></table><p>Revisa requisitos y temarios actuales con el proveedor. PMI Student Membership es una membresía, no una certificación. PMP requiere experiencia y otros requisitos: https://www.pmi.org/certifications/project-management-pmp</p><h2>Plan semanal: ${state.hours} horas</h2><p>${Core.weeklyHours(state.hours).map((h,i)=>`${["Documentación","Construcción","Pruebas y repaso","Documentación del avance"][i]}: ${h} h`).join(" · ")}</p><p>Practica inglés técnico 15–20 minutos al día. Usa IA para comprender y verificar; conserva el control de tu código.</p><h3>Primera semana</h3><ol><li>Prepara JDK, IDE, Git y GitHub.</li><li>Crea un inventario con Producto y una lista.</li><li>Añade crear, listar, buscar y validaciones.</li><li>Documenta y sube commits.</li></ol><h2>Biblioteca de referencia</h2><ul>${resources.map(r=>`<li><strong>${esc(r.name)}:</strong> <a href="${esc(r.url)}">${esc(r.url)}</a></li>`).join("")}</ul></section>`;
  }
  function renderAll() {renderTimeline();renderStageList();renderStage();updateProgress();renderTracks();renderProjects();renderCareers();renderWeek();renderResources();}
  function closeMenu() {$("#sidebar").classList.remove("open");$("#mobile-overlay").hidden=true;$("#menu-toggle").setAttribute("aria-expanded","false");$("#menu-toggle").setAttribute("aria-label","Abrir menú");}
  document.addEventListener("click", async event => {
    const button = event.target.closest("button,a"); if (!button) return;
    if (button.dataset.stage) {selectStage(button.dataset.stage, button.classList.contains("timeline-card"));return;}
    if (button.dataset.openStage) {event.preventDefault();selectStage(button.dataset.openStage,true);return;}
    if (button.dataset.tab) {activeTab=button.dataset.tab;renderStage();$(`#tab-${activeTab}`).focus();return;}
    if (button.dataset.track) {state={...state,track:state.track===button.dataset.track?null:button.dataset.track};persist();renderTracks();$(`[data-track="${button.dataset.track}"]`).focus();toast(state.track?"Ruta guardada. Puedes cambiarla después de practicar.":"Ruta desmarcada. Sigue explorando.");return;}
    if (button.dataset.category) {filterCategory=button.dataset.category;renderResources();$(`[data-category="${filterCategory}"]`).focus();return;}
    const index = stages.findIndex(s=>s.id===state.selected);
    if (button.id === "previous-stage" || button.id === "next-stage") {selectStage(stages[index + (button.id === "next-stage" ? 1 : -1)]?.id,true);return;}
    if (["start-button","resume-button","closing-resume"].includes(button.id)) {event.preventDefault();selectStage(Core.progress(state,stages).next,true);return;}
    if (button.id === "first-stage-button") {event.preventDefault();selectStage(stages[0].id,true);return;}
    if (button.id === "copy-code") {try {await navigator.clipboard.writeText(stages[index].example.code);toast("Ejemplo copiado.");} catch (_) {toast("Selecciona el ejemplo y cópialo; el navegador no permite usar el portapapeles aquí.");}return;}
    if (button.id === "complete-stage") {state=Core.toggleStage(state,state.selected,stages);persist();renderTimeline();renderStageList();renderStage();updateProgress();$("#complete-stage").focus();return;}
    if (button.id === "print-button") {$("#print-guide").innerHTML=printHTML();window.print();return;}
    if (button.id === "export-progress") {const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const link=document.createElement("a");link.href=url;link.download="path-progreso.json";link.click();setTimeout(()=>URL.revokeObjectURL(url),5000);toast("Copia de progreso exportada.");return;}
    if (button.id === "import-progress") {$("#progress-file").click();return;}
    if (button.id === "reset-progress") {$("#reset-dialog").showModal();return;}
    if (button.id === "menu-toggle") {const open=!$("#sidebar").classList.contains("open");$("#sidebar").classList.toggle("open",open);$("#mobile-overlay").hidden=!open;button.setAttribute("aria-expanded",String(open));button.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");return;}
    if (button.classList.contains("nav-link")) closeMenu();
  });
  $("#stage-detail").addEventListener("change",event=>{
    if (!event.target.matches("[data-objective]")) return;
    const key=event.target.dataset.objective;
    state=Core.toggleObjective(state,key,event.target.checked,stages);persist();renderTimeline();renderStageList();renderStage();updateProgress();$(`[data-objective="${key}"]`).focus();
  });
  $("#stage-detail").addEventListener("keydown",event=>{
    if (!event.target.matches(".stage-tab")) return;
    const tabs=["learn","build","check","resources"];let next=tabs.indexOf(activeTab);
    if (event.key==="ArrowRight") next=(next+1)%tabs.length;else if(event.key==="ArrowLeft")next=(next+tabs.length-1)%tabs.length;else if(event.key==="Home")next=0;else if(event.key==="End")next=tabs.length-1;else return;
    event.preventDefault();activeTab=tabs[next];renderStage();$(`#tab-${activeTab}`).focus();
  });
  $("#stage-search").addEventListener("input",renderStageList);
  $("#hours").addEventListener("input",event=>{state={...state,hours:Number(event.target.value)};persist();renderWeek();});
  $("#progress-file").addEventListener("change",async event=>{
    const file=event.target.files[0];if(!file)return;
    try {if(file.size>100000)throw new Error("El archivo de progreso es demasiado grande.");const imported=Core.validateState(JSON.parse(await file.text()),stages,tracks);state=imported;activeTab="learn";persist();renderAll();toast("Progreso importado.");}catch(error){toast(error instanceof SyntaxError?"El archivo no contiene JSON válido.":error.message);}event.target.value="";
  });
  $("#reset-dialog").addEventListener("close",()=>{if($("#reset-dialog").returnValue==="reset"){state=Core.defaults(stages);activeTab="learn";persist();renderAll();toast("Progreso reiniciado.");}});
  $("#mobile-overlay").addEventListener("click",closeMenu);
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&$("#sidebar").classList.contains("open")){closeMenu();$("#menu-toggle").focus();}});
  window.addEventListener("beforeprint",()=>{$("#print-guide").innerHTML=printHTML();});
  if ("IntersectionObserver" in window) {
    const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(!visible.length)return;const id=visible[0].target.id;$$('.nav-link').forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id));},{rootMargin:"-80px 0px -55% 0px",threshold:[0,.15,.3]});
    $$("main > section[id]").forEach(s=>observer.observe(s));
  }
  hydrateIcons();renderAll();
  if (!storageAvailable) toast("El progreso no pudo cargarse. Puedes importar una copia o exportar el avance de esta sesión.");
})();

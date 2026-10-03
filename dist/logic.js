/* Reglas de progreso: sin dependencias del navegador. */
(function (root) {
  "use strict";
  const defaults = (stages) => ({version: 1, completed: [], selected: stages[0].id, track: null, hours: 8});
  const keysFor = (stage) => stage.checkpoints.map((_, index) => `${stage.id}:${index}`);
  function validateState(value, stages, tracks) {
    if (!value || typeof value !== "object" || Array.isArray(value) || value.version !== 1) {
      throw new Error("El archivo no es un progreso PATH compatible.");
    }
    const validKeys = new Set(stages.flatMap(keysFor));
    if (!Array.isArray(value.completed) || value.completed.length > validKeys.size * 2 || value.completed.some(key => typeof key !== "string" || !validKeys.has(key))) {
      throw new Error("El archivo contiene objetivos que no pertenecen a este roadmap.");
    }
    const fallback = defaults(stages);
    return {
      version: 1,
      completed: [...new Set(value.completed)],
      selected: stages.some(s => s.id === value.selected) ? value.selected : fallback.selected,
      track: tracks.some(t => t.id === value.track) ? value.track : null,
      hours: Number.isFinite(value.hours) ? Math.max(4, Math.min(16, Math.round(value.hours))) : 8
    };
  }
  function progress(state, stages) {
    const selected = new Set(state.completed);
    const total = stages.reduce((n, stage) => n + stage.checkpoints.length, 0);
    const counts = Object.fromEntries(stages.map(s => [s.id, keysFor(s).filter(k => selected.has(k)).length]));
    const done = Object.values(counts).reduce((a, b) => a + b, 0);
    const complete = stages.filter(s => counts[s.id] === s.checkpoints.length).length;
    return {total, done, complete, counts, percent: Math.round(done / total * 100), next: stages.find(s => counts[s.id] < s.checkpoints.length)?.id ?? stages[stages.length - 1].id};
  }
  function toggleObjective(state, key, checked, stages) {
    if (!stages.some(s => keysFor(s).includes(key))) throw new Error("Objetivo desconocido.");
    const completed = new Set(state.completed);
    if (checked) completed.add(key); else completed.delete(key);
    return {...state, completed: [...completed]};
  }
  function toggleStage(state, id, stages) {
    const stage = stages.find(s => s.id === id);
    if (!stage) throw new Error("Etapa desconocida.");
    const completed = new Set(state.completed);
    const keys = keysFor(stage);
    const remove = keys.every(k => completed.has(k));
    for (const key of keys) {if (remove) completed.delete(key); else completed.add(key);}
    return {...state, completed: [...completed]};
  }
  function weeklyHours(hours) {
    const learning = Math.round(hours * .25 * 2) / 2;
    const practice = Math.round(hours * .5 * 2) / 2;
    const review = Math.round(hours * .125 * 2) / 2;
    return [learning, practice, review, hours - learning - practice - review];
  }
  root.PathCore = Object.freeze({defaults, keysFor, validateState, progress, toggleObjective, toggleStage, weeklyHours});
})(globalThis);

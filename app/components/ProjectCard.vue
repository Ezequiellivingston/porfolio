<script setup lang="ts">
import type { Project } from '~/data/portfolio'

defineProps<{
  project: Project
  index: number
}>()
</script>

<template>
  <details class="project">
    <summary class="project__summary">
      <div class="project__head">
        <span
          class="project__badge"
          :class="project.kind === 'personal' ? 'project__badge--personal' : 'project__badge--work'"
        >
          {{ project.kind === 'personal' ? 'Personal' : 'Trabajo' }}
        </span>
        <h3 class="project__title">
          {{ project.title }}
        </h3>
        <p class="project__meta mono">
          {{ project.company }} · {{ project.year }}
        </p>
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project__link mono"
        >
          Ver sitio
          <AppIcon
            name="external"
            :size="14"
          />
        </a>
      </div>
      <span
        class="project__chevron"
        aria-hidden="true"
      >
        <AppIcon
          name="arrow"
          :size="20"
        />
      </span>
    </summary>

    <div class="project__body">
      <div class="project__row">
        <p class="project__label">
          Problema
        </p>
        <p class="project__text">
          {{ project.problem }}
        </p>
      </div>

      <div class="project__row">
        <p class="project__label">
          Solución
        </p>
        <p class="project__text">
          {{ project.solution }}
        </p>
      </div>

      <div class="project__row">
        <p class="project__label">
          Stack
        </p>
        <ul
          class="project__stack"
          aria-label="Stack tecnológico"
        >
          <li
            v-for="tech in project.stack"
            :key="tech"
            class="project__tech mono"
          >
            {{ tech }}
          </li>
        </ul>
      </div>

      <div class="project__row">
        <p class="project__label">
          Resultado
        </p>
        <ul class="project__results">
          <li
            v-for="result in project.result"
            :key="result"
          >
            {{ result }}
          </li>
        </ul>
      </div>
    </div>
  </details>
</template>

<style scoped>
.project {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.project:hover {
  box-shadow: var(--shadow-md);
}

.project__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  cursor: pointer;
  list-style: none;
}

.project__summary::-webkit-details-marker {
  display: none;
}

.project__head {
  min-width: 0;
}

.project__badge {
  display: inline-block;
  margin-bottom: 6px;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project__badge--personal {
  background: var(--accent-soft);
  color: var(--accent);
}

.project__badge--work {
  background: var(--bg-soft);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

.project__title {
  margin: 0;
  font-size: 1.05rem;
}

.project__meta {
  margin: 4px 0 0;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.project__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
  font-size: 0.78rem;
  font-weight: 600;
}

.project__chevron {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.project[open] .project__chevron {
  transform: rotate(90deg);
  color: var(--accent);
  border-color: var(--accent);
}

.project__body {
  padding: 0 24px 24px;
  display: grid;
  gap: 18px;
}

.project__row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 16px;
  align-items: baseline;
}

.project__label {
  margin: 0;
  color: var(--accent);
  font-weight: 700;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project__text {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.project__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.project__tech {
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
}

.project__results {
  margin: 0;
  padding-left: 20px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.project__results li {
  margin-bottom: 6px;
}

.project__results li::marker {
  color: var(--accent);
}

@media (max-width: 640px) {
  .project__row {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
</style>

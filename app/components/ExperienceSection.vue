<script setup lang="ts">
import { experience } from '~/data/portfolio'
</script>

<template>
  <section
    id="experiencia"
    class="section"
    aria-labelledby="experiencia-titulo"
  >
    <div class="container">
      <SectionHeading
        id="experiencia-titulo"
        eyebrow="Trayectoria"
        title="Experiencia profesional"
        lead="Cuatro empresas donde construí plataformas reales con foco en frontend, data viz y experiencia de usuario."
      />

      <ol class="timeline">
        <li
          v-for="(job, index) in experience"
          :key="job.company"
          v-reveal="{ delay: index * 60 }"
          class="timeline__item"
        >
          <div
            class="timeline__marker"
            aria-hidden="true"
          />

          <article class="timeline__card">
            <header class="timeline__head">
              <div>
                <h3 class="timeline__role">
                  {{ job.role }}
                </h3>
                <p class="timeline__company">
                  {{ job.company }}
                </p>
              </div>
              <p class="timeline__meta mono">
                {{ job.period }} · {{ job.location }}
              </p>
            </header>

            <ul class="timeline__bullets">
              <li
                v-for="highlight in job.highlights"
                :key="highlight"
              >
                {{ highlight }}
              </li>
            </ul>

            <ul
              class="timeline__stack"
              aria-label="Stack tecnológico"
            >
              <li
                v-for="tech in job.stack"
                :key="tech"
                class="timeline__tech mono"
              >
                {{ tech }}
              </li>
            </ul>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 7px;
  width: 2px;
  background: var(--border);
}

.timeline__item {
  position: relative;
  padding-left: 36px;
  padding-bottom: 28px;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__marker {
  position: absolute;
  left: 0;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid var(--bg);
  background: var(--accent);
  box-shadow: 0 0 0 1px var(--accent);
}

.timeline__card {
  padding: 20px 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
}

.timeline__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.timeline__role {
  margin: 0;
}

.timeline__company {
  margin: 2px 0 0;
  color: var(--accent);
  font-weight: 600;
}

.timeline__meta {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.82rem;
  white-space: nowrap;
}

.timeline__bullets {
  margin: 14px 0 0;
  padding-left: 20px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.timeline__bullets li {
  margin-bottom: 8px;
}

.timeline__bullets li::marker {
  color: var(--accent);
}

.timeline__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
}

.timeline__tech {
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
}
</style>

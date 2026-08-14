<script setup lang="ts">
import { personal, socials, metrics } from '~/data/portfolio'
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <p
          v-reveal
          class="hero__badge mono"
        >
          <span
            class="hero__badge-dot"
            aria-hidden="true"
          />
          Disponible para oportunidades
        </p>

        <h1 v-reveal="{ delay: 60 }">
          Hola, soy <span class="hero__name">{{ personal.shortName }}</span>.
        </h1>

        <p
          v-reveal="{ delay: 120 }"
          class="hero__role"
        >
          {{ personal.role }} especializado en
          <strong>React, TypeScript, Vue.js, React Native</strong> y arquitectura
          frontend escalable.
        </p>

        <p
          v-reveal="{ delay: 180 }"
          class="hero__tagline"
        >
          {{ personal.tagline }}
        </p>

        <div
          v-reveal="{ delay: 240 }"
          class="hero__actions"
        >
          <a
            class="btn btn--primary"
            :href="personal.cvDownload"
            download
          >
            <AppIcon
              name="download"
              :size="18"
            />
            Descargar CV
          </a>
          <a
            class="btn btn--ghost"
            href="#proyectos"
          >
            Ver proyectos
            <AppIcon
              name="arrow"
              :size="18"
            />
          </a>
        </div>

        <ul
          v-reveal="{ delay: 300 }"
          class="hero__socials"
          aria-label="Redes sociales"
        >
          <li
            v-for="social in socials"
            :key="social.label"
          >
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="hero__social"
            >
              <AppIcon
                :name="social.icon"
                :size="20"
              />
              <span>{{ social.label }}</span>
            </a>
          </li>
        </ul>
      </div>

      <dl
        v-reveal="{ delay: 200 }"
        class="hero__metrics"
      >
        <div
          v-for="m in metrics"
          :key="m.label"
          class="hero__metric"
        >
          <dt class="hero__metric-value mono">
            {{ m.value }}
          </dt>
          <dd class="hero__metric-label">
            {{ m.label }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: 88px 64px;
  background:
    radial-gradient(600px 300px at 85% -10%, var(--accent-soft), transparent 70%),
    var(--bg);
}

.hero__content {
  max-width: 760px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 20px;
  padding: 6px 14px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg-elevated);
  color: var(--text-muted);
  font-size: 0.82rem;
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
}

.hero__name {
  color: var(--accent);
}

.hero__role {
  font-size: clamp(1.15rem, 2.5vw, 1.45rem);
  color: var(--text-muted);
  margin-top: 8px;
}

.hero__role strong {
  color: var(--text);
}

.hero__tagline {
  margin-top: 16px;
  max-width: 620px;
  color: var(--text-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
}

.hero__social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.92rem;
}

.hero__social:hover {
  color: var(--accent);
}

.hero__metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin: 56px 0 0;
}

.hero__metric {
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
}

.hero__metric-value {
  margin: 0;
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--accent);
}

.hero__metric-label {
  margin: 4px 0 0;
  color: var(--text-muted);
  font-size: 0.88rem;
}
</style>

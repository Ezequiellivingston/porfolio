<script setup lang="ts">
import { personal } from '~/data/portfolio'
</script>

<template>
  <section
    id="contacto"
    class="section section--alt"
    aria-labelledby="contacto-titulo"
  >
    <div class="container">
      <div
        v-reveal
        class="contact"
      >
        <p class="contact__eyebrow mono">
          Contacto
        </p>
        <h2 class="contact__title">
          ¿Tenés un proyecto en mente?
        </h2>
        <p class="contact__lead">
          Estoy abierto a oportunidades como Frontend Engineer, colaboraciones y
          consultas técnicas. Respondo rápido por mail o LinkedIn.
        </p>

        <div class="contact__actions">
          <a
            class="btn btn--primary"
            :href="`mailto:${personal.email}`"
          >
            <AppIcon
              name="mail"
              :size="18"
            />
            {{ personal.email }}
          </a>
          <a
            class="btn btn--ghost"
            :href="personal.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon
              name="linkedin"
              :size="18"
            />
            LinkedIn
          </a>
          <a
            class="btn btn--ghost"
            :href="personal.cvDownload"
            download
          >
            <AppIcon
              name="download"
              :size="18"
            />
            Descargar CV
          </a>
        </div>

        <p class="contact__location mono">
          {{ personal.location }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  max-width: 640px;
  margin-inline: auto;
  text-align: center;
  padding: 56px 24px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
}

.contact__eyebrow {
  margin: 0 0 8px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.8rem;
}

.contact__title {
  margin: 0 0 12px;
}

.contact__lead {
  color: var(--text-muted);
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.contact__location {
  margin: 24px 0 0;
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>

<script setup lang="ts">
import { projects } from '~/data/portfolio'

const workProjects = computed(() => projects.filter(p => p.kind === 'trabajo'))
const personalProjects = computed(() => projects.filter(p => p.kind === 'personal'))
</script>

<template>
  <section
    id="proyectos"
    class="section section--alt"
    aria-labelledby="proyectos-titulo"
  >
    <div class="container">
      <SectionHeading
        id="proyectos-titulo"
        eyebrow="Trabajo real"
        title="Proyectos"
        lead="Proyectos basados en mi experiencia profesional y proyectos personales. Cada caso detalla el problema, la solución, el stack y el resultado."
      />

      <div class="projects">
        <h3 class="projects__subtitle">
          En empresas
        </h3>
        <div class="projects__grid">
          <ProjectCard
            v-for="(project, index) in workProjects"
            :key="project.title"
            v-reveal="{ delay: index * 60 }"
            :project="project"
            :index="index"
          />
        </div>

        <h3 class="projects__subtitle projects__subtitle--alt">
          Proyectos personales
        </h3>
        <div class="projects__grid">
          <ProjectCard
            v-for="(project, index) in personalProjects"
            :key="project.title"
            v-reveal="{ delay: index * 60 }"
            :project="project"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  gap: 12px;
}

.projects__subtitle {
  margin: 12px 0 4px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.projects__subtitle--alt {
  margin-top: 24px;
}

.projects__grid {
  display: grid;
  gap: 14px;
}
</style>

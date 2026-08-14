<script setup lang="ts">
import { skillGroups } from '~/data/portfolio'
</script>

<template>
  <section
    id="skills"
    class="section"
    aria-labelledby="skills-titulo"
  >
    <div class="container">
      <SectionHeading
        id="skills-titulo"
        eyebrow="Stack"
        title="Skills"
        lead="Tecnologías y metodologías que aplico día a día, agrupadas por área."
      />

      <div class="skills">
        <article
          v-for="(group, index) in skillGroups"
          :key="group.title"
          v-reveal="{ delay: index * 60 }"
          class="skill-group"
        >
          <h3 class="skill-group__title">
            {{ group.title }}
          </h3>
          <ul
            class="skill-group__list"
            aria-label="Habilidades de {{ group.title }}"
          >
            <li
              v-for="skill in group.skills"
              :key="skill"
              class="skill-group__item"
            >
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.skill-group {
  padding: 20px 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  box-shadow: var(--shadow-sm);
}

.skill-group__title {
  margin: 0 0 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
  font-size: 1rem;
}

.skill-group__list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.skill-group__item {
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg-soft);
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 500;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.skill-group__item:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>

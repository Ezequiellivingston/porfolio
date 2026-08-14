<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () =>
  queryCollection('articles')
    .where('published', '=', true)
    .order('date', 'DESC')
    .select('title', 'description', 'date', 'path')
    .all(),
)

useSeoMeta({
  title: 'Artículos',
  description: 'Artículos técnicos sobre frontend: Vue, React, TypeScript y arquitectura.',
  ogTitle: 'Artículos · Pablo Livingston',
  ogDescription: 'Artículos técnicos sobre frontend: Vue, React, TypeScript y arquitectura.',
})
</script>

<template>
  <section class="section articles-page">
    <div class="container">
      <SectionHeading
        id="articulos-titulo"
        eyebrow="Blog"
        title="Artículos"
        lead="Notas técnicas sobre frontend, arquitectura y buenas prácticas."
      />

      <p
        v-if="articles && articles.length === 0"
        class="articles-empty"
      >
        Todavía no hay artículos publicados. Próximamente.
      </p>

      <ul
        v-else
        class="articles-list"
      >
        <li
          v-for="article in articles"
          :key="article.path"
          v-reveal
        >
          <NuxtLink
            :to="`/articulos/${article.path.split('/').pop()}`"
            class="article-card"
          >
            <div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
              <time :datetime="article.date">{{ new Date(article.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
            </div>
            <AppIcon
              name="arrow"
              :size="20"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.articles-page {
  min-height: 60vh;
}

.articles-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.article-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-elevated);
  color: var(--text);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.article-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  color: var(--text);
}

.article-card h3 {
  margin: 0 0 6px;
}

.article-card p {
  margin: 0 0 8px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.article-card time {
  color: var(--text-muted);
  font-size: 0.8rem;
  font-family: var(--mono);
}

.articles-empty {
  color: var(--text-muted);
}
</style>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`article-${route.params.slug}`, () =>
  queryCollection('articles')
    .where('path', '=', `/articles/${route.params.slug}`)
    .first(),
)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado', fatal: true })
}

const article = data.value

useSeoMeta({
  title: () => article.title,
  description: () => article.description ?? '',
  ogTitle: () => article.title,
  ogDescription: () => article.description ?? '',
})
</script>

<template>
  <article class="section article-page">
    <div class="container article-page__inner">
      <header class="article-header">
        <p class="mono article-header__meta">
          <time :datetime="article.date">
            {{ new Date(article.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </time>
        </p>
        <h1>{{ article.title }}</h1>
        <p
          v-if="article.description"
          class="article-header__lead"
        >
          {{ article.description }}
        </p>
        <ul
          v-if="article.tags?.length"
          class="article-header__tags"
          aria-label="Etiquetas"
        >
          <li
            v-for="tag in article.tags"
            :key="tag"
            class="mono"
          >
            {{ tag }}
          </li>
        </ul>
      </header>

      <ContentRenderer
        :value="article"
        class="article-body"
      />
    </div>
  </article>
</template>

<style scoped>
.article-page__inner {
  max-width: 720px;
}

.article-header {
  margin-bottom: 40px;
}

.article-header__meta {
  margin: 0 0 8px;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.article-header__lead {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.article-header__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
}

.article-header__tags li {
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
}
</style>

<style>
.article-body {
  color: var(--text-muted);
  font-size: 1.02rem;
}

.article-body h1,
.article-body h2,
.article-body h3 {
  color: var(--text);
  margin-top: 1.6em;
}

.article-body h2 {
  font-size: 1.45rem;
}

.article-body pre {
  padding: 16px 20px;
  border-radius: var(--radius-sm);
  background: var(--bg-soft);
  border: 1px solid var(--border);
  overflow-x: auto;
}

.article-body code {
  font-family: var(--mono, ui-monospace, monospace);
  font-size: 0.9em;
}

.article-body p code {
  padding: 2px 6px;
  border-radius: 6px;
  background: var(--bg-soft);
}

.article-body blockquote {
  margin: 0;
  padding-left: 16px;
  border-left: 3px solid var(--accent);
  color: var(--text-muted);
}
</style>

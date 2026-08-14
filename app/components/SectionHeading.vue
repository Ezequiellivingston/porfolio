<script setup lang="ts">
defineProps<{
  id: string
  eyebrow: string
  title: string
  lead?: string
}>()
</script>

<template>
  <div
    :id="id"
    class="section-heading"
  >
    <p class="section-heading__eyebrow mono">
      {{ eyebrow }}
    </p>
    <h2>{{ title }}</h2>
    <p
      v-if="lead"
      class="section-heading__lead"
    >
      {{ lead }}
    </p>
  </div>
</template>

<style scoped>
.section-heading {
  max-width: 720px;
  margin-bottom: 40px;
}

.section-heading__eyebrow {
  margin: 0 0 8px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.8rem;
}

.section-heading__lead {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin: 12px 0 0;
}
</style>

<script setup lang="ts">
import { personal, socials } from '~/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__name mono">
        © {{ year }} {{ personal.shortName }} · Frontend Engineer
      </p>

      <nav
        class="footer__nav"
        aria-label="Redes sociales"
      >
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__icon"
          :aria-label="`${social.label} (se abre en una pestaña nueva)`"
          :title="social.label"
        >
          <AppIcon
            :name="social.icon"
            :size="18"
          />
          <span>{{ social.label }}</span>
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: 32px;
  background: var(--bg-elevated);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer__name {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer__nav {
  display: flex;
  align-items: center;
  gap: 18px;
}

.footer__icon {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer__icon:hover {
  color: var(--accent);
}
</style>

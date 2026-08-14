<script setup lang="ts">
import { personal, socials } from '~/data/portfolio'

const navLinks = [
  { to: '/#experiencia', label: 'Experiencia' },
  { to: '/#proyectos', label: 'Proyectos' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#contacto', label: 'Contacto' },
  { to: '/articulos', label: 'Artículos' },
]

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function onHashClick() {
  closeMenu()
}
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <NuxtLink
        to="/"
        class="header__brand"
        aria-label="Ir al inicio"
      >
        <span
          class="header__brand-dot"
          aria-hidden="true"
        />
        <span class="mono">{{ personal.shortName }}</span>
      </NuxtLink>

      <nav
        class="header__nav"
        :class="{ 'is-open': menuOpen }"
        aria-label="Navegación principal"
      >
        <ul class="header__links">
          <li
            v-for="link in navLinks"
            :key="link.label"
          >
            <NuxtLink
              :to="link.to"
              class="header__link"
              @click="onHashClick"
            >{{ link.label }}</NuxtLink>
          </li>
        </ul>

        <div class="header__actions">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="header__icon"
            :aria-label="`${social.label} (se abre en una pestaña nueva)`"
            :title="social.label"
          >
            <AppIcon
              :name="social.icon"
              :size="18"
            />
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <button
        type="button"
        class="header__burger"
        :aria-expanded="menuOpen"
        aria-controls="menu"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="menuOpen = !menuOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
  gap: 16px;
}

.header__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: var(--text);
}

.header__brand:hover {
  color: var(--accent);
}

.header__brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__link {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 500;
}

.header__link:hover,
.header__link.router-link-active {
  color: var(--text);
  background: var(--bg-soft);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  color: var(--text-muted);
}

.header__icon:hover {
  color: var(--accent);
  background: var(--bg-soft);
}

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-elevated);
  cursor: pointer;
}

.header__burger span {
  display: block;
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.header__burger[aria-expanded='true'] span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__burger[aria-expanded='true'] span:nth-child(2) {
  opacity: 0;
}

.header__burger[aria-expanded='true'] span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 820px) {
  .header__burger {
    display: flex;
  }

  .header__nav {
    position: absolute;
    top: var(--header-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 16px 20px 24px;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-md);
    transform: translateY(-12px);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      visibility 0.2s;
  }

  .header__nav.is-open {
    transform: none;
    opacity: 1;
    visibility: visible;
  }

  .header__links {
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
  }

  .header__link {
    display: block;
    padding: 10px 12px;
  }

  .header__actions {
    justify-content: flex-start;
  }
}
</style>

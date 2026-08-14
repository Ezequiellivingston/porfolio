<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
    :title="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
    @click="toggle"
  >
    <AppIcon
      :name="isDark ? 'sun' : 'moon'"
      :size="18"
    />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  color: var(--text-muted);
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
}

.theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.theme-toggle:active {
  transform: scale(0.95);
}
</style>

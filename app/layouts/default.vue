<script setup lang="ts">
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <a
      href="#contenido"
      class="skip-link"
    >Saltar al contenido</a>

    <AppHeader />

    <main id="contenido">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

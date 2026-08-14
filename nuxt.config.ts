// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxt/content', '@nuxt/eslint'],
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      titleTemplate: '%s · Pablo Livingston',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio de Pablo Livingston, Frontend Engineer especializado en React, TypeScript, Vue.js, React Native, visualización de datos y arquitectura frontend.',
        },
        { name: 'theme-color', content: '#4f46e5' },
        { name: 'color-scheme', content: 'light dark' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pablo Livingston' },
        {
          property: 'og:title',
          content: 'Pablo Livingston · Frontend Engineer',
        },
        {
          property: 'og:description',
          content:
            'Frontend Engineer especializado en React, TypeScript, Vue.js, React Native y visualización de datos.',
        },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    dataValue: 'theme',
  },

  content: {
    // Habilitado para incorporar artículos técnicos en el futuro.
    build: { markdown: { highlight: false } },
  },

  routeRules: {
    '/': { prerender: true },
    '/articulos/**': { prerender: true },
  },
  compatibilityDate: '2025-07-15',

  nitro: {
    // `nuxt generate` → static hosting (Vercel/Cloudflare Pages).
    // Para deploy de SSR en Vercel/Cloudflare se usa el preset correspondiente automáticamente.
    prerender: {
      routes: ['/'],
    },
  },
})

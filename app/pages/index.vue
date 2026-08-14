<script setup lang="ts">
import { personal } from '~/data/portfolio'

useSeoMeta({
  title: 'Frontend Engineer',
  description:
    'Portfolio de Pablo Livingston, Frontend Engineer especializado en React, TypeScript, Vue.js, React Native, visualización de datos y arquitectura frontend.',
  ogTitle: 'Pablo Livingston · Frontend Engineer',
  ogDescription:
    'Frontend Engineer especializado en React, TypeScript, Vue.js, React Native y visualización de datos.',
  ogType: 'website',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': personal.name,
  'jobTitle': 'Frontend Engineer',
  'email': `mailto:${personal.email}`,
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Buenos Aires',
    'addressCountry': 'AR',
  },
  'sameAs': [personal.linkedin, personal.github],
  'knowsAbout': [
    'React',
    'TypeScript',
    'Vue.js',
    'React Native',
    'Data Visualization',
    'Frontend Architecture',
    'Accessibility',
  ],
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
      tagPosition: 'head',
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

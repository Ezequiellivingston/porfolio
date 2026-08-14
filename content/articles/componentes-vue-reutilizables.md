---
title: 'Componentes reutilizables con Vue 3: cómo estructurarlos sin sobre-ingeniería'
description: 'Guía práctica para diseñar componentes Vue 3 reutilizables con TypeScript, aplicando los patrones que uso en proyectos reales de dashboards.'
date: '2026-01-15'
tags:
  - Vue
  - TypeScript
  - Arquitectura
published: true
---

# Componentes reutilizables con Vue 3

Los componentes reutilizables son la base de un frontend mantenible. En este artículo comparto el enfoque que aplico en proyectos reales de dashboards y aplicaciones empresariales.

## Empezá por la API del componente

Antes de escribir código, definí las props como contrato público. Con TypeScript:

```ts
defineProps<{
  items: Metric[]
  loading?: boolean
  error?: string | null
}>()
```

## Estados explícitos

Siempre modelé los tres estados: `loading`, `error` y `data`. Esto evita pantallas en blanco y mejora la accesibilidad.

## El truco de la composición

Para componentes complejos, separá la lógica en composables y dejá el componente como capa de presentación.
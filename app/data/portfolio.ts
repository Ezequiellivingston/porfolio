export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'mail'
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  stack: string[]
}

export interface Project {
  title: string
  company: string
  year: string
  kind: 'trabajo' | 'personal'
  url?: string
  problem: string
  solution: string
  stack: string[]
  result: string[]
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export const personal = {
  name: 'Pablo Ezequiel Livingston',
  shortName: 'Pablo Livingston',
  role: 'Frontend Engineer',
  tagline:
    'Construyo aplicaciones web empresariales, dashboards y visualización de datos en tiempo real con React, Vue.js, TypeScript y React Native.',
  location: 'Buenos Aires, Argentina',
  email: 'pabloezelivingston@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pablo-ezequiel-livingston',
  github: 'https://github.com/pabloezelivingston',
  cvDownload: '/CV.md',
}

export const socials: SocialLink[] = [
  { label: 'GitHub', url: personal.github, icon: 'github' },
  { label: 'LinkedIn', url: personal.linkedin, icon: 'linkedin' },
  { label: 'Email', url: `mailto:${personal.email}`, icon: 'mail' },
]

export const experience: Experience[] = [
  {
    company: 'SOFRE DIGITAL',
    role: 'Desarrollador Front-End / Mobile',
    period: '10/2022 – Presente',
    location: 'Buenos Aires, Argentina',
    highlights: [
      'Desarrollo y evolución de la plataforma de retención e indicadores comerciales con Vue.js y React, construyendo más de 20 funcionalidades y componentes web reutilizables orientados a tableros de gestión.',
      'Arquitectura móvil escalable con React Native para la aplicación de fidelización y cupones, optimizando experiencia de usuario y rendimiento.',
      'Maquetación responsiva a partir de prototipos en Figma para la landing page comercial y el backoffice administrativo.',
      'Integración de más de 10 APIs REST con manejo riguroso de estados (loading, error, caching) y autenticación segura.',
      'Buenas prácticas de ingeniería frontend, code reviews, integración de asistentes de IA (Cursor/Copilot) y gestión de tareas en Jira/GitLab.',
    ],
    stack: ['Vue.js', 'React', 'React Native', 'TypeScript', 'Pinia', 'Figma', 'REST'],
  },
  {
    company: 'LEAPSIGHT',
    role: 'Desarrollador Front-End',
    period: '11/2021 – 10/2022',
    location: 'Buenos Aires, Argentina',
    highlights: [
      'Desarrollo y mantenimiento de la plataforma enterprise de seguimiento y monitoreo vehicular en tiempo real con Vue.js y TypeScript.',
      'Más de 15 funcionalidades de visualización de datos, geolocalización, tableros de métricas y gráficos interactivos para la supervisión de miles de dispositivos conectados.',
      'Integración de datos críticos en tiempo real mediante WebSockets y APIs RESTful con manejo optimizado de estado de aplicación.',
      'Arquitectura basada en Micro-Frontends para garantizar modularidad, mantenibilidad y altos estándares de accesibilidad y rendimiento.',
    ],
    stack: ['Vue.js', 'TypeScript', 'WebSockets', 'REST', 'Micro-Frontends', 'Chart.js', 'ECharts'],
  },
  {
    company: 'MATCHUP',
    role: 'Desarrollador Front-End',
    period: '01/2021 – 11/2021',
    location: 'Buenos Aires, Argentina',
    highlights: [
      'Landing page comercial con React y sistema web de gestión documental para trámites estudiantiles con Vue.js.',
      'Traducción de diseños UX/UI desde Figma / Adobe XD a componentes web nativos, responsivos y accesibles.',
      'Consumo e integración de APIs REST para flujos complejos de formularios, carga de archivos y gestión de estados de procesos.',
    ],
    stack: ['React', 'Vue.js', 'TypeScript', 'Figma', 'Adobe XD', 'REST'],
  },
  {
    company: 'SYSTELEC',
    role: 'Desarrollador Full-Stack / Frontend',
    period: '04/2019 – 12/2020',
    location: 'Buenos Aires, Argentina',
    highlights: [
      'Dashboards e interfaces web para monitoreo y visualización de datos y métricas operativas de planta industrial en tiempo real.',
      'Interfaces dinámicas con Vue.js y React conectadas mediante WebSockets y APIs REST.',
      'Gestión de estado complejo mediante Vuex/Context API e interacción con bases de datos relacionales (SQL Server).',
    ],
    stack: ['Vue.js', 'React', 'Vuex', 'Context API', 'WebSockets', 'SQL Server'],
  },
]

export const projects: Project[] = [
  {
    title: 'Club Ganga',
    company: 'Proyecto personal',
    year: 'En línea',
    kind: 'personal',
    url: 'https://club-ganga.pages.dev/',
    problem:
      'Un club de beneficios necesitaba una web donde los usuarios pudieran descubrir promos reales, filtrarlas por categoría y día, y acceder a un plan premium sin fricción.',
    solution:
      'Construí una plataforma completa en Nuxt + TypeScript: catálogo de beneficios filtrable por categoría y día, plan Gold por suscripción (ARS $3.000/mes), login con Google, sección "Cerca tuyo" con geolocalización y sistema de canjes. Deployada en Cloudflare Pages.',
    stack: ['Nuxt', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'OAuth (Google)', 'Cloudflare Pages'],
    result: [
      'Beneficios reales de marcas publicados con categorías y planes Classic/Gold.',
      'Autenticación con Google integrada para el flujo de canjes.',
      'Sitio estático de alto rendimiento en Cloudflare Pages.',
    ],
  },
  {
    title: 'Génesis Home',
    company: 'Proyecto personal',
    year: 'En línea',
    kind: 'personal',
    url: 'https://genesishome.com.ar/',
    problem:
      'Una tienda de muebles de diseño necesitaba vender online con catálogo, sin la complejidad de un checkout tradicional y con asesoramiento personalizado.',
    solution:
      'Desarrollé un e-commerce en Nuxt con Nuxt UI: catálogo por categorías (salas, baños, comedor), fichas de producto con precios y descuentos, compra asistida por WhatsApp, testimonios, FAQ, formulario de contacto y analytics.',
    stack: ['Nuxt', 'Vue 3', 'TypeScript', 'Nuxt UI', 'Tailwind CSS', 'Google Analytics'],
    result: [
      'Tienda online con catálogo completo y venta por WhatsApp a todo el país.',
      'Testimonios reales y flujo de asesoramiento sin checkout.',
      'SEO local y analytics para medir el tráfico.',
    ],
  },
  {
    title: 'Plataforma de retención e indicadores comerciales',
    company: 'SOFRE DIGITAL',
    year: '2022 – presente',
    kind: 'trabajo',
    problem:
      'Un negocio de consumo necesitaba consolidar la retención de clientes y los indicadores comerciales en una plataforma única, con dashboards accesibles para equipos de gestión.',
    solution:
      'Construí una plataforma web modular con Vue.js y React: más de 20 funcionalidades y componentes reutilizables, integración de 10+ APIs REST con estados robustos (loading, error, caching) y autenticación segura. Complementé el ecosistema con una app móvil de fidelización y cupones en React Native.',
    stack: ['Vue.js', 'React', 'React Native', 'Pinia', 'REST', 'Figma'],
    result: [
      'Componentes reutilizables que aceleraron el desarrollo de nuevos tableros.',
      'Experiencia móvil optimizada para la app de fidelización.',
      'Manejo de estados predecible en todas las integraciones de APIs.',
    ],
  },
  {
    title: 'Plataforma de monitoreo vehicular en tiempo real',
    company: 'LEAPSIGHT',
    year: '2021 – 2022',
    kind: 'trabajo',
    problem:
      'Supervisar miles de dispositivos conectados en tiempo real con una plataforma enterprise que mantuviera modularidad y alto rendimiento.',
    solution:
      'Desarrollé la plataforma con Vue.js y TypeScript: 15+ funcionalidades de visualización de datos, geolocalización y tableros de métricas, alimentadas por WebSockets. Adopté una arquitectura de Micro-Frontends para garantizar escalabilidad y mantenibilidad.',
    stack: ['Vue.js', 'TypeScript', 'WebSockets', 'Chart.js', 'ECharts', 'Micro-Frontends'],
    result: [
      'Supervisión estable de miles de dispositivos conectados en tiempo real.',
      'Gráficos interactivos y tableros de métricas para la toma de decisiones.',
      'Arquitectura modular y mantenible a largo plazo.',
    ],
  },
  {
    title: 'Sistema de gestión documental para trámites estudiantiles',
    company: 'MATCHUP',
    year: '2021',
    kind: 'trabajo',
    problem:
      'Digitalizar trámites estudiantiles con formularios complejos, carga de archivos y seguimiento de estados de proceso.',
    solution:
      'Implementé un sistema web con Vue.js y una landing page comercial con React, traduciendo los diseños de Figma/Adobe XD a componentes nativos, responsivos y accesibles, e integrando APIs REST para los flujos de proceso.',
    stack: ['React', 'Vue.js', 'TypeScript', 'REST', 'Figma', 'Adobe XD'],
    result: [
      'Flujos de formularios y carga de archivos estables y accesibles.',
      'Interfaz responsiva alineada al diseño aprobado.',
      'Gestión de estados de proceso transparente para el estudiante.',
    ],
  },
  {
    title: 'Dashboards de monitoreo industrial en tiempo real',
    company: 'SYSTELEC',
    year: '2019 – 2020',
    kind: 'trabajo',
    problem:
      'Monitorear métricas operativas de una planta industrial en tiempo real para el equipo de gestión.',
    solution:
      'Construí dashboards e interfaces dinámicas con Vue.js y React, conectadas por WebSockets y APIs REST, con gestión de estado complejo mediante Vuex/Context API y persistencia en SQL Server.',
    stack: ['Vue.js', 'React', 'Vuex', 'Context API', 'WebSockets', 'SQL Server'],
    result: [
      'Visualización en tiempo real de métricas operativas de planta.',
      'Estado complejo gestionado de forma predecible.',
      'Integración con datos relacionales del negocio.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core & Frameworks',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Vue.js (Vue 2/3)', 'Vuex / Pinia', 'HTML5', 'CSS3 / Sass'],
  },
  {
    title: 'Data Viz & Dashboards',
    skills: ['Visualización de datos', 'Chart.js', 'Recharts', 'ECharts', 'Métricas e indicadores BI', 'WebSockets (Real-time)'],
  },
  {
    title: 'Mobile & UI/UX',
    skills: ['React Native', 'Responsive / Mobile-first', 'Figma', 'Adobe XD', 'Accesibilidad Web (A11Y)'],
  },
  {
    title: 'Testing & Calidad',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Pruebas unitarias', 'Code Reviews', 'Pair Programming'],
  },
  {
    title: 'Herramientas & CI/CD',
    skills: ['Git / GitLab', 'Azure DevOps', 'Jira', 'Postman', 'AI Coding Assistants', 'SQL Server', 'MongoDB'],
  },
]

export const metrics = [
  { value: '20+', label: 'funcionalidades y componentes web' },
  { value: '10+', label: 'integraciones de APIs REST' },
  { value: '15+', label: 'funcionalidades de data viz' },
  { value: '5+', label: 'años de experiencia frontend' },
]

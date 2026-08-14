import type { Directive } from 'vue'

const prefersReducedMotion = () =>
  typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default <Directive<HTMLElement>>{
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    const delay = Number(binding.value ?? 0)
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
  },
}

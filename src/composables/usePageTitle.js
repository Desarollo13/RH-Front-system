import { ref, inject, provide } from 'vue'

const key = Symbol('pageTitle')

export function providePageTitle() {
  const title = ref('')
  provide(key, title)
  return title
}

export function usePageTitle() {
  const title = inject(key)
  if (!title) throw new Error('usePageTitle() debe usarse dentro de providePageTitle()')
  return title
}

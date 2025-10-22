import Alpine from 'alpinejs'

export default defineNuxtPlugin(() => {
  if (process.client) {
    if (!window.Alpine) {
      window.Alpine = Alpine
      window.Alpine.start()
    } else {
      window.Alpine = Alpine
    }
  }
})

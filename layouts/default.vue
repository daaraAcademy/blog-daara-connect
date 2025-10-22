<template>
  <div>
    <Preloader v-if="loading" />
    <AppHeader />
    <slot />
    <AppFooter />
    <ModalNewsletter />
    <ModalSearch />
    <ScrollTopButton />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const loading = ref(true)
const timer = ref<number | null>(null)
const { stickyMenu, scrollTop, navigationOpen, modalNewsletter, modalSearch } = useUiState()
const route = useRoute()

const updateScrollState = () => {
  const currentScroll = window.scrollY || window.pageYOffset
  stickyMenu.value = currentScroll > 0
  scrollTop.value = currentScroll > 300
}

onMounted(() => {
  timer.value = window.setTimeout(() => {
    loading.value = false
  }, 500)

  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

watch(
  () => route.fullPath,
  () => {
    navigationOpen.value = false
  }
)

watch(
  [navigationOpen, modalNewsletter, modalSearch],
  (values) => {
    if (!process.client) {
      return
    }
    const isBlocked = values.some(Boolean)
    document.body.style.overflow = isBlocked ? 'hidden' : ''
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (timer.value) {
    window.clearTimeout(timer.value)
  }
  window.removeEventListener('scroll', updateScrollState)
})
</script>

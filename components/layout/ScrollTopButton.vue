<template>
  <button
    class="fixed bottom-8 right-8 hidden h-10 w-10 items-center justify-center rounded-[4px] bg-dark shadow-solid-5 transition duration-200 ease-linear hover:opacity-95"
    :class="scrollTop ? 'flex' : ''"
    type="button"
    aria-label="Revenir en haut"
    @click="scrollToTop"
  >
    <svg class="h-5 w-5 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
const { scrollTop } = useUiState()

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

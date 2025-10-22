<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useError } from '#app'
import content from '~/assets/html/error-page.html?raw'

const props = defineProps<{ error: { statusCode?: number } }>()
const { clearError } = useError()

useHead({
  title: props.error?.statusCode === 404 ? 'Page introuvable' : 'Erreur inattendue'
})

onMounted(() => {
  if (props.error?.statusCode && props.error.statusCode !== 404) {
    clearError()
  }
})
</script>

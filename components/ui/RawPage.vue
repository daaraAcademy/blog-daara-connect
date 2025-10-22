<template>
  <div ref="container" v-html="content"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{ content: string }>()
const container = ref<HTMLElement | null>(null)

const initAlpine = () => {
  if (process.client && container.value && window.Alpine) {
    window.Alpine.initTree(container.value)
  }
}

onMounted(() => {
  initAlpine()
})

watch(
  () => props.content,
  () => {
    nextTick(() => {
      initAlpine()
    })
  }
)
</script>

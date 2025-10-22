<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/blog-archive.html?raw'

useHead({
  title: 'Archives du blog',
  meta: [
    {
      name: 'description',
      content: 'Retrouvez toutes les publications classées par année et par thématique dans les archives Daara Connect.'
    }
  ]
})
</script>

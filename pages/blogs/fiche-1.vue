<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/blog-single-1.html?raw'

useHead({
  title: 'Détail d’article – Edition 1',
  meta: [
    {
      name: 'description',
      content: 'Plongez dans notre analyse complète pour bâtir un blog performant et durable.'
    }
  ]
})
</script>

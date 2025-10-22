<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/blog-single-2.html?raw'

useHead({
  title: 'Détail d’article – Edition 2',
  meta: [
    {
      name: 'description',
      content: 'Stratégies marketing, SEO et engagement : retrouvez toutes les clés dans cet article détaillé.'
    }
  ]
})
</script>

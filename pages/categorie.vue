<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/category.html?raw'

useHead({
  title: 'Catégories d’articles',
  meta: [
    {
      name: 'description',
      content: 'Parcourez les catégories du blog Daara Connect pour trouver des ressources adaptées à vos ambitions.'
    }
  ]
})
</script>

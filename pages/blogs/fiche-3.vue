<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/blog-single-3.html?raw'

useHead({
  title: 'Détail d’article – Edition 3',
  meta: [
    {
      name: 'description',
      content: 'Étude de cas, résultats chiffrés et bonnes pratiques pour accélérer votre croissance éditoriale.'
    }
  ]
})
</script>

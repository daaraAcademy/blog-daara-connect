<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/blog-personnel.html?raw'

useHead({
  title: 'Blog personnel',
  meta: [
    {
      name: 'description',
      content: 'Récits inspirants, carnets de voyage et billets d’humeur pour nourrir votre créativité au quotidien.'
    }
  ]
})
</script>

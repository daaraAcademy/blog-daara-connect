<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/signup.html?raw'

useHead({
  title: 'Inscription',
  meta: [
    {
      name: 'description',
      content: 'Rejoignez la communauté Daara Connect pour sauvegarder vos lectures et recevoir des actualités personnalisées.'
    }
  ]
})
</script>

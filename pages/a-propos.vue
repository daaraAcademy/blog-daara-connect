<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/about.html?raw'

useHead({
  title: 'À propos',
  meta: [
    {
      name: 'description',
      content: 'Rencontrez l’équipe Daara Connect et découvrez notre mission : connecter les talents africains grâce au contenu.'
    }
  ]
})
</script>

<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/author.html?raw'

useHead({
  title: 'Profil auteur',
  meta: [
    {
      name: 'description',
      content: 'Découvrez le parcours et les publications phares de nos auteurs mis à l’honneur sur Daara Connect.'
    }
  ]
})
</script>

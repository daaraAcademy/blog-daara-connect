<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/home.html?raw'

useHead({
  title: 'Accueil',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez les dernières actualités, interviews et conseils pour développer votre présence numérique avec Daara Connect.'
    }
  ]
})
</script>

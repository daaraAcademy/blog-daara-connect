<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/signin.html?raw'

useHead({
  title: 'Connexion',
  meta: [
    {
      name: 'description',
      content: 'Connectez-vous à votre espace Daara Connect pour gérer vos abonnements et vos contributions.'
    }
  ]
})
</script>

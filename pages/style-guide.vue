<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/style-guide.html?raw'

useHead({
  title: 'Guide de style',
  meta: [
    {
      name: 'description',
      content: 'Explorez le système visuel et typographique du blog Daara Connect pour garantir une identité homogène.'
    }
  ]
})
</script>

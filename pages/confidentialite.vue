<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/privacy.html?raw'

useHead({
  title: 'Politique de confidentialité',
  meta: [
    {
      name: 'description',
      content: 'Consultez la politique de confidentialité de Daara Connect pour comprendre comment nous protégeons vos données.'
    }
  ]
})
</script>

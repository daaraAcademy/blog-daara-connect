<template>
  <RawPage :content="content" />
</template>

<script setup lang="ts">
import content from '~/assets/html/search.html?raw'

useHead({
  title: 'Recherche',
  meta: [
    {
      name: 'description',
      content: 'Trouvez instantanément les articles, auteurs et thématiques qui vous intéressent sur Daara Connect.'
    }
  ]
})
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: (chunk) =>
        chunk ? `${chunk} · Daara Connect Blog` : 'Daara Connect Blog',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Daara Connect Blog propose des articles inspirants pour les entrepreneurs et les créateurs africains.'
        }
      ]
    }
  },
  css: ['~/assets/css/style.css'],
  experimental: {
    inlineSSRStyles: false
  },
  nitro: {
    prerender: {
      routes: ['/', '/blog/personnel', '/a-propos', '/auteur', '/blogs/archives', '/blogs/fiche-1', '/blogs/fiche-2', '/blogs/fiche-3', '/categorie', '/connexion', '/inscription', '/recherche', '/style-guide', '/confidentialite']
    }
  }
})

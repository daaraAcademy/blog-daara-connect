<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modalSearch" class="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-5">
        <div class="fixed inset-0 bg-[#000]/25 backdrop-blur-xs" @click="modalSearch = false"></div>
        <Transition name="slide-up">
          <div
            v-if="modalSearch"
            class="relative z-[1] w-full max-w-[700px] overflow-hidden rounded-lg bg-white shadow-box-2 transition ease-in"
          >
            <form>
              <div class="relative">
                <button class="absolute left-0 top-0 flex items-center justify-center py-6.5 pl-7 pr-3" type="submit">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2813 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1563 18.5625 19.2813 18.4063C19.5313 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2813 4.53125C14.6563 6.90625 14.6563 10.75 12.2813 13.0938C11.1563 14.25 9.625 14.875 8 14.875Z"
                      fill="#15171A"
                    />
                  </svg>
                </button>

                <input
                  id="search"
                  v-model="query"
                  type="search"
                  autocomplete="off"
                  placeholder="Recherchez un article, un tag ou un auteur"
                  class="w-full rounded-t-lg bg-white py-6 pl-15 pr-3 text-body outline-hidden transition duration-300 ease-in placeholder:text-dark-3"
                />

                <button
                  type="button"
                  class="absolute right-7 top-4.5 flex h-9 w-9 items-center justify-center rounded-full transition duration-150 ease-in hover:bg-gray-2 hover:text-dark"
                  @click="modalSearch = false"
                  aria-label="Fermer la recherche"
                >
                  <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.7001 6.99998L13.0376 1.66248C13.2345 1.4656 13.2345 1.15935 13.0376 0.962476C12.8407 0.765601 12.5345 0.765601 12.3376 0.962476L7.0001 6.29998L1.6626 0.962476C1.46572 0.765601 1.15947 0.765601 0.962598 0.962476C0.765723 1.15935 0.765723 1.4656 0.962598 1.66248L6.3001 6.99998L0.962598 12.3375C0.765723 12.5344 0.765723 12.8406 0.962598 13.0375C1.0501 13.125 1.18135 13.1906 1.3126 13.1906C1.44385 13.1906 1.5751 13.1469 1.6626 13.0375L7.0001 7.69998L12.3376 13.0375C12.4251 13.125 12.5563 13.1906 12.6876 13.1906C12.8188 13.1906 12.9501 13.1469 13.0376 13.0375C13.2345 12.8406 13.2345 12.5344 13.0376 12.3375L7.7001 6.99998Z"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <div class="border-y border-gray-3 px-4 py-3 lg:px-7 lg:py-4.5">
              <h5 class="font-medium text-dark">Articles populaires</h5>
            </div>

            <div class="py-3.5">
              <div v-for="item in filteredResults" :key="item.title" class="cursor-pointer px-4 py-3.5 transition duration-300 ease-in hover:bg-gray lg:px-7">
                <h6 class="mb-1.5 font-medium text-dark">{{ item.title }}</h6>
                <p class="text-custom-sm">{{ item.excerpt }}</p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const { modalSearch } = useUiState()

const query = ref('')

const results = [
  {
    title: 'Piloter la croissance de votre média en ligne',
    excerpt: 'Découvrez comment structurer vos contenus pour gagner du trafic organique.'
  },
  {
    title: '10 idées d’articles pour inspirer votre audience',
    excerpt: 'Une sélection de thématiques pour alimenter votre calendrier éditorial.'
  },
  {
    title: 'Monétiser sa newsletter : méthodes et outils',
    excerpt: 'Les stratégies qui fonctionnent pour transformer vos lecteurs en clients.'
  },
  {
    title: 'Construire une communauté engagée autour de votre blog',
    excerpt: 'Conseils pour fidéliser vos lecteurs et encourager l’interaction.'
  }
]

const filteredResults = computed(() => {
  if (!query.value) {
    return results
  }
  const search = query.value.toLowerCase()
  return results.filter((item) =>
    [item.title, item.excerpt].some((text) => text.toLowerCase().includes(search))
  )
})

watch(modalSearch, (open) => {
  if (!open) {
    query.value = ''
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modalNewsletter"
        class="fixed left-0 top-0 z-[99999] flex h-full min-h-screen w-full items-center justify-center bg-[#000]/25 px-4 py-5 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        @click.self="modalNewsletter = false"
      >
        <Transition name="scale">
          <div
            v-if="modalNewsletter"
            class="relative w-full max-w-[600px] scale-100 rounded-2xl bg-white p-4 shadow-box-2 transition-all sm:p-7.5 xl:p-12.5"
          >
            <button
              class="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full transition duration-150 ease-in hover:bg-gray-2 hover:text-dark"
              @click="modalNewsletter = false"
              aria-label="Fermer la fenêtre d'inscription"
            >
              <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.22505 1.22474C1.46912 0.980668 1.86486 0.980668 2.10893 1.22474L10.0003 9.1161L17.8917 1.22474C18.1358 0.980668 18.5315 0.980668 18.7756 1.22474C19.0197 1.46882 19.0197 1.86455 18.7756 2.10863L10.8842 10L18.7756 17.8914C19.0197 18.1355 19.0197 18.5312 18.7756 18.7753C18.5315 19.0194 18.1358 19.0194 17.8917 18.7753L10.0003 10.8839L2.10893 18.7753C1.86486 19.0194 1.46912 19.0194 1.22505 18.7753C0.980973 18.5312 0.980973 18.1355 1.22505 17.8914L9.11641 10L1.22505 2.10863C0.980973 1.86455 0.980973 1.46882 1.22505 1.22474Z"
                />
              </svg>
            </button>

            <h3 id="newsletter-title" class="mb-1.5 text-heading-5 font-semibold text-dark">Newsletter</h3>
            <p>Recevez les nouveaux articles et ressources directement par email.</p>

            <form class="mt-7.5" @submit.prevent="modalNewsletter = false">
              <div class="mb-5.5">
                <label for="modal-email" class="mb-2.5 block font-medium text-dark">Email</label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="Votre email"
                  class="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 placeholder:text-dark-3 outline-hidden transition duration-300 ease-in focus:shadow-input focus:border-transparent focus:ring-2 focus:ring-dark-4/20"
                />
              </div>

              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-primary px-5 py-3.5 font-medium text-white transition duration-300 ease-linear hover:opacity-90"
              >
                S'abonner
              </button>

              <p class="mt-4.5 text-center">Promis, pas de spam.</p>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { modalNewsletter } = useUiState()
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

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>

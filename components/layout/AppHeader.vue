<template>
  <header
    class="fixed left-0 top-0 z-[9999] w-full bg-white transition-all duration-300 ease-in-out"
    :class="stickyMenu ? 'shadow-sm py-4 lg:py-0' : 'py-7 lg:py-0'"
  >
    <div class="mx-auto flex w-full max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:px-0">
      <div class="flex w-full items-center justify-between lg:w-3/12">
        <NuxtLink to="/">
          <img src="/images/logo/logo.svg" alt="Daara Connect" />
        </NuxtLink>

        <button
          id="menuToggler"
          aria-label="Basculer la navigation"
          class="block lg:hidden"
          @click="navigationOpen = !navigationOpen"
        >
          <span class="relative block h-5.5 w-5.5 cursor-pointer">
            <span class="absolute right-0 block h-full w-full">
              <span
                class="my-1 block h-0.5 w-full rounded-xs bg-dark transition-all duration-200"
                :class="navigationOpen ? 'translate-y-1.5 rotate-45 delay-200' : 'delay-300'"
              ></span>
              <span
                class="my-1 block h-0.5 w-full rounded-xs bg-dark transition-all duration-200"
                :class="navigationOpen ? 'opacity-0 delay-0' : 'delay-400'"
              ></span>
              <span
                class="my-1 block h-0.5 w-full rounded-xs bg-dark transition-all duration-200"
                :class="navigationOpen ? '-translate-y-1.5 -rotate-45 delay-200' : 'delay-500'"
              ></span>
            </span>
          </span>
        </button>
      </div>

      <div
        class="invisible h-0 w-full items-center justify-between overflow-hidden transition-all duration-300 ease-in-out lg:visible lg:flex lg:h-auto lg:w-9/12"
        :class="navigationOpen ? 'visible h-auto max-h-[480px] rounded-md bg-white p-7.5 shadow-lg' : ''"
      >
        <nav>
          <ul class="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
            <li class="group relative lg:py-6.5" :class="stickyMenu ? 'lg:py-4!' : ''">
              <button
                class="flex w-full items-center justify-between gap-3 text-left hover:text-dark"
                @click="toggleDropdown('home')"
              >
                <span :class="isActive(['/','/blog/personnel']) ? 'text-dark!' : ''">Accueil</span>
                <svg class="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </button>
              <ul class="dropdown" :class="dropdowns.home ? 'flex' : ''">
                <li>
                  <NuxtLink
                    to="/"
                    class="flex rounded-md px-4 py-2 text-sm hover:bg-gray hover:text-primary"
                    :class="route.path === '/' ? 'bg-gray text-primary' : ''"
                  >
                    Blog Business
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/blog/personnel"
                    class="flex rounded-md px-4 py-2 text-sm hover:bg-gray hover:text-primary"
                    :class="route.path === '/blog/personnel' ? 'bg-gray text-primary' : ''"
                  >
                    Blog Personnel
                  </NuxtLink>
                </li>
              </ul>
            </li>

            <li class="group relative lg:py-6.5" :class="stickyMenu ? 'lg:py-4!' : ''">
              <button
                class="flex w-full items-center justify-between gap-3 text-left hover:text-dark"
                @click="toggleDropdown('pages')"
              >
                <span :class="isActive(pagesRoutes) ? 'text-dark!' : ''">Pages</span>
                <svg class="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </button>
              <ul class="dropdown" :class="dropdowns.pages ? 'flex' : ''">
                <li v-for="page in pagesLinks" :key="page.to">
                  <NuxtLink
                    :to="page.to"
                    class="flex rounded-md px-4 py-2 text-sm hover:bg-gray hover:text-primary"
                    :class="route.path === page.to ? 'bg-gray text-primary' : ''"
                  >
                    {{ page.label }}
                  </NuxtLink>
                </li>
              </ul>
            </li>

            <li class="group relative lg:py-6.5" :class="stickyMenu ? 'lg:py-4!' : ''">
              <button
                class="flex w-full items-center justify-between gap-3 text-left hover:text-dark"
                @click="toggleDropdown('blogs')"
              >
                <span :class="isActive(blogRoutes) ? 'text-dark!' : ''">Blogs</span>
                <svg class="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </button>
              <ul class="dropdown" :class="dropdowns.blogs ? 'flex' : ''">
                <li v-for="page in blogLinks" :key="page.to">
                  <NuxtLink
                    :to="page.to"
                    class="flex rounded-md px-4 py-2 text-sm hover:bg-gray hover:text-primary"
                    :class="route.path === page.to ? 'bg-gray text-primary' : ''"
                  >
                    {{ page.label }}
                  </NuxtLink>
                </li>
              </ul>
            </li>

            <li class="lg:py-6.5" :class="stickyMenu ? 'lg:py-4!' : ''">
              <NuxtLink to="/connexion" class="hover:text-dark">Support</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="mt-7 flex flex-wrap items-center gap-8.5 lg:mt-0">
          <div class="flex items-center gap-1.5">
            <a
              aria-label="Facebook"
              href="https://facebook.com"
              class="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark"
              target="_blank"
              rel="noopener"
            >
              <svg class="h-[18px] w-[18px] fill-current" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z"
                />
              </svg>
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com"
              class="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark"
              target="_blank"
              rel="noopener"
            >
              <svg class="h-[18px] w-[18px] fill-current" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.2781 4.30313L17.3469 2.95313C17.6562 2.5875 17.7406 2.30625 17.7688 2.16562C16.925 2.67188 16.1375 2.84063 15.6312 2.84063H15.4344L15.3219 2.72813C14.6469 2.1375 13.8031 1.82812 12.9031 1.82812C10.9344 1.82812 9.3875 3.45938 9.3875 5.34375C9.3875 5.45625 9.3875 5.625 9.41563 5.7375L9.5 6.3L8.90938 6.27188C5.30937 6.15938 2.35625 3.06563 1.87813 2.53125C1.09063 3.9375 1.54063 5.2875 2.01875 6.13125L2.975 7.70625L1.45625 6.8625C1.48438 8.04375 1.93437 8.97188 2.80625 9.64688L3.56562 10.2094L2.80625 10.5188C3.28437 11.9531 4.35313 12.5438 5.14062 12.7688L6.18125 13.05L5.19688 13.725C3.62188 14.85 1.65312 14.7656 0.78125 14.6813C2.55313 15.9188 4.6625 16.2 6.125 16.2C7.22188 16.2 8.0375 16.0875 8.23438 16.0031C16.1094 14.1469 16.475 7.11563 16.475 5.70938V5.5125L16.6438 5.4C17.6 4.5 17.9937 4.02188 18.2188 3.74063C18.1344 3.76875 18.0219 3.825 17.9094 3.85313L16.2781 4.30313Z"
                />
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com"
              class="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark"
              target="_blank"
              rel="noopener"
            >
              <svg class="h-[18px] w-[18px] fill-current" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z"
                />
              </svg>
            </a>
            <a
              aria-label="Pinterest"
              href="https://pinterest.com"
              class="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark"
              target="_blank"
              rel="noopener"
            >
              <svg class="h-[18px] w-[18px] fill-current" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 16.5938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 6.88435 17.3532 6.85622 17.4094C8.7406 17.6907 10.9906 17.8594 13.2125 17.0438C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z"
                />
              </svg>
            </a>
          </div>

          <div class="flex items-center gap-4.5">
            <button
              id="searchModalButton"
              aria-label="Ouvrir la recherche"
              class="flex h-11 w-11 items-center justify-center rounded-full bg-gray transition-all duration-200 ease-linear hover:bg-gray-2 hover:text-dark"
              @click="modalSearch = true"
            >
              <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2812 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1562 18.5625 19.2812 18.4063C19.5312 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2812 4.53125C14.6562 6.90625 14.6562 10.75 12.2812 13.0938C11.1562 14.25 9.625 14.875 8 14.875Z"
                />
              </svg>
            </button>

            <button
              class="rounded-md bg-dark py-2.5 px-5.5 font-medium text-white transition-all duration-200 ease-linear hover:opacity-90"
              @click="modalNewsletter = true"
            >
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

const { stickyMenu, navigationOpen, modalNewsletter, modalSearch } = useUiState()
const route = useRoute()

const dropdowns = reactive({
  home: false,
  pages: false,
  blogs: false
})

const pagesLinks = [
  { to: '/categorie', label: 'Catégorie' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/auteur', label: 'Auteur' },
  { to: '/recherche', label: 'Recherche' },
  { to: '/connexion', label: 'Connexion' },
  { to: '/inscription', label: 'Inscription' },
  { to: '/style-guide', label: 'Style Guide' },
  { to: '/confidentialite', label: 'Confidentialité' }
]

const blogLinks = [
  { to: '/blogs/fiche-1', label: 'Blog Détail 1' },
  { to: '/blogs/fiche-2', label: 'Blog Détail 2' },
  { to: '/blogs/fiche-3', label: 'Blog Détail 3' },
  { to: '/blogs/archives', label: 'Archives' }
]

const pagesRoutes = pagesLinks.map((link) => link.to)
const blogRoutes = blogLinks.map((link) => link.to)

const toggleDropdown = (key: keyof typeof dropdowns) => {
  dropdowns[key] = !dropdowns[key]
}

const isActive = (paths: string[]) => paths.includes(route.path)

watch(
  () => route.fullPath,
  () => {
    Object.keys(dropdowns).forEach((key) => {
      dropdowns[key as keyof typeof dropdowns] = false
    })
  }
)
</script>

<template>
  <header 
    :class="[
      'fixed inset-x-0 top-0 z-100 transition-all duration-300 transform',
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
    ]"
  >
    <!-- Navbar -->
    <nav class="flex items-center bg-base-100/90 backdrop-blur-md justify-between py-4 px-6 md:px-12 lg:px-20 xl:px-30 border-b-2 border-primary" aria-label="Global">
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <router-link :to="{name:'Home'}" class="flex flex-row gap-4 -m-1.5 p-1.5 items-center">
            <span class="sr-only">Yohanes Mogot</span>
            <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600" alt="" /> -->
            <p class="text-heading-3 font-anton text-base-content font-black">COACH <span class="text-primary">YOHAN</span></p>
          </router-link>
        </div>
        
        <!-- Button Mobile Navbar -->
        <div class="flex xl:hidden gap-3">
          <!-- Toggle Button for Mobile -->
          <div class="flex justify-end">
              <label class="swap swap-rotate group">
              <!-- this hidden checkbox controls the state -->
              <input type="checkbox" :checked="isDark" @change="toggleTheme" />
              
              <!-- sun icon -->
              <svg class="swap-off h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.061-1.06l-1.59-1.591a.75.75 0 1 0-1.06 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
    
              <!-- moon icon -->
              <svg class="swap-on h-7 w-7 text-blue-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
              </svg>
              </label>
          </div>
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-base-content/80" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
    
        <!-- Desktop Navbar -->
        <div class="hidden xl:flex xl:gap-x-8 items-center">
          <router-link 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.to" 
            class="text-[1rem] font-heading text-base-content hover:text-primary transition-colors"
          >
            {{ item.name }}
          </router-link>
          <label class="swap swap-rotate group">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" :checked="isDark" @change="toggleTheme" />
            
            <!-- sun icon (visible when unchecked/light mode) -->
            <svg class="swap-off h-8 w-8 text-yellow-500 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.061-1.06l-1.59-1.591a.75.75 0 1 0-1.06 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
  
            <!-- moon icon (visible when checked/dark mode) -->
            <svg class="swap-on h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
            </svg>
          </label>
          <a href="#programs" class="bg-primary px-4 py-2 text-[1rem] font-heading text-primary-content shadow-card hover:bg-primary-focus transition-all">BOOK NOW</a>
        </div>
    </nav>
    
    <!-- List Mobile Navbar -->
    <Dialog class="xl:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <DialogPanel class="fixed inset-y-0 right-0 z-101 w-full overflow-y-auto bg-base-100 py-5 px-6 sm:max-w-sm sm:ring-1 sm:ring-base-content/10"> 
        <div class="flex items-center justify-between">
          <!-- LOGO -->
          <router-link to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
            <span class="sr-only">Coach Yohanes</span>
              <!-- <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600" alt="" /> -->
              <p class="text-heading-3 font-anton text-base-content font-black">COACH <span class="text-primary">YOHAN</span></p>
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-base-content/80" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        

        <div class="mt-5 flow-root">
          <div class="-my-6 divide-y divide-line/10">
            <div class="space-y-4 py-6">
              <router-link 
                v-for="item in navigation" 
                :key="item.name" 
                :to="item.to" 
                @click="mobileMenuOpen = false"
                class="-mx-3 block px-3 py-2 text-button-sm font-heading text-base-content hover:bg-base-200"
              >
                {{ item.name }}
                <div class="w-full h-0.25 bg-primary"></div>
              </router-link>
            </div>
            <div class="flex py-6">
              <a href="#programs" class="w-full bg-primary px-8 py-3 text-center text-button-sm font-heading text-primary-content shadow-card hover:bg-primary-focus transition-all">BOOK NOW</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'ABOUT', to: '/#about' },
  { name: 'GALLERY', to: '/#gallery' },
  { name: 'TRANSFORMS', to: '/#transforms' },
  { name: 'SERVICES', to: '/#services'},
  { name: 'TIPS', to: '/tips' },
  { name: 'PROGRAMS', to: '/#programs' },
  { name: 'FOOD', to: '/#food' },
  { name: 'CONSULTATION', to: '/#consultation' },
]

const mobileMenuOpen = ref(false)

// ============================================================
// OPSI 1 (DIKOMEN — Aktifkan kalau mau tanpa tombol toggle):
// Website otomatis mengikuti tema browser/laptop user.
// Tidak perlu tombol sama sekali. Murni CSS.
// Caranya: Hapus /* dan */ di bawah, lalu komen OPSI 2.
//          Pastikan juga di style.css: prefersdark: true
// ============================================================
/*
onMounted(() => {
  // Kosong — DaisyUI prefersdark: true otomatis handle ini.
})
*/


// ============================================================
// OPSI 2 (AKTIF — Toggle manual, selalu mulai dari Light Mode)
// ============================================================
const isDark = ref(false)
const isVisible = ref(false)

const handleScroll = () => {
  const isMobile = window.innerWidth < 768
  // Mobile: muncul lebih cepat (250px)
  // Desktop: muncul setelah Hero3 selesai (350vh - 100vh = 350vh)
  const threshold = isMobile ? 250 : window.innerHeight * 3.5
  isVisible.value = window.scrollY > threshold
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    isDark.value = true;
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    isDark.value = false;
  }
}

onMounted(() => {
  // Selalu mulai Light Mode, apapun settingan browser user
  document.documentElement.setAttribute('data-theme', 'light');
  isDark.value = false;
  
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Cek posisi awal
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
// ============================================================

</script>

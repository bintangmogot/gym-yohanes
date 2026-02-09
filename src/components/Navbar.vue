<template>
  <header class="absolute inset-x-0 top-0 z-50 border-b-2 border-primary">
    <!-- Navbar -->
    <nav class="flex items-center bg-card-white justify-between py-4 px-6 md:px-12 lg:px-24" aria-label="Global">
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <a href="#" class="flex flex-row gap-4 -m-1.5 p-1.5 items-center">
            <span class="sr-only">Yohanes Mogot</span>
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600" alt="" />
            <p class="text-heading-2 font-anton text-dark-bg font-black">COACH <span class="text-primary">YOHAN</span></p>
          </a>
        </div>
        
        <!-- Button Mobile Navbar -->
        <div class="flex xl:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-body" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
    
        <!-- Desktop Navbar -->
        <div class="hidden xl:flex xl:gap-x-12 items-center">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-button font-heading text-dark-bg hover:text-primary">{{ item.name }}</a>
          <a href="#" class="bg-primary px-8 py-3 text-button font-heading text-white shadow-card hover:bg-primary-hover transition-all">BOOK NOW</a>
        </div>
    </nav>
    
    <!-- List Mobile Navbar -->
    <Dialog class="xl:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50"></div>
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg-white p-8 sm:max-w-sm sm:ring-1 sm:ring-text-dark/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-text-body" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-8 flow-root">
          <div class="-my-6 divide-y divide-line/10">
            <div class="space-y-4 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block px-3 py-2 text-button-sm font-heading text-dark-bg hover:bg-bg-secondary">{{ item.name }}</a>
            </div>
            <div class="flex py-6">
              <a href="#" class="w-full bg-primary px-8 py-3 text-center text-button-sm font-heading text-white shadow-card hover:bg-primary-hover transition-all">BOOK NOW</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'PERSONAL TRAINING', href: '#' },
  { name: 'CONSULTATION', href: '#' },
  { name: 'ABOUT', href: '#' },
  { name: 'TESTIMONIALS', href: '#' },
  { name: 'FOOD', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

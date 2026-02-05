<template>
  <div class="bg-white bg-[url('/src/assets/images/hero.png')] bg-cover bg-center">
    <header class="absolute inset-x-0 top-0 z-50">
      <!-- Navbar -->
      <nav class="flex items-center bg-white justify-between py-6 px-5 md:px-15 lg:px-30" aria-label="Global">
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <a href="#" class="flex flex-direction:column gap-4 -m-1.5 p-1.5 items-center">
            <span class="sr-only">Yohanes Mogot</span>
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600" alt="" />
            <p class="text-sm/6 font-semibold text-gray-900">COACH <span class="text-[#0046DE]">YOHAN</span></p>
          </a>
        </div>
        
        <!-- Button Mobile Navbar -->
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
    
        <!-- Desktop Navbar -->
        <div class="hidden lg:flex lg:gap-x-12 items-center">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 font-semibold text-gray-900">{{ item.name }}</a>
          <a href="#" class="rounded-md bg-[#0046DE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#0037B0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0046DE]">BOOK NOW</a>
        </div>
        
 
      </nav>
      
      <!-- List Mobile Navbar -->
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"></div>
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="flex py-6">
                <a href="#" class="w-full rounded-md bg-[#0046DE] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#0037B0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0046DE]">BOOK NOW</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#0046DE] to-[#002366] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            GET IN SHAPE IN BALI 
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-5xl md:text-xl font-semibold tracking-tight text-balance !text-white">TRAIN WITH <span class="text-[#0046DE]">YOHANES</span></h1>
          <p class="mt-8 text-lg font-medium text-pretty !text-white sm:text-xl/8">TRANSFORM YOUR BODY, ELEVATE YOUR LIFE.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-[#0046DE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#0037B0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0046DE]">BOOK YOUR SESSION</a>
            <a href="#" class="text-sm/6 font-semibold text-[#0046DE]">LEARN MORE</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#0046DE] to-[#002366] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </div>

  <div class="bg-primary min-h-screen hover:bg-primary-hover transition-colors duration-300">
    <a href="#" class="text-black bg-primary-hover hover:bg-primary-hover transition-colors duration-300">Button</a>
              <a href="#" class="rounded-md bg-[#0046DE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#0037B0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0046DE]">BOOK NOW</a>
  </div>
  
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
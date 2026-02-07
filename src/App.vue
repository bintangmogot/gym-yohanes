<template>
  <div class="bg-bg-white bg-[url('/src/assets/images/hero.png')] bg-cover bg-center font-body min-h-screen">
    <!-- <header> untuk bagian kepala website (navbar, logo) -->
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
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-body" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
    
        <!-- Desktop Navbar -->
        <div class="hidden lg:flex lg:gap-x-12 items-center">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-button font-heading text-dark-bg hover:text-primary">{{ item.name }}</a>
          <a href="#" class="bg-primary px-8 py-3 text-button font-heading text-white shadow-card hover:bg-primary-hover transition-all">BOOK NOW</a>
        </div>
      </nav>
      
      <!-- List Mobile Navbar -->
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
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

    <!-- <main> menandakan konten utama dari halaman ini -->
    <main>
      <!-- HERO SECTION -->
      <section class="relative isolate px-6 pt-20 lg:px-12 min-h-screen">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-primary-hover opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
        
      <div class="mx-auto py-32 sm:py-20 lg:py-32">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative px-4 py-1 text-button-sm text-white ring-1 ring-white hover:ring-white/20 bg-white/15">
            GET IN SHAPE IN BALI 
          </div>
        </div>
        <div class="text-center">
            <!-- <mark> untuk menyoroti teks penting -->
          <h1 class="text-5xl md:text-hero font-title tracking-tight text-white">TRAIN WITH <span class="text-primary block">YOHANES</span></h1>
            <p class="mt-8 text-lg font-body font-medium text-white sm:text-xl max-w-xl mx-auto">
              Transform your physique and performance with gritty, high-impact coaching. <mark class="bg-primary text-white px-1">No excuses</mark>, just results.
            </p>
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#" class="bg-primary px-8 py-3 text-button font-heading text-white shadow-card hover:bg-primary-hover transition-all hover-lift w-full sm:w-auto">BOOK YOUR SESSION</a>
            <a href="#" class="text-button font-heading text-bg-white hover:text-primary hover:bg-white hover-lift transition-colors border border-bg-white px-8 py-3 w-full sm:w-auto">LEARN MORE</a>
          </div>
        </div>
      </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-primary to-primary-hover opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </section>

      <!-- <article> untuk konten yang bisa berdiri sendiri (seperti testimoni atau artikel blog) -->
      <section class="bg-bg-secondary py-20 px-6">
        <div class="max-w-4xl mx-auto">
          <article class="bg-white p-8 shadow-card border-l-4 border-primary">
            <h2 class="text-2xl font-title mb-4">MEMBER SUCCESS STORY</h2>
            <p class="italic text-text-body">"Training with Coach Yohan changed my life. I lost 15kg in 3 months!"</p>
            <!-- <time> memberikan format waktu yang bisa dibaca mesin -->
            <footer class="mt-4 text-sm text-line">
              Published on <time datetime="2024-02-08">Feb 8, 2024</time>
            </footer>
          </article>
        </div>
      </section>

      <!-- <aside> untuk konten sampingan yang tidak langsung berhubungan dengan alur utama -->
      <aside class="bg-dark-bg text-white py-12 px-6">
        <div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <!-- <figure> dan <figcaption> untuk gambar dan keterangannya -->
          <figure class="shrink-0">
            <img class="w-32 h-32 rounded-full border-2 border-primary" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200" alt="Training Gear">
            <figcaption class="text-xs text-center mt-2 text-primary">GEAR UP</figcaption>
          </figure>
          <div>
            <h3 class="text-xl font-heading mb-2">QUICK TIP</h3>
            <p>Always stay hydrated during your Bali sessions! <mark class="bg-primary px-1 font-bold">Drink 3L daily.</mark></p>
          </div>
        </div>
      </aside>
    </main>
    <footer>
      <!-- Custom footer content or placeholder -->
      <div class="bg-card-white border-t border-line py-8 px-6 text-center">
        <p class="text-text-body font-body">&copy; 2024 Coach Yohanes Mogot. All Rights Reserved.</p>
      </div>
    </footer>
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
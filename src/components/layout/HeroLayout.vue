<template>
  <section :class="`hero ${alignContent} relative isolate px-6 pt-20 lg:px-12 min-h-screen bg-cover bg-center bg-no-repeat`" 
  :style="{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 30, 0.4), rgba(0, 0, 0, 0.7)), url(${bgHero})`}"
  >
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-primary-focus opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
      
    <div :class="`max-w-7xl mx-auto ${styleDiv}`">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative px-4 py-1 text-button-sm text-white ring-1 ring-white bg-white/15">
          {{ title }}
        </div>
      </div>
      <div class="text-center">
          <!-- <mark> untuk menyoroti teks penting -->
        <h1 class="text-5xl md:text-hero font-title tracking-tight text-white">{{ titleBody }} <span class="text-primary block">{{ titleBodySpan }}</span></h1>
        <slot name="description">
          <p class="mt-8 text-lg font-body font-medium text-white sm:text-xl max-w-xl mx-auto">
            {{ description }} <mark class="bg-primary text-primary-content px-1">No excuses</mark>, just results.
          </p>
        </slot>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <slot name="button">
            <a href="#programs" class="bg-primary px-8 py-3 text-button font-heading text-primary-content shadow-card hover:bg-primary-focus transition-all hover-lift w-full sm:w-auto">{{ buttonA }}</a>
            <a href="#about" class="text-button font-heading text-white hover:text-primary hover:bg-white hover-lift transition-colors border border-white px-8 py-3 w-full sm:w-auto">{{ buttonB }}</a>
          </slot>
        </div>
      </div>
    </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-primary to-primary-focus opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
  </section>
</template>

<script setup>
  defineProps({
    bgHero: {
      type: String,
      default: 'https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/hero'
    },
    title: {
      type: String,
      default: 'GET IN SHAPE IN BALI'
    },
    titleBody: {
      type: String,
      default: 'TRAIN WITH'
    },
    titleBodySpan: {
      type: String,
      default: 'YOHANES'
    },
    description: {
      type: String,
      default: 'Transform your physique and performance with gritty, high-impact coaching.'
    },
    buttonA: {
      type: String,
      default: 'BOOK YOUR SESSION'
    },
    buttonB: {
      type: String,
      default: 'LEARN MORE'
    },
    styleDiv: {
      type: String,
      default: 'py-32 sm:py-20 lg:py-32'
    },
    alignContent: {
      type: String,
      default: 'justify-center'
    }
  })
</script>

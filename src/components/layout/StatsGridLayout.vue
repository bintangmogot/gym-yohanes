<template>
    <section :class="`bg-base-100 py-20 px-6 lg:px-20 xl:px-30 flex flex-col gap-12 ${sectionClass}`">
      <!-- Section Header -->
      <slot name="header">
        <div class="flex flex-row items-center justify-start gap-4">
          <div class="w-12 h-12 md:w-14 md:h-14 rounded-none bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span v-html="headerIcon"></span>
          </div>
          <div>
            <h4 class="font-title text-5xl uppercase text-base-content leading-none">{{ titleNormal }} <span class="text-primary">{{ titleHighlight }}</span></h4>
            <p class="text-body text-base-content/60 mt-2 text-lg">{{ subtitle }}</p>
          </div>
        </div>
      </slot>

      <!-- Facts Grid -->
      <div :class="`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`">
        <div v-for="(fact, index) in items" :key="index" 
             class="group flex flex-col bg-base-100 border border-l-4 border-primary lg:border-base-300/50 hover:border-primary p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
            
            <div class="w-12 h-12 md:w-14 md:h-14 mb-4 rounded-none flex items-center justify-center text-primary shrink-0 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span v-html="fact.icon" class="w-8 h-8 xl:w-10 xl:h-10"></span>
            </div>
            
            <div>
                <h4 class="font-anton text-2xl uppercase text-base-content/80 mb-2 group-hover:text-primary transition-colors duration-300">{{ fact.title }}</h4>
                <p class="text-body text-base-content/60 text-sm leading-relaxed">{{ fact.description }}</p>
            </div>
        </div>
      </div>
    </section>
</template>

<script setup>
defineProps({
  titleNormal: {
    type: String,
    default: 'THE'
  },
  titleHighlight: {
    type: String,
    default: 'FACTS.'
  },
  subtitle: {
    type: String,
    default: 'Why over 500+ members choose us for their transformation.'
  },
  headerIcon: {
    type: String,
    default: '<svg class="w-8 h-8 lg:w-10 lg:h-10 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>'
  },
  columns: {
    type: Number,
    default: 4
  },
  sectionClass: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        title: 'SCIENTIFIC APPROACH',
        description: 'No guesswork. Our programs are built on biomechanics and proven physiological principles for maximum efficiency.'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        title: 'SUSTAINABLE RESULTS',
        description: 'Build habits that last a lifetime. We focus on long-term health, not just quick fixes via yo-yo dieting.'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
        title: 'PERSONALIZED PLANS',
        description: 'Every body is different. Your training and nutrition plan is tailored specifically to your goals and lifestyle.'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
        title: 'COMMUNITY DRIVEN',
        description: 'You are never alone. Join a supportive family of like-minded achievers pushing each other to be better.'
      }
    ]
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto mt-8 mb-16 md:mt-12 md:mb-24 px-4 lg:px-0 py-3 xl:py-5 border-3 border-primary xl:border-10">
    <div class="text-center mb-16 md:mb-24">
      <div class="inline-flex items-center justify-center gap-2 mb-2 bg-error/10 text-error px-4 py-1.5 rounded-full border border-error/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h3 class="font-title italic font-black text-sm md:text-md tracking-widest leading-none mt-0.5">IMPORTANT PREREQUISITES</h3>
      </div>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-anton uppercase leading-[0.9] text-base-content mt-4">
        READ BEFORE <span class="text-primary">BUYING.</span>
      </h2>
      <p class="text-base-content/70 mt-4 max-w-2xl mx-auto font-body text-sm md:text-lg">Please understand the required process and gym access rules before securing your spot.</p>
    </div>

    <!-- Timeline Container -->
    <div class="relative max-w-5xl mx-auto py-4 md:py-10 px-2 sm:px-4 md:px-0">
      <!-- Vertical Line Desktop -->
      <div class="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-1 bg-primary/20 transform md:-translate-x-1/2 rounded-full hidden md:block"></div>
      
      <!-- Vertical Line Mobile -->
      <div class="absolute left-[24px] top-6 bottom-6 w-1 bg-primary/30 transform -translate-x-1/2 rounded-full md:hidden"></div>
      
      <div v-for="(step, index) in flowSteps" :key="index" class="relative flex flex-col md:flex-row items-stretch md:items-center w-full mb-12 lg:mb-20 last:mb-0 group">
        
        <!-- Timeline Marker Desktop -->
        <div class="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-base-100 border-4 border-primary rounded-full items-center justify-center font-anton text-2xl text-primary z-10 shadow-[0_0_0_8px_var(--fallback-b1,oklch(var(--b1)))] group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
          {{ step.step }}
        </div>
        
        <!-- Timeline Marker Mobile (Active by default) -->
        <div class="md:hidden absolute left-[24px] top-6 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary border-4 border-base-100 rounded-full flex items-center justify-center font-anton text-lg text-primary-content z-10 shadow-[0_0_0_4px_var(--fallback-p,oklch(var(--p)))]">
          {{ step.step }}
        </div>

        <!-- Content Area -->
        <div :class="[
          'w-full md:w-1/2 pl-16 md:pl-0 relative z-0', 
          index % 2 === 0 ? 'md:pr-16 lg:pr-24 text-left md:text-right' : 'md:pl-16 lg:pl-24 md:ml-auto text-left'
        ]">
          
          <div :class="[
            'bg-base-100 backdrop-blur-md p-6 lg:p-10 transition-all duration-300 relative',
            'border-2 border-primary shadow-lg', // Active state by default on mobile
            'md:bg-base-100/80 md:border-base-300 md:shadow-sm md:group-hover:border-primary md:group-hover:shadow-card md:group-hover:-translate-y-1', 
            index % 2 === 0 
              ? 'md:rounded-tl-3xl md:rounded-br-3xl md:rounded-tr-md md:rounded-bl-md' 
              : 'md:rounded-tr-3xl md:rounded-bl-3xl md:rounded-tl-md md:rounded-br-md', 
            'rounded-xl'
          ]">
            
            <h4 class="font-anton text-2xl md:text-3xl uppercase mb-2 md:mb-3 text-base-content/90">{{ step.title }}</h4>
            <p class="text-base-content/70 font-body text-sm md:text-base leading-relaxed">{{ step.description }}</p>
            
            <!-- Sub Options Box -->
            <div v-if="step.subOptions" :class="['mt-5 md:mt-6 flex flex-col gap-3', index % 2 === 0 ? 'md:items-end' : 'md:items-start']">
                <div v-for="(opt, oIdx) in step.subOptions" :key="oIdx" 
                  :class="[
                    'flex items-start gap-3 p-4 bg-base-200 border-l-2 border-primary text-left relative w-full', 
                    'shadow-md', // Active state for mobile
                    'md:shadow-sm md:group-hover:shadow-md transition-shadow max-w-sm',
                    index % 2 === 0 ? 'md:border-r-2 md:border-l-0 md:bg-base-100' : ''
                  ]">
                    <span class="font-bold text-primary font-anton text-xl md:text-2xl leading-none shrink-0 mt-0.5">{{ opt.label }}</span>
                    <span class="text-sm text-base-content/80 leading-snug">{{ opt.text }}</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const flowSteps = ref([
  {
    step: '01',
    title: 'Choose & Pay',
    description: 'Select the training plan that fits your goals and complete the payment to secure your spot.',
  },
  {
    step: '02',
    title: 'Gym Access',
    description: 'Depending on where you want to train, gym access is handled differently:',
    subOptions: [
      { label: 'A', text: 'Avenue Fitness / Raider Gym: Buy a pass or membership only for yourself.' },
      { label: 'B', text: 'Other Gyms: Buy passes or memberships for both you and Coach Yohanes.' }
    ]
  },
  {
    step: '03',
    title: 'Plan Schedule',
    description: 'Once all access and plans are confirmed, we will coordinate to lock in the dates and times for your sessions.'
  },
  {
    step: '04',
    title: 'Begin Training',
    description: 'Execute the plan, train hard with Coach Yohanes, and start your journey towards your ultimate physique.'
  }
])
</script>

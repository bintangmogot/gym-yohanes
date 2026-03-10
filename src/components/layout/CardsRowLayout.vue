<template>
    <section :id="sectionId" :class="`bg-neutral py-20 px-6 md:px-12 lg:px-20 xl:px-30 ${sectionClass}`">
        <div class="flex flex-col gap-4 md:gap-8 justify-start">
            <slot name="header">
              <h2 class="text-primary font-title italic uppercase font-black text-4xl">{{ sectionNumber }} <span class="text-white">{{ sectionTitle }}</span></h2>
            </slot>

            <hr class="w-full h-px text-primary">

            <div class="flex flex-row overflow-hidden w-full overflow-x-auto pb-8 gap-4 md:gap-8 justify-start">
              <div v-for="(card, index) in cards" :key="index" class="flex flex-col gap-8 group relative min-w-[280px]">
                  <div class="flex flex-1 flex-col gap-4 md:gap-8 bg-neutral-content border-2 border-primary/50 group-hover:border-primary transition-all duration-100 p-8">
                      <div class="w-12 h-12 md:w-14 md:h-14 rounded-none bg-primary/15 group-hover:bg-primary flex items-center justify-center text-primary transition-all duration-100 shrink-0">
                          <span v-html="card.icon" class="w-7 h-7 lg:w-9 lg:h-9 text-primary group-hover:text-white transition-all duration-100"></span>
                      </div>
                      <h3 class="text-white font-title uppercase text-2xl z-1">{{ card.title }}</h3>
                      <p class="text-white/50 font-body text-md group-hover:text-white transition-all duration-100 z-2">{{ card.description }}</p>
                      <div class="flex items-center justify-start">
                          <component :is="card.routeName ? 'router-link' : 'a'" 
                            :to="card.routeName ? { name: card.routeName } : undefined"
                            :href="card.routeName ? undefined : card.link"
                            class="w-fit flex items-center gap-2 text-primary font-heading text-button hover:text-white hover:scale-102 transition-all duration-100 group/link">
                             DETAILS
                              <svg class="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>    
                          </component>
                      </div>
                  </div>
                  <div class="absolute top-0 right-5">
                      <h5 class="font-title text-[200px] uppercase text-primary/15 group-hover:text-primary/50 transition-all duration-100 z-0">{{ index + 1 }}</h5>
                  </div>
              </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
  sectionId: {
    type: String,
    default: 'services'
  },
  sectionNumber: {
    type: String,
    default: '01.'
  },
  sectionTitle: {
    type: String,
    default: 'Services'
  },
  sectionClass: {
    type: String,
    default: ''
  },
  cards: {
    type: Array,
    default: () => [
      {
        icon: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>',
        title: 'Personal Training',
        description: 'one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength.',
        routeName: 'Service',
        link: '#'
      },
      {
        icon: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>',
        title: 'Personal Training',
        description: 'one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength.',
        routeName: null,
        link: '#'
      },
      {
        icon: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>',
        title: 'Personal Training',
        description: 'one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength.',
        routeName: null,
        link: '#'
      }
    ]
  }
})
</script>

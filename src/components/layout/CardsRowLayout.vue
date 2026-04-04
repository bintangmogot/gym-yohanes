<template>
    <section :id="sectionId" :class="`bg-neutral py-20 px-6 md:px-12 lg:px-20 xl:px-30 ${sectionClass}`">
        <div class="flex flex-col gap-4 md:gap-8 justify-start max-w-7xl mx-auto">
            <slot name="header">
              <h2 class="text-5xl md:text-6xl text-primary font-anton font-black uppercase leading-none -mb-4">{{ sectionNumber }} <span class="text-white">{{ sectionTitle }}</span></h2>
            </slot>

            <hr class="w-full h-px text-primary">

            <div class="flex flex-row overflow-hidden w-full overflow-x-auto pb-8 gap-4 md:gap-8 justify-start">
              <div v-for="(card, index) in cards" :key="index" class="flex flex-1 flex-col gap-8 group relative min-w-[280px]">
                  <div class="flex flex-1 flex-col gap-4 md:gap-8 bg-neutral-content border-2 border-primary/50 group-hover:border-primary transition-all duration-100 p-8">
                      <div class="w-12 h-12 md:w-14 md:h-14 rounded-none bg-primary/15 group-hover:bg-primary flex items-center justify-center text-primary transition-all duration-100 shrink-0">
                          <span v-html="card.icon" class="w-7 h-7 lg:w-9 lg:h-9 text-primary group-hover:text-white transition-all duration-100"></span>
                      </div>
                      <h3 class="text-white font-title uppercase text-2xl z-1">{{ card.title }}</h3>
                      <p class="text-white/50 font-body text-md group-hover:text-white transition-all duration-100 z-2">{{ card.description }}</p>
                      <div class="flex items-center justify-start">
                          <component :is="card.routeName ? 'router-link' : 'a'" 
                            :to="card.routeName ? { name: card.routeName } : undefined"
                            :href="card.routeName ? card.link : undefined"
                            class="w-fit flex items-center gap-2 text-primary font-heading text-button hover:text-white hover:scale-102 transition-all duration-100 group/link">
                             DETAILS
                              <svg class="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>    
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
    default: 'My'
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
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="m16 3l-3-3a3.536 3.536 0 0 1-5 0L6 2l3 3l-4 4l-3-3l-2 2a3.536 3.536 0 0 1 0 5l3 3a3.536 3.536 0 0 1 5 0l2-2l-3-3l4-4l3 3l2-2a3.536 3.536 0 0 1 0-5"/></svg>',
        title: 'Personal Training',
        description: 'one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength. Online coaching also available.',
        routeName: 'Service',
        link: '/service/personal-training'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.438a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M20.145 3c-.27 4.534-4.6 8.33-6.727 9.67a8.82 8.82 0 0 0 7.396-1.671c.54-3.465-.224-6.778-.674-7.999z"/><path fill="currentColor" d="M20.145 12.67C9.385 16.662 4.902 7.887 4.002 3C.307 14.002 7.703 19.334 12.073 21c4.838-1.868 7.397-6.334 8.072-8.33"/></svg>',
        title: 'Gym Consultant',
        description: 'Customized gym setup and equipment recommendations for your space. We help you create the perfect home or commercial gym tailored to your needs and budget.',
        routeName: null,
        link: '#'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="m102.594 25.97l90.062 345.78L481.844 395L391.75 49.22zm-18.906 1.593c-30.466 11.873-55.68 53.098-49.75 75.312l3.25 11.78c.667-1.76 1.36-3.522 2.093-5.28C49.19 85.668 65.84 62.61 89.657 50.47l-5.97-22.907zm44.937 18.906l247.813 21.593l80.937 305.156l-249.344-20.064L128.626 46.47zM94.53 69.155c-16.66 10.01-29.916 28.068-38 47.406c-5.245 12.552-8.037 25.64-8.75 36.532l64.814 235.28c.293-.55.572-1.105.875-1.655c10.6-19.254 27.822-37.696 51.124-48.47L94.53 69.156zm74.876 287.563c-17.673 9.067-31.144 23.712-39.562 39c-4.464 8.105-7.262 16.36-8.688 23.75l11.688 42.405l1.625.125c-3.825-27.528 11.382-60.446 41.25-81.03l-6.314-24.25zm26.344 34.03c-32.552 17.26-46.49 52.402-41.844 72.906l289.844 24.53c-5.315-7.75-8.637-17.84-8.594-28.342l-22.562-9.063l46.625-7.31l-13.595-12.97c5.605-6.907 13.688-13.025 24.78-17.656L195.75 390.75z"/></svg>',
        title: 'Indonesian Tutoring',
        description: 'Learn Bahasa Indonesia with personalized one-on-one lessons on Preply. Perfect for expats and travelers in Bali looking to communicate confidently in daily life, work, or travel situations.',
        routeName: null,
        link: '#'
      }
    ]
  }
})
</script>

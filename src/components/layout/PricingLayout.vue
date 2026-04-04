<template>
  <section :class="`bg-base-100 py-20 px-6 lg:px-20 xl:px-32 relative overflow-hidden ${sectionClass}`" :id="sectionId" data-aos="fade-up">
    <div class="max-w-[1440px] mx-auto">
      <!-- Header -->
      <slot name="header">
        <div class="text-center mb-16">
          <h3 class="text-primary font-title italic font-black text-xl md:text-2xl tracking-widest mb-2">{{ tagline }}</h3>
          <h2 class="text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-[0.9] text-base-content">
            {{ titleNormal }} <span class="text-primary">{{ titleHighlight }}</span>
          </h2>
          <p class="text-base-content/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            {{ subtitle }}
          </p>
        </div>
      </slot>

      <!-- Pricing Cards -->
      <div class="flex flex-row gap-8 items-stretch xl:justify-start overflow-x-auto snap-x snap-mandatory px-4 lg:px-0 scrollbar-hide pb-12 pt-10">
        <div v-for="(pkg, index) in packages" :key="index"
          :class="[
            'p-8 md:p-10 border border-t-4 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 flex flex-col h-full relative group shrink-0 snap-center xl:first:ml-auto xl:last:mr-auto',
            pkg.isPopular 
              ? 'bg-base-100 border-primary shadow-2xl lg:-mt-4 lg:mb-4 z-10 scale-100 lg:scale-105' 
              : 'bg-base-100 border-base-300 hover:border-primary'
          ]"
        >
          <!-- Popular Badge -->
          <div v-if="pkg.isPopular" class="absolute top-0 right-0 bg-primary text-primary-content text-xs font-bold px-3 py-1 uppercase tracking-wider font-sans">
            {{ popularLabel }}
          </div>

          <!-- Package Name -->
          <div class="mb-8">
            <h3 :class="['font-anton text-4xl md:text-5xl uppercase mb-2', pkg.isPopular ? 'text-primary' : 'text-base-content']" >
              {{ pkg.name }}
            </h3>
            <p class="font-heading text-base-content/60 text-xl tracking-wide uppercase">{{ pkg.subtitle }}</p>
          </div>
          
          <!-- Price -->
          <div class="mb-8">
            <div class="flex items-baseline gap-2">
              <span class="font-anton text-6xl md:text-7xl text-base-content/80">{{ pkg.price }}</span>
              <span class="font-heading text-2xl text-base-content/60">{{ pkg.currency }}</span>
            </div>
          </div>

          <!-- Features -->
          <ul class="flex flex-col gap-4 mb-10 grow">
            <li v-for="(feature, fIndex) in pkg.features" :key="fIndex" 
              :class="['flex items-center gap-3 text-body', feature.included ? 'font-medium text-base-content/80' : 'text-base-content/40']">
              <div :class="['w-5 h-5 rounded-full flex items-center justify-center shrink-0', feature.included ? 'bg-primary' : 'bg-base-content/20']">
                <svg v-if="feature.included" class="w-3 h-3 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                <svg v-else class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <span v-html="feature.text"></span>
            </li>
          </ul>

          <!-- CTA Button -->
          <a :href="pkg.buttonHref" target="_blank" 
            :class="[
              'block w-full text-center py-4 font-heading text-xl tracking-wider transition-all uppercase',
              pkg.isPopular 
                ? 'bg-primary border-2 border-primary text-primary-content hover:bg-primary-focus hover:border-primary-focus shadow-lg' 
                : 'border-2 border-primary text-base-content/80 hover:bg-base-100 hover:text-primary hover:border-primary hover:shadow-lg'
            ]"
          >
            {{ pkg.buttonText || buttonText }}
          </a>
        </div>
      </div>

      <!-- Bottom Info Cards -->
      <slot name="footer">
        <div v-if="infoCards.length" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10 mb-10">
          <div v-for="(info, index) in infoCards" :key="index" 
            class="bg-base-100 border-l-4 border-primary p-6 md:p-8 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
            <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span v-html="info.icon"></span>
            </div>
            <div>
              <h4 class="font-anton text-xl uppercase text-base-content/80 mb-1">{{ info.title }}</h4>
              <p class="text-base-content/60">{{ info.description }}</p>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  sectionId: {
    type: String,
    default: 'programs'
  },
  tagline: {
    type: String,
    default: 'INVEST IN YOURSELF'
  },
  titleNormal: {
    type: String,
    default: 'TRAINING'
  },
  titleHighlight: {
    type: String,
    default: 'PACKAGES.'
  },
  subtitle: {
    type: String,
    default: 'Choose the plan that fits your goals. No hidden fees, just results.'
  },
  popularLabel: {
    type: String,
    default: 'Most Popular'
  },
  buttonText: {
    type: String,
    default: 'Book via Whatsapp'
  },
  sectionClass: {
    type: String,
    default: ''
  },
  packages: {
    type: Array,
    default: () => [
      {
        name: 'STARTER',
        subtitle: 'THE KICKSTART',
        price: '700K',
        currency: 'IDR',
        isPopular: false,
        buttonHref: 'https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I\'m%20interested%20in%20the%20STARTER%20package%20to%20kickstart%20my%20fitness%20journey.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?',
        features: [
          { text: '<strong>1 PT Sessions</strong> (1hr)', included: true },
          { text: 'Custom Training Plan', included: true },
          { text: 'Full Workout Guide', included: true },
          { text: 'Full Meal Plan & Macros', included: false },
          { text: '24/6 Coach Support', included: false },
        ]
      },
      {
        name: 'MOMENTUM',
        subtitle: 'THE CONSISTENCY',
        price: '6.5 MIL',
        currency: 'IDR',
        isPopular: false,
        buttonHref: 'https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I\'m%20interested%20in%20the%20MOMENTUM%20package.%20I\'m%20ready%20to%20build%20consistency%20in%20my%20training.%20How%20do%20we%20begin?',
        features: [
          { text: '<strong>10 PT Sessions</strong> (1hr)', included: true },
          { text: 'Custom Training Plan', included: true },
          { text: 'Full Workout Guide', included: true },
          { text: 'Meal Plan & Macros', included: true },
          { text: '24/6 Coach Support', included: false }
        ]
      },
      {
        name: 'COMMIT',
        subtitle: 'THE TRANSFORMATION',
        price: '12 MIL',
        currency: 'IDR',
        isPopular: true,
        buttonHref: 'https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I\'m%20ready%20for%20a%20total%20transformation%20with%20the%20COMMIT%20package.%20I\'d%20love%20to%20discuss%20the%2020%20PT%20sessions%20program.',
        features: [
          { text: '<strong>20 PT Sessions</strong> (1hr)', included: true },
          { text: 'Custom Training Plan', included: true },
          { text: 'Full Workout Guide', included: true },
          { text: 'Full Meal Plan & Macros', included: true },
          { text: '24/6 Coach Support', included: false }

        ]
      },
      {
        name: 'ELITE',
        subtitle: 'THE LIFESTYLE',
        price: '18 MIL',
        currency: 'IDR',
        isPopular: false,
        buttonHref: 'https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I\'m%20interested%20in%20the%20ELITE%20package%20to%20fully%20transform%20my%20lifestyle.%20Can%20we%20talk%20about%20starting%20the%2030%20PT%20sessions%20elite%20program?',
        features: [
          { text: '<strong>30 PT Sessions</strong> (1hr)', included: true },
          { text: 'Custom Training Plan', included: true },
          { text: 'Full Meal Plan & Macros', included: true },
          { text: 'Full Workout Guide', included: true },
          { text: '24/6 Coach Support', included: true }
        ]
      }
    ]
  },
  infoCards: {
    type: Array,
    default: () => [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
        title: 'MEAL PLAN',
        description: 'Nutrition designed around balinese food availability.'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
        title: 'WORKOUT GUIDE',
        description: 'Access to a complete workout library and tracking.'
      }
    ]
  }
})
</script>

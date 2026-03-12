<template>
  <section :class="`bg-base-100 py-20 px-6 lg:px-20 xl:px-32 relative overflow-hidden ${sectionClass}`" :id="sectionId">
    <!-- Top Diagonal Divider -->
    <slot name="divider">
      <div v-if="showDivider" class="absolute top-0 left-0 scale-y-[-1] w-full overflow-hidden leading-none transform z-10">
        <svg class="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,10 L1200,120 Z" :fill="dividerColor"></path>
        </svg>
      </div>
    </slot>
    
    <!-- Header -->
    <slot name="header">
      <div class="mb-16 border-l-8 border-primary pl-6 md:pl-10">
        <span class="bg-primary/10 text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 inline-block">{{ tag }}</span>
        <h2 class="text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-[0.9] text-base-content mb-6">
          {{ titleNormal }} <span class="text-primary">{{ titleHighlight }}</span>
        </h2>
        <p class="text-body text-lg md:text-xl text-base-content/60 max-w-2xl">
          {{ subtitle }}
        </p>
      </div>
    </slot>

    <!-- Items -->
    <div class="flex flex-col gap-20 border-2 border-primary">
      <div v-for="(item, index) in items" :key="index" 
        class="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center p-5 lg:p-10"
        :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
      >
        <!-- Content -->
        <div class="w-full lg:w-1/2">
          <span class="bg-primary/10 text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 inline-block">{{ item.tag || tag }}</span>
          <h3 class="font-anton text-4xl md:text-6xl uppercase text-base-content mb-2 leading-none">{{ item.title }}</h3>
          
          <div class="flex items-baseline gap-2 mb-6">
            <span class="font-anton text-5xl md:text-6xl text-primary">{{ item.price }}</span>
            <span class="font-heading text-xl text-base-content/60 uppercase">{{ item.priceSuffix }}</span>
          </div>

          <p class="text-body text-base-content/60 mb-8 leading-relaxed">
            {{ item.description }}
          </p>

          <ul class="flex flex-col gap-3 mb-10">
            <li v-for="(feature, fIndex) in item.features" :key="fIndex" class="flex items-center gap-3 text-body font-medium text-base-content/60">
               <div class="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                 <svg class="w-3 h-3 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
               </div>
               <span>{{ feature }}</span>
            </li>
          </ul>

          <a :href="item.buttonHref || buttonHref" target="_blank" class="w-full bg-primary text-primary-content text-center py-4 font-heading text-xl tracking-wider hover:bg-primary-focus transition-colors uppercase flex items-center justify-center gap-3">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            {{ item.buttonText || buttonText }}
          </a>
        </div>

        <!-- Image -->
        <div class="w-full lg:w-1/2 h-[250px] sm:h-auto bg-base-200 relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-200 items-center justify-center flex shadow-xl border-4 border-primary">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover"/>
        </div>
      </div>
      <hr class="border border-[#7F8FCC] w-full" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  sectionId: {
    type: String,
    default: 'catalog-nutrition'
  },
  tag: {
    type: String,
    default: 'NUTRITION PLAN'
  },
  titleNormal: {
    type: String,
    default: 'CATALOG &'
  },
  titleHighlight: {
    type: String,
    default: 'NUTRITION.'
  },
  subtitle: {
    type: String,
    default: 'High-grade protein designed for optimal muscle recovery immediately post-workout.'
  },
  buttonText: {
    type: String,
    default: 'ORDER VIA WHATSAPP'
  },
  buttonHref: {
    type: String,
    default: 'https://wa.me/6285939533337'
  },
  showDivider: {
    type: Boolean,
    default: true
  },
  dividerColor: {
    type: String,
    default: '#0F0F23'
  },
  sectionClass: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => [
      {
        title: 'PURE ISO WHEY PROTEIN',
        price: '100K',
        priceSuffix: 'IDR / WEEK',
        description: 'High-grade protein designed for optimal muscle recovery immediately post-workout.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        features: ['10 PT Sessions (1hr)', 'Custom Training Plan']
      }
    ]
  }
})
</script>

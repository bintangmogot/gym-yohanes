<template>
  <section class="bg-base-100 py-20 px-6 lg:p-0 flex flex-col lg:min-h-screen items-stretch overflow-hidden" :class="isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'" data-aos="fade-up">
    <!-- Bagian Gambar -->
    <div class="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-0">
        <!-- Mobile/Tab View: Framed Design -->
        <div class="relative group w-full max-w-[400px] max-h-[1200px] lg:max-w-none lg:w-full lg:h-screen mx-auto lg:mx-0">
            <!-- Bingkai Biru: Hanya muncul di mobile/tab -->
            <div class="lg:hidden absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border-2 border-primary z-0"></div>
            
            <!-- Foto -->
            <img 
              :src="image" 
              :alt="imageAlt" 
              class="relative z-10 w-full aspect-4/5 lg:aspect-auto lg:h-full object-cover lg:object-center shadow-2xl lg:shadow-none transition-all duration-500 max-h-[500px] md:max-h-[650px] lg:max-h-none"
            >
            <!-- Overlay Gradient halus hanya di Desktop -->
            <div class="hidden lg:block absolute inset-0 bg-linear-to-r from-black/10 to-transparent pointer-events-none"></div>
        </div>
    </div>

    <!-- Bagian Konten Teks -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-20 px-0 lg:px-20 xl:px-32">
       <slot name="content">
         <div class="flex flex-col items-start gap-5 md:gap-10 max-w-xl mx-auto lg:mx-0">
            <h3 class="text-base-content font-anton font-bold text-xl md:text-[32px] tracking-[4%] uppercase">{{ subtitle }}</h3>
            
            <h2 class="text-8xl xl:text-9xl text-primary font-anton font-black uppercase leading-[0.85] md:leading-[0.8]">
              {{ title }}
            </h2>
            
            <h4 class="text-base-content/80 font-body text-xl lg:text-2xl leading-relaxed uppercase italic">{{ tagline }}</h4>
            
            <div class="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 w-full mt-4">
              <slot name="buttons">
                <a href="#programs" class="bg-primary px-10 py-4 text-button text-center font-heading text-primary-content shadow-card hover:bg-primary-focus transition-all hover-lift w-full sm:w-auto">{{ buttonA }}</a>
                <a href="#about" class="text-button text-center font-heading text-base-content hover:text-primary-content hover:bg-primary hover-lift transition-colors border-2 border-primary hover:border-primary px-10 py-4 w-full sm:w-auto">{{ buttonB }}</a>
              </slot>
            </div>
         </div>
       </slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-about'
  },
  imageAlt: {
    type: String,
    default: 'Coach Yohan'
  },
  subtitle: {
    type: String,
    default: 'Get In Shape in Bali'
  },
  title: {
    type: String,
    default: 'Yohanes Mogot'
  },
  tagline: {
    type: String,
    default: 'Transform Your Body, Elevate Your Life'
  },
  buttonA: {
    type: String,
    default: 'BOOK YOUR SESSION'
  },
  buttonB: {
    type: String,
    default: 'LEARN MORE'
  },
  isReversed: {
    type: Boolean,
    default: false
  }
})
</script>

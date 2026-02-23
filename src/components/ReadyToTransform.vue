<template>
  <section id="consultation" class="bg-neutral py-24 xl:py-32 px-6 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden">
    <!-- CTA Banner -->
    <div 
      data-aos="fade-up"
      class="relative overflow-hidden bg-primary p-8 md:p-14 xl:px-20 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-10 group shadow-2xl"
    >
      <!-- Background Decorative Elements -->
      <div class="absolute inset-0 bg-linear-to-r from-primary via-primary to-black/40 pointer-events-none"></div>
      <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col gap-6 max-w-2xl">
        <h2 class="text-4xl md:text-7xl  font-title italic uppercase font-black text-white leading-[0.85] tracking-tighter">
          Ready To <br />
          Transform?
        </h2>
        <p class="text-white/80 font-heading text-xs md:text-md lg:text-lg uppercase tracking-widest leading-none max-w-lg">
          Stop waiting for the "perfect time". Lets build the best version of you starting today.
        </p>
      </div>

      <!-- Action Button -->
      <div class="relative z-10 shrink-0 w-full lg:w-auto">
        <a 
          href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I'm%20ready%20for%20my%20transformation.%20I'd%20like%20a%20free%20consultation%20to%20start%20my%20fitness%20journey.%20When%20can%20we%20schedule%20one%3F" 
          target="_blank"
          class="relative w-full sm:w-auto inline-flex items-center justify-center bg-white text-primary px-8 py-4 font-button italic shadow-xl hover:bg-secondary hover:text-primary-content hover:scale-105 transition-all duration-300 group/btn overflow-hidden"
        >
          <div class="absolute inset-0 bg-primary/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 group-hover/btn:bg-primary"></div>
          <svg class="w-7 h-7 mr-2 relative z-10 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
          </svg>
          <span class="relative z-10 font-button">Chat With Me On WhatsApp</span>
        </a>
      </div>
    </div>

    <!-- Banner Carousel Below -->
    <div class="mt-10 lg:mt-20 overflow-hidden  relative" data-aos="fade-up" data-aos-delay="200">
        <!-- Overlay for fade edges -->
        <div class="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-neutral to-transparent z-10"></div>
        <div class="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-neutral to-transparent z-10"></div>
        
        <div class="flex animate-marquee whitespace-nowrap gap-6 py-4">
            <div v-for="(img, idx) in carouselImages" :key="idx" 
                 class="shrink-0 w-72 md:w-96 aspect-video bg-neutral-content border-2 border-white/5 overflow-hidden relative group grayscale hover:grayscale-0 hover:border-primary/50 transition-all duration-500 shadow-xl">
                <img :src="img" alt="Gym Life" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div v-for="(img, idx) in carouselImages" :key="'dup-'+idx" 
                 class="shrink-0 w-72 md:w-96 aspect-video bg-neutral-content border-2 border-white/5 overflow-hidden relative group grayscale hover:grayscale-0 hover:border-primary/50 transition-all duration-500 shadow-xl">
                <img :src="img" alt="Gym Life" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
const carouselImages = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop'
];
</script>

<style scoped>
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>

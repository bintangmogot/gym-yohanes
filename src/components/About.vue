<template>
  <section id="about" class="bg-bg-white py-20 px-6 md:px-12 lg:px-20 xl:px-30" data-aos="fade-up">
    <div class="flex flex-col lg:flex-row gap-12 xl:gap-24 items-center justify-center max-w-7xl mx-auto">
      <!-- Left: Image -->
      <div class="relative group min-w-[320px] xl:min-w-[450px] max-w-[400px]">
          <!-- Kotak Garis (Diletakkan di belakang dengan bingkai biru) -->
        <div class="absolute -top-6 -left-6 w-full h-full border-2 border-primary z-0"></div>
        
        <!-- Foto Coach Yohan (Diletakkan di depan) -->
        <img 
          src="/src/assets/images/yohanes.webp" 
          alt="Coach Yohan" 
          class="relative z-10 w-full max-h-[400px] xl:max-h-[600px] object-bottom object-cover shadow-2xl xl:grayscale hover:grayscale-0 transition-all duration-100 hover:scale-102"
        >
      </div>

      <!-- Right: Content -->
      <div class="flex flex-col items-start">
        <h3 class="text-primary font-bold italic tracking-wide uppercase mb-2 font-body">The Coach</h3>
        <h2 class="text-5xl md:text-6xl text-text-title font-anton font-black uppercase mb-4 leading-tight">meet yohan</h2>
        <div class="w-16 h-1.5 bg-primary mb-8"></div>
        
        <p class="text-text-body font-body mb-6 leading-relaxed">Welcome to the next level of fitness. I am Yohan, a dedicated personal trainer based in the heart of Bali. My mission is simple: to help you achieve the physique and health you've always desired without sacrificing the lifestyle you love.</p>
        <p class="text-text-body block font-body mb-8 leading-relaxed">Specializing in body transformations for expats and tourists, I combine science-based training methodologies with personalized nutrition strategies. Whether you are here for a month or a lifetime, we build a sustainable path to your peak performance.</p>
        
        <!-- Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <!-- Feature 1 -->
          <div class="flex items-center gap-4 bg-card-white p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <CheckBadgeIcon class="w-8 h-8 text-text-body shrink-0" />
              <div>
                <h4 class="font-anton uppercase text-lg text-text-body">Ade Rai Certified</h4>
                <p class="text-xs text-text-muted uppercase tracking-wider font-semibold">Elite Certification</p>
              </div>
          </div>
          
          <!-- Feature 2 -->
          <div class="flex items-center gap-4 bg-card-white p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <UserGroupIcon class="w-8 h-8 text-text-body shrink-0" />
              <div>
                <h4 class="font-anton uppercase text-lg text-text-body">10+ Transformation</h4>
                <p class="text-xs text-text-muted uppercase tracking-wider font-semibold">Proven Results</p>
              </div>
          </div>

          <!-- Feature 3 -->
          <div class="flex items-center gap-4 bg-card-white p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <HomeModernIcon class="w-8 h-8 text-text-body shrink-0" />
              <div>
                <h4 class="font-anton uppercase text-lg text-text-body">Private Gym Access</h4>
                <p class="text-xs text-text-muted uppercase tracking-wider font-semibold">Premium Facilities</p>
              </div>
          </div>

            <!-- Feature 4 (Blue Box) -->
            <div class="flex items-center gap-4 bg-primary p-4 shadow-card hover:bg-primary-hover transition-colors">
              <ClockIcon class="w-8 h-8 text-white shrink-0" />
              <div>
                <h4 class="font-anton uppercase text-lg text-white">10 Years Experience</h4>
                <p class="text-xs text-blue-100 uppercase tracking-wider font-semibold">Expert Coaching</p>
              </div>
          </div>
        </div>
      </div>
    
    </div>
  </section>
</template>

<script setup>
import { CheckBadgeIcon, UserGroupIcon, HomeModernIcon, ClockIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="bg-bg-white py-20 px-6 lg:p-0 flex flex-col lg:flex-row lg:min-h-screen items-stretch overflow-hidden" data-aos="fade-up">
    <!-- Bagian Gambar -->
    <div class="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-0">
        <!-- Mobile/Tab View: Framed Design -->
        <div class="relative group w-full max-w-[400px] max-h-[2000px] lg:max-w-none lg:w-full lg:h-full mx-auto lg:mx-0">
            <!-- Bingkai Biru: Hanya muncul di mobile/tab -->
            <div class="lg:hidden absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border-2 border-primary z-0"></div>
            
            <!-- Foto Coach -->
            <img 
              src="/src/assets/images/profile.png" 
              alt="Coach Yohan" 
              class="relative z-10 w-full aspect-4/5 lg:aspect-auto lg:h-full object-cover lg:object-center shadow-2xl lg:shadow-none transition-all duration-500 max-h-[500px] md:max-h-[650px] lg:max-h-none"
            >
            <!-- Overlay Gradient halus hanya di Desktop -->
            <div class="hidden lg:block absolute inset-0 bg-linear-to-r from-black/10 to-transparent pointer-events-none"></div>
        </div>
    </div>

    <!-- Bagian Konten Teks -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-20 px-0 lg:px-20 xl:px-32">
       <div class="flex flex-col items-start gap-5 md:gap-10 max-w-xl mx-auto lg:mx-0">
          <h3 class="text-text-title font-anton font-bold text-xl md:text-[32px] tracking-[4%] uppercase">Get In Shape in Bali</h3>
          
          <h2 class="text-8xl xl:text-9xl text-primary font-anton font-black uppercase leading-[0.85] md:leading-[0.8]">
            Yohanes <br class="md:hidden lg:block"/> Mogot
          </h2>
          
          <h4 class="text-text-body font-body text-xl lg:text-2xl leading-relaxed uppercase italic">Transform Your Body, Elevate Your Life</h4>
          
          <div class="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 w-full mt-4">
            <a href="#programs" class="bg-primary px-10 py-4 text-button text-center font-heading text-white shadow-card hover:bg-primary-hover transition-all hover-lift w-full sm:w-auto">BOOK YOUR SESSION</a>
            <a href="#about" class="text-button text-center font-heading text-text-title hover:text-white hover:bg-primary hover-lift transition-colors border-2 border-primary hover:border-primary px-10 py-4 w-full sm:w-auto">LEARN MORE</a>
          </div>
       </div>
    </div>
  </section>
</template>

<script setup>
</script>

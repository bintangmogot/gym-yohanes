<template>
  <div class="bg-bg-white font-body min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <Hero2nd />
      <About />
      <TestimonialCarousel />
      <Transforms />
      <MemberSuccess />
      <QuickTip />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import TestimonialCarousel from './components/TestimonialCarousel.vue';
import MemberSuccess from './components/MemberSuccess.vue';
import QuickTip from './components/QuickTip.vue';
import Footer from './components/Footer.vue';
</script>
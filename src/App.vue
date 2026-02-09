<template>
  <div class="bg-bg-white font-body min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Hero2nd />
      <About />
      <TestimonialCarousel />
      <Transforms />
      <TrainingPackages />
      <MemberSuccess />
      <QuickTip />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Hero2nd from './components/Hero2nd.vue';
import About from './components/About.vue';
import TestimonialCarousel from './components/TestimonialCarousel.vue';
import Transforms from './components/Transforms.vue';
import TrainingPackages from './components/TrainingPackages.vue';
import MemberSuccess from './components/MemberSuccess.vue';
import QuickTip from './components/QuickTip.vue';
import Footer from './components/Footer.vue';
</script>
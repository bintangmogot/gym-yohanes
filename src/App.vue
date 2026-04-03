<template>
  <Analytics />
  <SpeedInsights />
  <div class="bg-bg-white font-body overflow-x-clip">
    <Navbar />
    <main class="min-h-dvh">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterLayout />
  </div>
</template>

<style>
/* Transition: Fade & Slide */
.fade-enter-active,
.fade-leave-active {
transition: all 0.2s cubic-bezier(0.2, 0, 0.2, 1);}

.fade-enter-from {
  opacity: 0;
  transform: translateX(1000px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-1000px);
}
</style>

<script setup>
import Navbar from './components/Navbar.vue';
import FooterLayout from './components/layout/FooterLayout.vue';
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
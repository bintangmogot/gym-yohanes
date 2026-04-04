<template>
    <section :class="`bg-base-100 py-20 px-6 lg:px-20 xl:px-32 relative overflow-hidden ${sectionClass}`" :id="sectionId">
    <div class="max-w-7xl mx-auto w-full flex flex-col gap-4 lg:gap-10">
        <slot name="header">
          <h2 class="text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-[0.9] text-base-content text-center">
              {{ title }}
          </h2>
        </slot>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <div v-for="(faq, index) in items" :key="index" 
                class="collapse collapse-arrow bg-base-100 dark:bg-base-300 border border-t-4 border-primary mx-auto rounded-none"
                :class="{ 'collapse-open': activeIndex === index }"
                @click="toggle(index)"
            >
                <div class="collapse-title font-heading font-black text-xl text-primary dark:text-white border-b select-none">
                    {{ faq.question }}
                </div>
                <div class="collapse-content text-sm text-primary dark:text-white">
                    <div class="pt-4">{{ faq.answer }}</div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  sectionId: {
    type: String,
    default: 'faqs'
  },
  title: {
    type: String,
    default: 'FAQS.'
  },
  sectionClass: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => [
      {
        question: "Where do we train?",
        answer: "I am primarily based at Avenue Fitness Canggu, but I also serve the wider Badung region and Denpasar area for private sessions."
      },
      {
        question: "Do you offer online coaching?",
        answer: "Yes! If you're not in Bali or prefer to train at your own gym, I provide comprehensive online coaching including workout plans and nutrition tracking."
      },
      {
        question: "What is included in the transformation package?",
        answer: "Our premium packages typically include 1-on-1 PT sessions, a customized training split, and a personalized meal plan."
      },
      {
        question: "How long is each PT session?",
        answer: "Each personal training session lasts for 60 minutes, focused on high-intensity work and proper form execution."
      },
      {
        question: "I am a beginner, can I join?",
        answer: "Absolutely. I work with all fitness levels, from absolute beginners to advanced athletes. We'll start at your current level and build your foundation safely."
      },
      {
        question: "How do I book a consultation?",
        answer: "Simply click the 'Book a Call' or WhatsApp buttons across the site to schedule a free initial consultation where we'll discuss your goals."
      }
    ]
  }
})

const activeIndex = ref(0);

const toggle = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>

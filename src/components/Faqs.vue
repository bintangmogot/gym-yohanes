<template>
    <section class="bg-base-100 py-20 px-6 lg:px-20 xl:px-32 relative overflow-hidden" id="faqs">
    <div class="flex flex-col gap-4 lg:gap-10">
        <h2 class="text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-[0.9] text-base-content text-center">
            FAQS.
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <div v-for="(faq, index) in faqs" :key="index" 
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

const activeIndex = ref(0);

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Click the \"Sign Up\" button in the top right corner and follow the registration process."
  },
  {
    question: "I forgot my password. What should I do?",
    answer: "Click on \"Forgot Password\" on the login page and follow the instructions sent to your email."
  },
  {
    question: "How do I update my profile information?",
    answer: "Go to \"My Account\" settings and select \"Edit Profile\" to make changes."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, you can download our mobile app from the App Store and Google Play Store for easy access."
  }
];

const toggle = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null; // Close if clicked again
  } else {
    activeIndex.value = index;
  }
};
</script>
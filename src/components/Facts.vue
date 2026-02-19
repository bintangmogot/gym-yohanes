<template>
    <section class="bg-bg-white py-20 px-6 lg:px-20 xl:px-30 flex flex-col gap-12">
      <!-- Section Header -->
      <div class="flex flex-row items-center justify-start gap-4">
        <div class="w-12 h-12 md:w-14 md:h-14 rounded-none bg-blue-100 flex items-center justify-center text-primary shrink-0">
          <svg class="w-8 h-8 lg:w-10 lg:h-10 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/>
          </svg>
        </div>
        <div>
          <h4 class="font-title text-5xl uppercase text-text-title leading-none">THE <span class="text-primary">FACTS.</span></h4>
          <p class="text-body text-text-muted mt-2 text-lg">Why over 500+ members choose us for their transformation.</p>
        </div>
      </div>

      <!-- Facts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(fact, index) in facts" :key="index" 
             class="group flex flex-col bg-card-white border border-l-4 border-primary lg:border-white/10 hover:border-primary  p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
            
            <div class="w-12 h-12 md:w-14 md:h-14 mb-4 rounded-none flex items-center justify-center text-primary shrink-0 bg-blue-50 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <component :is="fact.icon" class="w-8 h-8 xl:w-10 xl:h-10" />
            </div>
            
            <div>
                <h4 class="font-anton text-2xl uppercase text-text-body mb-2 group-hover:text-primary transition-colors duration-300">{{ fact.title }}</h4>
                <p class="text-body text-text-muted text-sm leading-relaxed">{{ fact.description }}</p>
            </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref, h } from 'vue';

// Simple SVG components using render functions to avoid runtime compiler issues
const IconScience = (props) => h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    class: "",
    "aria-hidden": "true"
}, [
    h('path', {
        d: "m17.9646 5.49185.3705.37054c.3906.39052 1.0237.39052 1.4142 0 .3906-.39053.3906-1.02369 0-1.41422L17.594 2.29283c-.3905-.39052-1.0237-.39052-1.4142 0-.3905.39053-.3905 1.02369 0 1.41422l.3706.37059-.7412.74118-.3706-.37059c-.3905-.39053-1.0237-.39053-1.4142 0L9.71372 8.75891c-.39053.39053-.39053 1.02369 0 1.41419l.34948.3495-.77031.7703c-.39053.3905-.39053 1.0237 0 1.4142.39052.3905 1.02371.3905 1.41421 0l.7703-.7703.3917.3917c.3905.3905 1.0236.3905 1.4142 0l2.0628-2.0629c.4145.6745.6539 1.4706.6539 2.3256 0 2.4448-1.9584 4.4087-4.3521 4.4087-1.0458 0-2.00787-.3737-2.76051-.9999H11c.5523 0 1-.4477 1-1s-.4477-1-1-1H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h1.26803C6.92225 17.0489 7.8715 17.8952 9 18.4182V20H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h14c.5523 0 1-.4477 1-1s-.4477-1-1-1h-4v-1.9637c1.8034-1.1328 3-3.1517 3-5.4451 0-1.4061-.4498-2.70897-1.2126-3.76687l.8066-.80655c.3905-.39052.3905-1.02369 0-1.41421l-.3706-.37054.7412-.74118Z"
    })
]);

const IconResult = (props) => h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2",
    class: "",
    "aria-hidden": "true"
}, [
    h('path', {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
]);

const IconPersonal = (props) => h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2",
    class: "",
    "aria-hidden": "true"
}, [
    h('path', {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    })
]);

const IconCommunity = (props) => h('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2",
    class: "",
    "aria-hidden": "true"
}, [
    h('path', {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    })
]);

const facts = ref([
    {
        title: 'SCIENTIFIC APPROACH',
        description: 'No guesswork. Our programs are built on biomechanics and proven physiological principles for maximum efficiency.',
        icon: IconScience
    },
    {
        title: 'SUSTAINABLE RESULTS',
        description: 'Build habits that last a lifetime. We focus on long-term health, not just quick fixes via yo-yo dieting.',
        icon: IconResult
    },
    {
        title: 'PERSONALIZED PLANS',
        description: 'Every body is different. Your training and nutrition plan is tailored specifically to your goals and lifestyle.',
        icon: IconPersonal
    },
    {
        title: 'COMMUNITY DRIVEN',
        description: 'You are never alone. Join a supportive family of like-minded achievers pushing each other to be better.',
        icon: IconCommunity
    }
]);
</script>    

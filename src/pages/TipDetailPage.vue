<template>
  <div class="bg-base-100 min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20 xl:px-30">
    <div class="max-w-7xl mx-auto">
      
      <!-- Go back link -->
      <div class="mb-8">
        <router-link to="/tips" class="inline-flex items-center text-primary hover:text-primary-focus transition-colors gap-2 font-heading tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO TIPS
        </router-link>
      </div>

      <header class="mb-16 lg:flex lg:items-center lg:gap-12">
        <!-- Left: Image -->
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <div class="aspect-video w-full overflow-hidden border border-base-300">
            <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
          </div>
        </div>
        <!-- Right: Title -->
        <div class="lg:w-1/2">
          <div class="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            <span>{{ article.category }}</span>
            <span class="w-1 h-1 bg-primary rounded-full"></span>
            <span class="text-base-content/60">{{ article.date }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-anton uppercase text-base-content leading-none mb-6 lg:mb-0">{{ article.title }}</h1>
        </div>
      </header>

      <div class="divider h-[2px] bg-primary/10"></div>

      <div class="flex flex-col lg:flex-row gap-12 relative">
        <!-- Main Content -->
        <main class="lg:w-2/3 max-w-none font-body prose-content">
          <div v-html="article.content"></div>
        </main>

        <!-- Sidebar / Table of Contents -->
        <aside class="lg:w-1/3">
          <div class="sticky top-28 bg-base-200 border border-base-300 p-6">
            <h3 class="text-xl font-heading uppercase text-base-content mb-4 border-b border-base-300 pb-2">Table of Contents</h3>
            <ul class="space-y-3">
              <li v-for="(section, idx) in article.sections" :key="idx">
                <router-link :to="{ hash: '#' + section.id }" class="text-base-content/70 hover:text-primary transition-colors hover:pl-2 font-body block duration-200">
                  {{ section.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- Recommendations -->
      <section class="mt-24 pt-12 border-t border-base-300">
        <h2 class="text-4xl font-anton uppercase text-base-content mb-8">Related <span class="text-primary italic">Articles</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link v-for="(post, index) in recommendations" :key="index" :to="`/tips/${post.slug}`" class="bg-base-200 group overflow-hidden border border-base-300 hover:border-primary transition-all duration-300 block">
            <div class="aspect-video overflow-hidden">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                <span>{{ post.category }}</span>
              </div>
              <h3 class="text-2xl font-anton uppercase text-base-content mb-2 leading-tight group-hover:text-primary transition-colors">{{ post.title }}</h3>
            </div>
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mock data spanning 3 blogs
const articlesData = {
  "stay-fit-bali-food": {
    title: "How to stay fit while enjoying Bali's food scene",
    category: "Nutrition",
    date: "MAR 10, 2026",
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-legpress",
    content: `
      <h2 id="section-1" class="font-heading uppercase text-3xl mb-4 mt-8">The Bali Food Dilemma</h2>
      <p class="mb-6 text-lg">Traveling to Bali doesn't mean you have to lose all your progress. Yes, the nasi campur, babi guling, and endless smoothie bowls are tempting, but with a few standard strategies, you can enjoy all the island has to offer while staying lean and fit.</p>
      
      <h2 id="section-2" class="font-heading uppercase text-3xl mb-4 mt-8">Prioritize Protein Early</h2>
      <p class="mb-6 text-lg">Start your day in Canggu with a high-protein breakfast. Many cafes offer great egg, tempeh, or protein-powder based meals. Getting 30g+ of protein early keeps you satiated when you explore the local warungs later.</p>
      
      <h2 id="section-3" class="font-heading uppercase text-3xl mb-4 mt-8">NEAT is Your Secret Weapon</h2>
      <p class="mb-6 text-lg">NEAT (Non-Exercise Activity Thermogenesis) is huge here. Skip the Gojek for short trips. Walk on the beach, rent a bicycle, or go surfing. Those extra calories burned make room for evening cocktails at the beach club.</p>
      
      <h2 id="section-4" class="font-heading uppercase text-3xl mb-4 mt-8">Navigating Local Warungs</h2>
      <p class="mb-6 text-lg">When eating local, opt for grilled chicken (Ayam Bakar) or fish (Ikan Bakar) over fried options. Tempeh and tofu are great plant-based proteins, but be aware they are often deep-fried. Ask for less rice (setengah porsi) if you're trying to keep carbs lower.</p>
    `,
    sections: [
      { title: "The Bali Food Dilemma", id: "section-1" },
      { title: "Prioritize Protein Early", id: "section-2" },
      { title: "NEAT is Your Secret Weapon", id: "section-3" },
      { title: "Navigating Local Warungs", id: "section-4" }
    ]
  },
  "3-essential-weight-training-tips": {
    title: "3 Essential weight training tips for expats",
    category: "Training",
    date: "MAR 05, 2026",
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-tripul",
    content: `
      <h2 id="section-1" class="font-heading uppercase text-3xl mb-4 mt-8">Hydration is Non-Negotiable</h2>
      <p class="mb-6 text-lg">The humidity in Bali means you'll sweat out significantly more water than in a temperate climate. Bring at least 1.5 liters of water to every session, preferably infused with electrolytes. If you wait until you're thirsty, you're already dehydrated.</p>
      
      <h2 id="section-2" class="font-heading uppercase text-3xl mb-4 mt-8">Timing Your Workouts</h2>
      <p class="mb-6 text-lg">Unless the gym has excellent AC, try to avoid the 12 PM - 3 PM block. Early mornings or late evenings are optimal for keeping core temperatures down and lifting heavier. This will prevent premature fatigue.</p>
      
      <h2 id="section-3" class="font-heading uppercase text-3xl mb-4 mt-8">Volume vs Intensity</h2>
      <p class="mb-6 text-lg">If you find yourself lagging, don't force absolute intensity. Higher volume and slightly lower intensity goes a long way towards hypertrophy while preserving your central nervous system in hot climates.</p>
    `,
    sections: [
      { title: "Hydration is Non-Negotiable", id: "section-1" },
      { title: "Timing Your Workouts", id: "section-2" },
      { title: "Volume vs Intensity", id: "section-3" }
    ]
  },
  "recovery-is-your-best-friend": {
    title: "Why recovery is your best friend in Bali's heat",
    category: "Recovery",
    date: "FEB 28, 2026",
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-grassmc",
    content: `
      <h2 id="section-1" class="font-heading uppercase text-3xl mb-4 mt-8">The Ice Bath Craze</h2>
      <p class="mb-6 text-lg">Bali is practically the global capital of ice baths. While excellent for inflammation, save them for rest days or hours *after* a hypertrophy session, otherwise you risk blunting muscle growth and the natural inflammatory response.</p>
      
      <h2 id="section-2" class="font-heading uppercase text-3xl mb-4 mt-8">Sleep and AC</h2>
      <p class="mb-6 text-lg">Don't sacrifice your sleep hygiene for local parties. Make sure your bedroom is heavily air-conditioned and dark. Heat directly reduces deep sleep latency, which hinders your muscle recovery and overall energy levels.</p>
    `,
    sections: [
      { title: "The Ice Bath Craze", id: "section-1" },
      { title: "Sleep and AC", id: "section-2" }
    ]
  }
}

const allTips = [
  { slug: "stay-fit-bali-food", title: "How to stay fit while enjoying Bali's food scene", category: "Nutrition", image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-legpress" },
  { slug: "3-essential-weight-training-tips", title: "3 Essential weight training tips for expats", category: "Training", image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-tripul" },
  { slug: "recovery-is-your-best-friend", title: "Why recovery is your best friend in Bali's heat", category: "Recovery", image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-grassmc" }
]

const article = computed(() => {
  const slug = route.params.slug
  return articlesData[slug] || articlesData["stay-fit-bali-food"]
})

const recommendations = computed(() => {
  const currentSlug = route.params.slug
  return allTips.filter(t => t.slug !== currentSlug)
})

watch(() => route.params.slug, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style>
.prose-content h2 {
  color: var(--fallback-bc,oklch(var(--bc)/1));
  /* Reliable offset directly on headers */
  scroll-margin-top: 120px;
}
.prose-content p {
  color: var(--fallback-bc,oklch(var(--bc)/0.8));
  line-height: 1.7;
}
</style>

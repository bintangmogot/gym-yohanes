<template>
  <div class="bg-base-100 min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20 xl:px-30">
    <div class="max-w-7xl mx-auto">
      <header class="mb-16 text-center">
        <h1 class="text-6xl md:text-8xl font-anton uppercase text-base-content leading-none mb-4">Fitness <span class="text-primary italic">Tips</span></h1>
        <p class="text-base-content/60 font-body max-w-2xl mx-auto text-lg">
          Expert insights on training, nutrition, and lifestyle optimization specifically for expats and tourists in Bali.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="(post, index) in tips" :key="index" class="bg-base-200 group overflow-hidden border border-base-300 hover:border-primary transition-all duration-300">
          <div class="aspect-video overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              <span>{{ post.category }}</span>
              <span class="w-1 h-1 bg-primary rounded-full"></span>
              <span class="text-base-content/40">{{ post.date }}</span>
            </div>
            <h2 class="text-3xl font-anton uppercase text-base-content mb-4 leading-tight group-hover:text-primary transition-colors cursor-pointer">{{ post.title }}</h2>
            <p class="text-base-content/60 font-body mb-6 line-clamp-3 italic">{{ post.excerpt }}</p>
            <button class="text-base-content font-heading uppercase text-sm border-b-2 border-primary pb-1 hover:text-primary transition-all">Read Insight</button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const tips = [
  {
    title: "How to stay fit while enjoying Bali's food scene",
    excerpt: "Traveling to Bali doesn't mean you have to lose your progress. Learn how to balance Nasi Campur with high-intensity training.",
    category: "Nutrition",
    date: "MAR 10, 2026",
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-legpress"
  },
  {
    title: "3 Essential weight training tips for expats",
    excerpt: "Consistency is harder when you're living the island life. Coach Yohanes shares the secrets to maintaining muscle mass in the tropics.",
    category: "Training",
    date: "MAR 05, 2026",
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-tripul"
  },
  {
    title: "Why recovery is your best friend in Bali's heat",
    excerpt: "Training in Canggu's humidity requires a different approach to recovery. Discover the best local recovery strategies.",
    category: "Recovery",
    date: "FEB 28, 2026",
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-grassmc"
  }
]
</script>

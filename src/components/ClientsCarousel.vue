<template>
  <section class="relative py-20 px-6 md:px-12 lg:px-20 lg:py-28 xl:px-30 bg-base-200 overflow-hidden" id="clients">
    
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div class="flex flex-col items-center gap-10 lg:gap-14 mx-auto max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4 text-center">
        <h2 class="text-5xl md:text-7xl text-base-content font-anton font-black uppercase leading-tight">
          real people. real <span class="text-primary">results.</span>
        </h2>
        <p class="text-base-content/60 font-body text-body-lg max-w-xl">
          A collection of clients who transformed their lives training with Coach Yohan.
        </p>
      </div>

      <!-- Stats Summary -->
      <div class="flex items-center justify-center gap-8 md:gap-16">
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl md:text-4xl font-anton text-primary">50+</span>
          <span class="text-xs md:text-sm font-body text-base-content/60 uppercase tracking-wider">Clients</span>
        </div>
        <div class="w-px h-10 bg-primary/20"></div>
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl md:text-4xl font-anton text-primary">95%</span>
          <span class="text-xs md:text-sm font-body text-base-content/60 uppercase tracking-wider">Success Rate</span>
        </div>
        <div class="w-px h-10 bg-primary/20"></div>
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl md:text-4xl font-anton text-primary">5+</span>
          <span class="text-xs md:text-sm font-body text-base-content/60 uppercase tracking-wider">Years</span>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- CLIENT GALLERY CAROUSEL -->
      <!-- ========================================== -->
      <div class="w-full relative">

        <!-- ========================================== -->
        <!-- MOBILE: Horizontal Scroll                  -->
        <!-- ========================================== -->
        <div 
          class="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 scrollbar-hide"
          ref="mobileScroll"  
          @scroll="handleMobileScroll"
        >
          <div 
            v-for="(client, index) in clients" 
            :key="'m-' + index"
            class="snap-center shrink-0 w-[80%] bg-base-100 border border-primary/5 overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <!-- Image -->
            <div class="relative overflow-hidden cursor-pointer" @click="openModal(client.image)">
              <img 
                :src="client.image" 
                :alt="client.title" 
                class="w-full aspect-4/3 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <!-- Tag badge on image -->
              <span class="absolute top-3 left-3 bg-primary text-white text-[10px] font-heading tracking-[0.15em] uppercase px-3 py-1 shadow-lg shadow-primary/20">
                {{ client.tag }}
              </span>
            </div>
            <!-- Info -->
            <div class="p-4 flex items-center justify-between gap-3">
              <div>
                <h3 class="text-lg font-anton uppercase text-base-content leading-tight">{{ client.title }}</h3>
                <p class="text-xs font-body text-base-content/60 mt-0.5">{{ client.desc }}</p>
              </div>
              <span class="shrink-0 text-sm font-heading text-primary bg-primary/8 px-3 py-1.5 tracking-wide">
                {{ client.metric }}
              </span>
            </div>
          </div>
        </div>

        <!-- Mobile Dots -->
        <div class="flex md:hidden justify-center gap-1.5 pt-2">
          <button 
            v-for="(client, index) in clients" 
            :key="'dot-m-' + index"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="activeMobileIndex === index ? 'w-6 bg-primary' : 'w-1.5 bg-base-content/30'"
          ></button>
        </div>

        <!-- ========================================== -->
        <!-- DESKTOP: 3-Column Grid Carousel            -->
        <!-- ========================================== -->
        <div class="hidden md:block overflow-hidden">
          <div 
            class="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            :style="{ transform: `translateX(-${currentPage * 100}%)` }"
          >
            <div 
              v-for="(chunk, cIndex) in desktopChunks" 
              :key="cIndex" 
              class="w-full shrink-0"
            >
              <div class="grid grid-cols-3 gap-5 xl:gap-6">
                <div 
                  v-for="(client, i) in chunk" 
                  :key="i" 
                  class="bg-base-100 border border-primary/5 overflow-hidden group hover:border-primary/15 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-500 animate-card-in"
                  :style="{ animationDelay: `${i * 120}ms` }"
                >
                  <!-- Image Container -->
                  <div class="relative overflow-hidden cursor-pointer" @click="openModal(client.image)">
                    <img 
                      :src="client.image" 
                      :alt="client.title" 
                      class="w-full aspect-9/16 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    
                    <!-- Tag badge -->
                    <span class="absolute top-4 left-4 bg-primary text-white text-[10px] font-heading tracking-[0.15em] uppercase px-3 py-1 shadow-lg shadow-primary/20">
                      {{ client.tag }}
                    </span>

                    <!-- Zoom icon (appears on hover) -->
                    <div class="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-md">
                      <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>

                    <!-- Bottom accent line -->
                    <div class="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500"></div>
                  </div>

                  <!-- Info Section -->
                  <div class="p-5 xl:p-6 flex items-start justify-between gap-3">
                    <div class="flex flex-col gap-1">
                      <h3 class="text-xl xl:text-2xl font-anton uppercase text-base-content leading-tight group-hover:text-primary transition-colors duration-300">{{ client.title }}</h3>
                      <p class="text-sm font-body text-base-content/60">{{ client.desc }}</p>
                    </div>
                    <span class="shrink-0 text-sm font-heading text-primary bg-primary/8 px-3 py-1.5 tracking-wide mt-0.5">
                      {{ client.metric }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Navigation Arrows -->
        <button 
          v-if="desktopChunks.length > 1"
          @click="prevPage" 
          class="hidden md:flex absolute left-1 lg:-left-5 xl:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 xl:w-12 xl:h-12 items-center justify-center bg-base-100/90 backdrop-blur-sm border border-primary/10 text-base-content hover:bg-primary hover:text-primary-content hover:border-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn"
          aria-label="Previous"
        >
          <svg class="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          v-if="desktopChunks.length > 1"
          @click="nextPage" 
          class="hidden md:flex absolute right-1 lg:-right-5 xl:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 xl:w-12 xl:h-12 items-center justify-center bg-base-100/90 backdrop-blur-sm border border-primary/10 text-base-content hover:bg-primary hover:text-primary-content hover:border-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn"
          aria-label="Next"
        >
          <svg class="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>

      </div>

      <!-- Desktop Dots -->
      <div class="hidden md:flex items-center gap-2" v-if="desktopChunks.length > 1">
        <button 
          v-for="(chunk, index) in desktopChunks" 
          :key="'dot-d-' + index" 
          @click="goToPage(index)"
          class="relative h-2.5 rounded-full transition-all duration-500 ease-out focus:outline-none"
          :class="currentPage === index 
            ? 'w-8 bg-primary shadow-md shadow-primary/30' 
            : 'w-2.5 bg-base-content/30 hover:bg-base-content/50'"
        >
          <span v-if="currentPage === index" class="absolute inset-0 rounded-full bg-primary/40 animate-ping-slow"></span>
        </button>
      </div>

      <!-- View All Link -->
      <router-link :to="{ name: 'Clients' }" class="w-fit flex items-center gap-2 text-base-content font-heading text-button underline px-6 py-2 hover:text-primary hover:bg-base-100 hover:shadow-lg hover:scale-102 transition-all duration-100 -m-5 group/link">
        View All Transformations
        <svg class="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
      </router-link>

    </div>

    <!-- Image Lightbox Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" @click="closeModal">
          <div class="relative max-w-5xl max-h-screen animate-modal-in" @click.stop>
            <button @click="closeModal" class="absolute -top-14 right-0 text-white/70 hover:text-white transition-colors p-2 group">
              <svg class="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img :src="selectedImage" class="max-h-[85vh] w-auto shadow-2xl" alt="Full screen client photo" @click.stop />
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

// ==========================================
// DATA
// ==========================================
const clients = [
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/client-clemens",
    title: "Weight Loss Journey",
    tag: "Fat Loss",
    desc: "Lost 20kg in 6 months",
    metric: "-20 KG"
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/client1",
    title: "Muscle Gain",
    tag: "Hypertrophy",
    desc: "Gained 5kg lean muscle",
    metric: "+5 KG"
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/client2",
    title: "Post-Pregnancy",
    tag: "Recovery",
    desc: "Back in shape in 4 months",
    metric: "4 MO"
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/client-clemens",
    title: "Strength Consult",
    tag: "Strength",
    desc: "Doubled lifting PRs",
    metric: "2X PR"
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/client1",
    title: "Lifestyle Change",
    tag: "Wellness",
    desc: "Healthy habits for life",
    metric: "100%"
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/client2",
    title: "Competition Prep",
    tag: "Bodybuilding",
    desc: "Stage ready in 12 weeks",
    metric: "12 WK"
  }
];

// ==========================================
// STATE
// ==========================================
const currentPage = ref(0);
const selectedImage = ref(null);
const activeMobileIndex = ref(0);
const mobileScroll = ref(null);
const autoPlayInterval = ref(null);

// ==========================================
// COMPUTED
// ==========================================
const desktopChunks = computed(() => {
  const chunks = [];
  for (let i = 0; i < clients.length; i += 3) {
    chunks.push(clients.slice(i, i + 3));
  }
  return chunks;
});

// ==========================================
// METHODS
// ==========================================
const nextPage = () => {
  currentPage.value = (currentPage.value + 1) % desktopChunks.value.length;
  resetAutoPlay();
};

const prevPage = () => {
  currentPage.value = (currentPage.value - 1 + desktopChunks.value.length) % desktopChunks.value.length;
  resetAutoPlay();
};

const goToPage = (index) => {
  currentPage.value = index;
  resetAutoPlay();
};

const handleMobileScroll = () => {
  if (!mobileScroll.value) return;
  const container = mobileScroll.value;
  const scrollLeft = container.scrollLeft;
  const itemWidth = container.clientWidth * 0.80 + 16;
  activeMobileIndex.value = Math.round(scrollLeft / itemWidth);
};

const openModal = (img) => {
  selectedImage.value = img;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedImage.value = null;
  document.body.style.overflow = '';
};

const startAutoPlay = () => {
  autoPlayInterval.value = setInterval(() => {
    currentPage.value = (currentPage.value + 1) % desktopChunks.value.length;
  }, 6000);
};

const resetAutoPlay = () => {
  clearInterval(autoPlayInterval.value);
  startAutoPlay();
};

// ==========================================
// LIFECYCLE
// ==========================================
onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(autoPlayInterval.value);
});
</script>

<style scoped>
@keyframes cardIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-card-in {
  animation: cardIn 0.5s ease-out both;
}

@keyframes pingSlow {
  0% { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(2); opacity: 0; }
}
.animate-ping-slow {
  animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.animate-modal-in {
  animation: modalIn 0.3s ease-out;
}

.modal-enter-active { transition: opacity 0.3s ease; }
.modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>

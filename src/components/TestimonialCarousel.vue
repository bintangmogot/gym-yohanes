<template>
  <section class="py-20 px-6 md:px-12 lg:px-20 lg:py-30 xl:px-30 bg-bg-secondary">
    <div class="flex flex-col items-center gap-6 lg:gap-12 mx-auto max-w-7xl">
      <h2 class="text-5xl md:text-7xl text-dark-bg font-anton font-black uppercase leading-tight text-center">
        real people. real <span class="text-primary">results.</span>
      </h2>

      <div class="w-full bg-none shadow-none md:shadow-xl md:bg-white md:py-10 xl:py-20">
        <!-- ========================================== -->
        <!-- VERSI MOBILE -->
        <!-- ========================================== -->
        <div class="carousel w-full md:hidden shadow-lg" @scroll="handleScroll($event, 'm')">
          <div v-for="(img, index) in testimonials" :key="'m-' + index" :id="'m' + (index + 1)" class="carousel-item relative w-full group">
            <div class="relative w-full">
              <img :src="img.image" class="w-full aspect-4/3 object-cover cursor-zoom-in group-hover:opacity-95 transition-opacity" :alt="img.title" @click="openModal(img.image)" />
              <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6">
                 <h3 class="text-3xl font-anton uppercase text-white drop-shadow-lg">{{ img.title }}</h3>
                 <p class="text-sm font-body text-gray-200 drop-shadow-md">{{ img.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- VERSI DESKTOP -->
        <!-- ========================================== -->
        <div class="carousel w-full hidden md:flex" @scroll="handleScroll($event, 'd')">
          <div v-for="(chunk, index) in desktopChunks" :key="'d-' + index" :id="'d' + (index + 1)" class="carousel-item relative w-full">
            <div class="grid grid-cols-3 gap-6 w-full px-16 xl:px-20">
              <div v-for="(img, i) in chunk" :key="i" class="w-full relative group cursor-pointer overflow-hidden" @click="openModal(img.image)">
                <img :src="img.image" class="w-full object-cover aspect-4/3 cursor-zoom-in group-hover:scale-110 transition-transform duration-500 z-1" :alt="img.title" />
                <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-2 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 class="text-3xl font-anton uppercase text-white drop-shadow-lg">{{ img.title }}</h3>
                  <p class="text-sm font-body text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{{ img.desc }}</p>
                </div>
              </div>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2 z-0">
              <button @click="scrollToSlide(index > 0 ? index : desktopChunks.length, 'd')" class="btn btn-square btn-outline rounded-none text-primary lg:text-text-body hover:text-primary hover:bg-white hover:border-primary hover:shadow-md w-8 h-8 xl:w-10 xl:h-10">❮</button>
              <button @click="scrollToSlide(index < desktopChunks.length - 1 ? index + 2 : 1, 'd')" class="btn btn-square btn-outline rounded-none text-primary lg:text-text-body hover:text-primary hover:bg-white hover:border-primary hover:shadow-md w-8 h-8 xl:w-10 xl:h-10">❯</button>
            </div>
          </div>
        </div>
        <!-- INDIKATOR DOTS -->
        <div class="flex justify-center w-full pt-4 gap-2">
          <!-- Dots Mobile -->
          <div class="flex gap-1 md:hidden">  
            <button v-for="(item, index) in testimonials" :key="'dot-m-' + index" @click="scrollToSlide(index + 1, 'm')" 
              class="h-2 rounded-full transition-all duration-300"
              :class="activeSlideMobile === index + 1 ? 'w-6 bg-primary' : 'w-2 bg-dark-bg/20 hover:bg-dark-bg/40'"></button>
          </div>
          <!-- Dots Desktop -->
          <div class="hidden md:flex gap-2">
            <button v-for="(chunk, index) in desktopChunks" :key="'dot-d-' + index" @click="scrollToSlide(index + 1, 'd')" 
              class="btn btn-xs btn-circle transition-all duration-300"
              :class="activeSlideDesktop === index + 1 ? 'btn-primary scale-110 shadow-md' : 'btn-ghost bg-dark-bg/5 hover:bg-dark-bg/10'">{{ index + 1 }}</button>
          </div>
        </div>
      </div>

      <a href="#" class="w-fit flex items-center gap-2 text-dark-bg font-heading text-button underline px-6 py-2 hover:text-primary hover:bg-bg-white hover:shadow-xs hover:scale-102 transition-all duration-100 -m-5 group/link">
        View All Transformations.
        <ArrowRightIcon class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </a>

    </div>

    <!-- Modal (Lightbox) -->
    <div v-if="selectedImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all duration-300" @click="closeModal">
      <div class="relative max-w-5xl max-h-screen">
        <button @click="closeModal" class="absolute -top-12 right-0 text-white hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img :src="selectedImage" class="max-h-[85vh] w-auto shadow-2xl" alt="Full screen testimonial" @click.stop />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

const selectedImage = ref(null);

const openModal = (img) => {
  selectedImage.value = img;
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
};

const closeModal = () => {
  selectedImage.value = null;
  document.body.style.overflow = '';
};

// Data driven testimonials with Titles and Descriptions
const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?auto=format&fit=crop&q=80&w=600",
    title: "Weight Loss Journey",
    desc: "Lost 20kg in 6 months"
  },
  {
    image: "https://images.unsplash.com/photo-1565098772267-60af42b81ef2?auto=format&fit=crop&q=80&w=600",
    title: "Muscle Gain",
    desc: "Gained 5kg lean muscle"
  },
  {
    image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?auto=format&fit=crop&q=80&w=600",
    title: "Post-Pregnancy",
    desc: "Back in shape in 4 months"
  },
  {
    image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&q=80&w=600",
    title: "Strength Consult",
    desc: "Doubled lifting PRs"
  },
  {
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600",
    title: "Lifestyle Change",
    desc: "Healthy habits for life"
  },
  {
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=600",
    title: "Competition Prep",
    desc: "Stage ready in 12 weeks"
  }
];

const activeSlideMobile = ref(1);
const activeSlideDesktop = ref(1);

// Handle manual scroll to update dots
const handleScroll = (event, prefix) => {
  const container = event.target;
  const slideWidth = container.offsetWidth;
  const scrollLeft = container.scrollLeft;
  const newIndex = Math.round(scrollLeft / slideWidth) + 1;
  
  if (prefix === 'm') {
    activeSlideMobile.value = newIndex;
  } else {
    activeSlideDesktop.value = newIndex;
  }
};

// Computed property for desktop chunks (3 images per slide)
const desktopChunks = computed(() => {
  const chunks = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    chunks.push(testimonials.slice(i, i + 3));
  }
  return chunks;
});

// Smooth scroll function
const scrollToSlide = (slideIndex, prefix) => {
  const element = document.getElementById(prefix + slideIndex);
  if (element) {
    if (prefix === 'm') activeSlideMobile.value = slideIndex;
    else activeSlideDesktop.value = slideIndex;

    // Scroll parent container
    element.parentElement.scrollTo({
      left: element.offsetLeft,
      behavior: 'smooth'
    });
  }
};
</script>

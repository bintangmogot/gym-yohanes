<template>
  <section 
    class="relative py-20 px-6 md:px-12 lg:px-20 lg:py-28 xl:px-30 bg-base-200 overflow-hidden min-h-screen" 
    id="activities"
  >
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div class="flex flex-col items-center gap-10 lg:gap-14 mx-auto max-w-[90rem] relative z-10">

      <!-- ==========================================
           SECTION HEADER
           ========================================== -->
      <div class="flex flex-col items-center gap-4 text-center">
        <div class="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 px-6 py-2 bg-base-100 shadow-[4px_4px_0px_0px_oklch(var(--p))]">
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span>Community Events</span>
        </div>
        <h1 class="text-5xl md:text-7xl text-base-content font-anton font-black uppercase leading-tight">
          my <span class="text-primary">activities.</span>
        </h1>
        <p class="text-base-content/60 font-body text-body-lg max-w-xl">
          Highlights from our community events, challenges, and training sessions across Bali.
        </p>
      </div>

      <!-- ==========================================
           EVENTS GRID
           ========================================== -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 w-full">
        <div 
          v-for="(event, i) in activities" 
          :key="event.id"
          class="bg-base-100 border border-primary/5 overflow-hidden shadow-lg group hover:border-primary/15 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-500 cursor-pointer animate-card-in"
          :style="{ animationDelay: `${i * 80}ms` }"
          @click="openEvent(event)"
        >
          <!-- Cover Image -->
          <div class="relative overflow-hidden">
            <img 
              :src="getImageUrl(event.cover, 400)" 
              :alt="event.title"
              class="w-full aspect-4/3 md:aspect-4/5 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            
            
            <!-- Photo Count Badge -->
            <div class="absolute top-2 right-2 md:top-3 md:right-3 bg-black/60 backdrop-blur-sm text-white text-[9px] md:text-[10px] font-heading flex items-center gap-1 px-2 py-0.5 md:px-2.5 md:py-1">
              <svg class="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
              {{ event.photos.length }}
            </div>

            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 shadow-md">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
            </div>
            
            <!-- Bottom Accent Line -->
            <div class="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500"></div>
          </div>

          <!-- Card Info -->
          <div class="p-4 md:p-5 flex flex-col gap-3">
            <h3 class="text-xl md:text-2xl font-anton uppercase text-base-content leading-tight tracking-wide group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {{ event.title }}
            </h3>
            
            <div class="flex items-center gap-2">
              <span class="inline-flex bg-primary/10 text-primary border border-primary/20 text-[10px] md:text-xs font-heading tracking-widest uppercase px-2.5 py-1">
                {{ event.tag }}
              </span>
              <span class="text-[10px] md:text-xs font-heading text-base-content/50 tracking-wide shrink-0">
                &bull; {{ event.location }}
              </span>
            </div>

            <p class="text-sm md:text-base font-body text-base-content/70 font-medium pt-1 border-t border-base-content/5 mt-1">
              {{ formatDate(event.date) }}
            </p>
          </div>
        </div>
      </div>

    </div>

    <!-- ==========================================
         PHOTO/VIDEO LIGHTBOX MODAL
         ========================================== -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="activeEvent" 
          class="fixed inset-0 z-50 bg-black/93 backdrop-blur-md"
          @click="closeModal"
        >
          <!-- Close Button -->
          <button
            @click.stop="closeModal"
            class="absolute top-3 right-3 md:top-5 md:right-5 z-20 text-white/60 hover:text-white transition-colors p-2 group"
            aria-label="Close gallery"
          >
            <svg class="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Event Info (top-left) -->
          <div class="absolute top-3 left-3 md:top-5 md:left-5 z-20 max-w-[60%]" @click.stop>
            <h3 class="font-anton text-white text-base md:text-lg uppercase leading-tight truncate">{{ activeEvent.title }}</h3>
            <p class="text-white/40 text-[10px] md:text-xs font-body">{{ formatDate(activeEvent.date) }} · {{ activeEvent.location }}</p>
          </div>

          <!-- Photo Counter (top-center) -->
          <div class="absolute top-4 left-1/2 -translate-x-1/2 md:top-6 z-20 text-white/50 text-xs md:text-sm font-heading tracking-widest" @click.stop>
            {{ currentPhotoIndex + 1 }} / {{ activeEvent.photos.length }}
          </div>

          <!-- ===== MAIN MEDIA AREA ===== -->
          <div class="absolute inset-0 flex items-center justify-center pt-14 pb-16 md:pt-16 md:pb-20 pointer-events-none">
            
            <!-- Left Arrow -->
            <button
              v-if="activeEvent.photos.length > 1"
              @click.stop="prevPhoto"
              class="pointer-events-auto absolute left-2 md:left-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Previous photo"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            <!-- Media Content -->
            <div class="pointer-events-auto flex flex-col items-center gap-3 max-w-[85vw] md:max-w-4xl" @click.stop>
              <!-- Video Player -->
              <video
                v-if="currentMedia?.type === 'video'"
                :src="getVideoUrl(currentMedia.src)"
                :key="'v-' + currentPhotoIndex"
                class="max-h-[55vh] md:max-h-[68vh] w-auto shadow-2xl animate-media-in"
                controls
                autoplay
                playsinline
              />
              <!-- Image Display -->
              <img
                v-else
                :src="getImageUrl(currentMedia?.src, 1200)"
                :alt="currentMedia?.caption || activeEvent.title"
                :key="'i-' + currentPhotoIndex"
                class="max-h-[55vh] md:max-h-[68vh] w-auto shadow-2xl animate-media-in select-none"
                draggable="false"
              />

              <!-- Caption -->
              <p
                v-if="currentMedia?.caption"
                class="text-white/90 text-md md:text-lg lg:text-xl font-body text-center max-w-2xl animate-caption-in mt-1 shadow-black/50 drop-shadow-md"
                :key="'c-' + currentPhotoIndex"
              >
                {{ currentMedia.caption }}
              </p>
            </div>

            <!-- Right Arrow -->
            <button
              v-if="activeEvent.photos.length > 1"
              @click.stop="nextPhoto"
              class="pointer-events-auto absolute right-2 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Next photo"
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <!-- ===== THUMBNAIL STRIP (bottom) ===== -->
          <div
            class="absolute bottom-3 md:bottom-5 left-0 right-0 flex justify-center px-4"
            @click.stop
          >
            <div class="flex gap-1.5 md:gap-2 overflow-x-auto max-w-full px-2 pb-1 scrollbar-hide">
              <button
                v-for="(photo, idx) in activeEvent.photos"
                :key="idx"
                @click.stop="currentPhotoIndex = idx"
                class="shrink-0 w-11 h-11 md:w-14 md:h-14 overflow-hidden border-2 transition-all duration-200"
                :class="idx === currentPhotoIndex
                  ? 'border-primary opacity-100 scale-110'
                  : 'border-white/20 opacity-40 hover:opacity-70'"
              >
                <img
                  v-if="photo.type !== 'video'"
                  :src="getImageUrl(photo.src, 80)"
                  class="w-full h-full object-cover"
                  :alt="'Thumbnail ' + (idx + 1)"
                  loading="lazy"
                />
                <div v-else class="relative w-full h-full bg-black/20">
                  <img
                    :src="getVideoThumbnailUrl(photo.src, 80)"
                    class="w-full h-full object-cover opacity-60"
                    :alt="'Video Thumbnail ' + (idx + 1)"
                  />  
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-4 h-4 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { activities } from '../data/activities';

// ==========================================
// CLOUDINARY URL BUILDERS
// ==========================================
const CLOUD_IMG = 'https://res.cloudinary.com/workstation-/image/upload';
const CLOUD_VID = 'https://res.cloudinary.com/workstation-/video/upload';

const getImageUrl = (path, width) => {
  if (!path) return '';
  const transforms = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return `${CLOUD_IMG}/${transforms}/gym-yohanes/${path}`;
};

const getVideoUrl = (path) => {
  if (!path) return '';
  return `${CLOUD_VID}/f_auto,q_auto/gym-yohanes/${path}`;
};

const getVideoThumbnailUrl = (path, width) => {
  if (!path) return '';
  const transforms = width ? `f_auto,q_auto,w_${width},so_auto` : 'f_auto,q_auto,so_auto';
  // Strip extension and replace with .jpg for Cloudinary image-from-video delivery
  const cleanPath = path.replace(/\.[^/.]+$/, "");
  return `${CLOUD_IMG}/${transforms}/gym-yohanes/${cleanPath}.jpg`;
};

// ==========================================
// DATE FORMATTING (Apr 13, 2026)
// ==========================================
const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

// ==========================================
// MODAL STATE
// ==========================================
const activeEvent = ref(null);
const currentPhotoIndex = ref(0);

const currentMedia = computed(() => {
  if (!activeEvent.value) return null;
  return activeEvent.value.photos[currentPhotoIndex.value];
});

// ==========================================
// MODAL METHODS
// ==========================================
const openEvent = (event) => {
  activeEvent.value = event;
  currentPhotoIndex.value = 0;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  activeEvent.value = null;
  currentPhotoIndex.value = 0;
  document.body.style.overflow = '';
};

const nextPhoto = () => {
  if (!activeEvent.value) return;
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % activeEvent.value.photos.length;
};

const prevPhoto = () => {
  if (!activeEvent.value) return;
  const len = activeEvent.value.photos.length;
  currentPhotoIndex.value = (currentPhotoIndex.value - 1 + len) % len;
};

// ==========================================
// KEYBOARD NAVIGATION (← → Esc)
// ==========================================
const handleKeydown = (e) => {
  if (!activeEvent.value) return;
  switch (e.key) {
    case 'Escape':
      closeModal();
      break;
    case 'ArrowLeft':
      prevPhoto();
      break;
    case 'ArrowRight':
      nextPhoto();
      break;
  }
};

// ==========================================
// LIFECYCLE
// ==========================================
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* Card entrance animation */
@keyframes cardIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-card-in {
  animation: cardIn 0.5s ease-out both;
}

/* Modal media entrance */
@keyframes mediaIn {
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
}
.animate-media-in {
  animation: mediaIn 0.25s ease-out;
}

/* Caption fade-in */
@keyframes captionIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-caption-in {
  animation: captionIn 0.3s ease-out 0.1s both;
}

/* Modal enter/leave transitions */
.modal-enter-active { transition: opacity 0.3s ease; }
.modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

/* Hide scrollbar on thumbnail strip */
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>
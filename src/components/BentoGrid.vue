<template>
    <section class="relative overflow-hidden" id="gallery">

        <!-- ======================= -->
        <!-- MOBILE / TABLET VIEW    -->
        <!-- Single background video -->
        <!-- ======================= -->
        <div class="lg:hidden relative min-h-[70vh] flex items-center justify-center">
            <!-- Background Video -->
            <div class="absolute inset-0 z-0">
                <video
                    class="w-full h-full object-cover"
                    autoplay muted loop playsinline
                    poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200"
                >
                    <source :src="videos[0].src" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-dark-bg/85"></div>
            </div>

            <!-- Overlay Content -->
            <div class="relative z-10 text-center px-6 py-20 w-full overflow-hidden">
                <span class="text-primary font-heading tracking-[0.3em] text-sm uppercase mb-4 block">Video Gallery</span>
                <h2 class="text-5xl md:text-7xl text-white font-anton font-black uppercase leading-tight mb-6">
                    15 <span class="text-primary">Videos.</span>
                </h2>
                <p class="text-gray-300 font-body text-md md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
                    12 years of training, 5 years of coaching — every video is real proof of dedication and transformation built alongside our members.
                </p>

                <!-- Mobile Horizontal Scroll -->
                <div class="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide">
                    <div
                        v-for="(video, index) in videos"
                        :key="index"
                        class="snap-center shrink-0 w-[160px] h-[220px] md:w-[200px] md:h-[280px] relative overflow-hidden group"
                    >
                        <video
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            autoplay muted loop playsinline
                        >
                            <source :src="video.src" type="video/mp4">
                        </video>
                        <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent">
                            <span class="text-white text-xs font-heading tracking-wider uppercase">{{ video.label }}</span>
                        </div>
                        <!-- Border accent -->
                        <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ===================== -->
        <!-- DESKTOP VIEW          -->
        <!-- Full 10-column Bento  -->
        <!-- ===================== -->
        <div class="hidden lg:block py-20 px-6 lg:px-20 xl:px-30 bg-bg-secondary">
            <div class="flex flex-col items-center gap-12">
                <!-- Header -->
                <div class="flex flex-col items-center gap-4 text-center">
                    <h2 class="text-5xl md:text-7xl text-text-title font-anton font-black uppercase leading-tight">
                        The <span class="text-primary">Gallery.</span>
                    </h2>
                    <p class="text-md md:text-lg text-text-body font-body font-normal leading-relaxed max-w-2xl">
                        12 years of training, 5 years of coaching — every video is real proof of dedication and transformation built alongside our members. Hover to unmute.
                    </p>
                </div>

                <!-- Bento Grid -->
                <div class="bento-grid w-full">
                    <div
                        v-for="(video, index) in videos"
                        :key="index"
                        :class="['bento-cell', `area-v${index + 1}`, 'group']"
                        @mouseenter="handleHover(index, true)"
                        @mouseleave="handleHover(index, false)"
                    >
                        <!-- Video -->
                        <video
                            :ref="el => { if (el) videoRefs[index] = el }"
                            class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            autoplay muted loop playsinline
                        >
                            <source :src="video.src" type="video/mp4">
                        </video>

                        <!-- Dark Overlay -->
                        <div class="absolute inset-0 bg-card-dark/40 group-hover:bg-dark-bg/10 transition-all duration-300"></div>

                        <!-- Label -->
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-card-dark/80 via-dark-bg/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span class="text-primary text-[10px] font-heading tracking-[0.2em] uppercase block mb-1">{{ video.category }}</span>
                            <span class="text-white text-sm font-heading tracking-wider uppercase">{{ video.label }}</span>
                        </div>

                        <!-- Index Number -->
                        <div class="absolute top-3 left-3 z-10">
                            <span class="text-white/20 font-anton text-3xl leading-none group-hover:text-primary/60 transition-colors">{{ String(index + 1).padStart(2, '0') }}</span>
                        </div>

                        <!-- Left accent border -->
                        <div class="absolute top-0 left-0 w-[3px] h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue'

const videoRefs = ref([])

const videos = ref([
    { src: '../src/assets/images/7657367-hd_1080_1920_25fps.mp4', label: 'Transformation #1',   category: 'Before & After' },
    { src: '../src/assets/images/7657367-hd_1080_1920_25fps.mp4', label: 'Morning HIIT',        category: 'Workout' },
    { src: '', label: 'Client Story',        category: 'Testimonial' },
    { src: '', label: 'Deadlift PR',         category: 'Highlights' },
    { src: '', label: 'Meal Prep Sunday',    category: 'Nutrition' },
    { src: '', label: 'Group Training',      category: 'Community' },
    { src: '', label: 'Transformation #2',   category: 'Before & After' },
    { src: '', label: 'Beach Workout',       category: 'Outdoor' },
    { src: '', label: 'Full Body Session',   category: 'Workout' },
    { src: '', label: 'Gym Tour',            category: 'Facility' },
    { src: '', label: 'Transformation #3',   category: 'Before & After' },
    { src: '', label: 'Boxing Drills',       category: 'Workout' },
    { src: '', label: 'Recovery Day',        category: 'Wellness' },
    { src: '', label: 'Coach Yohan',         category: 'Behind the Scenes' },
    { src: '', label: 'Community Event',     category: 'Events' },
])

function handleHover(index, isEnter) {
    const video = videoRefs.value[index]
    if (!video) return
    if (isEnter) {
        video.muted = false
        video.volume = 0.3
    } else {
        video.muted = true
    }
}
</script>

<style scoped>
/* =========================================
   BENTO GRID — 10 COLUMNS, 15 VIDEOS
   ========================================= */

/*
    LAYOUT MAP (Desktop):
    Each row = 10 columns. 6 rows total.
    
    Row 1:  v1  v1  | v2  v2  v2  | v3  v3  | v4  v4  v4
    Row 2:  v1  v1  | v5  v5  v5  | v6  v6  | v7  v7  v7
    Row 3:  v8  v8  v8  | v9  v9  v9  v9  | v10 v10 v10
    Row 4:  v11 v11 v11 | v9  v9  v9  v9  | v12 v12 v12
    Row 5:  v13 v13 v13 v13 | v14 v14 | v15 v15 v15 v15
    Row 6:  v13 v13 v13 v13 | v14 v14 | v15 v15 v15 v15
    
    Variety:
    - v1:  2 cols × 2 rows  (Tall / Vertical)
    - v9:  4 cols × 2 rows  (Large Landscape)
    - v13: 4 cols × 2 rows  (Large Landscape)
    - v14: 2 cols × 2 rows  (Tall / Vertical)
    - v15: 4 cols × 2 rows  (Large Landscape)
    - Rest: various 2-3 col × 1 row (Standard)
*/



.bento-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(6, 140px);
    gap: 4px;
    grid-template-areas:
        "v1  v1  v2  v2  v3  v3  v6  v4  v4  v4"
        "v1  v1  v5  v5  v5  v5  v6  v7  v7  v7"
        "v8  v8  v8  v9  v9  v9  v9  v10 v10 v12"
        "v11 v11 v11 v9  v9  v9  v9  v10 v10 v12"
        "v13 v13 v13 v13 v14 v14 v15 v15 v15 v15"
        "v13 v13 v13 v13 v14 v14 v15 v15 v15 v15";
}

/* XL: taller rows */
@media (min-width: 1280px) {
    .bento-grid {
        grid-template-rows: repeat(6, 170px);
    }
}

/* Area assignments */
.area-v1  { grid-area: v1; }
.area-v2  { grid-area: v2; }
.area-v3  { grid-area: v3; }
.area-v4  { grid-area: v4; }
.area-v5  { grid-area: v5; }
.area-v6  { grid-area: v6; }
.area-v7  { grid-area: v7; }
.area-v8  { grid-area: v8; }
.area-v9  { grid-area: v9; }
.area-v10 { grid-area: v10; }
.area-v11 { grid-area: v11; }
.area-v12 { grid-area: v12; }
.area-v13 { grid-area: v13; }
.area-v14 { grid-area: v14; }
.area-v15 { grid-area: v15; }

/* =========================================
   CELL STYLING — Sharp Industrial
   ========================================= */

.bento-cell {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    /* Sharp edges + left accent */
    border-left: 3px solid var(--color-primary);
    border-top: 1px solid rgba(255,255,255,0.05);
    border-right: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    /* Fallback bg when no video loaded */
    background: #111;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.bento-cell:hover {
    border-left-width: 5px;
    z-index: 5;
    box-shadow: 
        0 0 30px rgba(0,70,222,0.2),
        inset 0 0 60px rgba(0,70,222,0.05);
}

/* Cut corner on hover */
.bento-cell::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background: var(--color-primary);
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 15;
}
.bento-cell:hover::after {
    opacity: 1;
}

/* Bottom-left bracket */
.bento-cell::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid var(--color-primary);
    border-left: 2px solid var(--color-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 15;
}
.bento-cell:hover::before {
    opacity: 0.6;
}

/* =========================================
   MOBILE SCROLL — hide scrollbar
   ========================================= */

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
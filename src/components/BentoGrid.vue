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
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200"
                >
                    <source :src="getMobileBgSrc()" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-neutral/85"></div>
            </div>

            <!-- Overlay Content -->
            <div class="relative z-10 text-center px-6 py-20 w-full overflow-hidden">
                <span class="text-primary font-heading tracking-[0.3em] text-sm uppercase mb-4 block">Video Gallery</span>
                <h2 class="text-5xl md:text-7xl text-white font-anton font-black uppercase leading-tight mb-6">
                    15 <span class="text-primary">Videos.</span>
                </h2>
                <p class="text-base-content/30 font-body text-md md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
                    12 years of training, 5 years of coaching, every video is real proof of dedication and transformation built alongside our members.
                </p>

                <!-- Mobile Horizontal Scroll â€” center video plays with sound -->
                <div 
                    ref="mobileScrollContainer"
                    class="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide"
                    @scroll="onMobileScroll"
                >
                    <div
                        v-for="(video, index) in videos"
                        :key="index"
                        class="snap-center shrink-0 w-[160px] h-[220px] md:w-[200px] md:h-[280px] relative overflow-hidden group"
                    >
                        <video
                            :ref="el => { if (el) mobileVideoRefs[index] = el }"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            muted loop playsinline
                            preload="none"
                            :data-src="video.mobileSrc"
                            :data-mobile-index="index"
                        >
                            <source :src="video.mobileSrc" type="video/mp4">
                        </video>
                        <div class="absolute inset-0 transition-colors duration-300" :class="activeMobileIndex === index ? 'bg-black/10' : 'bg-black/40'"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent">
                            <span class="text-white text-xs font-heading tracking-wider uppercase">{{ video.label }}</span>
                        </div>
                        <!-- Border accent â€” thicker when active -->
                        <div class="absolute top-0 left-0 h-full bg-primary transition-all duration-300" :class="activeMobileIndex === index ? 'w-1.5' : 'w-1 opacity-50'"></div>
                        <!-- Sound indicator -->
                        <div v-if="activeMobileIndex === index" class="absolute top-2 right-2 w-6 h-6 bg-primary/80 flex items-center justify-center">
                            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ===================== -->
        <!-- DESKTOP VIEW          -->
        <!-- Full 10-column Bento  -->
        <!-- ===================== -->
        <div class="hidden lg:block py-20 px-6 lg:px-20 xl:px-30 bg-base-200">
            <div class="flex flex-col items-center gap-12">
                <!-- Header -->
                <div class="flex flex-col items-center gap-4 text-center">
                    <h2 class="text-5xl md:text-7xl text-base-content font-anton font-black uppercase leading-tight">
                        The <span class="text-primary">Gallery.</span>
                    </h2>
                    <p class="text-md md:text-lg text-base-content/80 font-body font-normal leading-relaxed max-w-2xl">
                        12 years of training, 5 years of coaching, every video is real proof of dedication and transformation built alongside our members. Hover to unmute.
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
                        <!-- Video â€” preload="none", loaded via IntersectionObserver -->
                        <video
                            :ref="el => { if (el) videoRefs[index] = el }"
                            class="bento-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            muted loop playsinline
                            preload="none"
                            :poster="video.poster"
                            :data-src="video.desktopSrc"
                            :data-index="index"
                        ></video>

                        <!-- Dark Overlay -->
                        <div class="absolute inset-0 bg-neutral-content/40 group-hover:bg-neutral/10 transition-all duration-300"></div>

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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const videoRefs = ref([])
const mobileVideoRefs = ref([])
let desktopObserver = null
let mobileObserver = null

// ==========================================
// VIDEO DATA â€” with adaptive resolution per cell size
// ==========================================
// Cell sizes:  large (4 col) => w_400, medium (3 col) => w_300, small (2 col) => w_250
// All: fps_20 for smooth but lightweight, du_8 for short loops, f_auto for best codec
// q_auto:low for aggressive quality optimization

const BASE = 'https://res.cloudinary.com/workstation-/video/upload'

// Helper to build optimized Cloudinary URL
function vidUrl(name, width = 300) {
    return `${BASE}/f_auto,q_auto,w_${width},fps_24,du_20/${name}`
}

// Helper to build poster (first frame as image)
function posterUrl(name) {
    return `${BASE}/f_auto,q_auto,w_300,so_0/${name}.jpg`
}

// Cell size mapping: index -> size category
// Based on the grid layout:
// Large (4col x 2row): v9(idx 8), v13(idx 12), v15(idx 14) => w_400
// Medium (3col x 1row): v4(idx 3), v5(idx 4), v7(idx 6), v8(idx 7), v10(idx 9), v11(idx 10) => w_300
// Small (2col): v1(idx 0), v2(idx 1), v3(idx 2), v6(idx 5), v12(idx 11), v14(idx 13) => w_250
const cellWidths = {
    0: 300, 1: 300, 2: 300,  // v1, v2, v3
    3: 350, 4: 350,           // v4, v5
    5: 350,                   // v6
    6: 350, 7: 350,           // v7, v8
    8: 1000,                   // v9 (large)
    9: 350,                   // v10
    10: 350,                  // v11
    11: 350,                  // v12
    12: 450,                  // v13 (large)
    13: 350,                  // v14
    14: 450,                  // v15 (large)
}

const videoNames = [
    'gym-yohanes/videos/20230316_130904',
    'gym-yohanes/videos/20230320_095346',
    'gym-yohanes/videos/20230320_095900',
    'gym-yohanes/videos/20230318_175710',
    'gym-yohanes/videos/20220630_165718',
    'gym-yohanes/videos/20220630_165400',
    'gym-yohanes/videos/20220502_124444',
    'gym-yohanes/videos/test1',
    'gym-yohanes/videos/WORKOUT_TIPS_BY_PT_SITUPS',
    'gym-yohanes/videos/WORKOUT_TIPS_BY_PT_SITUPS',
    'gym-yohanes/videos/20230316_130904',
    'gym-yohanes/videos/20230320_095346',
    'gym-yohanes/videos/20230318_175710',
    'gym-yohanes/videos/20220502_124444',
    'gym-yohanes/videos/20230320_095900',
]

const videoLabels = [
    { label: 'Transformation #1', category: 'Before & After' },
    { label: 'Morning HIIT',      category: 'Workout' },
    { label: 'Client Story',      category: 'Testimonial' },
    { label: 'Deadlift PR',       category: 'Highlights' },
    { label: 'Meal Prep Sunday',  category: 'Nutrition' },
    { label: 'Group Training',    category: 'Community' },
    { label: 'Transformation #2', category: 'Before & After' },
    { label: 'Beach Workout',     category: 'Outdoor' },
    { label: 'Full Body Session', category: 'Workout' },
    { label: 'Gym Tour',          category: 'Facility' },
    { label: 'Transformation #3', category: 'Before & After' },
    { label: 'Boxing Drills',     category: 'Workout' },
    { label: 'Recovery Day',      category: 'Wellness' },
    { label: 'Coach Yohan',       category: 'Behind the Scenes' },
    { label: 'Community Event',   category: 'Events' },
]

const videos = ref(videoNames.map((name, i) => ({
    desktopSrc: vidUrl(name, cellWidths[i] || 300),
    mobileSrc: vidUrl(name, 200),  // Very small for mobile thumbnails
    poster: posterUrl(name),
    ...videoLabels[i]
})))

function getMobileBgSrc() {
    return vidUrl(videoNames[0], 400)
}

// ==========================================
// INTERSECTION OBSERVER â€” Staggered Loading
// ==========================================
function setupDesktopObserver() {
    desktopObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target
            const index = parseInt(video.dataset.index)
            
            if (entry.isIntersecting) {
                // Stagger loading: delay based on index to avoid all loading at once
                const delay = index * 200 // 200ms between each video start
                setTimeout(() => {
                    if (!video.src && video.dataset.src) {
                        video.src = video.dataset.src
                        video.load()
                    }
                    video.play().catch(() => {}) // Silently handle autoplay block
                }, delay)
                // Only trigger load+play when entering viewport (no pause on exit!)
                // Reason: hover's scale-105 CSS transform briefly triggers an 'exit'
                // event in the observer â€” causing video.pause() to fire incorrectly.
            }
        })
    }, {
        rootMargin: '200px 0px', // Start loading 200px before entering viewport
        threshold: 0.1
    })

    // Observe all desktop videos
    nextTick(() => {
        videoRefs.value.forEach(video => {
            if (video) desktopObserver.observe(video)
        })
    })
}

// Active mobile video index
const activeMobileIndex = ref(0)
const mobileScrollContainer = ref(null)
let mobileScrollTimeout = null

function setupMobileObserver() {
    // Lazy-load mobile videos as they enter the scroll view
    mobileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target
            if (entry.isIntersecting) {
                // Load the video src if not loaded yet
                if (video.dataset.src && !video.getAttribute('src')) {
                    // The <source> tag already has the src,
                    // just trigger load & play when visible
                    video.load()
                }
            }
        })
    }, {
        root: mobileScrollContainer.value,
        rootMargin: '100px 0px',
        threshold: 0.1
    })

    nextTick(() => {
        mobileVideoRefs.value.forEach(video => {
            if (video) mobileObserver.observe(video)
        })
        // Initial: play & unmute the first (center) video
        updateActiveMobileVideo(0)
    })
}

function onMobileScroll() {
    clearTimeout(mobileScrollTimeout)
    mobileScrollTimeout = setTimeout(() => {
        if (!mobileScrollContainer.value) return
        const container = mobileScrollContainer.value
        const scrollLeft = container.scrollLeft
        const maxScroll = container.scrollWidth - container.clientWidth
        const totalVideos = mobileVideoRefs.value.filter(Boolean).length

        // Edge case: at the very start â†’ first video
        if (scrollLeft <= 10) {
            if (activeMobileIndex.value !== 0) updateActiveMobileVideo(0)
            return
        }

        // Edge case: at the very end â†’ last video
        if (scrollLeft >= maxScroll - 10) {
            const lastIndex = totalVideos - 1
            if (activeMobileIndex.value !== lastIndex) updateActiveMobileVideo(lastIndex)
            return
        }

        // Normal: find the closest video to the center
        const containerCenter = scrollLeft + container.clientWidth / 2

        let closestIndex = 0
        let closestDistance = Infinity

        mobileVideoRefs.value.forEach((video, index) => {
            if (!video) return
            const card = video.closest('.snap-center')
            if (!card) return
            const cardCenter = card.offsetLeft - container.offsetLeft + card.offsetWidth / 2
            const distance = Math.abs(containerCenter - cardCenter)
            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })

        if (closestIndex !== activeMobileIndex.value) {
            updateActiveMobileVideo(closestIndex)
        }
    }, 100)
}

function updateActiveMobileVideo(newIndex) {
    // Pause + mute all mobile videos
    mobileVideoRefs.value.forEach((video, i) => {
        if (!video) return
        if (i === newIndex) {
            video.muted = false
            video.volume = 0.4
            if (video.readyState >= 2) {
                // Already has data â€” play immediately
                video.play().catch(() => {})
            } else {
                // Not loaded yet â€” load first, then play when ready
                video.load()
                video.addEventListener('canplay', () => {
                    video.play().catch(() => {})
                }, { once: true })
            }
        } else {
            video.muted = true
            video.pause()
        }
    })
    activeMobileIndex.value = newIndex
}

// ==========================================
// HOVER HANDLER
// ==========================================
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

// ==========================================
// LIFECYCLE
// ==========================================
onMounted(() => {
    // Only setup observer for the current view (mobile or desktop)
    if (window.innerWidth >= 1024) {
        setupDesktopObserver()
    } else {
        setupMobileObserver()
    }
})

onUnmounted(() => {
    if (desktopObserver) desktopObserver.disconnect()
    if (mobileObserver) mobileObserver.disconnect()
})
</script>

<style scoped>
/* =========================================
   BENTO GRID â€” 10 COLUMNS, 15 VIDEOS
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
    - v1:  2 cols Ã— 2 rows  (Tall / Vertical)
    - v9:  4 cols Ã— 2 rows  (Large Landscape)
    - v13: 4 cols Ã— 2 rows  (Large Landscape)
    - v14: 2 cols Ã— 2 rows  (Tall / Vertical)
    - v15: 4 cols Ã— 2 rows  (Large Landscape)
    - Rest: various 2-3 col Ã— 1 row (Standard)
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
   CELL STYLING â€” Sharp Industrial
   ========================================= */

.bento-cell {
    position: relative;
    overflow: hidden;
    cursor: default;
    border-left: 3px solid var(--color-primary);
    border-top: 1px solid rgba(255,255,255,0.05);
    border-right: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
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

/* GPU acceleration for video elements */
.bento-video {
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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
   MOBILE SCROLL â€” hide scrollbar
   ========================================= */

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>



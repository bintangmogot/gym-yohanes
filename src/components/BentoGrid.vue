<template>
    <section class="relative overflow-hidden" id="gallery">

        <!-- ======================= -->
        <!-- MOBILE / TABLET VIEW    -->
        <!-- Single background video -->
        <!-- ======================= -->
        <div class="lg:hidden relative min-h-[70vh] flex items-center justify-center">
            <!-- Background Video -->
            <div class="absolute inset-0 z-0">
                <!-- <video
                    class="w-full h-full object-cover"
                    autoplay muted loop playsinline
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200"
                >
                    <source :src="getMobileBgSrc()" type="video/mp4">
                </video> -->
                <div class="absolute inset-0 bg-neutral"></div>
            </div>

            <!-- Overlay Content -->
            <div class="relative z-10 text-center px-6 py-20 w-full overflow-hidden">
                <span class="text-primary font-heading tracking-[0.3em] text-sm uppercase mb-2 block">Video Gallery</span>
                <h2 class="text-5xl md:text-7xl text-white font-anton font-black uppercase leading-tight mb-5">
                    10 <span class="text-primary">Videos.</span>
                </h2>
                <p class="text-primary-content/70 font-body text-md md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
                    12 years of training, 5 years of coaching, every video is real proof of dedication and transformation built alongside our members.
                </p>

                <!-- Mobile Horizontal Scroll — center video plays with sound -->
                <div class="relative">
                    <div 
                        ref="mobileScrollContainer"
                        class="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide"
                        @scroll="onMobileScroll"
                    >
                        <div
                            v-for="(video, index) in videos"
                            :key="index"
                            class="snap-center snap-stop-always shrink-0 w-full h-[500px] md:w-[240px] md:h-[320px] relative overflow-hidden group"
                        >
                            <video
                                :ref="el => { if (el) mobileVideoRefs[index] = el }"
                                :class="['w-full h-full object-cover group-hover:scale-110 transition-transform duration-500', video.position || 'object-center']"
                                muted loop playsinline
                                preload="none"
                                :poster="video.poster"
                                :data-src="video.mobileSrc"
                                :data-mobile-index="index"
                            >
                            </video>
                            <div class="absolute inset-0 transition-colors duration-300" :class="activeMobileIndex === index ? 'bg-black/10' : 'bg-black/40'"></div>
                            
                            <!-- Video Info Overlay -->
                            <div class="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent">
                                <span class="text-white text-xs font-heading tracking-wider uppercase">{{ video.label }}</span>
                            </div>

                            <!-- Active Indicator Border -->
                            <div class="absolute top-0 left-0 h-full bg-primary transition-all duration-300" :class="activeMobileIndex === index ? 'w-1.5' : 'w-0'"></div>
                            
                            <!-- Center Indicator Label -->
                            <div v-if="activeMobileIndex === index" class="absolute top-4 left-4 bg-primary px-3 py-1">
                                <span class="text-white text-[10px] font-heading tracking-widest uppercase">Watching</span>
                            </div>
                        </div>
                    </div>

                    <!-- Floating Mute Toggle for Mobile -->
                    <button 
                        @click="toggleGlobalMute"
                        class="absolute bottom-10 right-0 z-20 w-12 h-12 bg-primary flex items-center justify-center shadow-2xl hover:bg-primary-focus transition-colors"
                    >
                        <svg v-if="isGlobalMuted" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                        <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- ===================== -->
        <!-- DESKTOP VIEW          -->
        <!-- Full 10-column Bento  -->
        <!-- ===================== -->
        <div class="hidden lg:block py-20 px-6 lg:px-20 xl:px-30 bg-base-200">
            <div class="flex flex-col items-center gap-12 max-w-7xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col items-center gap-4 text-center">
                    <h2 class="text-5xl md:text-7xl text-base-content font-anton font-black uppercase leading-tight">
                        The <span class="text-primary">Gallery.</span>
                    </h2>
                    <p class="text-md md:text-lg text-base-content/80 font-body font-normal leading-relaxed max-w-2xl">
                        12 years of training, 5 years of coaching, every video is real proof of dedication and transformation built alongside our members.
                    </p>
                    <p class="text-xs text-base-content/80 font-body font-normal leading-relaxed max-w-2xl -mb-4">
                        *Click anywhere on the page to unlock sound on hover.
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
                        <!-- Video — preload="none", loaded via IntersectionObserver -->
                        <video
                            :ref="el => { if (el) videoRefs[index] = el }"
                            :class="['bento-video w-full h-full object-cover transition-transform duration-500', video.position || 'object-center']"
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
const isGlobalMuted = ref(true)

// ── FIX: track hovered cells so the IntersectionObserver never pauses them ──
const hoveredIndexes = new Set()
// ─────────────────────────────────────────────────────────────────────────────

// ==========================================
// VIDEO DATA — with adaptive resolution per cell size
// ==========================================
const BASE = 'https://res.cloudinary.com/workstation-/video/upload'

function vidUrl(name, width = 300) {
    return `${BASE}/f_auto,q_auto,w_${width},fps_24,du_20/${name}`
}

function posterUrl(name, width = 400) {
    return `${BASE}/f_auto,q_auto,w_${width},so_0/${name}.jpg`
}

const cellWidths = {
    0: 300, 1: 300, 2: 300,
    3: 350, 4: 350,
    5: 350,
    6: 350, 7: 350,
    8: 1000,
    9: 350,
    // 10: 350,
    // 11: 350,
    // 12: 450,
    // 13: 350,
    // 14: 450,
}

const videoNames = [
    'gym-yohanes/videos/CLAUDIA_',
    'gym-yohanes/videos/GRETA',
    'gym-yohanes/videos/MARIA',
    'gym-yohanes/videos/MICHELE',
    'gym-yohanes/videos/LAURA',    
    'gym-yohanes/videos/WORKOUT_TIPS_BY_PT_SITUPS',
    'gym-yohanes/videos/MIRYAM',
    'gym-yohanes/videos/KENAN',    
    'gym-yohanes/videos/ALKESH',
    'gym-yohanes/videos/LUCAS',
    // 'gym-yohanes/videos/20220502_124444',
    // 'gym-yohanes/videos/20230320_095346',
    // 'gym-yohanes/videos/20230318_175710',
    // 'gym-yohanes/videos/20220502_124444',
    // 'gym-yohanes/videos/20230320_095900',
]

const videoLabels = [
    { label: 'Claudia', category: '', position: 'object-center' },
    { label: 'Greta', category: '', position: 'object-center' },
    { label: 'Maria', category: '', position: 'object-center' },
    { label: 'Michele', category: '', position: 'object-center' },
    { label: 'Laura', category: '', position: 'object-[center_60%]' }, // #5 - A little up
    { label: 'Workout Tips', category: '', position: 'object-center' },
    { label: 'Miryam', category: '', position: 'object-center' },
    { label: 'Kenan', category: '', position: 'object-center' },
    { label: 'Alkesh', category: '', position: 'object-[center_20%]' }, // #9 - More up
    { label: 'Lucas', category: '', position: 'object-[center_60%]' }, // #10 - Subtle up
]

const videos = ref(videoNames.map((name, i) => ({
    desktopSrc: vidUrl(name, cellWidths[i] || 300),
    mobileSrc: vidUrl(name, 720), // HD quality for mobile
    poster: posterUrl(name, 720),    // Match poster quality to video
    ...videoLabels[i]
})))

function getMobileBgSrc() {
    return vidUrl(videoNames[0], 400)
}

// ==========================================
// INTERSECTION OBSERVER — Staggered Loading
// ==========================================
function setupDesktopObserver() {
    desktopObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target
            const index = parseInt(video.dataset.index)

            if (entry.isIntersecting) {
                const delay = index * 100
                setTimeout(() => {
                    if (!video.src && video.dataset.src) {
                        video.src = video.dataset.src
                    }
                    if (video.paused) {
                        video.play().catch(() => {})
                    }
                }, delay)
            } else {
                // ── FIX 1: skip pause if the user is hovering this cell ──────
                if (!hoveredIndexes.has(index)) {
                    video.pause()
                }
                // ─────────────────────────────────────────────────────────────
            }
        })
    }, {
        rootMargin: '100px 0px',
        threshold: 0.05
    })

    nextTick(() => {
        videoRefs.value.forEach(video => {
            if (video) desktopObserver.observe(video)
        })
    })
}

// ==========================================
// HOVER HANDLER
// ==========================================
// ==========================================
// HOVER HANDLER
// ==========================================
function handleHover(index, isEnter) {
    const video = videoRefs.value[index]
    if (!video) return

    if (isEnter) {
        // ── FIX 2: register hover so observer won't pause this video ─────────
        hoveredIndexes.add(index)
        
        // ── FIX 3: load src if not yet loaded ──────────
        if (!video.src && video.dataset.src) {
            video.src = video.dataset.src
        }
        
        // Nyalakan suara
        video.muted = false
        video.volume = 0.3
        
        // FIX UTAMA: Hanya jalankan play() JIKA video sedang pause.
        // Jika sudah jalan, kita cukup mengubah property muted di atas tanpa memanggil play() lagi.
        if (video.paused) {
            video.play().catch(() => {
                // Jatuh ke sini jika browser memblokir audio (karena user belum klik web)
                video.muted = true
                video.play().catch(() => {})
            })
        }
    } else {
        hoveredIndexes.delete(index) 
        video.muted = true
        // intentionally NOT pausing — keep playing muted on mouse leave
    }
}

// ==========================================
// MOBILE (unchanged from original)
// ==========================================
const activeMobileIndex = ref(0)
const mobileScrollContainer = ref(null)
let mobileScrollTimeout = null

function setupMobileObserver() {
    mobileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target
            const index = parseInt(video.dataset.mobileIndex)

            if (entry.isIntersecting) {
                // Load video source if needed
                if (video.dataset.src && !video.src) {
                    video.src = video.dataset.src
                    video.load()
                }

                // Jika video muncul lebih dari 70% di layar, jadikan aktif
                if (entry.intersectionRatio > 0.7) {
                    if (activeMobileIndex.value !== index) {
                        updateActiveMobileVideo(index)
                    }
                }
            } else {
                video.pause()
            }
        })
    }, {
        root: mobileScrollContainer.value,
        threshold: [0, 0.5, 0.7, 1.0] // Pantau beberapa titik perubahan
    })

    nextTick(() => {
        mobileVideoRefs.value.forEach(video => {
            if (video) mobileObserver.observe(video)
        })
        updateActiveMobileVideo(0)
    })
}

// onMobileScroll dihapus karena sudah dihandle oleh IntersectionObserver yang lebih smooth
function onMobileScroll() {}

function toggleGlobalMute() {
    isGlobalMuted.value = !isGlobalMuted.value
    const currentVideo = mobileVideoRefs.value[activeMobileIndex.value]
    if (currentVideo) {
        currentVideo.muted = isGlobalMuted.value
        if (!isGlobalMuted.value) {
            currentVideo.volume = 0.6
            currentVideo.play().catch(() => {})
        }
    }
}

function updateActiveMobileVideo(newIndex) {
    mobileVideoRefs.value.forEach((video, i) => {
        if (!video) return
        if (i === newIndex) {
            video.muted = isGlobalMuted.value
            video.volume = 0.6
            
            // Explicitly ensure src is set and loaded
            if (!video.src && video.dataset.src) {
                video.src = video.dataset.src
            }
            
            video.play().catch(() => {
                // Autoplay blocked handling
                video.muted = true
                video.play().catch(() => {})
            })
        } else {
            video.muted = true
            video.pause()
            video.currentTime = 0
        }
    })
    activeMobileIndex.value = newIndex
}

// ==========================================
// LIFECYCLE
// ==========================================
onMounted(() => {
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
   BENTO GRID — 10 COLUMNS, 10 VIDEOS
   ========================================= */

.bento-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 140px);
    gap: 4px;
    grid-template-areas:
        "v1  v1  v2  v2  v2  v3  v3  v4  v4  v4"
        "v1  v1  v2  v2  v2  v3  v3  v4  v4  v4"
        "v5  v5  v5  v6  v6  v6  v6  v7  v7  v7"
        "v8  v8  v8  v6  v6  v6  v6  v7  v7  v7"
        "v8  v8  v8  v9  v9  v9  v10 v10 v10 v10";
}

@media (min-width: 1280px) {
    .bento-grid {
        grid-template-rows: repeat(5, 170px);
    }
}

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
/* .area-v11 { grid-area: v11; } */
/* .area-v12 { grid-area: v12; }
.area-v13 { grid-area: v13; }
.area-v14 { grid-area: v14; }
.area-v15 { grid-area: v15; } */

.snap-stop-always {
    scroll-snap-stop: always;
}

/* =========================================
   CELL STYLING — Sharp Industrial
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

.bento-video {
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

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
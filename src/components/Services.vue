<template>
    <section id="services" class="bg-neutral py-20 px-6 md:px-12 lg:px-20 xl:px-30 relative overflow-hidden">
        <!-- Decorative glow blobs -->
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col gap-4 md:gap-8 justify-start relative z-10">
            <h2 class="text-primary font-title italic uppercase font-black text-4xl">01. <span class="text-neutral-content">Services</span></h2>
            <hr class="w-full h-px border-primary/30">

            <div class="flex flex-row overflow-hidden w-full overflow-x-auto pb-8 gap-4 md:gap-8 justify-start">
                <!-- Card 1 — Primary (Purple) -->
                <div class="flex flex-col gap-8 group relative min-w-[280px]">
                    <div class="flex flex-1 flex-col gap-4 md:gap-8 bg-white/5 border-2 border-primary/40 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-200 p-8 backdrop-blur-sm">
                        <div class="w-12 h-12 md:w-14 md:h-14 rounded-none bg-primary/20 group-hover:bg-primary flex items-center justify-center text-primary transition-all duration-200 shrink-0">
                            <svg class="w-7 h-7 lg:w-9 lg:h-9 text-primary group-hover:text-neutral-content transition-all duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/>
                            </svg>
                        </div>
                        <h3 class="text-neutral-content font-title uppercase text-2xl">Personal Training</h3>
                        <p class="text-neutral-content/50 font-body text-md group-hover:text-neutral-content/80 transition-all duration-200">one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength.</p>
                        <div class="flex items-center justify-start">
                            <a href="#" class="w-fit flex items-center gap-2 text-primary font-button italic hover:text-neutral-content hover:scale-105 transition-all duration-300 group/link text-sm">
                               DETAILS
                                <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-0 right-5">
                        <h5 class="font-title text-[200px] uppercase text-primary/10 group-hover:text-primary/30 transition-all duration-200 z-0">1</h5>
                    </div>
                </div>

                <!-- Card 2 — Secondary (Teal) -->
                <div class="flex flex-col gap-8 group relative min-w-[280px]">
                    <div class="flex flex-1 flex-col gap-4 md:gap-8 bg-white/5 border-2 border-secondary/40 group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-200 p-8 backdrop-blur-sm">
                        <div class="w-12 h-12 md:w-14 md:h-14 rounded-none bg-secondary/20 group-hover:bg-secondary flex items-center justify-center text-secondary transition-all duration-200 shrink-0">
                            <svg class="w-7 h-7 lg:w-9 lg:h-9 text-secondary group-hover:text-neutral transition-all duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/>
                            </svg>
                        </div>
                        <h3 class="text-neutral-content font-title uppercase text-2xl">Online Coaching</h3>
                        <p class="text-neutral-content/50 font-body text-md group-hover:text-neutral-content/80 transition-all duration-200">structured remote programs with weekly check-ins, video reviews, and nutrition optimization.</p>
                        <div class="flex items-center justify-start">
                            <a href="#" class="w-fit flex items-center gap-2 text-secondary font-button italic hover:text-neutral-content hover:scale-105 transition-all duration-300 group/link text-sm">
                               DETAILS
                                <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-0 right-5 z-0">
                        <h5 class="font-title text-[200px] uppercase text-secondary/10 group-hover:text-secondary/30 transition-all duration-200">2</h5>
                    </div>
                </div>

                <!-- Card 3 — Secondary lagi (Teal, untuk variasi) -->
                <div class="flex flex-col gap-8 group relative min-w-[280px]">
                    <div class="flex flex-1 flex-col gap-4 md:gap-8 bg-white/5 border-2 border-primary/40 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-200 p-8 backdrop-blur-sm">
                        <div class="w-12 h-12 md:w-14 md:h-14 rounded-none bg-primary/20 group-hover:bg-primary flex items-center justify-center text-primary transition-all duration-200 shrink-0">
                            <svg class="w-7 h-7 lg:w-9 lg:h-9 text-primary group-hover:text-neutral-content transition-all duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/>
                            </svg>
                        </div>
                        <h3 class="text-neutral-content font-title uppercase text-2xl">Meal Planning</h3>
                        <p class="text-neutral-content/50 font-body text-md group-hover:text-neutral-content/80 transition-all duration-200">personalized nutrition plans tailored to your goals, lifestyle, and food preferences.</p>
                        <div class="flex items-center justify-start">
                            <a href="#" class="w-fit flex items-center gap-2 text-primary font-button italic hover:text-neutral-content hover:scale-105 transition-all duration-300 group/link text-sm">
                               DETAILS
                                <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-0 right-5">
                        <h5 class="font-title text-[200px] uppercase text-primary/10 group-hover:text-primary/30 transition-all duration-200 z-0">3</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

</script>
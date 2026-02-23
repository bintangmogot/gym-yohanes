<template>
    <section id="food" class="py-20 px-6 md:px-12 lg:px-20 xl:px-30 bg-base-200 overflow-hidden">
        <div class="flex flex-col items-center justify-center gap-12">
            <div class="flex flex-row items-start justify-between w-full">
                <div class="flex flex-col items-start justify-start gap-4">
                    <h3 class="text-primary font-bold italic tracking-wide uppercase font-body">Fuel Your Muscle</h3>
                    <h2 class="text-5xl md:text-6xl text-base-content font-anton font-black uppercase leading-tight"><span class="text-primary">Meal</span> Plan.</h2>
                    <p class="text-base-content/60 text-lg md:text-xl max-w-2xl">
                        The ultimate guide to staying shredded while enjoying the best food Bali has to offer.
                    </p>
                </div>
                <!-- Desktop button -->
                <div class="hidden md:flex flex-row w-full h-full justify-end self-end">
                     <a href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I'd%20like%20to%20pre-order%20a%20meal%20plan.%20Can%20you%20share%20more%20details%3F" target="_blank" class="flex flex-row items-center gap-3 bg-secondary px-8 py-4 font-button italic text-secondary-content shadow-lg hover:bg-primary hover:text-primary-content hover:scale-105 transition-all duration-300">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                    </svg>
                    PRE ORDER NOW</a>   
                </div>
            </div>
            <hr class="border border-[#7F8FCC] w-full" />
            
            <!-- Cards Container -->
            <!-- Mobile/Tablet: Horizontal Scroll (copied behavior from TrainingPackages) -->
            <!-- Desktop: Grid Layout -->
            <div class="flex flex-row gap-6 w-full overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 md:mx-0 md:px-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                
                <div v-for="(meal, index) in meals" :key="index" class="bg-base-100 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 flex flex-col min-w-[300px] md:min-w-[350px] lg:min-w-0 snap-center group relative h-full border border-base-300 hover:border-primary">
                    <!-- Image Area Wrapper -->
                    <div class="relative">
                        <div class="relative h-64 overflow-hidden">
                            <img :src="meal.image" :alt="meal.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            
                            <!-- Calories Badge -->
                            <div class="absolute top-0 right-0 bg-primary text-primary-content font-anton text-lg uppercase px-4 py-2">
                                {{ meal.calories }} KCAL
                            </div>
                        </div>
                        
                        <!-- Price Badge (Moved outside overflow-hidden) -->
                        <div class="absolute -bottom-6 right-6 w-16 h-16 bg-primary dark:bg-base-300 rounded-full flex items-center justify-center shadow-lg z-10">
                            <span class="text-white font-anton text-xl">{{ meal.price }}</span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-6 pt-10 flex flex-col gap-4 bg-base-100 grow ">
                        <div>
                            <h3 class="font-anton text-2xl uppercase text-base-content/80 leading-tight mb-1">{{ meal.title }}</h3>
                            <div class="flex items-center gap-2 text-base-content/60 font-body text-sm">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                {{ meal.description }}
                            </div>
                        </div>

                        <!-- Macros -->
                        <div class="grid grid-cols-3 gap-px bg-base-300/50 border border-base-300 mt-auto">
                            <!-- Protein - No Delay -->
                            <div class="relative overflow-hidden py-2 px-1 text-center">
                                <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out"></div>
                                <div class="relative z-10">
                                    <span class="block text-primary group-hover:text-white transition-colors duration-100 font-bold font-anton text-lg">{{ meal.macros.pro }}</span>
                                    <span class="block text-xs text-base-content group-hover:text-white/80 transition-colors duration-100 font-bold uppercase">PRO</span>
                                </div>
                            </div>
                            
                            <!-- Carbs - Delay 75ms -->
                            <div class="relative overflow-hidden py-2 px-1 text-center">
                                <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out delay-75"></div>
                                <div class="relative z-10">
                                    <span class="block text-primary group-hover:text-white transition-colors duration-100 delay-75 font-bold font-anton text-lg">{{ meal.macros.carb }}</span>
                                    <span class="block text-xs text-base-content group-hover:text-white/80 transition-colors duration-100 delay-75 font-bold uppercase">CARB</span>
                                </div>
                            </div>

                            <!-- Fat - Delay 150ms -->
                            <div class="relative overflow-hidden py-2 px-1 text-center">
                                <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out delay-150"></div>
                                <div class="relative z-10">
                                    <span class="block text-primary group-hover:text-white transition-colors duration-100 delay-150 font-bold font-anton text-lg">{{ meal.macros.fat }}</span>
                                    <span class="block text-xs text-base-content group-hover:text-white/80 transition-colors duration-100 delay-150 font-bold uppercase">FAT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Blue Stripe Bottom -->
                    <div class="h-1 w-full bg-primary bg-opacity-0 group-hover:bg-opacity-100 transition-all"></div>
                </div>

            </div>

             <div class="flex md:hidden flex-row w-full justify-center">
                <a href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I'd%20like%20to%20pre-order%20a%20meal%20plan.%20Can%20you%20share%20more%20details%3F" target="_blank" class="flex flex-row items-center gap-3 bg-secondary px-8 py-4 font-button italic text-secondary-content shadow-lg hover:bg-primary hover:text-primary-content hover:scale-105 transition-all duration-300 w-full justify-center">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
                    PRE ORDER NOW</a>   
                    
                </div>
                
                <div class="flex items-center justify-center">
                    <RouterLink :to="{name: 'Food'}" class="w-fit flex items-center gap-2 text-base-content font-button italic underline px-6 py-2 hover:text-primary hover:bg-base-100 hover:shadow-lg hover:scale-105 transition-all duration-300 -m-5 group/link">
                       VIEW ALL MEAL PLAN.
                        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </RouterLink>
            </div>

        </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';

const meals = ref([
    {
        id: 1,
        title: 'NASI GORENG AYAM PROTEIN',
        description: 'Rice + Chicken + Sambal',
        calories: 520,
        price: '95K',
        // Placeholder image - using Unsplash for reliable placeholders
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '35G', fat: '35G' }
    },
    {
        id: 2,
        title: 'GRILLED CHICKEN BREAST', 
        description: 'Rice + Chicken + Sambal',
        calories: 520,
        price: '100K',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '35G', fat: '35G' }
    },
    {
        id: 3,
        title: 'GYM RAT SPECIAL', 
        description: 'Rice + Chicken + Sambal',
        calories: 520,
        price: '125K',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '35G', fat: '35G' }
    },
    {
        id: 4,
        title: 'NASI GORENG AYAM PROTEIN',
        description: 'Rice + Chicken + Sambal',
        calories: 520,
        price: '95K',
        // Placeholder image - using Unsplash for reliable placeholders
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '35G', fat: '35G' }
    },
    {
        id: 5,
        title: 'GRILLED CHICKEN BREAST', 
        description: 'Rice + Chicken + Sambal',
        calories: 520,
        price: '100K',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '35G', fat: '35G' }
    },
    {
        id: 3,
        title: 'GYM BROH', 
        description: 'Rice + Chicken + Sambal',
        calories: 100000,
        price: '125K',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '35G', fat: '35G' }
    }
]);
</script>


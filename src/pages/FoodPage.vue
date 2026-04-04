<template>
    <section id="food" class="py-20 px-6 md:px-12 lg:px-20 xl:px-30 bg-base-200 overflow-hidden">
        <div class="flex flex-col items-center justify-center gap-12 max-w-7xl mx-auto">
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
                     <a href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I'm%20interested%20in%20your%20Meal%20Plan%20service.%20I'd%20love%20to%20get%20more%20info%20about%20pre-ordering%20macros-calculated%20meals%20in%20Bali.%20Thank%20you!" target="_blank" class="flex flex-row items-center gap-3 bg-primary px-8 py-3 text-button font-heading text-primary-content shadow-card hover:bg-primary-focus transition-all hover-lift">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                    </svg>
                    PRE ORDER NOW</a>   
                </div>
            </div>
            <hr class="border border-[#7F8FCC] w-full" />
            
            <!-- Category Filters -->
            <div class="flex flex-wrap items-center justify-center gap-2 md:gap-4 w-full">
                <button 
                    v-for="cat in categories" 
                    :key="cat.id"
                    @click="setTag(cat.id)"
                    :class="[
                        'px-6 py-2 font-heading tracking-wider transition-all border-2',
                        selectedTag === cat.id 
                            ? 'bg-primary border-primary text-white shadow-lg scale-105' 
                            : 'bg-transparent border-primary/30 text-base-content/60 hover:border-primary/60'
                    ]"
                >
                    {{ cat.name }}
                </button>
            </div>
            
            <!-- Cards Container -->
            <!-- Mobile/Tablet: Horizontal Scroll (copied behavior from TrainingPackages) -->
            <!-- Desktop: Grid Layout -->
            <div class="flex flex-row gap-6 xl:gap-3 w-full overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 md:mx-0 md:px-0 scrollbar-hide lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:pb-0">
                
                <div v-for="(meal, index) in paginatedMeals" :key="index" class="bg-base-100 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 flex flex-col min-w-[300px] md:min-w-[350px] lg:min-w-0 snap-center group relative h-full border border-base-300 hover:border-primary">
                    <!-- Image Area Wrapper -->
                    <div class="relative">
                        <div class="relative h-64 overflow-hidden">
                            <img :src="meal.image" :alt="meal.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            
                            <!-- Calories Badge -->
                            <div class="absolute top-0 right-0 bg-primary text-primary-content font-anton text-lg uppercase px-4 py-2">
                                {{ meal.calories }} KCAL
                            </div>
                        </div>
                        
                        <!-- Price Badge -->
                        <div class="absolute -bottom-6 right-6 w-16 h-16 bg-base-100 dark:bg-base-300 rounded-full flex items-center justify-center shadow-lg z-10">
                            <span class="text-primary font-anton text-xl">{{ meal.price }}</span>
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
                        <div class="grid grid-cols-3 gap-px bg-base-300/50 border border-base-300">
                            <!-- Protein -->
                            <div class="relative overflow-hidden py-2 px-1 text-center group/macro">
                                <div class="absolute inset-0 bg-primary translate-y-full group-hover/macro:translate-y-0 transition-transform duration-100 ease-out"></div>
                                <div class="relative z-10">
                                    <span class="block text-primary group-hover/macro:text-white transition-colors duration-100 font-bold font-anton text-lg">{{ meal.macros.pro }}</span>
                                    <span class="block text-xs text-secondary-content/60 group-hover/macro:text-white/80 transition-colors duration-100 font-bold uppercase">PRO</span>
                                </div>
                            </div>
                            
                            <!-- Carbs -->
                            <div class="relative overflow-hidden py-2 px-1 text-center group/macro">
                                <div class="absolute inset-0 bg-primary translate-y-full group-hover/macro:translate-y-0 transition-transform duration-100 ease-out"></div>
                                <div class="relative z-10">
                                    <span class="block text-primary group-hover/macro:text-white transition-colors duration-100 font-bold font-anton text-lg">{{ meal.macros.carb }}</span>
                                    <span class="block text-xs text-secondary-content/60 group-hover/macro:text-white/80 transition-colors duration-100 font-bold uppercase">CARB</span>
                                </div>
                            </div>

                            <!-- Fat -->
                            <div class="relative overflow-hidden py-2 px-1 text-center group/macro">
                                <div class="absolute inset-0 bg-primary translate-y-full group-hover/macro:translate-y-0 transition-transform duration-100 ease-out"></div>
                                <div class="relative z-10">
                                    <span class="block text-primary group-hover/macro:text-white transition-colors duration-100 font-bold font-anton text-lg">{{ meal.macros.fat }}</span>
                                    <span class="block text-xs text-secondary-content/60 group-hover/macro:text-white/80 transition-colors duration-100 font-bold uppercase">FAT</span>
                                </div>
                            </div>
                        </div>

                        <!-- Order per Card Button -->
                        <a 
                            :href="`https://wa.me/6285939533337?text=Hi Coach Yohan! I would like to order this meal:%0A%0A*${meal.title}*%0A- Price: ${meal.price}%0A%0AAdd-ons: %0ACustom-request: %0A%0AImage Food: ${meal.image}`" 
                            target="_blank" 
                            class="mt-auto flex items-center justify-center gap-2 bg-base-200 hover:bg-primary hover:text-white py-3 font-heading text-sm transition-all border border-primary/20"
                        >
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.782 11.782 0 001.534 5.77L0 24l6.323-1.659a11.727 11.727 0 005.72 1.488h.005c6.635 0 12.032-5.395 12.035-12.032a11.765 11.765 0 00-3.415-8.478"/></svg>
                            ORDER NOW
                        </a>
                    </div>
                    
                    <!-- Blue Stripe Bottom -->
                    <div class="h-1 w-full bg-primary bg-opacity-0 group-hover:bg-opacity-100 transition-all"></div>                </div>
            </div>

             <!-- Pagination UI -->
             <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-8">
                <button 
                    v-for="page in totalPages" 
                    :key="page"
                    @click="setPage(page)"
                    :class="[
                        'w-10 h-10 font-heading border-2 transition-all',
                        currentPage === page 
                            ? 'bg-primary border-primary text-white shadow-md scale-110' 
                            : 'bg-base-100 border-primary/20 text-base-content/60 hover:border-primary/50'
                    ]"
                >
                    {{ page }}
                </button>
             </div>

             <!-- Mobile button -->
             <div class="flex md:hidden flex-row w-full justify-center">
                <a href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I'm%20interested%20in%20your%20Meal%20Plan%20service.%20I'd%20love%20to%20get%20more%20info%20about%20pre-ordering%20macros-calculated%20meals%20in%20Bali.%20Thank%20you!" target="_blank" class="flex flex-row items-center gap-3 bg-primary px-8 py-3 text-button font-heading text-white shadow-card hover:bg-primary-focus transition-all hover-lift w-full justify-center">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                </svg>
                    PRE ORDER NOW</a>   
                    
                </div>
                

        </div>
        
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const meals = ref([
    {
        id: 1,
        title: 'NASI GORENG AYAM PROTEIN',
        description: 'Rice + Chicken + Sambal',
        calories: 520,
        price: '95K',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '35G', fat: '35G' },
        tag: 'high-protein'
    },
    {
        id: 2,
        title: 'GRILLED CHICKEN BREAST', 
        description: 'Rice + Chicken + Sambal',
        calories: 480,
        price: '100K',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '45G', carb: '10G', fat: '30G' },
        tag: 'high-protein'
    },
    {
        id: 3,
        title: 'GYM RAT SPECIAL', 
        description: 'Double Rice + Double Chicken',
        calories: 850,
        price: '125K',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '60G', carb: '80G', fat: '35G' },
        tag: 'muscle-gain'
    },
    {
        id: 4,
        title: 'AVOCADO TOAST EXTRA EGG',
        description: 'Bread + Egg + Avocado',
        calories: 450,
        price: '85K',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '20G', carb: '40G', fat: '25G' },
        tag: 'healthy-fat'
    },
    {
        id: 5,
        title: 'SALMON POKE BOWL',
        description: 'Salmon + Quinoa + Veggies',
        calories: 580,
        price: '115K',
        image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '30G', carb: '50G', fat: '20G' },
        tag: 'healthy-fat'
    },
    {
        id: 6,
        title: 'BEEF STEAK SPECIAL',
        description: 'Beef + Potato + Asparagus',
        calories: 720,
        price: '180K',
        image: 'https://yavuzceliker.github.io/sample-images/image-908.jpg',
        macros: { pro: '45G', carb: '20G', fat: '35G' },
        tag: 'muscle-gain'
    },
    {
        id: 7,
        title: 'VEGAN TEMPEH POWER',
        description: 'Tempeh + Red Rice + Sambal',
        calories: 480,
        price: '65K',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '25G', carb: '60G', fat: '15G' },
        tag: 'vegan'
    },
    {
        id: 8,
        title: 'CHICKEN CAESAR SALAD',
        description: 'Chicken + Lettuce + Parmesan',
        calories: 410,
        price: '80K',
        image: 'https://yavuzceliker.github.io/sample-images/image-708.jpg',
        macros: { pro: '35G', carb: '10G', fat: '25G' },
        tag: 'high-protein'
    },
    {
        id: 9,
        title: 'OATMEAL PROTEIN BOWL',
        description: 'Oats + Whey + Berries',
        calories: 450,
        price: '70K',
        image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '25G', carb: '65G', fat: '10G' },
        tag: 'high-protein'
    },
    {
        id: 10,
        title: 'GRILLED WHITE FISH',
        description: 'Fish + Salad + Lemon',
        calories: 380,
        price: '110K',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '35G', carb: '10G', fat: '15G' },
        tag: 'high-protein'
    },
    {
        id: 11,
        title: 'SWEET POTATO CHICKEN',
        description: 'Chicken + Sweet Potato',
        calories: 540,
        price: '90K',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '40G', carb: '45G', fat: '12G' },
        tag: 'muscle-gain'
    },
    {
        id: 12,
        title: 'BULKING BOWL',
        description: 'Beef + Egg + Double Rice',
        calories: 980,
        price: '135K',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        macros: { pro: '55G', carb: '110G', fat: '45G' },
        tag: 'muscle-gain'
    }
]); // (Data tetap ada di file, ini hanya ilustrasi blok yang diganti)

// --- LOGIKA FILTER & PAGINATION ---

const selectedTag = ref('all');
const currentPage = ref(1);
const itemsPerPage = 8; // Tampilkan 8 makanan per halaman

const categories = [
    { id: 'all', name: 'ALL MEALS' },
    { id: 'high-protein', name: 'HIGH PROTEIN' },
    { id: 'muscle-gain', name: 'MUSCLE GAIN' },
    { id: 'healthy-fat', name: 'HEALTHY FAT' },
    { id: 'vegan', name: 'VEGAN' },
];

// 1. MESIN PENYARING (berdasarkan Tag)
const filteredMeals = computed(() => {
    currentPage.value = 1; // RESET ke halaman 1 setiap kali ganti kategori
    if (selectedTag.value === 'all') return meals.value;
    return meals.value.filter(meal => meal.tag === selectedTag.value);
});

// 2. MESIN HALAMAN (memotong hasil saringan)
const paginatedMeals = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredMeals.value.slice(start, end);
});

// 3. HITUNG TOTAL HALAMAN
const totalPages = computed(() => {
    return Math.ceil(filteredMeals.value.length / itemsPerPage);
});

const setTag = (tagId) => {
    selectedTag.value = tagId;
};

const setPage = (page) => {
    currentPage.value = page;
    // Scroll ke atas section food biar user gak bingung
    document.getElementById('food')?.scrollIntoView({ behavior: 'smooth' });
};
</script>


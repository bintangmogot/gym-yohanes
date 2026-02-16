<template>
  <section class="py-20 px-6 md:px-12 lg:px-20 xl:px-30 bg-bg-secondary relative" id="location">
    <!-- Top Hill Divider -->
    <div class="absolute top-0 left-0 overflow-hidden leading-none transform -translate-y-full z-10 w-[calc(100%+1.3px)]">
        <svg class="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 Q600,0 1200,120 V120 H0 Z" class="fill-bg-secondary"></path>
        </svg>
    </div>
    <div class="flex flex-col items-center gap-12 max-w-7xl mx-auto w-full">
      
      <!-- Header -->
      <div class="flex flex-col items-center gap-4 text-center">
        <h2 class="text-5xl md:text-7xl text-dark-bg font-anton font-black uppercase leading-tight">
          Train <span class="text-primary">With Me.</span>
        </h2>
        <p class="text-md md:text-lg text-gray-600 font-body font-normal leading-relaxed max-w-2xl">
          Join me at Bali’s premier fitness destination. State-of-the-art equipment in the heart of Canggu.
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
        
        <!-- Left: Details Card -->
        <div class="bg-white p-8 md:p-12 border-l-4 border-primary shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center gap-8">
            
            <!-- Gym Identity -->
            <div>
                <div class="inline-block bg-blue-50 text-primary px-3 py-1 text-sm font-bold uppercase tracking-wider mb-2">Premium Facility</div>
                <h3 class="text-4xl font-anton uppercase text-dark-bg leading-none">AVENUE FITNESS CANGGU</h3>
                <p class="text-gray-500 mt-2">The most complete weight training facility in the area.</p>
            </div>

            <hr class="border-gray-100">

            <!-- Information List -->
            <div class="flex flex-col gap-6">
                <!-- Address -->
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-primary shrink-0">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <h4 class="sm:hidden font-bold text-dark-bg uppercase tracking-wide text-md font-heading mb-1">ADDRESS</h4>
                    </div>

                    <div>
                        <h4 class="hidden sm:block font-bold text-dark-bg uppercase tracking-wide text-md font-heading mb-1">ADDRESS</h4>
                        <p class="text-gray-600 leading-relaxed">Jl. Pantai Batu Bolong No.55, Canggu, North Kuta, Badung Regency, Bali 80351, Indonesia</p>
                    </div>
                </div>

                <!-- Hours -->
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-primary shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h4 class="sm:hidden font-bold text-dark-bg uppercase tracking-wide text-md font-heading mb-1">OPENING HOURS</h4>
                    </div>
                    <div>
                        <h4 class="hidden sm:block font-bold text-dark-bg uppercase tracking-wide text-md font-heading mb-1">OPENING HOURS</h4>
                        <div class="grid grid-cols-[80px_1fr] gap-x-4 text-gray-600">
                            <span class="font-medium">Mon - Sat</span>
                            <span>06:00 AM - 10:00 PM</span>
                            <span class="font-medium">Sunday</span>
                            <span>07:00 AM - 09:00 PM</span>
                        </div>
                    </div>
                </div>

                <!-- Facilities -->
                <div class="flex flex-col sm:flex-row gap-4 items-start">
                    <div class="flex flex-row items-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-primary shrink-0">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h4 class="sm:hidden font-bold text-dark-bg uppercase tracking-wide text-md font-heading mb-1">FACILITIES include</h4>
                    </div>
                    <div>
                        <h4 class="hidden sm:block font-bold text-dark-bg uppercase tracking-wide text-md font-heading mb-1">FACILITIES include</h4>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded mr-2 mb-2">Technogym Equipment</span>
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded mr-2 mb-2">Recovery Sauna</span>
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded mr-2 mb-2">Protein Bar</span>
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded mr-2 mb-2">Secure Parking</span>
                            <span class="inline-block bg-gray-100 px-2 py-1 rounded mr-2 mb-2">Showers & Lockers</span>
                        </p>
                    </div>
                </div>
            </div>
            
            
            <a href="https://www.google.com/maps/place/?q=place_id:ChIJO45gI5gk0i0RwBRJQ0QUZmk" target="_blank" rel="noopener noreferrer" class="mt-4 w-full text-center bg-primary text-white py-3 font-heading uppercase tracking-wider hover:bg-primary-hover transition-colors duration-300">
                Get Directions
            </a>


        </div>

        <!-- Right: Map Embed -->
        <div class="flex flex-col h-[500px] lg:h-auto min-h-[400px] w-full bg-gray-200 border-5 xl:border-8 border-primary relative overflow-hidden shadow-lg group">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4093867375276!2d115.13083627589578!3d-8.652516691394336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2489823028e3b%3A0x69661414434914c0!2sAvenue%20Fitness%20Canggu!5e0!3m2!1sen!2sid!4v1707577882431!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="lg:grayscale hover:grayscale-0 transition-all duration-700 ease-in-out block border-0"
            ></iframe>
            <div class="flex flex-row w-full h-40">
                <img src="../assets/images/gym.png" alt="Bar protein" class="w-1/2 object-cover h-full border-r-5 border-t-5 xl:border-t-8 xl:border-r-8 border-primary">
                <img src="../assets/images/gym2.png" alt="Legs Floor" class="w-1/2 object-cover h-full border-t-5 xl:border-t-8 border-primary">
            </div>
        </div>

      </div>

    </div>
  </section>
</template>
<template>
    <div>
        <HeroLayout 
            bgHero="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="GET IN SHAPE IN BALI"
            titleBody="TRAIN WITH"
            titleBodySpan="YOHANES"
            description="Transform your physique and performance with gritty, high-impact coaching."
            alignContent="justify-end items-start"
        >
        <template #description>
            <p class="mt-8 text-lg font-body font-medium text-white sm:text-xl max-w-xl mx-auto">
                There are 3 services, Gym, Nutrition, and Online Coaching. <mark class="bg-primary text-primary-content px-1">No excuses</mark>, just results.
            </p>
        </template>
        <template #button>
            <a href="#programs" class="bg-primary px-8 py-3 text-button font-heading text-primary-content shadow-card hover:bg-primary-focus transition-all hover-lift w-full sm:w-auto">Book a Call</a>
        </template>
        </HeroLayout>
        <AboutLayout 
        image="https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        >
        <template #content>
            <h1 class="text-2xl">
            Welcome to the next level of fitness. I am Yohan, a dedicated personal trainer based in the heart of Bali. My mission is simple: to help you achieve the physique and health you've always desired without sacrificing the lifestyle you love.
        </h1>
        </template>
        </AboutLayout>

        <HeroSplitLayout />
        <BannerLayout />
        <CTALayout />
        <CardsRowLayout :cards="servicesCard" />
    </div>
</template>

<script setup>
    import HeroLayout from '../components/layout/HeroLayout.vue';
    import AboutLayout from '../components/layout/AboutLayout.vue';
    import HeroSplitLayout from '../components/layout/HeroSplitLayout.vue';
    import BannerLayout from '../components/layout/BannerLayout.vue';
    import CTALayout from '../components/layout/CTALayout.vue';
    import CardsRowLayout from '../components/layout/CardsRowLayout.vue';

    // Data cards ditaruh di sini, BUKAN di template
    // Karena SVG string mengandung tanda kutip yang bentrok kalau ditulis langsung di atribut HTML
    const servicesCard = [
      {
        icon: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>',
        title: 'Personal Training',
        description: 'one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength.',
        routeName: 'Service',
        link: '#'
      },
      {
        icon: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>',
        title: 'mantap Training',
        description: 'one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength.',
        routeName: 'Service',
        link: '#'
      },
      {
        icon: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg>',
        title: 'Personal Training',
        description: 'one-on-one customized sessions in Bali focusing on technique, hypertrophy, and strength.',
        routeName: 'Service',
        link: '#'
      },
    ]
</script>

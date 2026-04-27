/**
 * Activities Data Store
 * =====================
 * 
 * Recommended Cloudinary folder structure:
 * cloudinary://workstation-/gym-yohanes/
 *   activities/
 *     {event-slug}/
 *       cover.jpg
 *       photo-1.jpg
 *       photo-2.jpg
 *       video-1.mp4
 *       ...
 * 
 * Each photo/video `src` is the path AFTER "gym-yohanes/"
 * The page component builds full Cloudinary URLs automatically.
 * 
 * For videos, set type: 'video' — otherwise defaults to 'image'.
 * Caption is optional — leave as '' or omit for no caption.
 */

export const activities = [
  {
    id: 'sunday-run-club-apr-2026',
    title: 'Sunday Run Club',
    date: '2026-04-13',
    location: 'Canggu Beach',
    tag: 'Run Club',
    cover: 'images/yohanes/run-community',
    photos: [ 
      { src: 'images/yohanes/run-community2', caption: 'Starting line energy' },
      { src: 'images/yohanes/run-community3', caption: '' },
      { src: 'images/yohanes/yohanes3', caption: 'Coach Yohanes leading the pace' },
      { src: 'images/yohanes/yohanes4', caption: '' },
      { src: 'images/yohanes/yohanes6', caption: 'Cool down stretches after the run' },
    ]
  },
  {
    id: 'beach-pushup-challenge-apr-2026',
    title: 'Beach Push Up Challenge',
    date: '2026-04-05',
    location: 'Batu Bolong Beach',
    tag: 'Challenge',
    cover: 'images/yohanes/yohanes',
    photos: [
      { src: 'images/yohanes/yohanes', caption: 'Getting ready for the challenge' },
      { src: 'images/yohanes/yohanes2', caption: 'Full send mode' },
      { src: 'images/yohanes/yohanes3', caption: '' },
      { src: 'images/yohanes/yohanes4', caption: 'Post-challenge vibes' },
      { src: 'images/yohanes/yohanes6', caption: 'Team photo after 200 push ups' },
    ]
  },
  {
    id: 'sunrise-bootcamp-mar-2026',
    title: 'Sunrise Beach Bootcamp',
    date: '2026-03-29',
    location: 'Echo Beach',
    tag: 'Bootcamp',
    cover: 'images/yohanes/yohanes2',
    photos: [
      { src: 'images/yohanes/yohanes2', caption: 'Golden hour training session' },
      { src: 'images/yohanes/yohanes', caption: '' },
      { src: 'images/yohanes/run-community', caption: 'Team warm-up circle' },
      { src: 'images/yohanes/yohanes3', caption: 'Sand sprints drill' },
      { src: 'images/yohanes/run-community2', caption: '' },
      { src: 'images/yohanes/yohanes4', caption: 'Plank hold challenge' },
      { src: 'images/yohanes/run-community3', caption: 'Post-bootcamp group photo' },
    ]
  },
  {
    id: 'community-fun-run-mar-2026',
    title: 'Canggu Community Fun Run',
    date: '2026-03-22',
    location: 'Canggu',
    tag: 'Fun Run',
    cover: 'images/yohanes/run-community3',
    photos: [
      { src: 'images/yohanes/run-community3', caption: 'Race day atmosphere' },
      { src: 'images/yohanes/run-community', caption: '' },
      { src: 'images/yohanes/run-community2', caption: 'Mid-race determination' },
      { src: 'images/yohanes/yohanes3', caption: '' },
      { src: 'images/yohanes/yohanes', caption: 'Medal ceremony' },
    ]
  },
  {
    id: 'gym-training-highlights-mar-2026',
    title: 'Gym Training Highlights',
    date: '2026-03-15',
    location: 'Shiro Gym',
    tag: 'Training',
    cover: 'images/yohanes/yohanes4',
    photos: [
      { src: 'images/yohanes/yohanes4', caption: 'Leg press personal best' },
      { src: 'images/yohanes/yohanes', caption: 'Morning session focus' },
      { src: 'images/yohanes/yohanes2', caption: '' },
      { src: 'images/yohanes/yohanes6', caption: 'Cable work precision' },
      { src: 'images/yohanes/yohanes3', caption: 'Bike cardio warm-up' },
      { src: 'images/client-clemens', caption: 'Client Clemens PR day' },
      { src: 'images/client1', caption: '' },
    ]
  },
  {
    id: 'morning-mobility-mar-2026',
    title: 'Morning Mobility Session',
    date: '2026-03-08',
    location: 'Berawa Beach',
    tag: 'Mobility',
    cover: 'images/yohanes/yohanes6',
    photos: [
      { src: 'images/yohanes/yohanes6', caption: 'Dynamic stretching flow' },
      { src: 'images/yohanes/yohanes', caption: '' },
      { src: 'images/yohanes/yohanes2', caption: 'Hip opener series' },
      { src: 'images/yohanes/run-community', caption: 'Group mobility circle' },
      { src: 'images/yohanes/yohanes4', caption: '' },
    ]
  },
  {
    id: 'clients-sessions-2026',
    title: 'Clients Sessions',
    date: '2026',
    location: 'Avenue Fitness',
    tag: 'Training',
    cover: 'images/yohanes-grassmc',
    photos: [
      { src: 'videos/MICHELE', type: 'video', caption: 'Private PT Training Michele' },
      { src: 'videos/LUCAS', type: 'video', caption: 'Private PT Training Lucas' },
      { src: 'videos/MARIA', type: 'video', caption: 'Private PT Training Maria' },
      { src: 'videos/GRETA', type: 'video', caption: 'Private PT Training Greta' },
      { src: 'videos/KENAN', type: 'video', caption: 'Private PT Training Kenan' },
      { src: 'videos/MIRYAM', type: 'video', caption: 'Private PT Training Miryam' },
      { src: 'videos/CLAUDIA', type: 'video', caption: 'Private PT Training Claudia' },
      { src: 'videos/LAURA', type: 'video', caption: 'Private PT Training Laura' },
      { src: 'videos/CLAUDIA_', type: 'video', caption: 'Private PT Training Claudia_' },
    ]
  },
];

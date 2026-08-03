export const expeditionDetails = {
  'mt-shivling-expedition': {
    id: 1,
    slug: 'mt-shivling-expedition',
    title: 'Mt. Shivling Expedition',
    description: 'The Mt. Shivling Expedition is a technical alpine-style ascent of one of the most iconic peaks in the Indian Himalayas, often called the "Matterhorn of the Himalayas". This challenging 30-day climb requires advanced mountaineering skills, with routes involving steep ice, rock, and mixed terrain.',
    duration: '30 days',
    difficulty: 'Extreme (Alpine AD+/D)',
    maxAltitude: '6,543m (21,467ft)',
    bestSeasons: ['May-June', 'September-October'],
    groupSize: '4-6 climbers',
    price: '₹3,75,000',
    image: '/images/expeditions/mt-shivling/hero.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Team briefing, gear check, last-minute shopping.',
        altitude: '640m',
        terrain: 'Urban',
        stay: 'Hotel'
      },
      {
        day: 2,
        title: 'Drive to Uttarkashi',
        description: 'Scenic 10-12hr drive via Himalayan foothills.',
        altitude: '1,158m',
        terrain: 'Mountain roads',
        stay: 'Guesthouse'
      },
      {
        day: 3,
        title: 'Acclimatization in Uttarkashi',
        description: 'Light hikes and final preparations.',
        altitude: '1,158m',
        stay: 'Guesthouse'
      },
      {
        day: 4,
        title: 'Drive to Gangotri',
        description: 'Journey to Gangotri (3,100m), temple visit.',
        altitude: '3,100m',
        terrain: 'River valleys',
        stay: 'Lodge'
      },
      {
        day: 5,
        title: 'Trek to Bhojwasa',
        description: '14km trek along Bhagirathi River.',
        altitude: '3,800m',
        terrain: 'Moderate ascent',
        stay: 'Tent'
      },
      {
        day: 6,
        title: 'Trek to Tapovan',
        description: 'Glacier crossing, steep climb to meadows.',
        altitude: '4,400m',
        terrain: 'Glacier/moraine',
        stay: 'Tent'
      },
      {
        day: 7,
        title: 'Acclimatization at Tapovan',
        description: 'Rest day with short hikes to Meru Peak base.',
        altitude: '4,400m',
        stay: 'Tent'
      },
      {
        day: 8,
        title: 'Establish Base Camp (4,800m)',
        description: 'Shift gear to BC near Gangotri Glacier.',
        altitude: '4,800m',
        terrain: 'Glacial terrain',
        stay: 'Tent'
      },
      {
        day: '9-11',
        title: 'Load Ferry to ABC (5,200m)',
        description: 'Carry supplies to Advanced Base Camp; acclimatization rotations.',
        altitude: '5,200m',
        terrain: 'Ice/snow slopes',
        stay: 'Tent'
      },
      {
        day: '12-14',
        title: 'Set Up Camp I (5,800m)',
        description: 'Fix ropes through mixed rock/ice sections.',
        altitude: '5,800m',
        terrain: 'Technical climbing',
        stay: 'Tent'
      },
      {
        day: '15-18',
        title: 'Establish Camp II (6,200m)',
        description: 'Push to high camp via SW Ridge/North Face.',
        altitude: '6,200m',
        terrain: 'Steep ice/rock',
        stay: 'Tent'
      },
      {
        day: '19-21',
        title: 'Summit Push Window',
        description: 'Climb to summit (6,543m); return to Camp II.',
        altitude: '6,543m',
        terrain: 'Exposed ridges',
        stay: 'Tent'
      },
      {
        day: '22-24',
        title: 'Reserve Days',
        description: 'Buffer for weather or extended summit attempts.',
        stay: 'Tent'
      },
      {
        day: '25-26',
        title: 'Descend to Tapovan',
        description: 'Clean-up and return to meadows.',
        altitude: '4,400m',
        stay: 'Tent'
      },
      {
        day: 27,
        title: 'Trek to Gangotri',
        description: 'Long descent via Bhojwasa.',
        altitude: '3,100m',
        stay: 'Lodge'
      },
      {
        day: 28,
        title: 'Drive to Dehradun',
        description: 'Return to valley.',
        stay: 'Hotel'
      },
      {
        day: 29,
        title: 'Debrief in Dehradun',
        description: 'Expedition review and celebrations.',
        stay: 'Hotel'
      },
      {
        day: 30,
        title: 'Departure',
        description: 'Transfer to airport.',
        stay: '-'
      }
    ],
    highlights: [
      'Technical alpine climbing (AD+/D, 5.9 rock, 60° ice)',
      'Sacred peak near Gangotri Glacier',
      'Two route options: SW Ridge or North Face',
      'Pristine Tapovan meadows acclimatization',
      'Panoramic views of Bhagirathi Massif'
    ],
    included: [
      'All permits (IMF, forest, Uttarakhand)',
      'Expert IFMGA guides & Sherpa support',
      'High-altitude tents & group gear',
      'All meals (nutritious high-calorie)',
      'Satellite comms & medical kits',
      'Porters/mules for load carry',
      'Delhi-Gangotri-Delhi transfers'
    ],
    notIncluded: [
      'Personal climbing gear (ice axes, harness, etc.)',
      'Travel insurance (mandatory)',
      'Delhi hotel nights (Day 1/30)',
      'Tips for staff (~10% recommended)',
      'Emergency evacuation costs'
    ],
    requirements: [
      'Prior 6,000m+ summit experience',
      'Advanced ice/rock climbing skills',
      'Fitness: 8+ hrs of load carry at altitude',
      'Medical certificate (AMS/health check)'
    ],
    gallery: [
      '/images/expeditions/mt-shivling/hero.jpg',
      '/images/expeditions/mt-shivling/summit-climb.jpg',
      '/images/expeditions/mt-shivling/tapovan-basecamp.jpg',
    ]
  },
  'audens-col-expedition': {
    id: 2,
    slug: 'audens-col-expedition',
    title: 'Auden\'s Col Expedition',
    description: 'The Auden\'s Col Expedition is a challenging glacier traverse connecting the Gangotri and Kedarnath regions. This technical crossing features steep ice walls up to 60° and requires expert crevasse navigation through the remote Khatling Glacier.',
    duration: '12 days',
    difficulty: 'Advanced',
    maxAltitude: '5,490m (18,012ft)',
    bestSeasons: ['May-June', 'September-October'],
    groupSize: '4-8 participants',
    price: '₹99,999',
    image: '/images/expeditions/audens-col/hero.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Team meeting and equipment check'
      },
      {
        day: 3,
        title: 'Drive to Uttarkashi',
        description: 'Acclimatization day'
      },
      {
        day: 5,
        title: 'Trek to Gangotri',
        description: 'Begin approach through Bhagirathi valley'
      },
      {
        day: 7,
        title: 'Base Camp at Nala Camp',
        description: 'Final preparations for crossing'
      },
      {
        day: 9,
        title: 'Auden\'s Col Ascent',
        description: 'Technical climb to the col (5,490m)'
      },
      {
        day: 10,
        title: 'Khatling Glacier Traverse',
        description: 'Navigation through crevasse fields'
      },
      {
        day: 11,
        title: 'Descent to Kedarnath',
        description: 'Complete the crossing'
      },
      {
        day: 12,
        title: 'Return to Delhi',
        description: 'Expedition concludes'
      }
    ],
    highlights: [
      'Steep 60° ice wall sections',
      'Remote Khatling Glacier traverse',
      'Expert crevasse navigation',
      'Connects Bhagirathi and Mandakini valleys',
      'Wilderness experience with few other teams'
    ],
    included: [
      'All necessary permits',
      'Experienced mountain guides',
      'High-altitude support staff',
      'All meals during trek',
      'Group technical equipment',
      'Basic medical support',
      'Satellite communication'
    ],
    notIncluded: [
      'Personal trekking equipment',
      'Travel insurance',
      'Delhi accommodations',
      'Personal expenses'
    ],
    requirements: [
      'Previous high-altitude trekking experience',
      'Basic mountaineering skills',
      'Good physical condition',
      'Completed medical evaluation'
    ],
    gallery: [
      '/images/expeditions/audens-col/hero.jpg',
      '/images/expeditions/audens-col/glacier-traverse.jpg',
      '/images/expeditions/audens-col/ice-wall-ascent.jpg'
    ]
  },
  'kalindi-khal-expedition': {
    id: 3,
    slug: 'kalindi-khal-expedition',
    title: 'Kalindi Khal Expedition',
    description: 'The Kalindi Khal Expedition is one of India\'s toughest high-altitude crossings, connecting Gangotri to Badrinath through the longest glacier traverse in the Garhwal Himalayas. This extreme journey requires full expedition support and excellent weather conditions.',
    duration: '16 days',
    difficulty: 'Extreme',
    maxAltitude: '5,947m (19,511ft)',
    bestSeasons: ['May-June', 'September-October'],
    groupSize: '4-6 participants',
    price: '₹1,49,999',
    image: '/images/expeditions/kalindi-khal/hero.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Team briefing and equipment check'
      },
      {
        day: 3,
        title: 'Drive to Gangotri',
        description: 'Begin approach through Bhagirathi valley'
      },
      {
        day: 5,
        title: 'Trek to Nandanvan',
        description: 'Establish base camp below Bhagirathi peaks'
      },
      {
        day: 7,
        title: 'Kalindi Khal Ascent',
        description: 'Begin technical crossing (5,947m)'
      },
      {
        day: 10,
        title: 'Satopanth Glacier Traverse',
        description: 'Navigate complex glacier system'
      },
      {
        day: 12,
        title: 'Descent to Mana Village',
        description: 'Complete the crossing'
      },
      {
        day: 14,
        title: 'Visit Badrinath Temple',
        description: 'Cultural experience'
      },
      {
        day: 16,
        title: 'Return to Delhi',
        description: 'Expedition concludes'
      }
    ],
    highlights: [
      'Longest glacier traverse in Garhwal region',
      'Stunning views of Satopanth and Bhagirathi peaks',
      'Extreme weather challenges',
      'Full expedition support required',
      'Connects two important pilgrimage sites'
    ],
    included: [
      'All expedition permits and fees',
      'Experienced mountain guides',
      'Full support team and porters',
      'All meals during expedition',
      'High-quality base camp facilities',
      'Group technical equipment',
      'Satellite communication',
      'Medical support'
    ],
    notIncluded: [
      'Personal climbing equipment',
      'Travel insurance',
      'Delhi accommodations',
      'Personal expenses'
    ],
    requirements: [
      'Previous high-altitude experience',
      'Excellent physical condition',
      'Basic mountaineering skills',
      'Completed medical evaluation'
    ],
    gallery: [
      '/images/expeditions/kalindi-khal/hero.jpg',
      '/images/expeditions/kalindi-khal/pass-crossing.jpg',
      '/images/expeditions/kalindi-khal/glacier-camp.jpg'
    ]
  },
  'meru-expedition': {
    id: 4,
    slug: 'meru-expedition',
    title: 'Meru Expedition (Shark\'s Fin)',
    description: 'The Meru Shark\'s Fin Expedition is an elite climbing challenge on one of the world\'s most technical peaks, made famous by the documentary "The Summit". This expedition features advanced mixed climbing on the Central Pillar route (VI 5.10 A3) with extreme exposure.',
    duration: '28 days',
    difficulty: 'Extreme',
    maxAltitude: '6,660m (21,850ft)',
    bestSeasons: ['May-June', 'September-October'],
    groupSize: '2-4 climbers',
    price: '₹2,00,000',
    image: '/images/expeditions/meru.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Team briefing and equipment check'
      },
      {
        day: 3,
        title: 'Drive to Uttarkashi',
        description: 'Acclimatization and final preparations'
      },
      {
        day: 5,
        title: 'Trek to Gangotri',
        description: 'Begin approach through Bhagirathi valley'
      },
      {
        day: 7,
        title: 'Establish Base Camp',
        description: 'Set up camp at 4,200m near Meru'
      },
      {
        day: 10,
        title: 'Route Preparation',
        description: 'Fix lines on initial technical sections'
      },
      {
        day: 15,
        title: 'Summit Push',
        description: 'Multi-day technical ascent of Central Pillar'
      },
      {
        day: 25,
        title: 'Return to Base Camp',
        description: 'Pack up and begin descent'
      },
      {
        day: 28,
        title: 'Return to Delhi',
        description: 'Expedition concludes'
      }
    ],
    highlights: [
      'Featured in "The Summit" documentary',
      'Central Pillar route (VI 5.10 A3)',
      'Advanced mixed climbing challenges',
      'Small elite team approach',
      'Professional filming options available'
    ],
    included: [
      'All expedition permits and fees',
      'World-class climbing guides',
      'High-altitude support',
      'All meals during expedition',
      'Base camp facilities',
      'Group technical equipment',
      'Satellite communication',
      'Advanced medical support'
    ],
    notIncluded: [
      'Personal climbing equipment',
      'Travel insurance',
      'Delhi accommodations',
      'Personal expenses',
      'Professional filming services'
    ],
    requirements: [
      'Previous 7,000m+ experience',
      'Expert ice and rock climbing skills',
      'Alpine-style climbing experience',
      'Excellent physical condition',
      'Completed medical evaluation'
    ],
    gallery: [
      '/images/gallery/meru-1.jpg',
      '/images/gallery/meru-2.jpg',
      '/images/gallery/meru-3.jpg',
      '/images/gallery/meru-4.jpg'
    ]
  },
  'mayali-pass-expedition': {
    id: 5,
    slug: 'mayali-pass-expedition',
    title: 'Mayali Pass Expedition',
    description: 'The Mayali Pass Expedition is a technical crossing between the Gangotri and Kedarnath regions, offering a less crowded alternative to Auden\'s Col. This challenging route requires glacier navigation skills and provides stunning views of the Bhagirathi group.',
    duration: '10 days',
    difficulty: 'Advanced',
    maxAltitude: '5,300m (17,388ft)',
    bestSeasons: ['May-June', 'September-October'],
    groupSize: '4-8 participants',
    price: '₹75,000',
    image: '/images/expeditions/mayali-pass.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Team briefing and equipment check'
      },
      {
        day: 3,
        title: 'Drive to Uttarkashi',
        description: 'Acclimatization day'
      },
      {
        day: 5,
        title: 'Trek to Gangotri',
        description: 'Begin approach through Bhagirathi valley'
      },
      {
        day: 7,
        title: 'Mayali Pass Ascent',
        description: 'Technical climb to the pass (5,300m)'
      },
      {
        day: 8,
        title: 'Descent to Kedarnath',
        description: 'Complete the crossing'
      },
      {
        day: 9,
        title: 'Visit Kedarnath Temple',
        description: 'Cultural experience'
      },
      {
        day: 10,
        title: 'Return to Delhi',
        description: 'Expedition concludes'
      }
    ],
    highlights: [
      'Glacier navigation skills required',
      'Connects Tapovan and Kedarnath regions',
      'Less crowded than Auden\'s Col',
      'Spectacular views of Bhagirathi group',
      'Includes visits to sacred temples'
    ],
    included: [
      'All necessary permits',
      'Experienced mountain guides',
      'Support staff and porters',
      'All meals during trek',
      'Group technical equipment',
      'Basic medical support'
    ],
    notIncluded: [
      'Personal trekking equipment',
      'Travel insurance',
      'Delhi accommodations',
      'Personal expenses'
    ],
    requirements: [
      'Previous high-altitude trekking experience',
      'Basic mountaineering skills',
      'Good physical condition',
      'Completed medical evaluation'
    ],
    gallery: [
      '/images/gallery/mayali-1.jpg',
      '/images/gallery/mayali-2.jpg',
      '/images/gallery/mayali-3.jpg',
      '/images/gallery/mayali-4.jpg'
    ]
  },
  'lamkhaga-pass-expedition': {
    id: 6,
    slug: 'lamkhaga-pass-expedition',
    title: 'Lamkhaga Pass Expedition',
    description: 'The Lamkhaga Pass Expedition is a restricted border crossing to Tibet that requires special military and IMF permits. Following an ancient Bhotia trade route, this is one of India\'s toughest passes, offering an extreme wilderness experience with returns via the beautiful Harsil valley.',
    duration: '14 days',
    difficulty: 'Extreme',
    maxAltitude: '5,282m (17,329ft)',
    bestSeasons: ['May-June', 'September-October'],
    groupSize: '4-6 participants',
    price: '₹32,500',
    image: '/images/expeditions/lamkhaga.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Permit verification and team briefing'
      },
      {
        day: 3,
        title: 'Drive to Harsil',
        description: 'Begin approach through Bhagirathi valley'
      },
      {
        day: 5,
        title: 'Trek to Kyarkoti',
        description: 'Establish base camp near Lamkhaga'
      },
      {
        day: 7,
        title: 'Lamkhaga Pass Ascent',
        description: 'Technical climb to the pass (5,282m)'
      },
      {
        day: 9,
        title: 'Descent to Chitkul',
        description: 'Complete the crossing into Kinnaur'
      },
      {
        day: 12,
        title: 'Return to Shimla',
        description: 'Travel via Sangla valley'
      },
      {
        day: 14,
        title: 'Return to Delhi',
        description: 'Expedition concludes'
      }
    ],
    highlights: [
      'One of India\'s toughest passes',
      'Requires military and IMF permits',
      'Follows ancient Bhotia trade route',
      'Extreme wilderness experience',
      'Returns via beautiful Harsil valley'
    ],
    included: [
      'All special permits and fees',
      'Experienced mountain guides',
      'Support staff and porters',
      'All meals during expedition',
      'Group technical equipment',
      'Satellite communication',
      'Medical support'
    ],
    notIncluded: [
      'Personal trekking equipment',
      'Travel insurance',
      'Delhi accommodations',
      'Personal expenses'
    ],
    requirements: [
      'Previous high-altitude experience',
      'Excellent physical condition',
      'Basic mountaineering skills',
      'Completed medical evaluation'
    ],
    gallery: [
      '/images/gallery/lamkhaga-1.jpg',
      '/images/gallery/lamkhaga-2.jpg',
      '/images/gallery/lamkhaga-3.jpg',
      '/images/gallery/lamkhaga-4.jpg'
    ]
  },
  'thalay-sagar-circuit': {
    id: 7,
    slug: 'thalay-sagar-circuit',
    title: 'Thalay Sagar Circuit',
    description: 'The Thalay Sagar Circuit is a technical circumnavigation of the 6,904m giant, offering advanced glacier travel and optional summit attempts. This expedition is designed for elite climbers only, featuring stunning views of the entire Bhagirathi group.',
    duration: '18 days',
    difficulty: 'Extreme',
    maxAltitude: '6,200m (20,341ft)',
    bestSeasons: ['May-June', 'September-October'],
    groupSize: '2-4 climbers',
    price: '₹3,99,999',
    image: '/images/expeditions/thalay-sagar.jpg',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Team briefing and equipment check'
      },
      {
        day: 3,
        title: 'Drive to Uttarkashi',
        description: 'Acclimatization and final preparations'
      },
      {
        day: 5,
        title: 'Trek to Gangotri',
        description: 'Begin approach through Bhagirathi valley'
      },
      {
        day: 7,
        title: 'Establish Kedar Tal Base Camp',
        description: 'Set up camp at 4,912m below Thalay Sagar'
      },
      {
        day: 10,
        title: 'Begin Circuit',
        description: 'Start technical circumnavigation'
      },
      {
        day: 14,
        title: 'Summit Attempt (Optional)',
        description: 'North Face route attempt if conditions permit'
      },
      {
        day: 16,
        title: 'Complete Circuit',
        description: 'Return to base camp'
      },
      {
        day: 18,
        title: 'Return to Delhi',
        description: 'Expedition concludes'
      }
    ],
    highlights: [
      'Technical circumnavigation of Thalay Sagar',
      'Stunning views of Bhagirathi group',
      'Advanced glacier travel challenges',
      'Option for summit attempt',
      'For elite climbers only'
    ],
    included: [
      'All expedition permits and fees',
      'World-class climbing guides',
      'High-altitude support',
      'All meals during expedition',
      'High-quality base camp facilities',
      'Group technical equipment',
      'Satellite communication',
      'Advanced medical support'
    ],
    notIncluded: [
      'Personal climbing equipment',
      'Travel insurance',
      'Delhi accommodations',
      'Personal expenses'
    ],
    requirements: [
      'Previous 6,000m+ technical climbs',
      'Expert ice and mixed climbing skills',
      'Alpine-style climbing experience',
      'Excellent physical condition',
      'Completed medical evaluation'
    ],
    gallery: [
      '/images/gallery/thalay-1.jpg',
      '/images/gallery/thalay-2.jpg',
      '/images/gallery/thalay-3.jpg',
      '/images/gallery/thalay-4.jpg'
    ]
  }
};
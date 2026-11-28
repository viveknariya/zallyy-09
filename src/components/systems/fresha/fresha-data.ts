export interface FreshaVenue {
  slug: string;
  name: string;
  rating: string;
  reviewsCount: number;
  location: string;
  neighborhood: string;
  category: string;
  rail: "recommended" | "new" | "trending";
  featured?: boolean;
  artworkVariant: "salon" | "barber" | "spa" | "lash" | "studio" | "massage";
  hours: string;
  address: string;
  slots: string[];
  headlineService: {
    name: string;
    duration: string;
    price: string;
  };
}

export interface FreshaServiceItem {
  id: string;
  category: string;
  name: string;
  duration: string;
  description: string;
  price: string;
  priceNumeric: number;
}

export interface FreshaReview {
  id: string;
  title: string;
  quote: string;
  author: string;
  city: string;
  initials: string;
}

export interface FreshaBlogPost {
  slug: string;
  title: string;
  category: "Meet the Partners" | "Fresha Features" | "Fresha News" | "Business Tips";
  date: string;
  excerpt: string;
  accentLabel: string;
  variant: "gradient" | "warm" | "bright" | "studio";
}

export const FRESHA_VENUES: FreshaVenue[] = [
  {
    slug: "lash-lab-inc",
    name: "Lash Lab Inc.",
    rating: "4.9",
    reviewsCount: 393,
    location: "Cow Hollow, San Francisco",
    neighborhood: "1728 Union Street, Studio #104, San Francisco",
    category: "Eyebrows & Lashes",
    rail: "recommended",
    featured: true,
    artworkVariant: "lash",
    hours: "10:30 AM – 7:30 PM",
    address: "1728 Union Street, Studio #104, Cow Hollow, San Francisco",
    slots: ["09:00", "09:35", "10:10"],
    headlineService: {
      name: "24 Hour Allergy Patch Test",
      duration: "30 mins",
      price: "$49",
    },
  },
  {
    slug: "barber-society",
    name: "Barber Society",
    rating: "5.0",
    reviewsCount: 1349,
    location: "Notting Hill, London",
    neighborhood: "42 Westbourne Grove, London",
    category: "Barbershop",
    rail: "recommended",
    artworkVariant: "barber",
    hours: "9:00 AM – 8:00 PM",
    address: "42 Westbourne Grove, Notting Hill, London",
    slots: ["10:00", "11:15", "14:30"],
    headlineService: {
      name: "Signature Skin Fade & Beard Trim",
      duration: "45 mins",
      price: "$55",
    },
  },
  {
    slug: "tiara-the-spa",
    name: "Tiara The Spa",
    rating: "4.9",
    reviewsCount: 749,
    location: "Pacific Heights, San Francisco",
    neighborhood: "2140 Fillmore St, San Francisco",
    category: "Beauty Salon",
    rail: "recommended",
    featured: true,
    artworkVariant: "spa",
    hours: "9:30 AM – 7:00 PM",
    address: "2140 Fillmore Street, Pacific Heights, San Francisco",
    slots: ["11:00", "13:15", "15:45"],
    headlineService: {
      name: "Sculptural Facial & LED Glow",
      duration: "60 mins",
      price: "$145",
    },
  },
  {
    slug: "studio-north-aesthetics",
    name: "Studio North Aesthetics",
    rating: "5.0",
    reviewsCount: 512,
    location: "SoHo, New York",
    neighborhood: "118 Mercer St, Suite 3B, New York",
    category: "Aesthetics",
    rail: "recommended",
    artworkVariant: "studio",
    hours: "10:00 AM – 7:00 PM",
    address: "118 Mercer Street, Suite 3B, SoHo, New York",
    slots: ["09:30", "12:00", "16:20"],
    headlineService: {
      name: "Hydra-Renewal Skin Consultation",
      duration: "45 mins",
      price: "$110",
    },
  },
  {
    slug: "holivudo-barber",
    name: "Holivudo Barber",
    rating: "4.9",
    reviewsCount: 18,
    location: "Klaipeda Old Town",
    neighborhood: "Tiltu g. 14, Klaipeda",
    category: "Barbershop",
    rail: "new",
    artworkVariant: "barber",
    hours: "9:00 AM – 7:00 PM",
    address: "Tiltu g. 14, Klaipeda",
    slots: ["10:30", "12:45", "15:00"],
    headlineService: {
      name: "Classic Scissor Cut",
      duration: "40 mins",
      price: "$42",
    },
  },
  {
    slug: "minis-massage-room",
    name: "Mini's Massage Room",
    rating: "5.0",
    reviewsCount: 31,
    location: "Sydenham, London",
    neighborhood: "88 Kirkdale, Sydenham, London",
    category: "Massage",
    rail: "new",
    artworkVariant: "massage",
    hours: "10:00 AM – 8:00 PM",
    address: "88 Kirkdale, Sydenham, London",
    slots: ["11:30", "14:00", "17:15"],
    headlineService: {
      name: "Deep Tissue Aromatherapy",
      duration: "60 mins",
      price: "$85",
    },
  },
  {
    slug: "angela-chong-salon",
    name: "Angela Chong Salon",
    rating: "5.0",
    reviewsCount: 20,
    location: "Union Square, San Francisco",
    neighborhood: "359 Sutter Street, San Francisco",
    category: "Hair Salon",
    rail: "new",
    featured: true,
    artworkVariant: "salon",
    hours: "9:30 AM – 6:30 PM",
    address: "359 Sutter Street, Union Square, San Francisco",
    slots: ["10:00", "13:00", "15:30"],
    headlineService: {
      name: "Women's Hair Cut & Blowout",
      duration: "45 mins",
      price: "$125",
    },
  },
  {
    slug: "creation-beauty-lounge",
    name: "Creation Beauty Lounge",
    rating: "4.9",
    reviewsCount: 264,
    location: "Marylebone, London",
    neighborhood: "49 Marylebone High St, London",
    category: "Beauty Salon",
    rail: "new",
    artworkVariant: "lash",
    hours: "9:00 AM – 7:30 PM",
    address: "49 Marylebone High Street, London",
    slots: ["11:30", "14:15", "16:45"],
    headlineService: {
      name: "Gel Manicure & Cuticle Care",
      duration: "50 mins",
      price: "$68",
    },
  },
  {
    slug: "dick-johnson-turku",
    name: "Dick Johnson Studio",
    rating: "5.0",
    reviewsCount: 2009,
    location: "Linnankatu 19, Turku",
    neighborhood: "Linnankatu 19, Turku",
    category: "Barbershop",
    rail: "trending",
    artworkVariant: "barber",
    hours: "9:00 AM – 8:00 PM",
    address: "Linnankatu 19, Turku",
    slots: ["09:45", "11:30", "14:10"],
    headlineService: {
      name: "Hot Towel Straight Razor Shave",
      duration: "40 mins",
      price: "$48",
    },
  },
  {
    slug: "tallinn-lash-studio",
    name: "Tallinn Lash Studio",
    rating: "5.0",
    reviewsCount: 1009,
    location: "Mustamae, Tallinn",
    neighborhood: "Tammsaare tee 47, Tallinn",
    category: "Eyebrows & Lashes",
    rail: "trending",
    featured: true,
    artworkVariant: "lash",
    hours: "9:00 AM – 8:00 PM",
    address: "Tammsaare tee 47, Tallinn",
    slots: ["10:15", "13:00", "16:00"],
    headlineService: {
      name: "Keratin Lash Lift & Tint",
      duration: "55 mins",
      price: "$75",
    },
  },
  {
    slug: "5th-floor-beauty",
    name: "5th Floor Beauty Salon",
    rating: "4.9",
    reviewsCount: 2020,
    location: "Kesklinn, Tallinn",
    neighborhood: "Viru Valjak 4, Tallinn",
    category: "Beauty Salon",
    rail: "trending",
    artworkVariant: "salon",
    hours: "9:00 AM – 8:00 PM",
    address: "Viru Valjak 4, Tallinn",
    slots: ["10:00", "12:30", "15:15"],
    headlineService: {
      name: "Balayage & Gloss Treatment",
      duration: "120 mins",
      price: "$185",
    },
  },
  {
    slug: "bare-beauty-lounge",
    name: "Bare Beauty Lounge",
    rating: "5.0",
    reviewsCount: 564,
    location: "Pacific Heights, San Francisco",
    neighborhood: "2412 California St, San Francisco",
    category: "Aesthetics",
    rail: "trending",
    artworkVariant: "spa",
    hours: "10:00 AM – 7:00 PM",
    address: "2412 California Street, Pacific Heights, San Francisco",
    slots: ["11:00", "13:45", "16:30"],
    headlineService: {
      name: "Brow Lamination & Sculpt",
      duration: "45 mins",
      price: "$95",
    },
  },
];

export const VENUE_SERVICES: FreshaServiceItem[] = [
  {
    id: "consult",
    category: "Premium Lash Services",
    name: "Pre-Appointment Video Design Consultation",
    duration: "15 mins",
    description:
      "Review eye shape, natural lash health, and custom curl mapping with your specialist prior to your first visit.",
    price: "free",
    priceNumeric: 0,
  },
  {
    id: "lash-lift",
    category: "Premium Lash Services",
    name: "Lash Lift",
    duration: "40 mins – 1 hr",
    description:
      "Gentle keratin perm solution & black-brown tint offering semi-permanent curl and natural lift.",
    price: "$115",
    priceNumeric: 115,
  },
  {
    id: "classic-set",
    category: "Premium Lash Services",
    name: "Level 2: Everyday Classic Set",
    duration: "1 hr, 30 mins",
    description:
      "Weightless individual silk lashes bonded one-to-one for an effortlessly defined daily look.",
    price: "$235",
    priceNumeric: 235,
  },
  {
    id: "hybrid-set",
    category: "Premium Lash Services",
    name: "Level 3: Textured Hybrid Set",
    duration: "2 hrs",
    description:
      "Balanced blend of classic singles and micro-fans tailored to add soft, dimensional fullness.",
    price: "$270",
    priceNumeric: 270,
  },
  {
    id: "mini-fill",
    category: "Maintenance Appointments",
    name: "45min Mini Fill",
    duration: "45 mins",
    description:
      "Quick touch-up to refresh gaps and keep extensions crisp between full bi-weekly fills.",
    price: "$65",
    priceNumeric: 65,
  },
  {
    id: "classic-fill",
    category: "Maintenance Appointments",
    name: "Level 2: Everyday Classic Fill",
    duration: "1 hr, 15 mins",
    description:
      "Precision outgrown-lash removal and replacement fill for returning studio guests.",
    price: "$95",
    priceNumeric: 95,
  },
  {
    id: "lash-tint",
    category: "Tints",
    name: "Upper & Bottom Lash Tint",
    duration: "25 mins",
    description:
      "Deep vegetable-based pigment safe for sensitive eyes, lasting up to 4 weeks.",
    price: "$35",
    priceNumeric: 35,
  },
  {
    id: "patch-test",
    category: "Foreign Fills",
    name: "24 Hour Allergy Patch Test",
    duration: "30 mins",
    description:
      "Required sensitivity check at least 24 hours ahead of adhesive applications.",
    price: "$49",
    priceNumeric: 49,
  },
  {
    id: "member-fill",
    category: "Membership Fills",
    name: "Recurring Member 60min Fill",
    duration: "1 hr",
    description:
      "Included session for active monthly volume and classic membership holders.",
    price: "free",
    priceNumeric: 0,
  },
];

export const FRESHA_REVIEWS: FreshaReview[] = [
  {
    id: "rev-1",
    title: "The best booking system",
    quote:
      "Great experience, easy to book. Paying for treatments is so convenient — no cash or cards needed!",
    author: "Lucy",
    city: "London, UK",
    initials: "LU",
  },
  {
    id: "rev-2",
    title: "Easy to use & explore",
    quote:
      "Automated reminders make life so much easier. I also found a few great local barbershops that I didn't know existed.",
    author: "Dan",
    city: "New York, USA",
    initials: "DA",
  },
  {
    id: "rev-3",
    title: "Great for finding barbers",
    quote:
      "I've been using this platform for two years and it's by far the best booking workflow I've used. Highly recommend it!",
    author: "Dale",
    city: "Sydney, Australia",
    initials: "DL",
  },
  {
    id: "rev-4",
    title: "My go-to for self-care",
    quote:
      "This is my go-to marketplace for massages and facials. I can easily find and book places near me — I love it!",
    author: "Cameron",
    city: "Edinburgh, UK",
    initials: "CA",
  },
];

export const BROWSE_CITIES: Record<
  string,
  { city: string; links: string[] }[]
> = {
  "United States": [
    {
      city: "New York",
      links: [
        "Hair Salons in New York",
        "Nail Salons in New York",
        "Barbershops in New York",
        "Beauty Salons in New York",
        "Spas in New York",
        "Massage in New York",
        "Eyebrows & Lashes in New York",
      ],
    },
    {
      city: "San Francisco",
      links: [
        "Hair Salons in San Francisco",
        "Nail Salons in San Francisco",
        "Barbershops in San Francisco",
        "Beauty Salons in San Francisco",
        "Spas in San Francisco",
        "Massage in San Francisco",
        "Eyebrows & Lashes in San Francisco",
      ],
    },
    {
      city: "Los Angeles",
      links: [
        "Hair Salons in Los Angeles",
        "Nail Salons in Los Angeles",
        "Barbershops in Los Angeles",
        "Beauty Salons in Los Angeles",
        "Spas in Los Angeles",
        "Massage in Los Angeles",
        "Waxing Salons in Los Angeles",
      ],
    },
    {
      city: "Chicago",
      links: [
        "Hair Salons in Chicago",
        "Nail Salons in Chicago",
        "Barbershops in Chicago",
        "Beauty Salons in Chicago",
        "Spas in Chicago",
        "Massage in Chicago",
        "Eyebrows & Lashes in Chicago",
      ],
    },
    {
      city: "Austin",
      links: [
        "Hair Salons in Austin",
        "Nail Salons in Austin",
        "Barbershops in Austin",
        "Beauty Salons in Austin",
        "Spas in Austin",
        "Massage in Austin",
        "Waxing Salons in Austin",
      ],
    },
  ],
  Australia: [
    {
      city: "Melbourne",
      links: [
        "Hair Salons in Melbourne",
        "Nail Salons in Melbourne",
        "Barbershops in Melbourne",
        "Beauty Salons in Melbourne",
        "Spas in Melbourne",
        "Massage in Melbourne",
        "Eyebrows & Lashes in Melbourne",
      ],
    },
    {
      city: "Sydney",
      links: [
        "Hair Salons in Sydney",
        "Nail Salons in Sydney",
        "Barbershops in Sydney",
        "Beauty Salons in Sydney",
        "Spas in Sydney",
        "Massage in Sydney",
        "Eyebrows & Lashes in Sydney",
      ],
    },
    {
      city: "Perth",
      links: [
        "Hair Salons in Perth",
        "Nail Salons in Perth",
        "Barbershops in Perth",
        "Beauty Salons in Perth",
        "Spas in Perth",
        "Massage in Perth",
        "Eyebrows & Lashes in Perth",
      ],
    },
    {
      city: "Brisbane",
      links: [
        "Hair Salons in Brisbane",
        "Nail Salons in Brisbane",
        "Barbershops in Brisbane",
        "Beauty Salons in Brisbane",
        "Spas in Brisbane",
        "Massage in Brisbane",
        "Eyebrows & Lashes in Brisbane",
      ],
    },
    {
      city: "Gold Coast",
      links: [
        "Hair Salons in Gold Coast",
        "Nail Salons in Gold Coast",
        "Barbershops in Gold Coast",
        "Beauty Salons in Gold Coast",
        "Spas in Gold Coast",
        "Massage in Gold Coast",
        "Waxing Salons in Gold Coast",
      ],
    },
  ],
  "United Kingdom": [
    {
      city: "London",
      links: [
        "Hair Salons in London",
        "Nail Salons in London",
        "Barbershops in London",
        "Beauty Salons in London",
        "Spas in London",
        "Massage in London",
        "Eyebrows & Lashes in London",
      ],
    },
    {
      city: "Manchester",
      links: [
        "Hair Salons in Manchester",
        "Nail Salons in Manchester",
        "Barbershops in Manchester",
        "Beauty Salons in Manchester",
        "Spas in Manchester",
        "Massage in Manchester",
        "Eyebrows & Lashes in Manchester",
      ],
    },
    {
      city: "Edinburgh",
      links: [
        "Hair Salons in Edinburgh",
        "Nail Salons in Edinburgh",
        "Barbershops in Edinburgh",
        "Beauty Salons in Edinburgh",
        "Spas in Edinburgh",
        "Massage in Edinburgh",
        "Waxing Salons in Edinburgh",
      ],
    },
    {
      city: "Birmingham",
      links: [
        "Hair Salons in Birmingham",
        "Nail Salons in Birmingham",
        "Barbershops in Birmingham",
        "Beauty Salons in Birmingham",
        "Spas in Birmingham",
        "Massage in Birmingham",
        "Eyebrows & Lashes in Birmingham",
      ],
    },
    {
      city: "Glasgow",
      links: [
        "Hair Salons in Glasgow",
        "Nail Salons in Glasgow",
        "Barbershops in Glasgow",
        "Beauty Salons in Glasgow",
        "Spas in Glasgow",
        "Massage in Glasgow",
        "Waxing Salons in Glasgow",
      ],
    },
  ],
  Canada: [
    {
      city: "Toronto",
      links: [
        "Hair Salons in Toronto",
        "Nail Salons in Toronto",
        "Barbershops in Toronto",
        "Beauty Salons in Toronto",
        "Spas in Toronto",
        "Massage in Toronto",
        "Eyebrows & Lashes in Toronto",
      ],
    },
    {
      city: "Vancouver",
      links: [
        "Hair Salons in Vancouver",
        "Nail Salons in Vancouver",
        "Barbershops in Vancouver",
        "Beauty Salons in Vancouver",
        "Spas in Vancouver",
        "Massage in Vancouver",
        "Eyebrows & Lashes in Vancouver",
      ],
    },
    {
      city: "Montreal",
      links: [
        "Hair Salons in Montreal",
        "Nail Salons in Montreal",
        "Barbershops in Montreal",
        "Beauty Salons in Montreal",
        "Spas in Montreal",
        "Massage in Montreal",
        "Waxing Salons in Montreal",
      ],
    },
    {
      city: "Calgary",
      links: [
        "Hair Salons in Calgary",
        "Nail Salons in Calgary",
        "Barbershops in Calgary",
        "Beauty Salons in Calgary",
        "Spas in Calgary",
        "Massage in Calgary",
        "Eyebrows & Lashes in Calgary",
      ],
    },
    {
      city: "Ottawa",
      links: [
        "Hair Salons in Ottawa",
        "Nail Salons in Ottawa",
        "Barbershops in Ottawa",
        "Beauty Salons in Ottawa",
        "Spas in Ottawa",
        "Massage in Ottawa",
        "Waxing Salons in Ottawa",
      ],
    },
  ],
};

export const BUSINESS_TYPES = [
  "Hair Salon",
  "Nail Salon",
  "Waxing Salon",
  "Beauty Salon",
  "Barbershop",
  "Eyebrows & Lashes",
  "Massage",
  "Spa",
  "Gym & Fitness",
  "Personal Trainer",
  "Therapy Center",
  "Tattoo & Piercing",
  "Tanning Studio",
  "Aesthetics",
  "Weight Loss",
];

export const PRICING_FREE_PERKS = [
  {
    title: "Unlimited appointment bookings",
    detail: "Super easy to use across mobiles, tablets and desktops",
  },
  {
    title: "Unlimited clients and email notifications",
    detail: "Track client history, keep notes and stay in contact with integrated email",
  },
  {
    title: "Unlimited team members",
    detail: "Invite your team to join your account and stay up-to-date with appointment notifications",
  },
  {
    title: "Unlimited product inventory",
    detail: "Record and track stock inventory with support for supplier ordering",
  },
  {
    title: "Unlimited locations",
    detail: "Manage multiple venues from one main account with no limitations",
  },
  {
    title: "Unlimited reporting and much more",
    detail: "Everything you need to manage your business in one easy-to-use solution",
  },
];

export const OPTIONAL_PAID_FEATURES = [
  {
    group: "Payments",
    rows: [
      {
        name: "Card processing",
        desc: "Accept in-person and online payments with saved cards and major wallets.",
        rate: "2.79% + $0.20 online · 2.29% + $0.20 in-person",
        badge: null,
      },
      {
        name: "Tap to Pay",
        desc: "Take in-person contactless payments directly on compatible mobile devices.",
        rate: "$0.10 per authorisation",
        badge: null,
      },
    ],
  },
  {
    group: "Marketplace bookings",
    rows: [
      {
        name: "New client fee",
        desc: "One-time fee applied only to brand new clients who discover your business via the marketplace. Never applies to returning clients.",
        rate: "20% one-time commission ($6 min)",
        badge: null,
      },
    ],
  },
  {
    group: "Communications",
    rows: [
      {
        name: "Automated notifications",
        desc: "Notify your clients about appointments with 20 free monthly texts and unlimited emails.",
        rate: "$0.02 per extra text",
        badge: null,
      },
      {
        name: "Blast campaigns",
        desc: "Send targeted seasonal SMS and email offers to loyal or lapsed clients.",
        rate: "$0.08 per text · $0.02 per email",
        badge: null,
      },
    ],
  },
  {
    group: "Add ons",
    rows: [
      {
        name: "Insights",
        desc: "Enhance reports with rich revenue cohorts, control team access and make profitable decisions.",
        rate: "$9.95 / team member / mo",
        badge: { label: "IN", color: "bg-[#6950f3] text-white" },
      },
      {
        name: "Team Pay",
        desc: "Simplify payroll with commissions, automated shift wages, timesheets and pay runs.",
        rate: "$7.95 / team member / mo",
        badge: { label: "TP", color: "bg-[#0ea5e9] text-white" },
      },
      {
        name: "Google Rating Boost",
        desc: "Prompt clients to leave verified Google reviews immediately after positive visits.",
        rate: "$14.95 / location / mo",
        badge: { label: "★", color: "bg-[#f59e0b] text-white" },
      },
    ],
  },
];

export const FRESHA_BLOG_POSTS: FreshaBlogPost[] = [
  {
    slug: "salon-scheduling-software-2025",
    title: "7 Best Salon Scheduling Software Platforms",
    category: "Business Tips",
    date: "June 6, 2025",
    excerpt:
      "Compare calendar ergonomics, zero-subscription booking workflows, POS terminals, and retention tools for modern salons and spas.",
    accentLabel: "Software Guide",
    variant: "warm",
  },
  {
    slug: "color-technology-partnership",
    title: "Investing in smart hair color dispensing technology",
    category: "Fresha News",
    date: "October 21, 2024",
    excerpt:
      "Bringing precision gram-level color mixing and automated inventory tracking directly to independent stylists and salon groups.",
    accentLabel: "fresha + yuv",
    variant: "gradient",
  },
  {
    slug: "lazy-girl-beauty-trends",
    title: "Low-Maintenance Beauty & Self-Care Trends",
    category: "Fresha Features",
    date: "September 4, 2024",
    excerpt:
      "Consumer booking insights show soaring demand for 30-minute express facials, keratin lash lifts, and low-upkeep gloss treatments.",
    accentLabel: "Market Report",
    variant: "bright",
  },
  {
    slug: "whitening-clinic-partner-story",
    title: "Meet the Partners: Scaling a modern wellness clinic",
    category: "Meet the Partners",
    date: "June 21, 2024",
    excerpt:
      "How a coastal studio eliminated front-desk bottlenecks with automated intake forms, reminders, and deposit protection.",
    accentLabel: "fresha × Clinic",
    variant: "studio",
  },
  {
    slug: "barbersmiths-multi-location",
    title: "Managing three barbershop studios across London",
    category: "Meet the Partners",
    date: "May 10, 2024",
    excerpt:
      "Centralized staff rosters, split commissions, and neighborhood marketplace discovery keep chairs booked seven days a week.",
    accentLabel: "fresha × Barbersmiths",
    variant: "warm",
  },
  {
    slug: "eighty-eight-nails-growth",
    title: "8 questions with a 50-artist boutique nail studio",
    category: "Meet the Partners",
    date: "April 22, 2024",
    excerpt:
      "Coordinating shifts, custom add-on pricing, and group party bookings across four flagship neighborhoods.",
    accentLabel: "fresha × Eighty-8",
    variant: "gradient",
  },
];

export const HELP_TOPICS = [
  {
    title: "Personal account",
    desc: "Set up and manage your client profile, saved addresses, and notifications.",
    tag: "Account",
  },
  {
    title: "Workspace settings",
    desc: "Configure venues, business hours, cancellation policies, and payment rules.",
    tag: "Workspace",
  },
  {
    title: "Calendar",
    desc: "Save time with online scheduling, blocked time, and waitlist automation.",
    tag: "Scheduling",
  },
  {
    title: "Team",
    desc: "Invite specialists, set permission levels, shifts, and service commissions.",
    tag: "Staff",
  },
  {
    title: "Catalog",
    desc: "Organize treatments, duration tiers, membership bundles, and gift cards.",
    tag: "Menu",
  },
  {
    title: "Clients",
    desc: "Grow client retention with consultation forms, notes, and automated reminders.",
    tag: "CRM",
  },
];

export const CAREERS_ROLES = [
  { title: "Account Manager (London)", city: "London", country: "United Kingdom", dept: "Commercial" },
  { title: "Associate Account Manager (London)", city: "London", country: "United Kingdom", dept: "Commercial" },
  { title: "Business Development Manager (London)", city: "London", country: "United Kingdom", dept: "Commercial" },
  { title: "Office Manager", city: "London", country: "United Kingdom", dept: "Finance & Operations" },
  { title: "Principal Frontend Engineer", city: "London", country: "United Kingdom", dept: "Engineering" },
  { title: "Senior Full Stack Engineer (TypeScript)", city: "London", country: "United Kingdom", dept: "Engineering" },
  { title: "Senior Product Designer", city: "London", country: "United Kingdom", dept: "Product" },
  { title: "Staff Backend Engineer", city: "London", country: "United Kingdom", dept: "Engineering" },
  { title: "Business Development Manager (Edinburgh)", city: "Edinburgh", country: "United Kingdom", dept: "Commercial" },
  { title: "Business Development Manager (Glasgow)", city: "Glasgow", country: "United Kingdom", dept: "Commercial" },
  { title: "Enterprise Partner Lead (New York)", city: "New York", country: "United States", dept: "Commercial" },
  { title: "Product Designer, Marketplace", city: "New York", country: "United States", dept: "Product" },
];

export const TOP_LOCATIONS_SITEMAP = [
  "Beauty Salons in London",
  "Hair Colouring in Dubai",
  "Manicures in Dubai",
  "Hair Treatments in Dubai",
  "Facials in Dubai",
  "Pedicures in Dubai",
  "Facials in London",
  "Eyebrows & Lashes in London",
  "Blow Dries and Blowouts in Dubai",
  "Face Waxing in Dubai",
  "Beauty Salons in Dubai",
  "Hair Salons in Dubai",
  "Beauty Salons in Melbourne",
  "Hair Salons in London",
  "Beauty Salons in Rural England",
  "Threading in Dubai",
  "Hair Styling in Dubai",
  "Full Body Waxing in Dubai",
  "Beauty Salons in Sydney",
  "Nail Salons in Dubai",
  "Nail Salons in London",
  "Women's Haircuts in Dubai",
  "Arm Waxing in Dubai",
  "Gel Nails in Dubai",
  "Aesthetics in London",
  "Leg Waxing in Dubai",
  "Face Waxing in London",
  "Eyelash Extensions in Dubai",
  "Eyelash Tinting in London",
  "Foot Massages in Dubai",
  "Hair Colouring in London",
  "Manicures in London",
  "Eyebrow Tinting in London",
  "Eyebrows & Lashes in Melbourne",
  "Eyelash Extensions in London",
  "Eyelash Tinting in Rural England",
  "Eyebrows & Lashes in Sydney",
  "Gel Nails in London",
  "Eyebrows & Lashes in Rural England",
  "Pedicures in London",
  "Women's Haircuts in London",
  "Massage in London",
  "Blow Dries and Blowouts in London",
  "Full Body Massages in Dubai",
  "Nail Salons in Rural England",
  "Facials in Rural England",
  "Gel Nails in Rural England",
  "Hair Salons in Melbourne",
  "Hair Salons in Sydney",
  "Face Waxing in Rural England",
  "Eyebrow Waxing in London",
  "Barbershops in Dubai",
  "Microneedling in London",
  "Body Scrub Treatments in Dubai",
];

export const SITEMAP_COUNTRIES = [
  "Australia",
  "Barbados",
  "Belgium",
  "Brazil",
  "Canada",
  "France",
  "Greece",
  "Ireland",
  "Italy",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Poland",
  "Portugal",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "Spain",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

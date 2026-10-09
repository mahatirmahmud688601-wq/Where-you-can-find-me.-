import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'fieldnote',
    name: 'Fieldnote',
    subtitle: 'Minimalist, Privacy-Focused Daily Productivity & Encrypted Vault',
    platform: 'Android',
    platformType: 'android',
    category: 'android',
    shortDescription: 'A minimalist, privacy-focused productivity app with daily task management, rich notes, calendar timeline, encrypted storage, and an AI Copilot scheduling assistant.',
    fullDescription: 'Fieldnote combines hyper-clean Scandinavian design principles with enterprise-grade AES-256-GCM local storage encryption. Engineered specifically for high-focus professionals who refuse to trade data sovereignty for convenience. Includes natural language task ingestion, an unbloated calendar timeline visualizer, and an on-device AI Copilot assistant that respects zero-telemetry boundaries.',
    updatedDate: 'Sep 18, 2026',
    createdDate: 'Sep 2, 2026',
    iconName: 'NotebookPen',
    accentColor: '#10b981', // emerald
    bgGradient: 'from-emerald-950/40 via-slate-900/60 to-slate-950',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'AES-256 Vault', 'AI Copilot', 'Room DB', 'Offline-First'],
    metrics: [
      { label: 'Latency', value: '<16ms' },
      { label: 'Encryption', value: 'AES-256-GCM' },
      { label: 'Cloud Leak', value: '0 bytes' },
    ],
    keyFeatures: [
      'Encrypted Local Storage: SQLCipher hardware-backed Keystore encryption protecting notes and journal entries.',
      'AI Copilot Scheduling: On-device natural language parser converts "review thesis with Alex Friday 4pm" into an automated task with conflict alerts.',
      'Calendar Timeline Matrix: Unified chronological stream merging time-blocked commitments, quick captures, and priority checklists.',
      'Biometric Quick Unlock: Fingerprint and facial biometric gate with emergency duress wipe mechanism.',
      'Markdown Rich Editor: Sub-second note rendering with inline checklists, LaTeX math support, and audio voice memos.'
    ],
    architecture: {
      frontend: 'Jetpack Compose + Material You Dynamic Theming',
      backendOrStorage: 'Room SQLite + SQLCipher + EncryptedSharedPreferences',
      stateManagement: 'MVI (Model-View-Intent) with Kotlin Coroutines & StateFlow',
      specialTech: 'Android Keystore System, On-Device Gemini Nano NLP, WorkManager'
    },
    demoType: 'notes'
  },
  {
    id: 'sitecheck-pro',
    name: 'SiteCheck Pro',
    subtitle: 'Mobile-First Construction & Engineering Inspection Tool',
    platform: 'Android',
    platformType: 'android',
    category: 'android',
    shortDescription: 'A mobile-first tool for streamlined site inspections, real-time issue tracking, team collaboration, and professional reporting for field teams.',
    fullDescription: 'SiteCheck Pro equips civil engineers, safety inspectors, and site superintendents with a rugged, offline-resilient inspection engine. Inspect complex construction projects, log photo evidence with visual markup, assign remediation severities, and generate branded executive PDF compliance reports in under 30 seconds straight from the field without an internet connection.',
    updatedDate: 'Sep 18, 2026',
    createdDate: 'Sep 6, 2026',
    iconName: 'ClipboardCheck',
    accentColor: '#f59e0b', // amber
    bgGradient: 'from-amber-950/40 via-slate-900/60 to-slate-950',
    tags: ['Android', 'Field Inspection', 'Offline Sync', 'CameraX Markup', 'PDF Generator', 'GPS Mapping'],
    metrics: [
      { label: 'Report Generation', value: '<5s' },
      { label: 'Offline Resiliency', value: '100%' },
      { label: 'Issue Resolution', value: '+42% Faster' },
    ],
    keyFeatures: [
      'Offline-First Audit Checklists: Standardized OSHA, ISO 9001, and custom project inspection forms runnable in underground tunnels or zero-cell sites.',
      'CameraX Photo Annotations: Capture high-definition job-site photos with vector arrows, text callouts, GPS coordinates, and timestamp stamping.',
      'Instant Branded PDF Reports: Compile multi-page audit summaries with punch lists, photo attachments, and digital signature sign-offs.',
      'Defect Escalation Dispatch: Automated severity scoring (Critical, High, Minor) with notification triggers sent when network connectivity resumes.',
      'Geofenced Floor Plans: Blueprint overlay viewer pinpointing exact defect locations on CAD schematics.'
    ],
    architecture: {
      frontend: 'Jetpack Compose + Custom Canvas Markup Tools',
      backendOrStorage: 'Room DB with Binary Blob Cache & Cloud Firestore Sync',
      stateManagement: 'Clean Architecture with UseCases & Flow Pipeline',
      specialTech: 'CameraX API, iText PDF Engine, Background Sync Adapter'
    },
    demoType: 'inspection'
  },
  {
    id: 'aerosched-ai',
    name: 'AeroSched AI',
    subtitle: 'Executive Chief of Staff & Workspace Intelligence for High-Tempo Leaders',
    platform: 'Android',
    platformType: 'android',
    category: 'ai',
    shortDescription: 'Executive Chief of Staff & Workspace Intelligence for high-tempo leaders.',
    fullDescription: 'AeroSched AI serves as an autonomous executive operations command center. It unifies meeting agendas, multi-timezone travel itineraries, email triage, and briefing digests into an intelligent daily flight plan. Powered by context-aware AI agents that protect executive focus blocks and prevent executive calendar fragmentation.',
    updatedDate: 'Sep 3, 2026',
    createdDate: 'Aug 25, 2026',
    iconName: 'Sparkles',
    accentColor: '#3b82f6', // blue
    bgGradient: 'from-blue-950/40 via-slate-900/60 to-slate-950',
    tags: ['Android', 'Executive AI', 'Workspace Ops', 'Smart Scheduling', 'WearOS Sync', 'Gemini 2.5'],
    metrics: [
      { label: 'Time Saved', value: '9.4 hrs/wk' },
      { label: 'Focus Block Gain', value: '+35%' },
      { label: 'Defrag Accuracy', value: '98.8%' },
    ],
    keyFeatures: [
      'Autonomous Daily Flight Plan: Morning 60-second audio and bullet briefing synthesizing priorities, attendee bios, and pending action items.',
      'Calendar Defragmenter: Automatically reorganizes non-critical 1-on-1s and status checks to generate contiguous 3-hour deep work focus blocks.',
      'Travel & Transit Conductor: Real-time flight tracking, airport buffer adjustments, and dynamic calendar time-blocking based on flight delays.',
      'One-Tap Executive Responses: Contextually aware 1-sentence decision drafts based on historical communication tone and authority guidelines.',
      'WearOS Live Complication: Haptic wrist nudges for upcoming agenda transitions with attendee dossier previews.'
    ],
    architecture: {
      frontend: 'Jetpack Compose + Glance AppWidget + WearOS Companion',
      backendOrStorage: 'Google Workspace API Client + Encrypted SQLite Room Cache',
      stateManagement: 'Redux-style Immutable State Engine with Coroutines',
      specialTech: 'Gemini 2.5 Pro Agent Integration, Google Calendar Sync, TTS Briefing'
    },
    demoType: 'schedule'
  },
  {
    id: 'smart-agent',
    name: 'Smart Email & Calendar Agent',
    subtitle: 'Automated Inbox Triage, Drive Document Intelligence & Schedule Engine',
    platform: 'Web',
    platformType: 'web',
    category: 'ai',
    shortDescription: 'An intelligent executive assistant agent that automates email triage, prioritizes urgent messages, manages Google Drive files with Gemini AI summarization, suggests optimal meeting schedules with Google Calendar and Gmail integration, mobile-friendly approval queues, encrypted offline storage, customizable notification rules, and team reporting dashboards.',
    fullDescription: 'A full-stack agentic web assistant engineered to conquer modern enterprise inbox overload. It connects deeply with Gmail, Google Calendar, and Google Drive to deliver automatic multi-category priority sorting, extract critical deadlines from 50-page PDF attachments, propose conflict-free scheduling invites, and present an executive approval queue that cuts inbox processing time by 75%.',
    updatedDate: 'Aug 25, 2026',
    createdDate: 'Aug 25, 2026',
    iconName: 'Bot',
    accentColor: '#8b5cf6', // purple
    bgGradient: 'from-purple-950/40 via-slate-900/60 to-slate-950',
    tags: ['Web Agent', 'Gemini AI', 'Google Workspace', 'OAuth 2.0', 'Drive Summarizer', 'Calendar API'],
    metrics: [
      { label: 'Triage Speed', value: '<200ms' },
      { label: 'Time Saved', value: '14 hrs/wk' },
      { label: 'Doc Digest', value: 'Up to 200 pgs' },
    ],
    keyFeatures: [
      'Multi-Inbox VIP Triage Scoring: Intelligent classification sorting incoming threads into Immediate Action, Review Required, and Passive Reading.',
      'Gemini Multimodal Drive Summarizer: Scans shared spreadsheets, presentations, and contracts in Google Drive and outputs 3-bullet executive takeaways.',
      'Smart Rescheduling Engine: Resolves double-bookings by checking participant availability and sending polite rescheduling alternatives.',
      'Mobile-Friendly Approval Queue: Swipeable card deck for rapidly approving proposed email responses and meeting invites.',
      'Encrypted Offline Mode: Local IndexedDB database with client-side cryptographic hashing ensuring data access during flights.'
    ],
    architecture: {
      frontend: 'React 19 + TypeScript + Tailwind CSS + Motion',
      backendOrStorage: 'Node / Express API + IndexedDB Client Cache',
      stateManagement: 'TanStack React Query + Custom Agent Event Store',
      specialTech: 'Gemini 2.5 Flash SDK, Google Calendar REST API, Gmail OAuth 2.0'
    },
    demoType: 'email'
  },
  {
    id: 'aurora-glow',
    name: 'Aurora Glow - 3D Digital Twin Studio',
    subtitle: 'Studio 3D Digital Twin Product Render & Interactive Textile Showcase',
    platform: 'Web',
    platformType: 'web',
    category: '3d',
    shortDescription: 'Studio 3D digital twin product render and interactive textile showcase of the Aurora Glow luxury artisanal embroidered garment collection.',
    fullDescription: 'An interactive high-fidelity 3D spatial web showcase celebrating haute couture artisanal embroidery. Aurora Glow utilizes physically based WebGL rendering (PBR) and micro-displacement fabric shaders to recreate delicate silk threads, metallic beadwork, and iridescent sheen under varying lighting environments.',
    updatedDate: 'Aug 25, 2026',
    createdDate: 'Aug 25, 2026',
    iconName: 'Layers',
    accentColor: '#ec4899', // pink
    bgGradient: 'from-pink-950/40 via-slate-900/60 to-slate-950',
    tags: ['WebGL', '3D Graphics', 'Digital Twin', 'Three.js', 'Custom Shaders', 'Luxury Fashion'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Shader Fidelity', value: 'Sub-millimeter' },
      { label: 'Asset Load', value: '<1.2s' },
    ],
    keyFeatures: [
      '360° Free Camera Orbit: Smooth damping controls allowing prospective buyers and art collectors to inspect seam craftsmanship from any angle.',
      'Micro-Weave PBR Shader: Custom GLSL displacement simulating real thread depth, metallic gold thread reflection, and velvet sheen.',
      'Dynamic Studio Lighting Rig: Real-time toggling between Paris Atelier daylight, Moody Runway spotlight, and Golden Hour sunset lighting.',
      'Interactive Colorway Simulator: Switch embroidered patterns between Obsidian Gold, Royal Sapphire, and Emerald Aurora.',
      'Macro Texture Inspection Mode: Ultra-high zoom level displaying thread counts and handmade artisanal stitch patterns.'
    ],
    architecture: {
      frontend: 'React 19 + Three.js / WebGL + Tailwind CSS',
      backendOrStorage: 'Optimized GLTF/GLB Binary Mesh Streaming + Canvas 2D Texture Generator',
      stateManagement: 'Zustand 3D Scene Controller',
      specialTech: 'GLSL Custom Surface Shaders, ACESFilmic Tone Mapping, PBR Materials'
    },
    demoType: 'digitaltwin'
  },
  {
    id: 'mahatir-portfolio',
    name: 'Mahatir Mahmud — Flutter & Mobile App Developer',
    subtitle: 'Single-Screen Cinematic Developer Portfolio & Cross-Platform Showcase',
    platform: 'Flutter / Android',
    platformType: 'flutter',
    category: 'flutter',
    shortDescription: 'Single-screen cinematic developer portfolio for Mahatir Mahmud, Flutter and Mobile App Developer.',
    fullDescription: 'A single-screen cinematic mobile experience engineered in Flutter. Designed to demonstrate architectural mastery in fluid motion, cross-platform UI precision, custom canvas painters, and reactive state management. Highlights Mahatir Mahmud\'s engineering capability across Flutter, Dart, Android Native, and modern AI pipelines.',
    updatedDate: 'Aug 19, 2026',
    createdDate: 'Aug 19, 2026',
    iconName: 'Smartphone',
    accentColor: '#06b6d4', // cyan
    bgGradient: 'from-cyan-950/40 via-slate-900/60 to-slate-950',
    tags: ['Flutter', 'Dart', 'Mobile UI', 'Cinematic Motion', 'Clean Architecture', 'Cross-Platform'],
    metrics: [
      { label: 'Target FPS', value: '120 FPS' },
      { label: 'Jank Rate', value: '0.0%' },
      { label: 'App Size', value: '14.2 MB' },
    ],
    keyFeatures: [
      'Cinematic Single-Screen Choreography: Fluid page transformations driven by custom physics curves without layout jumping or stutter.',
      'Interactive Radar Architecture Matrix: Visual skill radar displaying mastery across Flutter, Kotlin Compose, Gemini API, and SQLite.',
      'Modular BLoC / Clean Architecture: Decoupled domain, data, and presentation layers for frictionless testability and scalability.',
      'Native Device Bridge: Demonstrates high-performance platform channels connecting Flutter to Android native hardware sensors.',
      'Dark/Light Dynamic Adaptation: Seamless contrast-calibrated theming honoring system accessibility tokens.'
    ],
    architecture: {
      frontend: 'Flutter 3.24 + Dart + Custom AnimatedBuilder',
      backendOrStorage: 'Isar Local Database + REST Client Pipeline',
      stateManagement: 'BLoC (Business Logic Component) Pattern + Freezed Models',
      specialTech: 'Custom Canvas Painters, Rive Vector Physics, Platform Channels'
    },
    demoType: 'portfolio'
  },
  {
    id: 'kaptai-camping',
    name: 'Kaptai Camping',
    subtitle: 'Luxury Glamping & Lake Retreat Booking Platform for Outdoor Escapes',
    platform: 'Android',
    platformType: 'android',
    category: 'travel',
    shortDescription: 'Discover luxury glamping retreats, book unique outdoor escapes, and connect with the glamping community.',
    fullDescription: 'An Android travel and outdoor booking application dedicated to the pristine waters and lush hills of Lake Kaptai. Kaptai Camping empowers adventurers to discover eco-friendly luxury dome tents, schedule wooden boat transfers, reserve guided stargazing excursions, and share verified campsite reviews with a thriving outdoor community.',
    updatedDate: 'Aug 11, 2026',
    createdDate: 'Jul 23, 2026',
    iconName: 'Compass',
    accentColor: '#14b8a6', // teal
    bgGradient: 'from-teal-950/40 via-slate-900/60 to-slate-950',
    tags: ['Android', 'Travel & Outdoor', 'Lake Kaptai', 'Booking Engine', 'Offline Maps', 'Eco-Tourism'],
    metrics: [
      { label: 'Glamping Spots', value: '38 Verified' },
      { label: 'Offline Mapping', value: 'Full Region' },
      { label: 'Avg Rating', value: '4.9 ★' },
    ],
    keyFeatures: [
      'Glamping Spot Discovery: High-definition photo galleries and availability calendars for lakeside dome tents, bamboo treehouses, and floating huts.',
      'Seamless Lake Logistics: Integrated wooden boat transfer booking and local tribal community trekking guide reservations.',
      'Offline Lake Topography Maps: Downloadable GPS trails, emergency contact stations, and kayak routes functional without mobile coverage.',
      'Campfire Community Board: Verified camper stories, gear recommendations, and high-resolution photo logs with geotag verification.',
      'Weather & Lake Water Level Tracker: Real-time meteorological alerts and ideal sunrise/sunset visibility forecast.'
    ],
    architecture: {
      frontend: 'Jetpack Compose + Coil Image Pipeline',
      backendOrStorage: 'Room Database + Cloud Firestore + Local Map Tiles Cache',
      stateManagement: 'MVVM + StateFlow + Kotlin Coroutines',
      specialTech: 'MapLibre Open Source Mapping, Geolocation Services, Payment Integration'
    },
    demoType: 'camping'
  }
];

export const SKILL_CATEGORIES = [
  {
    name: 'Mobile & Cross-Platform',
    description: 'Native Android & cross-platform mobile systems built for speed and reliability.',
    skills: ['Kotlin & Jetpack Compose', 'Flutter & Dart', 'Room SQLite & SQLCipher', 'CameraX & Hardware API', 'MVI / Clean Architecture', 'WorkManager & Background Ops']
  },
  {
    name: 'AI & Autonomous Agents',
    description: 'Empowering applications with context-aware, multimodal intelligence.',
    skills: ['Google Gemini 2.5 API', 'Agentic Workspace Triage', 'On-Device NLP & Embeddings', 'Document Summarization', 'Prompt Engineering', 'Structured JSON Output']
  },
  {
    name: '3D Spatial & Creative Web',
    description: 'Immersive visual craft, custom shaders, and responsive interfaces.',
    skills: ['React 19 & TypeScript', 'Three.js & WebGL', 'Custom GLSL Shaders', 'Tailwind CSS v4', 'Motion & Physics Animation', 'PBR Material Systems']
  },
  {
    name: 'Security & Enterprise Architecture',
    description: 'Privacy-by-design engineering for zero data leaks and rock-solid uptime.',
    skills: ['AES-256 Local Encryption', 'Offline-First Architectures', 'OAuth 2.0 & Workspace APIs', 'Biometric Authentication', 'Zero-Telemetry Design', 'Automated PDF Generation']
  }
];

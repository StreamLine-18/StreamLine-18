export const profile = {
  name: 'Gemilang Tirto Ismoyo Santoso',
  role: 'Software Engineer',
  focus: 'Backend & IT Infrastructure',
  location: 'Yogyakarta, Indonesia',
  email: 'gemilangtirto2002@gmail.com',
  phone: '+62 812-3688-8575',
  phoneHref: 'tel:+6281236888575',
  github: 'https://github.com/StreamLine-18',
  linkedin: 'https://linkedin.com/in/gemilangtirto',
  summary:
    'Information Systems graduate with hands-on experience building full-stack applications using Express.js, Next.js, and PostgreSQL, and mobile applications using Flutter and Kotlin. Experienced in Linux system administration, Docker-based deployment on DigitalOcean, and daily IT support and troubleshooting in a university environment. Seeking opportunities in Software Engineering or IT Infrastructure / IT Support.',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const stats = [
  { to: 3.77, decimals: 2, label: 'GPA / 4.00' },
  { to: 3, decimals: 0, label: 'Certifications' },
  { to: 4, decimals: 0, label: 'Roles held' },
];

export const education = {
  school: 'Universitas Ahmad Dahlan',
  city: 'Yogyakarta',
  degree: 'Bachelor of Computer Science (S.Kom), February 2026',
  coursework:
    'Coursework: System Architecture, Database Systems, Software Engineering, IT Infrastructure.',
};

export const skills = [
  { title: 'Languages', items: ['Dart', 'Kotlin', 'HTML/CSS'] },
  { title: 'Frameworks', items: ['Flutter', 'Express.js', 'Next.js', 'React Native (familiar)'] },
  { title: 'Database', items: ['PostgreSQL', 'SQL'] },
  {
    title: 'Cloud & Infrastructure',
    items: ['Docker', 'Linux (Ubuntu/Debian)', 'DigitalOcean', 'Microsoft Azure'],
  },
  { title: 'Tools', items: ['Git/GitHub', 'REST API Design', 'Power Platform'] },
  { title: 'Familiar With', items: ['Python', 'Google Cloud Platform'] },
];

export const softSkills =
  'Soft skills: Problem Solving · Team Collaboration · Technical Communication · Troubleshooting';

export const projects = [
  {
    tag: 'Final Year Project',
    date: 'Aug 2025 – Feb 2026',
    title: 'Payment Gateway & Ticketing System',
    bullets: [
      'Built a full-stack ticketing system with an Express.js (Node.js) REST API backend and a Next.js frontend, using PostgreSQL for data persistence.',
      'Designed and integrated the Midtrans payment gateway to handle transaction processing and booking workflows.',
      'Containerized and deployed the application on DigitalOcean using Docker.',
    ],
    chips: ['Express.js', 'Next.js', 'PostgreSQL', 'Midtrans', 'Docker', 'DigitalOcean'],
    note: 'Part of a 3-tier system (visitor portal, backend API, admin dashboard). The link below is the visitor portal.',
    link: 'https://github.com/StreamLine-18/Skripsi-visitors',
  },
  {
    tag: 'Web Application',
    title: 'FiPex CMS: Admin Dashboard',
    bullets: [
      'Built a web-based content management dashboard for FiPex, bringing key administrative tasks into one interface.',
      'Supports managing users, teams, events, products, banners, badges, and attendance, with a public leaderboard and system health page.',
      'Connects to a REST API and includes authenticated admin routes.',
    ],
    chips: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Docker'],
    private: true,
  },
  {
    tag: 'Capstone Project',
    title: 'TBN Alliance: Backend',
    bullets: [
      'Developed the backend for a TBN Alliance website revamp, with features for managing events, user accounts, registrations, blog content, and partners.',
      'Supports event registration reviews and sends email notifications when registration statuses change.',
      'Protected the API with JWT authentication.',
    ],
    chips: ['PHP', 'Laravel 8', 'MySQL', 'JWT'],
    private: true,
  },
  {
    tag: 'Side Project',
    title: 'Verivy: Document Validation System',
    bullets: [
      'Built a web application to manage, review, and validate project feasibility document applications, with an approval workflow between Applicants (Pemohon) and Reviewers (Penilai).',
      'Implemented role-based access control with Spatie Laravel-Permission and Laravel Sanctum.',
      'Built an analytics dashboard with Chart.js and backend query caching, plus PDF uploads (max 10MB) with format and size validation.',
      'Added a QR code scanner to verify document status, CSV export of project data, and PostgreSQL B-Tree indexes with pagination for query performance.',
      'Set up the development environment with Docker and Laravel Sail.',
    ],
    chips: ['Laravel 12', 'Vue.js 3', 'Inertia.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    link: 'https://github.com/StreamLine-18/Verivy',
  },
  {
    tag: 'Side Project',
    title: 'Nephroscan: Urinalysis Result Interpreter',
    bullets: [
      'Built a web application that reads urinalysis test results from an uploaded photo and explains them in plain language.',
      'Used image detection to extract the result values from the scanned image.',
      'Fed the extracted values to a large language model (LLM) to generate an interpretation of the results.',
    ],
    chips: ['Image Detection', 'LLM Integration'],
    note: 'For informational purposes only, not a medical diagnosis.',
    private: true,
  },
];

export const experience = [
  {
    date: 'Feb 2026 – Mar 2026',
    title: 'Freelance Mobile App Developer',
    org: 'Sunhouse Digital (Remote)',
    bullets: [
      'Migrated a production application codebase from React Native to Flutter to improve maintainability and performance.',
      'Analyzed the existing codebase, adapted business logic, implemented new features, and handled final deployment.',
      'Identified and resolved post-migration issues to ensure application stability before production release.',
    ],
  },
  {
    date: 'Dec 2024 – Aug 2025',
    title: 'IT Support & Operational Staff',
    org: 'Bidang PkM dan KKN, Universitas Ahmad Dahlan',
    bullets: [
      'Diagnosed and resolved daily hardware and software issues, including system setup and installation for office operations.',
      'Managed high-accuracy data entry and maintained structured operational documentation for university programs.',
      'Served as frontliner and primary administrator for official communication channels, delivering timely and clear information to internal and external stakeholders.',
    ],
  },
  {
    date: 'Feb 2025 – Jul 2025',
    title: 'Mobile Technology Teaching Assistant',
    org: 'Universitas Ahmad Dahlan (Part-Time)',
    bullets: [
      'Supported students in mobile application development labs using Kotlin and Flutter.',
      'Conducted code reviews and provided recommendations for writing clean, efficient code.',
      'Helped students troubleshoot compilation errors and debug programming issues.',
    ],
  },
  {
    date: 'Feb 2025 – Jul 2025',
    title: 'Web Technology Teaching Assistant',
    org: 'Universitas Ahmad Dahlan (Part-Time)',
    bullets: [
      'Supported students in web application development labs.',
      'Collaborated with lecturers and lab coordinators to align lab activities with the academic curriculum.',
    ],
  },
  {
    date: 'Feb 2022 – Dec 2023',
    title: 'Literature & Development Division Member',
    org: 'Information Systems Student Association (HMPS SI UAD)',
    bullets: [
      'Contributed to academic development programs and technology literacy initiatives for association members.',
    ],
  },
];

export const certifications = [
  {
    date: 'July 2024',
    title: 'Bangkit Academy – Mobile Development',
    text: 'OOP, SOLID Principles, RESTful API Integration, Local Data Storage, Client-side Machine Learning. Delivered a Capstone Project with a team.',
  },
  { date: 'December 2023', title: 'Microsoft Certified: Azure Fundamentals (AZ-900)' },
  { date: 'December 2023', title: 'Microsoft Certified: Power Platform Fundamentals' },
  {
    date: 'Community Program',
    title: 'Juara GCP (Google Cloud)',
    text: 'Participant, with related Google Cloud coursework completed on Dicoding.',
  },
];

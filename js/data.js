const SITE = {
  heroPhoto: "assets/img/profile/hero.png",
  aboutPhoto: "assets/img/profile/about.jpeg",
  roles: ["Frontend Developer", "UI/UX Designer", "Content Creator", "Video Editor", "Student Leader"],
  skillsMarquee: ["C++", "Python", "PHP", "HTML", "CSS", "JavaScript", "UI/UX Design", "Video Editing", "Instagram Design", "Roblox Studio", "Leadership", "Teamwork"]
};

/* ---------------- PROJECTS ---------------- */

const PROJECTS = [
  {
    id: "cakrawala-pandawa",
    index: "01",
    title: "Cakrawala Pandawa",
    type: "E-Learning Platform",
    role: "Frontend Developer (Student, Admin, Treasurer & Library modules)",
    ratio: "desktop",
    link: "",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    desc: "An e-learning website for school. Students generate a personal QR code and teachers scan it, so attendance is recorded in the system automatically; teachers also open the attendance window. A treasurer role enters tuition (SPP) bills for students, and the system automatically compiles the bookkeeping into a downloadable .csv file. Students track their bills and payment history, and submit book loan requests online. Admins manage teacher accounts, student accounts and classes. The library module lets librarians add and edit books and approve borrowing requests.",
    note: "Team project. I built the frontend for the Student, Admin, Treasurer and Library modules; the Teacher module was built by a teammate.",
    features: [
      { name: "Landing Page", desc: "The main entry point of the application.", img: "assets/img/projects/cakrawala-pandawa/01-dashboard.jpg" },
      { name: "Login Page", desc: "The login page for user authentication.", img: "assets/img/projects/cakrawala-pandawa/02-login.jpg" },
      { name: "Dashboard Siswa", desc: "The student dashboard showing their biodata.", img: "assets/img/projects/cakrawala-pandawa/03-dashboard-siswa.jpg" },
      { name: "Student QR Generation", desc: "Students generate their own QR code for attendance.", img: "assets/img/projects/cakrawala-pandawa/04-student-qr.jpg" },
      { name: "SPP · Student Tracking", desc: "Students monitor their bills and payment history.", img: "assets/img/projects/cakrawala-pandawa/05-spp-student.jpg" },
      { name: "Student · Borrow a Book", desc: "Students submit a loan request straight from the website.", img: "assets/img/projects/cakrawala-pandawa/06-student-borrow.jpg" },
      { name: "Admin · Teacher Accounts", desc: "Admins create and manage teacher accounts.", img: "assets/img/projects/cakrawala-pandawa/07-admin-teachers.jpg" },
      { name: "Admin · Student Accounts", desc: "Admins create and manage student accounts.", img: "assets/img/projects/cakrawala-pandawa/08-admin-students.jpg" },
      { name: "Admin · Class Management", desc: "Admins organize classes.", img: "assets/img/projects/cakrawala-pandawa/09-admin-classes.jpg" },
      { name: "Treasurer · Enter Bills", desc: "The treasurer creates tuition bills for students.", img: "assets/img/projects/cakrawala-pandawa/10-treasurer-bills.jpg" },
      { name: "Library · Manage Books", desc: "Librarians add and edit books in the catalogue.", img: "assets/img/projects/cakrawala-pandawa/11-library-books.jpg" },
    ]
  },
  {
    id: "lumbung-harmoni",
    index: "02",
    title: "Lumbung Harmoni",
    type: "PPK Ormawa Documentation Website",
    role: "Freelance Web Developer",
    ratio: "desktop",
    link: "https://lumbungharmoni.netlify.app/",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A documentation website for the PPK Ormawa program “Lumbung Harmoni”, showcasing the activities and progress of the program. Live and publicly hosted.",
    note: "Commissioned freelance project - I built and delivered the website; I was not a participant of the PPK Ormawa program itself.",
    features: [
      { name: "Home", desc: "Hero section introducing the program.", img: "assets/img/projects/lumbung-harmoni/01-home.png" },
      { name: "About the Program", desc: "Background and goals of Lumbung Harmoni.", img: "assets/img/projects/lumbung-harmoni/02-about.png" },
      { name: "Activity Documentation", desc: "Documentation photos from the field.", img: "assets/img/projects/lumbung-harmoni/03-activities.png" },
      { name: "Release Media", desc: "News and activity documentation for the Lumbung Harmoni Program.", img: "assets/img/projects/lumbung-harmoni/04-media.png" },
      { name: "Personal Information", desc: "Lumbung Harmoni personal information", img: "assets/img/projects/lumbung-harmoni/05-information.png" }
    ]
  },
  {
    id: "solotrek",
    index: "03",
    title: "SoloTrek",
    type: "Travel Companion Mobile App",
    role: "Mobile App Developer",
    ratio: "mobile",
    link: "",
    stack: ["Mobile", "Generative AI", "REST APIs"],
    desc: "A travel app that makes trip planning easy. Generative AI builds your itinerary, and the app packs the tools a traveler needs: 5-day weather, nearby attractions within 10 km, currency exchange, world time zones, step counter, qibla compass and an image-based translator. It also has a flag-guessing mini game, notifications and fingerprint login.",
    note: "",
    features: [
      { name: "Home", desc: "Welcome to solotrek.", img: "assets/img/projects/solotrek/01-home.jpeg" },
      { name: "AI Trip Planner", desc: "Generative AI creates a travel plan for you.", img: "assets/img/projects/solotrek/02-ai-planner.jpeg" },
      { name: "Plan Your Journey", desc: "Plan your journey AI makes it easy", img: "assets/img/projects/solotrek/03-result.jpeg" },
      { name: "5-Day Weather", desc: "Forecast for the coming week.", img: "assets/img/projects/solotrek/04-weather.jpeg" },
      { name: "Nearby Attractions", desc: "Tourist spots within a 10 km radius.", img: "assets/img/projects/solotrek/05-nearby.jpeg" },
      { name: "Notifications", desc: "Reminders and updates.", img: "assets/img/projects/solotrek/06-notifications.jpeg" },
      { name: "Currency & World Time Zones", desc: "exchange rates for various currencies and various time zones.", img: "assets/img/projects/solotrek/07-currency-time.jpeg" },
      { name: "Step Counter", desc: "Detects your steps while exploring.", img: "assets/img/projects/solotrek/08-steps.jpeg" },
      { name: "Qibla Compass", desc: "Direction of the qibla anywhere you travel.", img: "assets/img/projects/solotrek/09-qibla.jpeg" },
      { name: "Image Translator", desc: "Automatic translation from a photo.", img: "assets/img/projects/solotrek/10-translator.jpeg" },
      { name: "Guess the Capital Mini Game", desc: "Guess the capital city of a country.", img: "assets/img/projects/solotrek/11-flag-game.jpeg" },
      { name: "Settings", desc: "Settings for the app.", img: "assets/img/projects/solotrek/12-settings.jpeg" }
    ]
  }
];

/* ---------------- ROBLOX ---------------- */
const ROBLOX = {
  desc: "A Roblox map that I designed and scripted entirely on my own. I built the environment and layout in Roblox Studio, then wrote the gameplay logic in Lua.",
  shots: [
    { img: "assets/img/roblox/01.png", caption: "Spawn area" },
    { img: "assets/img/roblox/02.png", caption: "Waterfall" },
    { img: "assets/img/roblox/03.png", caption: "Lake" },
    { img: "assets/img/roblox/04.png", caption: "Beautiful view" },
    { img: "assets/img/roblox/05.png", caption: "Summit" }
  ]
};

/* ---------------- INSTAGRAM DESIGNS ---------------- */
const DESIGNS = [
  { cat: "Book Cover", ratio: "2:3", img: "assets/img/design/01.png", caption: "Design 01", link: "https://canva.link/gst5mlb1rzwdihr" },
  { cat: "Instagram Feed", ratio: "4:5", img: "assets/img/design/02.png", caption: "Design 02", link: "" },
  { cat: "Book Cover", ratio: "2:3", img: "assets/img/design/03.png", caption: "Design 03", link: "https://canva.link/u8xv3bbop88cewl" },
  { cat: "Instagram Feed", ratio: "4:5", img: "assets/img/design/04.png", caption: "Design 04", link: "" },
  { cat: "Instagram Feed", ratio: "4:5", img: "assets/img/design/05.png", caption: "Design 05", link: "" },
  { cat: "Poster", ratio: "3:4", img: "assets/img/design/06.jpeg", caption: "Design 06", link: "" },
  { cat: "Banner", ratio: "18:9", img: "assets/img/design/07.png", caption: "Landscape banner 01" },
  { cat: "Banner", ratio: "18:9", img: "assets/img/design/08.png", caption: "Landscape banner 02" }

];

/* ---------------- VIDEO EDITS ----------------*/
const VIDEOS = [
  { title: "Clipper", platform: "TikTok", link: "https://www.tiktok.com/@d4maxxx/video/7686001444893281556" },
  { title: "Mini vlog education", platform: "TikTok", link: "https://www.tiktok.com/@jejakpandes/video/7656087323913833736" },
  { title: "Gaming", platform: "YouTube", link: "https://youtube.com/shorts/BFVKTF3cPLw?si=6sMXA5c-C03FYu1c" }
];

/* ---------------- JOURNEY ---------------- */
const JOURNEY = [
  { year: "2020", type: "edu", title: "SMAN 1 Rembang - Science Track", where: "2020 – 2023", desc: "Started high school in the Mathematics & Natural Sciences track." },
  { year: "2022", type: "work", title: "Computer Admin - OSIS MPK", where: "High school · 2022", desc: "Managed and monitored the election website used to choose the OSIS chair." },
  { year: "2022", type: "org", title: "Member, Commission 4 - Class Representative Council (MPK)", where: "High school · 2022", desc: "Oversaw OSIS performance in adolescent reproductive health and social-culture." },
  { year: "2022", type: "event", title: "Math Admin Volunteer - Schoolfess", where: "3 months", desc: "Prepared and shared engaging math learning materials with students." },
  { year: "2023", type: "edu", title: "B.Sc. Informatics - UPN “Veteran” Yogyakarta", where: "2023 – present", desc: "Currently in the 7th semester." },
  { year: "2023", type: "event", title: "Equipment Staff - Graduation SMAN 1 Rembang", where: "Event · 2023", desc: "Also equipment staff for the school's anniversary (HUT) in 2022." },
  { year: "2024", type: "work", title: "Feeds Editor - Adiarta Tour", where: "2024", desc: "Created content for the Adiarta Tour Instagram feed." },
  { year: "2024", type: "org", title: "Staff, Strategic Studies - BEM Faculty of Industrial Engineering", where: "UPNVY · 2024 – 2025", desc: "Analysed internal and external campus issues and ran discussion forums." },
  { year: "2024", type: "org", title: "Staff, Research & Development - PERMIKOMNAS BPW VIII", where: "2024 – 2025", desc: "Involved in the fellowship night and the national festival." },
  { year: "2024", type: "event", title: "Head of Equipment - Permikomnas Festival × HIMATIF", where: "Event · 2024", desc: "Also equipment staff for PKKBN FTI and Permikomnas fellowship night, and big sibling (Kakak Asuh) in PKKBN HIMATIF & Kaderisasi HIMATIF." },
  { year: "2025", type: "org", title: "Head of Strategic Studies Division - BEM Faculty of Industrial Engineering", where: "UPNVY · 2025 – 2026", desc: "Coordinated staff on campus issue studies, cross-faculty benchmarking, student interview videos and faculty opinion surveys." },
  { year: "2025", type: "event", title: "Deputy Head of Equipment - Seminar Industrial Indonesian Outlook 2025", where: "Event · 2025", desc: "Supported equipment planning and execution for the seminar." },
  { year: "2026", type: "work", title: "Web Developer Intern - SMK Bina Harapan Kaliurang", where: "Jan – Mar 2026", desc: "Analysed school system requirements, wrote the Software Requirements Specification, designed the website and built its frontend." },
  { year: "2026", type: "org", title: "Head of Advocacy & Student Welfare - HIMATIF UPNVY", where: "2026 – present", desc: "Leading student advocacy programs for the Informatics department." }
];

/* ---------------- HIMATIF PROGRAMS ---------------- */
const PROGRAMS = [
  { name: "Side Quest", desc: "A responsive mentoring program for students facing administrative or academic obstacles." },
  { name: "Kawal Maba", desc: "Guides new students through early administration: re-registration, document submission and tuition (UKT) payment." },
  { name: "Sarasehan", desc: "An open dialogue forum between students and lecturers to bridge aspirations and academic concerns." },
  { name: "ACUMALAKA", desc: "An open aspiration channel for Informatics students, with follow-up until it reaches campus bureaucracy." },
  { name: "KARTIKA", desc: "Data- and aspiration-based studies of student issues, published as Instagram content." },
  { name: "EVALUATIF", desc: "A full evaluation of HIMATIF's performance involving five active student cohorts to drive transparency and improvement." }
];

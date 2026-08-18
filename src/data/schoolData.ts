export interface Program {
  id: string;
  title: string;
  grades: string;
  ageGroup: string;
  description: string;
  features: string[];
  image: string;
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  studentName: string;
  category: "Board Exam" | "Olympiad" | "Sports" | "Innovation";
  achievement: string;
  scoreOrMedal: string;
  year: string;
  image: string;
  quote?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "Academic" | "Event" | "Sports" | "Notice";
  excerpt: string;
  fullContent: string;
  image: string;
  author: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Events" | "Sports" | "Academics" | "Celebrations" | "CBSE Events";
  image: string;
  caption: string;
  date: string;
}

export interface Facility {
  id: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  highlights: string[];
  image: string;
  icon: string;
  stats?: { label: string; value: string }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Admission" | "Academics" | "Transport & Fees";
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  messageSnippet: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const SCHOOL_INFO = {
  name: "Dayanand Arya Vidya Public School",
  tagline: "Shaping Future Leaders with Knowledge, Discipline & Values",
  established: "1999",
  affiliation: "CBSE Affiliated (Affiliation No: 3430396, School No: 66599)",
  schoolCode: "66599",
  phone: "+91 94311 02847 / +91 651 229 0184",
  email: "info@dayanandariaschool.edu.in",
  admissionEmail: "admissions@dayanandariaschool.edu.in",
  address: "Kandri More, Mandar, Ranchi, Jharkhand - 835214",
  workingHours: "Mon - Sat: 7:30 AM - 3:30 PM",
  stats: [
    { value: "3,200+", label: "Active Students" },
    { value: "180+", label: "Expert Faculty" },
    { value: "27+", label: "Years of Excellence" },
    { value: "100%", label: "CBSE Pass Rate" },
  ]
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: "pre-primary",
    title: "Pre-Primary Wing (Nursery - UKG)",
    grades: "Nursery to UKG",
    ageGroup: "3 - 5 Years",
    description: "Play-based, child-centric foundation emphasizing sensory learning, social skills, and creative play in safe, vibrant spaces.",
    features: ["Montessori & Play-Way Method", "Phonetics & Early Numeracy", "Kinesthetic Activity Rooms", "Nutritional Snack Guidance"],
    image: "/placeholder.png",
    iconName: "Baby"
  },
  {
    id: "primary",
    title: "Primary Wing (Class I - V)",
    grades: "Grade 1 to 5",
    ageGroup: "6 - 10 Years",
    description: "Fostering inquiry, critical thinking, language fluency, and core numeracy along with arts, music, and physical education.",
    features: ["Experiential Learning Modules", "Language Proficiency Labs", "Robotics & Basic Coding", "Environmental Studies Projects"],
    image: "/placeholder.png",
    iconName: "BookOpen"
  },
  {
    id: "middle",
    title: "Middle Wing (Class VI - VIII)",
    grades: "Grade 6 to 8",
    ageGroup: "11 - 13 Years",
    description: "Deepening subject conceptualization, scientific temperament, analytical skills, inter-school competitions, and leadership.",
    features: ["Advanced Integrated Science Labs", "Third Language Options (Sanskrit/French)", "Olympiad Coaching", "Club & House System"],
    image: "/placeholder.png",
    iconName: "Brain"
  },
  {
    id: "secondary",
    title: "Secondary Wing (Class IX - X)",
    grades: "Grade 9 to 10",
    ageGroup: "14 - 15 Years",
    description: "Rigorous CBSE curriculum preparation coupled with career counseling, skill subjects, and intensive academic mentorship.",
    features: ["Board Examination Preparation", "AI & Information Technology Skill Subjects", "Regular Mock Assessments", "Personalized Counseling"],
    image: "/placeholder.png",
    iconName: "GraduationCap"
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary (Class XI - XII)",
    grades: "Grade 11 to 12",
    ageGroup: "16 - 17 Years",
    description: "Specialized streams in Science, Commerce, and Humanities paired with competitive exam foundation (JEE, NEET, CUET, CLAT).",
    features: ["Science (PCM / PCB)", "Commerce with Financial Markets", "Humanities & Applied Psychology", "Integrated Test Series"],
    image: "/placeholder.png",
    iconName: "Award"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "1",
    title: "CBSE Class XII State Topper",
    studentName: "Aarav Sharma",
    category: "Board Exam",
    achievement: "Secured 99.2% in CBSE Class XII Science Stream with 100 in Mathematics & Physics.",
    scoreOrMedal: "99.2%",
    year: "2025",
    image: "/placeholder.png",
    quote: "The teachers at Dayanand Arya Vidya gave me constant guidance and personalized mock test analysis."
  },
  {
    id: "2",
    title: "National Cyber Olympiad Gold Medalist",
    studentName: "Ananya Roy",
    category: "Olympiad",
    achievement: "Rank 1 International Cyber Olympiad across 12,000+ participating schools.",
    scoreOrMedal: "AIR 1",
    year: "2025",
    image: "/placeholder.png",
    quote: "Our school's smart computer lab enabled me to practice advanced algorithmic problems daily."
  },
  {
    id: "3",
    title: "JEE Advanced Top 500 Selection",
    studentName: "Rohan Verma",
    category: "Innovation",
    achievement: "Secured All India Rank 342 in JEE Advanced 2025 and qualified for IIT Bombay CS.",
    scoreOrMedal: "AIR 342",
    year: "2025",
    image: "/placeholder.png",
    quote: "The integrated coaching modules and weekend problem sessions made all the difference."
  },
  {
    id: "4",
    title: "CBSE National Athletics Championship",
    studentName: "Priya Singh",
    category: "Sports",
    achievement: "Gold Medal in Under-19 Girls 400m Athletics Championship.",
    scoreOrMedal: "Gold Medal",
    year: "2024",
    image: "/placeholder.png",
    quote: "Our physical education department gave me world-class training facilities and encouragement."
  }
];

export const NEWS_EVENTS_DATA: NewsItem[] = [
  {
    id: "news-1",
    title: "Annual Science & AI Innovation Expo 2026 Announced",
    date: "August 15, 2026",
    category: "Academic",
    excerpt: "Students from grades 6 to 12 will showcase over 120 working models on Renewable Energy, Robotics, and Generative AI applications.",
    fullContent: "Dayanand Arya Vidya Public School is hosting its annual Innovation Expo featuring prototype exhibitions, live coding challenges, and interactive workshops judged by senior ISRO & IIT alumni.",
    image: "/placeholder.png",
    author: "Academic Coordinator",
    readTime: "3 min read"
  },
  {
    id: "news-2",
    title: "Admissions Open for Academic Session 2026-27",
    date: "August 1, 2026",
    category: "Notice",
    excerpt: "Registration forms for Nursery to Grade IX & XI (Science, Commerce, Arts) are now available online and at the campus admission counter.",
    fullContent: "Parents interested in enrolling their children for the upcoming session can fill out the online admission form or schedule a guided campus tour with our admissions counselor.",
    image: "/placeholder.png",
    author: "Admissions Office",
    readTime: "2 min read"
  },
  {
    id: "news-3",
    title: "Inter-House Sports Meet & Athletics Tournament",
    date: "July 24, 2026",
    category: "Sports",
    excerpt: "Over 800 athletes participated across Track & Field events, Basketball, Badminton, and Football tournaments.",
    fullContent: "The 3-day sports carnival concluded with Agni House lifting the overall championship trophy. Outstanding individual sportsmanship awards were presented by International Badminton Coach S. K. Das.",
    image: "/placeholder.png",
    author: "Sports Department",
    readTime: "4 min read"
  },
  {
    id: "news-4",
    title: "Interactive Parent-Teacher Meeting & Career Counseling Summit",
    date: "July 10, 2026",
    category: "Event",
    excerpt: "Expert career strategists addressed grade 10 & 12 students regarding career pathways in Engineering, Design, Law, Management, and Civil Services.",
    fullContent: "The summit provided comprehensive insights into post-12th entrance patterns, global university admissions, and personalized stream selection tests for secondary students.",
    image: "/placeholder.png",
    author: "Guidance Counselor",
    readTime: "3 min read"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "State-of-the-Art Science Complex",
    category: "Campus",
    image: "/placeholder.png",
    caption: "Fully equipped Physics, Chemistry, and Biology laboratories for high school research.",
    date: "2026"
  },
  {
    id: "g2",
    title: "Independence Day Cultural Performance",
    category: "Celebrations",
    image: "/placeholder.png",
    caption: "Students performing traditional classical dance during patriotic festival.",
    date: "2025"
  },
  {
    id: "g3",
    title: "Inter-School Basketball Finals",
    category: "Sports",
    image: "/placeholder.png",
    caption: "Our Senior Boys team in action during regional CBSE basketball championship.",
    date: "2025"
  },
  {
    id: "g4",
    title: "Smart Classroom Interactive Session",
    category: "Academics",
    image: "/placeholder.png",
    caption: "Interactive digital board learning session in Grade 8 Science class.",
    date: "2026"
  },
  {
    id: "g5",
    title: "Annual Day Gala Performance",
    category: "Events",
    image: "/placeholder.png",
    caption: "Over 1,500 parents gathered for our spectacular Annual Cultural Night.",
    date: "2025"
  },
  {
    id: "g6",
    title: "Central Digital Library",
    category: "Campus",
    image: "/placeholder.png",
    caption: "Quiet study pavilion housing over 25,000 reference volumes and e-journals.",
    date: "2026"
  },
  {
    id: "g7",
    title: "CBSE Regional Science Exhibition 2026",
    category: "CBSE Events",
    image: "/placeholder.png",
    caption: "Students presenting working models at the CBSE Cluster Level Science & Innovation Meet.",
    date: "2026"
  },
  {
    id: "g8",
    title: "CBSE Cluster Athletic Championship",
    category: "CBSE Events",
    image: "/placeholder.png",
    caption: "School athletes representing Dayanand Arya Vidya Public School at the CBSE East Zone Track & Field Meet.",
    date: "2026"
  },
  {
    id: "g9",
    title: "CBSE Teacher Capacity Building Workshop",
    category: "CBSE Events",
    image: "/placeholder.png",
    caption: "Faculty participating in mandatory CBSE Centre of Excellence (COE) NEP 2020 pedagogy training.",
    date: "2026"
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "library",
    name: "Central Knowledge Library",
    shortDesc: "Over 25,000 physical titles, digital reading stations, quiet research bays, and subscription to leading international journals.",
    detailedDesc: "Our library is designed as an inspiring intellectual sanctuary. Equipped with modern e-readers, digital databases, current affairs periodicals, and dedicated research zones for high school projects.",
    highlights: ["25,000+ Curated Books & Encyclopedias", "High-speed Wi-Fi & Digital Reading Stations", "Quiet Study & Discussion Pods", "National & International Periodicals"],
    image: "/placeholder.png",
    icon: "BookOpen",
    stats: [{ label: "Volumes", value: "25k+" }, { label: "Capacity", value: "150 Seats" }]
  },
  {
    id: "labs",
    name: "Advanced STEM & Science Laboratories",
    shortDesc: "Dedicated Physics, Chemistry, Biology, and Robotics research labs meeting international safety standards.",
    detailedDesc: "Hands-on experimentation is central to our curriculum. Every laboratory features individual workstation setups, digital microscopes, IoT demonstration kits, and full safety gear.",
    highlights: ["Separate Physics, Chemistry, Biology & Bio-Tech Labs", "Robotics & IoT Innovation Station", "Digital Measurement Sensors & Equipment", "Strict Safety Protocols & First-Aid Preparedness"],
    image: "/placeholder.png",
    icon: "FlaskConical",
    stats: [{ label: "Labs", value: "6 Full Setup" }, { label: "Workstations", value: "40 / Lab" }]
  },
  {
    id: "computer-lab",
    name: "Next-Gen Computer & AI Center",
    shortDesc: "120+ high-performance computer systems with gigabit fiber Internet, coding IDEs, and AI simulation software.",
    detailedDesc: "Students learn block coding in primary grades, transitioning to Python, Web Development, Cyber Security, and Artificial Intelligence fundamentals in middle and senior school.",
    highlights: ["120+ Core-i7 Workstations", "Optic Fiber High-Speed Internet", "Python, Java & Web Dev Software Suites", "Air-conditioned ergonomic seating"],
    image: "/placeholder.png",
    icon: "Monitor",
    stats: [{ label: "Systems", value: "120+" }, { label: "Bandwidth", value: "1 Gbps" }]
  },
  {
    id: "sports-complex",
    name: "Olympic-Standard Sports Complex",
    shortDesc: "Multi-purpose sports arena featuring synthetic basketball courts, football field, cricket turf nets, and indoor badminton hall.",
    detailedDesc: "Physical fitness builds character and resilience. Certified national coaches provide specialized training in athletics, basketball, football, martial arts, table tennis, and chess.",
    highlights: ["Standard Size Turf Football Field", "Synthetic Basketball & Tennis Courts", "Indoor Badminton & Table Tennis Pavilion", "Professional Swimming Pool & Gym"],
    image: "/placeholder.png",
    icon: "Trophy",
    stats: [{ label: "Area", value: "5 Acres" }, { label: "Coaches", value: "12 Certified" }]
  },
  {
    id: "auditorium",
    name: "Grand AC Auditorium & Performing Arts Hall",
    shortDesc: "1,200 seat acoustically treated auditorium with studio stage lighting, sound system, and green rooms.",
    detailedDesc: "From theatrical plays and musical concerts to national debates and academic summits, our auditorium serves as the cultural heart of the school campus.",
    highlights: ["1,200 Seating Capacity with Plush Armchairs", "Surround Sound & LED Stage Walls", "Centralized Air Conditioning", "Green Rooms & Backstage Facilities"],
    image: "/placeholder.png",
    icon: "Mic",
    stats: [{ label: "Seating", value: "1,200" }, { label: "Stage", value: "2,000 sq.ft" }]
  },
  {
    id: "transport",
    name: "GPS-Tracked Safe Transport Fleet",
    shortDesc: "Air-conditioned bus fleet covering all major routes across Ranchi and surrounding regions with live GPS tracking for parents.",
    detailedDesc: "Safety is non-negotiable. Each vehicle is equipped with speed governors, CCTV cameras, first-aid kits, speed sensors, and trained female attendants.",
    highlights: ["45+ Modern Buses Covering 35+ Routes", "Real-Time Mobile App GPS Tracking for Parents", "CCTV Monitoring & Speed Governors", "Trained Drivers & Female Bus Attendants"],
    image: "/placeholder.png",
    icon: "Bus",
    stats: [{ label: "Routes", value: "35+" }, { label: "Fleet", value: "45 Buses" }]
  },
  {
    id: "medical",
    name: "24/7 Wellness & Medical Care Center",
    shortDesc: "On-campus infirmary staffed by a full-time resident nurse and visiting pediatrician, backed by ambulance emergency response.",
    detailedDesc: "Immediate healthcare and routine health checks ensure complete student well-being. Annual dental, eye, and physical wellness audits are conducted for all students.",
    highlights: ["Full-Time Qualified Nursing Staff", "Emergency Oxygen & Ambulance Tie-Up", "Annual Comprehensive Health Audits", "Sanitized Rest Beds & Medicines"],
    image: "/placeholder.png",
    icon: "HeartPulse",
    stats: [{ label: "Staff", value: "24/7 Nurse" }, { label: "Checkups", value: "Bi-Annual" }]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the admission procedure for Nursery to Grade IX?",
    answer: "Admission begins with an online or offline enquiry, followed by registration form submission. For pre-primary grades, an informal interaction takes place. For grades I to IX, students undertake a baseline assessment test in English, Mathematics, and Science.",
    category: "Admission"
  },
  {
    id: "faq-2",
    question: "Is Dayanand Arya Vidya Public School affiliated with CBSE?",
    answer: "Yes, our school is fully affiliated with the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No: 3430396, School No: 66599), offering education up to Senior Secondary Level (Grade 12).",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What streams are offered for Class 11 & 12?",
    answer: "We offer three comprehensive streams: Science (Physics, Chemistry, Math/Biology, CS/IP/Physical Ed), Commerce (Accountancy, Business Studies, Economics, Applied Math), and Humanities (History, Political Science, Economics, Psychology, Sociology).",
    category: "Academics"
  },
  {
    id: "faq-4",
    question: "How does the school handle student safety and bus transport?",
    answer: "All school buses feature live GPS tracking accessible via our parent mobile app, CCTV cameras, speed limiters, and female bus attendants. Campus entrances are strictly monitored with 24x7 security personnel and 180+ HD CCTV cameras.",
    category: "Transport & Fees"
  },
  {
    id: "faq-5",
    question: "What is the student-teacher ratio in classrooms?",
    answer: "We maintain an optimal ratio of 25:1 in pre-primary and 30:1 in higher classes to guarantee individual attention, personalized feedback, and strong teacher-student rapport.",
    category: "Academics"
  }
];

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    id: "director",
    name: "Er. Alok Nath Verma",
    role: "Director",
    qualification: "M.Tech (IIT Kanpur), Senior Education Administrator",
    messageSnippet: "Our vision is to build an ecosystem where intellectual curiosity meets human compassion, empowering students to lead and inspire in a rapidly changing world.",
    image: "/images/director.png"
  },
  {
    id: "principal",
    name: "Aarti Singh",
    role: "Principal",
    qualification: "M.A, B.Ed, Principal & Educational Administrator",
    messageSnippet: "Building a school is one thing and ensuring success to every child who passes through the portals of Dayanand Arya Vidya Public School is another thing. The later has to be a team effort between the students, teachers and parents.",
    image: "/placeholder.png"
  },
  {
    id: "chairman",
    name: "Shri Rajeshwar Arya",
    role: "Chairman",
    qualification: "M.Tech (IIT Kharagpur), Educationist & Philanthropist",
    messageSnippet: "Our commitment remains steadfast: providing modern world-class infrastructure rooted deep in Vedic values and moral integrity.",
    image: "/placeholder.png"
  },
  {
    id: "vice-principal",
    name: "Prof. Arvind Kumar Sharma",
    role: "Vice Principal & Academic Head",
    qualification: "M.A. English, B.Ed, 22+ Years Administrative Experience",
    messageSnippet: "We foster an atmosphere of curiosity and continuous learning, ensuring every student discovers their unique strengths.",
    image: "/placeholder.png"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { year: "1999", title: "Foundation Established", description: "School established with 150 students and 12 dedicated faculty members under Arya Vidya Trust." },
  { year: "2005", title: "CBSE Affiliation", description: "Received official CBSE Senior Secondary affiliation with 100% pass rates in inaugural board exams." },
  { year: "2012", title: "Campus Expansion", description: "Inaugurated 10-acre campus with Olympic sports complex, 1200-seat auditorium, and digital labs." },
  { year: "2019", title: "Smart Classroom Integration", description: "Transformed all 70 classrooms into interactive digital smart rooms with high-speed optic fiber connectivity." },
  { year: "2024", title: "AI & Innovation Wing", description: "Launched state-level AI Research Lab & STEM innovation hub in collaboration with leading technical institutes." },
  { year: "2026", title: "Silver Jubilee Celebration", description: "Celebrating 27+ years of academic distinction, holistic character building, and alumni success across 30+ countries." }
];

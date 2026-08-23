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
    title: "Pre-Primary Wing",
    grades: "Nursery – UKG",
    ageGroup: "3 - 5 Years",
    description: "Play-based foundation focusing on sensory, social, and creative early learning.",
    features: ["Montessori & Play-Way Method", "Phonetics & Early Numeracy", "Kinesthetic Activity Rooms"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    iconName: "Baby"
  },
  {
    id: "primary",
    title: "Primary Wing",
    grades: "Class I – V",
    ageGroup: "6 - 10 Years",
    description: "Building strong fundamentals in literacy, numeracy, critical thinking, and inquiry.",
    features: ["Experiential Learning Modules", "Language Proficiency Labs", "Robotics & Basic Coding"],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    iconName: "BookOpen"
  },
  {
    id: "middle",
    title: "Middle Wing",
    grades: "Class VI – VIII",
    ageGroup: "11 - 13 Years",
    description: "Fostering analytical skills, scientific inquiry, and holistic personality development.",
    features: ["Integrated Science Labs", "Olympiad & Competitive Prep", "Clubs & House System"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    iconName: "Brain"
  },
  {
    id: "secondary",
    title: "Secondary Wing",
    grades: "Class IX – X",
    ageGroup: "14 - 15 Years",
    description: "Focused CBSE board preparation, skill courses, and academic mentorship.",
    features: ["CBSE Board Exam Focus", "AI & IT Skill Courses", "Personalized Counseling"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    iconName: "GraduationCap"
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary",
    grades: "Class XI – XII",
    ageGroup: "16 - 17 Years",
    description: "Specialized Science, Commerce, and Humanities streams with entrance prep.",
    features: ["Science (PCM/PCB), Commerce, Arts", "JEE & NEET Entrance Foundation", "Career & College Guidance"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
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

export interface WhyChooseUsItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface AdmissionStepItem {
  step: string;
  title: string;
  desc: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  parentName: string;
  role: string;
  rating: number;
  avatar: string;
}

export interface SalientFeatureItem {
  title: string;
  desc: string;
  iconName: string;
  color: string;
}

export interface VisionPillarItem {
  title: string;
  desc: string;
  iconName: string;
  color: string;
}

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "academic",
    iconName: "Award",
    title: "Academic Excellence",
    description: "Consistently delivering 100% CBSE board results with state & national rank holders every single academic year."
  },
  {
    id: "smart-classrooms",
    iconName: "Laptop",
    title: "Smart Classrooms",
    description: "70+ digitally enabled interactive smart rooms with fiber internet, 3D visual modules, and AI learning aids."
  },
  {
    id: "sports",
    iconName: "Trophy",
    title: "Sports Infrastructure",
    description: "5-acre multi-sport complex, synthetic basketball courts, turf football ground, and national-certified athletic coaches."
  },
  {
    id: "faculty",
    iconName: "Users",
    title: "Experienced Faculty",
    description: "180+ highly qualified educators with over 15+ years average teaching mastery, dedicated to student mentorship."
  },
  {
    id: "safety",
    iconName: "ShieldCheck",
    title: "Safe & Secure Campus",
    description: "24x7 CCTV coverage, bio-metric access control, GPS bus fleet tracking, and trained security personnel."
  },
  {
    id: "holistic",
    iconName: "HeartHandshake",
    title: "Holistic Development",
    description: "30+ active student clubs in robotics, public speaking, music, fine arts, Vedic ethics, and community leadership."
  }
];

export const ADMISSION_STEPS_DATA: AdmissionStepItem[] = [
  {
    step: "01",
    title: "Enquiry & Campus Tour",
    desc: "Submit an online enquiry or visit our admissions office for a guided campus walkthrough and counselor interaction."
  },
  {
    step: "02",
    title: "Registration Form",
    desc: "Fill out the admission registration form online or offline with basic academic records and birth credentials."
  },
  {
    step: "03",
    title: "Interaction / Test",
    desc: "Informal interaction for Pre-Primary, or a baseline aptitude evaluation for Grades 1 to 11."
  },
  {
    step: "04",
    title: "Confirmation & Welcome",
    desc: "Receive admission offering letter, complete document verification, fee submission, and uniform kit allotment."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    quote: "Dayanand Arya Vidya Public School has transformed my daughter's confidence. The balance between rigorous academic coaching and traditional values is unmatched in Ranchi.",
    parentName: "Dr. Vikramaditya Sharma",
    role: "Parent of Ananya (Class 10 Board Topper)",
    rating: 5,
    avatar: "/placeholder.png"
  },
  {
    id: 2,
    quote: "The teachers are dedicated and caring. The school environment encourages students to achieve their best in academics, sports, and co-curricular activities.",
    parentName: "Mrs. Neha Kumari",
    role: "Parent of Aarav (Class 6)",
    rating: 5,
    avatar: "/placeholder.png"
  },
  {
    id: 3,
    quote: "The STEM and AI lab facilities allowed me to build my first robotics project in Grade 9. The guidance from my teachers helped me score AIR 342 in JEE Advanced!",
    parentName: "Rohan Verma",
    role: "Alumni (IIT Bombay CS Batch 2025)",
    rating: 5,
    avatar: "/placeholder.png"
  },
  {
    id: 4,
    quote: "The overall discipline and moral environment is outstanding. Teachers focus on developing not only on studies but also on building an all-round personality in every child.",
    parentName: "Dr. Ananya Sinha",
    role: "Parent of Rohan (Class 8)",
    rating: 5,
    avatar: "/placeholder.png"
  },
  {
    id: 5,
    quote: "As a working parent, the GPS-tracked bus facility and real-time mobile app updates give me complete peace of mind while my son is at school.",
    parentName: "Sunita Roy",
    role: "Parent of Priyansh (Grade 4)",
    rating: 5,
    avatar: "/placeholder.png"
  }
];

export const SALIENT_FEATURES_DATA: SalientFeatureItem[] = [
  {
    title: "Child-Oriented Methodology",
    desc: "Imparting child-oriented education with innovative and interactive methodology.",
    iconName: "BrainCircuit",
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Congenial Atmosphere",
    desc: "Creating healthy and congenial atmosphere to generate love for knowledge in the child.",
    iconName: "Sparkles",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Comprehensive Syllabus & CCE",
    desc: "Implementation of comprehensive and composite syllabus with continuous evaluation system.",
    iconName: "BookOpen",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Highest Order Discipline",
    desc: "Discipline of highest order in every sphere of activities.",
    iconName: "ShieldCheck",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Noble Moral & Aesthetic Values",
    desc: "Inculcating noble, moral and aesthetic values into the character of the children for shaping them up as ideal citizens.",
    iconName: "HeartHandshake",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Continuous Faculty Training",
    desc: "Periodic orientation programs and subject workshops for educators.",
    iconName: "Users",
    color: "bg-rose-100 text-rose-600"
  }
];

export interface EligibilityItem {
  grade: string;
  minAge: string;
  cutoff: string;
  criteria: string;
}

export const ELIGIBILITY_DATA: EligibilityItem[] = [
  { grade: "Nursery", minAge: "3+ Years", cutoff: "Born on or before 31st March 2023", criteria: "Informal Parent-Child Interaction" },
  { grade: "LKG & UKG", minAge: "4+ to 5+ Years", cutoff: "Born on or before 31st March 2022", criteria: "Sensory & Verbal Assessment" },
  { grade: "Grade 1 - 5", minAge: "6+ to 10+ Years", cutoff: "Previous Class Pass Marksheet", criteria: "Baseline Aptitude Test (Eng & Math)" },
  { grade: "Grade 6 - 9", minAge: "11+ to 14+ Years", cutoff: "Grade 5/8 Passed from Recognized School", criteria: "Written Test (Eng, Math, Science)" },
  { grade: "Grade 11 (Sci/Comm/Arts)", minAge: "15+ Years", cutoff: "CBSE Class 10 Board Percentage Criteria", criteria: "Class 10 Board Marks + Aptitude Cutoff" },
];

export const REQUIRED_DOCUMENTS_DATA: string[] = [
  "Attested copy of Child's Birth Certificate issued by Municipal Corporation",
  "Original Transfer Certificate (TC) countersigned by Education Inspector (Grade 2 upwards)",
  "Report Card / Marksheet of previous class passed",
  "Aadhaar Card copy of Student and Parents (Mother & Father)",
  "4 recent passport-size color photographs of Child and 2 of Parents",
  "Blood Group & Immunization Medical Certificate signed by Registered Medical Practitioner",
  "Caste / Category Certificate (if applying under SC/ST/OBC category)"
];
export interface VisionPillarItem {
  title: string;
  desc: string;
  iconName: string;
  color: string;
}

export const VISION_PILLARS_DATA: VisionPillarItem[] = [
  {
    title: "Modern Scientific Pedagogy",
    desc: "Combining interactive teaching methods, critical problem-solving, and continuous evaluation for academic success.",
    iconName: "Compass",
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Timeless Vedic Values",
    desc: "Instilling moral integrity, discipline (Anushasan), truthfulness (Satya), and service (Sewa) in every learner.",
    iconName: "ShieldCheck",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "State-of-the-Art STEM",
    desc: "Equipping students with modern computer labs, smart classrooms, and experimental science facilities.",
    iconName: "GraduationCap",
    color: "bg-emerald-100 text-emerald-600"
  }
];

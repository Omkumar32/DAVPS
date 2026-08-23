"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FACULTY_MEMBERS, FacultyMember } from "@/data/facultyData";
import { NEWS_EVENTS_DATA, NewsItem, GALLERY_DATA, GalleryItem } from "@/data/schoolData";

export interface NoticeItem {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD format
  category: string; // e.g., Academic, Admissions, Events, Celebration, CBSE Board, Exams, Sports, Holiday
  description?: string;
  pdfUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  studentName: string;
  category: string;
  achievement: string;
  scoreOrMedal: string;
  year: string;
  image: string;
  quote?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  grades: string;
  ageGroup: string;
  description: string;
  features: string[];
  image: string;
  iconName?: string;
}

export interface SiteSettings {
  schoolLogo: string;
  heroImage: string;
  heroTitle: string;
  heroSubhead: string;
  tickerText: string;
  affiliationNo: string;
  helplinePhone: string;
  admissionStatus: string;
  // Section Headings
  programsBadge: string;
  programsTitle: string;
  programsSubtitle: string;
  // Director's Message fields
  directorHeroBadge: string;
  directorHeroTitle: string;
  directorHeroSubtitle: string;
  directorHeroImage: string;
  directorName: string;
  directorDesignation: string;
  directorQualification: string;
  directorImage: string;
  directorHeading: string;
  directorMessage1: string;
  directorMessage2: string;
  directorMessage3: string;
  directorExperience: string;
  directorLeadershipDesc: string;
  directorLocation: string;
  // About Page fields
  aboutHeroBadge: string;
  aboutHeroTitle: string;
  aboutHeroSubtitle: string;
  aboutHeroImage: string;
  aboutSectionBadge: string;
  aboutSectionTitle: string;
  aboutSectionSubtitle: string;
  aboutHeading: string;
  aboutParagraph1: string;
  aboutQuote: string;
  aboutMainImage: string;
  aboutImagesJson: string;
  visionTitle: string;
  visionDescription: string;
  missionTitle: string;
  missionDescription: string;
  // School Difference & Salient Features fields
  differenceTitle: string;
  differenceSubtitle: string;
  differenceParagraph1: string;
  differenceParagraph2: string;
  differenceParagraph3: string;
  differenceCardHeading: string;
  differenceCardText: string;
  differenceCardFooter: string;
  salientFeaturesTitle: string;
  salientFeaturesSubtitle: string;
  salientFeaturesJson: string;
  // General Info Page fields
  genInfoHeroBadge: string;
  genInfoHeroTitle: string;
  genInfoHeroSubtitle: string;
  genInfoHeroImage: string;
  genInfoEvalTitle: string;
  genInfoEvalSubtitle: string;
  genInfoEvalCard1Heading: string;
  genInfoEvalCard1Text1: string;
  genInfoEvalCard1Text2: string;
  genInfoEvalCard1Highlight: string;
  genInfoEvalCard2Heading: string;
  genInfoEvalCard2Sub: string;
  genInfoEvalCard2Text: string;
  genInfoEvalCard2Rule1: string;
  genInfoEvalCard2Rule2: string;
  genInfoPtmTitle: string;
  genInfoPtmSubtitle: string;
  genInfoPtmCard1Title: string;
  genInfoPtmCard1Desc: string;
  genInfoPtmCard1Badge: string;
  genInfoPtmCard2Title: string;
  genInfoPtmCard2Desc: string;
  genInfoPtmCard2Badge: string;
  genInfoPtmCard3Title: string;
  genInfoPtmCard3Desc: string;
  genInfoPtmCard3Badge: string;
  genInfoPtmCard4Title: string;
  genInfoPtmCard4Desc: string;
  genInfoPtmCard4Badge: string;
  genInfoTransTitle: string;
  genInfoTransSubtitle: string;
  genInfoTransHeading: string;
  genInfoTransDesc: string;
  genInfoTransImage: string;
  genInfoTransRule1: string;
  genInfoTransRule2: string;
  genInfoTransRule3: string;
  genInfoTransRule4: string;
  genInfoTransFooter: string;
  genInfoFeeTitle: string;
  genInfoFeeSubtitle: string;
  genInfoFeeDesc: string;
  genInfoFeeLate1: string;
  genInfoFeeLate2: string;
  genInfoWithdrawTitle: string;
  genInfoWithdrawSubtitle: string;
  genInfoWithdrawText1: string;
  genInfoWithdrawText2: string;
  genInfoWithdrawHighlight: string;
  genInfoPtaTitle: string;
  genInfoPtaSubtitle: string;
  genInfoPtaCard1Title: string;
  genInfoPtaCard1Desc: string;
  genInfoPtaCard2Title: string;
  genInfoPtaCard2Desc: string;
  genInfoPtaCard3Title: string;
  genInfoPtaCard3Desc: string;
  genInfoPtaCard4Title: string;
  genInfoPtaCard4Desc: string;
  genInfoPtaBanner: string;
  genInfoPtaPhone1: string;
  genInfoPtaPhone2: string;
  // Principal's Message Page fields
  principalHeroBadge: string;
  principalHeroTitle: string;
  principalHeroSubtitle: string;
  principalHeroImage: string;
  principalPhoto: string;
  principalName: string;
  principalDesignation: string;
  principalLeadershipTitle: string;
  principalLeadershipDesc: string;
  principalWelcomeHeading: string;
  principalGreeting: string;
  principalParagraph1: string;
  principalParagraph2: string;
  principalParagraph3: string;
  principalQuote: string;
  principalLocation: string;
  // Faculty Page fields
  facultyHeroBadge: string;
  facultyHeroTitle: string;
  facultyHeroSubtitle: string;
  facultyHeroImage: string;
  facultyStat1Value: string;
  facultyStat1Label: string;
  facultyStat2Value: string;
  facultyStat2Label: string;
  facultyStat3Value: string;
  facultyStat3Label: string;
  facultyStat4Value: string;
  facultyStat4Label: string;
}

const DEFAULT_SETTINGS: SiteSettings = {
  schoolLogo: "",
  heroImage: "/placeholder.png",
  heroTitle: "DAYANAND ARYA VIDYA PUBLIC SCHOOL",
  heroSubhead: "AFFILIATED TO CBSE NEW DELHI, AFF. NO. 3430396, SCHOOL NO. - 66599\nKANDRI MORE, MANDAR, RANCHI, JHARKHAND-835214",
  tickerText: "Admissions Open 2026-27 (as per Govt. norms) for Nursery to Grade IX & XI • CBSE Affiliation No: 3430396 | School Code: 66599 • Kandri More, Mandar, Ranchi, Jharkhand-835214 • Helpline: +91 94311 02847",
  affiliationNo: "3430396",
  helplinePhone: "+91 94311 02847",
  admissionStatus: "Open 2026-27",
  programsBadge: "Educational Journey",
  programsTitle: "Academic Programs Tailored for Growth",
  programsSubtitle: "From early childhood discovery to senior secondary board mastery, our curriculum empowers learners at every developmental milestone.",
  directorHeroBadge: "Dayanand Arya Vidya Public School",
  directorHeroTitle: "Director's Message",
  directorHeroSubtitle: "From the Desk of Director Er. Alok Nath Verma — Dayanand Arya Vidya Public School",
  directorHeroImage: "",
  directorName: "Er. Alok Nath Verma",
  directorDesignation: "Director & Managing Trustee",
  directorQualification: "M.Tech (IIT Kanpur) | Senior Educationist",
  directorImage: "/placeholder.png",
  directorHeading: "Empowering Young Minds for a Brighter Tomorrow",
  directorMessage1: "Welcome to Dayanand Arya Vidya Public School. For over two decades, our institution has been committed to fostering educational excellence, moral integrity, and holistic development in every child who walks through our doors.",
  directorMessage2: "We believe that true education extends beyond textbooks. By combining modern scientific pedagogy, state-of-the-art STEM infrastructure, and timeless Vedic values, we inspire our students to become creative thinkers, compassionate citizens, and lifelong learners.",
  directorMessage3: "Our dedicated faculty and world-class campus facilities provide a safe, nurturing environment where every child's potential is recognized, nurtured, and elevated to international standards.",
  directorExperience: "25+ Years of Educational Leadership & Vision",
  directorLeadershipDesc: "Steering Dayanand Arya Vidya Public School with a vision of intellectual rigor, technological excellence, and deep-rooted ethical values.",
  directorLocation: "Mandar, Ranchi",
  // About Page defaults
  aboutHeroBadge: "Dayanand Arya Vidya Public School",
  aboutHeroTitle: "About Our School",
  aboutHeroSubtitle: "The Dayanand Arya Vidya Public School — Universal Literacy, High Quality English Medium Education & All-Round Character Building.",
  aboutHeroImage: "",
  aboutSectionBadge: "Institutional Vision",
  aboutSectionTitle: "About Our School",
  aboutSectionSubtitle: "Fostering academic excellence, moral integrity, and lifelong learning.",
  aboutHeading: "High-Quality English Medium Education",
  aboutParagraph1: "Universal literacy and academic excellence are at the core of our institution. We are dedicated to providing high-standard English medium education that inspires critical thinking, character building, and responsible citizenship in every child.",
  aboutQuote: "We nurture self-confidence in our students, empowering them to pursue rewarding careers and become proud assets to their families and the nation.",
  aboutMainImage: "/placeholder.png",
  aboutImagesJson: "",
  visionTitle: "Empowering Future Leaders",
  visionDescription: "To evolve as a center of educational excellence that combines modern scientific pedagogy, state-of-the-art STEM infrastructure, and timeless Vedic values—nurturing creative thinkers, compassionate citizens, and lifelong achievers.",
  missionTitle: "Nurturing Excellence & Values",
  missionDescription: "To provide a safe, vibrant, and inclusive learning environment that fosters intellectual curiosity, critical thinking, moral integrity, and all-round personality development in every child.",
  // School Difference & Salient Features defaults
  differenceTitle: "The School with a Difference",
  differenceSubtitle: "Activity blended education awakening creative and leadership skills dormant in every child.",
  differenceParagraph1: "The Dayanand Arya Vidya Public School's ideology believes in activity blended education. Numerous activities going at per with academic curriculum in the Dayanand Arya Vidya Public School's system are to strengthen the edifice of career of the students and bring them all round development in the true sence of the term.",
  differenceParagraph2: "Apart from this, the system gives wide recognition to various other aspects of knowledge found in those who are not even sound in academic curriculum. No branch of knowledge is neglected.",
  differenceParagraph3: "The perceptive teaching imparted in School awakens the creative and leadership skills dormant in every child. Education is customize to meet the aspirational demands of youngsters.",
  differenceCardHeading: "Enlightening Young Minds",
  differenceCardText: "The School embarks on the mission to enlighten young minds with deliberate and systematic education, inculcate into them the spirit of humane as well as social values and spiritual development in a harmonious manner, so that they can confidently face life’s hardships, succeed in the struggle for existence and prove themselves the assets to humanity.",
  differenceCardFooter: "★ Such contribution of the Dayanand Arya Vidya Public School to the nation makes them the School with Difference.",
  salientFeaturesTitle: "Salient Features",
  salientFeaturesSubtitle: "Guiding pillars shaping ideal citizens, discipline of highest order, and continuous academic evaluation.",
  salientFeaturesJson: "",
  // General Info Page defaults
  genInfoHeroBadge: "Dayanand Arya Vidya Public School",
  genInfoHeroTitle: "General Information",
  genInfoHeroSubtitle: "Official Academic Regulations, Fee Payment Schedule, Examination Norms, Student Care & Parent Guidelines.",
  genInfoHeroImage: "",
  genInfoEvalTitle: "Evaluation & Examination System",
  genInfoEvalSubtitle: "Continuous assessment policy, achievement grades, effort grading, and examination integrity rules.",
  genInfoEvalCard1Heading: "Continuous Evaluation Policy",
  genInfoEvalCard1Text1: "The school follows a system of continuous evaluation and regularly provides parents with an assessment of their child's academic progress, based on a comprehensive system of tests, examinations, grades, reports, and parent-teacher meetings.",
  genInfoEvalCard1Text2: "The school follows a policy of awarding grades rather than marks for class assessments. Tests, Quizzes, and other class assessments will receive achievement grades while effort grades may be given for homework, class work, and projects.",
  genInfoEvalCard1Highlight: "✓ Continuous evaluation ensures stress-free, holistic academic growth without high-pressure competitive fatigue.",
  genInfoEvalCard2Heading: "Examination Rules",
  genInfoEvalCard2Sub: "Two Main Sets Per Academic Year",
  genInfoEvalCard2Text: "The school holds two sets of examinations in an academic year. The combination of grades and reports serves to assess the progress of the student.",
  genInfoEvalCard2Rule1: "Integrity Rule: Students found cheating in any examination will be given zero marks for that paper.",
  genInfoEvalCard2Rule2: "Absence Norms: Absent students will not be re-examined except in cases of serious, verified medical conditions. Unexpected absence excludes students from prizes and awards.",
  genInfoPtmTitle: "PTM, Promotions & Tuitions Policy",
  genInfoPtmSubtitle: "Monthly parent-teacher interaction, promotion criteria, in-house extra classes, and strict tuition guidelines.",
  genInfoPtmCard1Title: "Parent-Teachers Meetings",
  genInfoPtmCard1Desc: "There will be monthly parent-teacher meetings. All parents are requested to be present for regular updates. Parents can also fix up prior appointments with teachers to discuss their child's progress.",
  genInfoPtmCard1Badge: "★ Monthly Regular Attendance Required",
  genInfoPtmCard2Title: "Promotions Criteria",
  genInfoPtmCard2Desc: "Promotions are decided based on the student's performance throughout the year. A student who fails to secure promotion for the second time in his/her school career may be asked to leave the school.",
  genInfoPtmCard2Badge: "★ Year-Round Performance Metric",
  genInfoPtmCard3Title: "In-House Extra Classes",
  genInfoPtmCard3Desc: "Extra classes are scheduled on a regular basis for students who require additional guidance. Parents will be contacted directly when it is determined that a student would benefit from extra classes.",
  genInfoPtmCard3Badge: "★ Free Remedial Guidance After School",
  genInfoPtmCard4Title: "Private Tuitions Policy",
  genInfoPtmCard4Desc: "Students are strongly discouraged from taking private tuitions. Parents needing extra help for their children should discuss needs with respective class teachers so after-school extra classes can be arranged.",
  genInfoPtmCard4Badge: "★ Private Tuitions Discouraged",
  genInfoTransTitle: "School Transport Services",
  genInfoTransSubtitle: "Safe GPS bus transport fleet ensuring comfortable pick-up and drop-off for students.",
  genInfoTransHeading: "School Transport Fleet",
  genInfoTransDesc: "Dayanand Arya Vidya Public School, provides buses for pick-up and drop-off children. This ensures that children reach the school comfortably.",
  genInfoTransImage: "/placeholder.png",
  genInfoTransRule1: "Bus Stops & Routes: Mandar, Ranchi & Environs",
  genInfoTransRule2: "Transport Rules & Safety Policy: Speed Limiters & CCTV",
  genInfoTransRule3: "Female Bus Attendants & Live GPS Monitoring",
  genInfoTransRule4: "Conduct & Discipline on Board: Orderly Seating",
  genInfoTransFooter: "★ Equipped with speed governors, CCTV cameras, female bus attendants, and live route monitoring for total peace of mind.",
  genInfoFeeTitle: "Fee Payment Schedule & Late Fee Policy",
  genInfoFeeSubtitle: "Quarterly fee payment structure, installment due dates, and late payment penalty terms.",
  genInfoFeeDesc: "School fee payments have to be made on a quarterly basis. If desired, multiple instalments can be paid in advance.",
  genInfoFeeLate1: "Rs. 100",
  genInfoFeeLate2: "Rs. 100 + Rs. 50 / day",
  genInfoWithdrawTitle: "Withdrawal Policy & School Leaving Certificate",
  genInfoWithdrawSubtitle: "Formal application guidelines and fee clearance rules for student withdrawal.",
  genInfoWithdrawText1: "Applications for withdrawal of students from the school should be submitted in writing on the school's prescribed form, addressed to the Head of the School at the earliest opportunity.",
  genInfoWithdrawText2: "If a student leaves school before the end of a term, fees will be payable for the full term.",
  genInfoWithdrawHighlight: "★ The School Leaving Certificate (TC) will be issued only after all dues are cleared and all library books are returned.",
  genInfoPtaTitle: "Communication Between School & Parents (PTA)",
  genInfoPtaSubtitle: "School diary protocols, circular acknowledgements, address updates, and PTA liaison helpline numbers.",
  genInfoPtaCard1Title: "Contact Info Update",
  genInfoPtaCard1Desc: "Parents are expected to communicate to the school any change in address and contact details promptly.",
  genInfoPtaCard2Title: "Appointments & Letters",
  genInfoPtaCard2Desc: "Parents wishing to meet faculty and administrative staff should seek a prior appointment via the School Diary or by telephoning the school. All letters addressed to the school must mention the student's full name, class, and division.",
  genInfoPtaCard3Title: "Circular Acknowledgement",
  genInfoPtaCard3Desc: "Parents should acknowledge receipt of each circular issued by the school by signing the respective section in the diary. Wherever a response is required, it must be completed and returned via the child by the required deadline.",
  genInfoPtaCard4Title: "School Diary Remarks",
  genInfoPtaCard4Desc: "Parents are requested to read notes written in the School Diary by teachers and write their own remarks for the information of teachers.",
  genInfoPtaBanner: "Communication between Dayanand Arya Vidya and our parents will be streamlined and liaised through our Parent Teacher Association (PTA).",
  genInfoPtaPhone1: "94313-83057",
  genInfoPtaPhone2: "87576-74340",
  // Principal Message defaults
  principalHeroBadge: "Dayanand Arya Vidya Public School",
  principalHeroTitle: "Principal's Message",
  principalHeroSubtitle: "From the Desk of Principal Aarti Singh — Dayanand Arya Vidya Public School",
  principalHeroImage: "",
  principalPhoto: "/placeholder.png",
  principalName: "Aarti Singh",
  principalDesignation: "Principal, Dayanand Arya Vidya Public School",
  principalLeadershipTitle: "Educational Leadership",
  principalLeadershipDesc: "Dedicated to building future leaders through modern world-class facilities, character development, and active parent-teacher collaboration.",
  principalWelcomeHeading: "Welcome to Dayanand Arya Vidya Public School",
  principalGreeting: "Dear parents,",
  principalParagraph1: "I am delighted to be associated with you for your child's education. While I walked the dream of creating Dayanand Arya Vidya Public School. I focused on creating the best of facilities which I always wanted for myself as a school going kid. Building a school is one thing and ensuring success to every child who passes through the portals of Dayanand Arya Vidya Public School is another thing. The later has to be a team effort between the students, teachers and parents.",
  principalParagraph2: "Children do better in school when parents communicate often with teachers and be a part of the school. I invite you to join us in this most joyous journey of building future leaders.",
  principalParagraph3: "Thank you for entrusting your child to our care.",
  principalQuote: "Let's walk hand in hand and meet the aspirations of your child.",
  principalLocation: "Mandar, Ranchi",
  // Faculty Page defaults
  facultyHeroBadge: "Dayanand Arya Vidya Public School",
  facultyHeroTitle: "Faculty & Teaching Staff",
  facultyHeroSubtitle: "Meet the 50+ qualified, passionate educators and mentors of Dayanand Arya Vidya Public School.",
  facultyHeroImage: "",
  facultyStat1Value: "50+",
  facultyStat1Label: "Certified Faculty",
  facultyStat2Value: "100%",
  facultyStat2Label: "CBSE / OASIS Registered",
  facultyStat3Value: "12:1",
  facultyStat3Label: "Student-Teacher Ratio",
  facultyStat4Value: "M.A / M.Sc / B.Ed",
  facultyStat4Label: "Qualified Pedagogy",
};

export const DEFAULT_PROGRAMS: ProgramItem[] = [
  {
    id: "pre-primary",
    title: "Pre-Primary Wing (Nursery - UKG)",
    grades: "Nursery to UKG",
    ageGroup: "3 - 5 Years",
    description: "Play-based, child-centric foundation emphasizing sensory learning, social skills, and creative play in safe, vibrant spaces.",
    features: ["Montessori & Play-Way Method", "Phonetics & Early Numeracy", "Kinesthetic Activity Rooms", "Nutritional Snack Guidance"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    iconName: "Baby"
  },
  {
    id: "primary",
    title: "Primary Wing (Class I - V)",
    grades: "Grade 1 to 5",
    ageGroup: "6 - 10 Years",
    description: "Fostering inquiry, critical thinking, language fluency, and core numeracy along with arts, music, and physical education.",
    features: ["Experiential Learning Modules", "Language Proficiency Labs", "Robotics & Basic Coding", "Environmental Studies Projects"],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    iconName: "BookOpen"
  },
  {
    id: "middle",
    title: "Middle Wing (Class VI - VIII)",
    grades: "Grade 6 to 8",
    ageGroup: "11 - 13 Years",
    description: "Deepening subject conceptualization, scientific temperament, analytical skills, inter-school competitions, and leadership.",
    features: ["Advanced Integrated Science Labs", "Third Language Options (Sanskrit/French)", "Olympiad Coaching", "Club & House System"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    iconName: "Brain"
  },
  {
    id: "secondary",
    title: "Secondary Wing (Class IX - X)",
    grades: "Grade 9 to 10",
    ageGroup: "14 - 15 Years",
    description: "Rigorous CBSE curriculum preparation coupled with career counseling, skill subjects, and intensive academic mentorship.",
    features: ["Board Examination Preparation", "AI & Information Technology Skill Subjects", "Regular Mock Assessments", "Personalized Counseling"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    iconName: "GraduationCap"
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary (Class XI - XII)",
    grades: "Grade 11 to 12",
    ageGroup: "16 - 17 Years",
    description: "Specialized streams in Science, Commerce, and Humanities paired with competitive exam foundation (JEE, NEET, CUET, CLAT).",
    features: ["Science (PCM / PCB)", "Commerce with Financial Markets", "Humanities & Applied Psychology", "Integrated Test Series"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    iconName: "Award"
  }
];

export const DEFAULT_NOTICES: NoticeItem[] = [
  { id: "not-1", date: "2026-08-04", title: "Admissions Open 2026-27 for Nursery to Class XI", category: "Admissions", description: "Official admissions announcement for academic session 2026-27." },
  { id: "not-2", date: "2026-08-04", title: "Independence Day Cultural Practice Schedule", category: "Events", description: "Rehearsal schedules for students participating in cultural activities." },
  { id: "not-3", date: "2026-08-05", title: "Parent Teacher Meeting (PTM) for Grades 9 & 10", category: "Academic", description: "Mandatory interactive PTM session regarding term exams and CBSE board guidelines." },
  { id: "not-4", date: "2026-08-15", title: "Independence Day Flag Hoisting & Science Exhibition 2026", category: "Celebration", description: "Grand Independence Day celebrations followed by inter-house science model competition." },
  { id: "not-5", date: "2026-08-20", title: "CBSE Board Examination Registration Fee Submission Notice", category: "CBSE Board", description: "Important circular regarding CBSE Class 10 & 12 board registration documentation and fees." },
  { id: "not-6", date: "2026-08-30", title: "Mid-Term Examination Date Sheet Released (Classes I to XII)", category: "Exams", description: "Download the complete mid-term examination timetable and syllabus breakdown." },
  { id: "not-7", date: "2026-08-31", title: "Annual Inter-House Sports Competition Trial Registration", category: "Sports", description: "Trial registration open for athletics, football, cricket, basketball, and badminton." },
];

export const DEFAULT_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "CBSE Class XII State Topper",
    studentName: "Aarav Sharma",
    category: "Board Exam",
    achievement: "Secured 99.2% in CBSE Class XII Science Stream with 100 in Mathematics & Physics.",
    scoreOrMedal: "99.2%",
    year: "2025",
    image: "",
    quote: "The teachers at Dayanand Arya Vidya gave me constant guidance and personalized mock test analysis."
  },
  {
    id: "ach-2",
    title: "National Cyber Olympiad Gold Medalist",
    studentName: "Ananya Roy",
    category: "Olympiad",
    achievement: "Rank 1 International Cyber Olympiad across 12,000+ participating schools.",
    scoreOrMedal: "AIR 1",
    year: "2025",
    image: "",
    quote: "Our school's smart computer lab enabled me to practice advanced algorithmic problems daily."
  },
  {
    id: "ach-3",
    title: "JEE Advanced Top 500 Selection",
    studentName: "Rohan Verma",
    category: "Innovation",
    achievement: "Secured All India Rank 342 in JEE Advanced 2025 and qualified for IIT Bombay CS.",
    scoreOrMedal: "AIR 342",
    year: "2025",
    image: "",
    quote: "The integrated coaching modules and weekend problem sessions made all the difference."
  },
  {
    id: "ach-4",
    title: "CBSE National Athletics Championship",
    studentName: "Priya Singh",
    category: "Sports",
    achievement: "Gold Medal in Under-19 Girls 400m Athletics Championship.",
    scoreOrMedal: "Gold Medal",
    year: "2024",
    image: "",
    quote: "Our physical education department gave me world-class training facilities and encouragement."
  }
];

interface SiteSettingsContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => Promise<void>;
  resetSettings: () => void;
  // Notices
  notices: NoticeItem[];
  addNotice: (notice: Omit<NoticeItem, "id">) => Promise<void>;
  updateNotice: (id: string, updated: Partial<NoticeItem>) => void;
  deleteNotice: (id: string) => Promise<void>;
  resetNotices: () => void;
  // Achievements
  achievements: AchievementItem[];
  addAchievement: (item: Omit<AchievementItem, "id">) => Promise<void>;
  updateAchievement: (id: string, updated: Partial<AchievementItem>) => void;
  deleteAchievement: (id: string) => Promise<void>;
  resetAchievements: () => void;
  // Academic Programs
  programs: ProgramItem[];
  addProgram: (item: Omit<ProgramItem, "id">) => Promise<void>;
  updateProgram: (id: string, updated: Partial<ProgramItem>) => void;
  deleteProgram: (id: string) => Promise<void>;
  resetPrograms: () => void;
  // Faculty
  faculty: FacultyMember[];
  addFaculty: (member: Omit<FacultyMember, "sno">) => void;
  updateFaculty: (sno: number, updated: Partial<FacultyMember>) => void;
  deleteFaculty: (sno: number) => void;
  resetFaculty: () => void;
  // News & Events
  news: NewsItem[];
  addNews: (item: Omit<NewsItem, "id">) => void;
  updateNews: (id: string, updated: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  resetNews: () => void;
  // Photo Gallery
  gallery: GalleryItem[];
  addGallery: (item: Omit<GalleryItem, "id">) => void;
  deleteGallery: (id: string) => void;
  resetGallery: () => void;
  isLoading: boolean;
}

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined);

const STORAGE_KEY = "dayanand_school_settings_v5";
const NOTICES_STORAGE_KEY = "dayanand_school_notices_v1";
const ACHIEVEMENTS_STORAGE_KEY = "dayanand_school_achievements_v1";
const PROGRAMS_STORAGE_KEY = "dayanand_school_programs_v1";
const FACULTY_STORAGE_KEY = "dayanand_school_faculty_v1";
const NEWS_STORAGE_KEY = "dayanand_school_news_v1";
const GALLERY_STORAGE_KEY = "dayanand_school_gallery_v1";

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [notices, setNotices] = useState<NoticeItem[]>(DEFAULT_NOTICES);
  const [achievements, setAchievements] = useState<AchievementItem[]>(DEFAULT_ACHIEVEMENTS);
  const [programs, setPrograms] = useState<ProgramItem[]>(DEFAULT_PROGRAMS);
  const [faculty, setFaculty] = useState<FacultyMember[]>(FACULTY_MEMBERS);
  const [news, setNews] = useState<NewsItem[]>(NEWS_EVENTS_DATA);
  const [gallery, setGallery] = useState<GalleryItem[]>(GALLERY_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load cached data from localStorage immediately on mount for instantaneous rendering
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(STORAGE_KEY);
      if (savedSettings) setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) });

      const savedNotices = localStorage.getItem(NOTICES_STORAGE_KEY);
      if (savedNotices) setNotices(JSON.parse(savedNotices));

      const savedAchievements = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
      if (savedAchievements) setAchievements(JSON.parse(savedAchievements));

      const savedPrograms = localStorage.getItem(PROGRAMS_STORAGE_KEY);
      if (savedPrograms) setPrograms(JSON.parse(savedPrograms));

      const savedFaculty = localStorage.getItem(FACULTY_STORAGE_KEY);
      if (savedFaculty) setFaculty(JSON.parse(savedFaculty));

      const savedNews = localStorage.getItem(NEWS_STORAGE_KEY);
      if (savedNews) setNews(JSON.parse(savedNews));

      const savedGallery = localStorage.getItem(GALLERY_STORAGE_KEY);
      if (savedGallery) setGallery(JSON.parse(savedGallery));
    } catch (e) {
      console.warn("Could not load cached settings", e);
    }
  }, []);

  // Fetch initial data from DB API routes concurrently in background with fast timeout
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      try {
        const fetchOptions = { signal: controller.signal };
        const [settingsRes, noticesRes, achRes, progRes, facRes, newsRes, galRes] = await Promise.allSettled([
          fetch("/api/settings", fetchOptions).then((r) => r.ok ? r.json() : null),
          fetch("/api/notices", fetchOptions).then((r) => r.ok ? r.json() : null),
          fetch("/api/achievements", fetchOptions).then((r) => r.ok ? r.json() : null),
          fetch("/api/programs", fetchOptions).then((r) => r.ok ? r.json() : null),
          fetch("/api/faculty", fetchOptions).then((r) => r.ok ? r.json() : null),
          fetch("/api/news", fetchOptions).then((r) => r.ok ? r.json() : null),
          fetch("/api/gallery", fetchOptions).then((r) => r.ok ? r.json() : null),
        ]);

        clearTimeout(timeoutId);

        if (!isMounted) return;

        if (settingsRes.status === "fulfilled" && settingsRes.value?.settings) {
          setSettings({ ...DEFAULT_SETTINGS, ...settingsRes.value.settings });
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settingsRes.value.settings));
          } catch (e) {}
        }

        if (noticesRes.status === "fulfilled" && Array.isArray(noticesRes.value?.notices)) {
          setNotices(noticesRes.value.notices);
          try {
            localStorage.setItem(NOTICES_STORAGE_KEY, JSON.stringify(noticesRes.value.notices));
          } catch (e) {}
        }

        if (achRes.status === "fulfilled" && Array.isArray(achRes.value?.achievements)) {
          setAchievements(achRes.value.achievements);
          try {
            localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(achRes.value.achievements));
          } catch (e) {}
        }

        if (progRes.status === "fulfilled" && Array.isArray(progRes.value?.programs)) {
          setPrograms(progRes.value.programs);
          try {
            localStorage.setItem(PROGRAMS_STORAGE_KEY, JSON.stringify(progRes.value.programs));
          } catch (e) {}
        }

        if (facRes.status === "fulfilled" && Array.isArray(facRes.value?.faculty)) {
          const savedFacultyRaw = localStorage.getItem(FACULTY_STORAGE_KEY);
          let mergedFaculty = facRes.value.faculty;
          if (savedFacultyRaw) {
            try {
              const savedFaculty = JSON.parse(savedFacultyRaw);
              mergedFaculty = facRes.value.faculty.map((dbMember: any) => {
                const localMember = savedFaculty.find((l: any) => l.sno === dbMember.sno);
                if (localMember && localMember.image && (localMember.image.startsWith("data:image") || localMember.image.length > 50)) {
                  return { ...dbMember, image: localMember.image };
                }
                return dbMember;
              });
            } catch (e) {}
          }
          setFaculty(mergedFaculty);
          try {
            localStorage.setItem(FACULTY_STORAGE_KEY, JSON.stringify(mergedFaculty));
          } catch (e) {}
        }

        if (newsRes.status === "fulfilled" && Array.isArray(newsRes.value?.news)) {
          setNews(newsRes.value.news);
          try {
            localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(newsRes.value.news));
          } catch (e) {}
        }

        if (galRes.status === "fulfilled" && Array.isArray(galRes.value?.gallery)) {
          setGallery(galRes.value.gallery);
          try {
            localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(galRes.value.gallery));
          } catch (e) {}
        }
      } catch (e) {
        // Fallback silently if network or timeout
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const saveToStorage = (key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("Storage write failed for key:", key, e);
    }
  };

  const updateSettings = async (newSettings: Partial<SiteSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    saveToStorage(STORAGE_KEY, updated);

    try {
      await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: newSettings }),
      });
    } catch (err) {
      console.error("Failed to persist settings to DB:", err);
    }
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  // --- NOTICE OPERATIONS ---
  const addNotice = async (notice: Omit<NoticeItem, "id">) => {
    const tempId = `not-${Date.now()}`;
    const newNotice: NoticeItem = { id: tempId, ...notice };

    setNotices((prev) => {
      const updated = [newNotice, ...prev];
      saveToStorage(NOTICES_STORAGE_KEY, updated);
      return updated;
    });

    try {
      const res = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notice),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.notice) {
          setNotices((prev) => prev.map((n) => (n.id === tempId ? data.notice : n)));
        }
      }
    } catch (err) {}
  };

  const updateNotice = (id: string, updatedFields: Partial<NoticeItem>) => {
    setNotices((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
      saveToStorage(NOTICES_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/notices", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteNotice = async (id: string) => {
    setNotices((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToStorage(NOTICES_STORAGE_KEY, updated);
      return updated;
    });

    try {
      await fetch(`/api/notices?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch (err) {}
  };

  const resetNotices = () => {
    setNotices(DEFAULT_NOTICES);
    saveToStorage(NOTICES_STORAGE_KEY, DEFAULT_NOTICES);
  };

  // --- ACHIEVEMENT OPERATIONS ---
  const addAchievement = async (item: Omit<AchievementItem, "id">) => {
    const tempId = `ach-${Date.now()}`;
    const newItem: AchievementItem = { id: tempId, ...item };

    setAchievements((prev) => {
      const updated = [newItem, ...prev];
      saveToStorage(ACHIEVEMENTS_STORAGE_KEY, updated);
      return updated;
    });

    try {
      const res = await fetch("/api/achievements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.achievement) {
          setAchievements((prev) => prev.map((a) => (a.id === tempId ? data.achievement : a)));
        }
      }
    } catch (err) {}
  };

  const updateAchievement = (id: string, updatedFields: Partial<AchievementItem>) => {
    setAchievements((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
      saveToStorage(ACHIEVEMENTS_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/achievements", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteAchievement = async (id: string) => {
    setAchievements((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToStorage(ACHIEVEMENTS_STORAGE_KEY, updated);
      return updated;
    });

    try {
      await fetch(`/api/achievements?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch (err) {}
  };

  const resetAchievements = () => {
    setAchievements(DEFAULT_ACHIEVEMENTS);
    saveToStorage(ACHIEVEMENTS_STORAGE_KEY, DEFAULT_ACHIEVEMENTS);
  };

  // --- PROGRAM OPERATIONS ---
  const addProgram = async (item: Omit<ProgramItem, "id">) => {
    const tempId = `prog-${Date.now()}`;
    const newItem: ProgramItem = { id: tempId, ...item };

    setPrograms((prev) => {
      const updated = [...prev, newItem];
      saveToStorage(PROGRAMS_STORAGE_KEY, updated);
      return updated;
    });

    try {
      const res = await fetch("/api/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.program) {
          setPrograms((prev) => prev.map((p) => (p.id === tempId ? data.program : p)));
        }
      }
    } catch (err) {}
  };

  const updateProgram = (id: string, updatedFields: Partial<ProgramItem>) => {
    setPrograms((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
      saveToStorage(PROGRAMS_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/programs", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteProgram = async (id: string) => {
    setPrograms((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToStorage(PROGRAMS_STORAGE_KEY, updated);
      return updated;
    });

    try {
      await fetch(`/api/programs?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch (err) {}
  };

  const resetPrograms = () => {
    setPrograms(DEFAULT_PROGRAMS);
    saveToStorage(PROGRAMS_STORAGE_KEY, DEFAULT_PROGRAMS);
  };

  // --- FACULTY OPERATIONS ---
  const addFaculty = (member: Omit<FacultyMember, "sno">) => {
    setFaculty((prev) => {
      const maxSno = prev.length > 0 ? Math.max(...prev.map((f) => f.sno)) : 0;
      const newMember: FacultyMember = {
        ...member,
        sno: maxSno + 1,
        oasisId: member.oasisId || `DAV-${maxSno + 1}`,
        subjectTaught: member.subjectTaught || member.designation,
        gender: member.gender || "M/F",
      };
      const updated = [...prev, newMember];
      saveToStorage(FACULTY_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/faculty", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member),
    }).catch(() => {});
  };

  const updateFaculty = (sno: number, updatedFields: Partial<FacultyMember>) => {
    const targetSno = Number(sno);
    setFaculty((prev) => {
      const updated = prev.map((f) => (Number(f.sno) === targetSno ? { ...f, ...updatedFields } : f));
      saveToStorage(FACULTY_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/faculty", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sno: targetSno, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteFaculty = (sno: number) => {
    const targetSno = Number(sno);
    setFaculty((prev) => {
      const updated = prev.filter((f) => Number(f.sno) !== targetSno);
      saveToStorage(FACULTY_STORAGE_KEY, updated);
      return updated;
    });

    fetch(`/api/faculty?sno=${targetSno}`, { method: "DELETE" }).catch(() => {});
  };

  const resetFaculty = () => {
    setFaculty(FACULTY_MEMBERS);
    saveToStorage(FACULTY_STORAGE_KEY, FACULTY_MEMBERS);
  };

  // --- NEWS OPERATIONS ---
  const addNews = (item: Omit<NewsItem, "id">) => {
    const newItem: NewsItem = {
      ...item,
      id: `news-${Date.now()}`,
      author: item.author || "School Administrator",
      readTime: item.readTime || "3 min read",
    };
    setNews((prev) => {
      const updated = [newItem, ...prev];
      saveToStorage(NEWS_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).catch(() => {});
  };

  const updateNews = (id: string, updatedFields: Partial<NewsItem>) => {
    setNews((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, ...updatedFields } : n));
      saveToStorage(NEWS_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/news", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteNews = (id: string) => {
    setNews((prev) => {
      const updated = prev.filter((n) => n.id !== id);
      saveToStorage(NEWS_STORAGE_KEY, updated);
      return updated;
    });

    fetch(`/api/news?id=${encodeURIComponent(id)}`, { method: "DELETE" }).catch(() => {});
  };

  const resetNews = () => {
    setNews(NEWS_EVENTS_DATA);
    saveToStorage(NEWS_STORAGE_KEY, NEWS_EVENTS_DATA);
  };

  // --- GALLERY OPERATIONS ---
  const addGallery = (item: Omit<GalleryItem, "id">) => {
    const newItem: GalleryItem = {
      ...item,
      id: `g-${Date.now()}`,
      date: item.date || "2026",
    };
    setGallery((prev) => {
      const updated = [newItem, ...prev];
      saveToStorage(GALLERY_STORAGE_KEY, updated);
      return updated;
    });

    fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).catch(() => {});
  };

  const deleteGallery = (id: string) => {
    setGallery((prev) => {
      const updated = prev.filter((g) => g.id !== id);
      saveToStorage(GALLERY_STORAGE_KEY, updated);
      return updated;
    });

    fetch(`/api/gallery?id=${encodeURIComponent(id)}`, { method: "DELETE" }).catch(() => {});
  };

  const resetGallery = () => {
    setGallery(GALLERY_DATA);
    saveToStorage(GALLERY_STORAGE_KEY, GALLERY_DATA);
  };

  return (
    <SiteSettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        resetNotices,
        achievements,
        addAchievement,
        updateAchievement,
        deleteAchievement,
        resetAchievements,
        programs,
        addProgram,
        updateProgram,
        deleteProgram,
        resetPrograms,
        faculty,
        addFaculty,
        updateFaculty,
        deleteFaculty,
        resetFaculty,
        news,
        addNews,
        updateNews,
        deleteNews,
        resetNews,
        gallery,
        addGallery,
        deleteGallery,
        resetGallery,
        isLoading,
      }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error("useSiteSettings must be used within a SiteSettingsProvider");
  }
  return context;
}

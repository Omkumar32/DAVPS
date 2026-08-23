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

export const DEFAULT_PROGRAMS: ProgramItem[] = [];

export const DEFAULT_NOTICES: NoticeItem[] = [];

export const DEFAULT_ACHIEVEMENTS: AchievementItem[] = [];

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

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [notices, setNotices] = useState<NoticeItem[]>(DEFAULT_NOTICES);
  const [achievements, setAchievements] = useState<AchievementItem[]>(DEFAULT_ACHIEVEMENTS);
  const [programs, setPrograms] = useState<ProgramItem[]>(DEFAULT_PROGRAMS);
  const [faculty, setFaculty] = useState<FacultyMember[]>(FACULTY_MEMBERS);
  const [news, setNews] = useState<NewsItem[]>(NEWS_EVENTS_DATA);
  const [gallery, setGallery] = useState<GalleryItem[]>(GALLERY_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch initial data directly from Database API routes
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const [settingsRes, noticesRes, achRes, progRes, facRes, newsRes, galRes] = await Promise.allSettled([
          fetch("/api/settings").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/notices").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/achievements").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/programs").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/faculty").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/news").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/gallery").then((r) => (r.ok ? r.json() : null)),
        ]);

        if (!isMounted) return;

        if (settingsRes.status === "fulfilled" && settingsRes.value?.settings) {
          setSettings({ ...DEFAULT_SETTINGS, ...settingsRes.value.settings });
        }

        if (noticesRes.status === "fulfilled" && Array.isArray(noticesRes.value?.notices)) {
          setNotices(noticesRes.value.notices);
        }

        if (achRes.status === "fulfilled" && Array.isArray(achRes.value?.achievements)) {
          setAchievements(achRes.value.achievements);
        }

        if (progRes.status === "fulfilled" && Array.isArray(progRes.value?.programs)) {
          setPrograms(progRes.value.programs);
        }

        if (facRes.status === "fulfilled" && Array.isArray(facRes.value?.faculty)) {
          setFaculty(facRes.value.faculty);
        }

        if (newsRes.status === "fulfilled" && Array.isArray(newsRes.value?.news)) {
          setNews(newsRes.value.news);
        }

        if (galRes.status === "fulfilled" && Array.isArray(galRes.value?.gallery)) {
          setGallery(galRes.value.gallery);
        }
      } catch (e) {
        console.error("Error loading DB settings:", e);
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

  const updateSettings = async (newSettings: Partial<SiteSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);

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
  };

  // --- NOTICE OPERATIONS ---
  const addNotice = async (notice: Omit<NoticeItem, "id">) => {
    const tempId = `not-${Date.now()}`;
    const newNotice: NoticeItem = { id: tempId, ...notice };

    setNotices((prev) => [newNotice, ...prev]);

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
    setNotices((prev) => prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item)));

    fetch("/api/notices", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteNotice = async (id: string) => {
    setNotices((prev) => prev.filter((item) => item.id !== id));

    try {
      await fetch(`/api/notices?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch (err) {}
  };

  const resetNotices = () => {
    setNotices(DEFAULT_NOTICES);
  };

  // --- ACHIEVEMENT OPERATIONS ---
  const addAchievement = async (item: Omit<AchievementItem, "id">) => {
    const tempId = `ach-${Date.now()}`;
    const newItem: AchievementItem = { id: tempId, ...item };

    setAchievements((prev) => [newItem, ...prev]);

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
    setAchievements((prev) => prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item)));

    fetch("/api/achievements", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteAchievement = async (id: string) => {
    setAchievements((prev) => prev.filter((item) => item.id !== id));

    try {
      await fetch(`/api/achievements?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch (err) {}
  };

  const resetAchievements = () => {
    setAchievements(DEFAULT_ACHIEVEMENTS);
  };

  // --- PROGRAM OPERATIONS ---
  const addProgram = async (item: Omit<ProgramItem, "id">) => {
    const tempId = `prog-${Date.now()}`;
    const newItem: ProgramItem = { id: tempId, ...item };

    setPrograms((prev) => [...prev, newItem]);

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
    setPrograms((prev) => prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item)));

    fetch("/api/programs", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteProgram = async (id: string) => {
    setPrograms((prev) => prev.filter((item) => item.id !== id));

    try {
      await fetch(`/api/programs?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    } catch (err) {}
  };

  const resetPrograms = () => {
    setPrograms(DEFAULT_PROGRAMS);
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
      return [...prev, newMember];
    });

    fetch("/api/faculty", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(member),
    }).catch(() => {});
  };

  const updateFaculty = (sno: number, updatedFields: Partial<FacultyMember>) => {
    const targetSno = Number(sno);
    setFaculty((prev) => prev.map((f) => (Number(f.sno) === targetSno ? { ...f, ...updatedFields } : f)));

    fetch("/api/faculty", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sno: targetSno, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteFaculty = (sno: number) => {
    const targetSno = Number(sno);
    setFaculty((prev) => prev.filter((f) => Number(f.sno) !== targetSno));

    fetch(`/api/faculty?sno=${targetSno}`, { method: "DELETE" }).catch(() => {});
  };

  const resetFaculty = () => {
    setFaculty(FACULTY_MEMBERS);
  };

  // --- NEWS OPERATIONS ---
  const addNews = (item: Omit<NewsItem, "id">) => {
    const newItem: NewsItem = {
      ...item,
      id: `news-${Date.now()}`,
      author: item.author || "School Administrator",
      readTime: item.readTime || "3 min read",
    };
    setNews((prev) => [newItem, ...prev]);

    fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).catch(() => {});
  };

  const updateNews = (id: string, updatedFields: Partial<NewsItem>) => {
    setNews((prev) => prev.map((n) => (n.id === id ? { ...n, ...updatedFields } : n)));

    fetch("/api/news", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedFields }),
    }).catch(() => {});
  };

  const deleteNews = (id: string) => {
    setNews((prev) => prev.filter((n) => n.id !== id));

    fetch(`/api/news?id=${encodeURIComponent(id)}`, { method: "DELETE" }).catch(() => {});
  };

  const resetNews = () => {
    setNews(NEWS_EVENTS_DATA);
  };

  // --- GALLERY OPERATIONS ---
  const addGallery = (item: Omit<GalleryItem, "id">) => {
    const newItem: GalleryItem = {
      ...item,
      id: `g-${Date.now()}`,
      date: item.date || "2026",
    };
    setGallery((prev) => [newItem, ...prev]);

    fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).catch(() => {});
  };

  const deleteGallery = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));

    fetch(`/api/gallery?id=${encodeURIComponent(id)}`, { method: "DELETE" }).catch(() => {});
  };

  const resetGallery = () => {
    setGallery(GALLERY_DATA);
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

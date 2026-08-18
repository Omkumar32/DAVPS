"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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

export interface SiteSettings {
  schoolLogo: string;
  heroImage: string;
  heroTitle: string;
  heroSubhead: string;
  tickerText: string;
  affiliationNo: string;
  helplinePhone: string;
  admissionStatus: string;
  // Director's Message fields
  directorName: string;
  directorDesignation: string;
  directorQualification: string;
  directorImage: string;
  directorHeading: string;
  directorMessage1: string;
  directorMessage2: string;
  directorMessage3: string;
  directorExperience: string;
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
  directorName: "Er. Alok Nath Verma",
  directorDesignation: "Director & Managing Trustee",
  directorQualification: "M.Tech (IIT Kanpur) | Senior Educationist",
  directorImage: "/placeholder.png",
  directorHeading: "Empowering Young Minds for a Brighter Tomorrow",
  directorMessage1: "Welcome to Dayanand Arya Vidya Public School. For over two decades, our institution has been committed to fostering educational excellence, moral integrity, and holistic development in every child who walks through our doors.",
  directorMessage2: "We believe that true education extends beyond textbooks. By combining modern scientific pedagogy, state-of-the-art STEM infrastructure, and timeless Vedic values, we inspire our students to become creative thinkers, compassionate citizens, and lifelong learners.",
  directorMessage3: "Our dedicated faculty and world-class campus facilities provide a safe, nurturing environment where every child's potential is recognized, nurtured, and elevated to international standards.",
  directorExperience: "25+ Years of Educational Leadership & Vision",
};

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
  notices: NoticeItem[];
  addNotice: (notice: Omit<NoticeItem, "id">) => Promise<void>;
  updateNotice: (id: string, updated: Partial<NoticeItem>) => void;
  deleteNotice: (id: string) => Promise<void>;
  resetNotices: () => void;
  achievements: AchievementItem[];
  addAchievement: (item: Omit<AchievementItem, "id">) => Promise<void>;
  updateAchievement: (id: string, updated: Partial<AchievementItem>) => void;
  deleteAchievement: (id: string) => Promise<void>;
  resetAchievements: () => void;
  isLoading: boolean;
}

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined);

const STORAGE_KEY = "dayanand_school_settings_v5";
const NOTICES_STORAGE_KEY = "dayanand_school_notices_v1";
const ACHIEVEMENTS_STORAGE_KEY = "dayanand_school_achievements_v1";

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [notices, setNotices] = useState<NoticeItem[]>(DEFAULT_NOTICES);
  const [achievements, setAchievements] = useState<AchievementItem[]>(DEFAULT_ACHIEVEMENTS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch initial data from DB API routes with local cache fallback
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        // Load settings from DB
        const settingsRes = await fetch("/api/settings");
        if (settingsRes.ok) {
          const data = await settingsRes.json();
          if (data.settings) {
            setSettings({ ...DEFAULT_SETTINGS, ...data.settings });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.settings));
          }
        }

        // Load notices from DB
        const noticesRes = await fetch("/api/notices");
        if (noticesRes.ok) {
          const data = await noticesRes.json();
          if (data.notices && Array.isArray(data.notices)) {
            setNotices(data.notices);
            localStorage.setItem(NOTICES_STORAGE_KEY, JSON.stringify(data.notices));
          }
        }

        // Load achievements from DB
        const achRes = await fetch("/api/achievements");
        if (achRes.ok) {
          const data = await achRes.json();
          if (data.achievements && Array.isArray(data.achievements)) {
            setAchievements(data.achievements);
            localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(data.achievements));
          }
        }
      } catch (e) {
        console.warn("Could not fetch DB data on load, using offline storage/defaults.", e);
        // Fallback to local storage if network or DB offline
        const savedSettings = localStorage.getItem(STORAGE_KEY);
        if (savedSettings) setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(savedSettings) });

        const savedNotices = localStorage.getItem(NOTICES_STORAGE_KEY);
        if (savedNotices) setNotices(JSON.parse(savedNotices));

        const savedAchievements = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
        if (savedAchievements) setAchievements(JSON.parse(savedAchievements));
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const saveNoticesToStorage = (updatedNotices: NoticeItem[]) => {
    try {
      localStorage.setItem(NOTICES_STORAGE_KEY, JSON.stringify(updatedNotices));
    } catch (e) {
      console.warn("Storage write failed for notices", e);
    }
  };

  const saveAchievementsToStorage = (updatedAch: AchievementItem[]) => {
    try {
      localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(updatedAch));
    } catch (e) {
      console.warn("Storage write failed for achievements", e);
    }
  };

  const updateSettings = async (newSettings: Partial<SiteSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {}

    // Persist to PostgreSQL database
    try {
      await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: updated }),
      });
    } catch (err) {
      console.error("Failed to sync settings with DB:", err);
    }
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    updateSettings(DEFAULT_SETTINGS);
  };

  const addNotice = async (notice: Omit<NoticeItem, "id">) => {
    const tempId = `not-${Date.now()}`;
    const newItem: NoticeItem = { id: tempId, ...notice };
    
    // Optimistic UI Update
    setNotices((prev) => {
      const updated = [newItem, ...prev];
      saveNoticesToStorage(updated);
      return updated;
    });

    // Save to Database
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
    } catch (err) {
      console.error("Failed to add notice to DB:", err);
    }
  };

  const updateNotice = (id: string, updatedFields: Partial<NoticeItem>) => {
    setNotices((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
      saveNoticesToStorage(updated);
      return updated;
    });
  };

  const deleteNotice = async (id: string) => {
    // Optimistic UI Update
    setNotices((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveNoticesToStorage(updated);
      return updated;
    });

    // Delete from Database
    try {
      await fetch(`/api/notices?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Failed to delete notice from DB:", err);
    }
  };

  const resetNotices = () => {
    setNotices(DEFAULT_NOTICES);
    saveNoticesToStorage(DEFAULT_NOTICES);
  };

  const addAchievement = async (item: Omit<AchievementItem, "id">) => {
    const tempId = `ach-${Date.now()}`;
    const newItem: AchievementItem = { id: tempId, ...item };

    // Optimistic UI Update
    setAchievements((prev) => {
      const updated = [newItem, ...prev];
      saveAchievementsToStorage(updated);
      return updated;
    });

    // Save to Database
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
    } catch (err) {
      console.error("Failed to save achievement to DB:", err);
    }
  };

  const updateAchievement = (id: string, updatedFields: Partial<AchievementItem>) => {
    setAchievements((prev) => {
      const updated = prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
      saveAchievementsToStorage(updated);
      return updated;
    });
  };

  const deleteAchievement = async (id: string) => {
    // Optimistic UI Update
    setAchievements((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveAchievementsToStorage(updated);
      return updated;
    });

    // Delete from Database
    try {
      await fetch(`/api/achievements?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Failed to delete achievement from DB:", err);
    }
  };

  const resetAchievements = () => {
    setAchievements(DEFAULT_ACHIEVEMENTS);
    saveAchievementsToStorage(DEFAULT_ACHIEVEMENTS);
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

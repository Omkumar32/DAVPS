"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Upload,
  ImageIcon,
  Save,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Type,
  Users,
  Newspaper,
  BookOpen,
  FileText,
  Plus,
  Trash2,
  Edit,
  Search,
  LogOut,
  Sparkles,
  Award,
  Calendar,
  Layers,
  Settings,
  UserCheck,
  Check,
  AlertCircle,
  Trophy,
  MessageSquare
} from "lucide-react";
import { useSiteSettings, NoticeItem, AchievementItem } from "@/context/SiteSettingsContext";
import { GALLERY_DATA, GalleryItem, NEWS_EVENTS_DATA, NewsItem } from "@/data/schoolData";
import { FACULTY_MEMBERS, FacultyMember } from "@/data/facultyData";
import { FacultySchema, NewsSchema, GallerySchema, SiteSettingsSchema, NoticeSchema, AchievementSchema } from "@/lib/adminSchemas";


export default function AdminDashboardPage() {
  const router = useRouter();
  const {
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
    resetAchievements
  } = useSiteSettings();

  // Authentication Protection Check
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "branding" | "faculty" | "news" | "gallery" | "rules" | "notices" | "achievements" | "director">("overview");

  const [directorSaved, setDirectorSaved] = useState(false);

  // Achievements State (CRUD)
  const [achievementSearch, setAchievementSearch] = useState("");
  const [achievementCategoryFilter, setAchievementCategoryFilter] = useState("All");
  const [showAchievementModal, setShowAchievementModal] = useState(false);
  const [editingAchievement, setEditingAchievement] = useState<AchievementItem | null>(null);
  const [achievementForm, setAchievementForm] = useState<{
    studentName: string;
    title: string;
    category: string;
    achievement: string;
    scoreOrMedal: string;
    year: string;
    image: string;
    quote: string;
  }>({
    studentName: "",
    title: "",
    category: "Board Exam",
    achievement: "",
    scoreOrMedal: "",
    year: "2025",
    image: "",
    quote: "",
  });

  // Notice & Calendar State (CRUD)
  const [noticeSearch, setNoticeSearch] = useState("");
  const [noticeCategoryFilter, setNoticeCategoryFilter] = useState("All");
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState<NoticeItem | null>(null);
  const [noticeForm, setNoticeForm] = useState<{
    title: string;
    date: string;
    category: string;
    description: string;
    pdfUrl: string;
  }>({
    title: "",
    date: new Date().toISOString().split("T")[0],
    category: "Academic",
    description: "",
    pdfUrl: "",
  });

  // Site Branding State
  const [schoolLogo, setSchoolLogo] = useState(settings.schoolLogo);
  const [heroImage, setHeroImage] = useState(settings.heroImage);
  const [heroTitle, setHeroTitle] = useState(settings.heroTitle);
  const [heroSubhead, setHeroSubhead] = useState(settings.heroSubhead);
  const [tickerText, setTickerText] = useState(settings.tickerText);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Faculty State (CRUD)
  const [facultyList, setFacultyList] = useState<FacultyMember[]>(FACULTY_MEMBERS);
  const [facultySearch, setFacultySearch] = useState("");
  const [showFacultyModal, setShowFacultyModal] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<FacultyMember | null>(null);
  const [facultyForm, setFacultyForm] = useState<{
    name: string;
    designation: string;
    qualification: string;
    category: "PGT" | "TGT" | "PRT" | "PTI" | "PRINCIPAL";
  }>({
    name: "",
    designation: "",
    qualification: "",
    category: "TGT",
  });

  // News & Announcements State (CRUD)
  const [newsList, setNewsList] = useState<NewsItem[]>(NEWS_EVENTS_DATA);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newsForm, setNewsForm] = useState<{
    title: string;
    date: string;
    category: "Academic" | "Notice" | "Sports" | "Event";
    excerpt: string;
    fullContent: string;
    image: string;
  }>({
    title: "",
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    category: "Notice",
    excerpt: "",
    fullContent: "",
    image: "/placeholder.png",
  });

  // Gallery State (CRUD)
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(GALLERY_DATA);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [galleryForm, setGalleryForm] = useState<{
    title: string;
    category: "Campus" | "Events" | "Sports" | "Academics" | "Celebrations" | "CBSE Events";
    image: string;
    caption: string;
    date: string;
  }>({
    title: "",
    category: "CBSE Events",
    image: "/placeholder.png",
    caption: "",
    date: "2026",
  });

  // Auth Check on mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/nextauth");
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push("/admin/login");
        }
      } catch (e) {
        setIsAuthenticated(false);
        router.push("/admin/login");
      }
    }
    checkAuth();
  }, [router]);

  useEffect(() => {
    setSchoolLogo(settings.schoolLogo);
    setHeroImage(settings.heroImage);
    setHeroTitle(settings.heroTitle);
    setHeroSubhead(settings.heroSubhead);
    setTickerText(settings.tickerText);
  }, [settings]);

  // Handle Logout
  const handleLogout = async () => {
    await fetch("/api/auth/nextauth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    router.push("/admin/login");
  };

  // --- BRANDING ACTIONS ---
  const handleSaveBranding = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      heroTitle,
      heroSubhead,
      tickerText,
      heroImage,
      schoolLogo,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const scale = Math.min(1, 800 / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressed = canvas.toDataURL("image/png", 0.95);
          setSchoolLogo(compressed);
          updateSettings({ schoolLogo: compressed });
          setSavedSuccess(true);
          setTimeout(() => setSavedSuccess(false), 4000);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHeroImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 1200; // Ultra light-weight compressed hero image
          const scale = Math.min(1, MAX_WIDTH / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressed = canvas.toDataURL("image/jpeg", 0.75);
          setHeroImage(compressed);
          updateSettings({ heroImage: compressed });
          setSavedSuccess(true);
          setTimeout(() => setSavedSuccess(false), 4000);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  // --- FACULTY CRUD ACTIONS ---
  const handleSaveFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingFaculty) {
      // Update
      setFacultyList((prev) =>
        prev.map((f) =>
          f.sno === editingFaculty.sno
            ? { ...f, name: facultyForm.name, designation: facultyForm.designation as any, highestQualification: facultyForm.qualification }
            : f
        )
      );
    } else {
      // Create
      const newFaculty: FacultyMember = {
        sno: facultyList.length + 1,
        name: facultyForm.name,
        gender: "M",
        oasisId: `OASIS-${Date.now()}`,
        designation: facultyForm.designation as any,
        highestQualification: facultyForm.qualification,
        subjectTaught: "General",
        image: "/placeholder.png",
      };
      setFacultyList((prev) => [newFaculty, ...prev]);
    }
    setShowFacultyModal(false);
    setEditingFaculty(null);
    setFacultyForm({ name: "", designation: "", qualification: "", category: "TGT" });
  };

  const handleDeleteFaculty = (sno: number) => {
    if (confirm("Are you sure you want to remove this faculty member?")) {
      setFacultyList((prev) => prev.filter((f) => f.sno !== sno));
    }
  };

  // --- NEWS CRUD ACTIONS ---
  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      setNewsList((prev) =>
        prev.map((n) => (n.id === editingNews.id ? { ...n, ...newsForm } : n))
      );
    } else {
      const newArticle: NewsItem = {
        id: `news-${Date.now()}`,
        ...newsForm,
        author: "Academic Coordinator",
        readTime: "3 min read",
      };
      setNewsList((prev) => [newArticle, ...prev]);
    }
    setShowNewsModal(false);
    setEditingNews(null);
    setNewsForm({
      title: "",
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      category: "Notice",
      excerpt: "",
      fullContent: "",
      image: "/placeholder.png",
    });
  };

  const handleDeleteNews = (id: string) => {
    if (confirm("Are you sure you want to delete this news article?")) {
      setNewsList((prev) => prev.filter((n) => n.id !== id));
    }
  };

  // --- GALLERY CRUD ACTIONS ---
  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: GalleryItem = {
      id: `g-${Date.now()}`,
      ...galleryForm,
    };
    setGalleryList((prev) => [newItem, ...prev]);
    setShowGalleryModal(false);
    setGalleryForm({
      title: "",
      category: "CBSE Events",
      image: "/placeholder.png",
      caption: "",
      date: "2026",
    });
  };

  const handleDeleteGallery = (id: string) => {
    if (confirm("Are you sure you want to delete this photo from the gallery?")) {
      setGalleryList((prev) => prev.filter((g) => g.id !== id));
    }
  };

  // --- NOTICE & CALENDAR CRUD ACTIONS ---
  const handleOpenAddNotice = () => {
    setEditingNotice(null);
    setNoticeForm({
      title: "",
      date: new Date().toISOString().split("T")[0],
      category: "Academic",
      description: "",
      pdfUrl: "",
    });
    setShowNoticeModal(true);
  };

  const handleOpenEditNotice = (notice: NoticeItem) => {
    setEditingNotice(notice);
    setNoticeForm({
      title: notice.title,
      date: notice.date,
      category: notice.category,
      description: notice.description || "",
      pdfUrl: notice.pdfUrl || "",
    });
    setShowNoticeModal(true);
  };

  const handleNoticeFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit. Please upload a smaller PDF or image file.");
      return;
    }

    const isImage = file.type.startsWith("image/");
    const reader = new FileReader();

    if (isImage) {
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 1200;
          const scale = Math.min(1, MAX_WIDTH / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressed = canvas.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.85);
          setNoticeForm((prev) => ({ ...prev, pdfUrl: compressed }));
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setNoticeForm((prev) => ({ ...prev, pdfUrl: dataUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveNotice = (e: React.FormEvent) => {
    e.preventDefault();
    const parseRes = NoticeSchema.safeParse(noticeForm);
    if (!parseRes.success) {
      alert(parseRes.error.issues[0].message);
      return;
    }
    if (editingNotice) {
      updateNotice(editingNotice.id, noticeForm);
    } else {
      addNotice(noticeForm);
    }
    setShowNoticeModal(false);
    setEditingNotice(null);
  };

  const handleDeleteNoticeItem = (id: string) => {
    if (confirm("Are you sure you want to delete this notice/event permanently from the calendar?")) {
      deleteNotice(id);
    }
  };

  // --- ACHIEVEMENTS & WALL OF HONOR CRUD ACTIONS ---
  const handleOpenAddAchievement = () => {
    setEditingAchievement(null);
    setAchievementForm({
      studentName: "",
      title: "",
      category: "Board Exam",
      achievement: "",
      scoreOrMedal: "",
      year: "2025",
      image: "",
      quote: "",
    });
    setShowAchievementModal(true);
  };

  const handleOpenEditAchievement = (item: AchievementItem) => {
    setEditingAchievement(item);
    setAchievementForm({
      studentName: item.studentName,
      title: item.title,
      category: item.category,
      achievement: item.achievement,
      scoreOrMedal: item.scoreOrMedal,
      year: item.year,
      image: item.image,
      quote: item.quote || "",
    });
    setShowAchievementModal(true);
  };

  const handleAchievementImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit. Please upload a smaller image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 400;
        const scale = Math.min(1, MAX_WIDTH / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Always use JPEG for smallest base64 size (crucial for localStorage)
        const compressed = canvas.toDataURL("image/jpeg", 0.5);
        setAchievementForm((prev) => ({ ...prev, image: compressed }));
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSaveAchievement = (e: React.FormEvent) => {
    e.preventDefault();
    const parseRes = AchievementSchema.safeParse(achievementForm);
    if (!parseRes.success) {
      alert(parseRes.error.issues[0].message);
      return;
    }
    if (editingAchievement) {
      updateAchievement(editingAchievement.id, achievementForm);
    } else {
      addAchievement(achievementForm);
    }
    setShowAchievementModal(false);
    setEditingAchievement(null);
  };

  const handleDeleteAchievementItem = (id: string) => {
    if (confirm("Are you sure you want to remove this achievement entry permanently?")) {
      deleteAchievement(id);
    }
  };

  // Filtered Achievements List
  const filteredAchievements = achievements.filter((a) => {
    const matchesSearch =
      a.studentName.toLowerCase().includes(achievementSearch.toLowerCase()) ||
      a.title.toLowerCase().includes(achievementSearch.toLowerCase()) ||
      a.achievement.toLowerCase().includes(achievementSearch.toLowerCase());
    const matchesCat = achievementCategoryFilter === "All" || a.category === achievementCategoryFilter;
    return matchesSearch && matchesCat;
  });

  // Filtered Notices List
  const filteredNotices = notices.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(noticeSearch.toLowerCase()) ||
      (n.description && n.description.toLowerCase().includes(noticeSearch.toLowerCase())) ||
      n.date.includes(noticeSearch);
    const matchesCat = noticeCategoryFilter === "All" || n.category === noticeCategoryFilter;
    return matchesSearch && matchesCat;
  });

  // Filtered Faculty List
  const filteredFaculty = facultyList.filter(
    (f) =>
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.designation.toLowerCase().includes(facultySearch.toLowerCase()) ||
      f.highestQualification.toLowerCase().includes(facultySearch.toLowerCase())
  );

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-900">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Verifying Admin Session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-slate-100 flex flex-col">
      
      {/* TOP ADMIN HEADER BAR */}
      <header className="h-20 bg-white border-b border-gray-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black shadow-lg">
            <ShieldCheck className="w-6 h-6 text-gray-900" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 leading-none">
              School Admin Dashboard
            </h1>
            <p className="text-[11px] font-bold text-orange-400 leading-tight mt-0.5">
              Dayanand Arya Vidya Public School, Mandar
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-800 border border-gray-300 transition-all"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
          </Link>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-gray-900 border border-rose-800 text-xs font-black transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* DASHBOARD BODY WITH SIDEBAR */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-64 bg-white/90 border-r border-gray-200 p-4 space-y-2 shrink-0">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "overview"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Dashboard Overview</span>
          </button>

          <button
            onClick={() => setActiveTab("branding")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "branding"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Header & Branding CMS</span>
          </button>

          <button
            onClick={() => setActiveTab("faculty")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "faculty"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Faculty Management ({facultyList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("news")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "news"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>News & Events CMS ({newsList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "gallery"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Photo Gallery CMS ({galleryList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("notices")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "notices"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Calendar className="w-4 h-4 text-orange-400" />
            <span>Notice Board & Calendar ({notices.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("achievements")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "achievements"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Wall of Honor CMS ({achievements.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("director")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "director"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span>Director&apos;s Message</span>
          </button>

          <button
            onClick={() => setActiveTab("rules")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black transition-all ${
              activeTab === "rules"
                ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>School Rules & Policies</span>
          </button>
        </aside>

        {/* MAIN TAB CONTENT AREA */}
        <main className="flex-1 p-4 sm:p-8 space-y-8 overflow-y-auto max-w-7xl">

          {/* TAB 1: OVERVIEW ANALYTICS */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm space-y-4">
                <h2 className="text-2xl font-black text-gray-900">Welcome, School Administrator!</h2>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  Manage Dayanand Arya Vidya Public School content, academic calendar, notice board, faculty rosters, news notices, gallery images, and website branding parameters in real time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  onClick={() => setActiveTab("notices")}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase">Calendar Notices</span>
                    <Calendar className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-black text-gray-900">{notices.length}</p>
                  <p className="text-[11px] text-orange-400 font-bold">Active Circulars & Calendar Events</p>
                </div>

                <div
                  onClick={() => setActiveTab("faculty")}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase">Total Faculty</span>
                    <Users className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-black text-gray-900">{facultyList.length}</p>
                  <p className="text-[11px] text-emerald-400 font-bold">50 Active Teachers Listed</p>
                </div>

                <div
                  onClick={() => setActiveTab("news")}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase">Active News</span>
                    <Newspaper className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-black text-gray-900">{newsList.length}</p>
                  <p className="text-[11px] text-amber-400 font-bold">Published Articles & News</p>
                </div>

                <div
                  onClick={() => setActiveTab("gallery")}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase">Gallery Items</span>
                    <ImageIcon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-black text-gray-900">{galleryList.length}</p>
                  <p className="text-[11px] text-blue-400 font-bold">Includes CBSE Events Tag</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BRANDING CMS */}
          {activeTab === "branding" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Header & Branding CMS</h2>
                  <p className="text-xs text-gray-500">Update school title, ticker text, logo, and hero banner.</p>
                </div>
                {savedSuccess && (
                  <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-black border border-emerald-500/40 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Settings Saved!
                  </span>
                )}
              </div>

              <form onSubmit={handleSaveBranding} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-700 uppercase">School Title (Hero Title)</label>
                  <input
                    type="text"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-700 uppercase">Notice Ticker Announcement Text</label>
                  <textarea
                    rows={2}
                    value={tickerText}
                    onChange={(e) => setTickerText(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Logo Upload */}
                  <div className="space-y-3 bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-orange-500" />
                      <span>Upload School Logo (PNG, JPG, WEBP)</span>
                    </label>
                    <div className="flex items-center gap-4">
                      {schoolLogo && (
                        <div className="w-20 h-20 rounded-lg bg-white p-2 border border-gray-300 relative overflow-hidden shrink-0 shadow-lg">
                          <img src={schoolLogo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <label className="flex-1 cursor-pointer py-4 px-4 bg-white border border-dashed border-gray-300 hover:border-orange-500 rounded-lg text-xs font-bold text-center text-gray-700 transition-colors flex flex-col items-center justify-center gap-2">
                        <Upload className="w-5 h-5 text-orange-500" />
                        <span>Select Logo File (.png / .jpg)</span>
                        <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" onChange={handleLogoUpload} className="hidden" />
                      </label>
                    </div>
                  </div>

                  {/* Hero Banner Upload */}
                  <div className="space-y-3 bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <label className="text-xs font-black text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-orange-500" />
                      <span>Upload Hero Banner Photo (PNG, JPG, WEBP)</span>
                    </label>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      {heroImage && (
                        <div className="relative h-24 w-40 rounded-lg overflow-hidden border border-gray-300 shrink-0 shadow-lg">
                          <img src={heroImage} alt="Hero Banner Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <label className="flex-1 cursor-pointer py-4 px-4 bg-white border border-dashed border-gray-300 hover:border-orange-500 rounded-lg text-xs font-bold text-center text-gray-700 transition-colors flex flex-col items-center justify-center gap-2">
                        <Upload className="w-5 h-5 text-orange-500" />
                        <span>Select Hero Banner File (.jpg / .png)</span>
                        <input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" onChange={handleHeroImageUpload} className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>


                <button
                  type="submit"
                  className="px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-gray-900 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save Branding Changes
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: FACULTY MANAGEMENT (CRUD) */}
          {activeTab === "faculty" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Faculty Management</h2>
                  <p className="text-xs text-gray-500">Create, edit, search, and manage teaching staff entries.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingFaculty(null);
                    setFacultyForm({ name: "", designation: "", qualification: "", category: "TGT" });
                    setShowFacultyModal(true);
                  }}
                  className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add New Teacher
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search faculty by name, designation, or qualification..."
                  value={facultySearch}
                  onChange={(e) => setFacultySearch(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg py-3.5 pl-12 pr-4 text-xs font-bold text-gray-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              {/* Faculty Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-gray-50 text-gray-500 font-black uppercase tracking-wider">
                        <th className="p-4">S.No.</th>
                        <th className="p-4">Teacher Name</th>
                        <th className="p-4">Designation</th>
                        <th className="p-4">Qualification</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-medium text-gray-800">
                      {filteredFaculty.map((f) => (
                        <tr key={f.sno} className="hover:bg-gray-100/50">
                          <td className="p-4 font-black text-orange-400">{f.sno}</td>
                          <td className="p-4 font-black text-gray-900">{f.name}</td>
                          <td className="p-4 font-bold text-gray-700">{f.designation}</td>
                          <td className="p-4 text-gray-500">{f.highestQualification}</td>
                          <td className="p-4 text-right space-x-2">
                            <button
                              onClick={() => {
                                setEditingFaculty(f);
                                setFacultyForm({
                                  name: f.name,
                                  designation: f.designation,
                                  qualification: f.highestQualification,
                                  category: "TGT",
                                });
                                setShowFacultyModal(true);
                              }}
                              className="p-2 bg-gray-100 hover:bg-gray-200 text-amber-400 rounded-xl transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteFaculty(f.sno)}
                              className="p-2 bg-gray-100 hover:bg-rose-900/50 text-rose-400 rounded-xl transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: NEWS & ANNOUNCEMENTS (CRUD) */}
          {activeTab === "news" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">News & Events CMS</h2>
                  <p className="text-xs text-gray-500">Publish notices, school news, and event announcements.</p>
                </div>
                <button
                  onClick={() => {
                    setEditingNews(null);
                    setNewsForm({
                      title: "",
                      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
                      category: "Notice",
                      excerpt: "",
                      fullContent: "",
                      image: "/placeholder.png",
                    });
                    setShowNewsModal(true);
                  }}
                  className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Publish New Event
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsList.map((n) => (
                  <div key={n.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-[10px] font-black uppercase">
                          {n.category}
                        </span>
                        <span className="text-xs text-gray-500 font-bold">{n.date}</span>
                      </div>
                      <h4 className="text-lg font-black text-gray-900">{n.title}</h4>
                      <p className="text-xs text-gray-500 font-medium line-clamp-2">{n.excerpt}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDeleteNews(n.id)}
                        className="px-3 py-1.5 bg-rose-950 text-rose-400 hover:bg-rose-900 hover:text-gray-900 rounded-xl text-xs font-bold transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: GALLERY CMS (CRUD) */}
          {activeTab === "gallery" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Photo Gallery CMS</h2>
                  <p className="text-xs text-gray-500">Manage campus images and CBSE Events photo collection.</p>
                </div>
                <button
                  onClick={() => setShowGalleryModal(true)}
                  className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add Photo to Gallery
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryList.map((g) => (
                  <div key={g.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm space-y-3 relative group">
                    <div className="relative h-48 w-full">
                      <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-gray-50/80 text-amber-400 rounded-full text-[10px] font-black">
                        {g.category}
                      </span>
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="text-sm font-black text-gray-900 leading-tight">{g.title}</h4>
                      <p className="text-xs text-gray-500">{g.caption}</p>
                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500">{g.date}</span>
                        <button
                          onClick={() => handleDeleteGallery(g.id)}
                          className="p-1.5 bg-rose-950 text-rose-400 hover:bg-rose-900 hover:text-gray-900 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: NOTICES & CALENDAR CMS */}
          {activeTab === "notices" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Notice Board & Calendar CMS</h2>
                  <p className="text-xs text-gray-500">
                    Add, edit, or delete notices, circulars, exam dates, and events displayed on the Academic Calendar.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetNotices}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl border border-gray-300 transition-all flex items-center gap-1.5"
                    title="Reset to default notices sample list"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                  </button>

                  <button
                    onClick={handleOpenAddNotice}
                    className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Plus className="w-4 h-4" /> Add Notice / Event
                  </button>
                </div>
              </div>

              {/* Search & Category Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={noticeSearch}
                    onChange={(e) => setNoticeSearch(e.target.value)}
                    placeholder="Search by title, description or date (YYYY-MM-DD)..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-gray-500">Category:</span>
                  {["All", "Academic", "Admissions", "Events", "Celebration", "CBSE Board", "Exams", "Sports", "Holiday"].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setNoticeCategoryFilter(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          noticeCategoryFilter === cat
                            ? "bg-orange-600 text-gray-900 shadow-md"
                            : "bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Notices Data Table */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50/50 text-[11px] font-black uppercase text-gray-500">
                        <th className="py-4 px-6">Event Date</th>
                        <th className="py-4 px-6">Category</th>
                        <th className="py-4 px-6">Notice / Event Details</th>
                        <th className="py-4 px-6">PDF Link</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs">
                      {filteredNotices.length > 0 ? (
                        filteredNotices.map((n) => (
                          <tr key={n.id} className="hover:bg-gray-100/40 transition-colors">
                            <td className="py-4 px-6 font-mono font-bold text-amber-400 whitespace-nowrap">
                              {n.date}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              <span className="px-2.5 py-1 bg-orange-950/80 text-orange-400 border border-orange-800/60 rounded-lg text-[10px] font-extrabold uppercase">
                                {n.category}
                              </span>
                            </td>
                            <td className="py-4 px-6 max-w-md space-y-1">
                              <p className="font-extrabold text-gray-900 leading-snug">{n.title}</p>
                              {n.description && (
                                <p className="text-[11px] text-gray-500 line-clamp-2">{n.description}</p>
                              )}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              {n.pdfUrl ? (
                                <a
                                  href={n.pdfUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-orange-400 font-bold hover:underline inline-flex items-center gap-1"
                                >
                                  <FileText className="w-3.5 h-3.5" /> PDF
                                </a>
                              ) : (
                                <span className="text-[11px] text-slate-600">—</span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleOpenEditNotice(n)}
                                  className="p-2 bg-gray-100 hover:bg-gray-200 text-amber-400 rounded-xl transition-colors"
                                  title="Edit Notice"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteNoticeItem(n.id)}
                                  className="p-2 bg-gray-100 hover:bg-rose-900/50 text-rose-400 rounded-xl transition-colors"
                                  title="Delete Notice"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-slate-500 font-medium text-xs">
                            No notices or circulars match your search query.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: ACHIEVEMENTS & WALL OF HONOR CMS */}
          {activeTab === "achievements" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Student Achievements & Wall of Honor CMS</h2>
                  <p className="text-xs text-gray-500">
                    Add, edit, or remove toppers, Olympiad rankers, sports champions, and competitive exam rankers.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetAchievements}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl border border-gray-300 transition-all flex items-center gap-1.5"
                    title="Reset to default achievements sample list"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                  </button>

                  <button
                    onClick={handleOpenAddAchievement}
                    className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Plus className="w-4 h-4" /> Add Student Topper
                  </button>
                </div>
              </div>

              {/* Search & Category Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={achievementSearch}
                    onChange={(e) => setAchievementSearch(e.target.value)}
                    placeholder="Search student name, title, or rank..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-gray-500">Category:</span>
                  {["All", "Board Exam", "Olympiad", "Innovation", "Sports", "JEE/NEET"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setAchievementCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        achievementCategoryFilter === cat
                          ? "bg-orange-600 text-gray-900 shadow-md"
                          : "bg-gray-50 text-gray-500 hover:text-gray-900 border border-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Achievements Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredAchievements.length > 0 ? (
                  filteredAchievements.map((ach) => (
                    <div
                      key={ach.id}
                      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between group relative"
                    >
                      <div className="relative h-48 w-full bg-gray-50">
                        {ach.image ? (
                          <img src={ach.image} alt={ach.studentName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                            <span className="text-4xl font-black text-amber-400/60">{ach.studentName.split(" ").map(n => n[0]).join("")}</span>
                          </div>
                        )}
                        <span className="absolute top-3 right-3 px-3 py-1 bg-orange-600 text-gray-900 rounded-full text-[11px] font-black shadow-md">
                          {ach.scoreOrMedal}
                        </span>
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-gray-50/80 text-amber-400 rounded-lg text-[10px] font-extrabold uppercase border border-gray-300">
                          {ach.category} • {ach.year}
                        </span>
                      </div>

                      <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="text-base font-black text-gray-900 leading-tight">{ach.studentName}</h4>
                          <p className="text-xs font-bold text-orange-400">{ach.title}</p>
                          <p className="text-xs text-gray-500 line-clamp-3 italic">"{ach.achievement}"</p>
                          {ach.quote && (
                            <p className="text-[10px] text-slate-500 bg-gray-50 p-2 rounded-xl border border-gray-200/80 mt-2">
                              "{ach.quote}"
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-gray-200/80 flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditAchievement(ach)}
                            className="p-2 bg-gray-100 hover:bg-gray-200 text-amber-400 rounded-xl transition-colors"
                            title="Edit Record"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteAchievementItem(ach.id)}
                            className="p-2 bg-gray-100 hover:bg-rose-900/50 text-rose-400 rounded-xl transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-slate-500 font-medium text-xs">
                    No student achievements match your search filter.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: DIRECTOR'S MESSAGE CMS */}
          {activeTab === "director" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Director&apos;s Message CMS</h2>
                  <p className="text-xs text-gray-500">
                    Edit the director&apos;s name, photo, designation, message content, and experience tagline.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {directorSaved && (
                    <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-xs font-black border border-emerald-500/40 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Saved!
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setDirectorSaved(true);
                      setTimeout(() => setDirectorSaved(false), 3000);
                    }}
                    className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700  text-white rounded-xl text-xs font-black shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save Changes
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* EDIT FORM */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-5">
                  <h3 className="text-lg font-black text-gray-900 border-b border-gray-200 pb-3">Edit Director Details</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Director Full Name</label>
                      <input
                        type="text"
                        value={settings.directorName}
                        onChange={(e) => updateSettings({ directorName: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Designation / Title</label>
                      <input
                        type="text"
                        value={settings.directorDesignation}
                        onChange={(e) => updateSettings({ directorDesignation: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Qualification</label>
                      <input
                        type="text"
                        value={settings.directorQualification}
                        onChange={(e) => updateSettings({ directorQualification: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Experience Tagline</label>
                      <input
                        type="text"
                        value={settings.directorExperience}
                        onChange={(e) => updateSettings({ directorExperience: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        placeholder="e.g. 25+ Years of Educational Leadership"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Section Heading</label>
                    <input
                      type="text"
                      value={settings.directorHeading}
                      onChange={(e) => updateSettings({ directorHeading: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Message Content</label>
                    <textarea
                      rows={8}
                      value={[settings.directorMessage1, settings.directorMessage2, settings.directorMessage3].filter(Boolean).join("\n\n")}
                      onChange={(e) => {
                        const parts = e.target.value.split("\n\n");
                        updateSettings({
                          directorMessage1: parts[0] || "",
                          directorMessage2: parts[1] || "",
                          directorMessage3: parts[2] || "",
                        });
                      }}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 whitespace-pre-wrap"
                      placeholder="Enter paragraphs separated by a blank line."
                    />
                  </div>

                  {/* Director Photo Upload */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 flex items-center justify-between">
                      <span>Director Photo (.png, .jpg, .webp)</span>
                      <span className="text-[10px] text-gray-500 font-medium">Max 5MB</span>
                    </label>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        {settings.directorImage && (
                          <div className="relative h-20 w-20 rounded-xl overflow-hidden border border-gray-300 shrink-0 shadow-md">
                            <img src={settings.directorImage} alt="Director Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <label className="flex-1 cursor-pointer py-3 px-4 bg-white border border-dashed border-gray-300 hover:border-orange-500 rounded-xl text-xs font-bold text-center text-gray-800 transition-colors flex items-center justify-center gap-2 group">
                          <Upload className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                          <span>Upload Director Photo</span>
                          <input
                            type="file"
                            accept="image/png,image/jpeg,image/jpg,image/webp"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              if (file.size > 5 * 1024 * 1024) {
                                alert("File exceeds 5MB. Please use a smaller image.");
                                return;
                              }
                              const reader = new FileReader();
                              reader.onload = (evt) => {
                                const img = new window.Image();
                                img.onload = () => {
                                  const canvas = document.createElement("canvas");
                                  const MAX = 500;
                                  const scale = Math.min(1, MAX / img.width);
                                  canvas.width = img.width * scale;
                                  canvas.height = img.height * scale;
                                  const ctx = canvas.getContext("2d");
                                  ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
                                  const compressed = canvas.toDataURL("image/jpeg", 0.55);
                                  updateSettings({ directorImage: compressed });
                                };
                                img.src = evt.target?.result as string;
                              };
                              reader.readAsDataURL(file);
                            }}
                            className="hidden"
                          />
                        </label>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 font-medium block">
                          Or paste direct image URL / path:
                        </span>
                        <input
                          type="text"
                          placeholder="e.g. /images/director.png"
                          value={settings.directorImage}
                          onChange={(e) => updateSettings({ directorImage: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 mt-1 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* LIVE PREVIEW */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-5">
                  <h3 className="text-lg font-black text-gray-900 border-b border-gray-200 pb-3">Live Preview</h3>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-24 rounded-xl overflow-hidden border-2 border-amber-300 bg-slate-100 shrink-0">
                        {settings.directorImage ? (
                          <img src={settings.directorImage} alt={settings.directorName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-amber-100">
                            <span className="text-xl font-black text-orange-400">{settings.directorName.split(" ").map(n => n[0]).join("")}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-black text-slate-900">{settings.directorName}</p>
                        <p className="text-[10px] font-bold text-orange-600">{settings.directorDesignation}</p>
                        <p className="text-[10px] text-slate-500">{settings.directorQualification}</p>
                        <p className="text-[10px] text-amber-600 font-semibold">⭐ {settings.directorExperience}</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-extrabold text-slate-900">{settings.directorHeading}</h4>
                    </div>

                    <div className="space-y-2 text-[11px] text-slate-600 leading-relaxed">
                      {settings.directorMessage1 && <p>&ldquo;{settings.directorMessage1}&rdquo;</p>}
                      {settings.directorMessage2 && <p>&ldquo;{settings.directorMessage2}&rdquo;</p>}
                      {settings.directorMessage3 && <p>&ldquo;{settings.directorMessage3}&rdquo;</p>}
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 text-center">
                    Changes save automatically and appear on the homepage and /director-message page.
                  </p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ACHIEVEMENT MODAL */}
      {showAchievementModal && (
        <div className="fixed inset-0 z-50 bg-gray-50/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-lg w-full space-y-6 shadow-sm overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="text-xl font-black text-gray-900">
                {editingAchievement ? "Edit Achievement Entry" : "Add Student to Wall of Honor"}
              </h3>
              <button
                onClick={() => setShowAchievementModal(false)}
                className="text-gray-500 hover:text-gray-900 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveAchievement} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={achievementForm.studentName}
                    onChange={(e) => setAchievementForm({ ...achievementForm, studentName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Score / Badge *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 99.2% or AIR 1 or Gold Medal"
                    value={achievementForm.scoreOrMedal}
                    onChange={(e) => setAchievementForm({ ...achievementForm, scoreOrMedal: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Title / Distinction *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CBSE Class XII State Topper"
                  value={achievementForm.title}
                  onChange={(e) => setAchievementForm({ ...achievementForm, title: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Category *</label>
                  <select
                    value={achievementForm.category}
                    onChange={(e) => setAchievementForm({ ...achievementForm, category: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="Board Exam">Board Exam</option>
                    <option value="Olympiad">Olympiad</option>
                    <option value="Innovation">Innovation / Science</option>
                    <option value="Sports">Sports</option>
                    <option value="JEE/NEET">JEE / NEET</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Academic Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2025"
                    value={achievementForm.year}
                    onChange={(e) => setAchievementForm({ ...achievementForm, year: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Achievement Details *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. Secured 99.2% in CBSE Class XII Science Stream with 100 in Mathematics..."
                  value={achievementForm.achievement}
                  onChange={(e) => setAchievementForm({ ...achievementForm, achievement: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Student Quote / Feedback (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. The teachers at Dayanand Arya Vidya gave me constant guidance..."
                  value={achievementForm.quote}
                  onChange={(e) => setAchievementForm({ ...achievementForm, quote: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              {/* Student Photo Upload Section */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 flex items-center justify-between">
                  <span>Student Photo (Upload or Image URL) *</span>
                  <span className="text-[10px] text-gray-500 font-medium">Max 5MB</span>
                </label>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    {achievementForm.image && (
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden border border-gray-300 shrink-0 shadow-md">
                        <img src={achievementForm.image} alt="Student Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <label className="flex-1 cursor-pointer py-3 px-4 bg-white border border-dashed border-gray-300 hover:border-orange-500 rounded-xl text-xs font-bold text-center text-gray-800 transition-colors flex items-center justify-center gap-2 group">
                      <Upload className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                      <span>Select Photo (.png, .jpg, .webp)</span>
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/jpg,image/webp"
                        onChange={handleAchievementImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">
                      Or paste direct image URL:
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. https://images.unsplash.com/..."
                      value={achievementForm.image}
                      onChange={(e) => setAchievementForm({ ...achievementForm, image: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 mt-1 font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowAchievementModal(false)}
                  className="px-4 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black rounded-xl shadow-lg hover:opacity-90 transition-all"
                >
                  {editingAchievement ? "Update Record" : "Add to Wall of Honor"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NOTICE & CALENDAR MODAL */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 bg-gray-50/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-lg w-full space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h3 className="text-xl font-black text-gray-900">
                {editingNotice ? "Edit Calendar Notice" : "Add New Calendar Notice / Event"}
              </h3>
              <button
                onClick={() => setShowNoticeModal(false)}
                className="text-gray-500 hover:text-gray-900 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveNotice} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Notice / Event Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Independence Day Flag Hoisting & Science Exhibition"
                  value={noticeForm.title}
                  onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={noticeForm.date}
                    onChange={(e) => setNoticeForm({ ...noticeForm, date: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Category *</label>
                  <select
                    value={noticeForm.category}
                    onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="Academic">Academic</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Events">Events</option>
                    <option value="Celebration">Celebration</option>
                    <option value="CBSE Board">CBSE Board</option>
                    <option value="Exams">Exams</option>
                    <option value="Sports">Sports</option>
                    <option value="Holiday">Holiday</option>
                    <option value="Notice">General Notice</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Description / Details (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Provide concise details for parents and students..."
                  value={noticeForm.description}
                  onChange={(e) => setNoticeForm({ ...noticeForm, description: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              {/* Attachment File Upload (PDF / Image: PNG, WEBP, JPG) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 flex items-center justify-between">
                  <span>Upload Notice Attachment (PDF, PNG, WEBP, JPG)</span>
                  <span className="text-[10px] text-gray-500 font-medium">Max 5MB</span>
                </label>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <label className="flex-1 cursor-pointer py-3.5 px-4 bg-white border border-dashed border-gray-300 hover:border-orange-500 rounded-xl text-xs font-bold text-center text-gray-800 transition-colors flex items-center justify-center gap-2 group">
                      <Upload className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                      <span>Click to Select File (.pdf, .png, .jpg, .webp)</span>
                      <input
                        type="file"
                        accept="application/pdf,image/png,image/jpeg,image/jpg,image/webp"
                        onChange={handleNoticeFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Upload Preview Status */}
                  {noticeForm.pdfUrl ? (
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-gray-200 text-xs">
                      <div className="flex items-center gap-2 overflow-hidden pr-2">
                        {noticeForm.pdfUrl.startsWith("data:image/") ? (
                          <ImageIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <FileText className="w-4 h-4 text-orange-400 shrink-0" />
                        )}
                        <span className="text-gray-800 truncate font-mono text-[11px]">
                          {noticeForm.pdfUrl.startsWith("data:image/")
                            ? "✓ Image Attachment Attached"
                            : noticeForm.pdfUrl.startsWith("data:application/pdf")
                            ? "✓ PDF Document Attached"
                            : noticeForm.pdfUrl}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setNoticeForm({ ...noticeForm, pdfUrl: "" })}
                        className="text-rose-400 hover:text-rose-300 font-bold px-2 py-1 text-[10px] rounded bg-rose-950/80 border border-rose-800 shrink-0"
                      >
                        Remove
                      </button>
                    </div>
                  ) : null}

                  <div className="pt-1">
                    <span className="text-[10px] text-slate-500 font-medium block">
                      Or enter an external URL link:
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. /docs/midterm_timetable.pdf or https://..."
                      value={noticeForm.pdfUrl}
                      onChange={(e) => setNoticeForm({ ...noticeForm, pdfUrl: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 mt-1 font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowNoticeModal(false)}
                  className="px-4 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black rounded-xl shadow-lg hover:opacity-90 transition-all"
                >
                  {editingNotice ? "Update Notice" : "Publish to Calendar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FACULTY MODAL */}
      {showFacultyModal && (
        <div className="fixed inset-0 z-50 bg-gray-50/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-lg w-full space-y-6 shadow-sm">
            <h3 className="text-xl font-black text-gray-900">
              {editingFaculty ? "Edit Faculty Entry" : "Add New Faculty Member"}
            </h3>

            <form onSubmit={handleSaveFaculty} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Teacher Name</label>
                <input
                  type="text"
                  required
                  value={facultyForm.name}
                  onChange={(e) => setFacultyForm({ ...facultyForm, name: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Designation</label>
                <input
                  type="text"
                  required
                  value={facultyForm.designation}
                  onChange={(e) => setFacultyForm({ ...facultyForm, designation: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Qualification</label>
                <input
                  type="text"
                  required
                  value={facultyForm.qualification}
                  onChange={(e) => setFacultyForm({ ...facultyForm, qualification: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowFacultyModal(false)}
                  className="px-4 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-orange-600 text-gray-900 text-xs font-black rounded-xl shadow-lg"
                >
                  Save Faculty Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GALLERY MODAL */}
      {showGalleryModal && (
        <div className="fixed inset-0 z-50 bg-gray-50/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-lg w-full space-y-6 shadow-sm">
            <h3 className="text-xl font-black text-gray-900">Add New Photo to Gallery</h3>

            <form onSubmit={handleSaveGallery} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Photo Title</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Category Filter</label>
                <select
                  value={galleryForm.category}
                  onChange={(e: any) => setGalleryForm({ ...galleryForm, category: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                >
                  <option value="CBSE Events">CBSE Events</option>
                  <option value="Campus">Campus</option>
                  <option value="Events">Events</option>
                  <option value="Sports">Sports</option>
                  <option value="Academics">Academics</option>
                  <option value="Celebrations">Celebrations</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Image URL</label>
                <input
                  type="text"
                  required
                  value={galleryForm.image}
                  onChange={(e) => setGalleryForm({ ...galleryForm, image: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Caption / Description</label>
                <input
                  type="text"
                  required
                  value={galleryForm.caption}
                  onChange={(e) => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowGalleryModal(false)}
                  className="px-4 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-orange-600 text-gray-900 text-xs font-black rounded-xl shadow-lg"
                >
                  Upload Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

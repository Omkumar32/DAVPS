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
  MessageSquare,
  GraduationCap,
  X,
  Compass,
  Target,
  Bus,
  PhoneCall
} from "lucide-react";
import { useSiteSettings, NoticeItem, AchievementItem, ProgramItem } from "@/context/SiteSettingsContext";
import { GALLERY_DATA, GalleryItem, NEWS_EVENTS_DATA, NewsItem, SALIENT_FEATURES_DATA, SalientFeatureItem } from "@/data/schoolData";
import { FACULTY_MEMBERS, FacultyMember } from "@/data/facultyData";
import { FacultySchema, NewsSchema, GallerySchema, SiteSettingsSchema, NoticeSchema, AchievementSchema, ProgramSchema } from "@/lib/adminSchemas";
import { convertAndUploadWebP } from "@/lib/uploadWebP";


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
    resetAchievements,
    programs,
    addProgram,
    updateProgram,
    deleteProgram,
    resetPrograms,
    faculty: facultyList,
    addFaculty,
    updateFaculty,
    deleteFaculty,
    resetFaculty,
    news: newsList,
    addNews,
    updateNews,
    deleteNews,
    resetNews,
    gallery: galleryList,
    addGallery,
    deleteGallery,
    resetGallery,
  } = useSiteSettings();

  // Authentication Protection Check
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "branding" | "about" | "geninfo" | "principal" | "programs" | "notices" | "enquiries" | "faculty" | "news" | "gallery" | "rules" | "achievements" | "director">("overview");

  const [directorSaved, setDirectorSaved] = useState(false);
  const [principalSaved, setPrincipalSaved] = useState(false);

  // Director Message State
  const [directorHeroBadge, setDirectorHeroBadge] = useState(settings.directorHeroBadge || "Dayanand Arya Vidya Public School");
  const [directorHeroTitle, setDirectorHeroTitle] = useState(settings.directorHeroTitle || "Director's Message");
  const [directorHeroSubtitle, setDirectorHeroSubtitle] = useState(settings.directorHeroSubtitle || "");
  const [directorHeroImage, setDirectorHeroImage] = useState(settings.directorHeroImage || "");
  const [directorName, setDirectorName] = useState(settings.directorName || "Er. Alok Nath Verma");
  const [directorDesignation, setDirectorDesignation] = useState(settings.directorDesignation || "Director & Managing Trustee");
  const [directorQualification, setDirectorQualification] = useState(settings.directorQualification || "M.Tech (IIT Kanpur) | Senior Educationist");
  const [directorImage, setDirectorImage] = useState(settings.directorImage || "/placeholder.png");
  const [directorHeading, setDirectorHeading] = useState(settings.directorHeading || "Empowering Young Minds for a Brighter Tomorrow");
  const [directorMessage1, setDirectorMessage1] = useState(settings.directorMessage1 || "");
  const [directorMessage2, setDirectorMessage2] = useState(settings.directorMessage2 || "");
  const [directorMessage3, setDirectorMessage3] = useState(settings.directorMessage3 || "");
  const [directorExperience, setDirectorExperience] = useState(settings.directorExperience || "25+ Years of Educational Leadership & Vision");
  const [directorLeadershipDesc, setDirectorLeadershipDesc] = useState(settings.directorLeadershipDesc || "");
  const [directorLocation, setDirectorLocation] = useState(settings.directorLocation || "Mandar, Ranchi");

  // Faculty Page CMS State
  const [facultySaved, setFacultySaved] = useState(false);
  const [facultyHeroBadge, setFacultyHeroBadge] = useState(settings.facultyHeroBadge || "Dayanand Arya Vidya Public School");
  const [facultyHeroTitle, setFacultyHeroTitle] = useState(settings.facultyHeroTitle || "Faculty & Teaching Staff");
  const [facultyHeroSubtitle, setFacultyHeroSubtitle] = useState(settings.facultyHeroSubtitle || "");
  const [facultyHeroImage, setFacultyHeroImage] = useState(settings.facultyHeroImage || "");
  const [facultyStat1Value, setFacultyStat1Value] = useState(settings.facultyStat1Value || "50+");
  const [facultyStat1Label, setFacultyStat1Label] = useState(settings.facultyStat1Label || "Certified Faculty");
  const [facultyStat2Value, setFacultyStat2Value] = useState(settings.facultyStat2Value || "100%");
  const [facultyStat2Label, setFacultyStat2Label] = useState(settings.facultyStat2Label || "CBSE / OASIS Registered");
  const [facultyStat3Value, setFacultyStat3Value] = useState(settings.facultyStat3Value || "12:1");
  const [facultyStat3Label, setFacultyStat3Label] = useState(settings.facultyStat3Label || "Student-Teacher Ratio");
  const [facultyStat4Value, setFacultyStat4Value] = useState(settings.facultyStat4Value || "M.A / M.Sc / B.Ed");
  const [facultyStat4Label, setFacultyStat4Label] = useState(settings.facultyStat4Label || "Qualified Pedagogy");

  // Principal Message State
  const [principalHeroBadge, setPrincipalHeroBadge] = useState(settings.principalHeroBadge || "Dayanand Arya Vidya Public School");
  const [principalHeroTitle, setPrincipalHeroTitle] = useState(settings.principalHeroTitle || "Principal's Message");
  const [principalHeroSubtitle, setPrincipalHeroSubtitle] = useState(settings.principalHeroSubtitle || "");
  const [principalHeroImage, setPrincipalHeroImage] = useState(settings.principalHeroImage || "");
  const [principalPhoto, setPrincipalPhoto] = useState(settings.principalPhoto || "/placeholder.png");
  const [principalName, setPrincipalName] = useState(settings.principalName || "Aarti Singh");
  const [principalDesignation, setPrincipalDesignation] = useState(settings.principalDesignation || "Principal, Dayanand Arya Vidya");
  const [principalLeadershipTitle, setPrincipalLeadershipTitle] = useState(settings.principalLeadershipTitle || "Educational Leadership");
  const [principalLeadershipDesc, setPrincipalLeadershipDesc] = useState(settings.principalLeadershipDesc || "");
  const [principalWelcomeHeading, setPrincipalWelcomeHeading] = useState(settings.principalWelcomeHeading || "Welcome to Dayanand Arya Vidya Public School");
  const [principalGreeting, setPrincipalGreeting] = useState(settings.principalGreeting || "Dear parents,");
  const [principalParagraph1, setPrincipalParagraph1] = useState(settings.principalParagraph1 || "");
  const [principalParagraph2, setPrincipalParagraph2] = useState(settings.principalParagraph2 || "");
  const [principalParagraph3, setPrincipalParagraph3] = useState(settings.principalParagraph3 || "");
  const [principalQuote, setPrincipalQuote] = useState(settings.principalQuote || "");
  const [principalLocation, setPrincipalLocation] = useState(settings.principalLocation || "Mandar, Ranchi");

  // About Page CMS State
  const [aboutHeroBadge, setAboutHeroBadge] = useState(settings.aboutHeroBadge || "Dayanand Arya Vidya Public School");
  const [aboutHeroTitle, setAboutHeroTitle] = useState(settings.aboutHeroTitle || "About Our School");
  const [aboutHeroSubtitle, setAboutHeroSubtitle] = useState(settings.aboutHeroSubtitle || "");
  const [aboutHeroImage, setAboutHeroImage] = useState(settings.aboutHeroImage || "");

  const [aboutSectionBadge, setAboutSectionBadge] = useState(settings.aboutSectionBadge || "Institutional Vision");
  const [aboutSectionTitle, setAboutSectionTitle] = useState(settings.aboutSectionTitle || "About Our School");
  const [aboutSectionSubtitle, setAboutSectionSubtitle] = useState(settings.aboutSectionSubtitle || "");
  const [aboutHeading, setAboutHeading] = useState(settings.aboutHeading || "");
  const [aboutParagraph1, setAboutParagraph1] = useState(settings.aboutParagraph1 || "");
  const [aboutQuote, setAboutQuote] = useState(settings.aboutQuote || "");
  const [aboutMainImage, setAboutMainImage] = useState(settings.aboutMainImage || "/placeholder.png");
  const [aboutImages, setAboutImages] = useState<string[]>([]);

  const [visionTitle, setVisionTitle] = useState(settings.visionTitle || "Empowering Future Leaders");
  const [visionDescription, setVisionDescription] = useState(settings.visionDescription || "");
  const [missionTitle, setMissionTitle] = useState(settings.missionTitle || "Nurturing Excellence & Values");
  const [missionDescription, setMissionDescription] = useState(settings.missionDescription || "");

  // School Difference State
  const [differenceTitle, setDifferenceTitle] = useState(settings.differenceTitle || "The School with a Difference");
  const [differenceSubtitle, setDifferenceSubtitle] = useState(settings.differenceSubtitle || "");
  const [differenceParagraph1, setDifferenceParagraph1] = useState(settings.differenceParagraph1 || "");
  const [differenceParagraph2, setDifferenceParagraph2] = useState(settings.differenceParagraph2 || "");
  const [differenceParagraph3, setDifferenceParagraph3] = useState(settings.differenceParagraph3 || "");
  const [differenceCardHeading, setDifferenceCardHeading] = useState(settings.differenceCardHeading || "");
  const [differenceCardText, setDifferenceCardText] = useState(settings.differenceCardText || "");
  const [differenceCardFooter, setDifferenceCardFooter] = useState(settings.differenceCardFooter || "");

  // Salient Features State (CRUD)
  const [salientFeaturesTitle, setSalientFeaturesTitle] = useState(settings.salientFeaturesTitle || "Salient Features");
  const [salientFeaturesSubtitle, setSalientFeaturesSubtitle] = useState(settings.salientFeaturesSubtitle || "");
  const [salientFeatures, setSalientFeatures] = useState<SalientFeatureItem[]>([]);
  const [showSalientModal, setShowSalientModal] = useState(false);
  const [editingSalientIndex, setEditingSalientIndex] = useState<number | null>(null);
  const [salientForm, setSalientForm] = useState<{ title: string; desc: string; iconName: string; color: string }>({
    title: "",
    desc: "",
    iconName: "BrainCircuit",
    color: "bg-orange-100 text-orange-600",
  });

  const [aboutSaved, setAboutSaved] = useState(false);

  // General Info State
  const [genInfoHeroBadge, setGenInfoHeroBadge] = useState(settings.genInfoHeroBadge || "Dayanand Arya Vidya Public School");
  const [genInfoHeroTitle, setGenInfoHeroTitle] = useState(settings.genInfoHeroTitle || "General Information");
  const [genInfoHeroSubtitle, setGenInfoHeroSubtitle] = useState(settings.genInfoHeroSubtitle || "");
  const [genInfoHeroImage, setGenInfoHeroImage] = useState(settings.genInfoHeroImage || "");

  const [genInfoEvalTitle, setGenInfoEvalTitle] = useState(settings.genInfoEvalTitle || "Evaluation & Examination System");
  const [genInfoEvalSubtitle, setGenInfoEvalSubtitle] = useState(settings.genInfoEvalSubtitle || "");
  const [genInfoEvalCard1Heading, setGenInfoEvalCard1Heading] = useState(settings.genInfoEvalCard1Heading || "Continuous Evaluation Policy");
  const [genInfoEvalCard1Text1, setGenInfoEvalCard1Text1] = useState(settings.genInfoEvalCard1Text1 || "");
  const [genInfoEvalCard1Text2, setGenInfoEvalCard1Text2] = useState(settings.genInfoEvalCard1Text2 || "");
  const [genInfoEvalCard1Highlight, setGenInfoEvalCard1Highlight] = useState(settings.genInfoEvalCard1Highlight || "");

  const [genInfoEvalCard2Heading, setGenInfoEvalCard2Heading] = useState(settings.genInfoEvalCard2Heading || "Examination Rules");
  const [genInfoEvalCard2Sub, setGenInfoEvalCard2Sub] = useState(settings.genInfoEvalCard2Sub || "Two Main Sets Per Academic Year");
  const [genInfoEvalCard2Text, setGenInfoEvalCard2Text] = useState(settings.genInfoEvalCard2Text || "");
  const [genInfoEvalCard2Rule1, setGenInfoEvalCard2Rule1] = useState(settings.genInfoEvalCard2Rule1 || "");
  const [genInfoEvalCard2Rule2, setGenInfoEvalCard2Rule2] = useState(settings.genInfoEvalCard2Rule2 || "");

  const [genInfoPtmTitle, setGenInfoPtmTitle] = useState(settings.genInfoPtmTitle || "PTM, Promotions & Tuitions Policy");
  const [genInfoPtmSubtitle, setGenInfoPtmSubtitle] = useState(settings.genInfoPtmSubtitle || "");
  const [genInfoPtmCard1Title, setGenInfoPtmCard1Title] = useState(settings.genInfoPtmCard1Title || "Parent-Teachers Meetings");
  const [genInfoPtmCard1Desc, setGenInfoPtmCard1Desc] = useState(settings.genInfoPtmCard1Desc || "");
  const [genInfoPtmCard1Badge, setGenInfoPtmCard1Badge] = useState(settings.genInfoPtmCard1Badge || "");

  const [genInfoPtmCard2Title, setGenInfoPtmCard2Title] = useState(settings.genInfoPtmCard2Title || "Promotions Criteria");
  const [genInfoPtmCard2Desc, setGenInfoPtmCard2Desc] = useState(settings.genInfoPtmCard2Desc || "");
  const [genInfoPtmCard2Badge, setGenInfoPtmCard2Badge] = useState(settings.genInfoPtmCard2Badge || "");

  const [genInfoPtmCard3Title, setGenInfoPtmCard3Title] = useState(settings.genInfoPtmCard3Title || "In-House Extra Classes");
  const [genInfoPtmCard3Desc, setGenInfoPtmCard3Desc] = useState(settings.genInfoPtmCard3Desc || "");
  const [genInfoPtmCard3Badge, setGenInfoPtmCard3Badge] = useState(settings.genInfoPtmCard3Badge || "");

  const [genInfoPtmCard4Title, setGenInfoPtmCard4Title] = useState(settings.genInfoPtmCard4Title || "Private Tuitions Policy");
  const [genInfoPtmCard4Desc, setGenInfoPtmCard4Desc] = useState(settings.genInfoPtmCard4Desc || "");
  const [genInfoPtmCard4Badge, setGenInfoPtmCard4Badge] = useState(settings.genInfoPtmCard4Badge || "");

  const [genInfoTransTitle, setGenInfoTransTitle] = useState(settings.genInfoTransTitle || "School Transport Services");
  const [genInfoTransSubtitle, setGenInfoTransSubtitle] = useState(settings.genInfoTransSubtitle || "");
  const [genInfoTransHeading, setGenInfoTransHeading] = useState(settings.genInfoTransHeading || "School Transport Fleet");
  const [genInfoTransDesc, setGenInfoTransDesc] = useState(settings.genInfoTransDesc || "");
  const [genInfoTransImage, setGenInfoTransImage] = useState(settings.genInfoTransImage || "/placeholder.png");
  const [genInfoTransRule1, setGenInfoTransRule1] = useState(settings.genInfoTransRule1 || "");
  const [genInfoTransRule2, setGenInfoTransRule2] = useState(settings.genInfoTransRule2 || "");
  const [genInfoTransRule3, setGenInfoTransRule3] = useState(settings.genInfoTransRule3 || "");
  const [genInfoTransRule4, setGenInfoTransRule4] = useState(settings.genInfoTransRule4 || "");
  const [genInfoTransFooter, setGenInfoTransFooter] = useState(settings.genInfoTransFooter || "");

  const [genInfoFeeTitle, setGenInfoFeeTitle] = useState(settings.genInfoFeeTitle || "Fee Payment Schedule & Late Fee Policy");
  const [genInfoFeeSubtitle, setGenInfoFeeSubtitle] = useState(settings.genInfoFeeSubtitle || "");
  const [genInfoFeeDesc, setGenInfoFeeDesc] = useState(settings.genInfoFeeDesc || "");
  const [genInfoFeeLate1, setGenInfoFeeLate1] = useState(settings.genInfoFeeLate1 || "Rs. 100");
  const [genInfoFeeLate2, setGenInfoFeeLate2] = useState(settings.genInfoFeeLate2 || "Rs. 100 + Rs. 50 / day");

  const [genInfoWithdrawTitle, setGenInfoWithdrawTitle] = useState(settings.genInfoWithdrawTitle || "Withdrawal Policy & School Leaving Certificate");
  const [genInfoWithdrawSubtitle, setGenInfoWithdrawSubtitle] = useState(settings.genInfoWithdrawSubtitle || "");
  const [genInfoWithdrawText1, setGenInfoWithdrawText1] = useState(settings.genInfoWithdrawText1 || "");
  const [genInfoWithdrawText2, setGenInfoWithdrawText2] = useState(settings.genInfoWithdrawText2 || "");
  const [genInfoWithdrawHighlight, setGenInfoWithdrawHighlight] = useState(settings.genInfoWithdrawHighlight || "");

  const [genInfoPtaTitle, setGenInfoPtaTitle] = useState(settings.genInfoPtaTitle || "Communication Between School & Parents (PTA)");
  const [genInfoPtaSubtitle, setGenInfoPtaSubtitle] = useState(settings.genInfoPtaSubtitle || "");
  const [genInfoPtaCard1Title, setGenInfoPtaCard1Title] = useState(settings.genInfoPtaCard1Title || "Contact Info Update");
  const [genInfoPtaCard1Desc, setGenInfoPtaCard1Desc] = useState(settings.genInfoPtaCard1Desc || "");
  const [genInfoPtaCard2Title, setGenInfoPtaCard2Title] = useState(settings.genInfoPtaCard2Title || "Appointments & Letters");
  const [genInfoPtaCard2Desc, setGenInfoPtaCard2Desc] = useState(settings.genInfoPtaCard2Desc || "");
  const [genInfoPtaCard3Title, setGenInfoPtaCard3Title] = useState(settings.genInfoPtaCard3Title || "Circular Acknowledgement");
  const [genInfoPtaCard3Desc, setGenInfoPtaCard3Desc] = useState(settings.genInfoPtaCard3Desc || "");
  const [genInfoPtaCard4Title, setGenInfoPtaCard4Title] = useState(settings.genInfoPtaCard4Title || "School Diary Remarks");
  const [genInfoPtaCard4Desc, setGenInfoPtaCard4Desc] = useState(settings.genInfoPtaCard4Desc || "");
  const [genInfoPtaBanner, setGenInfoPtaBanner] = useState(settings.genInfoPtaBanner || "");
  const [genInfoPtaPhone1, setGenInfoPtaPhone1] = useState(settings.genInfoPtaPhone1 || "94313-83057");
  const [genInfoPtaPhone2, setGenInfoPtaPhone2] = useState(settings.genInfoPtaPhone2 || "87576-74340");

  const [genInfoSaved, setGenInfoSaved] = useState(false);

  // Admission Enquiries State
  interface EnquiryRecord {
    id: string;
    studentName: string;
    parentName: string;
    phone: string;
    email: string;
    grade: string;
    address?: string;
    status: string;
    createdAt: string;
  }
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [enquirySearch, setEnquirySearch] = useState("");
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState("All");

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("/api/enquiries");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.enquiries)) {
          setEnquiries(data.enquiries);
        }
      }
    } catch (e) {}
  };

  const handleUpdateEnquiryStatus = async (id: string, status: string) => {
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
    try {
      await fetch("/api/enquiries", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
    } catch (e) {}
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (confirm("Are you sure you want to delete this admission enquiry?")) {
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      try {
        await fetch(`/api/enquiries?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      } catch (e) {}
    }
  };

  // Academic Programs State (CRUD)
  const [programSearch, setProgramSearch] = useState("");
  const [showProgramModal, setShowProgramModal] = useState(false);
  const [editingProgram, setEditingProgram] = useState<ProgramItem | null>(null);
  const [programForm, setProgramForm] = useState<{
    title: string;
    grades: string;
    ageGroup: string;
    description: string;
    featuresText: string;
    image: string;
    iconName: string;
  }>({
    title: "",
    grades: "",
    ageGroup: "",
    description: "",
    featuresText: "",
    image: "",
    iconName: "BookOpen",
  });
  const [programsBadge, setProgramsBadge] = useState(settings.programsBadge || "Educational Journey");
  const [programsTitle, setProgramsTitle] = useState(settings.programsTitle || "Academic Programs Tailored for Growth");
  const [programsSubtitle, setProgramsSubtitle] = useState(settings.programsSubtitle || "From early childhood discovery to senior secondary board mastery, our curriculum empowers learners at every developmental milestone.");
  const [programHeadingSaved, setProgramHeadingSaved] = useState(false);

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
  const [facultySearch, setFacultySearch] = useState("");
  const [showFacultyModal, setShowFacultyModal] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<FacultyMember | null>(null);
  const [facultyForm, setFacultyForm] = useState<{
    name: string;
    designation: string;
    qualification: string;
    subjectTaught: string;
    image: string;
    gender: string;
    oasisId: string;
  }>({
    name: "",
    designation: "TGT",
    qualification: "",
    subjectTaught: "",
    image: "/placeholder.png",
    gender: "F",
    oasisId: "",
  });

  // News & Announcements State (CRUD)
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
    let isMounted = true;
    async function checkAuth() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      try {
        const res = await fetch("/api/auth/nextauth", {
          signal: controller.signal,
          cache: "no-store"
        });
        clearTimeout(timeoutId);

        if (!isMounted) return;

        if (res.ok) {
          setIsAuthenticated(true);
          fetchEnquiries();
        } else {
          setIsAuthenticated(false);
          router.replace("/admin/login");
        }
      } catch (e) {
        if (!isMounted) return;
        setIsAuthenticated(false);
        router.replace("/admin/login");
      }
    }
    checkAuth();
    return () => {
      isMounted = false;
    };
  }, [router]);

  useEffect(() => {
    setSchoolLogo(settings.schoolLogo);
    setHeroImage(settings.heroImage);
    setHeroTitle(settings.heroTitle);
    setHeroSubhead(settings.heroSubhead);
    setTickerText(settings.tickerText);
    setProgramsBadge(settings.programsBadge || "Educational Journey");
    setProgramsTitle(settings.programsTitle || "Academic Programs Tailored for Growth");
    setProgramsSubtitle(settings.programsSubtitle || "From early childhood discovery to senior secondary board mastery, our curriculum empowers learners at every developmental milestone.");

    setAboutHeroBadge(settings.aboutHeroBadge || "Dayanand Arya Vidya Public School");
    setAboutHeroTitle(settings.aboutHeroTitle || "About Our School");
    setAboutHeroSubtitle(settings.aboutHeroSubtitle || "");
    setAboutHeroImage(settings.aboutHeroImage || "");

    setAboutSectionBadge(settings.aboutSectionBadge || "Institutional Vision");
    setAboutSectionTitle(settings.aboutSectionTitle || "About Our School");
    setAboutSectionSubtitle(settings.aboutSectionSubtitle || "");
    setAboutHeading(settings.aboutHeading || "");
    setAboutParagraph1(settings.aboutParagraph1 || "");
    setAboutQuote(settings.aboutQuote || "");
    setAboutMainImage(settings.aboutMainImage || "/placeholder.png");

    try {
      if (settings.aboutImagesJson) {
        const parsed = JSON.parse(settings.aboutImagesJson);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAboutImages(parsed);
        } else {
          setAboutImages(settings.aboutMainImage ? [settings.aboutMainImage] : ["/placeholder.png"]);
        }
      } else {
        setAboutImages(settings.aboutMainImage ? [settings.aboutMainImage] : ["/placeholder.png"]);
      }
    } catch (e) {
      setAboutImages(settings.aboutMainImage ? [settings.aboutMainImage] : ["/placeholder.png"]);
    }

    setVisionTitle(settings.visionTitle || "Empowering Future Leaders");
    setVisionDescription(settings.visionDescription || "");
    setMissionTitle(settings.missionTitle || "Nurturing Excellence & Values");
    setMissionDescription(settings.missionDescription || "");

    setDifferenceTitle(settings.differenceTitle || "The School with a Difference");
    setDifferenceSubtitle(settings.differenceSubtitle || "");
    setDifferenceParagraph1(settings.differenceParagraph1 || "");
    setDifferenceParagraph2(settings.differenceParagraph2 || "");
    setDifferenceParagraph3(settings.differenceParagraph3 || "");
    setDifferenceCardHeading(settings.differenceCardHeading || "Enlightening Young Minds");
    setDifferenceCardText(settings.differenceCardText || "");
    setDifferenceCardFooter(settings.differenceCardFooter || "");

    setSalientFeaturesTitle(settings.salientFeaturesTitle || "Salient Features");
    setSalientFeaturesSubtitle(settings.salientFeaturesSubtitle || "");

    try {
      if (settings.salientFeaturesJson) {
        const parsed = JSON.parse(settings.salientFeaturesJson);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSalientFeatures(parsed);
        } else {
          setSalientFeatures(SALIENT_FEATURES_DATA);
        }
      } else {
        setSalientFeatures(SALIENT_FEATURES_DATA);
      }
    } catch (e) {
      setSalientFeatures(SALIENT_FEATURES_DATA);
    }

    // General Info Sync
    setGenInfoHeroBadge(settings.genInfoHeroBadge || "Dayanand Arya Vidya Public School");
    setGenInfoHeroTitle(settings.genInfoHeroTitle || "General Information");
    setGenInfoHeroSubtitle(settings.genInfoHeroSubtitle || "");
    setGenInfoHeroImage(settings.genInfoHeroImage || "");

    setGenInfoEvalTitle(settings.genInfoEvalTitle || "Evaluation & Examination System");
    setGenInfoEvalSubtitle(settings.genInfoEvalSubtitle || "");
    setGenInfoEvalCard1Heading(settings.genInfoEvalCard1Heading || "Continuous Evaluation Policy");
    setGenInfoEvalCard1Text1(settings.genInfoEvalCard1Text1 || "");
    setGenInfoEvalCard1Text2(settings.genInfoEvalCard1Text2 || "");
    setGenInfoEvalCard1Highlight(settings.genInfoEvalCard1Highlight || "");

    setGenInfoEvalCard2Heading(settings.genInfoEvalCard2Heading || "Examination Rules");
    setGenInfoEvalCard2Sub(settings.genInfoEvalCard2Sub || "Two Main Sets Per Academic Year");
    setGenInfoEvalCard2Text(settings.genInfoEvalCard2Text || "");
    setGenInfoEvalCard2Rule1(settings.genInfoEvalCard2Rule1 || "");
    setGenInfoEvalCard2Rule2(settings.genInfoEvalCard2Rule2 || "");

    setGenInfoPtmTitle(settings.genInfoPtmTitle || "PTM, Promotions & Tuitions Policy");
    setGenInfoPtmSubtitle(settings.genInfoPtmSubtitle || "");
    setGenInfoPtmCard1Title(settings.genInfoPtmCard1Title || "Parent-Teachers Meetings");
    setGenInfoPtmCard1Desc(settings.genInfoPtmCard1Desc || "");
    setGenInfoPtmCard1Badge(settings.genInfoPtmCard1Badge || "");

    setGenInfoPtmCard2Title(settings.genInfoPtmCard2Title || "Promotions Criteria");
    setGenInfoPtmCard2Desc(settings.genInfoPtmCard2Desc || "");
    setGenInfoPtmCard2Badge(settings.genInfoPtmCard2Badge || "");

    setGenInfoPtmCard3Title(settings.genInfoPtmCard3Title || "In-House Extra Classes");
    setGenInfoPtmCard3Desc(settings.genInfoPtmCard3Desc || "");
    setGenInfoPtmCard3Badge(settings.genInfoPtmCard3Badge || "");

    setGenInfoPtmCard4Title(settings.genInfoPtmCard4Title || "Private Tuitions Policy");
    setGenInfoPtmCard4Desc(settings.genInfoPtmCard4Desc || "");
    setGenInfoPtmCard4Badge(settings.genInfoPtmCard4Badge || "");

    setGenInfoTransTitle(settings.genInfoTransTitle || "School Transport Services");
    setGenInfoTransSubtitle(settings.genInfoTransSubtitle || "");
    setGenInfoTransHeading(settings.genInfoTransHeading || "School Transport Fleet");
    setGenInfoTransDesc(settings.genInfoTransDesc || "");
    setGenInfoTransImage(settings.genInfoTransImage || "/placeholder.png");
    setGenInfoTransRule1(settings.genInfoTransRule1 || "");
    setGenInfoTransRule2(settings.genInfoTransRule2 || "");
    setGenInfoTransRule3(settings.genInfoTransRule3 || "");
    setGenInfoTransRule4(settings.genInfoTransRule4 || "");
    setGenInfoTransFooter(settings.genInfoTransFooter || "");

    setGenInfoFeeTitle(settings.genInfoFeeTitle || "Fee Payment Schedule & Late Fee Policy");
    setGenInfoFeeSubtitle(settings.genInfoFeeSubtitle || "");
    setGenInfoFeeDesc(settings.genInfoFeeDesc || "");
    setGenInfoFeeLate1(settings.genInfoFeeLate1 || "Rs. 100");
    setGenInfoFeeLate2(settings.genInfoFeeLate2 || "Rs. 100 + Rs. 50 / day");

    setGenInfoWithdrawTitle(settings.genInfoWithdrawTitle || "Withdrawal Policy & School Leaving Certificate");
    setGenInfoWithdrawSubtitle(settings.genInfoWithdrawSubtitle || "");
    setGenInfoWithdrawText1(settings.genInfoWithdrawText1 || "");
    setGenInfoWithdrawText2(settings.genInfoWithdrawText2 || "");
    setGenInfoWithdrawHighlight(settings.genInfoWithdrawHighlight || "");

    setGenInfoPtaTitle(settings.genInfoPtaTitle || "Communication Between School & Parents (PTA)");
    setGenInfoPtaSubtitle(settings.genInfoPtaSubtitle || "");
    setGenInfoPtaCard1Title(settings.genInfoPtaCard1Title || "Contact Info Update");
    setGenInfoPtaCard1Desc(settings.genInfoPtaCard1Desc || "");
    setGenInfoPtaCard2Title(settings.genInfoPtaCard2Title || "Appointments & Letters");
    setGenInfoPtaCard2Desc(settings.genInfoPtaCard2Desc || "");
    setGenInfoPtaCard3Title(settings.genInfoPtaCard3Title || "Circular Acknowledgement");
    setGenInfoPtaCard3Desc(settings.genInfoPtaCard3Desc || "");
    setGenInfoPtaCard4Title(settings.genInfoPtaCard4Title || "School Diary Remarks");
    setGenInfoPtaCard4Desc(settings.genInfoPtaCard4Desc || "");
    setGenInfoPtaBanner(settings.genInfoPtaBanner || "");
    setGenInfoPtaPhone1(settings.genInfoPtaPhone1 || "94313-83057");
    setGenInfoPtaPhone2(settings.genInfoPtaPhone2 || "87576-74340");

    setPrincipalHeroBadge(settings.principalHeroBadge || "Dayanand Arya Vidya Public School");
    setPrincipalHeroTitle(settings.principalHeroTitle || "Principal's Message");
    setPrincipalHeroSubtitle(settings.principalHeroSubtitle || "");
    setPrincipalHeroImage(settings.principalHeroImage || "");
    setPrincipalPhoto(settings.principalPhoto || "/placeholder.png");
    setPrincipalName(settings.principalName || "Aarti Singh");
    setPrincipalDesignation(settings.principalDesignation || "Principal, Dayanand Arya Vidya");
    setPrincipalLeadershipTitle(settings.principalLeadershipTitle || "Educational Leadership");
    setPrincipalLeadershipDesc(settings.principalLeadershipDesc || "");
    setPrincipalWelcomeHeading(settings.principalWelcomeHeading || "Welcome to Dayanand Arya Vidya Public School");
    setPrincipalGreeting(settings.principalGreeting || "Dear parents,");
    setPrincipalParagraph1(settings.principalParagraph1 || "");
    setPrincipalParagraph2(settings.principalParagraph2 || "");
    setPrincipalParagraph3(settings.principalParagraph3 || "");
    setPrincipalQuote(settings.principalQuote || "");
    setPrincipalLocation(settings.principalLocation || "Mandar, Ranchi");

    setDirectorHeroBadge(settings.directorHeroBadge || "Dayanand Arya Vidya Public School");
    setDirectorHeroTitle(settings.directorHeroTitle || "Director's Message");
    setDirectorHeroSubtitle(settings.directorHeroSubtitle || "");
    setDirectorHeroImage(settings.directorHeroImage || "");
    setDirectorName(settings.directorName || "Er. Alok Nath Verma");
    setDirectorDesignation(settings.directorDesignation || "Director & Managing Trustee");
    setDirectorQualification(settings.directorQualification || "M.Tech (IIT Kanpur) | Senior Educationist");
    setDirectorImage(settings.directorImage || "/placeholder.png");
    setDirectorHeading(settings.directorHeading || "Empowering Young Minds for a Brighter Tomorrow");
    setDirectorMessage1(settings.directorMessage1 || "");
    setDirectorMessage2(settings.directorMessage2 || "");
    setDirectorMessage3(settings.directorMessage3 || "");
    setDirectorExperience(settings.directorExperience || "25+ Years of Educational Leadership & Vision");
    setDirectorLeadershipDesc(settings.directorLeadershipDesc || "");
    setDirectorLocation(settings.directorLocation || "Mandar, Ranchi");

    setFacultyHeroBadge(settings.facultyHeroBadge || "Dayanand Arya Vidya Public School");
    setFacultyHeroTitle(settings.facultyHeroTitle || "Faculty & Teaching Staff");
    setFacultyHeroSubtitle(settings.facultyHeroSubtitle || "");
    setFacultyHeroImage(settings.facultyHeroImage || "");
    setFacultyStat1Value(settings.facultyStat1Value || "50+");
    setFacultyStat1Label(settings.facultyStat1Label || "Certified Faculty");
    setFacultyStat2Value(settings.facultyStat2Value || "100%");
    setFacultyStat2Label(settings.facultyStat2Label || "CBSE / OASIS Registered");
    setFacultyStat3Value(settings.facultyStat3Value || "12:1");
    setFacultyStat3Label(settings.facultyStat3Label || "Student-Teacher Ratio");
    setFacultyStat4Value(settings.facultyStat4Value || "M.A / M.Sc / B.Ed");
    setFacultyStat4Label(settings.facultyStat4Label || "Qualified Pedagogy");
  }, [settings]);

  const handleFacultyHeroImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "faculty-hero" });
        setFacultyHeroImage(webpUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSaveFacultyPage = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      facultyHeroBadge,
      facultyHeroTitle,
      facultyHeroSubtitle,
      facultyHeroImage,
      facultyStat1Value,
      facultyStat1Label,
      facultyStat2Value,
      facultyStat2Label,
      facultyStat3Value,
      facultyStat3Label,
      facultyStat4Value,
      facultyStat4Label,
    });
    setFacultySaved(true);
    setTimeout(() => setFacultySaved(false), 4000);
  };

  const handleDirectorHeroImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "director-hero" });
        setDirectorHeroImage(webpUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDirectorImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "director-photo" });
        setDirectorImage(webpUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSaveDirectorPage = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      directorHeroBadge,
      directorHeroTitle,
      directorHeroSubtitle,
      directorHeroImage,
      directorName,
      directorDesignation,
      directorQualification,
      directorImage,
      directorHeading,
      directorMessage1,
      directorMessage2,
      directorMessage3,
      directorExperience,
      directorLeadershipDesc,
      directorLocation,
    });
    setDirectorSaved(true);
    setTimeout(() => setDirectorSaved(false), 4000);
  };

  const handlePrincipalHeroImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "principal-hero" });
        setPrincipalHeroImage(webpUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handlePrincipalPhotoUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "principal-photo" });
        setPrincipalPhoto(webpUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSavePrincipalPage = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      principalHeroBadge,
      principalHeroTitle,
      principalHeroSubtitle,
      principalHeroImage,
      principalPhoto,
      principalName,
      principalDesignation,
      principalLeadershipTitle,
      principalLeadershipDesc,
      principalWelcomeHeading,
      principalGreeting,
      principalParagraph1,
      principalParagraph2,
      principalParagraph3,
      principalQuote,
      principalLocation,
    });
    setPrincipalSaved(true);
    setTimeout(() => setPrincipalSaved(false), 4000);
  };

  const handleGenInfoHeroImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "geninfo-hero" });
        setGenInfoHeroImage(webpUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleGenInfoTransImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "geninfo-trans" });
        setGenInfoTransImage(webpUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSaveGenInfoPage = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      genInfoHeroBadge,
      genInfoHeroTitle,
      genInfoHeroSubtitle,
      genInfoHeroImage,
      genInfoEvalTitle,
      genInfoEvalSubtitle,
      genInfoEvalCard1Heading,
      genInfoEvalCard1Text1,
      genInfoEvalCard1Text2,
      genInfoEvalCard1Highlight,
      genInfoEvalCard2Heading,
      genInfoEvalCard2Sub,
      genInfoEvalCard2Text,
      genInfoEvalCard2Rule1,
      genInfoEvalCard2Rule2,
      genInfoPtmTitle,
      genInfoPtmSubtitle,
      genInfoPtmCard1Title,
      genInfoPtmCard1Desc,
      genInfoPtmCard1Badge,
      genInfoPtmCard2Title,
      genInfoPtmCard2Desc,
      genInfoPtmCard2Badge,
      genInfoPtmCard3Title,
      genInfoPtmCard3Desc,
      genInfoPtmCard3Badge,
      genInfoPtmCard4Title,
      genInfoPtmCard4Desc,
      genInfoPtmCard4Badge,
      genInfoTransTitle,
      genInfoTransSubtitle,
      genInfoTransHeading,
      genInfoTransDesc,
      genInfoTransImage,
      genInfoTransRule1,
      genInfoTransRule2,
      genInfoTransRule3,
      genInfoTransRule4,
      genInfoTransFooter,
      genInfoFeeTitle,
      genInfoFeeSubtitle,
      genInfoFeeDesc,
      genInfoFeeLate1,
      genInfoFeeLate2,
      genInfoWithdrawTitle,
      genInfoWithdrawSubtitle,
      genInfoWithdrawText1,
      genInfoWithdrawText2,
      genInfoWithdrawHighlight,
      genInfoPtaTitle,
      genInfoPtaSubtitle,
      genInfoPtaCard1Title,
      genInfoPtaCard1Desc,
      genInfoPtaCard2Title,
      genInfoPtaCard2Desc,
      genInfoPtaCard3Title,
      genInfoPtaCard3Desc,
      genInfoPtaCard4Title,
      genInfoPtaCard4Desc,
      genInfoPtaBanner,
      genInfoPtaPhone1,
      genInfoPtaPhone2,
    });
    setGenInfoSaved(true);
    setTimeout(() => setGenInfoSaved(false), 4000);
  };

  const handleAboutHeroImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const scale = Math.min(1, 1200 / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressed = canvas.toDataURL("image/jpeg", 0.85);
          setAboutHeroImage(compressed);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAboutImagesUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new window.Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const scale = Math.min(1, 1000 / img.width);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressed = canvas.toDataURL("image/jpeg", 0.85);
            setAboutImages((prev) => [...prev, compressed]);
          };
          img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveAboutImage = (indexToRemove: number) => {
    setAboutImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Salient Features CRUD Handlers
  const handleAddSalientFeature = () => {
    setEditingSalientIndex(null);
    setSalientForm({ title: "", desc: "", iconName: "BrainCircuit", color: "bg-orange-100 text-orange-600" });
    setShowSalientModal(true);
  };

  const handleEditSalientFeature = (index: number) => {
    const item = salientFeatures[index];
    setEditingSalientIndex(index);
    setSalientForm({
      title: item.title,
      desc: item.desc,
      iconName: item.iconName || "BrainCircuit",
      color: item.color || "bg-orange-100 text-orange-600",
    });
    setShowSalientModal(true);
  };

  const handleDeleteSalientFeature = (index: number) => {
    if (confirm("Are you sure you want to delete this feature card?")) {
      setSalientFeatures((prev) => prev.filter((_, idx) => idx !== index));
    }
  };

  const handleSaveSalientModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salientForm.title.trim()) return;

    if (editingSalientIndex !== null) {
      setSalientFeatures((prev) =>
        prev.map((item, idx) => (idx === editingSalientIndex ? { ...salientForm } : item))
      );
    } else {
      setSalientFeatures((prev) => [...prev, { ...salientForm }]);
    }
    setShowSalientModal(false);
  };

  const handleSaveAboutPage = (e: React.FormEvent) => {
    e.preventDefault();
    const imagesJson = JSON.stringify(aboutImages);
    const mainImg = aboutImages.length > 0 ? aboutImages[0] : "/placeholder.png";
    const salientJson = JSON.stringify(salientFeatures);

    updateSettings({
      aboutHeroBadge,
      aboutHeroTitle,
      aboutHeroSubtitle,
      aboutHeroImage,
      aboutSectionBadge,
      aboutSectionTitle,
      aboutSectionSubtitle,
      aboutHeading,
      aboutParagraph1,
      aboutQuote,
      aboutMainImage: mainImg,
      aboutImagesJson: imagesJson,
      visionTitle,
      visionDescription,
      missionTitle,
      missionDescription,
      differenceTitle,
      differenceSubtitle,
      differenceParagraph1,
      differenceParagraph2,
      differenceParagraph3,
      differenceCardHeading,
      differenceCardText,
      differenceCardFooter,
      salientFeaturesTitle,
      salientFeaturesSubtitle,
      salientFeaturesJson: salientJson,
    });
    setAboutSaved(true);
    setTimeout(() => setAboutSaved(false), 4000);
  };

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
  const handleSaveBranding = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await updateSettings({
      heroTitle,
      heroSubhead,
      tickerText,
      heroImage,
      schoolLogo,
    });
    if (success) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 4000);
    } else {
      alert("Error: Database update failed. Please check Vercel environment variables for DATABASE_URL.");
    }
  };

  const handleLogoUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "logo", maxWidth: 800, quality: 0.9 });
        setSchoolLogo(webpUrl);
        const success = await updateSettings({ schoolLogo: webpUrl });
        if (success) {
          setSavedSuccess(true);
          setTimeout(() => setSavedSuccess(false), 4000);
        } else {
          alert("Error saving logo to database. Please check DATABASE_URL in Vercel settings.");
        }
      } catch (err) {
        console.error("Logo WebP upload failed:", err);
        alert("Image processing failed: " + (err as Error).message);
      }
    }
  };

  const handleHeroImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const webpUrl = await convertAndUploadWebP(file, { category: "hero", maxWidth: 1400, quality: 0.85 });
        setHeroImage(webpUrl);
        const success = await updateSettings({ heroImage: webpUrl });
        if (success) {
          setSavedSuccess(true);
          setTimeout(() => setSavedSuccess(false), 4000);
        } else {
          alert("Error saving hero banner image to database. Please check DATABASE_URL in Vercel settings.");
        }
      } catch (err) {
        console.error("Hero image WebP upload failed:", err);
        alert("Image processing failed: " + (err as Error).message);
      }
    }
  };

  const handleTeacherPhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxDim = 500;
          let width = img.width;
          let height = img.height;
          if (width > height) {
            if (width > maxDim) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            }
          } else {
            if (height > maxDim) {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(img, 0, 0, width, height);
          }
          const compressed = canvas.toDataURL("image/jpeg", 0.75);
          setFacultyForm((prev) => ({ ...prev, image: compressed }));
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveFaculty = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingFaculty) {
      updateFaculty(Number(editingFaculty.sno), {
        name: facultyForm.name,
        designation: facultyForm.designation as any,
        highestQualification: facultyForm.qualification,
        subjectTaught: facultyForm.subjectTaught || "General",
        image: facultyForm.image || "/placeholder.png",
        gender: (facultyForm.gender as any) || "F",
        oasisId: facultyForm.oasisId || `OASIS-${Date.now()}`,
      });
    } else {
      addFaculty({
        name: facultyForm.name,
        gender: (facultyForm.gender as any) || "F",
        oasisId: facultyForm.oasisId || `OASIS-${Date.now()}`,
        designation: facultyForm.designation as any,
        highestQualification: facultyForm.qualification,
        subjectTaught: facultyForm.subjectTaught || "General",
        image: facultyForm.image || "/placeholder.png",
      });
    }
    setShowFacultyModal(false);
    setEditingFaculty(null);
    setFacultyForm({
      name: "",
      designation: "TGT",
      qualification: "",
      subjectTaught: "",
      image: "/placeholder.png",
      gender: "F",
      oasisId: "",
    });
  };

  const handleDeleteFaculty = (sno: number) => {
    if (confirm("Are you sure you want to remove this faculty member?")) {
      deleteFaculty(sno);
    }
  };

  // --- NEWS CRUD ACTIONS ---
  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      updateNews(editingNews.id, newsForm);
    } else {
      addNews({
        ...newsForm,
        author: "Academic Coordinator",
        readTime: "3 min read",
      });
    }
    setShowNewsModal(false);
    setEditingNews(null);
    setNewsForm({
      title: "",
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      category: "Academic",
      excerpt: "",
      fullContent: "",
      image: "/placeholder.png",
    });
  };

  const handleDeleteNews = (id: string) => {
    if (confirm("Are you sure you want to delete this news article?")) {
      deleteNews(id);
    }
  };

  // --- GALLERY CRUD ACTIONS ---
  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    addGallery(galleryForm);
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
      deleteGallery(id);
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

  // --- ACADEMIC PROGRAMS HANDLERS ---
  const handleSaveProgramHeadings = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSettings({
      programsBadge,
      programsTitle,
      programsSubtitle,
    });
    setProgramHeadingSaved(true);
    setTimeout(() => setProgramHeadingSaved(false), 3000);
  };

  const handleOpenAddProgram = () => {
    setEditingProgram(null);
    setProgramForm({
      title: "",
      grades: "",
      ageGroup: "",
      description: "",
      featuresText: "",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      iconName: "BookOpen",
    });
    setShowProgramModal(true);
  };

  const handleOpenEditProgram = (prog: ProgramItem) => {
    setEditingProgram(prog);
    setProgramForm({
      title: prog.title,
      grades: prog.grades,
      ageGroup: prog.ageGroup,
      description: prog.description,
      featuresText: (Array.isArray(prog.features) ? prog.features : []).join("\n"),
      image: prog.image,
      iconName: prog.iconName || "BookOpen",
    });
    setShowProgramModal(true);
  };

  const handleProgramImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
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
        const MAX_WIDTH = 800;
        const scale = Math.min(1, MAX_WIDTH / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressed = canvas.toDataURL("image/jpeg", 0.7);
        setProgramForm((prev) => ({ ...prev, image: compressed }));
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProgram = (e: React.FormEvent) => {
    e.preventDefault();
    const features = programForm.featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    const programPayload = {
      title: programForm.title,
      grades: programForm.grades,
      ageGroup: programForm.ageGroup,
      description: programForm.description,
      features: features.length > 0 ? features : ["Montessori & Play-Way Method", "Phonetics & Early Numeracy"],
      image: programForm.image || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      iconName: programForm.iconName,
    };

    const parseRes = ProgramSchema.safeParse(programPayload);
    if (!parseRes.success) {
      alert(parseRes.error.issues[0].message);
      return;
    }

    if (editingProgram) {
      updateProgram(editingProgram.id, programPayload);
    } else {
      addProgram(programPayload);
    }
    setShowProgramModal(false);
    setEditingProgram(null);
  };

  const handleDeleteProgramItem = (id: string) => {
    if (confirm("Are you sure you want to delete this academic program?")) {
      deleteProgram(id);
    }
  };

  // Filtered Programs List
  const filteredPrograms = programs.filter((p) => {
    const q = programSearch.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.grades.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  if (isAuthenticated === null || isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-900">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {isAuthenticated === null ? "Verifying Admin Session..." : "Redirecting to Admin Login..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      
      {/* TOP ADMIN HEADER BAR */}
      <header className="h-20 bg-white border-b border-gray-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black shadow-md shrink-0">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 leading-none">
              School Admin Dashboard
            </h1>
            <p className="text-[11px] font-bold text-orange-600 leading-tight mt-1 flex items-center gap-1.5">
              <span>Dayanand Arya Vidya Public School</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 font-medium">Mandar, Ranchi</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 text-xs font-bold transition-all shadow-sm"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
          </Link>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-black transition-all shadow-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* DASHBOARD BODY WITH STRUCTURED SIDEBAR */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-72 bg-white border-r border-gray-200 p-4 space-y-6 shrink-0 md:sticky md:top-20 md:h-[calc(100vh-80px)] md:overflow-y-auto">
          
          {/* SECTION 1: CORE DASHBOARD */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 px-3 block">
              Overview & Branding
            </span>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "overview"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "overview" ? "bg-slate-950/10 text-slate-950" : "bg-orange-50 text-orange-600"}`}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>Dashboard Overview</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("branding")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "branding"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "branding" ? "bg-slate-950/10 text-slate-950" : "bg-amber-50 text-amber-600"}`}>
                    <Settings className="w-4 h-4" />
                  </div>
                  <span>Header & Branding CMS</span>
                </div>
              </button>
            </div>
          </div>

          {/* SECTION 2: INSTITUTIONAL PAGES */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 px-3 block">
              Pages & Leadership CMS
            </span>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("about")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "about"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "about" ? "bg-slate-950/10 text-slate-950" : "bg-blue-50 text-blue-600"}`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <span>About Us Page CMS</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("geninfo")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "geninfo"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "geninfo" ? "bg-slate-950/10 text-slate-950" : "bg-cyan-50 text-cyan-600"}`}>
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>General Info Page CMS</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("director")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "director"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "director" ? "bg-slate-950/10 text-slate-950" : "bg-orange-50 text-orange-600"}`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Director's Message</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("principal")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "principal"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "principal" ? "bg-slate-950/10 text-slate-950" : "bg-amber-50 text-amber-600"}`}>
                    <Award className="w-4 h-4" />
                  </div>
                  <span>Principal's Message</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("rules")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "rules"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "rules" ? "bg-slate-950/10 text-slate-950" : "bg-purple-50 text-purple-600"}`}>
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>Rules & Policies</span>
                </div>
              </button>
            </div>
          </div>

          {/* SECTION 3: ACADEMICS & ADMISSIONS */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 px-3 block">
              Academics & Admissions
            </span>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("programs")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "programs"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "programs" ? "bg-slate-950/10 text-slate-950" : "bg-emerald-50 text-emerald-600"}`}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span>Academic Programs</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === "programs" ? "bg-slate-950/10 text-slate-950" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
                  {programs.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("faculty")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "faculty"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "faculty" ? "bg-slate-950/10 text-slate-950" : "bg-indigo-50 text-indigo-600"}`}>
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Faculty Directory</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === "faculty" ? "bg-slate-950/10 text-slate-950" : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`}>
                  {facultyList.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("notices")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "notices"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "notices" ? "bg-slate-950/10 text-slate-950" : "bg-amber-50 text-amber-600"}`}>
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>Calendar & Notices</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === "notices" ? "bg-slate-950/10 text-slate-950" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>
                  {notices.length}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("enquiries");
                  fetchEnquiries();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "enquiries"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "enquiries" ? "bg-slate-950/10 text-slate-950" : "bg-rose-50 text-rose-600"}`}>
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span>Admission Enquiries</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === "enquiries" ? "bg-slate-950/10 text-slate-950" : "bg-rose-50 text-rose-700 border border-rose-200"}`}>
                  {enquiries.length}
                </span>
              </button>
            </div>
          </div>

          {/* SECTION 4: MEDIA & HONORS */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 px-3 block">
              Media & Honors
            </span>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("gallery")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "gallery"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "gallery" ? "bg-slate-950/10 text-slate-950" : "bg-cyan-50 text-cyan-600"}`}>
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <span>Photo Gallery</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === "gallery" ? "bg-slate-950/10 text-slate-950" : "bg-cyan-50 text-cyan-700 border border-cyan-200"}`}>
                  {galleryList.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("achievements")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "achievements"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "achievements" ? "bg-slate-950/10 text-slate-950" : "bg-amber-50 text-amber-600"}`}>
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span>Wall of Honor</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === "achievements" ? "bg-slate-950/10 text-slate-950" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>
                  {achievements.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("news")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "news"
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 scale-[1.01]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === "news" ? "bg-slate-950/10 text-slate-950" : "bg-teal-50 text-teal-600"}`}>
                    <Newspaper className="w-4 h-4" />
                  </div>
                  <span>News & Articles</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeTab === "news" ? "bg-slate-950/10 text-slate-950" : "bg-teal-50 text-teal-700 border border-teal-200"}`}>
                  {newsList.length}
                </span>
              </button>
            </div>
          </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div
                  onClick={() => setActiveTab("programs")}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase">Programs</span>
                    <GraduationCap className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-black text-gray-900">{programs.length}</p>
                  <p className="text-[11px] text-orange-400 font-bold">Academic Wings CMS</p>
                </div>

                <div
                  onClick={() => setActiveTab("notices")}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all cursor-pointer shadow-sm space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase">Calendar Notices</span>
                    <Calendar className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-black text-gray-900">{notices.length}</p>
                  <p className="text-[11px] text-orange-400 font-bold">Active Circulars & Events</p>
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
                  <p className="text-[11px] text-amber-400 font-bold">Published Articles</p>
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
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save Branding Changes
                </button>
              </form>
            </div>
          )}

          {/* TAB: ABOUT US PAGE CMS */}
          {activeTab === "about" && (
            <div className="space-y-8 animate-fadeIn max-w-5xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">About Us Page CMS</h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Manage all content on the &ldquo;About Our School&rdquo; page — hero banner, main narrative, quotes, photos, and mission & vision cards.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {aboutSaved && (
                    <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-black border border-emerald-200 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Saved Successfully!
                    </span>
                  )}
                  <button
                    onClick={handleSaveAboutPage}
                    className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-xs shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save About Page Changes
                  </button>
                </div>
              </div>

              {/* 1. HERO HEADER BANNER SECTION */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gray-900">1. Hero Header Banner</h3>
                      <p className="text-xs text-gray-500">Configure top hero title, category badge, subtitle, and optional banner background.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Category Badge</label>
                      <input
                        type="text"
                        value={aboutHeroBadge}
                        onChange={(e) => setAboutHeroBadge(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        placeholder="e.g. Dayanand Arya Vidya Public School"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Hero Main Title</label>
                      <input
                        type="text"
                        value={aboutHeroTitle}
                        onChange={(e) => setAboutHeroTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        placeholder="e.g. About Our School"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Hero Subtitle</label>
                    <textarea
                      rows={3}
                      value={aboutHeroSubtitle}
                      onChange={(e) => setAboutHeroSubtitle(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                      placeholder="Brief introduction displayed under hero title..."
                    />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Hero Background Banner Image</label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <label className="cursor-pointer px-5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl text-xs font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-sm">
                        <Upload className="w-4 h-4" />
                        <span>Upload Hero Banner Image</span>
                        <input type="file" accept="image/*" onChange={handleAboutHeroImageUpload} className="hidden" />
                      </label>
                      {aboutHeroImage && (
                        <button
                          type="button"
                          onClick={() => setAboutHeroImage("")}
                          className="px-4 py-2.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                        >
                          Remove Image
                        </button>
                      )}
                    </div>
                    {aboutHeroImage && (
                      <div className="relative h-32 w-full max-w-xl rounded-2xl overflow-hidden border border-gray-200 shadow-sm mt-3">
                        <img src={aboutHeroImage} alt="Hero Banner Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 2. ABOUT OVERVIEW SECTION */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gray-900">2. About Overview Content & Narrative</h3>
                      <p className="text-xs text-gray-500">Edit section headers, narrative text, highlight quotes, and overview photo.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Badge</label>
                      <input
                        type="text"
                        value={aboutSectionBadge}
                        onChange={(e) => setAboutSectionBadge(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Title</label>
                      <input
                        type="text"
                        value={aboutSectionTitle}
                        onChange={(e) => setAboutSectionTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Subtitle</label>
                      <input
                        type="text"
                        value={aboutSectionSubtitle}
                        onChange={(e) => setAboutSectionSubtitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Card Main Heading</label>
                    <input
                      type="text"
                      value={aboutHeading}
                      onChange={(e) => setAboutHeading(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Main Paragraph Narrative</label>
                    <textarea
                      rows={5}
                      value={aboutParagraph1}
                      onChange={(e) => setAboutParagraph1(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Featured Highlight Quote</label>
                    <textarea
                      rows={3}
                      value={aboutQuote}
                      onChange={(e) => setAboutQuote(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                    />
                  </div>

                  <div className="space-y-3 pt-3 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Overview Photos (Auto-Scrolling Slider)</label>
                        <p className="text-[11px] font-medium text-gray-500">Upload 3, 4 or more photos. They will auto-scroll continuously on the About page.</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl text-xs font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-sm">
                          <Plus className="w-4 h-4" />
                          <span>Add Photos</span>
                          <input type="file" accept="image/*" multiple onChange={handleAboutImagesUpload} className="hidden" />
                        </label>

                        {aboutImages.length > 0 && (
                          <button
                            type="button"
                            onClick={() => setAboutImages([])}
                            className="px-3 py-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                          >
                            Clear All
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Image Grid Display */}
                    {aboutImages.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                        {aboutImages.map((imgSrc, idx) => (
                          <div key={idx} className="relative group rounded-2xl overflow-hidden border border-gray-200 bg-gray-900 h-32 shadow-sm">
                            <img src={imgSrc} alt={`Slider Photo ${idx + 1}`} className="w-full h-full object-cover" />
                            
                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-[10px] font-black text-amber-300 backdrop-blur-sm">
                              Slide {idx + 1}
                            </span>

                            <button
                              type="button"
                              onClick={() => handleRemoveAboutImage(idx)}
                              className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-all opacity-90 group-hover:opacity-100"
                              title="Remove this photo"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl text-center space-y-2 bg-gray-50/50">
                        <ImageIcon className="w-8 h-8 text-gray-400 mx-auto" />
                        <p className="text-xs font-bold text-gray-600">No custom slider photos uploaded yet.</p>
                        <p className="text-[11px] text-gray-400">Click &quot;Add Photos&quot; above to select 3 or 4 images for the auto-scrolling hero slider.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. OUR MISSION & VISION CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gray-900">3. Our Mission & Vision Cards</h3>
                      <p className="text-xs text-gray-500">Edit vision and mission headings and narrative descriptions.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision Card */}
                  <div className="p-5 bg-orange-50/50 rounded-2xl border border-orange-200/80 space-y-4">
                    <div className="flex items-center gap-2 border-b border-orange-200/60 pb-3">
                      <Compass className="w-5 h-5 text-orange-600" />
                      <h4 className="text-xs font-black text-orange-900 uppercase tracking-wider">Our Vision Card</h4>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Vision Title</label>
                      <input
                        type="text"
                        value={visionTitle}
                        onChange={(e) => setVisionTitle(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Vision Description</label>
                      <textarea
                        rows={4}
                        value={visionDescription}
                        onChange={(e) => setVisionDescription(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-200/80 space-y-4">
                    <div className="flex items-center gap-2 border-b border-amber-200/60 pb-3">
                      <Target className="w-5 h-5 text-amber-600" />
                      <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider">Our Mission Card</h4>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Mission Title</label>
                      <input
                        type="text"
                        value={missionTitle}
                        onChange={(e) => setMissionTitle(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Mission Description</label>
                      <textarea
                        rows={4}
                        value={missionDescription}
                        onChange={(e) => setMissionDescription(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  {aboutSaved && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> All Changes Saved to Database!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleSaveAboutPage}
                    className="ml-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save All About Page Changes
                  </button>
                </div>
              </div>

              {/* 4. SALIENT FEATURES CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gray-900">4. Salient Features ({salientFeatures.length})</h3>
                      <p className="text-xs text-gray-500">Add, edit, or delete the salient feature cards shown on the About Us page.</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddSalientFeature}
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-xl text-xs font-black shadow-md transition-all flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add Salient Feature
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Title</label>
                    <input
                      type="text"
                      value={salientFeaturesTitle}
                      onChange={(e) => setSalientFeaturesTitle(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Subtitle</label>
                    <input
                      type="text"
                      value={salientFeaturesSubtitle}
                      onChange={(e) => setSalientFeaturesSubtitle(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {salientFeatures.map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-3 relative group hover:border-orange-300 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase text-orange-600">Feature #{index + 1}</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleEditSalientFeature(index)}
                            className="p-1.5 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-600 rounded-lg border border-gray-200 shadow-sm transition-all"
                            title="Edit Feature"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteSalientFeature(index)}
                            className="p-1.5 bg-white hover:bg-red-50 text-gray-700 hover:text-red-600 rounded-lg border border-gray-200 shadow-sm transition-all"
                            title="Delete Feature"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-black text-gray-900">{item.title}</h4>
                        <p className="text-[11px] text-gray-600 line-clamp-2 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. THE SCHOOL WITH A DIFFERENCE CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gray-900">5. The School with a Difference CMS</h3>
                      <p className="text-xs text-gray-500">Edit institutional ideology narrative paragraphs and highlight card text.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Title</label>
                      <input
                        type="text"
                        value={differenceTitle}
                        onChange={(e) => setDifferenceTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Subtitle</label>
                      <input
                        type="text"
                        value={differenceSubtitle}
                        onChange={(e) => setDifferenceSubtitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Paragraph 1 (Ideology & Activities)</label>
                      <textarea
                        rows={3}
                        value={differenceParagraph1}
                        onChange={(e) => setDifferenceParagraph1(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Paragraph 2 (Knowledge Recognition)</label>
                      <textarea
                        rows={2}
                        value={differenceParagraph2}
                        onChange={(e) => setDifferenceParagraph2(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Paragraph 3 (Perceptive Teaching)</label>
                      <textarea
                        rows={2}
                        value={differenceParagraph3}
                        onChange={(e) => setDifferenceParagraph3(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Highlight Box */}
                  <div className="p-5 bg-orange-50/70 rounded-2xl border border-orange-200 space-y-4">
                    <h4 className="text-xs font-black text-orange-900 uppercase tracking-wider">Side Highlight Box</h4>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Card Heading</label>
                      <input
                        type="text"
                        value={differenceCardHeading}
                        onChange={(e) => setDifferenceCardHeading(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Card Body Text</label>
                      <textarea
                        rows={3}
                        value={differenceCardText}
                        onChange={(e) => setDifferenceCardText(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Card Footer Tagline</label>
                      <input
                        type="text"
                        value={differenceCardFooter}
                        onChange={(e) => setDifferenceCardFooter(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  {aboutSaved && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> All Changes Saved to Database!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleSaveAboutPage}
                    className="ml-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save All About Page Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: GENERAL INFO PAGE CMS */}
          {activeTab === "geninfo" && (
            <div className="space-y-8 animate-fadeIn max-w-5xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">General Information Page CMS</h2>
                  <p className="text-xs text-gray-500">
                    Edit all text, banners, evaluation rules, transport details, fee policies, and PTA helpline numbers for the General Information page.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSaveGenInfoPage}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save All General Info Changes
                </button>
              </div>

              {/* 1. HERO BANNER CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">1. Hero Header Banner</h3>
                    <p className="text-xs text-gray-500">Configure top page header badge, title, subtitle, and background photo.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Badge Text</label>
                      <input
                        type="text"
                        value={genInfoHeroBadge}
                        onChange={(e) => setGenInfoHeroBadge(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Title</label>
                      <input
                        type="text"
                        value={genInfoHeroTitle}
                        onChange={(e) => setGenInfoHeroTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Subtitle</label>
                    <textarea
                      rows={3}
                      value={genInfoHeroSubtitle}
                      onChange={(e) => setGenInfoHeroSubtitle(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Banner Background Image</label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <label className="cursor-pointer px-5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl text-xs font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-sm">
                        <Upload className="w-4 h-4" />
                        <span>Upload Banner Photo</span>
                        <input type="file" accept="image/*" onChange={handleGenInfoHeroImageUpload} className="hidden" />
                      </label>
                      {genInfoHeroImage && (
                        <button
                          type="button"
                          onClick={() => setGenInfoHeroImage("")}
                          className="px-4 py-2.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                        >
                          Remove Photo
                        </button>
                      )}
                    </div>
                    {genInfoHeroImage && (
                      <div className="relative h-44 w-full max-w-xl rounded-2xl overflow-hidden border border-gray-200 shadow-sm mt-3 bg-slate-900">
                        <img src={genInfoHeroImage} alt="Banner Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 2. EVALUATION & EXAMINATION CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">2. Evaluation & Examination System</h3>
                    <p className="text-xs text-gray-500">Edit continuous evaluation policy and examination rules.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Title</label>
                      <input
                        type="text"
                        value={genInfoEvalTitle}
                        onChange={(e) => setGenInfoEvalTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Subtitle</label>
                      <input
                        type="text"
                        value={genInfoEvalSubtitle}
                        onChange={(e) => setGenInfoEvalSubtitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Left Card */}
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-4">
                      <h4 className="text-xs font-black text-orange-600 uppercase tracking-wider">Left Card: Evaluation Policy</h4>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Card Heading</label>
                        <input
                          type="text"
                          value={genInfoEvalCard1Heading}
                          onChange={(e) => setGenInfoEvalCard1Heading(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Paragraph 1</label>
                        <textarea
                          rows={4}
                          value={genInfoEvalCard1Text1}
                          onChange={(e) => setGenInfoEvalCard1Text1(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[100px]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Paragraph 2</label>
                        <textarea
                          rows={4}
                          value={genInfoEvalCard1Text2}
                          onChange={(e) => setGenInfoEvalCard1Text2(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[100px]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Highlight Box</label>
                        <textarea
                          rows={2}
                          value={genInfoEvalCard1Highlight}
                          onChange={(e) => setGenInfoEvalCard1Highlight(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[70px]"
                        />
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-4">
                      <h4 className="text-xs font-black text-amber-600 uppercase tracking-wider">Right Card: Examination Rules</h4>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Card Heading</label>
                        <input
                          type="text"
                          value={genInfoEvalCard2Heading}
                          onChange={(e) => setGenInfoEvalCard2Heading(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Card Subhead</label>
                        <input
                          type="text"
                          value={genInfoEvalCard2Sub}
                          onChange={(e) => setGenInfoEvalCard2Sub(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Overview Text</label>
                        <textarea
                          rows={3}
                          value={genInfoEvalCard2Text}
                          onChange={(e) => setGenInfoEvalCard2Text(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[85px]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Integrity Rule</label>
                        <textarea
                          rows={3}
                          value={genInfoEvalCard2Rule1}
                          onChange={(e) => setGenInfoEvalCard2Rule1(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[80px]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700">Absence Norms</label>
                        <textarea
                          rows={4}
                          value={genInfoEvalCard2Rule2}
                          onChange={(e) => setGenInfoEvalCard2Rule2(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. SCHOOL TRANSPORT FLEET CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">3. School Transport Services</h3>
                    <p className="text-xs text-gray-500">Edit bus transport fleet description, bus rules, and upload transport bus photo.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Title</label>
                      <input
                        type="text"
                        value={genInfoTransTitle}
                        onChange={(e) => setGenInfoTransTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Section Subtitle</label>
                      <input
                        type="text"
                        value={genInfoTransSubtitle}
                        onChange={(e) => setGenInfoTransSubtitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Fleet Card Heading</label>
                      <input
                        type="text"
                        value={genInfoTransHeading}
                        onChange={(e) => setGenInfoTransHeading(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Fleet Card Description</label>
                      <textarea
                        rows={3}
                        value={genInfoTransDesc}
                        onChange={(e) => setGenInfoTransDesc(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[90px]"
                      />
                    </div>
                  </div>

                  {/* Transport Photo Upload */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Transport Bus Fleet Photo</label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <label className="cursor-pointer px-5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl text-xs font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-sm">
                        <Upload className="w-4 h-4" />
                        <span>Upload Bus Fleet Photo</span>
                        <input type="file" accept="image/*" onChange={handleGenInfoTransImageUpload} className="hidden" />
                      </label>
                      {genInfoTransImage && genInfoTransImage !== "/placeholder.png" && (
                        <button
                          type="button"
                          onClick={() => setGenInfoTransImage("/placeholder.png")}
                          className="px-4 py-2.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                        >
                          Reset to Default
                        </button>
                      )}
                    </div>
                    {genInfoTransImage && (
                      <div className="relative h-44 w-full max-w-xl rounded-2xl overflow-hidden border border-gray-200 shadow-sm mt-3 bg-slate-900">
                        <img src={genInfoTransImage} alt="Bus Fleet Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Guideline Rule 1</label>
                      <textarea
                        rows={2}
                        value={genInfoTransRule1}
                        onChange={(e) => setGenInfoTransRule1(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[60px]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Guideline Rule 2</label>
                      <textarea
                        rows={2}
                        value={genInfoTransRule2}
                        onChange={(e) => setGenInfoTransRule2(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[60px]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Guideline Rule 3</label>
                      <textarea
                        rows={2}
                        value={genInfoTransRule3}
                        onChange={(e) => setGenInfoTransRule3(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[60px]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700">Guideline Rule 4</label>
                      <textarea
                        rows={2}
                        value={genInfoTransRule4}
                        onChange={(e) => setGenInfoTransRule4(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[60px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Footer Highlight Box</label>
                    <textarea
                      rows={2}
                      value={genInfoTransFooter}
                      onChange={(e) => setGenInfoTransFooter(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[70px]"
                    />
                  </div>
                </div>
              </div>

              {/* 4. PARENT PARTNERSHIP & PTA HELPLINE CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">4. Parent Partnership & PTA Helpline Numbers</h3>
                    <p className="text-xs text-gray-500">Edit PTA communication banner and official helpline numbers.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">PTA Banner Callout</label>
                    <textarea
                      rows={3}
                      value={genInfoPtaBanner}
                      onChange={(e) => setGenInfoPtaBanner(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[85px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 bg-slate-900 text-white rounded-2xl">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">Helpline Number 1</label>
                      <input
                        type="text"
                        value={genInfoPtaPhone1}
                        onChange={(e) => setGenInfoPtaPhone1(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-orange-400 uppercase tracking-wider">Helpline Number 2</label>
                      <input
                        type="text"
                        value={genInfoPtaPhone2}
                        onChange={(e) => setGenInfoPtaPhone2(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 px-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  {genInfoSaved && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> All General Info Changes Saved!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleSaveGenInfoPage}
                    className="ml-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save All General Info Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PRINCIPAL MESSAGE CMS TAB */}
          {activeTab === "principal" && (
                <div className="space-y-8 animate-fadeIn max-w-5xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-black text-gray-900">Principal's Message Page CMS</h2>
                      <p className="text-xs text-gray-500">
                        Edit banner title, principal portrait photo, designations, leadership text, welcome message, quote, and location.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleSavePrincipalPage}
                      className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" /> Save All Principal Message Changes
                    </button>
                  </div>

                  {/* 1. HERO BANNER CMS */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-gray-900">1. Hero Header Banner</h3>
                        <p className="text-xs text-gray-500">Configure top page header badge, title, subtitle, and background photo.</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Badge Text</label>
                          <input
                            type="text"
                            value={principalHeroBadge}
                            onChange={(e) => setPrincipalHeroBadge(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Title</label>
                          <input
                            type="text"
                            value={principalHeroTitle}
                            onChange={(e) => setPrincipalHeroTitle(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Subtitle</label>
                        <textarea
                          rows={3}
                          value={principalHeroSubtitle}
                          onChange={(e) => setPrincipalHeroSubtitle(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[80px]"
                        />
                      </div>

                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Banner Background Image</label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <label className="cursor-pointer px-5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl text-xs font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-sm">
                            <Upload className="w-4 h-4" />
                            <span>Upload Banner Photo</span>
                            <input type="file" accept="image/*" onChange={handlePrincipalHeroImageUpload} className="hidden" />
                          </label>
                          {principalHeroImage && (
                            <button
                              type="button"
                              onClick={() => setPrincipalHeroImage("")}
                              className="px-4 py-2.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                            >
                              Remove Photo
                            </button>
                          )}
                        </div>
                        {principalHeroImage && (
                          <div className="relative h-44 w-full max-w-xl rounded-2xl overflow-hidden border border-gray-200 shadow-sm mt-3 bg-slate-900">
                            <img src={principalHeroImage} alt="Banner Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 2. PRINCIPAL PROFILE & PHOTO CMS */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-gray-900">2. Principal Portrait & Designation</h3>
                        <p className="text-xs text-gray-500">Upload portrait photo and edit Principal's credentials.</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Principal Full Name</label>
                          <input
                            type="text"
                            value={principalName}
                            onChange={(e) => setPrincipalName(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Designation / Title</label>
                          <input
                            type="text"
                            value={principalDesignation}
                            onChange={(e) => setPrincipalDesignation(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>
                      </div>

                      {/* Photo Upload & Professional Executive Card Preview */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Principal Portrait Photo & Live Card Preview</label>
                        
                        <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                          
                          {/* Left Controls & Instructions */}
                          <div className="space-y-4 flex-1">
                            <div className="space-y-1">
                              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" /> Executive Portrait Photo
                              </span>
                              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                                Upload high-resolution portrait photograph of the Principal. Best aspect ratio: 3:4 portrait (e.g. 600x800px).
                              </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                              <label className="cursor-pointer px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl text-xs font-black shadow-md flex items-center gap-2 transition-all">
                                <Upload className="w-4 h-4" />
                                <span>Upload Principal Photo</span>
                                <input type="file" accept="image/*" onChange={handlePrincipalPhotoUpload} className="hidden" />
                              </label>
                              {principalPhoto && principalPhoto !== "/placeholder.png" && (
                                <button
                                  type="button"
                                  onClick={() => setPrincipalPhoto("/placeholder.png")}
                                  className="px-4 py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
                                >
                                  Reset to Default
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Right Live Card Frame Preview */}
                          <div className="relative w-48 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-slate-950 shrink-0 self-center md:self-auto group">
                            {principalPhoto ? (
                              <img
                                src={principalPhoto}
                                alt="Principal Preview"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                                <span className="text-4xl font-black text-amber-400">{principalName ? principalName.split(" ").map(n => n[0]).join("") : "DAV"}</span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex items-end p-3">
                              <div className="text-white space-y-0.5 w-full">
                                <p className="text-xs font-black truncate">{principalName}</p>
                                <p className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider truncate">{principalDesignation}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Leadership Info Title</label>
                          <input
                            type="text"
                            value={principalLeadershipTitle}
                            onChange={(e) => setPrincipalLeadershipTitle(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Leadership Description</label>
                          <textarea
                            rows={3}
                            value={principalLeadershipDesc}
                            onChange={(e) => setPrincipalLeadershipDesc(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[85px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. MESSAGE BODY CONTENT CMS */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-gray-900">3. Official Message Content & Letter Body</h3>
                        <p className="text-xs text-gray-500">Edit message heading, paragraphs, highlight quote, and campus location.</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Welcome Heading</label>
                          <input
                            type="text"
                            value={principalWelcomeHeading}
                            onChange={(e) => setPrincipalWelcomeHeading(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Salutation / Greeting</label>
                          <input
                            type="text"
                            value={principalGreeting}
                            onChange={(e) => setPrincipalGreeting(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Message Paragraph 1</label>
                          <textarea
                            rows={4}
                            value={principalParagraph1}
                            onChange={(e) => setPrincipalParagraph1(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[110px]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Message Paragraph 2</label>
                          <textarea
                            rows={3}
                            value={principalParagraph2}
                            onChange={(e) => setPrincipalParagraph2(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[90px]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Message Paragraph 3 (Closing)</label>
                          <textarea
                            rows={2}
                            value={principalParagraph3}
                            onChange={(e) => setPrincipalParagraph3(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[70px]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">Highlight Quote</label>
                          <textarea
                            rows={2}
                            value={principalQuote}
                            onChange={(e) => setPrincipalQuote(e.target.value)}
                            className="w-full bg-orange-50/50 border border-orange-200 rounded-xl p-3.5 text-xs sm:text-sm font-bold text-orange-900 italic focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[70px]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Campus Location</label>
                          <input
                            type="text"
                            value={principalLocation}
                            onChange={(e) => setPrincipalLocation(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      {principalSaved && (
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> All Principal Message Changes Saved!
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={handleSavePrincipalPage}
                        className="ml-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" /> Save All Principal Message Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

          {/* TAB: ACADEMIC PROGRAMS CMS */}
          {activeTab === "programs" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Academic Programs & Wings CMS</h2>
                  <p className="text-xs text-gray-500">
                    Manage the &quot;Academic Programs Tailored for Growth&quot; section — edit titles, age groups, grade spans, descriptions, key features, and card photos.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetPrograms}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl border border-gray-300 transition-all flex items-center gap-1.5"
                    title="Reset to default programs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                  </button>

                  <button
                    onClick={handleOpenAddProgram}
                    className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Plus className="w-4 h-4" /> Add Program Wing
                  </button>
                </div>
              </div>

              {/* Section Header Customizer */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Type className="w-4 h-4 text-orange-500" />
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide">Section Headings on Homepage</h3>
                  </div>
                  {programHeadingSaved && (
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-black rounded-lg border border-emerald-200 flex items-center gap-1.5 animate-fadeIn">
                      <Check className="w-3.5 h-3.5" /> Headings Saved!
                    </span>
                  )}
                </div>

                <form onSubmit={handleSaveProgramHeadings} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Badge Text</label>
                    <input
                      type="text"
                      value={programsBadge}
                      onChange={(e) => setProgramsBadge(e.target.value)}
                      placeholder="e.g. Educational Journey"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Section Title</label>
                    <input
                      type="text"
                      value={programsTitle}
                      onChange={(e) => setProgramsTitle(e.target.value)}
                      placeholder="e.g. Academic Programs Tailored for Growth"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-gray-700">Section Subtitle / Description</label>
                    <textarea
                      rows={2}
                      value={programsSubtitle}
                      onChange={(e) => setProgramsSubtitle(e.target.value)}
                      placeholder="Enter a brief intro about the academic journey..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-black rounded-xl shadow-md flex items-center gap-2 transition-all"
                    >
                      <Save className="w-3.5 h-3.5 text-orange-400" /> Save Section Headings
                    </button>
                  </div>
                </form>
              </div>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200">
                <div className="relative w-full sm:w-96">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={programSearch}
                    onChange={(e) => setProgramSearch(e.target.value)}
                    placeholder="Search by wing name, grade span, or keywords..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
                <div className="text-xs font-bold text-gray-500">
                  Showing {filteredPrograms.length} of {programs.length} Academic Wings
                </div>
              </div>

              {/* Academic Programs Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.length > 0 ? (
                  filteredPrograms.map((prog) => (
                    <div
                      key={prog.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                        {prog.image ? (
                          <img
                            src={prog.image}
                            alt={prog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500">
                            <GraduationCap className="w-12 h-12" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-slate-950 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                          {prog.ageGroup}
                        </span>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block">
                            {prog.grades}
                          </span>
                          <h4 className="text-lg font-black text-gray-900 leading-tight">
                            {prog.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                            {prog.description}
                          </p>
                        </div>

                        <ul className="space-y-1.5 pt-3 border-t border-gray-100">
                          {(Array.isArray(prog.features) ? prog.features : []).slice(0, 4).map((f, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{f}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            {(Array.isArray(prog.features) ? prog.features : []).length} Key Features
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenEditProgram(prog)}
                              className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 border border-amber-200/60"
                              title="Edit Program Wing"
                            >
                              <Edit className="w-3.5 h-3.5 text-amber-600" /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteProgramItem(prog.id)}
                              className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors border border-rose-200/60"
                              title="Delete Program Wing"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center text-gray-500 font-medium text-xs bg-white rounded-2xl border border-gray-200">
                    No academic programs found matching &quot;{programSearch}&quot;.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: FACULTY MANAGEMENT (CMS & CRUD) */}
          {activeTab === "faculty" && (
            <div className="space-y-8 animate-fadeIn max-w-5xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Faculty & Staff CMS</h2>
                  <p className="text-xs text-gray-500">Edit hero banner, key statistics cards, and manage 50+ faculty & staff directory entries.</p>
                </div>
                <div className="flex items-center gap-3">
                  {facultySaved && (
                    <span className="px-4 py-2 bg-emerald-500/20 text-emerald-700 rounded-xl text-xs font-black border border-emerald-500/40 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Saved!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleSaveFacultyPage}
                    className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save Page Settings
                  </button>
                </div>
              </div>

              {/* 1. HERO BANNER CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">1. Hero Header Banner</h3>
                    <p className="text-xs text-gray-500">Configure top header badge, title, subtitle, and background photo.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Badge Text</label>
                      <input
                        type="text"
                        value={facultyHeroBadge}
                        onChange={(e) => setFacultyHeroBadge(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Title</label>
                      <input
                        type="text"
                        value={facultyHeroTitle}
                        onChange={(e) => setFacultyHeroTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Subtitle</label>
                    <textarea
                      rows={3}
                      value={facultyHeroSubtitle}
                      onChange={(e) => setFacultyHeroSubtitle(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Banner Background Image</label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <label className="cursor-pointer px-5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl text-xs font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-sm">
                        <Upload className="w-4 h-4" />
                        <span>Upload Banner Photo</span>
                        <input type="file" accept="image/*" onChange={handleFacultyHeroImageUpload} className="hidden" />
                      </label>
                      {facultyHeroImage && (
                        <button
                          type="button"
                          onClick={() => setFacultyHeroImage("")}
                          className="px-4 py-2.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                        >
                          Remove Photo
                        </button>
                      )}
                    </div>
                    {facultyHeroImage && (
                      <div className="relative h-44 w-full max-w-xl rounded-2xl overflow-hidden border border-gray-200 shadow-sm mt-3 bg-slate-900">
                        <img src={facultyHeroImage} alt="Banner Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 2. STATS OVERVIEW CARDS CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">2. Key Statistics Overview Cards</h3>
                    <p className="text-xs text-gray-500">Edit the 4 highlight statistics cards shown at the top of the Faculty page.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Stat Card 1 */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                    <span className="text-xs font-black text-slate-700 uppercase">Card #1</span>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Value (e.g. 50+)</label>
                      <input
                        type="text"
                        value={facultyStat1Value}
                        onChange={(e) => setFacultyStat1Value(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-black text-slate-900"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Label</label>
                      <input
                        type="text"
                        value={facultyStat1Label}
                        onChange={(e) => setFacultyStat1Label(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-bold text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                    <span className="text-xs font-black text-orange-600 uppercase">Card #2</span>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Value (e.g. 100%)</label>
                      <input
                        type="text"
                        value={facultyStat2Value}
                        onChange={(e) => setFacultyStat2Value(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-black text-orange-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Label</label>
                      <input
                        type="text"
                        value={facultyStat2Label}
                        onChange={(e) => setFacultyStat2Label(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-bold text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                    <span className="text-xs font-black text-amber-600 uppercase">Card #3</span>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Value (e.g. 12:1)</label>
                      <input
                        type="text"
                        value={facultyStat3Value}
                        onChange={(e) => setFacultyStat3Value(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-black text-amber-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Label</label>
                      <input
                        type="text"
                        value={facultyStat3Label}
                        onChange={(e) => setFacultyStat3Label(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-bold text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Stat Card 4 */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                    <span className="text-xs font-black text-emerald-600 uppercase">Card #4</span>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Value (e.g. M.A / M.Sc / B.Ed)</label>
                      <input
                        type="text"
                        value={facultyStat4Value}
                        onChange={(e) => setFacultyStat4Value(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-black text-emerald-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-gray-600">Label</label>
                      <input
                        type="text"
                        value={facultyStat4Label}
                        onChange={(e) => setFacultyStat4Label(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs font-bold text-slate-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleSaveFacultyPage}
                    className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save Page Settings
                  </button>
                </div>
              </div>

              {/* 3. FACULTY MEMBERS DIRECTORY (CRUD) */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gray-900">3. Faculty Members Directory ({facultyList.length})</h3>
                      <p className="text-xs text-gray-500">Add teachers, upload portrait photos, edit qualifications, OASIS IDs & designations.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={resetFaculty}
                      className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl border border-gray-300 transition-all flex items-center gap-1.5"
                      title="Reset to default faculty list"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                    </button>

                    <button
                      onClick={() => {
                        setEditingFaculty(null);
                        setFacultyForm({
                          name: "",
                          designation: "TGT",
                          qualification: "",
                          subjectTaught: "",
                          image: "/placeholder.png",
                          gender: "F",
                          oasisId: "",
                        });
                        setShowFacultyModal(true);
                      }}
                      className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> Add New Teacher
                    </button>
                  </div>
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
                                  subjectTaught: f.subjectTaught,
                                  image: f.image || "/placeholder.png",
                                  gender: f.gender,
                                  oasisId: f.oasisId,
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
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetNews}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl border border-gray-300 transition-all flex items-center gap-1.5"
                    title="Reset to default news list"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                  </button>

                  <button
                    onClick={() => {
                      setEditingNews(null);
                      setNewsForm({
                        title: "",
                        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
                        category: "Academic",
                        excerpt: "",
                        fullContent: "",
                        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
                      });
                      setShowNewsModal(true);
                    }}
                    className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Publish New Article
                  </button>
                </div>
              </div>

              {newsList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsList.map((n) => (
                    <div key={n.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 border border-orange-200 rounded-full text-[10px] font-black uppercase">
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
                          className="px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl text-xs font-bold transition-all border border-rose-200"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center text-gray-500 font-medium text-xs bg-white rounded-2xl border border-gray-200 space-y-3">
                  <p>No news articles currently published.</p>
                  <button
                    onClick={resetNews}
                    className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-xl"
                  >
                    Load Default News Articles
                  </button>
                </div>
              )}
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
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetGallery}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl border border-gray-300 transition-all flex items-center gap-1.5"
                    title="Reset to default gallery sample list"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
                  </button>

                  <button
                    onClick={() => setShowGalleryModal(true)}
                    className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add Photo to Gallery
                  </button>
                </div>
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
                  <h2 className="text-2xl font-black text-gray-900">Academic Calendar & Notices CMS</h2>
                  <p className="text-xs text-gray-500">
                    Add, edit, or delete notices, circulars, exam dates, and events displayed on the homepage Academic Calendar.
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
                    className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 hover:opacity-90 transition-all"
                  >
                    <Plus className="w-4 h-4" /> Add Notice / Event
                  </button>
                </div>
              </div>

              {/* Sync Info Banner */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                <Calendar className="w-5 h-5 text-orange-600 shrink-0" />
                <p className="text-xs text-orange-950 font-medium">
                  <strong>Calendar Sync:</strong> Every entry below with an <strong>Event Date</strong> automatically places an orange event indicator dot on that day in the homepage <strong>Academic Calendar</strong>.
                </p>
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

          {/* TAB: ADMISSION ENQUIRIES */}
          {activeTab === "enquiries" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Admission Enquiries & Applications</h2>
                  <p className="text-xs text-gray-500">
                    Review and follow up with inquiries received from parents via the website. Stored in PostgreSQL database.
                  </p>
                </div>
                <button
                  onClick={fetchEnquiries}
                  className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl border border-gray-300 transition-all flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Refresh Enquiries
                </button>
              </div>

              {/* Search & Status Filter */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={enquirySearch}
                    onChange={(e) => setEnquirySearch(e.target.value)}
                    placeholder="Search by parent name, phone, email, or grade..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-gray-500">Status:</span>
                  {["All", "Pending", "Contacted", "Enrolled", "Closed"].map((st) => (
                    <button
                      key={st}
                      onClick={() => setEnquiryStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        enquiryStatusFilter === st
                          ? "bg-orange-600 text-white shadow-md"
                          : "bg-gray-50 text-gray-700 hover:text-gray-900 border border-gray-200"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enquiries Table */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50/50 text-[11px] font-black uppercase text-gray-500">
                        <th className="py-4 px-6">Parent / Guardian</th>
                        <th className="py-4 px-6">Contact Info</th>
                        <th className="py-4 px-6">Grade / Target</th>
                        <th className="py-4 px-6">Message / Details</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs font-medium text-gray-800">
                      {enquiries
                        .filter((e) => {
                          const matchesQuery =
                            e.parentName.toLowerCase().includes(enquirySearch.toLowerCase()) ||
                            e.phone.includes(enquirySearch) ||
                            e.email.toLowerCase().includes(enquirySearch.toLowerCase()) ||
                            e.grade.toLowerCase().includes(enquirySearch.toLowerCase()) ||
                            (e.address && e.address.toLowerCase().includes(enquirySearch.toLowerCase()));
                          const matchesStatus =
                            enquiryStatusFilter === "All" || e.status === enquiryStatusFilter;
                          return matchesQuery && matchesStatus;
                        })
                        .map((enq) => (
                          <tr key={enq.id} className="hover:bg-gray-50/80 transition-colors">
                            <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">
                              {enq.parentName}
                              {enq.studentName && enq.studentName !== enq.parentName && (
                                <span className="block text-[11px] text-gray-400 font-normal">
                                  Applicant: {enq.studentName}
                                </span>
                              )}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap space-y-0.5">
                              <a href={`tel:${enq.phone}`} className="font-mono font-bold text-orange-600 hover:underline block">
                                {enq.phone}
                              </a>
                              {enq.email && (
                                <a href={`mailto:${enq.email}`} className="text-[11px] text-gray-500 hover:underline block">
                                  {enq.email}
                                </a>
                              )}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-[10px] font-bold">
                                {enq.grade}
                              </span>
                            </td>
                            <td className="py-4 px-6 max-w-xs">
                              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                                {enq.address || "—"}
                              </p>
                              <span className="text-[10px] text-gray-400 block mt-1">
                                {new Date(enq.createdAt).toLocaleString()}
                              </span>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                              <select
                                value={enq.status}
                                onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value)}
                                className={`text-xs font-bold py-1 px-2.5 rounded-lg border focus:outline-none ${
                                  enq.status === "Pending"
                                    ? "bg-amber-50 text-amber-700 border-amber-300"
                                    : enq.status === "Contacted"
                                    ? "bg-blue-50 text-blue-700 border-blue-300"
                                    : enq.status === "Enrolled"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                                    : "bg-gray-100 text-gray-700 border-gray-300"
                                }`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Enrolled">Enrolled</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                            <td className="py-4 px-6 text-right whitespace-nowrap">
                              <button
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-2 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200/60"
                                title="Delete Enquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      {enquiries.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-gray-400 text-xs">
                            No admission enquiries submitted yet.
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
                    className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center gap-2 hover:opacity-90 transition-all"
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
            <div className="space-y-8 animate-fadeIn max-w-5xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Director's Message Page CMS</h2>
                  <p className="text-xs text-gray-500">
                    Edit banner title, director portrait photo, qualifications, experience tagline, message content, and location.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSaveDirectorPage}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save All Director Message Changes
                </button>
              </div>

              {/* 1. HERO BANNER CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">1. Hero Header Banner</h3>
                    <p className="text-xs text-gray-500">Configure top page header badge, title, subtitle, and background photo.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Badge Text</label>
                      <input
                        type="text"
                        value={directorHeroBadge}
                        onChange={(e) => setDirectorHeroBadge(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Title</label>
                      <input
                        type="text"
                        value={directorHeroTitle}
                        onChange={(e) => setDirectorHeroTitle(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Page Subtitle</label>
                    <textarea
                      rows={3}
                      value={directorHeroSubtitle}
                      onChange={(e) => setDirectorHeroSubtitle(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Banner Background Image</label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <label className="cursor-pointer px-5 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-xl text-xs font-bold border border-orange-200 flex items-center gap-2 transition-all shadow-sm">
                        <Upload className="w-4 h-4" />
                        <span>Upload Banner Photo</span>
                        <input type="file" accept="image/*" onChange={handleDirectorHeroImageUpload} className="hidden" />
                      </label>
                      {directorHeroImage && (
                        <button
                          type="button"
                          onClick={() => setDirectorHeroImage("")}
                          className="px-4 py-2.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors"
                        >
                          Remove Photo
                        </button>
                      )}
                    </div>
                    {directorHeroImage && (
                      <div className="relative h-44 w-full max-w-xl rounded-2xl overflow-hidden border border-gray-200 shadow-sm mt-3 bg-slate-900">
                        <img src={directorHeroImage} alt="Banner Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 2. DIRECTOR PORTRAIT & CREDENTIALS CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">2. Director Portrait & Credentials</h3>
                    <p className="text-xs text-gray-500">Upload portrait photo and edit Director's credentials & qualifications.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Director Full Name</label>
                      <input
                        type="text"
                        value={directorName}
                        onChange={(e) => setDirectorName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Designation / Title</label>
                      <input
                        type="text"
                        value={directorDesignation}
                        onChange={(e) => setDirectorDesignation(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Qualification</label>
                      <input
                        type="text"
                        value={directorQualification}
                        onChange={(e) => setDirectorQualification(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  {/* Photo Upload & Professional Executive Card Preview */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider block">Director Portrait Photo & Live Card Preview</label>
                    
                    <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      
                      {/* Left Controls & Instructions */}
                      <div className="space-y-4 flex-1">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" /> Executive Portrait Photo
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            Upload high-resolution portrait photograph of the Director. Best aspect ratio: 3:4 portrait (e.g. 600x800px).
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <label className="cursor-pointer px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl text-xs font-black shadow-md flex items-center gap-2 transition-all">
                            <Upload className="w-4 h-4" />
                            <span>Upload Director Photo</span>
                            <input type="file" accept="image/*" onChange={handleDirectorImageUpload} className="hidden" />
                          </label>
                          {directorImage && directorImage !== "/placeholder.png" && (
                            <button
                              type="button"
                              onClick={() => setDirectorImage("/placeholder.png")}
                              className="px-4 py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
                            >
                              Reset to Default
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Right Live Card Frame Preview */}
                      <div className="relative w-48 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-slate-950 shrink-0 self-center md:self-auto group">
                        {directorImage ? (
                          <img
                            src={directorImage}
                            alt="Director Preview"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                            <span className="text-4xl font-black text-amber-400">{directorName ? directorName.split(" ").map(n => n[0]).join("") : "DAV"}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex items-end p-3">
                          <div className="text-white space-y-0.5 w-full">
                            <p className="text-xs font-black truncate">{directorName}</p>
                            <p className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider truncate">{directorDesignation}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Experience Tagline</label>
                      <input
                        type="text"
                        value={directorExperience}
                        onChange={(e) => setDirectorExperience(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Leadership Description</label>
                      <textarea
                        rows={3}
                        value={directorLeadershipDesc}
                        onChange={(e) => setDirectorLeadershipDesc(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[85px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. MESSAGE BODY CONTENT CMS */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">3. Official Message Content & Narrative</h3>
                    <p className="text-xs text-gray-500">Edit section heading, paragraphs, and campus location.</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Welcome Heading</label>
                    <input
                      type="text"
                      value={directorHeading}
                      onChange={(e) => setDirectorHeading(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Message Paragraph 1</label>
                      <textarea
                        rows={4}
                        value={directorMessage1}
                        onChange={(e) => setDirectorMessage1(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[110px]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Message Paragraph 2</label>
                      <textarea
                        rows={4}
                        value={directorMessage2}
                        onChange={(e) => setDirectorMessage2(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[110px]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Message Paragraph 3</label>
                      <textarea
                        rows={4}
                        value={directorMessage3}
                        onChange={(e) => setDirectorMessage3(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed resize-y min-h-[110px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <label className="text-xs font-extrabold text-gray-700 uppercase tracking-wider">Campus Location</label>
                    <input
                      type="text"
                      value={directorLocation}
                      onChange={(e) => setDirectorLocation(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  {directorSaved && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> All Director Message Changes Saved!
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleSaveDirectorPage}
                    className="ml-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save All Director Message Changes
                  </button>
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
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black rounded-xl shadow-lg transition-all"
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
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black rounded-xl shadow-lg transition-all"
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
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 max-w-xl w-full space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-black text-gray-900 border-b border-gray-100 pb-3">
              {editingFaculty ? "Edit Faculty Member" : "Add New Faculty Member"}
            </h3>

            <form onSubmit={handleSaveFaculty} className="space-y-4">
              {/* Photo Upload Section */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">Teacher Photo (.png, .jpg, .webp)</label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4">
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-gray-300 bg-slate-900 shrink-0 shadow-sm">
                    {facultyForm.image ? (
                      <img src={facultyForm.image} alt="Teacher Preview" className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold text-xs">
                        No Photo
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="cursor-pointer px-4 py-2 bg-white hover:bg-orange-50 text-orange-600 border border-orange-200 rounded-xl text-xs font-bold flex items-center gap-2 w-fit transition-colors shadow-sm">
                      <Upload className="w-4 h-4" />
                      <span>Upload Teacher Photo</span>
                      <input type="file" accept="image/*" onChange={handleTeacherPhotoUpload} className="hidden" />
                    </label>
                    <input
                      type="text"
                      placeholder="Or paste image URL / path"
                      value={facultyForm.image}
                      onChange={(e) => setFacultyForm({ ...facultyForm, image: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg p-2 text-[11px] font-mono text-gray-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Teacher Full Name</label>
                  <input
                    type="text"
                    required
                    value={facultyForm.name}
                    onChange={(e) => setFacultyForm({ ...facultyForm, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Designation Wing</label>
                  <select
                    value={facultyForm.designation}
                    onChange={(e) => setFacultyForm({ ...facultyForm, designation: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="PRINCIPAL">PRINCIPAL (Head of Institution)</option>
                    <option value="PGT">PGT (Post Graduate Teacher)</option>
                    <option value="TGT">TGT (Trained Graduate Teacher)</option>
                    <option value="PRT">PRT (Primary Teacher)</option>
                    <option value="PTI">PTI / Specialist Teacher</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Subject Taught</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. MATHEMATICS, PHYSICS, ENGLISH"
                    value={facultyForm.subjectTaught}
                    onChange={(e) => setFacultyForm({ ...facultyForm, subjectTaught: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 uppercase"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Highest Qualification</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M.Sc (Maths), B.Ed"
                    value={facultyForm.qualification}
                    onChange={(e) => setFacultyForm({ ...facultyForm, qualification: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">OASIS ID</label>
                  <input
                    type="text"
                    placeholder="e.g. OASIS-78492"
                    value={facultyForm.oasisId}
                    onChange={(e) => setFacultyForm({ ...facultyForm, oasisId: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Gender</label>
                  <select
                    value={facultyForm.gender}
                    onChange={(e) => setFacultyForm({ ...facultyForm, gender: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="F">Female (F)</option>
                    <option value="M">Male (M)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowFacultyModal(false)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black rounded-xl shadow-lg transition-all"
                >
                  {editingFaculty ? "Save Changes" : "Add Faculty Member"}
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

      {/* ACADEMIC PROGRAM ADD / EDIT MODAL */}
      {showProgramModal && (
        <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 max-w-2xl w-full space-y-6 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">
                    {editingProgram ? "Edit Academic Program Wing" : "Add New Academic Program Wing"}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Configure curriculum details, grade spans, and display image for the homepage.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowProgramModal(false)}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProgram} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-gray-700">Program Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pre-Primary Wing (Nursery - UKG)"
                    value={programForm.title}
                    onChange={(e) => setProgramForm({ ...programForm, title: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Grades / Wing Level *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nursery to UKG or Grade 1 to 5"
                    value={programForm.grades}
                    onChange={(e) => setProgramForm({ ...programForm, grades: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Age Group *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 3 - 5 Years"
                    value={programForm.ageGroup}
                    onChange={(e) => setProgramForm({ ...programForm, ageGroup: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Program Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the learning approach, methodology, environment, and development focus..."
                  value={programForm.description}
                  onChange={(e) => setProgramForm({ ...programForm, description: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-gray-700">Key Features / Highlights *</label>
                  <span className="text-[11px] text-gray-400 font-medium">1 bullet point per line</span>
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Montessori & Play-Way Method&#10;Phonetics & Early Numeracy&#10;Kinesthetic Activity Rooms&#10;Nutritional Guidance"
                  value={programForm.featuresText}
                  onChange={(e) => setProgramForm({ ...programForm, featuresText: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3.5 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-mono"
                />
              </div>

              {/* Image Management */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <label className="text-xs font-bold text-gray-700 block">Program Card Image *</label>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-start gap-4">
                    {/* Live Preview Box */}
                    <div className="relative h-24 w-36 rounded-lg overflow-hidden bg-gray-900 border border-gray-300 shrink-0 shadow-sm">
                      {programForm.image ? (
                        <img
                          src={programForm.image}
                          alt="Program Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 text-[10px] text-center p-1">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Upload button */}
                    <div className="flex-1 space-y-2">
                      <label className="cursor-pointer py-3 px-3 bg-white border border-dashed border-gray-300 hover:border-orange-500 rounded-xl text-xs font-bold text-gray-800 transition-colors flex items-center justify-center gap-2 group shadow-sm">
                        <Upload className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                        <span>Upload Photo from Device</span>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,image/webp"
                          onChange={handleProgramImageUpload}
                          className="hidden"
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="Or paste image URL (https://...)"
                        value={programForm.image}
                        onChange={(e) => setProgramForm({ ...programForm, image: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl py-2 px-3 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Preset Photos */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-gray-500 block mb-1.5">
                      Or select a curated educational photo:
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {[
                        { label: "Kindergarten", url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
                        { label: "Primary Wing", url: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" },
                        { label: "Middle Wing", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
                        { label: "Secondary (9-10)", url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
                        { label: "Sr Secondary (11-12)", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" }
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => setProgramForm({ ...programForm, image: preset.url })}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                            programForm.image === preset.url
                              ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                              : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:text-orange-600"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowProgramModal(false)}
                  className="px-4 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProgram ? "Update Program Wing" : "Save New Program Wing"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SALIENT FEATURE EDIT/ADD MODAL */}
      {showSalientModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-black text-gray-900">
                {editingSalientIndex !== null ? "Edit Salient Feature" : "Add New Salient Feature"}
              </h3>
              <button
                type="button"
                onClick={() => setShowSalientModal(false)}
                className="p-2 hover:bg-gray-100 text-gray-500 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSalientModal} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-gray-700">Feature Title *</label>
                <input
                  type="text"
                  required
                  value={salientForm.title}
                  onChange={(e) => setSalientForm((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  placeholder="e.g. Child-Oriented Methodology"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-gray-700">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={salientForm.desc}
                  onChange={(e) => setSalientForm((prev) => ({ ...prev, desc: e.target.value }))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 leading-relaxed"
                  placeholder="Feature summary description..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-gray-700">Icon Name</label>
                  <select
                    value={salientForm.iconName}
                    onChange={(e) => setSalientForm((prev) => ({ ...prev, iconName: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="BrainCircuit">BrainCircuit</option>
                    <option value="Sparkles">Sparkles</option>
                    <option value="BookOpen">BookOpen</option>
                    <option value="ShieldCheck">ShieldCheck</option>
                    <option value="HeartHandshake">HeartHandshake</option>
                    <option value="Users">Users</option>
                    <option value="Lightbulb">Lightbulb</option>
                    <option value="Star">Star</option>
                    <option value="Building2">Building2</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-gray-700">Badge Theme Color</label>
                  <select
                    value={salientForm.color}
                    onChange={(e) => setSalientForm((prev) => ({ ...prev, color: e.target.value }))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="bg-orange-100 text-orange-600">Orange</option>
                    <option value="bg-amber-100 text-amber-600">Amber</option>
                    <option value="bg-emerald-100 text-emerald-600">Emerald</option>
                    <option value="bg-blue-100 text-blue-600">Blue</option>
                    <option value="bg-purple-100 text-purple-600">Purple</option>
                    <option value="bg-rose-100 text-rose-600">Rose</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowSalientModal(false)}
                  className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all"
                >
                  {editingSalientIndex !== null ? "Update Feature" : "Add Feature"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

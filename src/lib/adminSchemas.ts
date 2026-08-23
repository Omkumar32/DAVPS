import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, "Email or Username is required"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export const FacultySchema = z.object({
  id: z.string().optional(),
  serialNo: z.number().or(z.string().transform((val) => Number(val))),
  name: z.string().min(2, "Faculty name must be at least 2 characters"),
  designation: z.string().min(2, "Designation is required"),
  qualification: z.string().min(2, "Qualification is required"),
  category: z.enum(["PGT", "TGT", "PRT", "PTI", "PRINCIPAL", "OTHER"]),
  image: z.string().optional(),
});

export type FacultyInput = z.infer<typeof FacultySchema>;

export const NewsSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  date: z.string().min(1, "Date is required"),
  category: z.enum(["Academic", "Notice", "Sports", "Event", "Celebration"]),
  excerpt: z.string().min(5, "Excerpt must be at least 5 characters"),
  fullContent: z.string().min(10, "Content must be at least 10 characters"),
  image: z.string().min(1, "Image URL or upload is required"),
});

export type NewsInput = z.infer<typeof NewsSchema>;

export const GallerySchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, "Title is required"),
  category: z.enum(["Campus", "Events", "Sports", "Academics", "Celebrations", "CBSE Events"]),
  image: z.string().min(1, "Image URL is required"),
  caption: z.string().min(2, "Caption is required"),
  date: z.string().min(1, "Year/Date is required"),
});

export type GalleryInput = z.infer<typeof GallerySchema>;

export const SiteSettingsSchema = z.object({
  heroTitle: z.string().min(3, "School Name is required"),
  heroSubhead: z.string().min(5, "Hero Subtitle is required"),
  tickerText: z.string().min(5, "Announcement text is required"),
  schoolLogo: z.string().optional(),
  heroImage: z.string().optional(),
});

export type SiteSettingsInput = z.infer<typeof SiteSettingsSchema>;

export const NoticeSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, "Notice/Event title must be at least 3 characters"),
  date: z.string().min(1, "Date (YYYY-MM-DD) is required"),
  category: z.string().min(2, "Category is required"),
  description: z.string().optional(),
  pdfUrl: z.string().optional(),
});

export type NoticeInput = z.infer<typeof NoticeSchema>;

export const AchievementSchema = z.object({
  id: z.string().optional(),
  studentName: z.string().min(2, "Student Name is required"),
  title: z.string().min(3, "Title/Distinction is required"),
  category: z.string().min(2, "Category is required"),
  achievement: z.string().min(5, "Achievement details are required"),
  scoreOrMedal: z.string().min(1, "Score or Medal badge is required"),
  year: z.string().min(1, "Year is required"),
  image: z.string().min(1, "Student image or photo upload is required"),
  quote: z.string().optional(),
});

export type AchievementInput = z.infer<typeof AchievementSchema>;

export const ProgramSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, "Program Title is required"),
  grades: z.string().min(1, "Grade/Wing level is required"),
  ageGroup: z.string().min(1, "Age group is required"),
  description: z.string().min(5, "Program description is required"),
  features: z.array(z.string()).min(1, "At least one key feature is required"),
  image: z.string().min(1, "Program image or photo is required"),
  iconName: z.string().optional(),
});

export type ProgramInput = z.infer<typeof ProgramSchema>;



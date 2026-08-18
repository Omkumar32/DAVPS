import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import { SiteSettingsProvider } from "@/context/SiteSettingsContext";
import { generateSchoolJsonLd } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dayanand Arya Vidya Public School, Ranchi | CBSE Affiliated Premium School",
  description:
    "Official website of Dayanand Arya Vidya Public School, Ranchi (Dayanand Arya Vidya Group Of Schools). CBSE Affiliated, state-of-the-art smart classrooms, robotics labs, 5-acre sports ground, and 100% board success rate.",
  keywords: [
    "Dayanand Arya Vidya Public School",
    "DAV Ranchi",
    "Best CBSE School Ranchi",
    "Dayanand Arya Vidya Group Of Schools",
    "Top School Bariatu Ranchi",
    "Ranchi Admissions 2026",
    "Sarala Birla School Ranchi alternative"
  ],
  authors: [{ name: "Dayanand Arya Vidya School Administration" }],
  openGraph: {
    title: "Dayanand Arya Vidya Public School, Ranchi",
    description: "Nurturing Future Leaders with Academic Mastery & Vedic Ethics.",
    url: "https://dayanandariaschool.edu.in",
    siteName: "Dayanand Arya Vidya Public School",
    images: [
      {
        url: "/placeholder.png",
        width: 1200,
        height: 630,
        alt: "Dayanand Arya Vidya Public School Campus"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayanand Arya Vidya Public School, Ranchi",
    description: "CBSE Affiliated Excellence in Education • Admissions Open 2026-27.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateSchoolJsonLd();

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FFFDF9] text-slate-900 min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
        <SiteSettingsProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}

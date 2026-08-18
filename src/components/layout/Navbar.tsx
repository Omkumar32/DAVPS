"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSiteSettings } from "@/context/SiteSettingsContext";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admission", href: "/admissions" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Achievements", href: "/achievements" },
  { name: "News & Events", href: "/news-events" },
  { name: "Contact", href: "/contact" },
];

const ABOUT_SUB_TABS = [
  { name: "About Us", href: "/about" },
  { name: "General Information", href: "/general-information" },
  { name: "Principal Message", href: "/principal-message" },
  { name: "Director Message", href: "/director-message" },
  { name: "Mission & Vision", href: "/about#mission-vision" },
  { name: "Management", href: "/about#management" },
  { name: "Curriculum", href: "/about#curriculum" },
  { name: "Faculty", href: "/faculty" },
  { name: "Mandatory Public Disclosure", href: "/mandatory-public-disclosure" },
];


const ACADEMICS_SUB_TABS = [
  { name: "Academic Programs", href: "/academics" },
  { name: "Seminar-Workshop-Training Program", href: "/seminar-workshop-training" },
  { name: "Learning Resources", href: "/learning-resources" },
  { name: "Exam Policy", href: "/exam-policy" },
  { name: "School Rules", href: "/school-rules" },
];


export default function Navbar() {
  const { settings } = useSiteSettings();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-slate-900 shadow-sm border-b border-slate-200/90 h-[88px] flex items-center">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 w-full">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & School Name */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group py-1">
              {settings.schoolLogo ? (
                /* Custom Uploaded School Logo */
                <div className="relative h-14 w-14 sm:h-[64px] sm:w-[64px] xl:h-[64px] xl:w-[64px] shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={settings.schoolLogo}
                    alt="Dayanand Arya Vidya Public School Logo"
                    className="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
              ) : (
                /* Professional School Emblem Badge */
                <div className="w-14 h-14 sm:w-[64px] sm:h-[64px] xl:w-[64px] xl:h-[64px] rounded-2xl bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center text-center p-1 border border-amber-300/40">
                    <span className="text-[9px] font-black text-amber-400 tracking-wider leading-none">DAV</span>
                    <span className="text-[7px] font-bold text-white tracking-tight leading-none mt-0.5">MANDAR</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col text-left py-0.5 max-w-[170px] sm:max-w-[220px] xl:max-w-[200px] 2xl:max-w-[280px] shrink-0">
                <span className="text-xs sm:text-sm xl:text-[13px] 2xl:text-base font-black text-slate-900 tracking-tight leading-tight uppercase group-hover:text-orange-600 transition-colors">
                  {settings.heroTitle}
                </span>
              </div>
            </Link>

            {/* Vertical Grid Line Divider shifted left */}
            <div className="hidden xl:block h-8 w-px bg-slate-300/80 ml-2.5 mr-3.5 xl:ml-3 xl:mr-4 shrink-0" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-3.5 xl:gap-5 2xl:gap-7 shrink-0">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isAbout = link.name === "About Us";
              const isAcademics = link.name === "Academics";

              if (isAbout || isAcademics) {
                const subTabs = isAbout ? ABOUT_SUB_TABS : ACADEMICS_SUB_TABS;
                return (
                  <div key={link.href} className="relative group py-2">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-xs xl:text-[13px] 2xl:text-[14.5px] font-black tracking-tight transition-all relative py-2 px-1 whitespace-nowrap flex items-center gap-1 cursor-pointer",
                        isActive
                          ? "text-orange-600"
                          : "text-slate-900 hover:text-orange-600"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-700 group-hover:text-orange-600 transition-transform group-hover:rotate-180" />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-orange-600 rounded-full animate-fadeIn" />
                      )}
                    </Link>

                    {/* Sub-tabs Dropdown Menu */}
                    <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                      {subTabs.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center justify-between px-4 py-2.5 text-xs font-black text-slate-800 hover:bg-orange-50 hover:text-orange-600 transition-all rounded-xl mx-1"
                        >
                          <span>{sub.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs xl:text-[13px] 2xl:text-[14.5px] font-black tracking-tight transition-all relative py-2 px-1 whitespace-nowrap",
                    isActive
                      ? "text-orange-600"
                      : "text-slate-900 hover:text-orange-600"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-orange-600 rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Section */}
          <div className="flex items-center shrink-0">
            {/* Vertical Divider before Action Buttons */}
            <div className="hidden xl:block h-7 w-px bg-slate-200/90 mx-2 shrink-0" />

            <div className="flex items-center gap-1.5 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center px-2.5 py-1.5 rounded-lg text-[10.5px] xl:text-[11px] font-black uppercase tracking-wider whitespace-nowrap bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-sm transition-all hover:scale-105 shrink-0"
              >
                Careers
              </Link>
              <Link
                href="/admissions"
                className="hidden sm:inline-flex items-center justify-center px-2.5 py-1.5 rounded-lg text-[10.5px] xl:text-[11px] font-black uppercase tracking-wider whitespace-nowrap bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-sm transition-all hover:scale-105 shrink-0"
              >
                Apply Now
              </Link>

              {/* Mobile Drawer Trigger Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none shrink-0"
              >
                {isOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[88px] bg-white border-b border-slate-200 shadow-2xl p-4 space-y-3 z-50 max-h-[calc(100vh-100px)] overflow-y-auto animate-fadeIn">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isAbout = link.name === "About Us";
              const isAcademics = link.name === "Academics";

              if (isAbout || isAcademics) {
                const subTabs = isAbout ? ABOUT_SUB_TABS : ACADEMICS_SUB_TABS;
                return (
                  <div key={link.href} className="space-y-1">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all",
                        isActive
                          ? "bg-orange-50 text-orange-600 font-black border-l-4 border-orange-600"
                          : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>

                    {/* Mobile Sub-tabs list */}
                    <div className="pl-4 space-y-1 border-l-2 border-orange-200 ml-4 py-1">
                      {subTabs.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all",
                    isActive
                      ? "bg-orange-50 text-orange-600 font-black border-l-4 border-orange-600"
                      : "text-slate-800 hover:bg-slate-50 hover:text-orange-600"
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 space-y-2">
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-black uppercase text-xs tracking-wider bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-md"
            >
              <span>Online Admission Form</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919431102847"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold bg-slate-100 text-slate-800 text-xs border border-slate-200"
            >
              <PhoneCall className="w-4 h-4 text-orange-600" />
              <span>Helpline: +91 94311 02847</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Clock, Award, ExternalLink, ShieldCheck } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useSiteSettings } from "@/context/SiteSettingsContext";

export default function Footer() {
  const { settings } = useSiteSettings();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {settings.schoolLogo ? (
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-white p-1 shadow-md">
                  <img
                    src={settings.schoolLogo}
                    alt="Dayanand Arya Vidya Public School Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight uppercase">
                  Dayanand Arya Vidya
                </span>
                <span className="text-[11px] font-bold text-amber-300 tracking-wider uppercase">
                  Public School • Ranchi
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering young minds through academic excellence, Vedic values, holistic development, and modern technical skills since 1999.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-300 font-medium">
              <Award className="w-4 h-4 text-orange-500" />
              <span>{SCHOOL_INFO.affiliation}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500 hover:bg-orange-600 hover:text-white flex items-center justify-center text-slate-400 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter X" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500 hover:bg-orange-600 hover:text-white flex items-center justify-center text-slate-400 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500 hover:bg-orange-600 hover:text-white flex items-center justify-center text-slate-400 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500 hover:bg-orange-600 hover:text-white flex items-center justify-center text-slate-400 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>About Our School</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Academic Curriculum</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Campus & Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Photo & Video Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Student Hall of Fame</span>
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>School News & Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-3">
              Admissions Info
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/admissions" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Admission Procedure 2026</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions#eligibility" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Age Eligibility Criteria</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions#fee-structure" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Fee Structure & Guidelines</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-3">
              Contact Campus
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Campus Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

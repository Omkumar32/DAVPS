"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TopAnnouncementBar from "@/components/layout/TopAnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingEnquiryWidget from "@/components/layout/FloatingEnquiryWidget";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <main className="flex-1 min-h-screen bg-slate-950 text-slate-100">{children}</main>;
  }

  return (
    <>
      <TopAnnouncementBar />
      <Navbar />
      <main className="flex-1 overflow-x-hidden max-w-full w-full">{children}</main>
      <Footer />
      <FloatingEnquiryWidget />
    </>
  );
}

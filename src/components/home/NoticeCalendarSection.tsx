"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Download, Calendar as CalendarIcon, ExternalLink, ImageIcon } from "lucide-react";
import { useSiteSettings, NoticeItem } from "@/context/SiteSettingsContext";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const YEARS = [2025, 2026, 2027];
const DAYS_OF_WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function NoticeCalendarSection() {
  const { notices } = useSiteSettings();
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(7); // Aug (0-indexed)
  const [selectedDay, setSelectedDay] = useState(1); // Aug 1

  const monthName = MONTHS[selectedMonthIdx];
  const dateKey = `${selectedYear}-${String(selectedMonthIdx + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
  const dayNameStr = new Date(selectedYear, selectedMonthIdx, selectedDay).toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();

  // Create lookup map for dateKey ("YYYY-MM-DD") -> NoticeItem[]
  const noticesByDate = notices.reduce<Record<string, NoticeItem[]>>((acc, notice) => {
    if (!acc[notice.date]) {
      acc[notice.date] = [];
    }
    acc[notice.date].push(notice);
    return acc;
  }, {});

  const selectedDateNotices = noticesByDate[dateKey] || [];

  // Generate dynamic calendar grid for selectedYear and selectedMonthIdx
  const getCalendarGrid = () => {
    const firstDayObj = new Date(selectedYear, selectedMonthIdx, 1);
    let startDayOfWeek = firstDayObj.getDay(); // 0 = Sun, 1 = Mon...
    const dayOffset = (startDayOfWeek + 6) % 7; // Monday = 0

    const daysInCurrentMonth = new Date(selectedYear, selectedMonthIdx + 1, 0).getDate();
    const daysInPrevMonth = new Date(selectedYear, selectedMonthIdx, 0).getDate();

    const grid: {
      day: number;
      dateKey: string;
      isPrevMonth?: boolean;
      isNextMonth?: boolean;
      hasNotice: boolean;
    }[] = [];

    // Prev month days
    for (let i = dayOffset - 1; i >= 0; i--) {
      const pDay = daysInPrevMonth - i;
      const pMonthIdx = selectedMonthIdx === 0 ? 11 : selectedMonthIdx - 1;
      const pYear = selectedMonthIdx === 0 ? selectedYear - 1 : selectedYear;
      const dKey = `${pYear}-${String(pMonthIdx + 1).padStart(2, "0")}-${String(pDay).padStart(2, "0")}`;
      grid.push({
        day: pDay,
        dateKey: dKey,
        isPrevMonth: true,
        hasNotice: !!(noticesByDate[dKey] && noticesByDate[dKey].length > 0),
      });
    }

    // Current month days
    for (let d = 1; d <= daysInCurrentMonth; d++) {
      const dKey = `${selectedYear}-${String(selectedMonthIdx + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      grid.push({
        day: d,
        dateKey: dKey,
        hasNotice: !!(noticesByDate[dKey] && noticesByDate[dKey].length > 0),
      });
    }

    // Next month days to make total cells multiple of 7
    const totalCells = Math.ceil(grid.length / 7) * 7;
    const remainingCells = totalCells - grid.length;
    for (let n = 1; n <= remainingCells; n++) {
      const nMonthIdx = selectedMonthIdx === 11 ? 0 : selectedMonthIdx + 1;
      const nYear = selectedMonthIdx === 11 ? selectedYear + 1 : selectedYear;
      const dKey = `${nYear}-${String(nMonthIdx + 1).padStart(2, "0")}-${String(n).padStart(2, "0")}`;
      grid.push({
        day: n,
        dateKey: dKey,
        isNextMonth: true,
        hasNotice: !!(noticesByDate[dKey] && noticesByDate[dKey].length > 0),
      });
    }

    return grid;
  };

  const calendarGrid = getCalendarGrid();

  return (
    <section className="bg-[#F3F4F6] pt-6 pb-12 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Notices & Announcements
          </h2>
        </div>

        {/* 100% PERFECT VERTICAL ALIGNMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Big Academic Calendar (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between h-full">
            <div className="space-y-6">
              
              {/* Top Row: Year Selector Bar + Card Subhead */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">School Schedule</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
                    Academic Calendar
                  </h3>
                </div>

                {/* Year Selector Pill */}
                <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200">
                  <button
                    onClick={() => setSelectedYear((y) => Math.max(2024, y - 1))}
                    className="w-7 h-7 rounded-xl bg-white hover:bg-slate-200 text-slate-800 font-black flex items-center justify-center transition-colors text-xs shadow-sm"
                  >
                    &lt;
                  </button>

                  {YEARS.map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-3.5 py-1 rounded-xl text-xs font-black transition-all ${
                        selectedYear === yr
                          ? "bg-orange-600 text-white shadow-md shadow-orange-600/30"
                          : "text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {yr}
                    </button>
                  ))}

                  <button
                    onClick={() => setSelectedYear((y) => Math.min(2028, y + 1))}
                    className="w-7 h-7 rounded-xl bg-white hover:bg-slate-200 text-slate-800 font-black flex items-center justify-center transition-colors text-xs shadow-sm"
                  >
                    &gt;
                  </button>
                </div>
              </div>

              {/* Month Navigator Header */}
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedMonthIdx(0)}
                    className="w-8 h-8 rounded-xl bg-white hover:bg-amber-100 text-amber-900 font-black flex items-center justify-center transition-colors text-xs border border-slate-200 shadow-sm"
                    title="First Month"
                  >
                    «
                  </button>
                  <button
                    onClick={() => setSelectedMonthIdx((m) => Math.max(0, m - 1))}
                    className="w-8 h-8 rounded-xl bg-white hover:bg-amber-100 text-amber-900 font-black flex items-center justify-center transition-colors text-xs border border-slate-200 shadow-sm"
                    title="Previous Month"
                  >
                    ‹
                  </button>
                </div>

                <span className="px-5 py-1 rounded-xl bg-white text-orange-600 border border-amber-300 font-black text-sm uppercase tracking-wider shadow-sm">
                  {monthName} {selectedYear}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedMonthIdx((m) => Math.min(11, m + 1))}
                    className="w-8 h-8 rounded-xl bg-white hover:bg-amber-100 text-amber-900 font-black flex items-center justify-center transition-colors text-xs border border-slate-200 shadow-sm"
                    title="Next Month"
                  >
                    ›
                  </button>
                  <button
                    onClick={() => setSelectedMonthIdx(11)}
                    className="w-8 h-8 rounded-xl bg-white hover:bg-amber-100 text-amber-900 font-black flex items-center justify-center transition-colors text-xs border border-slate-200 shadow-sm"
                    title="Last Month"
                  >
                    »
                  </button>
                </div>
              </div>

              {/* Days of Week Header */}
              <div className="grid grid-cols-7 text-center gap-2 text-xs font-black text-slate-800 tracking-wider uppercase">
                {DAYS_OF_WEEK.map((d) => (
                  <div key={d} className="py-1 text-slate-600">
                    {d}
                  </div>
                ))}
              </div>

              {/* Big Days Grid */}
              <div className="grid grid-cols-7 gap-2 text-sm sm:text-base font-bold text-center">
                {calendarGrid.map((item, idx) => {
                  const isCurrentSelected = !item.isPrevMonth && !item.isNextMonth && item.day === selectedDay;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (!item.isPrevMonth && !item.isNextMonth) {
                          setSelectedDay(item.day);
                        }
                      }}
                      className={`relative h-11 sm:h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isCurrentSelected
                          ? "bg-orange-600 text-white font-black shadow-lg shadow-orange-600/30 ring-4 ring-orange-600/20 scale-105"
                          : item.isPrevMonth || item.isNextMonth
                          ? "text-slate-300 opacity-40 pointer-events-none"
                          : "text-slate-800 hover:bg-amber-100/70 hover:scale-105"
                      }`}
                    >
                      <span className="text-sm sm:text-base">{item.day}</span>
                      
                      {/* Orange Dot Indicator for notices */}
                      {item.hasNotice && !isCurrentSelected && (
                        <span className="absolute bottom-1.5 w-2.5 h-2.5 rounded-full bg-orange-600 shadow-sm" />
                      )}
                      {item.hasNotice && isCurrentSelected && (
                        <span className="absolute bottom-1.5 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-sm" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs font-bold text-slate-600 border-t border-slate-100 mt-4">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block" />
                <span>Academic Events / Circulars</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                <span>Regular School Days</span>
              </span>
            </div>

          </div>


          {/* RIGHT SIDE: Notice Board Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between h-full">
            <div className="space-y-6">
              
              {/* Notice Header */}
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Selected Date Circulars</span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase font-sans">
                    NOTICES FOR {dayNameStr} {monthName.toUpperCase()} {String(selectedDay).padStart(2, "0")} {selectedYear}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs whitespace-nowrap w-fit">
                  {selectedDateNotices.length} Notice{selectedDateNotices.length === 1 ? "" : "s"}
                </span>
              </div>

              {/* Notice Body */}
              {selectedDateNotices.length > 0 ? (
                <div className="space-y-4 py-2 max-h-[380px] overflow-y-auto pr-1">
                  {selectedDateNotices.map((notice) => (
                    <div
                      key={notice.id}
                      className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 hover:border-orange-500 transition-all flex items-start gap-4 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-orange-700 bg-amber-200/80 px-2 py-0.5 rounded">
                          {notice.category}
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">{notice.title}</h4>
                        <p className="text-xs text-slate-600 font-normal">
                          {notice.description || "Official school notification issued by administration desk for parents and students."}
                        </p>
                        {notice.pdfUrl && (
                          <div className="pt-2">
                            {notice.pdfUrl.startsWith("data:image/") || /\.(png|jpg|jpeg|webp)$/i.test(notice.pdfUrl) ? (
                              <div className="space-y-2">
                                <a
                                  href={notice.pdfUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-100/60 px-3 py-1.5 rounded-xl border border-orange-200"
                                >
                                  <ImageIcon className="w-3.5 h-3.5 text-orange-600" />
                                  <span>View Attached Circular Photo</span>
                                  <ExternalLink className="w-3 h-3 ml-0.5 text-orange-500" />
                                </a>
                                {notice.pdfUrl.startsWith("data:image/") && (
                                  <div className="relative h-28 w-full rounded-xl overflow-hidden border border-amber-200 shadow-sm mt-1">
                                    <img src={notice.pdfUrl} alt="Attached Notice Photo" className="w-full h-full object-cover" />
                                  </div>
                                )}
                              </div>
                            ) : (
                              <a
                                href={notice.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-100/60 px-3 py-1.5 rounded-xl border border-orange-200"
                              >
                                <Download className="w-3.5 h-3.5 text-orange-600" />
                                <span>Download Official Notice (PDF)</span>
                                <ExternalLink className="w-3 h-3 ml-0.5 text-orange-500" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* No Notice Today Cute Illustration */
                <div className="py-6 flex flex-col items-center justify-center text-center space-y-3 my-auto">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                    <Image
                      src="/images/notice_board_girl.jpg"
                      alt="No Notice Today"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="text-xs text-slate-500 max-w-xs">
                    No active circulars or notices posted for this date. Click another date on the calendar.
                  </p>
                </div>
              )}

            </div>

            {/* Bottom Footer Info */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-4">
              <span className="font-semibold">DAY DAV Public School Desk</span>
              <a href="/news-events" className="text-orange-600 font-bold hover:underline">
                View All Archives →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

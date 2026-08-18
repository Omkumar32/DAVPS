"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { NEWS_EVENTS_DATA, NewsItem } from "@/data/schoolData";
import { Calendar, Search, Clock, User, ChevronRight, X, CheckCircle2, Send } from "lucide-react";

export default function NewsEventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const filteredNews = NEWS_EVENTS_DATA.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="News & Upcoming Events"
        subtitle="Stay updated with school circulars, academic events, parent workshops, science expos, and holiday schedules."
        
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          badge="School Updates"
          title="Announcements & Event Calendar"
          subtitle="Explore recent updates or filter by category."
        />

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl shadow-lg border border-slate-200">
          {/* Search input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news or events..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Academic", "Event", "Sports", "Notice"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-red-700 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col sm:flex-row hover:border-red-600/50 hover:shadow-2xl transition-all group"
            >
              <div className="relative h-56 sm:h-auto sm:w-5/12 bg-slate-900 shrink-0">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="300px"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-amber-400 font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm border border-slate-700">
                  {news.category}
                </div>
              </div>

              <div className="p-6 sm:w-7/12 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-red-600" />{news.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" />{news.readTime}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-700 transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {news.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {news.author}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedNews(news);
                      setRsvpSubmitted(false);
                    }}
                    className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-slideUp">
            
            <div className="relative h-64 w-full bg-slate-900">
              <Image
                src={selectedNews.image}
                alt={selectedNews.title}
                fill
                className="object-cover"
                sizes="700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                  {selectedNews.category} • {selectedNews.date}
                </span>
                <h3 className="text-xl font-bold text-white">{selectedNews.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-700 leading-relaxed font-normal">{selectedNews.fullContent}</p>

              {/* RSVP Form inside modal */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-900">Interested in attending this event? RSVP Below</h4>
                {rsvpSubmitted ? (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Your RSVP has been registered! We will send an event pass.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRsvpSubmitted(true);
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter parent email address"
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 outline-none focus:border-red-600"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-bold flex items-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>RSVP</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

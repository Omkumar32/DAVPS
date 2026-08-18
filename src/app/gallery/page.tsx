"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { GALLERY_DATA, GalleryItem } from "@/data/schoolData";
import { Maximize2, Tag, Calendar } from "lucide-react";

const CATEGORIES = ["All", "Campus", "Events", "Sports", "Academics", "Celebrations", "CBSE Events"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Photo & Event Gallery"
        subtitle="Capturing moments of joy, academic discovery, athletic triumphs, and cultural celebrations at Dayanand Arya Vidya Public School."
        
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Moments in Time"
          title="Campus Life Gallery"
          subtitle="Click on any image to expand full-screen in our Lightbox viewer."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-red-700 text-white shadow-lg shadow-red-900/30 scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-200 cursor-pointer bg-slate-900"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-amber-400 flex items-center justify-center border border-slate-700 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all">
                <Maximize2 className="w-5 h-5" />
              </div>

              {/* Card Caption */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white space-y-2">
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                  <span className="text-slate-300 flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 font-normal">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}

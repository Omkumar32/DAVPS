"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { FACULTY_MEMBERS, FacultyMember } from "@/data/facultyData";
import { Search, Filter, GraduationCap, Award, BookOpen, UserCheck, LayoutGrid, Table } from "lucide-react";

export default function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter((member) => {
      const matchesCategory =
        selectedCategory === "ALL"
          ? true
          : selectedCategory === "PRINCIPAL"
          ? member.designation === "PRINCIPAL"
          : selectedCategory === "PGT"
          ? member.designation === "PGT"
          : selectedCategory === "TGT"
          ? member.designation === "TGT"
          : selectedCategory === "PRT"
          ? member.designation === "PRT"
          : selectedCategory === "PTI"
          ? member.designation === "PTI" || member.subjectTaught.includes("LIBRARY")
          : true;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        member.name.toLowerCase().includes(q) ||
        member.subjectTaught.toLowerCase().includes(q) ||
        member.highestQualification.toLowerCase().includes(q) ||
        member.oasisId.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Group by departments for the structured section view
  const departments = useMemo(() => {
    return [
      {
        title: "ADMINISTRATION & LEADERSHIP",
        members: filteredFaculty.filter((m) => m.designation === "PRINCIPAL"),
      },
      {
        title: "SENIOR SECONDARY FACULTY (PGT)",
        members: filteredFaculty.filter((m) => m.designation === "PGT"),
      },
      {
        title: "SECONDARY & MIDDLE SCHOOL FACULTY (TGT)",
        members: filteredFaculty.filter((m) => m.designation === "TGT"),
      },
      {
        title: "PRIMARY & PRE-PRIMARY FACULTY (PRT)",
        members: filteredFaculty.filter((m) => m.designation === "PRT"),
      },
      {
        title: "SPORTS, LIBRARY & SPECIALIST FACULTY",
        members: filteredFaculty.filter((m) => m.designation === "PTI" || m.subjectTaught.includes("LIBRARY") || m.subjectTaught.includes("MUSIC")),
      },
    ].filter((dept) => dept.members.length > 0);
  }, [filteredFaculty]);

  return (
    <div className="space-y-16 pb-20 bg-slate-50/60 min-h-screen">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Faculty & Teaching Staff"
        subtitle="Meet the 50+ qualified, passionate educators and mentors of Dayanand Arya Vidya Public School."
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-1">
            <span className="text-3xl font-black text-slate-900">50+</span>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Certified Faculty</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-1">
            <span className="text-3xl font-black text-orange-600">100%</span>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">CBSE / OASIS Registered</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-1">
            <span className="text-3xl font-black text-amber-600">12:1</span>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Student-Teacher Ratio</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-1">
            <span className="text-3xl font-black text-emerald-600">M.A / M.Sc / B.Ed</span>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Qualified Pedagogy</p>
          </div>
        </div>

        {/* DISPLAY MODE 1: CARD GRID BY DEPARTMENTS (MATCHING IMAGE 1 UI) */}
        {viewMode === "grid" && (
          <div className="space-y-16">
            {departments.map((dept, deptIdx) => (
              <div key={deptIdx} className="space-y-8">
                
                {/* Department Section Header with Line Rule */}
                <div className="flex items-center gap-4">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-wider uppercase font-serif">
                    {dept.title}
                  </h3>
                  <div className="h-0.5 bg-slate-300 flex-1 rounded-full" />
                  <span className="text-xs font-extrabold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    {dept.members.length} Members
                  </span>
                </div>

                {/* 4-Column Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dept.members.map((member) => (
                    <div
                      key={member.sno}
                      className="bg-white rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
                    >
                      {/* Top Image Container */}
                      <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="350px"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-amber-400 font-extrabold text-[10px] uppercase rounded-lg border border-slate-700">
                          {member.designation}
                        </div>
                      </div>

                      {/* Card Content Footer (Matching Image 1 Styling) */}
                      <div className="bg-[#FAF9F6] p-5 text-center border-t border-slate-100 flex flex-col justify-between flex-1 space-y-2">
                        <div>
                          <h4 className="font-serif font-black text-slate-900 text-base sm:text-lg tracking-tight leading-snug">
                            {member.name}
                          </h4>
                          <p className="text-xs font-bold text-orange-700 mt-0.5">
                            {member.designation === "PRINCIPAL"
                              ? "Head of Institution"
                              : `${member.designation} | ${member.subjectTaught}`}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-200/60 space-y-1 text-[11px]">
                          <div className="text-slate-600 font-semibold truncate">
                            🎓 {member.highestQualification}
                          </div>
                          <div className="text-slate-400 font-bold text-[10px] uppercase">
                            OASIS ID: <span className="text-slate-700">{member.oasisId}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* DISPLAY MODE 2: CBSE TABLE VIEW */}
        {viewMode === "table" && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4">S.No</th>
                    <th className="p-4">Teacher Name</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">OASIS ID</th>
                    <th className="p-4">Designation</th>
                    <th className="p-4">Highest Qualification</th>
                    <th className="p-4">Subject Taught</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  {filteredFaculty.map((member) => (
                    <tr key={member.sno} className="hover:bg-orange-50/50 transition-colors">
                      <td className="p-4 font-bold text-slate-400">{member.sno}</td>
                      <td className="p-4 font-extrabold text-slate-900 flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-300 shrink-0">
                          <Image src={member.image} alt={member.name} fill className="object-cover" />
                        </div>
                        <span>{member.name}</span>
                      </td>
                      <td className="p-4 font-bold text-slate-600">{member.gender}</td>
                      <td className="p-4 font-mono font-bold text-orange-700">{member.oasisId}</td>
                      <td className="p-4 font-black">
                        <span className="px-2.5 py-1 bg-slate-100 rounded-lg text-slate-800 text-xs">
                          {member.designation}
                        </span>
                      </td>
                      <td className="p-4 text-slate-700 font-semibold">{member.highestQualification}</td>
                      <td className="p-4 font-extrabold text-amber-700">{member.subjectTaught}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { MessageSquare, X, Send, CheckCircle2, User, Mail, Phone, BookOpen } from "lucide-react";

export default function FloatingEnquiryWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    targetClass: "Grade 1",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: `Applicant (${formData.targetClass})`,
          parentName: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          grade: formData.targetClass,
          address: formData.message,
        }),
      });
    } catch (err) {
      console.error("Failed to post enquiry:", err);
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({ parentName: "", email: "", phone: "", targetClass: "Grade 1", message: "" });
    }, 3000);
  };


  return (
    <>
      {/* Sleek Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white rounded-xl shadow-2xl shadow-orange-900/40 hover:scale-105 active:scale-95 transition-all group font-black text-[11px] sm:text-sm uppercase tracking-wider border border-white/20 outline-none focus:outline-none focus:ring-0"
        aria-label="Quick Admission Enquiry"
      >
        <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
        <span>Admissions Enquiry</span>
      </button>

      {/* Slide-up Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-amber-100 animate-slideUp">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">Dayanand Arya Vidya</span>
                <h3 className="text-lg font-extrabold leading-tight">Admission Enquiry 2026-27</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Enquiry Received!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Thank you for reaching out. Our admissions counselor will contact you at <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Guardian Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile"
                          className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Applying For *</label>
                      <div className="relative">
                        <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          value={formData.targetClass}
                          onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none bg-white transition-all"
                        >
                          <option>Nursery - UKG</option>
                          <option>Grade 1 - 5</option>
                          <option>Grade 6 - 8</option>
                          <option>Grade 9 - 10</option>
                          <option>Grade 11 Science</option>
                          <option>Grade 11 Commerce</option>
                          <option>Grade 11 Arts</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Any Specific Queries?</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about fee structure, transport routes, entrance test syllabus..."
                      className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-xs font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-md shadow-orange-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Quick Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

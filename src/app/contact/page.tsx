"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { SCHOOL_INFO } from "@/data/schoolData";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20">
      <PageHeader
        title="Contact Us"
        subtitle="Have questions about admissions, fees, or academics? We are here to assist you. Reach out to our campus office or visit us in person."
        
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Reach Out"
          title="Campus Contact Directory"
          subtitle="Direct phone numbers, office hours, and department desks."
        />

        {/* Info Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 space-y-3 hover:border-red-600 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Campus Location</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{SCHOOL_INFO.address}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 space-y-3 hover:border-amber-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Admissions Helpline</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{SCHOOL_INFO.phone}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 space-y-3 hover:border-slate-900 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Email Inquiry</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{SCHOOL_INFO.email}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 space-y-3 hover:border-emerald-600 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Working Hours</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{SCHOOL_INFO.workingHours}</p>
          </div>
        </div>

        {/* 2-Column Form & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 space-y-6">
            <div>
              <span className="text-xs font-bold text-red-700 uppercase tracking-widest">Send Inquiry</span>
              <h3 className="text-2xl font-black text-slate-900">Parent Communication Form</h3>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold text-slate-900">Inquiry Submitted!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Dayanand Arya Vidya Public School. Our admissions coordinator will contact you at <strong>{form.phone}</strong> or <strong>{form.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Department / Subject *</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none bg-white transition-all"
                    >
                      <option>Admissions Enquiry 2026-27</option>
                      <option>Fee Structure & Payment</option>
                      <option>Bus Transport Route Inquiry</option>
                      <option>Academic & Transfer Certificate</option>
                      <option>Principal Office Appointment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your questions or message here..."
                    className="w-full p-4 text-xs rounded-xl border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-xs font-bold bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white shadow-xl shadow-red-700/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map Frame & Department Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4 border border-slate-800 shadow-xl">
              <h4 className="text-base font-bold border-l-4 border-amber-500 pl-3">Department Extensions</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="font-semibold text-white">Admissions Desk</span>
                  <span className="text-amber-400 font-bold">+91 94311 02847</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="font-semibold text-white">Accounts & Fee Section</span>
                  <span className="text-amber-400 font-bold">Ext. 102</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="font-semibold text-white">Transport In-Charge</span>
                  <span className="text-amber-400 font-bold">+91 94311 02848</span>
                </li>
                <li className="flex justify-between py-1.5">
                  <span className="font-semibold text-white">Principal Secretariat</span>
                  <span className="text-amber-400 font-bold">Ext. 101</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-200 rounded-3xl h-80 overflow-hidden relative shadow-lg border border-slate-300">
              <iframe
                title="School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.274189391039!2d85.3484!3d23.3852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e137c8e878bd%3A0xb3a82efd978a3c8a!2sBariatu%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

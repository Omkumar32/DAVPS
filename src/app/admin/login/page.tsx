"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2, KeyRound } from "lucide-react";
import { LoginSchema } from "@/lib/adminSchemas";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@dayanandariaschool.edu.in");
  const [password, setPassword] = useState("Admin@DAV2026");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Zod validation
    const validation = LoginSchema.safeParse({ email, password });
    if (!validation.success) {
      setErrorMsg(validation.error.issues[0]?.message || "Invalid input parameters");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/nextauth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        // Redirect to protected admin dashboard
        router.push("/admin");
        router.refresh();
      } else {
        setErrorMsg(data.message || "Invalid email or password");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full space-y-8 relative z-10">
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 p-0.5 shadow-xl">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
            School Admin Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Dayanand Arya Vidya Public School, Mandar, Ranchi
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl space-y-6">
          
          {/* Default Credentials Hint Box */}
          <div className="p-4 bg-orange-950/60 border border-orange-800/80 rounded-2xl text-xs space-y-1.5">
            <div className="flex items-center gap-2 font-black text-amber-400">
              <KeyRound className="w-4 h-4 text-orange-500" />
              <span>Default Admin Credentials:</span>
            </div>
            <p className="text-slate-300 font-medium">
              Email: <code className="text-amber-300 font-bold">admin@dayanandariaschool.edu.in</code>
            </p>
            <p className="text-slate-300 font-medium">
              Password: <code className="text-amber-300 font-bold">Admin@DAV2026</code>
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 bg-rose-950/80 border border-rose-800 text-rose-300 rounded-2xl text-xs font-bold flex items-center gap-3.5">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Admin Email or Username
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@dayanandariaschool.edu.in"
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-12 text-xs font-bold text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In to Admin Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

        </div>

        {/* Back to Public Site */}
        <div className="text-center">
          <Link
            href="/"
            className="text-xs font-bold text-slate-400 hover:text-orange-400 transition-colors"
          >
            ← Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
}

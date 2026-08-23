import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  category?: string;
  bgImage?: string;
}

export default function PageHeader({ title, subtitle, category = "Dayanand Arya Vidya Public School", bgImage }: PageHeaderProps) {
  return (
    <div className="relative bg-slate-950 text-white py-16 sm:py-24 overflow-hidden border-b border-slate-800">
      {bgImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          {/* Subtle left-side dark gradient: ensures text readability on left while photo remains 100% bright and clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        </>
      ) : (
        <>
          {/* Radial Gradient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-300 mb-4 font-medium">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-amber-400" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-amber-300 font-bold">{title}</span>
        </nav>

        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-orange-600/90 text-white border border-orange-400/30 mb-3 shadow-md backdrop-blur-md">
          {category}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-md">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-100 max-w-3xl leading-relaxed font-medium drop-shadow-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

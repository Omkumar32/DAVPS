import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 max-w-3xl mb-12",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm",
            dark
              ? "bg-slate-800 text-amber-300 border border-slate-700"
              : "bg-amber-100/80 text-orange-800 border border-amber-200"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
          {badge}
        </span>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight",
          dark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed font-normal",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

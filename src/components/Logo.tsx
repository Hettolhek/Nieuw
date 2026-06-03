interface LogoProps {
  className?: string;
  color?: string;
}

export function Logo({ className = "", color = "currentColor" }: LogoProps) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <svg
        viewBox="0 0 64 48"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-auto"
      >
        <line x1="6" y1="4" x2="6" y2="44" />
        <line x1="58" y1="4" x2="58" y2="44" />
        <line x1="6" y1="10" x2="58" y2="10" />
        <line x1="6" y1="38" x2="58" y2="38" />
        <line x1="6" y1="38" x2="58" y2="10" />
        <line x1="6" y1="10" x2="32" y2="38" />
      </svg>
      <span
        className="text-[11px] uppercase tracking-[0.35em] font-medium"
        style={{ color }}
      >
        het Tolhek
      </span>
    </div>
  );
}

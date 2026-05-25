interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  color?: string;
}

export function Logo({
  className = "",
  iconOnly = false,
  color = "currentColor",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Fence/gate (tolhek) icon */}
      <svg
        viewBox="0 0 64 48"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-auto sm:h-9"
      >
        {/* Left post */}
        <line x1="6" y1="4" x2="6" y2="44" />
        {/* Right post */}
        <line x1="58" y1="4" x2="58" y2="44" />
        {/* Top rail */}
        <line x1="6" y1="10" x2="58" y2="10" />
        {/* Bottom rail */}
        <line x1="6" y1="38" x2="58" y2="38" />
        {/* Diagonal brace */}
        <line x1="6" y1="38" x2="58" y2="10" />
        {/* Cross diagonal */}
        <line x1="6" y1="10" x2="32" y2="38" />
      </svg>

      {!iconOnly && (
        <span
          className="text-xl sm:text-2xl tracking-wide"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <span className="italic font-light">het</span>{" "}
          <span className="font-medium">Tolhek</span>
        </span>
      )}
    </div>
  );
}

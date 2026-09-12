const PALETTES = {
  majorelle: { bg: "#33499E", fg: "#E7EAF6", accent: "#93381E" },
  zellige: { bg: "#C1502E", fg: "#F7F4EB", accent: "#33499E" },
  fes: { bg: "#1C6E56", fg: "#E1EFE9", accent: "#C1502E" },
} as const;

// Deterministic pseudo-random from a seed, so server and client render the same output.
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function TilePattern({
  seed,
  palette,
  className,
}: {
  seed: number;
  palette: keyof typeof PALETTES;
  className?: string;
}) {
  const { bg, fg, accent } = PALETTES[palette];
  const rot = Math.floor(rand(seed) * 45);
  const scale = 0.85 + rand(seed * 2) * 0.4;
  const id = `star-${seed}`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Motif décoratif"
    >
      <rect width="200" height="200" fill={bg} />
      <defs>
        <pattern
          id={id}
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${rot}) scale(${scale.toFixed(2)})`}
        >
          <rect width="50" height="50" fill={bg} />
          {/* eight-point star motif */}
          <g transform="translate(25,25)">
            <path
              d="M0,-18 L5,-5 L18,0 L5,5 L0,18 L-5,5 L-18,0 L-5,-5 Z"
              fill={fg}
              opacity="0.9"
            />
            <path
              d="M0,-12 L3.5,-3.5 L12,0 L3.5,3.5 L0,12 L-3.5,3.5 L-12,0 L-3.5,-3.5 Z"
              fill={accent}
              opacity="0.55"
              transform="rotate(22.5)"
            />
          </g>
        </pattern>
      </defs>
      <rect width="200" height="200" fill={`url(#${id})`} />
    </svg>
  );
}

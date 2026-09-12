// Génère un motif décoratif façon zellige en SVG, utilisé comme "photo" de
// remplacement pour chaque annonce (pas de vraies images dans cette démo).

const PALETTES = {
  majorelle: { bg: "#33499E", fg: "#E7EAF6", accent: "#93381E" },
  zellige: { bg: "#C1502E", fg: "#F7F4EB", accent: "#33499E" },
  fes: { bg: "#1C6E56", fg: "#E1EFE9", accent: "#C1502E" },
};

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function tilePatternSVG(seed, paletteKey) {
  const { bg, fg, accent } = PALETTES[paletteKey] || PALETTES.majorelle;
  const rot = Math.floor(seededRandom(seed) * 45);
  const scale = (0.85 + seededRandom(seed * 2) * 0.4).toFixed(2);
  const id = `star-${seed}-${Math.round(Math.random() * 1e6)}`;

  return `
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Motif décoratif">
      <rect width="200" height="200" fill="${bg}" />
      <defs>
        <pattern id="${id}" width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(${rot}) scale(${scale})">
          <rect width="50" height="50" fill="${bg}" />
          <g transform="translate(25,25)">
            <path d="M0,-18 L5,-5 L18,0 L5,5 L0,18 L-5,5 L-18,0 L-5,-5 Z" fill="${fg}" opacity="0.9" />
            <path d="M0,-12 L3.5,-3.5 L12,0 L3.5,3.5 L0,12 L-3.5,3.5 L-12,0 L-3.5,-3.5 Z" fill="${accent}" opacity="0.55" transform="rotate(22.5)" />
          </g>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#${id})" />
    </svg>
  `;
}

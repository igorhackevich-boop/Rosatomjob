export function PumpIllustration() {
  return (
    <svg viewBox="0 0 290 230" width="290" height="230" xmlns="http://www.w3.org/2000/svg">
      {/* Outer volute casing */}
      <ellipse cx="155" cy="120" rx="88" ry="88" fill="#071828" stroke="#1A3A58" strokeWidth="2"/>
      <ellipse cx="155" cy="120" rx="88" ry="88" fill="none" stroke="#0F2A40" strokeWidth="8"/>

      {/* Volute spiral channel */}
      <path d="M155,120 m0,-70 a70,70 0 1,1 -48,116" fill="none" stroke="#122030" strokeWidth="10"/>
      <path d="M155,120 m0,-60 a60,60 0 1,1 -40,100" fill="none" stroke="#0D1E2E" strokeWidth="6"/>

      {/* Casing detail ribs */}
      <ellipse cx="155" cy="120" rx="75" ry="75" fill="none" stroke="#132838" strokeWidth="1" strokeDasharray="4,3"/>
      <ellipse cx="155" cy="120" rx="65" ry="65" fill="none" stroke="#0F2232" strokeWidth="1" opacity="0.6"/>

      {/* Impeller blades — 8 curved blades */}
      <g stroke="#1E5A96" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M155,120 Q178,92 188,68"/>
        <path d="M155,120 Q183,110 200,96"/>
        <path d="M155,120 Q183,133 196,152"/>
        <path d="M155,120 Q168,148 162,174"/>
        <path d="M155,120 Q138,150 128,172"/>
        <path d="M155,120 Q125,138 108,152"/>
        <path d="M155,120 Q122,113 104,106"/>
        <path d="M155,120 Q126,93 114,72"/>
      </g>

      {/* Impeller blade highlights */}
      <g stroke="#2A72B8" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5">
        <path d="M155,120 Q177,94 185,72"/>
        <path d="M155,120 Q182,112 198,99"/>
        <path d="M155,120 Q182,135 194,155"/>
        <path d="M155,120 Q167,149 160,177"/>
      </g>

      {/* Shroud disc (back plate) */}
      <circle cx="155" cy="120" r="42" fill="#071420" stroke="#1A3A5A" strokeWidth="1.5"/>
      <circle cx="155" cy="120" r="38" fill="none" stroke="#122030" strokeWidth="1" strokeDasharray="2,3"/>

      {/* Hub ring */}
      <circle cx="155" cy="120" r="18" fill="#071828" stroke="#1E4A7A" strokeWidth="2"/>
      <circle cx="155" cy="120" r="12" fill="#0A1E34" stroke="#2A5A8C" strokeWidth="1.5"/>
      <circle cx="155" cy="120" r="6"  fill="#1A3A5C" stroke="#3A7ACC" strokeWidth="1"/>

      {/* Shaft */}
      <rect x="150" y="196" width="10" height="44" rx="2" fill="#0A1E34" stroke="#1A3A5A" strokeWidth="1.5"/>
      <rect x="148" y="206" width="14" height="8" rx="1" fill="#071420" stroke="#1A3A5A" strokeWidth="1"/>

      {/* Bearing housing bottom */}
      <rect x="138" y="228" width="34" height="12" rx="3" fill="#071420" stroke="#152A3E" strokeWidth="1.5"/>
      <rect x="142" y="231" width="26" height="6" rx="1" fill="#0A1E30" stroke="#1A3A5A" strokeWidth="1"/>

      {/* Inlet pipe top-left */}
      <rect x="112" y="-10" width="28" height="46" rx="2" fill="#071828" stroke="#1A3A58" strokeWidth="2"/>
      {/* Inlet flange */}
      <rect x="106" y="28" width="40" height="9" rx="1" fill="#071420" stroke="#1E4A74" strokeWidth="1.5"/>
      {/* Flow arrows inside inlet */}
      <line x1="120" y1="5"  x2="120" y2="22" stroke="#1A4A7A" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="126" y1="5"  x2="126" y2="22" stroke="#1A4A7A" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="132" y1="5"  x2="132" y2="22" stroke="#1A4A7A" strokeWidth="1" strokeDasharray="3,2"/>
      <polygon points="120,24 117,18 123,18" fill="#1A4A7A"/>
      <polygon points="126,24 123,18 129,18" fill="#1A4A7A"/>
      <polygon points="132,24 129,18 135,18" fill="#1A4A7A"/>

      {/* Outlet pipe right, going off edge */}
      <rect x="228" y="110" width="72" height="24" rx="2" fill="#071828" stroke="#1A3A58" strokeWidth="2"/>
      <rect x="228" y="108" width="72" height="4" rx="1" fill="#0D2238" stroke="#1E4A74" strokeWidth="1"/>
      <rect x="228" y="132" width="72" height="4" rx="1" fill="#0D2238" stroke="#1E4A74" strokeWidth="1"/>
      {/* Flow arrows outlet */}
      <line x1="238" y1="118" x2="258" y2="118" stroke="#2A6AAA" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="238" y1="122" x2="258" y2="122" stroke="#2A6AAA" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="238" y1="126" x2="258" y2="126" stroke="#2A6AAA" strokeWidth="1" strokeDasharray="3,2"/>
      <polygon points="260,118 254,115 254,121" fill="#2A6AAA"/>
      <polygon points="260,122 254,119 254,125" fill="#2A6AAA"/>
      <polygon points="260,126 254,123 254,129" fill="#2A6AAA"/>

      {/* Rotation arc */}
      <path d="M155,78 A42,42 0 0,1 197,120" fill="none" stroke="#2A6AAA" strokeWidth="1.5" strokeDasharray="5,3"/>
      <polygon points="197,120 200,113 193,115" fill="#2A6AAA"/>

      {/* Dimension lines */}
      <line x1="72" y1="80"  x2="72" y2="162" stroke="#0F2A40" strokeWidth="0.75"/>
      <line x1="70" y1="80"  x2="74" y2="80"  stroke="#0F2A40" strokeWidth="0.75"/>
      <line x1="70" y1="162" x2="74" y2="162" stroke="#0F2A40" strokeWidth="0.75"/>
      <text x="67" y="124" fontSize="7" fill="#1A3A5A" fontFamily="monospace" textAnchor="middle" writingMode="tb" transform="rotate(-90,67,124)">∅ 176</text>

      <line x1="120" y1="56" x2="192" y2="56" stroke="#0F2A40" strokeWidth="0.75"/>
      <line x1="120" y1="54" x2="120" y2="58" stroke="#0F2A40" strokeWidth="0.75"/>
      <line x1="192" y1="54" x2="192" y2="58" stroke="#0F2A40" strokeWidth="0.75"/>
      <text x="156" y="52" fontSize="7" fill="#1A3A5A" fontFamily="monospace" textAnchor="middle">∅ 84</text>

      {/* Label callouts */}
      <line x1="188" y1="72"  x2="218" y2="52"  stroke="#0F2A40" strokeWidth="0.75"/>
      <text x="220" y="50"  fontSize="7.5" fill="#2A5A8A" fontFamily="monospace">IMPELLER</text>

      <line x1="155" y1="102" x2="218" y2="88" stroke="#0F2A40" strokeWidth="0.75"/>
      <text x="220" y="87"  fontSize="7.5" fill="#2A5A8A" fontFamily="monospace">HUB</text>

      <line x1="126" y1="28"  x2="90"  y2="14"  stroke="#0F2A40" strokeWidth="0.75"/>
      <text x="42"  y="13"  fontSize="7.5" fill="#2A5A8A" fontFamily="monospace">INLET</text>

      <text x="232" y="106" fontSize="7.5" fill="#2A5A8A" fontFamily="monospace">OUTLET</text>
    </svg>
  );
}

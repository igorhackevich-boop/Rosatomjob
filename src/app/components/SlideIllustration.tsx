export function SlideIllustration() {
  return (
    <svg viewBox="0 0 290 220" width="290" height="220" xmlns="http://www.w3.org/2000/svg">
      {/* SLIDE 3 (back) */}
      <g transform="translate(38,8) rotate(-6,130,100)">
        <rect x="30" y="18" width="200" height="136" rx="4" fill="#051018" stroke="#0F2030" strokeWidth="1.5"/>
        <rect x="38" y="28" width="120" height="8"  rx="2" fill="#0D2030" opacity="0.8"/>
        <rect x="38" y="40" width="80"  height="5"  rx="1" fill="#0A1828" opacity="0.6"/>
        <rect x="38" y="50" width="90"  height="5"  rx="1" fill="#0A1828" opacity="0.5"/>
        <rect x="38" y="60" width="70"  height="5"  rx="1" fill="#0A1828" opacity="0.5"/>
      </g>

      {/* SLIDE 2 (mid) */}
      <g transform="translate(20,4) rotate(-3,130,100)">
        <rect x="30" y="18" width="200" height="136" rx="4" fill="#071420" stroke="#142838" strokeWidth="1.5"/>
        {/* Title */}
        <rect x="38" y="28" width="130" height="9"  rx="2" fill="#1A3A5A" opacity="0.9"/>
        {/* Subtitle */}
        <rect x="38" y="42" width="85"  height="5"  rx="1" fill="#0F2030" opacity="0.7"/>
        {/* Image placeholder right */}
        <rect x="148" y="52" width="68"  height="68" rx="2" fill="#051018" stroke="#0F2030" strokeWidth="1"/>
        {/* Donut chart inside placeholder */}
        <circle cx="182" cy="86" r="22" fill="none" stroke="#122030" strokeWidth="12"/>
        <circle cx="182" cy="86" r="22" fill="none" stroke="#1A4A7A" strokeWidth="12" strokeDasharray="42 97" strokeDashoffset="0"/>
        <circle cx="182" cy="86" r="22" fill="none" stroke="#2A6AAA" strokeWidth="12" strokeDasharray="28 111" strokeDashoffset="-42"/>
        {/* Text lines left */}
        <rect x="38" y="52" width="96" height="4" rx="1" fill="#0F2030" opacity="0.6"/>
        <rect x="38" y="60" width="88" height="4" rx="1" fill="#0F2030" opacity="0.6"/>
        <rect x="38" y="68" width="92" height="4" rx="1" fill="#0F2030" opacity="0.5"/>
        <rect x="38" y="76" width="80" height="4" rx="1" fill="#0F2030" opacity="0.5"/>
        {/* Bullet list */}
        <circle cx="42"  cy="90" r="2.5" fill="#1A4A7A"/>
        <rect x="48" y="88" width="78" height="4" rx="1" fill="#0F2030" opacity="0.5"/>
        <circle cx="42"  cy="99" r="2.5" fill="#2A5A8C"/>
        <rect x="48" y="97" width="66" height="4" rx="1" fill="#0F2030" opacity="0.5"/>
        <circle cx="42"  cy="108" r="2.5" fill="#1A3A5C"/>
        <rect x="48" y="106" width="72" height="4" rx="1" fill="#0F2030" opacity="0.5"/>
        {/* Footer */}
        <line x1="38" y1="134" x2="218" y2="134" stroke="#0F2030" strokeWidth="0.75"/>
        <rect x="38" y="138" width="28" height="3" rx="1" fill="#0D1E2E" opacity="0.5"/>
        <rect x="190" y="138" width="20" height="3" rx="1" fill="#0D1E2E" opacity="0.5"/>
      </g>

      {/* SLIDE 1 (front, main) */}
      <g transform="translate(0,0)">
        <rect x="30" y="18" width="210" height="144" rx="4" fill="#0D2238" stroke="#1E4A74" strokeWidth="2"/>

        {/* Title bar with color */}
        <rect x="30" y="18" width="210" height="28" rx="4" fill="#1A3A5C"/>
        <rect x="30" y="32" width="210" height="14" fill="#1A3A5C"/>
        <rect x="40" y="26" width="140" height="10" rx="2" fill="#2A5A8C" opacity="0.8"/>
        <rect x="40" y="26" width="90"  height="10" rx="2" fill="#3A7ACC" opacity="0.6"/>

        {/* Two column content */}
        {/* Left col: text content */}
        <rect x="40" y="54" width="88" height="5" rx="1" fill="#1A3A5A" opacity="0.7"/>
        <rect x="40" y="63" width="78" height="5" rx="1" fill="#1A3A5A" opacity="0.6"/>
        <rect x="40" y="72" width="84" height="5" rx="1" fill="#1A3A5A" opacity="0.6"/>

        {/* Bullets left */}
        <rect x="40" y="84" width="6" height="6" rx="1" fill="#1A4A7A"/>
        <rect x="50" y="85" width="72" height="4" rx="1" fill="#1A3A5A" opacity="0.55"/>
        <rect x="40" y="95" width="6" height="6" rx="1" fill="#2A5A8C"/>
        <rect x="50" y="96" width="64" height="4" rx="1" fill="#1A3A5A" opacity="0.55"/>
        <rect x="40" y="106" width="6" height="6" rx="1" fill="#1A3A5C"/>
        <rect x="50" y="107" width="70" height="4" rx="1" fill="#1A3A5A" opacity="0.55"/>
        <rect x="40" y="117" width="6" height="6" rx="1" fill="#1A4A7A" opacity="0.7"/>
        <rect x="50" y="118" width="58" height="4" rx="1" fill="#1A3A5A" opacity="0.5"/>

        {/* Divider */}
        <line x1="146" y1="50" x2="146" y2="148" stroke="#152A3E" strokeWidth="1"/>

        {/* Right col: bar chart */}
        <rect x="152" y="50" width="76" height="92" rx="2" fill="#071828" stroke="#0F2030" strokeWidth="1"/>

        {/* Bars (3 groups) */}
        <rect x="160" y="100" width="12" height="30" rx="1" fill="#1A3A5A" opacity="0.8"/>
        <rect x="160" y="88"  width="12" height="42" rx="1" fill="#2A5A8C" opacity="0.85"/>
        <rect x="160" y="76"  width="12" height="54" rx="1" fill="#3A7ACC" opacity="0.9"/>

        <rect x="178" y="108" width="12" height="22" rx="1" fill="#1A3A5A" opacity="0.8"/>
        <rect x="178" y="92"  width="12" height="38" rx="1" fill="#2A5A8C" opacity="0.85"/>
        <rect x="178" y="80"  width="12" height="50" rx="1" fill="#3A7ACC" opacity="0.9"/>

        <rect x="196" y="96"  width="12" height="34" rx="1" fill="#1A3A5A" opacity="0.8"/>
        <rect x="196" y="78"  width="12" height="52" rx="1" fill="#2A5A8C" opacity="0.85"/>
        <rect x="196" y="64"  width="12" height="66" rx="1" fill="#3A7ACC" opacity="0.9"/>

        {/* Chart baseline */}
        <line x1="156" y1="132" x2="212" y2="132" stroke="#152A3E" strokeWidth="1"/>

        {/* Annotation line */}
        <line x1="202" y1="64" x2="220" y2="52" stroke="#1A4A74" strokeWidth="0.75" strokeDasharray="2,2"/>
        <circle cx="221" cy="51" r="2" fill="none" stroke="#2A5A8A" strokeWidth="0.75"/>

        {/* Slide footer */}
        <line x1="40" y1="150" x2="228" y2="150" stroke="#152A3E" strokeWidth="0.75"/>
        <rect x="40"  y="153" width="28" height="3" rx="1" fill="#122030" opacity="0.6"/>
        <rect x="200" y="153" width="20" height="3" rx="1" fill="#122030" opacity="0.6"/>

        {/* Slide number badge */}
        <rect x="218" y="156" width="16" height="10" rx="2" fill="#1A3A5C" opacity="0.9"/>
        <text x="226" y="164" fontSize="6" fill="#4A7AAA" textAnchor="middle" fontFamily="monospace">01</text>
      </g>

      {/* Floating iSpring badge */}
      <rect x="246" y="110" width="38" height="22" rx="3" fill="#0A1E34" stroke="#1E4A74" strokeWidth="1"/>
      <text x="265" y="120" fontSize="6.5" fill="#3A7ACC" textAnchor="middle" fontFamily="monospace" fontWeight="bold">iSpring</text>
      <text x="265" y="128" fontSize="5.5" fill="#2A5A8A" textAnchor="middle" fontFamily="monospace">SCORM</text>

      {/* Floating tool badge */}
      <rect x="248" y="82" width="34" height="22" rx="3" fill="#0A1E34" stroke="#1A3A5A" strokeWidth="1"/>
      <text x="265" y="92" fontSize="6.5" fill="#2A6AAA" textAnchor="middle" fontFamily="monospace">PPT</text>
      <text x="265" y="100" fontSize="5.5" fill="#1A4A7A" textAnchor="middle" fontFamily="monospace">animate</text>

      {/* Cursor icon */}
      <polygon points="62,170 68,186 71,180 78,183 72,168" fill="#2A5A8C" stroke="#1A3A5A" strokeWidth="1" transform="translate(168,20)"/>
    </svg>
  );
}

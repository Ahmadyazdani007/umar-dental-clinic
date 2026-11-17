const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'assets', 'images');

// Helper to write file
function writeFile(subPath, content) {
  const fullPath = path.join(baseDir, subPath);
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log('Created:', subPath);
}

// 1. Hero Dentist Illustration
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 520" width="100%" height="100%">
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f0f9ff"/>
      <stop offset="60%" stop-color="#e0f2fe"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0c4a6e" flood-opacity="0.1"/>
    </filter>
  </defs>

  <!-- Background Decorative Card Shape -->
  <rect x="20" y="20" width="660" height="480" rx="32" fill="url(#heroBg)"/>
  <circle cx="560" cy="110" r="90" fill="#38bdf8" opacity="0.15"/>
  <circle cx="100" cy="420" r="70" fill="#0284c7" opacity="0.1"/>

  <!-- Dental Clinic Room Elements -->
  <!-- Modern Window Background with Soft Light -->
  <rect x="80" y="60" width="220" height="180" rx="16" fill="#ffffff" opacity="0.6"/>
  <line x1="190" y1="60" x2="190" y2="240" stroke="#bae6fd" stroke-width="2"/>
  <line x1="80" y1="150" x2="300" y2="150" stroke="#bae6fd" stroke-width="2"/>

  <!-- Modern Dental Ergonomic Chair -->
  <g transform="translate(180, 160)">
    <!-- Base -->
    <ellipse cx="140" cy="270" rx="90" ry="18" fill="#cbd5e1"/>
    <rect x="125" y="220" width="30" height="55" rx="6" fill="#94a3b8"/>
    <!-- Chair Seat & Backrest -->
    <path d="M 50 200 C 70 170, 120 180, 180 190 C 230 200, 260 170, 270 130 C 275 110, 260 90, 240 90 C 210 90, 180 120, 130 130 C 90 140, 50 170, 50 200 Z" fill="#0284c7" filter="url(#softShadow)"/>
    <!-- Headrest -->
    <rect x="250" y="70" width="45" height="28" rx="14" fill="#0369a1"/>
    <!-- Instrument Arm -->
    <path d="M 70 240 Q 40 180, 50 100 Q 60 70, 110 65" fill="none" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
    <ellipse cx="115" cy="65" rx="22" ry="12" fill="#38bdf8"/>
    <circle cx="115" cy="65" r="7" fill="#ffffff"/>
  </g>

  <!-- Friendly Patient Sitting Comfortably -->
  <g transform="translate(260, 210)">
    <!-- Body -->
    <path d="M 60 110 C 60 80, 110 75, 130 90 C 145 100, 150 120, 160 140 L 40 140 Z" fill="#38bdf8"/>
    <!-- Neck & Head -->
    <rect x="85" y="50" width="18" height="24" rx="4" fill="#fed7aa"/>
    <circle cx="94" cy="40" r="28" fill="#fed7aa"/>
    <!-- Hair -->
    <path d="M 68 38 C 68 20, 80 15, 100 15 C 118 15, 122 26, 122 38 C 114 30, 90 28, 76 34 Z" fill="#475569"/>
    <!-- Gentle Smile & Eyes -->
    <circle cx="102" cy="38" r="2.5" fill="#1e293b"/>
    <path d="M 98 48 Q 106 54, 114 48" fill="none" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <!-- Friendly Professional Dentist -->
  <g transform="translate(390, 130)" filter="url(#softShadow)">
    <!-- White Medical Coat Body -->
    <path d="M 30 180 C 40 140, 70 120, 110 120 C 150 120, 180 140, 190 180 L 205 310 L 15 310 Z" fill="#ffffff"/>
    <path d="M 85 120 L 110 180 L 135 120 Z" fill="#0284c7"/>
    <polygon points="105,170 115,170 117,230 103,230" fill="#0369a1"/>
    <!-- Stethoscope / Medical ID -->
    <rect x="70" y="210" width="30" height="40" rx="4" fill="#e0f2fe"/>
    <line x1="75" y1="220" x2="95" y2="220" stroke="#0284c7" stroke-width="2"/>
    <line x1="75" y1="226" x2="90" y2="226" stroke="#0284c7" stroke-width="2"/>
    <line x1="75" y1="232" x2="85" y2="232" stroke="#0284c7" stroke-width="2"/>
    <!-- Dentist Head -->
    <rect x="100" y="80" width="22" height="28" fill="#ffedd5"/>
    <circle cx="111" cy="62" r="34" fill="#ffedd5"/>
    <!-- Hair -->
    <path d="M 78 55 C 80 30, 105 25, 130 28 C 145 30, 148 45, 146 60 C 138 42, 110 40, 85 50 Z" fill="#1e293b"/>
    <!-- Dentist Warm Eyes & Smile -->
    <circle cx="98" cy="60" r="3" fill="#1e293b"/>
    <circle cx="124" cy="60" r="3" fill="#1e293b"/>
    <path d="M 103 76 Q 111 84, 119 76" fill="none" stroke="#be123c" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Raised Hand with Dental Mirror -->
    <path d="M 35 190 Q 5 210, 0 170 Q 20 150, 45 160" fill="#ffffff"/>
    <path d="M 0 170 L -25 150" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="-28" cy="148" r="9" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
  </g>

  <!-- Floating Trust Badge Left -->
  <g transform="translate(60, 310)" filter="url(#softShadow)">
    <rect width="180" height="64" rx="16" fill="#ffffff"/>
    <circle cx="34" cy="32" r="18" fill="#e0f2fe"/>
    <path d="M 34 22 C 30 22, 26 25, 26 29 C 26 35, 34 42, 34 42 C 34 42, 42 35, 42 29 C 42 25, 38 22, 34 22 Z" fill="#0284c7"/>
    <text x="62" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Pain-Free Care</text>
    <text x="62" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="500" fill="#64748b">Gentle Procedures</text>
  </g>

  <!-- Floating Trust Badge Right -->
  <g transform="translate(460, 390)" filter="url(#softShadow)">
    <rect width="190" height="64" rx="16" fill="#ffffff"/>
    <circle cx="34" cy="32" r="18" fill="#dcfce7"/>
    <path d="M 28 32 L 32 36 L 40 28" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="62" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Verified Standards</text>
    <text x="62" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="500" fill="#64748b">100% Sterilized Clinic</text>
  </g>
</svg>`;
writeFile('hero-dentist.svg', heroSvg);

// 2. Modern Clinic Interior
const interiorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="intGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#f0f9ff" stop-opacity="0.7"/>
    </linearGradient>
  </defs>
  <!-- Room Walls & Floor -->
  <rect width="600" height="280" fill="url(#intGrad)"/>
  <rect y="280" width="600" height="120" fill="#cbd5e1"/>
  <!-- Floor Perspective Line -->
  <line x1="0" y1="280" x2="600" y2="280" stroke="#94a3b8" stroke-width="3"/>
  <line x1="120" y1="280" x2="60" y2="400" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="300" y1="280" x2="280" y2="400" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="480" y1="280" x2="500" y2="400" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Back Wall Cabinetry & Counter -->
  <rect x="40" y="160" width="200" height="120" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="40" y1="210" x2="240" y2="210" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="140" y1="160" x2="140" y2="280" stroke="#e2e8f0" stroke-width="2"/>
  <!-- Cabinet Handles -->
  <rect x="125" y="180" width="4" height="16" rx="2" fill="#94a3b8"/>
  <rect x="151" y="180" width="4" height="16" rx="2" fill="#94a3b8"/>

  <!-- Digital X-Ray / Monitor Screen on Wall -->
  <rect x="360" y="60" width="180" height="110" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="4"/>
  <rect x="370" y="70" width="160" height="90" rx="6" fill="#0369a1"/>
  <!-- Dental X-Ray Teeth Trace on Monitor -->
  <path d="M 390 120 Q 400 90, 410 120 Q 420 90, 430 120 Q 440 90, 450 120 Q 460 90, 470 120 Q 480 90, 490 120 Q 500 90, 510 120" fill="none" stroke="#e0f2fe" stroke-width="4"/>
  <circle cx="450" cy="115" r="8" fill="#38bdf8" opacity="0.6"/>

  <!-- Center Dental Operatory Chair -->
  <g transform="translate(180, 100)">
    <!-- Base -->
    <ellipse cx="140" cy="200" rx="70" ry="14" fill="#64748b"/>
    <rect x="130" y="160" width="20" height="42" rx="4" fill="#94a3b8"/>
    <!-- Chair Contour -->
    <path d="M 60 150 C 90 130, 140 140, 180 145 C 220 150, 240 120, 245 90 C 248 70, 235 55, 220 55 C 190 55, 170 85, 130 95 C 90 105, 60 130, 60 150 Z" fill="#0284c7"/>
    <rect x="228" y="42" width="35" height="22" rx="11" fill="#0369a1"/>
    <!-- Overhead Surgical LED Lamp -->
    <path d="M 80 180 Q 40 100, 70 30 Q 90 0, 130 5" fill="none" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
    <polygon points="120,5 150,-5 145,20 125,20" fill="#38bdf8"/>
    <!-- Soft light beam from lamp -->
    <polygon points="130,20 180,110 90,110" fill="#38bdf8" opacity="0.15"/>
  </g>

  <!-- Clean Plant on Cabinet -->
  <ellipse cx="70" cy="155" rx="14" ry="6" fill="#cbd5e1"/>
  <rect x="62" y="140" width="16" height="15" rx="3" fill="#ffffff" stroke="#94a3b8"/>
  <path d="M 70 140 Q 60 120, 50 125 Q 65 120, 70 140" fill="#10b981"/>
  <path d="M 70 140 Q 80 115, 90 122 Q 75 118, 70 140" fill="#10b981"/>
</svg>`;
writeFile('clinic-interior.svg', interiorSvg);

// 3. Doctor Avatars
const doc1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 320" width="100%" height="100%">
  <rect width="300" height="320" rx="24" fill="#f0f9ff"/>
  <circle cx="150" cy="110" r="60" fill="#ffedd5"/>
  <!-- Hair Male -->
  <path d="M 95 95 C 100 50, 140 40, 185 48 C 205 52, 210 75, 205 95 C 190 68, 150 65, 110 80 Z" fill="#1e293b"/>
  <!-- Eyes & Smile -->
  <circle cx="130" cy="108" r="4" fill="#0f172a"/>
  <circle cx="170" cy="108" r="4" fill="#0f172a"/>
  <path d="M 136 132 Q 150 144, 164 132" fill="none" stroke="#be123c" stroke-width="3" stroke-linecap="round"/>
  <!-- Neck -->
  <rect x="135" y="160" width="30" height="25" fill="#ffedd5"/>
  <!-- Coat -->
  <path d="M 40 320 L 70 200 C 95 180, 130 180, 150 180 C 170 180, 205 180, 230 200 L 260 320 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <polygon points="120,180 150,250 180,180 160,180 150,220 140,180" fill="#0284c7"/>
  <rect x="195" y="225" width="35" height="45" rx="4" fill="#e0f2fe"/>
  <line x1="202" y1="235" x2="222" y2="235" stroke="#0284c7" stroke-width="2"/>
  <line x1="202" y1="242" x2="218" y2="242" stroke="#0284c7" stroke-width="2"/>
</svg>`;
writeFile('doctors/doctor-1.svg', doc1Svg);

const doc2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 320" width="100%" height="100%">
  <rect width="300" height="320" rx="24" fill="#f0fdf4"/>
  <circle cx="150" cy="115" r="58" fill="#fed7aa"/>
  <!-- Hair Female -->
  <path d="M 85 125 C 80 50, 130 35, 175 40 C 220 45, 225 90, 215 150 C 205 100, 195 65, 150 65 C 105 65, 95 100, 85 125 Z" fill="#334155"/>
  <!-- Eyes & Smile -->
  <circle cx="132" cy="112" r="3.5" fill="#0f172a"/>
  <circle cx="168" cy="112" r="3.5" fill="#0f172a"/>
  <path d="M 136 136 Q 150 148, 164 136" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/>
  <!-- Neck -->
  <rect x="136" y="165" width="28" height="24" fill="#fed7aa"/>
  <!-- Medical Scrubs / Coat -->
  <path d="M 45 320 L 75 205 C 100 185, 130 185, 150 185 C 170 185, 200 185, 225 205 L 255 320 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <polygon points="125,185 150,240 175,185" fill="#0ea5e9"/>
  <!-- Stethoscope loop -->
  <path d="M 115 195 C 105 240, 195 240, 185 195" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
  <circle cx="150" cy="245" r="8" fill="#94a3b8"/>
</svg>`;
writeFile('doctors/doctor-2.svg', doc2Svg);

const doc3Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 320" width="100%" height="100%">
  <rect width="300" height="320" rx="24" fill="#f8fafc"/>
  <circle cx="150" cy="110" r="58" fill="#fde68a"/>
  <!-- Hair -->
  <path d="M 92 100 C 95 45, 140 38, 185 45 C 205 50, 210 70, 205 98 C 190 70, 150 68, 110 82 Z" fill="#0f172a"/>
  <!-- Loupes / Eyeglasses for specialist -->
  <rect x="115" y="100" width="30" height="20" rx="4" fill="none" stroke="#0284c7" stroke-width="3"/>
  <rect x="155" y="100" width="30" height="20" rx="4" fill="none" stroke="#0284c7" stroke-width="3"/>
  <line x1="145" y1="108" x2="155" y2="108" stroke="#0284c7" stroke-width="3"/>
  <circle cx="130" cy="110" r="3" fill="#0f172a"/>
  <circle cx="170" cy="110" r="3" fill="#0f172a"/>
  <path d="M 138 136 Q 150 146, 162 136" fill="none" stroke="#b91c1c" stroke-width="3" stroke-linecap="round"/>
  <!-- Neck & Coat -->
  <rect x="136" y="162" width="28" height="24" fill="#fde68a"/>
  <path d="M 45 320 L 75 200 C 100 180, 130 180, 150 180 C 170 180, 200 180, 225 200 L 255 320 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <polygon points="120,180 150,250 180,180" fill="#0f766e"/>
</svg>`;
writeFile('doctors/doctor-3.svg', doc3Svg);

// 4. Services SVGs
const services = [
  {
    name: 'general-dentistry.svg',
    color: '#0284c7',
    content: `
      <!-- Tooth with shield -->
      <path d="M 100 140 C 70 80, 80 40, 110 30 C 130 25, 145 40, 150 50 C 155 40, 170 25, 190 30 C 220 40, 230 80, 200 140 C 185 170, 180 230, 165 230 C 155 230, 155 180, 150 180 C 145 180, 145 230, 135 230 C 120 230, 115 170, 100 140 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="6"/>
      <!-- Shield -->
      <path d="M 150 80 L 195 95 L 195 140 C 195 170, 150 195, 150 195 C 150 195, 105 170, 105 140 L 105 95 Z" fill="#0284c7"/>
      <path d="M 135 135 L 145 145 L 168 120" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    `
  },
  {
    name: 'teeth-cleaning.svg',
    color: '#0ea5e9',
    content: `
      <!-- Sparkle Tooth -->
      <path d="M 100 140 C 70 80, 80 40, 110 30 C 130 25, 145 40, 150 50 C 155 40, 170 25, 190 30 C 220 40, 230 80, 200 140 C 185 170, 180 230, 165 230 C 155 230, 155 180, 150 180 C 145 180, 145 230, 135 230 C 120 230, 115 170, 100 140 Z" fill="#ffffff" stroke="#0ea5e9" stroke-width="6"/>
      <!-- Ultrasonic Wand & Water Droplets -->
      <path d="M 60 70 L 115 105" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
      <polygon points="115,100 130,110 120,118" fill="#38bdf8"/>
      <!-- Sparkles -->
      <path d="M 190 60 L 195 45 L 200 60 L 215 65 L 200 70 L 195 85 L 190 70 L 175 65 Z" fill="#38bdf8"/>
      <path d="M 90 170 L 93 160 L 96 170 L 106 173 L 96 176 L 93 186 L 90 176 L 80 173 Z" fill="#38bdf8"/>
    `
  },
  {
    name: 'teeth-whitening.svg',
    color: '#06b6d4',
    content: `
      <!-- Pure White Tooth with Glowing Rays -->
      <circle cx="150" cy="130" r="85" fill="#ecfeff"/>
      <path d="M 100 140 C 70 80, 80 40, 110 30 C 130 25, 145 40, 150 50 C 155 40, 170 25, 190 30 C 220 40, 230 80, 200 140 C 185 170, 180 230, 165 230 C 155 230, 155 180, 150 180 C 145 180, 145 230, 135 230 C 120 230, 115 170, 100 140 Z" fill="#ffffff" stroke="#06b6d4" stroke-width="6"/>
      <!-- Giant Sparkle -->
      <path d="M 150 75 Q 150 100, 175 100 Q 150 100, 150 125 Q 150 100, 125 100 Q 150 100, 150 75" fill="#06b6d4"/>
      <circle cx="195" cy="65" r="5" fill="#38bdf8"/>
      <circle cx="105" cy="85" r="4" fill="#38bdf8"/>
    `
  },
  {
    name: 'dental-fillings.svg',
    color: '#3b82f6',
    content: `
      <!-- Tooth with precision composite fill -->
      <path d="M 100 140 C 70 80, 80 40, 110 30 C 130 25, 145 40, 150 50 C 155 40, 170 25, 190 30 C 220 40, 230 80, 200 140 C 185 170, 180 230, 165 230 C 155 230, 155 180, 150 180 C 145 180, 145 230, 135 230 C 120 230, 115 170, 100 140 Z" fill="#ffffff" stroke="#3b82f6" stroke-width="6"/>
      <!-- Perfectly blended inlay -->
      <path d="M 130 55 C 135 45, 165 45, 170 55 C 175 70, 160 85, 150 85 C 140 85, 125 70, 130 55 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="3" stroke-dasharray="4,2"/>
      <!-- Dental curing light tip -->
      <polygon points="180,30 220,15 225,25 185,40" fill="#3b82f6"/>
      <circle cx="178" cy="36" r="6" fill="#60a5fa"/>
    `
  },
  {
    name: 'root-canal.svg',
    color: '#0284c7',
    content: `
      <!-- Tooth cross section with canal pathway -->
      <path d="M 100 140 C 70 80, 80 40, 110 30 C 130 25, 145 40, 150 50 C 155 40, 170 25, 190 30 C 220 40, 230 80, 200 140 C 185 170, 180 230, 165 230 C 155 230, 155 180, 150 180 C 145 180, 145 230, 135 230 C 120 230, 115 170, 100 140 Z" fill="#ffffff" stroke="#0284c7" stroke-width="6"/>
      <!-- Healthy root canals (cured red/blue to soothing green/blue) -->
      <path d="M 150 75 Q 135 120, 133 215" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
      <path d="M 150 75 Q 165 120, 167 215" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
      <!-- Protective Crown Seal -->
      <ellipse cx="150" cy="50" rx="35" ry="12" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
    `
  },
  {
    name: 'tooth-extraction.svg',
    color: '#64748b',
    content: `
      <!-- Gentle, comfortable extraction care -->
      <circle cx="150" cy="130" r="75" fill="#f1f5f9"/>
      <path d="M 115 130 C 95 85, 102 55, 122 45 C 136 40, 146 50, 150 58 C 154 50, 164 40, 178 45 C 198 55, 205 85, 185 130 C 175 150, 170 195, 160 195 C 152 195, 152 160, 150 160 C 148 160, 148 195, 140 195 C 130 195, 125 150, 115 130 Z" fill="#ffffff" stroke="#64748b" stroke-width="5"/>
      <!-- Care Heart Shield -->
      <path d="M 150 185 C 140 170, 120 170, 120 190 C 120 210, 150 230, 150 230 C 150 230, 180 210, 180 190 C 180 170, 160 170, 150 185 Z" fill="#ef4444" opacity="0.85"/>
      <text x="150" y="213" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="bold" fill="#ffffff">Gentle</text>
    `
  },
  {
    name: 'dental-implants.svg',
    color: '#0f172a',
    content: `
      <!-- Precision Implant Crown & Titanium Post -->
      <!-- Crown Top -->
      <path d="M 115 110 C 95 70, 105 40, 125 35 C 138 30, 146 40, 150 48 C 154 40, 162 30, 175 35 C 195 40, 205 70, 185 110 Z" fill="#ffffff" stroke="#0284c7" stroke-width="6"/>
      <!-- Abutment Collar -->
      <rect x="135" y="110" width="30" height="15" rx="3" fill="#94a3b8"/>
      <!-- Threaded Titanium Screw / Fixture -->
      <path d="M 135 125 L 165 125 L 160 215 L 140 215 Z" fill="#475569"/>
      <!-- Screw Threads -->
      <line x1="130" y1="140" x2="170" y2="140" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="132" y1="155" x2="168" y2="155" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="134" y1="170" x2="166" y2="170" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="136" y1="185" x2="164" y2="185" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="138" y1="200" x2="162" y2="200" stroke="#cbd5e1" stroke-width="3"/>
    `
  },
  {
    name: 'braces-orthodontics.svg',
    color: '#0284c7',
    content: `
      <!-- Row of neatly aligned teeth with brackets & archwire -->
      <path d="M 75 130 C 70 90, 85 70, 105 70 C 120 70, 125 90, 125 130 C 125 150, 75 150, 75 130 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>
      <path d="M 125 130 C 125 80, 135 65, 150 65 C 165 65, 175 80, 175 130 C 175 155, 125 155, 125 130 Z" fill="#ffffff" stroke="#0284c7" stroke-width="4"/>
      <path d="M 175 130 C 175 90, 180 70, 195 70 C 215 70, 225 90, 225 130 C 225 150, 175 150, 175 130 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>
      <!-- Orthodontic Brackets -->
      <rect x="92" y="95" width="16" height="16" rx="3" fill="#0284c7"/>
      <rect x="142" y="93" width="16" height="16" rx="3" fill="#0284c7"/>
      <rect x="192" y="95" width="16" height="16" rx="3" fill="#0284c7"/>
      <!-- Elastic Ties -->
      <circle cx="100" cy="103" r="3" fill="#38bdf8"/>
      <circle cx="150" cy="101" r="3" fill="#38bdf8"/>
      <circle cx="200" cy="103" r="3" fill="#38bdf8"/>
      <!-- Archwire -->
      <path d="M 60 105 Q 150 98, 240 105" fill="none" stroke="#0f172a" stroke-width="4"/>
    `
  },
  {
    name: 'cosmetic-dentistry.svg',
    color: '#0284c7',
    content: `
      <!-- Radiant Smile Aesthetic / Porcelain Veneers -->
      <path d="M 65 125 Q 150 190, 235 125 Q 150 220, 65 125 Z" fill="#e11d48" opacity="0.85"/>
      <!-- Upper Teeth Line Smile -->
      <path d="M 80 125 Q 150 160, 220 125 Q 150 140, 80 125 Z" fill="#ffffff"/>
      <line x1="150" y1="126" x2="150" y2="150" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="130" y1="126" x2="130" y2="145" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="170" y1="126" x2="170" y2="145" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Star Accents -->
      <path d="M 220 70 L 225 55 L 230 70 L 245 75 L 230 80 L 225 95 L 220 80 L 205 75 Z" fill="#38bdf8"/>
      <path d="M 80 65 L 83 55 L 86 65 L 96 68 L 86 71 L 83 81 L 80 71 L 70 68 Z" fill="#0284c7"/>
    `
  }
];

services.forEach(srv => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260" width="100%" height="100%">
    <defs>
      <linearGradient id="bg_${srv.name.replace('.svg','')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f0f7ff"/>
      </linearGradient>
    </defs>
    <rect width="300" height="260" rx="20" fill="url(#bg_${srv.name.replace('.svg','')})"/>
    <circle cx="150" cy="130" r="95" fill="#f0f9ff"/>
    ${srv.content}
  </svg>`;
  writeFile('services/' + srv.name, svg);
});

// 5. Smile Gallery Before & After Samples
const galleryBefore = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
  <rect width="500" height="350" fill="#f8fafc"/>
  <!-- Dark/stained teeth with slight misalignment simulation -->
  <rect x="30" y="30" width="440" height="290" rx="20" fill="#f1f5f9"/>
  <!-- Lips -->
  <path d="M 80 180 Q 250 120, 420 180 Q 250 260, 80 180 Z" fill="#e2a4a4"/>
  <!-- Mouth Opening -->
  <path d="M 120 180 Q 250 150, 380 180 Q 250 220, 120 180 Z" fill="#581c1c"/>
  <!-- Slightly Discolored & Crowded Teeth -->
  <g fill="#fef3c7" stroke="#cbd5e1" stroke-width="2">
    <rect x="140" y="165" width="30" height="32" rx="4" transform="rotate(-4, 155, 180)"/>
    <rect x="175" y="160" width="34" height="36" rx="4" transform="rotate(3, 192, 178)"/>
    <rect x="215" y="158" width="38" height="38" rx="4" transform="rotate(-3, 234, 177)"/>
    <rect x="255" y="160" width="36" height="36" rx="4" transform="rotate(4, 273, 178)"/>
    <rect x="295" y="163" width="32" height="34" rx="4" transform="rotate(-2, 311, 180)"/>
    <rect x="330" y="166" width="30" height="30" rx="4" transform="rotate(5, 345, 181)"/>
  </g>
  <!-- Notice Badge -->
  <rect x="50" y="45" width="140" height="32" rx="8" fill="#ef4444"/>
  <text x="120" y="66" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="bold" fill="#ffffff">BEFORE (Sample)</text>
</svg>`;
writeFile('gallery/sample-before.svg', galleryBefore);

const galleryAfter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
  <rect width="500" height="350" fill="#f0f9ff"/>
  <rect x="30" y="30" width="440" height="290" rx="20" fill="#e0f2fe"/>
  <!-- Radiant Smile Lips -->
  <path d="M 80 175 Q 250 110, 420 175 Q 250 270, 80 175 Z" fill="#f472b6"/>
  <!-- Mouth Opening -->
  <path d="M 120 175 Q 250 145, 380 175 Q 250 230, 120 175 Z" fill="#831843"/>
  <!-- Perfectly Aligned Sparkling White Teeth -->
  <g fill="#ffffff" stroke="#93c5fd" stroke-width="2">
    <rect x="142" y="160" width="32" height="34" rx="4"/>
    <rect x="178" y="157" width="35" height="38" rx="4"/>
    <rect x="216" y="155" width="38" height="40" rx="4"/>
    <rect x="256" y="155" width="38" height="40" rx="4"/>
    <rect x="296" y="157" width="35" height="38" rx="4"/>
    <rect x="333" y="160" width="32" height="34" rx="4"/>
  </g>
  <!-- Sparkles -->
  <path d="M 230 140 L 234 130 L 238 140 L 248 144 L 238 148 L 234 158 L 230 148 L 220 144 Z" fill="#38bdf8"/>
  <path d="M 310 145 L 313 138 L 316 145 L 323 148 L 316 151 L 313 158 L 310 151 L 303 148 Z" fill="#38bdf8"/>
  <!-- Notice Badge -->
  <rect x="50" y="45" width="140" height="32" rx="8" fill="#16a34a"/>
  <text x="120" y="66" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="bold" fill="#ffffff">AFTER (Sample)</text>
</svg>`;
writeFile('gallery/sample-after.svg', galleryAfter);

console.log('All vector assets created successfully!');

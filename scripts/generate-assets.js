const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// 1. Sleek Developer Avatar
const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
    <linearGradient id="primaryAura" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="100%" stop-color="#7c3aed" />
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background circle with futuristic cyber border -->
  <rect width="400" height="400" rx="200" fill="url(#bgGrad)" />
  <circle cx="200" cy="200" r="190" fill="none" stroke="url(#primaryAura)" stroke-width="3" opacity="0.8" />
  <circle cx="200" cy="200" r="178" fill="none" stroke="#00f0ff" stroke-width="1" stroke-dasharray="8 12" opacity="0.4" />
  
  <!-- Subtle cyber rings -->
  <circle cx="200" cy="200" r="150" fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.3" />
  <circle cx="200" cy="200" r="120" fill="#0f172a" opacity="0.6" />

  <!-- Abstract Developer Silhouette & Tech Elements -->
  <!-- Hoodie / Shoulders -->
  <path d="M 110 360 C 110 280, 150 250, 200 250 C 250 250, 290 280, 290 360 Z" fill="#1e293b" stroke="url(#accentGlow)" stroke-width="2" />
  <path d="M 140 360 C 140 300, 170 270, 200 270 C 230 270, 260 300, 260 360 Z" fill="#0f172a" />
  <path d="M 185 270 L 195 350 L 205 350 L 215 270 Z" fill="#3b82f6" opacity="0.4" />

  <!-- Neck & Face base -->
  <rect x="180" y="210" width="40" height="50" rx="8" fill="#e2e8f0" opacity="0.9" />
  <!-- Head shape -->
  <ellipse cx="200" cy="180" rx="46" ry="52" fill="#cbd5e1" />
  
  <!-- Modern Hair style -->
  <path d="M 154 170 C 154 130, 170 110, 200 110 C 230 110, 246 130, 246 160 C 230 145, 200 145, 170 155 Z" fill="#0f172a" />
  <path d="M 152 170 C 150 150, 165 125, 200 120 C 230 120, 248 140, 245 168 C 240 150, 215 140, 170 150 Z" fill="#1e293b" />

  <!-- Smart AR/Tech Glasses -->
  <rect x="168" y="170" width="28" height="18" rx="4" fill="#030712" stroke="#00f0ff" stroke-width="2" filter="url(#glow)" />
  <rect x="204" y="170" width="28" height="18" rx="4" fill="#030712" stroke="#00f0ff" stroke-width="2" filter="url(#glow)" />
  <line x1="196" y1="178" x2="204" y2="178" stroke="#00f0ff" stroke-width="2" />
  <circle cx="178" cy="179" r="4" fill="#00f0ff" opacity="0.8" />
  <circle cx="214" cy="179" r="4" fill="#00f0ff" opacity="0.8" />

  <!-- Floating Tech Nodes & Code Symbols -->
  <g opacity="0.85">
    <text x="70" y="180" font-family="monospace" font-size="28" fill="#00f0ff" font-weight="bold" opacity="0.6">&lt;/&gt;</text>
    <circle cx="320" cy="170" r="6" fill="#8b5cf6" filter="url(#glow)" />
    <circle cx="340" cy="195" r="4" fill="#00f0ff" />
    <circle cx="310" cy="210" r="5" fill="#3b82f6" />
    <line x1="320" y1="170" x2="340" y2="195" stroke="#8b5cf6" stroke-width="1.5" opacity="0.6" />
    <line x1="320" y1="170" x2="310" y2="210" stroke="#3b82f6" stroke-width="1.5" opacity="0.6" />
  </g>

  <!-- Status badge -->
  <g transform="translate(140, 345)">
    <rect width="120" height="26" rx="13" fill="#030712" stroke="#10b981" stroke-width="1.5" />
    <circle cx="18" cy="13" r="4" fill="#10b981" />
    <text x="32" y="17" font-family="sans-serif" font-size="11" fill="#e2e8f0" font-weight="600">OPEN TO WORK</text>
  </g>
</svg>`;

// 2. Project 1: Pothole Detection & Municipal Budget
const potholeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
  <defs>
    <linearGradient id="roadBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="wireframe" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="600" height="360" fill="url(#roadBg)" />
  
  <!-- Perspective Road Grid -->
  <path d="M 220 120 L 380 120 L 560 360 L 40 360 Z" fill="url(#wireframe)" stroke="#334155" stroke-width="1" />
  
  <!-- Road dashed line -->
  <line x1="300" y1="120" x2="300" y2="160" stroke="#fbbf24" stroke-width="2" stroke-dasharray="10 10" />
  <line x1="300" y1="170" x2="300" y2="230" stroke="#fbbf24" stroke-width="3" stroke-dasharray="15 15" />
  <line x1="300" y1="240" x2="300" y2="360" stroke="#fbbf24" stroke-width="5" stroke-dasharray="25 20" />

  <!-- Pothole 1 with YOLO Bounding Box -->
  <g transform="translate(180, 210)">
    <ellipse cx="60" cy="40" rx="45" ry="22" fill="#030712" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3 3" />
    <ellipse cx="60" cy="40" rx="30" ry="14" fill="#111827" />
    
    <rect x="0" y="0" width="120" height="80" rx="4" fill="none" stroke="#ef4444" stroke-width="2" />
    <rect x="0" y="-22" width="115" height="22" rx="3" fill="#ef4444" />
    <text x="8" y="-7" font-family="monospace" font-size="11" fill="#ffffff" font-weight="bold">pothole: 0.94</text>
    <line x1="60" y1="30" x2="60" y2="50" stroke="#ef4444" stroke-width="1" />
    <line x1="50" y1="40" x2="70" y2="40" stroke="#ef4444" stroke-width="1" />
  </g>

  <!-- Pothole 2 smaller -->
  <g transform="translate(360, 160)">
    <ellipse cx="35" cy="25" rx="28" ry="14" fill="#030712" stroke="#f59e0b" stroke-width="1.5" />
    <rect x="0" y="0" width="70" height="50" rx="3" fill="none" stroke="#f59e0b" stroke-width="1.5" />
    <rect x="0" y="-18" width="85" height="18" rx="2" fill="#f59e0b" />
    <text x="6" y="-5" font-family="monospace" font-size="9" fill="#000000" font-weight="bold">pothole: 0.81</text>
  </g>

  <!-- Municipal HUD telemetry overlay -->
  <g transform="translate(20, 20)">
    <rect width="210" height="90" rx="8" fill="#030712" fill-opacity="0.85" stroke="#1e293b" stroke-width="1" />
    <text x="14" y="24" font-family="sans-serif" font-size="11" fill="#00f0ff" font-weight="700">YOLOv8 ROAD TELEMETRY</text>
    <text x="14" y="44" font-family="monospace" font-size="10" fill="#94a3b8">mAP@0.5: <tspan fill="#10b981" font-weight="bold">0.80</tspan> | F1: <tspan fill="#10b981" font-weight="bold">0.75</tspan></text>
    <text x="14" y="62" font-family="monospace" font-size="10" fill="#94a3b8">GPS: 12.8230° N, 80.0444° E</text>
    <text x="14" y="80" font-family="monospace" font-size="10" fill="#f59e0b">Municipal Zone: Kattankulathur</text>
  </g>

  <!-- Budget Analysis Chip -->
  <g transform="translate(420, 20)">
    <rect width="160" height="54" rx="8" fill="#030712" fill-opacity="0.85" stroke="#3b82f6" stroke-width="1" />
    <text x="12" y="22" font-family="sans-serif" font-size="10" fill="#94a3b8">ESTIMATED REPAIR</text>
    <text x="12" y="42" font-family="monospace" font-size="14" fill="#3b82f6" font-weight="bold">₹ 14,500 / Zone 3</text>
  </g>
</svg>`;

// 3. Project 2: Document Intelligence RAG Chatbot (Clean XML)
const ragSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
  <defs>
    <linearGradient id="ragBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
    <linearGradient id="ragVector" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
  </defs>

  <rect width="600" height="360" fill="url(#ragBg)" />

  <!-- Document Ingestion Card Left -->
  <g transform="translate(40, 50)">
    <rect width="140" height="180" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
    <rect x="15" y="20" width="60" height="8" rx="2" fill="#38bdf8" />
    <line x1="15" y1="45" x2="115" y2="45" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="65" x2="125" y2="65" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="85" x2="95" y2="85" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="105" x2="120" y2="105" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
    <line x1="15" y1="125" x2="80" y2="125" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
    <rect x="15" y="145" width="110" height="22" rx="4" fill="#0f172a" stroke="#0ea5e9" stroke-width="1" />
    <text x="20" y="160" font-family="monospace" font-size="9" fill="#38bdf8">Chunking &amp; Embed</text>
  </g>

  <!-- Vector DB Cluster Center -->
  <g transform="translate(240, 60)">
    <circle cx="60" cy="80" r="65" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="15" y="35" font-family="monospace" font-size="10" fill="#a855f7" font-weight="bold">ChromaDB Vectors</text>
    
    <circle cx="35" cy="70" r="5" fill="#ec4899" />
    <circle cx="85" cy="65" r="6" fill="#6366f1" />
    <circle cx="55" cy="110" r="5" fill="#06b6d4" />
    <circle cx="80" cy="115" r="4" fill="#8b5cf6" />
    <line x1="35" y1="70" x2="85" y2="65" stroke="#ec4899" stroke-width="1.5" opacity="0.6" />
    <line x1="85" y1="65" x2="55" y2="110" stroke="#6366f1" stroke-width="1.5" opacity="0.6" />
    <line x1="55" y1="110" x2="80" y2="115" stroke="#06b6d4" stroke-width="1.5" opacity="0.6" />
  </g>

  <!-- Connector Path -->
  <line x1="185" y1="140" x2="235" y2="140" stroke="#38bdf8" stroke-width="2" />
  <polygon points="235,136 243,140 235,144" fill="#38bdf8" />

  <line x1="370" y1="140" x2="400" y2="140" stroke="#a855f7" stroke-width="2" />
  <polygon points="400,136 408,140 400,144" fill="#a855f7" />

  <!-- Chat Output Right -->
  <g transform="translate(410, 50)">
    <rect width="150" height="200" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" />
    
    <rect x="35" y="20" width="105" height="35" rx="6" fill="#3b82f6" />
    <text x="43" y="36" font-family="sans-serif" font-size="8.5" fill="#ffffff">Summarize Q3</text>
    <text x="43" y="48" font-family="sans-serif" font-size="8.5" fill="#ffffff">safety protocol?</text>

    <rect x="10" y="70" width="130" height="70" rx="6" fill="#1e293b" stroke="#8b5cf6" stroke-width="1" />
    <text x="18" y="86" font-family="sans-serif" font-size="8" fill="#a855f7" font-weight="bold">Gemini RAG Response:</text>
    <text x="18" y="102" font-family="sans-serif" font-size="7.5" fill="#cbd5e1">&quot;Based on page 4, Section</text>
    <text x="18" y="116" font-family="sans-serif" font-size="7.5" fill="#cbd5e1">B: mandatory audit checklist</text>
    <text x="18" y="130" font-family="sans-serif" font-size="7.5" fill="#cbd5e1">verified with 98% context.&quot;</text>

    <rect x="10" y="155" width="130" height="25" rx="4" fill="#030712" />
    <text x="18" y="171" font-family="monospace" font-size="8" fill="#10b981">✓ Zero Hallucination</text>
  </g>

  <!-- Bottom Tech Bar -->
  <g transform="translate(40, 280)">
    <rect width="520" height="50" rx="8" fill="#0f172a" stroke="#1e293b" stroke-width="1" />
    <text x="25" y="30" font-family="monospace" font-size="12" fill="#38bdf8">FastAPI</text>
    <circle cx="95" cy="27" r="3" fill="#64748b" />
    <text x="110" y="30" font-family="monospace" font-size="12" fill="#a855f7">LangChain</text>
    <circle cx="195" cy="27" r="3" fill="#64748b" />
    <text x="210" y="30" font-family="monospace" font-size="12" fill="#ec4899">ChromaDB</text>
    <circle cx="300" cy="27" r="3" fill="#64748b" />
    <text x="315" y="30" font-family="monospace" font-size="12" fill="#10b981">Gemini API</text>
    <circle cx="410" cy="27" r="3" fill="#64748b" />
    <text x="425" y="30" font-family="monospace" font-size="12" fill="#f59e0b">React Frontend</text>
  </g>
</svg>`;

// 4. Project 3: WithLife — Smart Blood Bank (Clean XML)
const withLifeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bloodBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140608" />
      <stop offset="100%" stop-color="#080203" />
    </linearGradient>
    <linearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#b91c1c" />
    </linearGradient>
  </defs>

  <rect width="600" height="360" fill="url(#bloodBg)" />

  <!-- Heartbeat ECG line -->
  <path d="M 0 180 L 140 180 L 160 140 L 175 220 L 195 100 L 210 240 L 225 180 L 600 180" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.4" />

  <!-- Central Blood Drop Card -->
  <g transform="translate(60, 40)">
    <rect width="200" height="240" rx="12" fill="#1f1113" stroke="#dc2626" stroke-width="1.5" />
    
    <path d="M 100 40 C 100 40, 60 95, 60 120 C 60 145, 78 165, 100 165 C 122 165, 140 145, 140 120 C 140 95, 100 40, 100 40 Z" fill="url(#redAccent)" />
    <text x="85" y="132" font-family="sans-serif" font-size="22" fill="#ffffff" font-weight="900">O+</text>
    
    <text x="35" y="195" font-family="sans-serif" font-size="12" fill="#fca5a5" font-weight="bold">INVENTORY CRITICAL</text>
    <text x="45" y="215" font-family="monospace" font-size="10" fill="#991b1b">24 Units Remaining</text>
  </g>

  <!-- Donors & Requests Dashboard Right -->
  <g transform="translate(300, 40)">
    <rect width="240" height="70" rx="8" fill="#180e10" stroke="#374151" stroke-width="1" />
    <circle cx="35" cy="35" r="16" fill="#ef4444" />
    <text x="27" y="41" font-family="sans-serif" font-size="14" fill="#ffffff" font-weight="bold">A+</text>
    <text x="65" y="30" font-family="sans-serif" font-size="12" fill="#f3f4f6" font-weight="600">Urgent Request: SRM Hospital</text>
    <text x="65" y="48" font-family="monospace" font-size="10" fill="#10b981">✓ Matched 4 Donors Nearby</text>

    <rect y="85" width="240" height="70" rx="8" fill="#180e10" stroke="#374151" stroke-width="1" />
    <circle cx="35" cy="120" r="16" fill="#3b82f6" />
    <text x="26" y="126" font-family="sans-serif" font-size="13" fill="#ffffff" font-weight="bold">B+</text>
    <text x="65" y="115" font-family="sans-serif" font-size="12" fill="#f3f4f6" font-weight="600">Blood Camp Scheduled</text>
    <text x="65" y="133" font-family="monospace" font-size="10" fill="#9ca3af">Kattankulathur Campus</text>

    <rect y="170" width="240" height="70" rx="8" fill="#180e10" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3" />
    <text x="25" y="200" font-family="sans-serif" font-size="12" fill="#ef4444" font-weight="bold">Supabase Realtime Sync</text>
    <text x="25" y="220" font-family="monospace" font-size="10" fill="#9ca3af">Secure Auth &amp; Role-Based Access</text>
  </g>

  <!-- Bottom Brand -->
  <g transform="translate(60, 300)">
    <text x="0" y="20" font-family="sans-serif" font-size="14" fill="#ffffff" font-weight="800">WITHLIFE</text>
    <text x="85" y="20" font-family="sans-serif" font-size="12" fill="#9ca3af">— Smart Blood Bank &amp; Donation Network</text>
  </g>
</svg>`;

// 5. Project 4: EduTime Pro — AI Study Planner (Clean XML)
const eduTimeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
  <defs>
    <linearGradient id="eduBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1226" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
  </defs>

  <rect width="600" height="360" fill="url(#eduBg)" />

  <!-- App Header Bar -->
  <g transform="translate(40, 30)">
    <rect width="520" height="40" rx="8" fill="#111c38" stroke="#1e293b" stroke-width="1" />
    <circle cx="20" cy="20" r="5" fill="#ef4444" />
    <circle cx="36" cy="20" r="5" fill="#f59e0b" />
    <circle cx="52" cy="20" r="5" fill="#10b981" />
    <text x="80" y="25" font-family="sans-serif" font-size="12" fill="#ffffff" font-weight="700">EduTime Pro</text>
    <rect x="180" y="8" width="190" height="24" rx="12" fill="#0a1226" />
    <text x="195" y="24" font-family="monospace" font-size="9" fill="#60a5fa">https://edutime-pro.vercel.app</text>
    <rect x="420" y="10" width="85" height="20" rx="10" fill="#10b981" />
    <text x="435" y="24" font-family="sans-serif" font-size="9" fill="#ffffff" font-weight="bold">LIVE PROD</text>
  </g>

  <!-- Planner Columns -->
  <!-- Col 1: Study Schedule -->
  <g transform="translate(40, 85)">
    <rect width="160" height="235" rx="8" fill="#0c1733" stroke="#1d2e56" stroke-width="1" />
    <text x="15" y="26" font-family="sans-serif" font-size="11" fill="#93c5fd" font-weight="700">TODAY&apos;S SESSIONS</text>
    
    <rect x="10" y="40" width="140" height="50" rx="6" fill="#172554" stroke="#3b82f6" stroke-width="1" />
    <text x="18" y="58" font-family="sans-serif" font-size="10" fill="#ffffff" font-weight="600">DSA: Graphs &amp; Trees</text>
    <text x="18" y="76" font-family="monospace" font-size="8.5" fill="#60a5fa">09:00 - 11:30 AM</text>

    <rect x="10" y="100" width="140" height="50" rx="6" fill="#172554" />
    <text x="18" y="118" font-family="sans-serif" font-size="10" fill="#ffffff" font-weight="600">Computer Vision Lab</text>
    <text x="18" y="136" font-family="monospace" font-size="8.5" fill="#94a3b8">02:00 - 04:00 PM</text>

    <rect x="10" y="160" width="140" height="50" rx="6" fill="#172554" />
    <text x="18" y="178" font-family="sans-serif" font-size="10" fill="#ffffff" font-weight="600">Machine Learning Quiz</text>
    <text x="18" y="196" font-family="monospace" font-size="8.5" fill="#10b981">✓ Completed</text>
  </g>

  <!-- Col 2: AI Focus & Productivity Graph -->
  <g transform="translate(220, 85)">
    <rect width="340" height="150" rx="8" fill="#0c1733" stroke="#1d2e56" stroke-width="1" />
    <text x="20" y="26" font-family="sans-serif" font-size="11" fill="#93c5fd" font-weight="700">STUDY PRODUCTIVITY ANALYTICS</text>
    
    <g transform="translate(30, 45)">
      <rect x="10" y="30" width="22" height="50" rx="3" fill="#3b82f6" />
      <text x="12" y="94" font-family="sans-serif" font-size="9" fill="#94a3b8">Mon</text>

      <rect x="50" y="15" width="22" height="65" rx="3" fill="#3b82f6" />
      <text x="53" y="94" font-family="sans-serif" font-size="9" fill="#94a3b8">Tue</text>

      <rect x="90" y="5" width="22" height="75" rx="3" fill="#8b5cf6" />
      <text x="92" y="94" font-family="sans-serif" font-size="9" fill="#94a3b8">Wed</text>

      <rect x="130" y="20" width="22" height="60" rx="3" fill="#3b82f6" />
      <text x="133" y="94" font-family="sans-serif" font-size="9" fill="#94a3b8">Thu</text>

      <rect x="170" y="0" width="22" height="80" rx="3" fill="#00f0ff" />
      <text x="173" y="94" font-family="sans-serif" font-size="9" fill="#94a3b8">Fri</text>

      <rect x="210" y="25" width="22" height="55" rx="3" fill="#3b82f6" />
      <text x="213" y="94" font-family="sans-serif" font-size="9" fill="#94a3b8">Sat</text>

      <rect x="250" y="40" width="22" height="40" rx="3" fill="#64748b" />
      <text x="253" y="94" font-family="sans-serif" font-size="9" fill="#94a3b8">Sun</text>
    </g>
  </g>

  <!-- Bottom Tech Tags -->
  <g transform="translate(220, 250)">
    <rect width="340" height="70" rx="8" fill="#0a1226" stroke="#1e293b" stroke-width="1" />
    <text x="18" y="26" font-family="sans-serif" font-size="10" fill="#60a5fa" font-weight="bold">BUILT WITH</text>
    <text x="18" y="48" font-family="monospace" font-size="11" fill="#e2e8f0">React • Vite • Supabase • Vercel • Tailwind</text>
  </g>
</svg>`;

// 6. Project 5: HostelHub — Student Marketplace
const hostelHubSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
  <defs>
    <linearGradient id="marketBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>

  <rect width="600" height="360" fill="url(#marketBg)" />

  <g transform="translate(40, 30)">
    <rect width="520" height="45" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
    <text x="20" y="28" font-family="sans-serif" font-size="13" fill="#f8fafc" font-weight="bold">HostelHub</text>
    <rect x="120" y="10" width="180" height="25" rx="6" fill="#0f172a" />
    <text x="135" y="26" font-family="sans-serif" font-size="10" fill="#64748b">Search cycles, kettles, books...</text>
    <rect x="360" y="10" width="145" height="25" rx="12" fill="#14532d" stroke="#22c55e" stroke-width="1" />
    <text x="374" y="26" font-family="sans-serif" font-size="9" fill="#86efac" font-weight="bold">@srmist.edu.in Verified</text>
  </g>

  <g transform="translate(40, 95)">
    <g transform="translate(0, 0)">
      <rect width="160" height="215" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <rect x="10" y="10" width="140" height="100" rx="6" fill="#0f172a" />
      <circle cx="80" cy="60" r="30" fill="#3b82f6" opacity="0.3" />
      <text x="65" y="66" font-family="sans-serif" font-size="20">🚲</text>
      <text x="14" y="130" font-family="sans-serif" font-size="11" fill="#f1f5f9" font-weight="bold">Hero Sprint Cycle</text>
      <text x="14" y="148" font-family="sans-serif" font-size="9.5" fill="#94a3b8">M-Block Hostel • 3rd Year</text>
      <text x="14" y="172" font-family="monospace" font-size="12" fill="#10b981" font-weight="bold">₹ 2,400</text>
      <rect x="14" y="185" width="132" height="20" rx="4" fill="#2563eb" />
      <text x="50" y="198" font-family="sans-serif" font-size="9" fill="#ffffff" font-weight="bold">Contact Seller</text>
    </g>

    <g transform="translate(180, 0)">
      <rect width="160" height="215" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <rect x="10" y="10" width="140" height="100" rx="6" fill="#0f172a" />
      <circle cx="80" cy="60" r="30" fill="#f59e0b" opacity="0.3" />
      <text x="65" y="66" font-family="sans-serif" font-size="20">📚</text>
      <text x="14" y="130" font-family="sans-serif" font-size="11" fill="#f1f5f9" font-weight="bold">CLRS Algorithm Book</text>
      <text x="14" y="148" font-family="sans-serif" font-size="9.5" fill="#94a3b8">Nelson Mandela Block</text>
      <text x="14" y="172" font-family="monospace" font-size="12" fill="#10b981" font-weight="bold">₹ 650</text>
      <rect x="14" y="185" width="132" height="20" rx="4" fill="#2563eb" />
      <text x="50" y="198" font-family="sans-serif" font-size="9" fill="#ffffff" font-weight="bold">Contact Seller</text>
    </g>

    <g transform="translate(360, 0)">
      <rect width="160" height="215" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <rect x="10" y="10" width="140" height="100" rx="6" fill="#0f172a" />
      <circle cx="80" cy="60" r="30" fill="#a855f7" opacity="0.3" />
      <text x="65" y="66" font-family="sans-serif" font-size="20">⚡</text>
      <text x="14" y="130" font-family="sans-serif" font-size="11" fill="#f1f5f9" font-weight="bold">Electric Kettle 1.5L</text>
      <text x="14" y="148" font-family="sans-serif" font-size="9.5" fill="#94a3b8">Baqir Block • Graduating</text>
      <text x="14" y="172" font-family="monospace" font-size="12" fill="#10b981" font-weight="bold">₹ 450</text>
      <rect x="14" y="185" width="132" height="20" rx="4" fill="#2563eb" />
      <text x="50" y="198" font-family="sans-serif" font-size="9" fill="#ffffff" font-weight="bold">Contact Seller</text>
    </g>
  </g>
</svg>`;

// 7. Project 6: AI-Powered Drug Checker (Clean XML)
const drugCheckerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
  <defs>
    <linearGradient id="medBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041f1e" />
      <stop offset="100%" stop-color="#020d0e" />
    </linearGradient>
  </defs>

  <rect width="600" height="360" fill="url(#medBg)" />

  <g transform="translate(50, 40)">
    <rect width="500" height="260" rx="12" fill="#082b2a" stroke="#0d9488" stroke-width="1.5" />
    
    <text x="25" y="35" font-family="sans-serif" font-size="14" fill="#2dd4bf" font-weight="bold">AI MEDICINE INTERACTION CHECKER</text>
    <rect x="360" y="18" width="115" height="22" rx="11" fill="#134e4a" stroke="#2dd4bf" stroke-width="1" />
    <text x="375" y="32" font-family="sans-serif" font-size="9" fill="#99f6e4" font-weight="bold">PLANNED CONCEPT</text>

    <g transform="translate(25, 60)">
      <rect width="180" height="32" rx="6" fill="#042020" stroke="#115e59" stroke-width="1" />
      <text x="12" y="20" font-family="sans-serif" font-size="11" fill="#ccfbf1">Drug A: Ibuprofen (400mg)</text>

      <text x="195" y="21" font-family="sans-serif" font-size="14" fill="#2dd4bf" font-weight="bold">+</text>

      <rect x="220" width="180" height="32" rx="6" fill="#042020" stroke="#115e59" stroke-width="1" />
      <text x="12" y="20" font-family="sans-serif" font-size="11" fill="#ccfbf1">Drug B: Aspirin (81mg)</text>
    </g>

    <g transform="translate(25, 110)">
      <rect width="450" height="85" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1.5" />
      <text x="20" y="28" font-family="sans-serif" font-size="12" fill="#fca5a5" font-weight="bold">⚠️ MODERATE INTERACTION WARNING</text>
      <text x="20" y="48" font-family="sans-serif" font-size="10" fill="#fecaca">Concomitant use may increase risk of gastrointestinal toxicity and reduce</text>
      <text x="20" y="64" font-family="sans-serif" font-size="10" fill="#fecaca">antiplatelet effectiveness of aspirin. Clinical consultation advised.</text>
    </g>

    <g transform="translate(25, 210)">
      <rect width="450" height="32" rx="6" fill="#042020" />
      <text x="15" y="20" font-family="monospace" font-size="8.5" fill="#5eead4">Disclaimer: Strictly educational &amp; research concept. Not professional medical advice.</text>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(imgDir, 'avatar.svg'), avatarSvg);
fs.writeFileSync(path.join(imgDir, 'pothole-detection.svg'), potholeSvg);
fs.writeFileSync(path.join(imgDir, 'rag-chatbot.svg'), ragSvg);
fs.writeFileSync(path.join(imgDir, 'withlife.svg'), withLifeSvg);
fs.writeFileSync(path.join(imgDir, 'edutime-pro.svg'), eduTimeSvg);
fs.writeFileSync(path.join(imgDir, 'hostelhub.svg'), hostelHubSvg);
fs.writeFileSync(path.join(imgDir, 'drug-checker.svg'), drugCheckerSvg);

console.log('Successfully regenerated all 7 project and avatar SVGs with 100% valid XML.');

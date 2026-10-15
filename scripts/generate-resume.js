const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outputDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Dhyanesh_Visakan_Resume.pdf');
const doc = new PDFDocument({ margin: 40, size: 'A4' });
const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Primary colors
const primaryColor = '#0f172a';
const accentColor = '#2563eb';
const textColor = '#334155';
const lightText = '#64748b';

// Header
doc.fontSize(22).fillColor(primaryColor).font('Helvetica-Bold').text('DHYANESH VISAKAN', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(11).fillColor(accentColor).font('Helvetica-Bold').text('Computer Science Engineering Student | Full-Stack Developer | AI/ML Enthusiast', { align: 'center' });
doc.moveDown(0.3);
doc.fontSize(9).fillColor(textColor).font('Helvetica').text(
  'Kattankulathur, Tamil Nadu, India  |  LinkedIn: linkedin.com/in/dhyanesh-visakan-534a02271  |  GitHub: github.com/Codeminning',
  { align: 'center' }
);
doc.moveDown(0.2);
doc.fontSize(8.5).fillColor(lightText).text('Live Project: edutime-pro.vercel.app  |  Portfolio: dhyanesh-visakan.dev (Editable)', { align: 'center' });

doc.moveDown(0.8);
doc.strokeColor('#cbd5e1').lineWidth(0.75).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.6);

// Helper for section headings
function addSectionHeader(title) {
  doc.moveDown(0.4);
  doc.fontSize(12).fillColor(accentColor).font('Helvetica-Bold').text(title.toUpperCase());
  doc.strokeColor('#e2e8f0').lineWidth(0.5).moveTo(40, doc.y + 2).lineTo(555, doc.y + 2).stroke();
  doc.moveDown(0.4);
}

// Education
addSectionHeader('Education');
doc.fontSize(10.5).fillColor(primaryColor).font('Helvetica-Bold').text('SRM Institute of Science and Technology (SRMIST)', { continued: true });
doc.fontSize(9.5).fillColor(lightText).font('Helvetica').text('  —  Kattankulathur, Tamil Nadu', { align: 'right' });
doc.fontSize(9.5).fillColor(textColor).font('Helvetica-Bold').text('Bachelor of Technology in Computer Science and Engineering  |  CGPA: 8.15');
doc.fontSize(8.5).fillColor(textColor).font('Helvetica').text('Relevant Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Machine Learning, Computer Vision, Computer Architecture');

// Technical Skills
addSectionHeader('Technical Skills');
const skills = [
  { label: 'Languages', items: 'Python, C, C#, C++, JavaScript, SQL' },
  { label: 'Frontend Development', items: 'HTML5, CSS3, React, Next.js, Vite, Tailwind CSS' },
  { label: 'Backend Development', items: 'FastAPI, Node.js, Express.js, REST APIs' },
  { label: 'Databases & BaaS', items: 'Supabase, MongoDB, MySQL' },
  { label: 'AI, ML & Computer Vision', items: 'TensorFlow, YOLOv8, OpenCV, NumPy, Pandas, LangChain, RAG (Retrieval-Augmented Generation)' },
  { label: 'Tools & Platforms', items: 'Git, GitHub, Docker, Streamlit, Vercel, Visual Studio Code' }
];

skills.forEach(skill => {
  doc.fontSize(9).fillColor(primaryColor).font('Helvetica-Bold').text(`${skill.label}: `, { continued: true });
  doc.fillColor(textColor).font('Helvetica').text(skill.items);
  doc.moveDown(0.15);
});

// Featured Projects
addSectionHeader('Featured Engineering Projects');

// Project 1
doc.fontSize(10).fillColor(primaryColor).font('Helvetica-Bold').text('Real-Time Pothole Detection and Municipal Budget Planning System', { continued: true });
doc.fontSize(8.5).fillColor(accentColor).font('Helvetica').text('  [Python, YOLOv8, OpenCV, NumPy, Streamlit, Folium]');
doc.fontSize(8.5).fillColor(textColor).font('Helvetica').list([
  'Developed an intelligent road-monitoring computer vision pipeline detecting road surface potholes from image & video feeds.',
  'Integrated bounding-box visualization, confidence scoring, GPS logging, and interactive Folium geospatial mapping.',
  'Reported experimental metrics: mAP@0.5 of 0.80, mAP@0.5:0.95 of 0.50, and best F1-score of 0.75 at 0.442 confidence threshold.',
  'Generated zone-wise maintenance budget summaries and automated municipal repair cost reports.'
], { bulletRadius: 1.5, textIndent: 8 });
doc.moveDown(0.2);

// Project 2
doc.fontSize(10).fillColor(primaryColor).font('Helvetica-Bold').text('EduTime Pro — AI Study Planner', { continued: true });
doc.fontSize(8.5).fillColor(accentColor).font('Helvetica').text('  [React, Vite, Supabase, JavaScript, Vercel]');
doc.fontSize(8.5).fillColor(textColor).font('Helvetica').list([
  'Architected and deployed a production-ready student productivity web application (Live: https://edutime-pro.vercel.app/).',
  'Engineered academic scheduling, task organization algorithms, and persistent cloud storage using Supabase BaaS.'
], { bulletRadius: 1.5, textIndent: 8 });
doc.moveDown(0.2);

// Project 3
doc.fontSize(10).fillColor(primaryColor).font('Helvetica-Bold').text('Enterprise Document Intelligence RAG Chatbot', { continued: true });
doc.fontSize(8.5).fillColor(accentColor).font('Helvetica').text('  [FastAPI, React, LangChain, ChromaDB, Gemini API]');
doc.fontSize(8.5).fillColor(textColor).font('Helvetica').list([
  'Built a retrieval-augmented generation (RAG) system with document ingestion, text chunking, and ChromaDB vector search.',
  'Implemented grounded conversational question answering preventing hallucinations via context-guided prompt engineering.'
], { bulletRadius: 1.5, textIndent: 8 });
doc.moveDown(0.2);

// Project 4
doc.fontSize(10).fillColor(primaryColor).font('Helvetica-Bold').text('WithLife — Smart Blood Bank Application', { continued: true });
doc.fontSize(8.5).fillColor(accentColor).font('Helvetica').text('  [JavaScript, Supabase, Modern Web Development]');
doc.fontSize(8.5).fillColor(textColor).font('Helvetica').list([
  'Engineered donor information registries, real-time inventory tracking, and urgent blood request notification workflows.'
], { bulletRadius: 1.5, textIndent: 8 });

// Certifications & Training
addSectionHeader('Certifications & Practical Workshops');
const certs = [
  'Foundational C# with Microsoft — Microsoft & freeCodeCamp, 2025 (Reported Score: 91.3%)',
  'Embedded Systems Workshop — Top Engineers in association with IIT Madras (February 2025)',
  'C Programming Mastery Course — Udemy (November 2023, Completed 25.5-Hour Curriculum)',
  'Data Structures & Algorithms Course — Udemy (November 2024)',
  'Python Bronze Badge — HackerRank'
];
certs.forEach(cert => {
  doc.fontSize(8.5).fillColor(textColor).font('Helvetica').text(`•  ${cert}`);
  doc.moveDown(0.15);
});

// Leadership & Extracurriculars
addSectionHeader('Leadership & Extracurricular Activities');
const leadership = [
  'National Cadet Corps (NCC) — Active cadet experience with verified leadership rank and drill discipline.',
  'Institution of Engineers (India) — Student member participating in technical seminars and engineering sessions.',
  'Rifle-Shooting — Competitive marksman experience demonstrating precision focus and sportsmanship under official record.',
  'Continuous Engineering Workshops — Actively participating in robotics, hardware-software interfacing, and AI bootcamps.'
];
leadership.forEach(item => {
  doc.fontSize(8.5).fillColor(textColor).font('Helvetica').text(`•  ${item}`);
  doc.moveDown(0.15);
});

doc.end();
writeStream.on('finish', () => {
  console.log('Resume PDF generated successfully at:', outputPath);
});

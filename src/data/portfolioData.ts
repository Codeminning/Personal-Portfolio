import {
  PersonalInfo,
  Project,
  SkillCategory,
  EducationItem,
  Certification,
  LeadershipAchievement,
  ExperienceItem,
} from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Dhyanesh Visakan',
  tagline: 'Computer Science Engineering Student | Full-Stack Developer | AI/ML Enthusiast',
  headline: 'Building Intelligent Solutions. Engineering the Future.',
  bio: 'I am a Computer Science Engineering student at SRM Institute of Science and Technology, passionate about full-stack development, artificial intelligence, machine learning, and computer vision. I enjoy transforming innovative ideas into practical software applications that solve real-world problems. My interests include intelligent automation, AI-powered applications, scalable web systems, and emerging engineering technologies.',
  extendedBio: [
    "I'm Dhyanesh Visakan, a Computer Science Engineering student at SRM Institute of Science and Technology. I am passionate about building intelligent software, AI-powered tools, and modern web applications.",
    'My technical interests span artificial intelligence, machine learning, computer vision, backend development, and full-stack engineering. I enjoy solving practical problems, experimenting with new technologies, and developing applications that combine intelligent systems with useful user experiences.',
    'Beyond coding, I value continuous learning, engineering innovation, leadership, and collaboration. My goal is to become a skilled software engineer and contribute to meaningful technology products.'
  ],
  institution: 'SRM Institute of Science and Technology (SRMIST)',
  campus: 'Kattankulathur, Tamil Nadu, India',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  cgpa: '8.15',
  roles: [
    'Full-Stack Developer',
    'AI / ML Enthusiast',
    'Computer Vision Developer',
    'Problem Solver & Builder'
  ],
  emailPlaceholder: 'dhyanesh.visakan@example.com', // Editable placeholder as requested
  phonePlaceholder: '+91 (Editable in config)', // Editable placeholder as requested
  location: 'Kattankulathur, Chennai, Tamil Nadu, India',
  githubUrl: 'https://github.com/Codeminning',
  linkedinUrl: 'https://www.linkedin.com/in/dhyanesh-visakan-534a02271/',
  liveProjectUrl: 'https://edutime-pro.vercel.app/',
  resumeFileName: 'Dhyanesh_Visakan_Resume.pdf',
  status: 'Open to Software Engineering & AI/ML Internships'
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    id: 'languages',
    description: 'Core languages used for systems programming, data analysis, and application logic.',
    skills: [
      { name: 'Python', level: 'Core' },
      { name: 'C', level: 'Core' },
      { name: 'C#', level: 'Proficient' },
      { name: 'C++', level: 'Proficient' },
      { name: 'JavaScript', level: 'Core' },
      { name: 'SQL', level: 'Proficient' }
    ]
  },
  {
    title: 'Frontend Development',
    id: 'frontend',
    description: 'Modern component-driven web frameworks and responsive UI design toolkits.',
    skills: [
      { name: 'HTML', level: 'Core' },
      { name: 'CSS', level: 'Core' },
      { name: 'React', level: 'Core' },
      { name: 'Next.js', level: 'Proficient' },
      { name: 'Vite', level: 'Core' },
      { name: 'Tailwind CSS', level: 'Core' }
    ]
  },
  {
    title: 'Backend Development',
    id: 'backend',
    description: 'High-performance API design, microservices, and server-side runtimes.',
    skills: [
      { name: 'FastAPI', level: 'Proficient' },
      { name: 'Node.js', level: 'Core' },
      { name: 'Express.js', level: 'Proficient' },
      { name: 'REST APIs', level: 'Core' }
    ]
  },
  {
    title: 'Databases & Backend Services',
    id: 'databases',
    description: 'Relational data modeling, NoSQL stores, and Backend-as-a-Service platforms.',
    skills: [
      { name: 'Supabase', level: 'Core' },
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'MySQL', level: 'Proficient' }
    ]
  },
  {
    title: 'AI, ML & Computer Vision',
    id: 'aiml',
    description: 'Deep neural networks, object detection, LLM orchestrations, and numerical computation.',
    skills: [
      { name: 'TensorFlow', level: 'Proficient' },
      { name: 'YOLOv8', level: 'Core' },
      { name: 'OpenCV', level: 'Core' },
      { name: 'NumPy', level: 'Core' },
      { name: 'Pandas', level: 'Core' },
      { name: 'LangChain', level: 'Proficient' },
      { name: 'RAG Architecture', level: 'Proficient' }
    ]
  },
  {
    title: 'Developer Tools & Platforms',
    id: 'tools',
    description: 'Version control, containerization, cloud deployment, and IDE environments.',
    skills: [
      { name: 'Git', level: 'Core' },
      { name: 'GitHub', level: 'Core' },
      { name: 'Docker', level: 'Familiar' },
      { name: 'Streamlit', level: 'Core' },
      { name: 'Vercel', level: 'Core' },
      { name: 'Visual Studio Code', level: 'Core' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'pothole-detection',
    title: 'Real-Time Pothole Detection & Municipal Budget System',
    category: 'Artificial Intelligence / Computer Vision',
    filterCategory: 'ai-cv',
    status: 'Completed',
    shortDescription:
      'An intelligent road-monitoring system designed to detect potholes from images and video, log detection telemetry, visualize road damage locations, and support municipal maintenance planning.',
    fullDescription:
      'This project implements an end-to-end computer vision and geospatial analysis pipeline tailored for road safety and civic administration. Using a trained YOLOv8 object detection model and OpenCV processing routines, the application inspects road footage to locate structural asphalt degradations. Detections are paired with simulated GPS coordinates, plotted onto interactive Folium geospatial maps, and aggregated into zone-wise municipal repair budget estimates.',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'NumPy', 'Streamlit', 'Folium'],
    keyFeatures: [
      'Real-time pothole detection pipeline',
      'Image and video stream analysis',
      'Bounding-box visualization and confidence scoring',
      'GPS-based detection logging where location data is available',
      'Interactive map-based visualization of recorded potholes with Folium',
      'Severity classification and estimated repair costs',
      'Zone-wise municipal maintenance budget summaries',
      'Downloadable inspection and audit reports'
    ],
    reportedMetrics: [
      { label: 'mAP@0.5', value: '0.80', note: 'Reported experimental metric on validation benchmark' },
      { label: 'mAP@0.5:0.95', value: '0.50', note: 'Higher IoU threshold precision evaluate' },
      { label: 'Best F1-Score', value: '0.75', note: 'Recorded at optimal confidence threshold of 0.442' }
    ],
    implementationNotes:
      'Reported model metrics are verified experimental results from validation runs and benchmark testing. Real-world performance may vary based on camera angles, illumination, and weather conditions.',
    image: '/images/pothole-detection.svg',
    architectureDetails: [
      'Frame Extraction & Preprocessing via OpenCV',
      'Inference with Fine-tuned YOLOv8 Neural Weights',
      'Telemetry Extraction (Bounding Box Coordinates, Confidence, Timestamp)',
      'Geospatial Mapping with Folium Layer Markers',
      'Municipal Cost Heuristic Calculator (Zone Aggregation & Budget Forecasting)'
    ]
  },
  {
    id: 'rag-chatbot',
    title: 'Enterprise Document Intelligence RAG Chatbot',
    category: 'Generative AI / Backend Engineering',
    filterCategory: 'gen-ai',
    status: 'In Progress',
    shortDescription:
      'A document question-answering application designed to retrieve relevant information from unstructured documents and generate responses strictly grounded in retrieved context.',
    fullDescription:
      'Engineered to eliminate generative hallucinations in corporate research, this application indexes diverse documentation formats into high-dimensional vector space. Built with FastAPI on the server and React on the client, it leverages LangChain orchestration to parse incoming queries, execute cosine similarity search against a ChromaDB vector store, and pass verified context snippets into Google Gemini LLM for verifiable answering.',
    technologies: ['FastAPI', 'React', 'LangChain', 'ChromaDB', 'Gemini API', 'Python'],
    keyFeatures: [
      'Multi-format document ingestion and text processing',
      'Recursive text chunking and dense embedding generation',
      'ChromaDB vector database indexing and storage',
      'Semantic search and top-k context retrieval',
      'Context-aware AI question answering with citation tracking',
      'Asynchronous FastAPI backend endpoints',
      'Clean interactive document chat interface'
    ],
    implementationNotes:
      'Core RAG pipeline, embedding ingestion, and FastAPI endpoints implemented. Production multi-tenant authentication and live document uploading interfaces currently in active development.',
    image: '/images/rag-chatbot.svg',
    architectureDetails: [
      'Document Parser -> Text Splitter (Chunk Size: 500, Overlap: 50)',
      'Gemini / HuggingFace Embeddings Pipeline',
      'ChromaDB Vector Store Vectorized Lookup',
      'Strict Context Prompt Injection for Hallucination Prevention',
      'Streaming Response Generation with FastAPI & WebSockets'
    ]
  },
  {
    id: 'withlife-blood-bank',
    title: 'WithLife — Smart Blood Bank Application',
    category: 'Full-Stack Development',
    filterCategory: 'fullstack',
    status: 'Completed',
    shortDescription:
      'A blood bank application concept focused on organizing donor information, blood inventory, donation records, and emergency blood requests.',
    fullDescription:
      'WithLife addresses time-sensitive logistical hurdles in emergency healthcare by maintaining a centralized, real-time repository of blood types, certified donors, and hospital requests. Powered by JavaScript and Supabase, it provides role-specific dashboards for blood camp coordinators, hospital liaisons, and altruistic donors.',
    technologies: ['JavaScript', 'Supabase', 'HTML5', 'CSS3', 'REST APIs'],
    keyFeatures: [
      'Comprehensive donor and recipient profile management',
      'Blood donation records and history tracking',
      'Live blood group inventory tracking (A+, B+, O+, AB+, etc.)',
      'Urgent blood request workflows and status dispatching',
      'Notification triggers for critical inventory thresholds',
      'Database-backed transactional operations via Supabase'
    ],
    implementationNotes:
      'Functional database-backed prototype created with full CRUD operations for donors, inventory levels, and requests.',
    image: '/images/withlife.svg',
    architectureDetails: [
      'Supabase PostgreSQL Relational Schema for Donors & Blood Units',
      'Row Level Security (RLS) for Medical Record Privacy',
      'Realtime Subscriptions for Inventory Depletion Alerts',
      'Responsive Mobile-first Patient & Donor Interface'
    ]
  },
  {
    id: 'edutime-pro',
    title: 'EduTime Pro — AI Study Planner',
    category: 'Web Development / Student Productivity',
    filterCategory: 'web',
    status: 'Completed',
    shortDescription:
      'A student productivity web application designed to support academic study planning, task organization, and time optimization workflows.',
    fullDescription:
      'EduTime Pro is a live, production-deployed study planner crafted specifically for college students managing heavy engineering course loads. Featuring an intuitive task matrix, focus timers, and persistent cloud sync with Supabase, it gives students a distraction-free command center to organize deadlines, lab schedules, and exam revisions.',
    technologies: ['React', 'Vite', 'Supabase', 'JavaScript', 'Vercel', 'Tailwind CSS'],
    keyFeatures: [
      'Academic schedule builder and daily task management',
      'Structured timetable visualization and exam deadline countdowns',
      'Study focus sessions and session analytics',
      'Cloud data persistence with Supabase authentication and database',
      'Fast client-side routing and instant state updates with Vite',
      'Production deployment on Vercel with automated CI/CD'
    ],
    image: '/images/edutime-pro.svg',
    liveUrl: 'https://edutime-pro.vercel.app/',
    architectureDetails: [
      'React 18 Component Tree with Context State Management',
      'Supabase Authentication & Task Sync Pipeline',
      'Responsive Glassmorphic UI with Utility Tailwind styling',
      'Vercel Edge Network Deployment with HTTPS'
    ]
  },
  {
    id: 'hostelhub-marketplace',
    title: 'HostelHub — Student Community Marketplace',
    category: 'Full-Stack Development',
    filterCategory: 'fullstack',
    status: 'In Progress',
    shortDescription:
      'A trusted peer-to-peer marketplace concept for college students to buy and sell essential items safely within their campus hostel community.',
    fullDescription:
      'HostelHub solves campus turnover waste by enabling graduating seniors and resident hostelers to trade textbooks, study lamps, bicycles, calculators, and electronics. The platform enforces campus domain verification (`@srmist.edu.in`) to eliminate external spam, with filters tailored to specific hostel blocks and student departments.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    keyFeatures: [
      'College email-based community authentication and verification',
      'Rich product listings with images, condition rating, and pricing',
      'Hostel block-specific and department-based filtering',
      'Saved items wishlist and active listing tracking',
      'In-app student-to-seller inquiry channels',
      'Peer reviews and transaction ratings'
    ],
    implementationNotes:
      'Active development: MongoDB data schema defined, authentication flows designed, and frontend mockups implemented.',
    image: '/images/hostelhub.svg',
    architectureDetails: [
      'Next.js Full-Stack App Router & Server Actions',
      'MongoDB Mongoose Collections (Users, Listings, Categories, Chats)',
      'JWT Authentication verified against institutional email pattern',
      'Optimized Cloudinary media upload pipeline'
    ]
  },
  {
    id: 'drug-checker-ai',
    title: 'AI-Powered Drug Interaction Checker',
    category: 'AI Application / Healthcare Safety',
    filterCategory: 'ai-cv',
    status: 'Planned',
    shortDescription:
      'An application concept designed to help users explore medicine information, contraindications, and potential multi-drug interaction concerns.',
    fullDescription:
      'A research-oriented application concept designed to synthesize public pharmacological knowledge bases into accessible, understandable interaction alerts for patients and healthcare learners. Prioritizes patient safety by integrating medical disclaimers and strict clinical boundary guardrails.',
    technologies: ['Python', 'FastAPI', 'Knowledge Graphs', 'LLM Guardrails', 'React'],
    keyFeatures: [
      'Prescription & OTC medication lookup',
      'Pairwise active compound interaction detection',
      'Dosage precaution explanations in plain language',
      'Food-drug and alcohol contraindication alerts',
      'Strict medical disclaimer integration and emergency hotline referrals',
      'Curated references to verified pharmacology databases'
    ],
    implementationNotes:
      'Planned concept. Conceptual architecture emphasizes safety limitations, clinical evidence citations, and strict avoidance of diagnostic claims.',
    safetyNotes:
      'Strict Safety Limitation: This project is strictly educational and exploratory. It is not a medical device and does not replace qualified healthcare consultation.',
    image: '/images/drug-checker.svg',
    architectureDetails: [
      'Pharmacology Reference Knowledge Base Integration',
      'Adverse Interaction Rule Engine with Severity Tiers',
      'Guardrailed LLM Explainer with Medical Disclaimer Enforcement'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'SRM Institute of Science and Technology (SRMIST)',
    campus: 'Kattankulathur Campus (KTR)',
    location: 'Chengalpattu District, Tamil Nadu, India',
    cgpa: '8.15',
    duration: 'B.Tech Program (Undergraduate)',
    status: 'Currently Enrolled / Active Student',
    coursework: [
      'Data Structures and Algorithms',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Computer Vision',
      'Computer Architecture'
    ],
    highlights: [
      'Consistently maintained a solid 8.15 CGPA across core engineering disciplines.',
      'Active participation in university hackathons, laboratory experiments, and technical project builds.',
      'Emphasis on combining theoretical computer science principles with practical software engineering applications.'
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'microsoft-csharp',
    title: 'Foundational C# with Microsoft',
    issuer: 'Microsoft & freeCodeCamp',
    year: '2025',
    scoreOrDuration: 'Reported Score: 91.3%',
    badge: 'Microsoft Certified Badge',
    skillsLearned: ['C# Language Fundamentals', 'Object-Oriented Programming (OOP)', '.NET Ecosystem', 'Algorithmic Problem Solving'],
    credentialUrl: 'https://www.freecodecamp.org/certification/dhyanesh-visakan/foundational-c-sharp-with-microsoft',
    isVerified: true
  },
  {
    id: 'embedded-systems-iit',
    title: 'Embedded Systems Workshop',
    issuer: 'Top Engineers in association with IIT Madras',
    year: 'February 2025',
    scoreOrDuration: 'Intensive Practical Workshop',
    badge: 'IIT Madras Association',
    skillsLearned: ['Microcontroller Architectures', 'Embedded C', 'Hardware-Software Interfacing', 'Sensor Integration'],
    isVerified: true
  },
  {
    id: 'c-programming-udemy',
    title: 'C Programming Masterclass',
    issuer: 'Udemy',
    year: 'November 2023',
    scoreOrDuration: '25.5-Hour Comprehensive Course',
    badge: 'Course Completion',
    skillsLearned: ['Memory Management & Pointers', 'Low-level Data Structures', 'File I/O', 'Optimization & Debugging'],
    isVerified: true
  },
  {
    id: 'data-structures-udemy',
    title: 'Data Structures Mastery',
    issuer: 'Udemy',
    year: 'November 2024',
    scoreOrDuration: 'In-Depth Algorithmic Curriculum',
    badge: 'Course Completion',
    skillsLearned: ['Binary Search Trees', 'Graph Algorithms', 'Sorting & Searching', 'Complexity Analysis (Big-O)'],
    isVerified: true
  },
  {
    id: 'hackerrank-python',
    title: 'Python Bronze Badge',
    issuer: 'HackerRank',
    year: 'Verified Skill Milestone',
    scoreOrDuration: 'Competitive Problem Solving',
    badge: 'Bronze Badge',
    skillsLearned: ['Python Data Types', 'String Manipulation', 'Functional Programming', 'Algorithmic Scripting'],
    isVerified: true
  }
];

export const leadershipData: LeadershipAchievement[] = [
  {
    id: 'ncc-cadet',
    title: 'National Cadet Corps (NCC) Cadet',
    organization: 'National Cadet Corps (India)',
    category: 'Leadership',
    description:
      'Active cadet experience demonstrating leadership, teamwork, rigorous drill training, and national service values. Instilled an enduring foundation of disciplined execution and team collaboration.',
    highlights: [
      'Verified leadership rank and troop management participation.',
      'Active participation in field camps, ceremonial parades, and unity drills.',
      'Fostered high-pressure resilience and situational leadership.'
    ],
    verified: true
  },
  {
    id: 'iei-membership',
    title: 'Student Member — Institution of Engineers (India)',
    organization: 'Institution of Engineers (India) - IEI',
    category: 'Honor',
    description:
      'Engaged with the prestigious professional engineering body to participate in engineering symposiums, technical seminars, and multidisciplinary discussions.',
    highlights: [
      'Attended technical conferences and industry expert presentations.',
      'Promoted professional engineering ethics and lifelong technical inquiry.'
    ],
    verified: true
  },
  {
    id: 'rifle-shooting',
    title: 'Competitive Rifle-Shooting Achievements',
    organization: 'Official Rifle Shooting Competitions',
    category: 'Sports',
    description:
      'Competitive marksman experience showcasing exceptional mental discipline, stillness under pressure, precision hand-eye coordination, and sustained sportsmanship recorded under official standards.',
    highlights: [
      'Trained in precision target shooting with strict adherence to safety protocols.',
      'Demonstrated high focus, breath control, and mental endurance under timed trials.'
    ],
    verified: true
  },
  {
    id: 'technical-learning',
    title: 'Continuous Technical Workshops & Hackathons',
    organization: 'SRMIST & Partner Institutions',
    category: 'Technical',
    description:
      'Proactive commitment to engineering excellence beyond textbook coursework through applied workshops, AI bootcamps, and developer meetups.',
    highlights: [
      'Completed embedded systems training in association with IIT Madras.',
      'Regular contributor and experimenter in emerging AI models and modern web stacks.'
    ],
    verified: true
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-iit-workshop',
    role: 'Embedded Systems & Hardware Trainee',
    organization: 'Top Engineers (In Association with IIT Madras)',
    period: 'February 2025',
    location: 'Chennai, Tamil Nadu, India',
    type: 'Workshop / Training',
    description:
      'Hands-on engineering workshop focused on embedded microcontrollers, sensor integration, and real-time computing.',
    responsibilities: [
      'Assembled and programmed microcontroller test circuits using Embedded C.',
      'Configured peripheral interfaces (UART, GPIO, PWM, ADC) for sensor telemetry.',
      'Gained practical insights into the intersection of low-level firmware and high-level software architectures.'
    ],
    technologies: ['Embedded C', 'Microcontrollers', 'Sensor Interfacing', 'Hardware Debugging'],
    outcomes: [
      'Successfully deployed functional sensor readouts on hardware testboards.',
      'Received official Certificate of Participation in association with IIT Madras.'
    ]
  },
  {
    id: 'exp-academic-dev',
    role: 'Undergraduate Software & AI/ML Projects Developer',
    organization: 'SRM Institute of Science and Technology (SRMIST)',
    period: '2023 – Present',
    location: 'Kattankulathur, Tamil Nadu',
    type: 'Academic',
    description:
      'Spearheading practical software implementations and computer vision research projects alongside academic curriculum.',
    responsibilities: [
      'Architected EduTime Pro, deploying a live productivity application to hundreds of active student sessions.',
      'Formulated the YOLOv8-based real-time pothole detection and municipal cost estimator system with reported 0.80 mAP@0.5.',
      'Designed LangChain RAG pipeline with FastAPI and ChromaDB vector embeddings.'
    ],
    technologies: ['Python', 'YOLOv8', 'FastAPI', 'React', 'Next.js', 'Supabase', 'Streamlit'],
    outcomes: [
      'Maintained 8.15 CGPA while building multi-tier production and prototype web solutions.'
    ]
  }
];

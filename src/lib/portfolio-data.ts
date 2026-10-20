import type { PortfolioFact } from './portfolio-search';

export const experience = [
  {
    role: 'Full Stack Developer', organization: 'Keelung For a Walk Program', type: 'Volunteer',
    dates: 'Feb 2026 — Present', location: 'Remote · Keelung, Taiwan',
    bullets: [
      'Improving admin and user experiences in a Vue.js/TypeScript SPA with admin editor tools and multi-code structure support.',
      'Building AR.js WebAR challenges, location-based interactions, completion pages with timer functionality, and multilingual map synchronization, supporting delivery of 200+ unique challenge codes.',
      'Integrating client-side state persistence and Firebase deployment workflows.'
    ]
  },
  {
    role: 'Full Stack Developer', organization: 'IHAI Time (Initiative)', type: 'Contract',
    dates: 'Jul 2025 — Present', location: 'Remote',
    bullets: [
      'Developing a volunteer management platform using React, FastAPI, and PostgreSQL to support shift coordination, approvals, and time-credit tracking, including automated token-credit issuance.',
      'Designed backend services, REST APIs, and relational data models; developing AI-assisted spreadsheet imports to standardize volunteer data and reduce manual entry. Evaluated on synthetic datasets, reducing 100-row import time by approximately 97% with 98.1% field-level accuracy.'
    ]
  },
  {
    role: 'Product Marketing & Content Strategist', organization: 'Freelance', type: 'Freelance',
    dates: 'Jun 2024 — Present', location: 'Remote',
    bullets: [
      'Led client engagements with 40+ brands across technology, AI, and lifestyle, including approximately seven campaigns with Perplexity AI.',
      'Translated business goals into campaigns generating 4M+ cumulative views, refining messaging using engagement and conversion metrics.'
    ]
  },
  {
    role: 'Data Mining Intern', organization: 'Amherst College', type: 'Internship',
    dates: 'Jan 2025 — May 2025', location: 'Amherst, MA',
    bullets: [
      'Built a Selenium pipeline to collect and analyze 10,000+ tweets. Used BETO (Spanish BERT) to generate sentiment labels and compared Logistic Regression and Random Forest classifiers to analyze trends across Latin American feminist hashtags.',
      'Created 15+ visualizations with pandas and seaborn to communicate engagement patterns and temporal trends.'
    ]
  },
  {
    role: 'Lead Data & IT Team Member', organization: 'The Remedy Project', type: 'Volunteer',
    dates: 'Jan 2023 — Feb 2024', location: 'Remote',
    bullets: [
      'Managed backend operations of a NationBuilder action-page platform for 1,000+ community members, supporting supporter data workflows, CRM segmentation, donation pipelines, and campaign automation.',
      'Collaborated with co-founders to improve website architecture and user experience with Jinja, HTML/CSS, and JavaScript, building dynamic landing pages and streamlining action-page conversions.'
    ]
  },
  {
    role: 'COSC-112 Teaching Assistant', organization: 'Amherst College', type: 'Teaching',
    dates: 'Sep 2023 — Dec 2023', location: 'Amherst, MA',
    bullets: [
      'Led weekly labs and 12+ office hours for approximately 40 students in Intro to Computer Science II, supporting AI concepts, data structures, and algorithms.'
    ]
  },
  {
    role: 'Research Fellow → Gregory Call Intern', organization: 'Amherst College', type: 'Research · Internship',
    dates: 'Jun 2023 — Dec 2023', location: 'Amherst, MA',
    bullets: [
      'Built a Python discrete-event simulation of Starbucks ordering across mobile, drive-thru, and in-person channels, modeling 25 million customer entries across 25 queue-threshold scenarios.',
      'Analyzed customer switching and balking behavior using NumPy and pandas; visualized response-time and customer-retention tradeoffs with Matplotlib and Seaborn.'
    ]
  }
];

export const projects = [
  {
    visual: 'fundflow', name: 'FundFlow — Fund Holdings Pipeline', dates: 'Oct 2026',
    desc: 'Built an end-to-end pipeline processing 19,000+ holdings across 5 iShares ETFs. Preserves source reports in AWS S3 and verifies SHA-256 checksums and row-level validation before loading MongoDB Atlas. Orchestrates ingestion through a manually triggered GitHub Actions workflow with AWS OIDC authentication, automated tests, and run summaries. Implements batch upserts, duplicate prevention, and source-to-record traceability, with a FastAPI dashboard on Vercel for processing history, searchable holdings, and server-side filtering and pagination.',
    metrics: ['19,000+ holdings', '5 iShares ETFs', 'Source-to-record traceability'],
    tags: ['Python', 'Playwright', 'AWS S3', 'MongoDB Atlas', 'FastAPI', 'pytest', 'GitHub Actions', 'AWS OIDC'],
    demo_link: 'https://fund-flow-sepia.vercel.app/',
    github_link: 'https://github.com/ItzRae/fund-flow'
  },
  {
    visual: 'landfall', name: 'U.S. Hurricane Landfall Detector', dates: 'Aug 2026',
    desc: 'Built an end-to-end Python geospatial analytics pipeline that parses NOAA HURDAT2 storm records, reconstructs tracks through geometric interpolation, and detects 488 hurricane-strength landfall candidates across 18 Atlantic and Gulf coastal states since 1900 with Shapely and GeoPandas. Interpolates landfall time and wind speed for analysis and reporting. Achieved 94.9% reference coverage across matching candidates, with 56 automated tests and GitHub Actions workflows for validated data updates and dashboard availability checks, plus automatic deployment to Streamlit.',
    metrics: ['18 coastal states', '94.9% reference coverage', '488 landfall candidates', '56 automated tests'],
    tags: ['Python', 'GeoPandas', 'Shapely', 'PyProj', 'pytest', 'Streamlit'],
    demo_link: 'https://us-landfall-detector.streamlit.app/',
    github_link: 'https://github.com/ItzRae/fl-landfall-detector'
  },
  {
    visual: 'allytext', name: 'AllyText', dates: 'Jun 2026 · In progress',
    desc: 'Developing a Telegram-based AI personal messaging assistant with typed tool execution, permission checks, and LangSmith tracing. Validated backend behavior with 163 automated tests covering APIs, database operations, MCP tool calls, and failure handling using mock data.',
    metrics: ['163 automated tests'],
    tags: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Docker'],
    demo_link: '', github_link: ''
  },
  {
    visual: 'anti-brainrot', name: 'anti-brainrot', dates: 'Apr 2026',
    desc: 'Built an Electron and React desktop app that detects phone usage locally with TensorFlow.js (COCO-SSD) at approximately 100ms per inference. Designed multi-window IPC for behavioral intervention overlays and refined false-positive handling through informal testing with approximately 10 users.',
    metrics: ['~100ms per inference', 'Local computer vision'],
    tags: ['Electron', 'React', 'TensorFlow.js', 'Node.js'],
    demo_link: 'https://anti-brainrot-gamma.vercel.app/',
    github_link: 'https://github.com/ItzRae'
  }
];

export const otherProjects = [
  {
    name: 'Photobooth+',
    desc: 'Digital photobooth web app where users can capture live photos, choose strip layouts, preview results instantly, and download polished photostrips.',
    tags: ['React', 'CSS Modules', 'Webcam API'],
    demo_link: 'https://photobooth-plus.vercel.app/',
    github_link: 'https://github.com/ItzRae/photobooth-plus',
    visual: 'photobooth'
  },
  {
    name: 'AlgoVisualizer',
    desc: 'Real-time sorting algorithm visualizer with animations, runtime complexity breakdowns, and pseudocode — built to make CS fundamentals tangible.',
    tags: ['React', 'Algorithms', 'Animation'],
    demo_link: 'https://itzrae.github.io/algo-visualizer/',
    github_link: 'https://github.com/ItzRae/algo-visualizer',
    visual: 'algo'
  },
  {
    name: 'F1 Data Science Blog',
    desc: 'Interactive data blog analyzing Formula 1 datasets with spatial visualizations via Leaflet, network graphs, and NLP-driven word clouds from web-scraped race commentary.',
    tags: ['R', 'Data Science', 'Web Scraping'],
    demo_link: 'https://stat231-f24.github.io/blog01-f1-fanatics/',
    github_link: 'https://github.com/stat231-f24/blog01-f1-fanatics',
    visual: 'f1'
  },
  {
    name: 'MammothEDU',
    desc: 'AI-powered education web app built at the HackMIT Hackathon, offering increased curriculum flexibility for students and educators. Built with React, OpenAI API, and Tailwind CSS.',
    tags: ['React', 'OpenAI API', 'Tailwind'],
    demo_link: 'https://mammothedu.github.io/',
    github_link: 'https://github.com/MammothEdu/MammothEdu.github.io',
    visual: 'mammoth'
  },
  {
    name: 'UGC Portfolio',
    desc: 'My personal UGC portfolio, designed and built by me using TypeScript. My content creation work gives me client-facing experience, from understanding brand needs to communicating ideas and delivering content.',
    tags: ['TypeScript', 'Web Design', 'UGC'],
    demo_link: 'https://rachel-ugc.vercel.app/',
    visual: 'ugc'
  },
];

export const skillGroups = [
  { label: 'Languages', value: 'Python, Java, JavaScript, TypeScript, SQL, HTML5/CSS3, R' },
  { label: 'Frameworks', value: 'React, Vue.js, Svelte, FastAPI, Node.js, REST APIs' },
  { label: 'AI & data', value: 'Prompt Engineering, LLM Workflows, RAG Pipelines, ETL, NLP, MongoDB Atlas, pandas, NumPy, Matplotlib, Seaborn, Computer Vision' },
  { label: 'Tools', value: 'Git/GitHub, VS Code, Vercel, Selenium/Playwright, PostgreSQL, Firebase, GitHub Actions/CI/CD, Docker, AWS S3, AWS OIDC, pytest' }
];
export const hobbies = 'Outside of coding, I enjoy making and drinking matcha, playing NYT Wordle, Sudoku, and Globle, playing chess, and reading.';
export const suggestions: { question: string; answer: PortfolioFact }[] = [
  { question: 'What kind of work have you done?', answer: { title: 'Experience', text: 'My experience spans full-stack development at IHAI Time, volunteer development for Keelung For a Walk, data mining and teaching at Amherst College, and client-facing content strategy.', href: '#experience' } },
  { question: 'What AI systems have you built?', answer: { title: 'AI & software projects', text: 'I’m developing AllyText, a Telegram-based AI assistant with typed tools and permission checks. I built anti-brainrot for local phone detection with TensorFlow.js, and am developing AI-assisted spreadsheet imports at IHAI Time, evaluated on synthetic datasets with approximately 97% faster 100-row imports and 98.1% field-level accuracy.', href: '#projects' } },
  { question: 'What are your featured projects?', answer: { title: 'Selected projects', text: 'FundFlow processes 19,000+ holdings across 5 iShares ETFs with source validation, AWS S3 storage, MongoDB Atlas, GitHub Actions ingestion with AWS OIDC authentication, and a searchable FastAPI dashboard. The U.S. Hurricane Landfall Detector analyzes 18 coastal states with 94.9% reference coverage and 488 detected landfall candidates. AllyText is an AI assistant in progress with 163 automated tests. anti-brainrot detects phone use locally in approximately 100ms per inference.', href: '#projects' } },
  { question: 'What research have you done?', answer: { title: 'Research at Amherst', text: 'As a Data Mining Intern, I collected 10,000+ tweets with Selenium, generated sentiment labels using BETO (Spanish BERT), compared Logistic Regression and Random Forest classifiers, and created 15+ visualizations. During my Research Fellowship and Gregory Call internship, I built a Python simulation of Starbucks ordering across three channels, modeling 25 million customer entries across 25 queue-threshold scenarios.', href: '#experience' } },
  { question: 'Where did you study?', answer: { title: 'Education & training', text: 'I graduated from Amherst College in May 2025 with a B.A. in Computer Science and a 3.74 GPA. In Spring 2024 (February to July 2024), I studied abroad at Yonsei University in Seoul, South Korea through CIEE Seoul, where I studied computer vision and brain, cognition, and daily life. I completed CodePath’s Applications of AI Engineering with Honors in September 2026.', href: '#education' } },
  { question: 'How have you worked on social impact?', answer: { title: 'Community & volunteer work', text: 'I build interactive experiences for Keelung For a Walk and a volunteer management platform at IHAI Time. At The Remedy Project, I supported data and website operations for 1,000+ community members.', href: '#experience' } },
  { question: 'What do you do for fun?', answer: { title: 'Outside of work', text: hobbies, href: '#interests' } }
];
export const portfolioFacts: PortfolioFact[] = [
  ...experience.map(item => ({ title: `${item.role} · ${item.organization}`, text: `${item.dates}. ${item.bullets.join(' ')}`, href: '#experience', keywords: 'work job career experience' })),
  ...projects.map(item => ({ title: item.name, text: `${item.desc} Highlights: ${item.metrics.join('; ')}.`, href: '#projects', keywords: item.tags.join(' ') })),
  ...otherProjects.map(item => ({ title: item.name, text: item.desc, href: '#more-projects', keywords: item.tags.join(' ') })),
  ...skillGroups.map(group => ({ title: group.label, text: group.value, href: '#skills', keywords: 'skills technologies stack programming' })),
  { title: 'Outside of work', text: hobbies, href: '#interests', keywords: 'hobbies hobby interests fun free time games puzzles books tea matcha wordle sudoku globle chess reading' },
  { title: 'Education', text: suggestions[4].answer.text, href: '#education', keywords: 'study studied school college degree university graduate graduation gpa training codepath honors study abroad yonsei seoul korea south korea ciee computer vision brain cognition' },
  { title: 'Awards', text: 'Completed CodePath’s Applications of AI Engineering with Honors in September 2026. Third Place, Best Accessibility Hack at MLH CivicHacks in January 2023.', href: '#awards', keywords: 'award hackathon accessibility' },
  { title: 'Contact', text: 'You can reach Rachel at rrae1825@gmail.com or through the LinkedIn link at the top of this portfolio.', href: '#hero', keywords: 'contact email reach linkedin' }
];

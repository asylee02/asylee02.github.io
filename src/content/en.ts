import profileImg from '@/assets/profile.jpg';
import { projects as koProjects } from '@/data/projects';

import type { CareerEntry, Project, SkillGroup } from '@/types';
import type { EducationEntry } from '@/data/education';
import type { Content, Profile, NavItem, Ui } from '@/types/content';

const profile: Profile = {
  name: 'Sangyeon Lee',
  greeting: "Hi, I'm Sangyeon Lee.",
  headline:
    'I build the whole product — from the frontend to the backend and AI.',
  role: 'Fullstack · AI Engineer',
  photo: profileImg,
  intro: [
    'I started my career as a frontend engineer with React and TypeScript, then expanded into C# / FastAPI backends, RAG chatbots, LLM agents, and OCR document pipelines. I design and build every layer of a service — from the screen to the server to the AI model integration.',
    'I strive to be someone you can rely on: a developer who finds answers through his own reasoning and takes responsibility for them. I enjoy figuring out what I know, what I lack, and what needs to be done — then planning and exploring my way through it.',
  ],
  strengths: [
    {
      title: 'Frontend Engineering',
      desc: 'React · TypeScript UI, legacy migrations such as Angular→React, SSE streaming, and Lighthouse-driven performance tuning',
    },
    {
      title: 'Backend · Fullstack',
      desc: 'End-to-end development across C# .NET and FastAPI — from API design to auth and business logic',
    },
    {
      title: 'AI · LLM Services',
      desc: 'RAG chatbots, MCP · A2A agent architectures, and domain-specific LLM services built on Azure OpenAI',
    },
    {
      title: 'Document Processing · OCR',
      desc: 'Structuring unstructured documents — even Korean handwriting — with Azure Document Intelligence and a custom-trained Chandra OCR',
    },
  ],
  birth: '2002.03.26',
  contacts: [
    { label: 'Email', value: 'asylee02@naver.com', href: 'mailto:asylee02@naver.com' },
    { label: 'Phone', value: '+82 10-3815-8255', href: 'tel:+821038158255' },
    { label: 'GitHub', value: 'github.com/asylee02', href: 'https://github.com/asylee02' },
    { label: 'Velog', value: 'velog.io/@asylee02', href: 'https://velog.io/@asylee02/posts' },
  ],
};

const navItems: NavItem[] = [
  { label: 'About', hash: '#intro' },
  { label: 'Career', hash: '#career' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Education', hash: '#education' },
  { label: 'Contact', hash: '#contact' },
];

const careers: CareerEntry[] = [
  {
    org: 'Mazelone',
    role: 'Fullstack & AI Engineer',
    period: '2026.04 – Present',
    current: true,
    description:
      "Rejoined as a fullstack & AI engineer, building the company's core AI products — AI agents and document-processing pipelines — end to end, from the frontend to the backend and model integration.",
    projects: [
      {
        name: 'Outlook Agent',
        summary: 'An AI agent embedded in Outlook, built on the M365 Agents Toolkit',
        tech: ['TypeScript', 'React', 'M365 Agents Toolkit', 'Azure AOAI'],
        highlights: [
          'Designed and built an Outlook Agent using the VS Code M365 Agents Toolkit',
          'Implemented agent features: mail drafting, translation, and repetitive-task automation',
          'Owned both the frontend and backend (end-to-end)',
        ],
      },
      {
        name: 'Document Analyzer',
        summary: 'A system that converts unstructured documents into structured ones',
        detailSlug: 'document-analyzer',
        tech: ['Python', 'FastAPI', 'Azure Document Intelligence', 'Chandra OCR', 'Docker'],
        highlights: [
          'Owned the PDF → structured-document conversion pipeline',
          'Built a routing algorithm that classifies documents (plain vs. scanned, Korean, handwriting) and selects the best-fit OCR model',
          'Set up Chandra OCR locally and trained it on Korean handwriting to improve recognition',
        ],
      },
      {
        name: 'Korean Register Navia',
        summary: 'An AI agent platform based on MCP · A2A',
        tech: ['TypeScript', 'React', 'MCP', 'A2A', 'FastAPI'],
        highlights: [
          'Analyzed, designed, and built MCP (Model Context Protocol) and A2A (Agent-to-Agent) architecture',
          'Applied an inter-agent collaboration structure to the service',
          'Replaced sub-agent → root-agent evidence hand-off that broke on output limits for large list requests with an evidence store on the Agents SDK run context, passing only short reference IDs',
          'Added an evidence table via a nullable, backward-compatible migration so the next turn can restore previously shown evidence within the last four turns',
          'Traced missing finish_reason to the Agents SDK converting Chat Completions output into the Responses format; built a model interceptor, then rolled it back to avoid depending on SDK internals',
          'Traced intermittent web-search misses to a three-step chain of LLM decisions (root agent, search agent, Bing grounding agent) and reduced it to a single decision point by forcing search in the lower steps',
          'Diagnosed and fixed a regression where a revert commit revived a local text extractor that read HWP files as UTF-8 and failed the whole upload with HTTP 500; added a regression test',
          'Split the GHG and GA agents into dedicated plugins with their own citation rules, keeping old and new conversations listed together via category compatibility',
          'Investigated broken source links in legacy conversations and confirmed deleted citation rows using PostgreSQL statistics (pg_stat)',
        ],
      },
      {
        name: 'Korean Register Navia Web Gateway',
        summary: 'An Express gateway serving the SPA and reverse-proxying multiple backends',
        tech: ['Node.js', 'Express', 'SSE', 'CORS'],
        highlights: [
          'Served the SPA build and reverse-proxied three upstreams — API, agent, and HR',
          'Introduced a CORS origin allowlist, replacing a configuration that reflected whatever Origin header the caller sent',
          'Documented the upstream header pass-through contract and handled SSE streaming pass-through',
        ],
      },
      {
        name: 'Teams Personal App',
        summary: 'An in-house application embedded inside Microsoft Teams',
        tech: ['TypeScript', 'React', 'Teams Toolkit'],
        highlights: ['Built a Personal App so in-house services can be used directly within Teams'],
      },
    ],
  },
  {
    org: 'BIT Computer',
    role: 'Fullstack Engineer',
    period: '2025.08 – 2026.01',
    description:
      "Worked on 'DrugInfo', a leading Korean drug-information service, and on hospital-facing software. Maintained a C# .NET legacy system while building new domain features and AI services for healthcare.",
    projects: [
      {
        name: 'DUR Medication Audit System',
        summary: 'Prescription-safety verification powered by the HIRA DUR API',
        tech: ['C#', '.NET 4.8', 'Azure'],
        highlights: [
          'Built medication guidance, screening, and administration-audit features on the HIRA DUR API',
          'Implemented drug-drug interaction (contraindication) checks across prescribed medications',
          'Built an audit system that verifies whether medications were prescribed correctly for each patient',
        ],
      },
      {
        name: 'DrugInfo Pill Identification Chatbot',
        summary: 'An OCR + LLM chatbot that identifies a pill from a single photo',
        detailSlug: 'druginfo-chatbot',
        tech: ['Azure OpenAI', 'Azure Document Intelligence', 'C#', '.NET 4.8'],
        highlights: [
          'Built pill identification by extracting color, imprint, shape, and text from a photo via Azure Document Intelligence and matching against the drug DB',
          'Provided drug descriptions and alternative-medication guidance through an Azure OpenAI chatbot',
        ],
      },
      {
        name: 'DrugInfo Web Maintenance',
        summary: 'Operating the drug-information website and hospital-facing software',
        tech: ['C#', '.NET 4.8', 'Azure'],
        highlights: [
          'Maintained the DrugInfo website and shipped new features',
          'Operated Azure-based infrastructure',
        ],
      },
    ],
  },
  {
    org: 'Mazelone',
    role: 'Frontend Engineer',
    period: '2024.11 – 2025.07',
    description:
      'As the sole frontend engineer, I owned the frontend of every project — RAG-based LLM chatbots, back offices, and Office Add-ins. I improved the user experience through legacy migrations and performance optimization.',
    projects: [
      {
        name: 'Korean Register LLM Chatbot',
        summary: 'A custom RAG-based chatbot built in-house for Korean Register',
        tech: ['TypeScript', 'React', 'Angular', 'TanStack Query', 'MSW', 'Azure'],
        highlights: [
          'Full migration from Angular to React',
          'SSE streaming parsing and connection optimization',
          'Restructured a document tree of 50,000+ internal files',
          'Optimized resources by reworking TanStack Query and logic; rebuilt the auth flow',
          'Lighthouse-based performance tuning and Azure Pipeline CI/CD',
        ],
      },
      {
        name: 'M365 Account Provisioning Platform',
        summary: 'A back office for creating Microsoft accounts for public institutions',
        tech: ['TypeScript', 'React', 'TanStack Query', 'Azure'],
        highlights: [
          'Built the back office: license assignment, employee DB upload, and staff/admin CRUD',
        ],
      },
      {
        name: 'Outlook Add-in',
        summary: 'An Add-in replacing Outlook Copilot with an in-house RAG LLM',
        tech: ['TypeScript', 'React', 'Vite', 'teams-toolkit'],
        highlights: [
          'Delivered an in-house RAG LLM chatbot and document-summary features inside Outlook',
          'Migrated a legacy JS + Webpack setup to TS + React + Vite',
        ],
      },
      {
        name: 'GPT Clone · Document Analyzer Viewer',
        summary: 'A per-institution GPT interface and a document-analysis viewer',
        tech: ['TypeScript', 'React', 'react-konva', 'Azure TTS/STT'],
        highlights: [
          'Built a GPT Clone with per-institution interfaces (TTS/STT, canvas editing, text animation, SSE parsing)',
          'Built a viewer that parses and reformats document-analysis results from Markdown',
        ],
      },
    ],
  },
];

const educations: EducationEntry[] = [
  {
    name: 'Myongji University, B.S. in Convergence Software',
    period: '2021 – Aug 2025 (Graduated)',
    category: '학력',
    description:
      'Majoring in Convergence Software, with team projects including my capstone design (FatPet).',
  },
  {
    name: 'SeSAC (Seoul Software Academy for Youth)',
    period: '2023.10 – 2024.02',
    category: '교육',
    description:
      'A JavaScript fullstack developer bootcamp. Beyond the frontend, I worked with Express, Docker, SQLite, and Linux to build a backend foundation.',
  },
  {
    name: "It's Time — Inter-university IT Club",
    period: '2023.08 – 2024.02',
    category: '활동',
    badge: 'Grand Prize (1st place)',
    description:
      "In a club combining planning, design, frontend, and backend, I led the team as PM and frontend to build UniVey — winning 1st place and the Grand Prize at the final showcase.",
  },
  {
    name: 'Myongji University UX Media Laboratory',
    period: '2023.08 – 2023.10',
    category: '활동',
    description:
      "Joined the lab's summer web project as a frontend developer, learning React for the first time and building the AI mock-interview service 'Interview Please'. Experienced WebRTC · WebSocket real-time communication and MediaPipe AI models.",
  },
  {
    name: 'Coin on Web — Campus IT Club',
    period: '2021.04 – 2022.08 · 2024.03 –',
    category: '활동',
    description:
      'Where I built my web fundamentals with HTML · CSS · JS. After returning from leave, I rejoined as a frontend developer on club projects.',
  },
];

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 'high' },
      { name: 'TypeScript', level: 'high' },
      { name: 'React', level: 'high' },
      { name: 'TailwindCSS', level: 'high' },
      { name: 'TanStack Query', level: 'mid' },
      { name: 'Zustand', level: 'mid' },
      { name: 'Next.js', level: 'low' },
      { name: 'MSW', level: 'mid' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'C# (.NET 4.8)', level: 'mid' },
      { name: 'FastAPI', level: 'mid' },
    ],
  },
  {
    category: 'AI',
    skills: [
      { name: 'Azure OpenAI', level: 'mid' },
      { name: 'Azure Document Intelligence', level: 'mid' },
      { name: 'OCR Pipeline', level: 'mid' },
    ],
  },
  {
    category: 'Infra · Tools',
    skills: [
      { name: 'Git', level: 'high' },
      { name: 'Docker', level: 'mid' },
      { name: 'Azure', level: 'mid' },
      { name: 'AWS', level: 'low' },
      { name: 'Figma', level: 'low' },
    ],
  },
];

const levelLabel: Record<string, string> = {
  low: 'Basic',
  mid: 'Inter.',
  high: 'Adv.',
};

interface ProjectText {
  tagline: string;
  summary: string;
  team: string;
  role: string;
  overview: string;
  responsibilities: string[];
  features: string[];
  screenshots?: { caption: string; description?: string }[];
  pipeline?: { title: string; steps: { label: string; desc: string }[] };
  details?: { heading: string; body: string[] }[];
  links?: { label: string; url: string }[];
}

const projectText: Record<string, ProjectText> = {
  univey: {
    tagline: 'A survey web service for university students',
    summary: 'Build and analyze surveys easily with GPT-recommended questions and rich charts',
    team: 'Planning 1 · Design 1 · Frontend 2 · Backend 2',
    role: 'Frontend',
    overview:
      'A survey web service for university students covering the whole flow — creating, sharing, and taking surveys. It helps write questions with the GPT API, visualizes results in various charts, and enables easy sharing via customizable QR codes.',
    responsibilities: [
      'Main page and My Page development',
      'Survey-result chart generation',
      'Customizable QR code feature',
      'Trend recommendation page and survey listing page',
      'Slider images for the main and trend pages',
    ],
    features: [
      'GPT API–powered recommended-question generation',
      'Rich, user-tailored charts for survey results',
      'Survey sharing via customizable QR codes',
    ],
    screenshots: [
      { caption: 'Main', description: 'AI question guidance and this month’s trending surveys at a glance.' },
      { caption: 'Survey creation flow', description: 'A 3-step flow: info → questions → QR generation.' },
      { caption: 'Survey info', description: 'Enter the basic information needed for a survey.' },
      { caption: 'Question builder', description: 'Write questions directly or use AI-recommended ones.' },
      { caption: 'QR generation', description: 'Generate a customized QR code to share the survey.' },
      { caption: 'Browse & search', description: 'Filter surveys by category, status, and most recent.' },
      { caption: 'Participation', description: 'Earn points by taking part in surveys.' },
      { caption: 'Results — bar chart', description: 'Review responses per question in various charts.' },
      { caption: 'Results — pie chart', description: 'Visualize response ratios with pie and trend charts.' },
      { caption: 'Results — combined charts', description: 'Choose chart types to analyze results from multiple angles.' },
      { caption: 'Trends', description: 'A curated view of the most popular surveys.' },
      { caption: 'My Page — points', description: 'View created surveys, participated surveys, and points.' },
    ],
    links: [
      { label: 'Visit site', url: 'https://www.univey.net' },
      { label: 'GitHub', url: '#' },
    ],
  },
  fatpet: {
    tagline: 'A pet obesity diagnosis and management service using XGBoost and ChatGPT',
    summary: 'Measure a pet’s obesity with AI and get tailored solutions',
    team: 'Frontend 1 · Backend 1 · AI 2',
    role: 'Frontend',
    overview:
      'A service that measures and manages pet obesity with AI. It diagnoses obesity with an XGBoost model, offers solutions tailored to species, weight, and obesity level via ChatGPT, and lets you save results and review them as charts.',
    responsibilities: [
      'Overall frontend development',
      'AI diagnosis result and solution screens',
      'Result chart visualization',
      'Diagnosis input forms built with React Hook Form',
    ],
    features: [
      'AI-powered pet obesity measurement',
      'Same-species average weight and recommended daily calories in the results',
      'Tailored solutions by species, weight, and obesity level',
      'Saving results and solutions, presented as charts',
    ],
    screenshots: [
      { caption: 'Service intro', description: '“Is my dog overweight, too?” — diagnose your pet’s obesity.' },
      { caption: 'Sign-up · pet registration · dashboard', description: 'Register a pet after signing in and manage it from the dashboard.' },
      { caption: 'Diagnosis input · AI result', description: 'Enter weight and measurements, and AI diagnoses obesity and a solution.' },
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/asylee02/fatpet-client' }],
  },
  'document-analyzer': {
    tagline: 'From unstructured to structured documents — an OCR model-routing pipeline',
    summary:
      'Classify document characteristics, route to the best OCR model, and handle Korean handwriting with a self-trained model',
    team: 'Mazelone · In-house project',
    role: 'Fullstack · AI (PDF structuring pipeline)',
    overview:
      'An in-house document-processing system that converts unstructured documents into structured ones. I owned the pipeline that converts PDFs into structured documents. PDFs split into plain text documents and scans, and further vary by whether they are Korean or handwritten — so a single OCR model can’t deliver good quality across all cases. I designed a routing algorithm that classifies the document and then selects the best-fit OCR model among several.',
    responsibilities: [
      'Designed and built the PDF → structured-document pipeline',
      'Built the document-classification and OCR model-routing algorithm',
      'Set up Chandra OCR locally and trained it on Korean handwriting data',
    ],
    features: [
      'Automatic classification of plain vs. scanned documents',
      'OCR model routing based on Korean / handwriting characteristics',
      'A custom OCR model specialized for Korean handwriting',
    ],
    pipeline: {
      title: 'PDF Structuring Pipeline',
      steps: [
        { label: 'Input', desc: 'Upload a PDF' },
        { label: 'Classify', desc: 'Detect plain vs. scanned, Korean, and handwriting' },
        { label: 'OCR routing', desc: 'Pick the best-fit OCR model for the document' },
        { label: 'Extraction', desc: 'Process per model — Azure DI, Chandra OCR, etc.' },
        { label: 'Structuring', desc: 'Convert into a structured document and output' },
      ],
    },
    details: [
      {
        heading: 'Problem — one OCR isn’t enough',
        body: [
          'Real-world PDFs come in every shape: plain documents with a text layer, image-only scans, printed English, Korean documents, and — the hardest — Korean handwriting. A model strong on one type would collapse on another.',
        ],
      },
      {
        heading: 'Approach — classify, route, and train what’s missing',
        body: [
          'I first split documents into plain vs. scanned, then detected whether they were Korean and handwritten, and built an algorithm that routes each combination to the best-performing OCR model.',
          'Korean handwriting in particular wasn’t handled well by off-the-shelf models, so I set up Chandra OCR locally and trained it on Korean handwriting data to raise recognition quality for that case.',
        ],
      },
    ],
  },
  'druginfo-chatbot': {
    tagline: 'An OCR + LLM chatbot that identifies a pill from a single photo',
    summary:
      'Extract color, imprint, and shape from a pill photo, match it against the DB, and let an LLM explain it and suggest alternatives',
    team: 'BIT Computer · In-house project',
    role: 'Fullstack Engineer',
    overview:
      'Loose pills without packaging are hard for ordinary people to identify. When a user photographs a pill, Azure Document Intelligence OCR extracts physical features — color, imprint text, shape — and matches them against the DrugInfo drug DB to identify the medication. An Azure OpenAI chatbot then explains the drug’s effects and precautions and suggests alternatives.',
    responsibilities: [
      'Built the photo → OCR feature extraction → DB matching identification logic',
      'Built the Azure OpenAI–based drug guidance chatbot',
      'Integrated with the DrugInfo web service',
    ],
    features: [
      'Photo-based pill identification (matching color · imprint · shape · text)',
      'Guidance on the identified drug’s effects and precautions',
      'Alternative-medication recommendations',
    ],
    pipeline: {
      title: 'Pill Identification Pipeline',
      steps: [
        { label: 'Photo', desc: 'User uploads a pill photo' },
        { label: 'OCR', desc: 'Azure DI extracts color · imprint · shape · text' },
        { label: 'DB matching', desc: 'Compare features against the DrugInfo DB' },
        { label: 'Identify', desc: 'Determine candidate medications' },
        { label: 'LLM guidance', desc: 'Azure OpenAI chatbot explains and suggests alternatives' },
      ],
    },
    details: [
      {
        heading: 'Problem — an unpackaged pill is a mystery',
        body: [
          'Loose pills in a dosette or medications whose packaging is gone are hard for a layperson to identify. In the healthcare domain, where a wrong dose is a safety risk, accurate identification and trustworthy guidance were the core challenges.',
        ],
      },
      {
        heading: 'Approach — turn physical features into matchable data',
        body: [
          'I extracted a pill’s physical features (color · imprint text · shape) into structured data via Azure Document Intelligence OCR and built matching logic against DrugInfo’s drug DB.',
          'After identification, an Azure OpenAI chatbot explains the drug and suggests alternatives — but grounds its answers in DB data to keep the medical information accurate.',
        ],
      },
    ],
  },
};

const projects: Project[] = koProjects.map((p) => {
  const t = projectText[p.slug];
  if (!t) return p;
  return {
    ...p,
    tagline: t.tagline,
    summary: t.summary,
    team: t.team,
    role: t.role,
    overview: t.overview,
    responsibilities: t.responsibilities,
    features: t.features,
    screenshots: t.screenshots
      ? p.screenshots.map((s, i) => ({
          ...s,
          caption: t.screenshots![i]?.caption ?? s.caption,
          description: t.screenshots![i]?.description ?? s.description,
        }))
      : p.screenshots,
    pipeline: t.pipeline ?? p.pipeline,
    details: t.details ?? p.details,
    links: t.links ?? p.links,
  };
});

const ui: Ui = {
  langToggle: '한국어',
  metaTitle: 'Sangyeon Lee · Fullstack & AI Engineer',
  metaDescription:
    'Portfolio of Sangyeon Lee — a developer who builds the whole product from frontend to backend and AI. React · TypeScript · C# · FastAPI · Azure OpenAI · OCR.',
  hero: {
    primaryCta: 'View projects',
    secondaryCta: 'Get in touch',
    photoAlt: 'Portrait of Sangyeon Lee',
  },
  sections: {
    career: { eyebrow: 'Career', title: 'Career' },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects',
      description:
        'Projects I designed and built myself, from planning to deployment. Deep dives into work projects are available from the cards in the Career section.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Skills',
      description: 'The bars indicate proficiency (Basic · Intermediate · Advanced).',
    },
    education: { eyebrow: 'Education & Activities', title: 'Education & Activities' },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact',
      description: 'Feel free to reach out anytime if you’d like to talk.',
    },
  },
  career: {
    current: 'Current',
    reflection: 'Reflection',
    viewDetails: 'View details',
  },
  detail: {
    workBadge: 'Work Project',
    overview: 'Overview',
    role: 'Role & Contributions',
    features: 'Key Features',
    techStack: 'Tech Stack',
    screens: 'Screens',
    backToProjects: 'Projects',
    backToCareer: 'Back to Career',
    moreProjects: 'See other projects',
    step: 'STEP',
    period: 'Duration',
    team: 'Team',
    teamLabelWork: 'Organization',
    position: 'Role',
  },
};

export const enContent: Content = {
  profile,
  navItems,
  careers,
  educations,
  skillGroups,
  levelLabel,
  projects,
  ui,
};

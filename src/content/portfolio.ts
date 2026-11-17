export const identity = {
  name: 'Aaron Cao',
  role: 'Data science & machine learning student',
  focus: 'Satellite imagery. Remote sensing. Reliable AI.',
  colleges: 'Golden West College + Orange Coast College',
  program: 'NCAS 2026–27',
};

export const summary = `I am a data science major at Golden West College, also enrolled at Orange Coast College, with a 4.0 community college GPA. I plan to transfer in Fall 2027 to a University of California campus, with UC Berkeley as my top choice, and build a career in AI and machine learning engineering that turns satellite and sensor data into decisions. NASA’s Science Mission Directorate runs Earth observation and astrophysics missions that depend on data analysis,[1][2] and NASA’s Data, IT, and Cyber career area supports that work.[3] My preparation combines coursework in statistics, linear algebra, calculus, SQL-based business analytics, and C++ data structures with a Python certification and hands-on machine learning work. As a statistics tutor, I also practice explaining technical ideas clearly, which matters on NASA teams where engineers, scientists, IT specialists, and business professionals work together.[3] Over the next two years I plan to pursue a NASA internship through OSTEM or Pathways.[4] Long term, I want to build reliable, well-tested AI systems for aerospace.`;

export const skills = [
  { name: 'Python & data analysis', evidence: 'Python certification · pandas · scikit-learn', relevance: 'Analyzing and modeling mission-scale datasets.[7]', group: 'Data foundations' },
  { name: 'Machine learning', evidence: 'CNNs · transfer learning · model evaluation', relevance: 'Developing models for complex aerospace problems.[5]', group: 'Model development' },
  { name: 'Computer vision', evidence: 'Satellite imagery · geospatial classification', relevance: 'Interpreting Earth observation and remote sensing data.[1][2]', group: 'Model development' },
  { name: 'SQL & databases', evidence: 'Business Analytics · PostgreSQL', relevance: 'Organizing, querying, and making operational data useful.', group: 'Data foundations' },
  { name: 'Statistics & probability', evidence: 'Hypothesis testing · ANOVA · sampling', relevance: 'Validating scientific results and evaluating uncertainty.', group: 'Data foundations' },
  { name: 'Mathematical foundations', evidence: 'Linear algebra · multivariable calculus', relevance: 'Building foundations for machine learning and image processing.', group: 'Data foundations' },
  { name: 'MLOps & deployment', evidence: 'FastAPI · Docker · CI · cloud hosting', relevance: 'Turning trained models into reliable, usable systems.', group: 'Reliable systems' },
  { name: 'Verification & communication', evidence: 'Code risk review · statistics tutoring', relevance: 'Making technical work trustworthy and understandable across teams.[3]', group: 'Reliable systems' },
];

export type Experience = {
  id: string; title: string; role: string; field: string; tags: string[];
  description: string[]; alignment: string[]; visual: 'classification' | 'verification' | 'communication';
};

export const experiences: Experience[] = [
  {
    id: 'eurosat', title: 'Reading the Earth, one image at a time.', role: 'EuroSAT Land Classifier · Personal project', field: 'Computer vision / remote sensing',
    tags: ['PyTorch', 'ResNet-18', 'FastAPI', 'Docker'], visual: 'classification',
    description: [
      'I built a satellite image classifier by fine-tuning a ResNet-18 convolutional neural network on the EuroSAT dataset to label land use and land cover types.',
      'I serve the trained model through a FastAPI service backed by PostgreSQL and packaged in Docker, so predictions can be requested and stored like a real application.',
      'I built it by hand to develop practical intuition for how models are trained and evaluated.',
      'The project covers the full workflow from data preparation and training through evaluation and deployment.',
    ],
    alignment: [
      'Earth observation is a core part of NASA’s Science Mission Directorate, whose satellites help study our changing planet.[1][2]',
      'NASA Spinoff documents uses of satellite imagery beyond research, including agricultural water monitoring.[6]',
      'NASA’s Software Catalog and Remote Sensing Toolkit show opportunities to build tools on top of this data.[7]',
      'This project introduces classification workflows relevant to the Data, IT, and Cyber career area.[3]',
    ],
  },
  {
    id: 'coaudit', title: 'Building confidence in the code we ship.', role: 'CoAudit · Co-founder · Since May 2026', field: 'Software assurance / MLOps',
    tags: ['Python', 'scikit-learn', 'PostgreSQL', 'React'], visual: 'verification',
    description: [
      'I co-founded CoAudit, a risk-aware GitHub App that flags AI-generated code in pull requests and scores how risky each change is.',
      'The system uses a FastAPI and PostgreSQL backend, a VS Code extension that tracks AI suggestions, a scikit-learn risk-scoring pipeline, and a React dashboard.',
      'I deployed the backend to Railway and built a risk-aware pull request approval workflow around the risk scores.',
      'Working as a co-founder meant making architecture decisions and trade-offs under deadlines.',
    ],
    alignment: [
      'Verification is important in aerospace software, and NASA Force describes work involving flight software.[5]',
      'The U.S. Tech Force emphasizes AI implementation across federal agencies, reinforcing the importance of trustworthy software.[8]',
      'CoAudit makes AI contributions visible and reviewable.',
      'The skills involved connect to MLOps, software assurance, and Data, IT, and Cyber roles.[3]',
    ],
  },
  {
    id: 'tutoring', title: 'Making complex ideas feel approachable.', role: 'Statistics Tutor · Golden West College · Fall 2026', field: 'Statistical reasoning / communication',
    tags: ['Statistics', 'Teaching', 'Technical communication'], visual: 'communication',
    description: [
      'I tutor Introduction to Statistics at Golden West College’s Tutoring and Learning Center, helping students with probability, hypothesis testing, sampling, and related concepts.',
      'I explain ideas in several ways until they make sense to each student.',
      'My own coursework in statistics covers hypothesis tests, confidence intervals, ANOVA, sampling distributions, and the central limit theorem.',
      'Tutoring has strengthened both my statistical reasoning and my ability to communicate technical ideas clearly.',
    ],
    alignment: [
      'NASA describes a workforce of scientists, engineers, IT specialists, and other professionals working together.[3]',
      'Statistical reasoning supports mission data analysis and machine learning evaluation.',
      'NASA’s career resources highlight roles such as technologist and mathematician that depend on these skills.[9]',
      'Teaching also develops the knowledge sharing and mentorship described by NASA Force.[5]',
    ],
  },
];

export const pathway = [
  ['Linear Algebra + Calculus 3', 'Matrix methods, ML foundations', 'Satellite imagery analysis and image processing', [1, 2]],
  ['Business Analytics', 'SQL and data analysis', 'Data, IT, and Cyber career pathways', [3]],
  ['Statistics + tutoring', 'Inference and communication', 'Mission data analysis and collaboration', [3]],
  ['C++ data structures', 'Systems programming', 'Flight and ground software pathways', [5]],
  ['EuroSAT', 'Computer vision and geospatial data', 'Earth observation and remote sensing', [2, 7]],
  ['CoAudit', 'MLOps and verification', 'Software assurance and reliable AI', [5, 8]],
] as const;

export const timeline = [
  { when: 'Now → Fall 2027', title: 'Build a strong foundation.', text: 'Complete NCAS, deepen my coursework, and prepare to transfer to a UC campus. UC Berkeley is my top choice.' },
  { when: 'Before 2029', title: 'Put learning into practice.', text: 'Pursue a NASA OSTEM or Pathways internship, or an ML/data internship at a local startup.[4]' },
  { when: 'Long term', title: 'Make reliable AI useful.', text: 'Work in AI and machine learning engineering, with a focus on satellite data and dependable aerospace systems.' },
];

export const references = [
  { id: 1, org: 'NASA', title: 'NASA Directorates', url: 'https://www.nasa.gov/directorates/' },
  { id: 2, org: 'NASA', title: 'Missions', url: 'https://www.nasa.gov/nasa-missions/' },
  { id: 3, org: 'NASA', title: 'Careers at NASA', url: 'https://www.nasa.gov/careers/' },
  { id: 4, org: 'NASA', title: 'NASA Internship Programs', url: 'https://www.nasa.gov/learning-resources/internship-programs/' },
  { id: 5, org: 'NASA', title: 'NASA Force', url: 'https://www.nasa.gov/careers/nasaforce/' },
  { id: 6, org: 'NASA', title: 'NASA Spinoff', url: 'https://spinoff.nasa.gov/' },
  { id: 7, org: 'NASA', title: 'Technology Transfer Portal', url: 'https://technology.nasa.gov/' },
  { id: 8, org: 'U.S. Office of Personnel Management', title: 'US Tech Force', url: 'https://techforce.gov/' },
  { id: 9, org: 'NASA', title: 'Next Gen STEM for Careers', url: 'https://www.nasa.gov/learning-resources/next-gen-stem-for-careers/' },
];

export const resume = {
  education: 'Golden West College & Orange Coast College',
  educationDetail: 'Concurrent enrollment · Since August 2025 · GPA 4.0 · Transfer target: Fall 2027',
  coursework: 'Statistics, linear algebra, multivariable calculus, business analytics / SQL, C++ data structures',
  experience: [
    { title: 'Co-founder · CoAudit', date: 'May 2026–present', bullets: ['Built a risk-aware workflow for reviewing AI-generated code in GitHub pull requests.', 'Developed with FastAPI, PostgreSQL, scikit-learn, and React; deployed the backend to Railway.'] },
    { title: 'Software Engineer Intern · Toyz Electronics', date: 'January–March 2026', bullets: ['Software engineering internship. Responsibilities and outcomes to be added after review.'] },
    { title: 'Statistics Tutor · Golden West College', date: 'Fall 2026–present', bullets: ['Support Introduction to Statistics students with statistical reasoning and technical concepts.'] },
  ],
  project: 'Fine-tuned ResNet-18 on EuroSAT for land use and land cover classification; served predictions with FastAPI, PostgreSQL, and Docker.',
  programs: 'NASA Community College Aerospace Scholars, 2026–27 · Python certification',
  skills: 'Python · SQL · PyTorch · scikit-learn · FastAPI · PostgreSQL · Docker · TypeScript · React · C++',
};

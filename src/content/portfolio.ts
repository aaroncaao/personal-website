export type PortfolioImage = {
  file: string;
  alt: string;
  width: number;
  height: number;
};

export const portrait: PortfolioImage = {
  file: 'aaron-cao.png',
  alt: 'Portrait of Aaron Cao',
  width: 1086,
  height: 1448,
};

export const identity = {
  name: 'Aaron Cao',
  role: 'Second-year data science student at Orange Coast College',
  colleges: 'Golden West College + Orange Coast College',
  program: 'NCAS 2026–27',
};

export const summary = `I am a data science student enrolled at Orange Coast College, preparing for a career in machine learning and data analytics. I plan to transfer to a University of California campus in Fall 2027 and continue developing the mathematical, computational, and practical foundations this work requires. O*NET identifies data analysis, model testing and validation, and communicating findings as responsibilities of data scientists. Its education survey emphasizes bachelor’s and master’s degrees, supporting my plan to continue my education while gaining applied experience.[10] My coursework in statistics, linear algebra, calculus, SQL, and C++ connects directly to the programming and quantitative reasoning used in this field. Through my EuroSAT project, I gained experience in satellite imagery with a convolutional neural network and data analytics/preprocessing. CoAudit gave me experience building end to end applications with full stack development. As a statistics tutor, I strengthen my ability to explain technical ideas clearly, a skill O*NET highlights through presenting and interpreting analytical results.[10] These experiences connect my preparation to NASA’s Earth observation work, where satellite data helps scientists study our planet.[11] I want to contribute tools that make those observations useful and trustworthy. My next steps are to deepen my geospatial analysis and model evaluation skills, complete my transfer preparation, and pursue a NASA or industry data internship. Long term, I aim to build reliable machine learning systems that turn Earth observation data into information people can understand and use to make informed decisions.`;

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
  description: string[]; alignment: string[]; image: PortfolioImage;
};

export const experiences: Experience[] = [
  {
    id: 'eurosat', title: 'EuroSAT Land Classifier', role: 'Personal project', field: 'Computer vision / remote sensing',
    tags: ['PyTorch', 'ResNet-18', 'FastAPI', 'Docker'],
    image: {
      file: 'eurosat-results.png',
      alt: 'EuroSAT results showing 91.96% test accuracy, accuracy by land class, and training loss and accuracy curves',
      width: 1122,
      height: 777,
    },
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
    id: 'coaudit', title: 'CoAudit', role: 'Co-founder · Since May 2026', field: 'Software assurance / MLOps',
    tags: ['Python', 'scikit-learn', 'PostgreSQL', 'React'],
    image: {
      file: 'coaudit-activity.png',
      alt: 'CoAudit activity dashboard showing code changes, risk levels, and pending reviews',
      width: 1485,
      height: 842,
    },
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
    id: 'tutoring', title: 'Statistics Tutoring', role: 'Golden West College · Fall 2026', field: 'Statistical reasoning / communication',
    tags: ['Statistics', 'Teaching', 'Technical communication'],
    image: {
      file: 'math-science-building.jpg',
      alt: 'The math and science building at dusk',
      width: 795,
      height: 450,
    },
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
  { when: 'Now → Fall 2027', title: 'UC transfer preparation', text: 'Complete NCAS, deepen my coursework, and prepare to transfer to a UC campus. UC Berkeley is my top choice.' },
  { when: 'Before 2029', title: 'Internship', text: 'Pursue a NASA OSTEM or Pathways internship, or an ML/data internship at a local startup.[4]' },
  { when: 'Long term', title: 'Machine learning engineering', text: 'Work in AI and machine learning engineering, with a focus on satellite data and dependable aerospace systems.' },
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
  { id: 10, org: 'O*NET OnLine', title: 'Data Scientists — 15-2051.00', url: 'https://www.onetonline.org/link/summary/15-2051.00' },
  { id: 11, org: 'NASA Science', title: 'Earth Science', url: 'https://science.nasa.gov/earth/' },
];

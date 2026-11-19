// Transcribed from public/NCAS_RESUME.pdf for the portfolio print view.
type ResumeEntry = {
  title?: string;
  date?: string;
  role?: string;
  bullets: string[];
};

export const resume = {
  name: "Aaron Cao",
  location: "Westminster, CA",
  phone: "(657)501-7023",
  email: "aarontac185@gmail.com",
  profiles: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aaron-cao-0244863a2/" },
    { label: "GitHub", url: "https://github.com/aaroncaao" },
  ],
};

export const resumeSections: { title: string; entries: ResumeEntry[] }[] = [
  {
    title: "Education",
    entries: [
      {
        title: "Golden West College",
        date: "Aug 2025 - Present",
        role: "Data Science",
        bullets: [
          "Coursework: Java Programming 1, Calculus 2, Introduction to Statistics, Calculus 3, Business Analytics, Discrete Structures",
        ],
      },
      {
        title: "Orange Coast College",
        date: "Aug 2025 - Present",
        role: "Data Science",
        bullets: [
          "Coursework: C++ Programming 1, C++ Programming 2, Linear Algebra and Differential Equations",
        ],
      },
    ],
  },
  {
    title: "Projects",
    entries: [
      {
        title: "EuroSat CNN Land Classifier",
        date: "Jul 2026 - Sep 2026",
        bullets: [
          "Built a 2.2 million parameter convolutional neural network in PyTorch that sorts 64x64 satellite images into 10 land types, such as forest, highway, and residential, with 91.96% correct on 5,400 test images",
          "Increased accuracy from 91.96% to 97.20% on the same test images by comparing the network to a ResNet18 trained on photographs, then training its last block again at a low rate to fit the satellite data",
          "Corrected a full failure on images from Google's Earth Engine, where the network gave the wrong type to 95% of the tiles in a city scene, by measuring the color and contrast of both sources and adding five lines to adjust the colors before each test, which raised correct results to 83%",
          "Added a rule that gives no answer when the two highest scores differ by less than 0.20, which separated the correct tiles at 97-100% from the errors at 51-59%",
        ],
      },
      {
        title: "CoAudit",
        date: "May 2026 - Sep 2026",
        bullets: [
          "Architected a SaaS platform that provides engineering leads with a complete audit trail of AI-generated code across their GitHub organization, tracking each commit, the responsible AI agent, and the amount of human review",
          "Designed CoAudit to require zero developer-side setup by building a GitHub App integration that starts ingesting activity org-wide the moment it's installed",
          "Built a two-tier system for attributing AI-written commits to the agent that wrote them, using git-ai if installed and falling back to pattern-based heuristics, achieving zero misclassifications between AI-authored and human commits across all real-world activity ingested to date",
          "Fixed a bug pointed out by a tester where multi-agent signals would be squashed because signals could only be identified by which agent was identified first by replacing a single column with a join table and reading all co-author lines",
        ],
      },
    ],
  },
  {
    title: "Relevant Experience",
    entries: [
      {
        title: "LayDown - An Alternative to Apple's StandBy Mode",
        date: "Aug 2026 - Present",
        role: "Founder",
        bullets: [
          "Built a third-party replacement for Apple's StandBy for IOS 26, a full-screen nightstand display that turns a horizontal iPhone into a configurable clock, with selectable faces, ambient backgrounds, and live info widgets",
          "Built 10 live tiles across WeatherKit, EventKit, HealthKit, Spotify SDK, and Finnhub API each with three size variants based on self-implemented grid system and graceful degradation",
          "Delivered a two-stage brightness controller that dims below iOS's system floor by combining backlight control with an overlay, tested for monotonicity across 101 slider steps and for restoring the user's brightness on every scene change",
          "Garnered a 15-person waitlist by marketing and posting to high impact users on Reddit",
        ],
      },
      {
        title: "Golden West College",
        date: "Aug 2026 - Present",
        role: "Statistics Teaching Assistant and Peer Tutor",
        bullets: [
          "Assisted 30+ students in Introduction to Statistics at about 6 hours per week by teaching hypothesis testing, regression, probability distributions, and confidence intervals through step-by-step worked examples in one-on-one and small-group sessions",
          "Helped two students earn 100% on nearly all course exams by diagnosing their weak spots and building targeted practice problem sets",
          "Hosted review sessions for about 15 students before each exam by designing 15 practice problems covering probability, hypothesis testing, regression, and more",
        ],
      },
    ],
  },
  {
    title: "Technical Skills/Certfications",
    entries: [
      {
        bullets: [
          "Languages: Python, C++, CSS, React, TypeScript, SQL, Swift (Learning)",
          "Other Skills: Microsoft Office, Google Workspace, Git, CI/CD, Relational Databases, FastAPI, UX Design, AI/ML, Pandas, Matplotlib, NumPy, Scikit-learn, PyTorch, Juypter Notebook",
          "Certification: Scientific Computing in Python with FreeCodeCamp, Claude Code 101 by Anthropic",
        ],
      },
    ],
  },
];

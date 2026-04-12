export const personal = {
  name: "Piyush Vyawahare",
  title: "Software Engineer",
  tagline: "MERN Stack · React.js · Next.js · TypeScript",
  description:
    "Software Engineer with 3+ years building scalable, production-grade web applications. Currently at TCS working on a large-scale US healthcare platform using React.js, Next.js, and TypeScript in a micro-frontend architecture.",
  about: [
    "Software Engineer with 3+ years of experience building scalable, production-grade web applications using the MERN stack, React.js, Next.js, and TypeScript.",
    "At TCS, I work on a large-scale US healthcare platform — developing core frontend modules in a micro-frontend architecture, building shared component libraries, and architecting state management solutions.",
    "I care deeply about clean, testable code and developer experience. Maintaining 90%+ unit test coverage is not just a metric for me — it is a standard I hold myself to on every project.",
  ],
  email: "piyushvyawahare2001@gmail.com",
  phone: "+91 9309982738",
  location: "Pune, India",
  linkedin: "https://www.linkedin.com/in/piyushvyawahare58/",
  github: "https://github.com/PiyushVyawahare",
};

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "90%+", label: "Test coverage" },
  { value: "70+", label: "JSP screens modernized" },
  { value: "20+", label: "Reusable components" },
];

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "Java", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Recoil",
      "Tailwind CSS",
      "Material UI",
      "Formik",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "JWT",
      "Bcrypt",
      "Socket.io",
      "Spring Boot",
      "Prisma",
      "Mongoose",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    items: ["AWS", "Docker", "Git", "GitHub", "Linux/Unix", "Postman", "Jira", "VS Code"],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    period: "Aug 2023 — Present",
    type: "Full-time",
    bullets: [
      "Developed core frontend modules for a greenfield rewrite of a legacy JSP platform into a micro-frontend architecture using React.js and Next.js, modernizing 70+ legacy JSP screens across 3 milestones and reducing technical debt by 60% for a large-scale US healthcare client.",
      "Architected client-specific state management using React's useReducer, useContext, custom actions and reducers, adopted across 3 core modules by a team of 12 frontend developers, replacing prop-drilling and improving scalability.",
      "Built 20+ reusable UI components with Material UI and Data Grid, reducing UI development effort by 35% and establishing a shared component library adopted across 13+ micro-frontend modules.",
      "Built 10+ complex form-driven interfaces using Formik and Yup with 20+ custom validations per form, handling dynamic API-driven fields for critical drug management workflows.",
      "Wrote comprehensive unit tests using Jest and React Testing Library, maintaining 90%+ code coverage across all frontend modules.",
      "Built the entire frontend codebase in TypeScript, enforcing strict type safety through well-defined interfaces and types for all components, props, state, and API contracts.",
      "Integrated GraphQL APIs on the frontend, reducing payload sizes and improving performance for data-heavy formulary views.",
      "Developed secure RESTful APIs with Node.js and Express.js, implementing JWT and Bcrypt-based role authentication with optimized MongoDB schema design.",
      "Built a project search and filter system for an internal tool, enabling multi-parameter filtering (language, contributor, tags) across thousands of records using React.js, Node.js, and MongoDB.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    period: "Feb 2023 — May 2023",
    type: "Internship",
    bullets: [
      "Built full-stack modules using React.js, Node.js, and Express.js, consuming REST APIs within Agile sprint cycles and participating in peer code reviews.",
      "Developed clean, version-controlled code using Git and GitHub under senior mentorship in a production codebase environment.",
    ],
  },
];

export const projects = [
  {
    name: "InterAct",
    subtitle: "Real-Time Chat Application",
    description:
      "Full-stack real-time chat application with Socket.io bidirectional messaging, supporting group creation, invite management, and live conversation updates.",
    stack: ["React.js", "Node.js", "Socket.io", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/PiyushVyawahare/InterActFrontend",
    live: null,
  },
  {
    name: "SpotFinder",
    subtitle: "Online Parking Search Platform",
    description:
      "Full-stack parking discovery platform built with MERN stack. Led a team of four — enables users to search, book, and navigate to nearby parking via Google Maps API.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API", "JWT"],
    github: "https://github.com/PiyushVyawahare/Online-Parking-System",
    live: null,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology — Computer Engineering",
    institution: "Savitribai Phule Pune University",
    period: "Aug 2019 — June 2023",
    grade: "CGPA: 9.29",
    activities: "Web Development Head at Coding Club of JSPM's RSCOE",
  },
];

export const certifications = [
  {
    name: "GitHub Foundations",
    issuer: "GitHub (Official)",
    year: "2025",
    link: "https://www.credly.com/badges/d9d07405-b5ff-4153-8e9a-3cfff1caedaa/public_url",
  },
];

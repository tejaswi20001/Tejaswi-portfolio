import jobbyImg from "../../assets/images/jobby.png";
import ecommerceImg from "../../assets/images/ecommerce.png";
export const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Next.js",
      "Responsive UI",
      "Bootstrap",
      "TypeScript",
      "CSS-in-JS",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel/Netlify", "Postman", "Render"],
  },
];

export const projects = [
  {
    title: "Jobby App",
    desc: "A job search platform that lets users securely log in, browse jobs, and filter results with a clean, responsive UI.",
    highlights: [
      "Implemented JWT authentication with protected routes (redirects, token handling)",
      "Built reusable job card components + search/filter UI for jobs listing",
      "Handled loading, failure, and empty states to avoid blank screens",
      "Mobile-first responsive layouts for consistent UX across devices",
    ],
    tech: ["React", "JavaScript", "JWT", "REST API", "CSS"],
    image: jobbyImg,
    live: "https://tejaswi-jobby-application.vercel.app/login",
    github: "Yhttps://github.com/tejaswi20001/Jobby-App",
  },
  {
    title: "E-commerce App",
    desc: "An e-commerce frontend where users can browse products, filter/search, view details, and manage a shopping cart smoothly.",
    highlights: [
      "Built product listing + product details pages with filter/search experience",
      "Implemented cart features: add/remove items and quantity updates",
      "Managed UI states (loading/empty/error) for reliable user experience",
      "Responsive UI optimized for both desktop and mobile screens",
    ],
    tech: ["React", "JavaScript", "CSS", "REST API"],
    image: ecommerceImg,
    live: "https://tejaswi-ecommerce.vercel.app/login",
    github: "https://github.com/tejaswi20001/ecommerce-website.git",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "HPC Consulting",
    duration: "September 2020 – August 2023",
    points: [
      "Worked on full-stack web applications, contributing to both frontend interfaces and backend services using modern JavaScript technologies.",
      "Built reusable UI components like filters, loaders, pagination, and error states to keep the interface consistent and easier to maintain.",
      "Integrated REST APIs to create dynamic user experiences and handled loading, empty, and error states for a smoother user journey.",
      "Collaborated with designers, backend developers, and product teams in an Agile/Scrum environment to deliver features and improvements on time.",
      "Developed responsive, mobile-first layouts using HTML5, CSS3, Bootstrap, and CSS-in-JS to ensure good performance across devices.",
      "Built backend APIs with Node.js and Express for an online tools platform that supported file upload, conversion, and download workflows.",
      "Integrated third-party conversion services for PDF, document, and image processing, including validation, async handling, retries, and clear failure messages.",
      "Improved file-processing reliability by adding file type and size checks, unique job IDs, and automatic cleanup of temporary files.",
      "Applied production-focused practices like rate limiting, structured logging, and centralized error handling to improve stability and debugging.",
      "Used software engineering fundamentals, data structures, and problem-solving skills to build efficient and scalable applications.",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "Next.js",
      "Bootstrap",
      "CSS-in-JS",
      "Styled Components",
      "Node.js",
      "Express.js",
      "Third-Party APIs",
    ],
  },
];

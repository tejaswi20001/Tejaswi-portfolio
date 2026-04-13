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
      "Developed and maintained responsive user interfaces using React.js, HTML5, and CSS3, improving user engagement and reducing bounce rate by ~20%.",
      "Built reusable UI components (cards, modals, filters, pagination), reducing development time for new features by ~30%.",
      "Integrated frontend with backend services using RESTful APIs, improving data loading efficiency and reducing API response time by ~25%.",
      "Designed and implemented scalable backend APIs using Node.js and Express, supporting 5K+ monthly active users with stable performance.",
      "Managed databases using MongoDB, optimizing queries and reducing data retrieval time by ~35%.",
      "Implemented authentication and validation mechanisms, improving application security and reducing unauthorized access issues by ~40%.",
      "Integrated third-party services and handled asynchronous workflows, improving system reliability and reducing failure rates by ~20%.",
      "Optimized application performance using lazy loading, pagination, and efficient API design, improving page load time by ~30%.",
      "Deployed and maintained applications on AWS with CI/CD pipelines, reducing deployment time and manual errors by ~40%.",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Third-Party APIs",
      "MongoDB",
    ],
  },
];

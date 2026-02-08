import jobbyImg from "../../assets/images/jobby.png";
import ecommerceImg from "../../assets/images/ecommerce.png";
export const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Bootstrap",
      "TypeScript",
      "CSS-in-JS",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel/Netlify", "Postman"],
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
    role: "Software Engineer (Frontend Developer — Client Project)",
    company: "Cutshort",
    duration: "2 years",
    link: "https://cutshort.io/",
    points: [
      "Built and maintained reusable React components and shared UI patterns for faster feature delivery.",
      "Integrated backend APIs and implemented clear loading/empty/error states to improve UX and reduce user confusion.",
      "Delivered responsive layouts using HTML/CSS, Bootstrap, and CSS-in-JS across mobile and desktop.",
      "Collaborated with backend engineers to align API contracts and ship end-to-end features.",
    ],

    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "CSS-in-JS",
      "Bootstrap",
      "REST API",
    ],
  },
  {
    role: "Software Engineer (Backend Developer — Client Project)",
    company: "ToolX",
    duration: "1 year",
    link: "https://www.toolsx.site/",
    points: [
      "Developed REST APIs in Node/Express to support product features and frontend integration.",
      "Worked with PostgreSQL to manage application data and write efficient queries as needed.",
      "Validated requests and improved reliability by debugging and fixing API issues.",
      "Partnered with frontend devs to ensure correct data flow and smooth UI behavior.",
    ],

    tech: ["Node.js", "Express.js", "PostgreSQL", "SQL", "REST API"],
  },
];

import { Project, SocialLink, Experience, Education } from './types';
import { Github, Twitter, Linkedin, Mail, Code2 } from 'lucide-react';

export const INTRO_TEXT = {
  greeting: "Hi, I'm Venugopal.",
  role: "Software Engineer & Developer",
  description: "I engineer performant, structurally sound, and user-centric digital experiences. I care about the logic behind the system and the clarity of the design."
};

export const ABOUT_TEXT = [
  "I specialize in building scalable, secure, and high-performance web applications using Java Spring Boot and React.js.",
  "With a strong focus on System Design (HLD & LLD) and algorithmic efficiency, I strive to create software that is architecturally sound on the backend and intuitive on the frontend. I enjoy tackling complex engineering challenges and ensuring data integrity through robust API design.",
  "Beyond coding, I am a continuous learner passionate about Data Structures and collaborative problem-solving, always eager to explore new tools in the microservices ecosystem."];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce App",
    description: "Built a scalable e-commerce platform using Spring Boot microservices and React with JWT-based authentication and product management features",
    tech: ["Java", "Spring Boot", "Microservices", "Data JPA", "JWT", "MySQL", "React js"],
    // link: "https://ramx.in",
    github: "https://github.com/VenuGopalPattem1/E-Commerce-Backend",
    // year: "2024",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/268674813/original/76b646398ff2f3c384c4a4a0cd87fe6f07620a1c/do-ui-ux-design-mobile-app-ui-design-or-web-ui-design.jpg"
    ,
  },
  {
    title: "URL Shortener",
    description: "A Spring Boot–based URL shortener that stores mappings in MySQL, uses Redis for fast redirection, and supports optional link expiry with basic analytics like click count and last access time.",
    tech: ["Java", "Spring Boot", "Data JPA", "Redis", "MySQL", "Postman"],
    // link: "#",
    github: "https://github.com/VenuGopalPattem1/URL_SHORTNER",
    // year: "2023",
    image: "https://techviral.net/wp-content/uploads/2018/05/URL-SHORTENER.png"
  },
  {
    title: "API RateLimiter",
    description: "A configurable Spring Boot + Redis distributed rate limiter with per-API, per-user, and per-IP throttling using Fixed Window or Token Bucket algorithms.",
    tech: ["Java", "Spring Boot", "Redis", "Maven", "Spring Web", "Postman"],
    // link: "#",
    github: "https://github.com/VenuGopalPattem1/ratelimiter",
    // year: "2023",
    image: "https://user-images.githubusercontent.com/23625821/132287806-04de0d48-0056-485e-b809-0e06ddec791d.png"
  },
  {
    title: "YouTube Clone",
    description: "A modern YouTube clone built with React, featuring seamless API integration, dynamic functionalities, and a sleek UI design.",
    tech: ["React", "Redux", "Axios", "Bootstrap", "YouTube API"],
    // link: "#",
    github: "https://github.com/VenuGopalPattem1/Youtube-React",
    // year: "2023",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/707/392/datas/original.png"
  },
  {
    title: "Insurance System",
    description: "Engineered modular insurance services with multithreaded PDF report generation and developed an admin module for plan management and eligibility processing.",
    tech: ["Java", "Spring Boot", "Microservices", "PDF Generation"],
    // link: "#",
    github: "https://github.com/VenuGopalPattem1/PolicyPal-Insurance-SpringBoot-Backend",
    // year: "2023",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/c2dfc9166216275.Y3JvcCwxNjE2LDEyNjQsMCww.jpg"
  },
  {
    title: "Expenses Tracker",
    description: "Developed a full-stack expense tracker using React and Spring Boot with JWT-based authentication and a responsive, user-friendly UI.",
    tech: ["Java", "Spring Boot", "Data JPA", "REST", "React js"],
    // link: "#",
    github: "https://github.com/VenuGopalPattem1/Smart-Expensive-Tracker",
    // year: "2023",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/c4c763210070635.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png"
  }

];

export const EXPERIENCE: Experience[] = [
  {
    company: "Brain O Vision",
    role: "Frontend Intern",
    period: "July 2023 – Sep 2023",
    description: "Developed reusable frontend components and integrated RESTful APIs using Axios, ensuring seamless data flow and application performance."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Jagans Institute Of Management And Computers",
    degree: "Master of Computer Applications",
    period: "2024 - 2026"
  },
  {
    institution: "Anam Sanjeeva Reddy Degree College",
    degree: "Bachelor of Computer Applications",
    period: "2021 - 2024"
  }
];

export const SKILLS = [
  "Java", "Spring Boot", "Microservices", "React.js", "HLD", "LLD", "Redux", " Spring Security", "Redis", "REST APIs", "MySQL", "Git", "Maven", "Postman", "ELK Stack"
];

export const SOCIALS: SocialLink[] = [
  { name: "Twitter", url: "https://x.com/Venu88506042", icon: Twitter },
  { name: "GitHub", url: "https://github.com/VenuGopalPattem1", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/venu-gopal-pattem-74576a286/", icon: Linkedin },
  { name: "LeetCode", url: "https://leetcode.com/u/venuv8605/", icon: Code2 },
  { name: "Email", url: "mailto:venuv8605@gmail.com", icon: Mail },
];

// export const AI_SYSTEM_INSTRUCTION = `
// You are an AI assistant for Ram's portfolio website. 
// You represent Ram, a Senior Frontend Engineer and UI/UX enthusiast.
// Your goal is to answer questions about Ram's skills, experience, and projects based on the following data:
// - Name: Ram
// - Role: Software Engineer & Designer
// - Skills: React, TypeScript, Tailwind CSS, Gemini API, Node.js, Design Systems.
// - Experience: Currently at a Stealth Startup (2023-Present), previously at Tech Solutions Inc (2021-2023).
// - Education: IIT (B.Tech CS).
// - Philosophy: Obsessed with pixel-perfect implementation, accessibility, and performance.

// Keep answers concise, professional, and slightly witty. 
// If asked about contact, direct them to the email: hello@ramx.in.
// Do not hallucinate projects not listed here.
// `;
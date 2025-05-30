import { images } from "./images";

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "" },
];

export const projects = [
  {
    id: "1",
    title: "Sunnah Store",
    description: "Online Store for halal businesses",
    category: "web",
    image: images.projects.halalJibika,
    technologies: ["Next.js", "Tailwind", "AuthJs"],
    liveUrl: "https://e-coomerce-project.vercel.app/",
    githubUrl: "https://github.com/MdAthikhasan/e-coomerce-project",
  },
  {
    id: "2",
    title: "Institutional Website",
    description: "Information and services for students",
    category: "web",
    image: images.projects.eLearning,
    technologies: ["React", "Bootstrap"],
    liveUrl: "https://bou-university-design.vercel.app/",
    githubUrl: "https://github.com/MdAthikhasan/bou-university-design",
  },
  {
    id: "3",
    title: "Bank Website",
    description: "Bank platform focused on Practicing purpuse.",
    category: "web",
    image: "https://i.ibb.co/JzFRZ9p/bank-website.jpg",
    technologies: ["React.js", "Tailwind CSS"],
    liveUrl: "https://bank-app-pearl.vercel.app/",
    githubUrl: "https://github.com/MdAthikhasan/Bank-app-",
  },
  {
    id: "4",
    title: "Task Management Todo app",
    description: "Application  for managing tasks and projects",
    category: "web",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToOdMXwSSkScnMIPwA6y1MOeNcL9-3tTbj9ac6mlTTae-6xdClLJiMsdtWCNe7dNlhvZg&usqp=CAU",
    technologies: ["React", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://task-management-jet.vercel.app/",
    githubUrl: "https://github.com/MdAthikhasan/Task-management",
  },
  {
    id: "5",
    title: "Personal Website",
    description: "personal portfolio website",
    category: "web",
    image:
      "https://market-resized.envatousercontent.com/previews/files/602725017/preview_01.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=f39831e1ef4e912898524370d5c44efb1d2bffb4a830e0890331523745f64680",
    technologies: ["React", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://mamu-seven.vercel.app/",
    githubUrl: "https://github.com/MdAthikhasan/mamu",
  },
];

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiDjango,
  SiDotnet,
  SiJest,
  SiGithubactions,
} from "react-icons/si";

// Define all skills first to use in both individual categories and the All tab
const programmingLanguages = [
  {
    name: "JavaScript",
    icon: FaJsSquare,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "C#",
    icon: FaCode, // Using a generic code icon instead of SiCsharp
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "PHP",
    icon: FaPhp,
    url: "https://www.php.net/",
  },
  {
    name: "Python",
    icon: FaPython,
    url: "https://www.python.org/",
  },
];

const frontendTechnologies = [
  {
    name: "HTML5",
    icon: FaHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "React",
    icon: FaReact,
    url: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    url: "https://nextjs.org/",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    url: "https://getbootstrap.com/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
  },
];

const backendTechnologies = [
  {
    name: "Node.js",
    icon: FaNodeJs,
    url: "https://nodejs.org/",
  },
  {
    name: "Express",
    icon: SiExpress,
    url: "https://expressjs.com/",
  },
  {
    name: "Drizzle ORM",
    icon: FaCode, // Using a generic code icon
    url: "https://orm.drizzle.team/",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    url: "https://dotnet.microsoft.com/",
  },
  {
    name: "ASP.NET",
    icon: SiDotnet,
    url: "https://dotnet.microsoft.com/apps/aspnet",
  },
  {
    name: "Entity Framework",
    icon: SiDotnet,
    url: "https://docs.microsoft.com/en-us/ef/",
  },
  {
    name: "Django",
    icon: SiDjango,
    url: "https://www.djangoproject.com/",
  },
];

const databases = [
  {
    name: "MySQL",
    icon: SiMysql,
    url: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    url: "https://www.postgresql.org/",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    url: "https://www.sqlite.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
  },
];

const toolsAndPlatforms = [
  {
    name: "Git",
    icon: FaGitAlt,
    url: "https://git-scm.com/",
  },
  {
    name: "Docker",
    icon: FaDocker,
    url: "https://www.docker.com/",
  },
  {
    name: "AWS",
    icon: FaAws,
    url: "https://aws.amazon.com/",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    url: "https://github.com/features/actions",
  },
  {
    name: "Jest",
    icon: SiJest,
    url: "https://jestjs.io/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/",
  },
];

// Skills categories with items
const skills = [
  {
    category: "All",
    items: [
      ...programmingLanguages,
      ...frontendTechnologies,
      ...backendTechnologies,
      ...databases,
      ...toolsAndPlatforms,
    ],
  },
  {
    category: "Programming Languages",
    items: programmingLanguages,
  },
  {
    category: "Frontend Technologies",
    items: frontendTechnologies,
  },
  {
    category: "Backend Technologies",
    items: backendTechnologies,
  },
  {
    category: "Databases",
    items: databases,
  },
  {
    category: "Tools & Platforms",
    items: toolsAndPlatforms,
  },
];

export default skills;

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaAws,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
        proficiency: 90,
        url: "https://reactjs.org/",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        proficiency: 85,
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        proficiency: 95,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        proficiency: 95,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        proficiency: 90,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        proficiency: 85,
        url: "https://tailwindcss.com/",
      },
      {
        name: "Redux",
        icon: SiRedux,
        proficiency: 80,
        url: "https://redux.js.org/",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        proficiency: 80,
        url: "https://nextjs.org/",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        proficiency: 85,
        url: "https://nodejs.org/",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        proficiency: 80,
        url: "https://www.mongodb.com/",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        proficiency: 75,
        url: "https://graphql.org/",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        proficiency: 80,
        url: "https://firebase.google.com/",
      },
      {
        name: "Python",
        icon: FaPython,
        proficiency: 70,
        url: "https://www.python.org/",
      },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        proficiency: 90,
        url: "https://git-scm.com/",
      },
      {
        name: "Docker",
        icon: FaDocker,
        proficiency: 75,
        url: "https://www.docker.com/",
      },
      {
        name: "AWS",
        icon: FaAws,
        proficiency: 70,
        url: "https://aws.amazon.com/",
      },
      {
        name: "Figma",
        icon: FaFigma,
        proficiency: 85,
        url: "https://www.figma.com/",
      },
    ],
  },
];

export default skills;

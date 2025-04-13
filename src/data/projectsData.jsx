import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaWordpress,
  FaAws,
  FaDocker,
  FaGithub,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaSass,
  FaVuejs,
  FaAngular,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiTypescript,
  SiMysql,
  SiPrisma,
  SiCss3,
  SiFirebase,
  SiExpo,
  SiTensorflow,
  SiAwslambda,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Beep",
    description:
      "Beep is a personal safety app for women and minorities offering AI safe routes, crime maps, location sharing, and instant alerts",
    coverImage: "/images/project1/cover.jpg",
    images: [
      "/images/project1/picture1.png",
      "/images/project1/picture2.png",
      "/images/project1/picture3.png",
      "/images/project1/picture4.png",
      "/images/project1/picture5.png",
    ],
    techIcons: [
      {
        icon: SiTypescript,
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
      },
      { icon: SiExpo, name: "Expo", url: "https://expo.dev/" },
      {
        icon: FaReact,
        name: "React Native",
        url: "https://reactnative.dev/",
      },
      {
        icon: SiFirebase,
        name: "Firebase",
        url: "https://firebase.google.com/",
      },
      {
        icon: FaPython,
        name: "Python",
        url: "https://www.python.org/",
      },
      {
        icon: SiTensorflow,
        name: "Tensorflow",
        url: "https://www.tensorflow.org/",
      },
      {
        icon: SiAwslambda,
        name: "AWS Lambda",
        url: "https://aws.amazon.com/pm/lambda/?trk=d87368f2-b0ac-4e30-804b-b10e2d25d291&sc_channel=ps&ef_id=CjwKCAjwwe2_BhBEEiwAM1I7sQBM5xhw9La8KTnfTaMnd6J1fEE9lRZXPM8AGxZ_NaCK_xj-7pnzEBoCYDUQAvD_BwE:G:s&s_kwcid=AL!4422!3!651612781100!e!!g!!aws%20lambda!19836398320!150095228874&gclid=CjwKCAjwwe2_BhBEEiwAM1I7sQBM5xhw9La8KTnfTaMnd6J1fEE9lRZXPM8AGxZ_NaCK_xj-7pnzEBoCYDUQAvD_BwE",
      },
      {
        icon: SiCss3,
        name: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://youtube.com/shorts/GoaUL_IReU8",
    motivation:
      "In many cities, women, people of color, and other under‑represented groups often feel uneasy or unsafe walking alone at night. Although several personal‑safety apps already exist, none of them combine crime data mapping with AI to suggest truly safer routes. Our goal is to build an app that fills this gap and gives vulnerable users more confidence to navigate.",
    objectives: [
      "Work inside an 8‑member cross‑functional team (4 developers, 4 designers).",
      "Learn mobile development from scratch with Expo—reading docs, self‑teaching, and balancing schoolwork.",
      "Explore AI / machine‑learning options and integrate them into the project.",
      "Present the finished product to non‑technical audiences.",
    ],
    targetMarket:
      "People who want extra personal security—especially women, people of color, and anyone from under‑represented communities who must navigate unfamiliar or higher‑risk areas.",
    features: [
      "AI Safe Route: Generates safe‑route with directions that avoid incident hotspots.",
      "Intelligent Crime Mapping: A live map that highlights recent incidents.",
      "Real‑Time Location Sharing: Trusted contacts can watch your trip until you arrive.",
      "Emergency Alerts: One‑tap SOS with a loud alarm.",
      "Surroundings Recording: Snap photos of anything suspicious without leaving the app.",
      "Safe Zones: Locate nearby open businesses or public spaces where you can step inside for help.",
    ],
    reflection:
      "This was my first mobile project, and our team started with zero mobile experience. After consulting a former instructor, we chose to build a fully native app instead of using a WebView wrapper because we wanted to deliver a smoother user experience. That decision forced us to dive deep into Expo, React Native, and unfamiliar mobile APIs, so every sprint became a crash course in new tools. At first we didn’t run Agile well: sometimes huge tasks went to one person, task descriptions were unclear, and deadlines slipped—stressful for everyone. Halfway through the semester we held a reset meeting. We elected a new product manager, broke every epic into smaller tasks, and reorganized our Trello workflow so designers and developers could sync daily. Once priorities were crystal‑clear, momentum returned: features were finished faster, morale climbed, and the team responded more quickly. The payoff came at the annual showcase—our safety app placed third out of ten teams. I learned two big lessons: first, product management and communication are as critical as code; and second, tackling hard tech is doable when you devote time to learn, split work smartly, and keep the feedback loop tight.",
    conclusion:
      "Building this safety app demonstrated the power of a well-coordinated team that communicates, plans, and adapts effectively. Facing real‑world safety challenges offered us a unique learning opportunity: we honed our technical skills, embraced cross‑disciplinary collaboration, and experienced the same trade‑offs professionals face with shifting scope, tight deadlines, and evolving user needs. By integrating live crime data with AI routing, we created a tool that truly enhances personal safety. The project significantly boosted our professional growth and reinforced the importance of hands‑on experience in a fast‑paced tech environment.",
  },
  {
    id: 2,
    title: "Local Harvest",
    description:
      "Local Harvest is an online marketplace that connects shoppers to nearby farmers for easy pre‑ordering of fresh, local produce",
    coverImage: "/images/project2/cover.jpg",
    images: [
      "/images/project2/picture1.png",
      "/images/project2/picture2.png",
      "/images/project2/picture3.png",
      "/images/project2/picture4.png",
    ],
    techIcons: [
      {
        icon: SiTypescript,
        name: "Typescript",
        url: "https://www.typescriptlang.org/",
      },
      { icon: FaNodeJs, name: "Node.js", url: "https://nodejs.org/" },
      { icon: SiExpress, name: "Express", url: "https://expressjs.com/" },
      { icon: SiPrisma, name: "Prisma", url: "https://www.prisma.io/" },
      { icon: SiMysql, name: "MySQL", url: "https://www.mysql.com/" },
      {
        icon: SiCss3,
        name: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
    githubUrl: "https://github.com/zipeng-liu/local-harvest-app",
    demoUrl: "https://local-harvest-app.onrender.com/",
    motivation:
      "In today’s world, everything is shifting towards digital—from ordering food to buying groceries, almost anything can be purchased online. Unlike large corporations with ample resources to launch their online stores, local farmers and market vendors often lack the tools and knowledge to sell their products online. Similarly, customers seeking fresh, locally sourced items face uncertain product availability, frequently visiting markets to discover their desired products are unavailable. This project aims to build an online marketplace that bridges the gap between buyers and sellers, empowering local businesses while providing consumers with reliable access to fresh, locally-grown goods.",
    objectives: [
      "Running an Agile project for the first time, including managing sprints, tasks, and iterative development.",
      "Translating designs provided by the design team into a fully functional and responsive web application.",
      "Collecting continuous user feedback and integrating it into development cycles to improve user experience.",
      "Practicing server-side rendering with EJS for efficient dynamic content generation and managing database operations using Prisma ORM in a scalable web application.",
    ],
    targetMarket:
      "This platform’s target audience is local farmers, small market vendors, and consumers who prefer purchasing fresh, locally grown products online for convenient in-person pickup.",
    features: [
      "Browse Markets and Products: Customers can explore market details and vendor profiles and view the range of products each vendor offers.",
      "Place Orders as a Customer: Browse products, add items to the cart, adjust quantities, and submit an order for in-person pickup.",
      "Manage Product Inventory: Vendors can add new products, update existing items, and easily manage details such as price, availability, and product descriptions.",
      "View Order History: Customers and vendors have access to detailed records of past orders, ensuring transparency and easy transaction tracking.",
    ],
    reflection:
      "I did well by building a clear foundation and organized architecture for the app. By setting up folders so each one handled a specific feature with its logic, the team could easily divide work and focus on separate features without running into many merge conflicts. However, one significant mistake we made was relying on the CSS export functionality directly from Figma, especially given the heavy frontend and backend workloads within tight time constraints. The results didn’t work well as Figma exported styles individually by ID, making it challenging and inefficient to manage using vanilla CSS. If I could go back, I would use Bootstrap to streamline styling and accelerate development significantly. Another important takeaway was prioritizing the features that matter most to the user, ensuring we deliver maximum value in a limited time. Additionally, I’ve learned the importance of proactively addressing technical constraints early in the project. Identifying and resolving potential development issues earlier could have saved us considerable time and effort.",
    conclusion:
      "This project was an excellent learning opportunity and a valuable team experience. It allowed me to build an app from scratch based on designs created by others. It also significantly grew my ability to conduct user surveys and perform effective user testing, helping me better understand user needs and preferences. Overall, the experience strengthened my skills in collaborative development, user-centric design, and agile project management.",
  },
  {
    id: 3,
    title: "High School Website Redesign",
    description:
      "A community-driven website for ocean cleanup initiatives and conservation projects",
    coverImage: "/images/project3/cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1559252722-fb8915a77b8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1618956900896-9e8097552a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    techIcons: [
      { icon: FaVuejs, name: "Vue.js", url: "https://vuejs.org/" },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
      },
      { icon: FaNodeJs, name: "Node.js", url: "https://nodejs.org/" },
      {
        icon: SiFirebase,
        name: "Firebase",
        url: "https://firebase.google.com/",
      },
      { icon: FaGithub, name: "GitHub", url: "https://github.com/" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    motivation:
      "I wanted to create a centralized platform where conservation enthusiasts could organize cleanup events and track their collective impact.",
    objectives:
      "Build a community-driven platform, implement real-time event coordination, and visualize global conservation efforts on an interactive map.",
    targetMarket:
      "Environmental NGOs, conservation volunteers, and coastal communities.",
    features: [
      "Interactive map of cleanup events and projects",
      "User profiles with impact statistics",
      "Resource library for conservation methods",
      "Event organization tools with volunteer management",
      "Before/after photo galleries of cleanup sites",
    ],
    reflection:
      "I did well by building a clear foundation and organized architecture for the app. By setting up folders so each one handled a specific feature with its logic, the team could easily divide work and focus on separate features without running into many merge conflicts. However, one significant mistake we made was relying on the CSS export functionality directly from Figma, especially given the heavy frontend and backend workloads within tight time constraints. The results didn’t work well as Figma exported styles individually by ID, making it challenging and inefficient to manage using vanilla CSS. If I could go back, I would use Bootstrap to streamline styling and accelerate development significantly. Another important takeaway was prioritizing the features that matter most to the user, ensuring we deliver maximum value in a limited time. Additionally, I’ve learned the importance of proactively addressing technical constraints early in the project. Identifying and resolving potential development issues earlier could have saved us considerable time and effort.",
    conclusion:
      "The platform has successfully connected volunteers with conservation projects worldwide, resulting in measurable impact on coastal ecosystems.",
  },
  {
    id: 4,
    title: "Oqua",
    description:
      "A responsive gallery website showcasing stunning underwater photography",
    coverImage: "/images/project4/cover.jpg",
    images: [
      "https://images.unsplash.com/photo-1550505095-8347b331b3f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    techIcons: [
      {
        icon: FaHtml5,
        name: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        icon: FaCss3,
        name: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        icon: FaJs,
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { icon: FaSass, name: "Sass", url: "https://sass-lang.com/" },
      { icon: FaWordpress, name: "WordPress", url: "https://wordpress.org/" },
      { icon: FaFigma, name: "Figma", url: "https://www.figma.com/" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    motivation:
      "I designed this portfolio to showcase the beauty of underwater environments through photography while demonstrating my design and front-end skills.",
    objectives:
      "Create a visually stunning gallery with optimized image loading, implement smooth transitions, and design an intuitive navigation system.",
    targetMarket:
      "Professional photographers, art directors, and nature enthusiasts.",
    features: [
      "Masonry gallery layout with lazy loading",
      "Image zoom and slideshow functionality",
      "Category filtering by marine environment",
      "Photographer bio and contact form",
      "Print shop integration for artwork purchase",
    ],
    conclusion:
      "This portfolio not only serves as a showcase for underwater photography but also demonstrates how performance optimization and aesthetic design can coexist in a web application.",
  },
];

export default projects;

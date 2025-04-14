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
  FaBootstrap,
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
  SiFramer,
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
      "A modern responsive redesign of the Burnaby North Secondary School website to improve usability and information accessibility",
    coverImage: "/images/project3/cover.jpg",
    images: [
      "/images/project3/picture1.png",
      "/images/project3/picture2.png",
      "/images/project3/picture3.png",
    ],
    techIcons: [
      { icon: FaReact, name: "React", url: "https://reactjs.org/" },
      {
        icon: FaJs,
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: FaBootstrap,
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
      },
    ],
    githubUrl: "https://github.com/zipeng-liu/bnss-redesign",
    demoUrl: "https://bnss-redesign.vercel.app/",
    motivation:
      "I wanted to create a more user-friendly website for Burnaby North Secondary School that would better serve students, parents, and staff by organizing information more intuitively and providing a responsive design for all devices.",
    objectives:
      "Implement a responsive layout using Bootstrap, create an intuitive navigation structure, improve content organization, and ensure accessibility standards were met for all users.",
    targetMarket:
      "Students, parents, teachers, staff, prospective students, and the broader Burnaby North Secondary School community.",
    features: [
      "Responsive design optimized for mobile, tablet, and desktop devices",
      "Interactive calendar for school events and important dates",
      "Searchable staff directory with contact information",
      "News and announcements section with filtering capabilities",
      "Resources section organized by department and student grade",
    ],
    reflection:
      "I successfully created a clean, organized architecture that made the codebase maintainable and extensible. By implementing component-based design with React, we were able to reuse UI elements across the site while maintaining consistency. Bootstrap significantly accelerated the development process by providing responsive design utilities out of the box. One challenge we faced was balancing the needs of multiple stakeholder groups (students, parents, and staff) who each prioritized different information. If I were to do it again, I would conduct more user testing earlier in the process to better validate our information architecture assumptions. Another lesson learned was the importance of setting up a proper content management workflow for school staff who needed to update the site regularly.",
    conclusion:
      "The redesigned website has significantly improved the school's digital presence, making information more accessible to all stakeholders while providing a modern, responsive experience that better represents the school's values and community.",
  },
  {
    id: 4,
    title: "Oqua",
    description:
      "A frontend water intake tracking application with animated visualization and personalized recommendations",
    coverImage: "/images/project4/cover.jpg",
    images: [
      "/images/project4/picture1.png",
      "/images/project4/picture2.png",
      "/images/project4/picture3.png",
    ],
    techIcons: [
      { icon: FaReact, name: "React", url: "https://reactjs.org/" },
      {
        icon: FaJs,
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: SiFramer,
        name: "Framer Motion",
        url: "https://www.framer.com/motion/",
      },
    ],
    githubUrl: "https://github.com/zipeng-liu/oqua",
    demoUrl: "https://oqua-water-tracker.netlify.app/",
    motivation:
      "I wanted to create an engaging water tracking app with fluid animations that would make hydration tracking more enjoyable, while also experimenting with Framer Motion for the first time.",
    objectives:
      "Build a frontend web application that could later be developed into a mobile app, implement smooth animations with Framer Motion, and create an intuitive interface for tracking daily water intake.",
    targetMarket:
      "Health-conscious individuals who want a simple but visually engaging way to track their water consumption habits.",
    features: [
      "Initial quiz to calculate recommended daily water intake",
      "Animated water droplet showing daily progress using Framer Motion",
      "Preset water amounts for quick logging with custom input option",
      "Local storage integration to persist user data between sessions",
      "Responsive design foundation for future mobile app development",
    ],
    reflection:
      "This project marked my first experience with Framer Motion, which proved to be an excellent tool for creating fluid, physics-based animations for the water droplet visualization. The learning curve was steeper than expected, but the resulting animations added significant value to the user experience. I successfully implemented the calculation quiz and preset logging system, though managing state across the application required careful planning. If I were to rebuild this project, I would structure the code more carefully from the beginning with the mobile app transition in mind. As this was a frontend-only implementation, the next phase would be connecting it to a backend database and developing a native mobile version to provide a more complete user experience with notifications and long-term data persistence.",
    conclusion:
      "Hydro Track successfully demonstrates that even a frontend-only application can provide meaningful value when designed thoughtfully. The animated water visualization created with Framer Motion proved particularly effective at making hydration tracking more engaging, and the project has established a solid foundation for future development into a full-featured mobile application.",
  },
];

export default projects;

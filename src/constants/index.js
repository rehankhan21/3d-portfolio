import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextSpotify,
  validity,
  changemachine,
  perscholas,
  nextmessenger,
  nextcarshow,
  miniNetflix,
  dennis,
  cynthia,
  huntercollege,
  insightglobal,
  ibis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "Node.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "Ibis Public Sector",
    icon: ibis,
    iconBg: "#383E56",
    date: "March 2024 - Current",
    points: [
      "Developed internal software packages that used Python bots to help automate the workflow process, this helped decrease workload and increase productivity across multiple teams.",
      "Developed an internal Golang CLI tool that helped deploy an EKS cluster from scratch with all the configurations and overlays needed to develop with the Big-Bang product.",
      "Developed an application in Nextjs, React, Typescript, Nodejs, Amazon RDS, and PostgreSQL, that helped sync the external and internal repositories of Big-Bang. So that the external Big-Bang community members would be able to contribute and interact with the Big-Bang product and the Big-Bang mission.",
      "Led multiple releases as a Release Engineer, ensuring deployments were fully functional, and passed thorough review processes.",
      "Deployed applications to AWS EKS using a combination of Terraform, Packer, Git, Kustomize, Helm, Artifactory, and Jenkins into multiple environments. Deployment used multiple AWS services including ECR, CloudWatch, EC2, Route53, and Platform One’s Big Bang (Istio, Fluent Bit, Kyverno) in Cloud One’s environments.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Insight Global",
    icon: insightglobal,
    iconBg: "#E6DEDD",
    date: "July 2023 - March 2024",
    points: [
      "Designed and developed high-performance software applications using React, Python, FastAPI, JavaScript, TypeScript, NextJS, SQL, and AWS.",
      "Collaborated extensively with business stakeholders to develop, design, and architect innovative solutions, ensuring alignment with business goals and user requirements.",
      "Engaged in regular meetings with business teams to demonstrate continuous updates, showcase new features, and highlight improvements to applications, fostering a dynamic and responsive development environment.",
      "Spearheaded the design and development of RESTful APIs and Websockets to enhance client-side application functionality, while constructing scalable and secure backend systems to ensure robust performance.",
      "Actively engaged in code review processes, offering constructive feedback to peers, contributing to the continuous improvement of development practices and code quality.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Validity",
    icon: validity,
    iconBg: "#383E56",
    date: "July 2022 - Feb 2023",
    points: [
      "Designed and developed high-performance software applications using React, RTL, JavaScript, TypeScript, NodeJS, NextJS, SQL, and AWS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Designed and developed RESTful APIs to support client-side applications and built scalable and secure backend systems.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Change Machine",
    icon: changemachine,
    iconBg: "#E6DEDD",
    date: "July 2021 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrated Machine Learning Algorithm for a recommendation engine and chatbot using Amazon Lex and other third party APIs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Per Scholas",
    icon: perscholas,
    iconBg: "#383E56",
    date: "April 2021 - July 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "BS in Computer Science",
    company_name: "CUNY Hunter College",
    icon: huntercollege,
    iconBg: "#E6DEDD",
    date: "June 2016 - June 2020",
    points: [
      "Bachelors in Computer Science",
      "Minor in Japanese Language",
      "Joined CUNY hackatons and developed applications in a competitive team enviroment",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We faced many roadblocks but Rehan's unique way of approaching different solutions got us past them.",
    name: "Dennis",
    designation: "Senior Salesforce Developer",
    company: "Cognizant",
    image: dennis,
    linkdin: "https://www.linkedin.com/in/dennis-vargas-0a0185153/",
  },
  {
    testimonial:
      "Rehan remains on the cutting edge of industry trends, ensuring his work is not only functional but also in line with contemporary practices.",
    name: "Cynthia",
    designation: "Resident Physician",
    company: "Psychiatry PGY-2",
    image: cynthia,
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Next Spotify App",
    description:
      "Web-based application that allows you to upload, like and listen to your faviorte music. Has user authentication and many of the same features as spotify but created using Next.js 13",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "gray-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nextSpotify,
    source_code_link: "https://github.com/rehankhan21/next-spotify",
    project_site: "https://next-spotify-eosin.vercel.app/",
  },
  {
    name: "Next Messenger App",
    description:
      "Web application that enables users to messenge each other in real-time. Has all the same features as facebooks messenger app but created using Next.js 13.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "gray-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nextmessenger,
    source_code_link: "https://github.com/rehankhan21/next-messenger",
    project_site: "https://next-messenger-two.vercel.app/",
  },
  {
    name: "Car Show App",
    description:
      "A car showcase app, which allows users to search and filter through their favorite cars and see all of its features.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nextcarshow,
    source_code_link: "https://github.com/rehankhan21/Car-Show-App",
    project_site: "https://car-show-app.vercel.app/",
  },
  {
    name: "Mini Netflix",
    description:
      "A site that simulates netflix homepage",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: miniNetflix,
    source_code_link: "https://github.com/rehankhan21/mini-netflix",
    project_site: "https://mini-netflix-ebon.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

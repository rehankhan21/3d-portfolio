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
  dennis,
  huntercollege,
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
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Validity",
    icon: validity,
    iconBg: "#383E56",
    date: "July 2022 - July 2023",
    points: [
      "Designed and developed high-performance software applications using React, RTL, JavaScript, TypeScript, NodeJS, NextJS, SQL, and AWS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
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
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };

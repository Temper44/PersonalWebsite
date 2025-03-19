import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { ReactElement } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface SocialMediaItem {
  id: number;
  name: string;
  href: string;
  icon: ReactElement;
}

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/ebnermathias/",
    icon: React.createElement(FaInstagram),
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: React.createElement(FaLinkedin),
  },
  {
    id: 3,
    name: "GitHub",
    href: "https://github.com/Temper44",
    icon: React.createElement(FaGithub),
  },
  {
    id: 4,
    name: "Email",
    href: "mailto:mathiasebner2000@gmail.com",
    icon: React.createElement(IoMdMail),
  },
  {
    id: 5,
    name: "Imprint",
    href: "/imprint",
    icon: React.createElement(IoMdInformationCircleOutline),
  },
];

interface NavItem {
  name: string;
  link: string;
}

export const navItems: NavItem[] = [
  { name: "Home", link: "./" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Photos", link: "/photos" },
  { name: "Posters", link: "/posters" },
  { name: "Blog", link: "/blog" },
  { name: "Models", link: "/models" },
];

//extended version of navItems with imprint
export const navItemsFull: NavItem[] = [
  ...navItems,
  { name: "Imprint", link: "/imprint" },
];

export const sectionLinks = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const words: string[] = [
  "design",
  "code",
  "photograph",
  "model",
  "animate",
  "drink coffee",
];

export const skills: string[] = [
  "NextJS",
  "React",
  "TypeScript",
  "CMS",
  "Component Libraries",
  "SEO",
  "a11y",
  "Web Animations",
  "Relational Databases",
  "Ruby on Rails",
  "PHP",
  "C#",
  "BaaS",
  "Git",
  "Docker",
  "APIs",
  "Adobe Suite",
  "Figma",
];

export const projects = [
  {
    name: "TeamConnect",
    slug: "TeamConnect",
    date: "2024",
    role: "Design, Concept and Development",
    team: "Mathias Ebner, Hannes Beinhundner",
    technologies: [
      "NextJS",
      "TypeScript",
      "Supabase",
      "Prisma",
      "NextAuth",
      "MaterialUI",
    ],
    colors: ["#FFD700", "#FF8C00"],
    detailsPageLink: `/portfolio/TeamConnect`,
    nextProjectLink: `/portfolio/GroupGo`,
    liveLink: "https://team-connect.app/",
    subheading: "Easy Team Building for Digital Projects",
    descriptionShort:
      "A web solution for efficient team formation and collaboration in interdisciplinary project environments. Overcome the challenges of team building and discover a new level of efficiency and collaboration. Users can create profiles showcasing their skills, interests, and past projects, join existing teams, or initiate their own.",
    descriptionLong:
      "A web solution for efficient team formation and collaboration in interdisciplinary project environments. Overcome the challenges of team building and discover a new level of efficiency and collaboration. Users can create detailed profiles highlighting their skills, interests, and past projects, enabling them to connect with like-minded individuals. Whether joining existing teams or initiating their own projects, users can collaborate effectively, streamline workflows, and enhance productivity through a user-friendly and engaging experience.",
    descriptionFull: "",
    imgPreview: { src: "/img/slider/_MG_9457.jpg", alt: "TeamConnect" },
    imgScroll: { src: "/img/gallery/1.jpg", alt: "TeamConnect" },
    imgFullScreen: [
      {
        src: "/img/gallery/1.jpg",
        alt: "TeamConnect",
        title: "Homepage",
      },
      {
        src: "/img/gallery/2.jpg",
        alt: "TeamConnect2",
        title: "Homepage2",
      },
    ],
  },
  {
    name: "GroupGo",
    slug: "GroupGo",
    date: "2023",
    role: "Design, Concept and Development",
    team: "Mathias Ebner, Christoph Tupi",
    technologies: ["React", "Firebase", "MaterialUI"],
    colors: ["#FFD700", "#FF8C00"],
    detailsPageLink: `/portfolio/GroupGo`,
    nextProjectLink: `/portfolio/GameHub`,
    liveLink: "https://groupgo-44f2a.web.app/",
    subheading: "Built to make your trip planning easier",
    descriptionShort:
      "GroupGo is an application designed to streamline and manage the planning process of group trips. You can finally have a comprehensive overview of the planning process and ensure that everyone is on the same page. Effortlessly plan a trip, invite your friends, and delegate tasks to ensure everything is covered.",
    descriptionLong: "",
    descriptionFull: "",
    imgPreview: { src: "/img/gallery/1.jpg", alt: "GroupGo" },
    imgScroll: { src: "/img/gallery/1.jpg", alt: "GroupGo" },
    imgFullScreen: [
      {
        src: "/img/gallery/1.jpg",
        alt: "GroupGo",
        title: "Homepage",
      },
    ],
  },
  {
    name: "GameHub",
    slug: "GameHub",
    date: "2023",
    role: "Design, Concept and Development",
    team: "Mathias Ebner, David Grois, Alexander Buchner",
    technologies: ["Ruby on Rails", "Firebase", "MaterialUI"],
    colors: ["#FFD700", "#FF8C00"],
    detailsPageLink: `/portfolio/GameHub`,
    nextProjectLink: `/portfolio/TeamConnect`,
    liveLink: "https://groupgo-44f2a.web.app/",
    subheading: "Built to make your trip planning easier",
    descriptionShort:
      "GroupGo is an application designed to streamline and manage the planning process of group trips. You can finally have a comprehensive overview of the planning process and ensure that everyone is on the same page. Effortlessly plan a trip, invite your friends, and delegate tasks to ensure everything is covered.",
    descriptionLong: "",
    descriptionFull: "",
    imgPreview: { src: "/img/gallery/1.jpg", alt: "GroupGo" },
    imgScroll: { src: "/img/gallery/1.jpg", alt: "GroupGo" },
    imgFullScreen: [
      {
        src: "/img/gallery/1.jpg",
        alt: "GroupGo",
        title: "Homepage",
      },
    ],
  },
];

export const products = [
  {
    title: "Rote Donau Nuss",
    link: "https://rotedonaunuss.com",
    thumbnail: "/img/hero/rotedonaunuss.png",
  },
  {
    title: "City Information",
    link: "",
    thumbnail: "/img/hero/cityInformation.png",
  },
  {
    title: "Connective",
    link: "https://connective-web.vercel.app/",
    thumbnail: "/img/hero/connective.jpg",
  },
  {
    title: "This Is Trance",
    link: "",
    thumbnail: "/img/hero/thisIsTrance.jpg",
  },
  {
    title: "IPhone",
    link: "",
    thumbnail: "/img/hero/iPhone.jpg",
  },

  {
    title: "Zentry",
    link: "",
    thumbnail: "/img/hero/zentry.jpg",
  },
  {
    title: "TeamConnect Homepage",
    link: "https://teamconnect-home.vercel.app/",
    thumbnail: "/img/hero/teamconnectHome.png",
  },
  {
    title: "Hilink",
    link: "",
    thumbnail: "/img/hero/travel.jpg",
  },
  {
    title: "Ben's backery",
    link: "",
    thumbnail: "/img/hero/bakery.png",
  },
  {
    title: "Manage",
    link: "",
    thumbnail: "/img/hero/product.png",
  },

  {
    title: "Nike",
    link: "",
    thumbnail: "/img/hero/nike.jpg",
  },
  {
    title: "Portfolio",
    link: "",
    thumbnail: "/img/hero/portfolio.png",
  },
];

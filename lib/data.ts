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
  { name: "Home", link: "/" },
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
    colors: ["#1C1C1C", "#6F2931", "#0057B2", "#007DFF"],
    colorsGradient: ["#6F2931", "#007DFF"],
    detailsPageLink: `/portfolio/TeamConnect`,
    nextProjectLink: `/portfolio/GroupGo`,
    liveLink: "https://team-connect.app/",
    subheading: "Easy Team Building for Digital Projects",
    descriptionShort:
      "A web solution for efficient team formation and collaboration in interdisciplinary project environments. Overcome the challenges of team building and discover a new level of efficiency and collaboration. Users can create profiles showcasing their skills, interests, and past projects, join existing teams, or initiate their own.",
    descriptionLong:
      "A web solution for efficient team formation and collaboration in interdisciplinary project environments. Overcome the challenges of team building and discover a new level of efficiency and collaboration. Users can create detailed profiles highlighting their skills, interests, and past projects, enabling them to connect with like-minded individuals. Whether joining existing teams or initiating their own projects, users can collaborate effectively, streamline workflows, and enhance productivity through a user-friendly and engaging experience.",
    descriptionFull: "",
    imgPreview: {
      src: "/img/projects/teamConnect/preview.png",
      alt: "TeamConnect Overview",
    },
    imgScroll: {
      src: "/img/projects/teamConnect/desktopScreen.png",
      alt: "TeamConnect Desktop",
    },
    imgFullScreen: [
      {
        src: "/img/projects/teamConnect/mobile.png",
        alt: "TeamConnect Mobile View",
        title: "Mobile View",
      },
      {
        src: "/img/projects/teamConnect/login.png",
        alt: "TeamConnect Login",
        title: "Login",
      },
      {
        src: "/img/projects/teamConnect/overview.png",
        alt: "TeamConnect Overview",
        title: "Home",
      },
      {
        src: "/img/projects/teamConnect/viewAllProjects.png",
        alt: "TeamConnect Overview",
        title: "View All Projects",
      },
      {
        src: "/img/projects/teamConnect/eventSettings.png",
        alt: "TeamConnect Event Settings",
        title: "Event Settings",
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
    colors: ["#2B2B2B", "#FFA62B", "#1687E9"],
    colorsGradient: ["#FFA62B", "#1687E9"],
    detailsPageLink: `/portfolio/GroupGo`,
    nextProjectLink: `/portfolio/GameHub`,
    liveLink: "https://groupgo-44f2a.web.app/",
    subheading: "Built to make your trip planning easier",
    descriptionShort:
      "GroupGo is an application designed to streamline and manage the planning process of group trips. You can finally have a comprehensive overview of the planning process and ensure that everyone is on the same page. Effortlessly plan a trip, invite your friends, and delegate tasks to ensure everything is covered.",
    descriptionLong: "",
    descriptionFull: "",
    imgPreview: {
      src: "/img/projects/groupGo/preview.png",
      alt: "GroupGo Overview",
    },
    imgScroll: {
      src: "/img/projects/groupGo/desktopScreen.png",
      alt: "GroupGo Desktop",
    },
    imgFullScreen: [
      {
        src: "/img/projects/groupGo/mobile.png",
        alt: "GroupGo Mobile View",
        title: "Mobile View",
      },
      {
        src: "/img/projects/groupGo/login.png",
        alt: "GroupGo Login",
        title: "Login",
      },
      {
        src: "/img/projects/groupGo/start.png",
        alt: "GroupGo Start",
        title: "Start",
      },
      {
        src: "/img/projects/groupGo/yourTrips.png",
        alt: "GroupGo Your Trips",
        title: "Your Trips",
      },
      {
        src: "/img/projects/groupGo/tripOverview.png",
        alt: "GroupGo Trip Overview",
        title: "Trip Overview",
      },

      {
        src: "/img/projects/groupGo/updateTrip.png",
        alt: "GroupGo Update Trip",
        title: "Update Trip",
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
    colors: ["#c84d5d", "#090713", "#0F0C20"],
    colorsGradient: ["#c84d5d", "#0F0C20"],

    detailsPageLink: `/portfolio/GameHub`,
    nextProjectLink: `/portfolio/CampEvent`,
    liveLink: "https://gamehub.projects.multimediatechnology.at/",
    subheading: "Built to make your trip planning easier",
    descriptionShort:
      "GroupGo is an application designed to streamline and manage the planning process of group trips. You can finally have a comprehensive overview of the planning process and ensure that everyone is on the same page. Effortlessly plan a trip, invite your friends, and delegate tasks to ensure everything is covered.",
    descriptionLong: "",
    descriptionFull: "",
    imgPreview: {
      src: "/img/projects/gameHub/preview.png",
      alt: "GameHub Overview",
    },
    imgScroll: {
      src: "/img/projects/gameHub/desktopScreen.png",
      alt: "GameHub Desktop",
    },
    imgFullScreen: [
      {
        src: "/img/projects/gameHub/mobile.png",
        alt: "GameHub Mobile View",
        title: "Mobile View",
      },
      {
        src: "/img/projects/gameHub/addingGame.png",
        alt: "GameHub Adding Game",
        title: "Adding Game",
      },
      {
        src: "/img/projects/gameHub/creatingGameParty.png",
        alt: "GameHub Creating Game Party",
        title: "Creating Game Party",
      },
      {
        src: "/img/projects/gameHub/gameParty.png",
        alt: "GameHub Game Party",
        title: "Game Party",
      },
      {
        src: "/img/projects/gameHub/playingSection.png",
        alt: "GameHub Playing Section",
        title: "Playing Section",
      },
      {
        src: "/img/projects/gameHub/ratingGame.png",
        alt: "GameHub Rating Game",
        title: "Rating Game",
      },
      {
        src: "/img/projects/gameHub/searching.png",
        alt: "GameHub Searching ",
        title: "Searching",
      },
    ],
  },
  {
    name: "CampEvent",
    slug: "CampEvent",
    date: "2022",
    role: "Design, Concept and Development",
    team: "Mathias Ebner",
    technologies: ["PHP", "Bootstrap"],
    colors: ["#212529", "#208AB4", "#ECC02D"],
    colorsGradient: ["#212529", "#ECC02D"],
    detailsPageLink: `/portfolio/CampEvent`,
    nextProjectLink: `/portfolio/TeamConnect`,
    liveLink: "https://users.multimediatechnology.at/~fhs47758/mmp1/",
    subheading: "...",
    descriptionShort: "...",
    descriptionLong: "...",
    descriptionFull: "",
    imgPreview: {
      src: "/img/projects/campEvent/preview.png",
      alt: "CampEvent Overview",
    },
    imgScroll: {
      src: "/img/projects/campEvent/desktopScreen.png",
      alt: "CampEvent Desktop",
    },
    imgFullScreen: [
      {
        src: "/img/projects/campEvent/mobile.png",
        alt: "CampEvent Mobile View",
        title: "Mobile View",
      },
      {
        src: "/img/projects/campEvent/login.png",
        alt: "CampEvent Login",
        title: "Login",
      },
      {
        src: "/img/projects/campEvent/overview_dark.png",
        alt: "CampEvent Home",
        title: "Home",
      },
      {
        src: "/img/projects/campEvent/createEvent.png",
        alt: "CampEvent Create Event",
        title: "Create Event",
      },
      {
        src: "/img/projects/campEvent/weather.png",
        alt: "CampEvent Weather",
        title: "Weather",
      },
      {
        src: "/img/projects/campEvent/accountSettings.png",
        alt: "CampEvent Account Settings",
        title: "Account Settings",
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

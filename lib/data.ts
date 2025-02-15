import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { ReactElement } from "react";

// Define the type for social media items
interface SocialMediaItem {
  id: number;
  name: string;
  href: string;
  icon: ReactElement;
}

// Define the social media array
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
];

// Define the type for navigation items
interface NavItem {
  name: string;
  link: string;
}

// Define the navigation items array
export const navItems: NavItem[] = [
  { name: "Home", link: "./" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blog", link: "/blog" },
  { name: "Photos", link: "/photos" },
  { name: "Posters", link: "/posters" },
  { name: "3D-Models", link: "/models" },
];

// Define the words array
export const words: string[] = [
  "design",
  "code",
  "photograph",
  "model",
  "animate",
  "drink coffee",
];

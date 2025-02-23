import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { ReactElement } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

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
  {
    id: 5,
    name: "Imprint",
    href: "/imprint",
    icon: React.createElement(IoMdInformationCircleOutline),
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

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

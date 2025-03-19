"use client";

import React from "react";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";
import MobileMenu from "@/app/components/MobileMenu";
import CustomCursor from "@/app/components/CustomCursor";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import { useBetterMediaQuery } from "@/lib/hooks";
import ThemeSwitch from "./ThemeSwitch";

const PageUtilities = ({
  hide = false,
  menuFullPage = true,
  menuDisplayHome = true,
}: {
  hide?: boolean;
  menuFullPage?: boolean;
  menuDisplayHome?: boolean;
}) => {
  const isMobile = useBetterMediaQuery("(max-width: 768px)");

  return (
    <>
      <ThemeSwitch />

      {isMobile && <ScrollProgressBar />}
      <MobileMenu
        menuFullPage={menuFullPage}
        menuDisplayHome={menuDisplayHome}
      />
      <CustomCursor />
      {!hide && <ScrollToTopButton />}
    </>
  );
};

export default PageUtilities;

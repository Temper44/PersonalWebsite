"use client";

import React from "react";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";
import MobileMenu from "@/app/components/MobileMenu";
import CustomCursor from "@/app/components/CustomCursor";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import { useMediaQuery } from "react-responsive";

const PageUtilities = ({
  hide = false,
  menuFullPage = true,
  menuDisplayHome = true,
}: {
  hide?: boolean;
  menuFullPage?: boolean;
  menuDisplayHome?: boolean;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
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

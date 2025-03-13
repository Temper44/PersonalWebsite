"use client";

import React from "react";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";
import MobileMenu from "@/app/components/MobileMenu";
import CustomCursor from "@/app/components/CustomCursor";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import { useMediaQuery } from "react-responsive";

const PageUtilities = ({ hide = false }: { hide?: boolean }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isMobile && <ScrollProgressBar />} {/* isMobile &&  */}
      <MobileMenu isFullPage={true} />
      <CustomCursor />
      {!hide && <ScrollToTopButton />}
    </>
  );
};

export default PageUtilities;

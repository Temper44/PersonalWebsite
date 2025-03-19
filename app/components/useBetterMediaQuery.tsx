"use client";

import { useEffect, useState } from "react";

export default function useBetterMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents running on the server

    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(mediaQueryList.matches);

    listener(); // Check initial value
    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [mediaQueryString]);

  return matches;
}

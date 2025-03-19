import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../app/components/context/active-section-context";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.13) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName]);

  return { ref };
}

export function useBetterMediaQuery(mediaQueryString: string) {
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

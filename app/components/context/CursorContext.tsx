"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type CursorContextType = {
  isCursorHovered: boolean;
  setIsCursorHovered: Dispatch<SetStateAction<boolean>>;
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
};

const CursorContext = createContext<CursorContextType | null>(null);

type CursorContextProviderProps = {
  children: React.ReactNode;
};

export const CursorProvider = ({ children }: CursorContextProviderProps) => {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <CursorContext.Provider
      value={{ isCursorHovered, setIsCursorHovered, position, setPosition }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === null) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed !left-1/2 top-5 z-50 w-max !-translate-x-1/2 transform rounded-lg p-3 text-center text-white shadow-lg transition-all sm:max-w-xs ${type === "success" ? "border-green-500 bg-green-600" : "border-red-500 bg-red-600"} `}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
}

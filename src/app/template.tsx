"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -20, opacity: 0, scale: 0.95 }}
      transition={{ 
        ease: "easeInOut", 
        duration: 0.75,
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 10
        }
      }}
    >
      {children}
    </motion.div>
  );

  // return (
  //   <div
  //   >
  //     {children}
  //   </div>
  // );
}

"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });

export default function Program() {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = sessionStorage.getItem('guestName');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const typingEffect = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.05 }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center text-onyx">
      {name && (
        <h2 className={`${pangaia.className} text-3xl mt-4`}>
          Thank you, {typingEffect(name)}!
        </h2>
      )}
    </div>
  );
}
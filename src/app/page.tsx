"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

import { translations } from "./components/translations";
import Hero from "./components/Hero";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Backsplash from "./components/Backsplash";
import CountDownTimer from "./components/Footer/CountDownTimer";
import { Button } from "@/components/ui/button";

const seasonLight = localFont({
  src: "../../public/TheSeasonsLight.ttf",
});
const seasonBold = localFont({
  src: "../../public/TheSeasonsRegular.ttf",
});
const altaCaption = localFont({ src: "../../public/Alta_caption.otf" });

const script = localFont({ src: "../../public/script.ttf" });

const pinyon = localFont({ src: "../../public/PinyonScript-Regular.ttf" });

const pangaia = localFont({ src: "../../public/PPPangaia-Medium.ttf" });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const nameVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const typingVariants = {
    hidden: { width: 0 },
    visible: (custom: any) => ({
      width: custom.width,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: custom.delay,
      },
    }),
  };

  const handleClick = () => {
    router.push(`/rsvp`);
  };

  return (
    <div className="flex flex-col justify-center items-center text-onyx gap-6">
      <div className="text-center">
        <p className={`${pinyon.className} font-light text-xl`}>
          You are cordially invited to our
        </p>
        <h1 className={`${pangaia.className} font-semibold text-7xl uppercase`}>
          Wedding
        </h1>
      </div>
      <div className="relative">
        <img src="bg.png" alt="Alvi Prity" className="w-[400px] h-[400px]" />
        <div className="absolute inset-0 flex flex-row justify-center items-center text-white mt-56">
          <motion.p
            custom={{ width: "100px", delay: 1 }}
            initial="hidden"
            animate="visible"
            variants={typingVariants}
            className={`${pinyon.className} text-5xl overflow-hidden whitespace-nowrap  border-white`}
          >
            Alvi&
          </motion.p>
          <motion.p
            custom={{ width: "100px", delay: 2 }}
            initial="hidden"
            animate="visible"
            variants={typingVariants}
            className={`${pinyon.className} text-5xl overflow-hidden whitespace-nowrap border-white`}
          >
            Prity
          </motion.p>
        </div>
      </div>
      <div className="text-center flex flex-col uppercase">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={nameVariants}
          className={`${pangaia.className}`}
        >
          Sunday, September 8th 2024
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={nameVariants}
          className={`${pangaia.className}`}
        >
          Astoria World Manor
        </motion.p>
        <Button className={`${altaCaption.className} text-lg mt-4`} onClick={handleClick}>
          RSVP
        </Button>
      </div>

      <div>
        <CountDownTimer />
      </div>
    </div>
  );
}

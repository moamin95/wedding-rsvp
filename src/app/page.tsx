"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const altaCaption = localFont({ src: "../../public/Alta_caption.otf" });
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

  const weddingVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const handleClick = () => {
    router.push(`/rsvp`);
  };

  return (
    <div className="flex flex-col justify-center items-center text-onyx gap-4">
      <div className="text-center">
        <p className={`${pinyon.className} font-light text-2xl`}>
          You are cordially invited to our
        </p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={weddingVariants}
          className={`${pangaia.className} font-semibold text-7xl uppercase`}
        >
          Wedding
        </motion.h1>
      </div>
      <div className="relative">
        <img src="bg.png" alt="Alvi Prity" className="w-[400px] h-[400px]" />
        {/* <div className="absolute inset-0 flex flex-row justify-center items-center text-white mt-56">
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
        </div> */}
      </div>
      <div className="text-center flex flex-col uppercase justify-center items-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={nameVariants}
          className={`${pangaia.className} text-xl`}
        >
          2:00 PM, September 8th 2024
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={nameVariants}
          className={`${pangaia.className} flex gap-2`}
        >
          Astoria World Manor
          <a
            className=""
            href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBggEEEUYOTIHCAUQABiABKgCALACAA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KXFuk3dGX8KJMT34jAVc8E3C&daddr=25-22+Astoria+Blvd,+Queens,+NY+11102"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>
          </a>
        </motion.p>
        <Button
          className={`${altaCaption.className} text-lg mt-6 w-full`}
          onClick={handleClick}
        >
          RSVP
        </Button>
      </div>
    </div>
  );
}

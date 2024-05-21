"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CountDownTimer from "./CountDownTimer";
import localFont from "next/font/local";

import { translations } from "../translations";

const pangaia = localFont({ src: "../../../../public/PPPangaia-Medium.ttf" });
const seasonsLight = localFont({
  src: "../../../../public/TheSeasonsLight.ttf",
});

export default function Footer() {
  const container = useRef();
  const paths = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);

  return (
    <div ref={container}>
      <svg className="w-full mb-20" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className={`text-[7px] uppercase ${pangaia.className}`}
          style={{ fill: "red" }}
        >
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => (paths.current[i] = ref)}
                startOffset={i * 40 + "%"}
                href="#curve"
              >
                {translations.footer.path}
              </textPath>
            );
          })}
        </text>
      </svg>
      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
}

const Logos = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  return (
    <div className="h-[100px] bg-black overflow-hidden">
      <motion.div
        style={{ y }}
        className={` ${seasonsLight.className} 
        tracking-wide uppercase text-[12px] text-left
        h-full bg-black flex flex-col justify-center px-10 text-white`}
      >
        <p>Astoria World Manor</p>
        <p>Sunday, September 8th at 2 PM</p>
      </motion.div>
    </div>
  );
};

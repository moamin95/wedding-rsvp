"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { translations } from "./components/translations";
import Hero from "./components/Hero";

import Lenis from "lenis";
import Backsplash from "./components/Backsplash";
import CountDownTimer from "./components/Footer/CountDownTimer";

const seasonLight = localFont({
  src: "../../public/TheSeasonsLight.ttf",
});
const seasonBold = localFont({
  src: "../../public/TheSeasonsRegular.ttf",
});
const altaCaption = localFont({ src: "../../public/Alta_caption.otf" });

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-screen text-center flex flex-col justify-center items-center">
      <Hero/>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero/Hero";

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
    <>
      <div className="h-[100vh]">
        <Hero />
      </div>
    </>
  );
}

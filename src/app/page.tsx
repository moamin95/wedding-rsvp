'use client';

import Hero from "./components/Hero/Hero";
import RsvpButton from "./components/RsvpButton/RsvpButton";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Hero />
      </div>
    </>
  );
}

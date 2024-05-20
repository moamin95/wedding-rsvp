"use client";

import localFont from "next/font/local";

const seasonLight = localFont({ src: "../../../../public/theseasons-lt.otf" });
const seasonBold = localFont({ src: "../../../../public/theseasons-bd.otf" });
const altaCaption = localFont({ src: "../../../../public/Alta_caption.otf" });

export default function Hero() {
  return (
    <>
      <div className="h-screen flex flex-col text-center justify-center">
        <div className={`${seasonLight.className} uppercase`}>join us on</div>
        <div>
          <h1 className={`${seasonBold.className} text-6xl`}>09.08</h1>
        </div>
        <div>
          <p className={`${altaCaption.className} p-10`}>
            At two o'clock in the afternoon, at the beautiful astoria world
            manor in queens
          </p>
        </div>
      </div>
    </>
  );
}

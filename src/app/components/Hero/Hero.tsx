"use client";

import localFont from "next/font/local";
import { translations } from "../translations";
import CountDownTimer from "../Footer/CountDownTimer";

const seasonLight = localFont({
  src: "../../../../public/TheSeasonsLight.ttf",
});
const seasonBold = localFont({
  src: "../../../../public/TheSeasonsRegular.ttf",
});
const altaCaption = localFont({ src: "../../../../public/Alta_caption.otf" });

export default function Hero() {
  return (
    <>
      <div className="h-[100vh] text-center flex flex-col justify-center items-center">
        <div>
          <div className={`${seasonLight.className} uppercase`}>
            {translations.hero.heading}
          </div>
          <div>
            <h1 className={`${seasonBold.className} text-6xl`}>
              {translations.hero.date}
            </h1>
          </div>
          <div>
            <p className={`${altaCaption.className} p-10`}>
              {translations.hero.location}
            </p>
          </div>
        </div>
        <div>
          <CountDownTimer />
        </div>
      </div>
    </>
  );
}

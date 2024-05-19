"use client";

import localFont from "next/font/local";
import { translations } from "../translations";

const altaCaption = localFont({ src: "../../../../public/Alta_caption.otf" });
const pinyon = localFont({ src: "../../../../public/PinyonScript-Regular.ttf" });
const montserrat = localFont({ src: "../../../../public/Montserrat-VariableFont_wght.ttf" });

const subtitlesStyle = "my-2 text-center font-light text-lg tracking-widest leading-5";
const emptyBorder = "border border-gold h-0 w-16 align-middle";
const names = "text-5xl tracking-wider text-center";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="justify-center flex flex-col items-center"
      >
        <div id="heading" className="">
          <p className={`${montserrat.className} text-center font-light text-lg tracking-widest leading-tight`}>
            {translations.hero.headingCopy.toUpperCase()}
          </p>
        </div>
        <div>
          <p className={`${pinyon.className} mt-8 tracking-widest text-gold-custom	text-7xl`}>
            {translations.hero.nikkah}
          </p>
          <p className={`${montserrat.className} ${subtitlesStyle}`}>
            {translations.hero.uniting.toUpperCase()}
          </p>
        </div>
        <div id="names" className="my-4 flex flex-col justify-center ">
          <h1 className={`${altaCaption.className} ${names} mb-2`}>
            {translations.hero.alvi.toUpperCase()}
          </h1>
          <div className="flex flex-row justify-center items-center">
            <div className={`${emptyBorder}`}></div>
            <p className={`${pinyon.className} tracking-widest text-gold-custom text-2xl mx-2`}>
              {translations.hero.and}
            </p>
            <div className={`${emptyBorder}`}></div>
          </div>
          <h1 className={`${altaCaption.className} ${names} mt-2`}>
            {translations.hero.prity.toUpperCase()}
          </h1>
        </div>
        <p className={`${montserrat.className} ${subtitlesStyle}`}>
            {translations.hero.inshallah.toUpperCase()}
          </p>
      </div>
    </>
  );
}

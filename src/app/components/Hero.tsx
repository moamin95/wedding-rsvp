import CountDownTimer from "./Footer/CountDownTimer";
import { translations } from "./translations";
import localFont from "next/font/local";

const seasonLight = localFont({
  src: "../../../public/TheSeasonsLight.ttf",
});
const seasonBold = localFont({
  src: "../../../public/TheSeasonsRegular.ttf",
});
const altaCaption = localFont({ src: "../../../public/Alta_caption.otf" });

const pinyon = localFont({ src: "../../../public/PinyonScript-Regular.ttf" });

const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });

export default function Hero() {
  return (
    <div className="flex flex-col gap-12 text-white">
      <div className="">
        <h1 className={`${pangaia.className} text-9xl text-center`}>Alvi</h1>
        <p className={`${pangaia.className} text-4xl text-center`}>+</p>
        <h1 className={`${pangaia.className} text-9xl text-center`}>Prity</h1>
      </div>
      {/* <div className="lg:w-[50vw]">
        <h1 className={`${seasonBold.className} text-4xl`}>
          {translations.hero.date}
        </h1>
        <p className={`${altaCaption.className} text-xl py-5 px-10`}>
          {translations.hero.location}
        </p>
      </div> */}

      <CountDownTimer />
    </div>
  );
}

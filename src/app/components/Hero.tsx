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
    <div className="w-screen text-center flex flex-col justify-center items-center space-y-16">
      <div className="">
        <h1 className={`${pangaia.className} text-9xl`}>Alvi</h1>
        <p className={`${pangaia.className} text-4xl`}>+</p>
        <h1 className={`${pangaia.className} text-9xl`}>Prity</h1>
      </div>
      {/* <div className="lg:w-[50vw]">
        <h1 className={`${seasonBold.className} text-4xl`}>
          {translations.hero.date}
        </h1>
        <p className={`${altaCaption.className} text-xl py-5 px-10`}>
          {translations.hero.location}
        </p>
      </div> */}

      <CountDownTimer/>
    </div>
  );
}

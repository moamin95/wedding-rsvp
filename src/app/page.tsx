"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import CopyText from "../components/translations";

const altaCaption = localFont({ src: "../../public/Alta_caption.otf" });
const pangaia = localFont({ src: "../../public/PPPangaia-Medium.ttf" });
const playfair = localFont({ src: "../../public/Playfair.otf" });
const script = localFont({ src: "../../public/script.ttf" });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleClick = () => {
    router.push(`/rsvp`);
  };

  return (
    <ParallaxProvider>
      <ProgressBar />
      <div className="flex flex-col items-center text-onyx min-h-[80vh] bg-[url('/flos.avif')] backdrop-blur-sm bg-cover bg-no-repeat py-24">
        <Parallax speed={-10}>
          <div className="flex flex-col text-center gap-24">
            <div className="flex flex-col">
              <h1
                className={`${pangaia.className} text-2xl font-light tracking-wider lg:text-4xl`}
              >
                {CopyText.weddingDate}
              </h1>
              <div className={`${script.className} text-5xl lg:text-6xl font-light`}>
                {CopyText.message}
              </div>
            </div>

            <div
              className={`${pangaia.className} font-normal text-8xl uppercase`}
            >
              <h1>{CopyText.coupleNames}</h1>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="flex flex-col items-center min-h-[80vh] text-center bg-pink">
        <Parallax speed={-10}>
          <div className="text-center flex flex-col gap-24 py-24 px-10">
            <div>
              <div className={`${pangaia.className} text-3xl`}>
                بِسْمِ اللهِ
              </div>
              <div className="">(bismillah)</div>
            </div>

            <div
              className={`${altaCaption.className} text-xl lg:text-4xl text-soft max-w-screen-sm`}
            >
              {CopyText.invitation}
            </div>
            <div className={`${altaCaption.className} text-lg lg:text-2xl max-w-screen-sm`}>
              {CopyText.ceremonyDetails}
            </div>
          </div>
        </Parallax>
      </div>

      <div className="flex flex-col items-center min-h-[80vh] bg-soft">
        <Parallax speed={-10}>
          <div className="text-center flex flex-col gap-24 py-24 px-10">
            <div className={`flex flex-col gap-12`}>
              <div className={`${pangaia.className} text-3xl`}>{CopyText.when}</div>
              <div className="flex flex-col gap-4 ">
                <div className={`${playfair.className} text-4xl text-pink`}>
                  {CopyText.weddingDateDetail}
                </div>

                <div>
                  <div className={`text-lg text-onyx`}>
                    {CopyText.nikkahTime}
                  </div>
                  <div className={`text-lg text-onyx`}>
                    {CopyText.receptionTime}
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-12">
              <div className={`${pangaia.className} text-3xl`}>{CopyText.where}</div>
              <div className="flex flex-col gap-4 ">
                <div className={`${playfair.className} text-3xl text-pink`}>
                  {CopyText.venueName}
                </div>

                <div>
                  <div className={`text-lg text-onyx`}>{CopyText.venueAddress1}</div>
                  <div className={`text-lg text-onyx`}>{CopyText.venueAddress2}</div>
                </div>

                <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mt-2 underline" href={CopyText.addressLink}>
                  {CopyText.directions}
                </a>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="flex flex-col items-center min-h-[80vh] bg-pink">
        <Parallax speed={-10}>
          <div className="text-left flex flex-col gap-12 py-24 px-10">
            <div className={`${pangaia.className} text-3xl text-center`}>
              {CopyText.faqs}
            </div>
            <div className=" flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <div className={`${pangaia.className} text-2xl text-soft`}>
                  {CopyText.faqWear}
                </div>
                <div className={`${altaCaption.className} text-lg`}>
                  {CopyText.faqWearDetails}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className={`${pangaia.className} text-2xl text-soft`}>
                  {CopyText.faqGifts}
                </div>
                <div className={`${altaCaption.className} text-lg`}>
                  {CopyText.faqGiftsDetails}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className={`${pangaia.className} text-2xl text-soft`}>
                  {CopyText.faqParking}
                </div>
                <div className={`${altaCaption.className} text-lg`}>
                  {CopyText.faqParkingDetails}
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="flex flex-col items-center min-h-[50vh] bg-[url('/flos.avif')] bg-cover bg-no-repeat">
        <Parallax speed={-10}>
          <div className="text-center flex flex-col gap-24 py-24 px-10">
            <div className={`${pangaia.className} text-3xl`}>{CopyText.blurb}</div>
            <button
              className={`${playfair.className} bg-pink text-onyx text-2xl p-4 hover:bg-onyx hover:text-soft transition-colors duration-300 ease-in-out`}
              onClick={handleClick}
            >
              RSVP
            </button>
          </div>
        </Parallax>
      </div>

      <div className="min-h-[10vh] bg-soft flex items-center justify-center">
        <div className={`${pangaia.className}`}>AP</div>
      </div>
    </ParallaxProvider>
  );
}

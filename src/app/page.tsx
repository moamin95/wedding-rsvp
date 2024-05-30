"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import Foot from "../components/Foot";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const altaCaption = localFont({ src: "../../public/Alta_caption.otf" });
const altaLight = localFont({ src: "../../public/Alta_light.otf" });
const pinyon = localFont({ src: "../../public/PinyonScript-Regular.ttf" });
const pangaia = localFont({ src: "../../public/PPPangaia-Medium.ttf" });
const playfair = localFont({ src: "../../public/Playfair.otf" });
const script = localFont({ src: "../../public/script.ttf" });


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleClick = () => {
    router.push(`/rsvp`);
  };

  const message = "We're getting married!";

  const blurb = "We hope you'll join us on our special day!";

  return (
    <>
      <div className="flex flex-col items-center text-onyx min-h-[80vh] bg-[url('/flos.avif')] bg-cover bg-no-repeat py-24">
        <div className="flex flex-col text-center gap-24">
          <div className="flex flex-col">
            <h1
              className={`${pangaia.className} text-4xl font-light tracking-wider`}
            >
              09.08.24
            </h1>
            <div className={`${script.className} text-5xl font-light`}>
              {message}
            </div>
          </div>

          <div
            className={`${pangaia.className} font-normal text-8xl uppercase`}
          >
            <h1>Alvi & Prity</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[80vh] text-center">
        <div className="text-center flex flex-col gap-24 py-24 px-10">
          <div>
            <div className={`${pangaia.className} text-3xl`}>بِسْمِ اللهِ</div>
            <div className="">(bismillah)</div>
          </div>

          <div className={`${altaCaption.className} text-xl text-pink max-w-screen-sm`}>
            Together with their families, Alvi and Prity request your presence
            at their wedding. Join us as we celebrate the union of our hearts
            and souls in a ceremony filled with love, joy, and blessings.
          </div>
          <div className={`${altaCaption.className} text-lg max-w-screen-sm`}>
            We will start the ceremony with our nikkah, followed by the
            reception and dinner in the same hall room.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[80vh] bg-pink">
        <div className="text-center flex flex-col gap-24 py-24 px-10">
          <div className={`flex flex-col gap-12`}>
            <div className={`${pangaia.className} text-3xl`}>When</div>
            <div className="flex flex-col gap-4 ">
              <div className={`${playfair.className} text-4xl text-soft`}>
                September 8, 2024
              </div>

              <div>
                <div className={`text-lg text-soft`}>
                  Nikkah: 2:00 PM - 3:00 PM
                </div>
                <div className={`text-lg text-soft`}>
                  Reception: 3:00 PM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-12">
            <div className={`${pangaia.className} text-3xl`}>Where</div>
            <div className="flex flex-col gap-4 ">
              <div className={`${playfair.className} text-3xl text-soft`}>
                Astoria World Manor
              </div>

              <div>
                <div className={`text-lg text-soft`}>25-22 Astoria Blvd</div>
                <div className={`text-lg text-soft`}>Queens, NY 11102</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[80vh] bg-soft">
        <div className="text-left flex flex-col gap-12 py-24 px-10">
          <div className={`${pangaia.className} text-3xl text-center`}>FAQs</div>
          <div className=" flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className={`${pangaia.className} text-2xl`}>
                What should I wear?
              </div>
              <div className={`${altaCaption.className} text-lg`}>
                We request that women wear white or off-white colors. Men wear
                suits.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className={`${pangaia.className} text-2xl`}>Gifts?</div>
              <div className={`${altaCaption.className} text-lg`}>
                Your presence is the best gift. But if you insist, cash only
                please!
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className={`${pangaia.className} text-2xl`}>Parking?</div>
              <div className={`${altaCaption.className} text-lg`}>
                Yes, the venue has complimentary valet parking 🥳
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[50vh] bg-pink">
        <div className="text-center flex flex-col gap-24 py-24 px-10">
          <div className={`${pangaia.className} text-3xl`}>{blurb}</div>
          <button 
          className={`${playfair.className} bg-soft text-onyx text-2xl p-4 hover:bg-onyx hover:text-soft transition-colors duration-300 ease-in-out`}
          onClick={handleClick}>RSVP</button>
        </div>
      </div>
      <div className="min-h-[10vh] bg-soft flex items-center justify-center">
            <div className={`${pangaia.className}`}>Alvi & Prity</div>
        </div>
    </>
  );
}

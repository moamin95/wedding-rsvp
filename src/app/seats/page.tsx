"use client";

import SeatingChart from "@/components/SeatingChart/SeatingChart";

import localFont from "next/font/local";
const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });
const script = localFont({ src: "../../../public/script.ttf" });

export default function Seats() {

const names = [
  "Nasima Sultana",
  "Mohammed Amin",
  "Dalia Newaz",
  "Shanewaz Patwary",
  "Shah Abu Alam",
  "Fukrullah Khan",
  "Nancy Patwary",
  "Illias Patwary",
  "Siddique Alam",
  "Zafor Alam"
];

  return (
    <main>
    <div className="flex flex-col items-center min-h-[70vh] bg-[url('/bw.jpg')] bg-contain bg-top md:bg-cover md:bg-center md:min-h-[100vh] lg:min-h-[130vh]  bg-no-repeat">
      <div
        className={`${pangaia.className} flex flex-col items-center text-4xl md:text-7xl py-12 md:py-32 lg:py-80 text-black md:text-soft max-w-screen-sm`}
      >
        Alvi & Prity
        <span className={`${script.className} text-2xl md:text-4xl`}>Please be seated</span>
      </div>
    </div>

    <div className="py-10">
      <SeatingChart tableName="Table Two" names={names} />
    </div>
    </main>
  );
}

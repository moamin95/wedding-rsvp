"use client";

import localFont from "next/font/local";
import { ClockIcon, SparklesIcon, CakeIcon } from "@heroicons/react/24/outline";

const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });

const events = [
  { time: "2:00 PM", title: "Ceremony", icon: <SparklesIcon className="h-6 w-6 text-onyx" /> },
  { time: "3:00 PM", title: "Lunch Time", icon: <ClockIcon className="h-6 w-6 text-onyx" /> },
  { time: "4:00 PM", title: "Reception", icon: <CakeIcon className="h-6 w-6 text-onyx" /> },
];

export default function Page() {
  return (
    <div className={`${pangaia.className} flex flex-col items-center text-onyx p-6`}>
      <h1 className="text-4xl mb-6">Event Program</h1>
      <div className="relative w-full">
        <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div key={index} className="mb-8 flex justify-between items-center w-full mx-auto">
            <div className="w-5/12 text-right pr-4">
              <p className="text-lg">{event.time}</p>
            </div>
            <div className="w-2/12 flex justify-center items-center">
              <div className="bg-transparent rounded-full p-2 flex justify-center items-center">
                {event.icon}
              </div>
            </div>
            <div className="w-5/12 pl-4">
              <p className="text-lg">{event.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

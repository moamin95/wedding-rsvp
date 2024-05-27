"use client";

import localFont from "next/font/local";
import { motion } from "framer-motion";

const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });
const script = localFont({ src: "../../../public/script.ttf" });

const events = [
  {
    time: "2:00",
    title: "Nikkah",
    description: "Join us for the khutbah and nikkah.",
    icon: "❤️",
  },
  {
    time: "3:00",
    title: "Pictures",
    description: "Guests will take pictures with the bride and groom.",
    icon: "📸",
  },
  {
    time: "4:00",
    title: "Lunch",
    description: "Enjoy a succulent desi buffet with us.",
    icon: "🍽️",
  },
  {
    time: "5:00",
    title: "Reception",
    description: "Celebrate with us at the reception.",
    icon: "🪩",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

export default function Page() {
  return (
    <div
      className={`${pangaia.className} flex flex-col items-center text-onyx px-4`}
    >
      <h1 className="font-semibold text-6xl text-soft uppercase">Program</h1>
      <div className="relative w-full max-w-4xl mt-4">
        <div className="border-l-2 border-black absolute h-full left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className={`flex justify-between items-center w-full mx-auto ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              className={`w-5/12 relative ${
                index % 2 === 0 ? "text-right pr-4" : "text-left pl-4"
              }`}
            >
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? "right-[-33px]" : "left-[-33px]"
                } w-6 `}
              >
                <span
                  className={`absolute border-b border-black w-4 ${
                    index % 2 === 0 ? "left-[9px]" : "right-[9px]"
                  } bg-transparent text-onyx`}
                >
                  {/* {event.time} */}
                </span>
              </div>
              <p className="text-sm text-soft">{event.time}</p>
              <p className={` ${script.className} text-4xl font-semibold`}>
                {event.title}
              </p>
              <p className="text-sm text-soft">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

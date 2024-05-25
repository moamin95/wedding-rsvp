"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";

interface CountdownTimeLeft {
  days?: number;
  hrs?: number;
  mins?: number;
  secs?: number;
}

const pangaia = localFont({ src: "../../../../public/PPPangaia-Medium.ttf" });
const INITIAL_TIME_LEFT = { days: 0, hrs: 0, mins: 0, secs: 0 };

function CountDownTimer() {
  const deadline = new Date("2024-09-08T14:00:00");
  const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>(INITIAL_TIME_LEFT);
  const [isMarried, setIsMarried] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      if (timeLeft) {
        setTimeLeft(timeLeft);
      } else {
        setIsMarried(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): CountdownTimeLeft | null {
    let currentDate = new Date();
    let difference = deadline.getTime() - currentDate.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  }

  return (
    <div className={`${pangaia.className} w-full grid place-items-center`}>
      {isMarried ? (
        <div className="text-center font-medium text-lg">I'm a married man!</div>
      ) : (
        <div className="w-4/5 mx-auto flex justify-center">
          {Object.entries(timeLeft).map(([unit, value], index, array) => (
            <div key={unit} className="text-center">
              <div className="flex items-center font-medium text-lg">
                <div className="w-9 flex justify-center rounded text-lg p-2 mx-1">
                  <p>{Math.floor(value / 10)}</p>
                  <p>{value % 10}</p>
                </div>
                {index !== array.length - 1 && <span>:</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountDownTimer;

// components/SeatingChart.tsx
import React from 'react';

import localFont from "next/font/local";
const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });
const script = localFont({ src: "../../../public/script.ttf" });
const playfair = localFont({ src: "../../../public/TheSeasonsRegular.ttf" });
 

type SeatingChartProps = {
  tableName: string;
  names: string[];
};

const SeatingChart: React.FC<SeatingChartProps> = ({ tableName, names }) => {
  // Initialize two arrays for left and right columns
  const leftColumn: string[] = [];
  const rightColumn: string[] = [];

  // Alternate names between left and right columns
  names.forEach((name, index) => {
    if (index % 2 === 0) {
      leftColumn.push(name);
    } else {
      rightColumn.push(name);
    }
  });

  return (
    <div className="seating-chart mb-8">
      <h2 className={`${playfair.className} text-center text-2xl lg:text-6xl font-bold mb-6 lowercase underline`}>{tableName}</h2>
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-none text-center">
          {leftColumn.map((name, index) => (
            <li key={index} className={`${pangaia.className} mb-1 lg:text-2xl text-end font-bold`}>
              {name}
            </li>
          ))}
        </ul>
        <ul className="list-none text-center border-l border-black pl-4">
          {rightColumn.map((name, index) => (
            <li key={index} className={`${pangaia.className} mb-1 lg:text-2xl text-start font-bold`}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeatingChart;

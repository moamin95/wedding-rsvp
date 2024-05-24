'use client';

import {useState, useEffect} from 'react'
import localFont from "next/font/local";


const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });

export default function Program() {

  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = sessionStorage.getItem('guestName');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      {name && <h2 className={` ${pangaia.className} text-3xl mt-4`}>Thank you, {name}!</h2>}
    </div>
  );
}
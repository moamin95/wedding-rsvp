
import localFont from "next/font/local";
const pangaia = localFont({ src: "../../../public/PPPangaia-Medium.ttf" });

export default function Page() {
  return (
    <div className={`${pangaia.className} flex min-h-screen flex-col items-center justify-center lowercase text-white`}>
      <p>Program</p>
    </div>
  );
}

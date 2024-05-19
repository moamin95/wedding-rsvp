import localFont from "next/font/local";
import { translations } from "../translations";
const montserrat = localFont({ src: "../../../../public/Montserrat-VariableFont_wght.ttf" });

export default function RsvpButton(): JSX.Element {
  return (
    <button
      type="button"
      className={`${montserrat.className} rounded bg-gold text-black w-20 my-10 py-2 px-2`}
    >
      {translations.button.rsvp}
    </button>
  );
}

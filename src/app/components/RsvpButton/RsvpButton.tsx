import localFont from "next/font/local";
import { translations } from "../translations";

export default function RsvpButton(): JSX.Element {
  return (
    <button
      type="button"
    >
      {translations.button.rsvp}
    </button>
  );
}

import Hero from "./components/Hero/Hero";
import RsvpButton from "./components/RsvpButton/RsvpButton";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col mt-64 mb-3 items-center">
        <Hero />
        <RsvpButton/>
      </div>
    </>
  );
}

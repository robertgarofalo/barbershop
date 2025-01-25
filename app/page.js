import Image from "next/image";

//sections
import Hero from "./components/sections/Hero";
import Location from "./components/sections/Location";

export default function Home() {
  return (
    <div>
      <Hero />
      <Location />
    </div>
  );
}

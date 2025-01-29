import Image from "next/image";

//sections
import Hero from "./components/sections/Hero";
import Location from "./components/sections/Location";
import Work from "./components/sections/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <Location />
      <Work />
    </div>
  );
}

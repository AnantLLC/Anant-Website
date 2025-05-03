import React from "react";
import Hero from "./ui/home/Hero";
import Services from "./ui/home/Services";
import About from "./ui/home/About";
import Schedule from "./ui/home/Schedule";
import LatestTip from "./ui/home/LatestTip";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Schedule />
      <LatestTip />
    </main>
  );
}

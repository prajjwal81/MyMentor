import Head from "next/head";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import StatsSection from "./Components/Stats";
import UniversitySlider from "./Components/UniversitySlider";
import ServicesCarousel from "./Components/ServiceCaraousel";
import { ServiceCaraousels } from "./Components/ServiceCaraousels";
import FormCaraousel from "./Components/FormCaraousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Main />
      <StatsSection />
      <UniversitySlider />
      <FormCaraousel />
      <ServicesCarousel />
    </div>
  );
}

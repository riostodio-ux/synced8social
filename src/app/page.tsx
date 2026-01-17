import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Value from "@/components/sections/Value";
import ResultsGrid from "@/components/sections/ResultsGrid";
import SystemVisual from "@/components/sections/SystemVisual";
import CTA from "@/components/sections/CTA";
import MagneticLiquid from "@/components/ui/MagneticLiquid";

export default function Home() {
  return (
    <>
      <MagneticLiquid />
      <Hero />
      <SystemVisual />
      <ResultsGrid />
      <Services />
      <Process />
      <Value />
      <CTA />
    </>
  );
}

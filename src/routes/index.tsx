import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About,
  WhyUs,
  Services,
  SystemArchitecture,
  PlatformSolutions,
  Industries,
  CaseStudies,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cer Vision Business Operations Platform" },
      {
        name: "description",
        content:
          "Cer Vision Business Operations Platform brings sales, purchasing, inventory, finance, CRM, omnichannel messaging and AI workflows into one connected system.",
      },
      { property: "og:title", content: "Cer Vision — Unified Business Operations Platform" },
      {
        property: "og:description",
        content:
          "Explore Cer Vision Business Operations Platform for sales, stock, finance, CRM, omnichannel communication and AI-assisted operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <SystemArchitecture />
        <PlatformSolutions />
        <Industries />
        <CaseStudies />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

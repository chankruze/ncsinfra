import { Hero } from "./hero";
import { TrustBar } from "./trust-bar";
import { About } from "./about";
import { Services } from "./services";
import { Projects } from "./projects";
import { RailwayExpertise } from "./railway-expertise";
import { WhyUs } from "./why-us";
import { Financials } from "./financials";
import { VideoCta } from "./video-cta";
import { Gallery } from "./gallery";
import { Founder } from "./founder";
import { Faq } from "./faq";
import { Contact } from "./contact";

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Projects />
      <RailwayExpertise />
      <WhyUs />
      <Financials />
      <VideoCta />
      <Gallery />
      <Founder />
      <Faq />
      <Contact />
    </>
  );
}

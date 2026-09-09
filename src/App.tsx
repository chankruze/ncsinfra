import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { DeveloperCredit } from "./components/layout/DeveloperCredit";
import { Hero } from "./components/sections/Hero";
import { TrustBar } from "./components/sections/TrustBar";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { RailwayExpertise } from "./components/sections/RailwayExpertise";
import { WhyUs } from "./components/sections/WhyUs";
import { Financials } from "./components/sections/Financials";
import { VideoCta } from "./components/sections/VideoCta";
import { Gallery } from "./components/sections/Gallery";
import { Founder } from "./components/sections/Founder";
import { Faq } from "./components/sections/Faq";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div id="top" className="min-h-screen bg-surface">
      <Header />
      <main>
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
      </main>
      <Footer />
      <DeveloperCredit />
    </div>
  );
}

export default App;

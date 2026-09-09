import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustBar } from "./components/sections/TrustBar";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <div id="top" className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { DeveloperCredit } from "./components/layout/developer-credit";
import { ScrollToTop } from "./components/ui/scroll-to-top";
import { Home } from "./pages/home";

function App() {
  return (
    <div id="top" className="min-h-screen bg-surface">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <DeveloperCredit />
      <ScrollToTop />
    </div>
  );
}

export default App;

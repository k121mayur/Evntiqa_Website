import { About } from './components/About';
import { ClientLogos } from './components/ClientLogos';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Preloader } from './components/Preloader';
import { TrustSection } from './components/TrustSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { WhoWeHelp } from './components/WhoWeHelp';
import { WhyEvntiqa } from './components/WhyEvntiqa';
import { useScrollReveal } from './hooks';

export function App() {
  // Single shared IntersectionObserver wires all `.reveal` elements
  useScrollReveal();

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <HowItWorks />
        <WhyEvntiqa />
        <WhoWeHelp />
        <ClientLogos />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import Hero from "../components/hero/hero";
import Features from "../components/features/features";
import Products from "../components/products/products";
import HowItWorks from "../components/howItWorks/howItWorks";
import CTA from "../components/cta/cta";
import Footer from "../components/footer/footer";
import Navbar from "@/components/nav/nav";

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Products />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
    </>
    
  );
}
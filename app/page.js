import Header from "../components/Header";
import HeroRun from "../components/HeroRun";
import Hero from "../components/Hero"
import StickyScroll from "../components/StickyScroll";
import MasonryGallery from "../components/MasonryGallery";
import PartnerLogos from "../components/PartnerLogos";
import LaserShowcase from "../components/LaserShowcase";
import Services from "../components/Services";
import ProcessSteps from "../components/ProcessSteps";
import SuccessStudies from "../components/SuccessStudies";
import BrandMarquee from "../components/BrandMarquee";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>

        <HeroRun />
        <Hero />
        <LaserShowcase />
        {/* <MasonryGallery /> */}
        <Services />
        {/* <ProcessSteps /> */}
        <PartnerLogos />
        <SuccessStudies />
        <BrandMarquee />
        {/* <StickyScroll /> */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

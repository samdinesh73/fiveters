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
import ScaleEngine from "../components/ScaleEngine";
import TeamSection from "../components/TeamSection";
import AchievementsSection from "../components/AchievementsSection";
import BrandReveal from "../components/BrandReveal";
import BrandMarquee from "../components/BrandMarquee";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* <HeroRun /> */}
        <Hero />

        <LaserShowcase />
        {/* <MasonryGallery /> */}<BrandReveal />
        <AchievementsSection />
        <Services />
        {/* <ProcessSteps /> */}
        <PartnerLogos />
        <SuccessStudies />
        <ScaleEngine />
        <TeamSection />
        <BrandMarquee />
        {/* <StickyScroll /> */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

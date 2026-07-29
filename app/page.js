"use client";
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
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import AchievementsSection from "../components/AchievementsSection";
import BrandReveal from "../components/BrandReveal";
import BrandMarquee from "../components/BrandMarquee";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import ThemeSwitcher from "../components/ThemeSwitcher";
import PerspectiveProjects from "../components/PerspectiveProjects";
import FeatureGrid from "../components/FeatureGrid";
import ProjectSection from "../components/ProjectSection"
import FAQSection from "../components/FAQSection";
import FeatureCarouselSection from "../components/FeatureCarouselSection";
import { ScrollDissolveReveal } from "@/components/ui/scroll-dissolve-reveal"


import { ExpandableScreen, ExpandableScreenContent, useExpandableScreen } from "../components/ui/expandable-screen";
import ConsultationForm from "../components/ConsultationForm";

const RootFormContainer = () => {
  const { collapse } = useExpandableScreen();
  return <ConsultationForm onClose={collapse} />;
};

export default function Home() {
  return (
    <ExpandableScreen triggerRadius="9999px" contentRadius="24px" lockScroll={true}>
      <div>
        <ThemeSwitcher />
        <Header />
        <main>
          {/* 1. Hero */}
          <Hero />

          {/* <LaserShowcase /> */}
          {/* <MasonryGallery /> */}<BrandReveal />
          <FeatureGrid />

          {/* 3. Stats Block */}
          <AchievementsSection />
          {/* <PerspectiveProjects /> */}
          {/* <ProcessSteps /> */}
          <PartnerLogos />
          <SuccessStudies />
          <ProjectSection />
          {/* <ScaleEngine /> */}

          <FeatureCarouselSection />

          <Testimonials />
          <BrandMarquee />

          {/* 10. FAQ */}
          <FAQSection />

          {/* 11. Final CTA banner */}
          <CtaSection />
          {/* <ScrollDissolveReveal
            imageFront="/marketing_showcase.png"
            imageBack="/marketing_showcase.png"
          /> */}
        </main>
        {/* 12. Footer */}
        <Footer />

        {/* Modal content placed at the root level */}
        <ExpandableScreenContent className="bg-black/95 text-white mx-auto rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col justify-center overflow-y-auto">
          <RootFormContainer />
        </ExpandableScreenContent>
      </div>
    </ExpandableScreen>
  );
}

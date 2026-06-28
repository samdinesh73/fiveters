import Header from "../components/Header";
import Hero from "../components/Hero";
import StickyScroll from "../components/StickyScroll";
import MasonryGallery from "../components/MasonryGallery";
import Services from "../components/Services";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        {/* <MasonryGallery /> */}
        <Services />
        {/* <StickyScroll /> */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

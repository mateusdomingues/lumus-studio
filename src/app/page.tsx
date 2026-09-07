import { Preloader } from "@/components/Preloader";
import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/sections/About";
import { Approach } from "@/sections/Approach";
import { BrandEvents } from "@/sections/BrandEvents";
import { CinematicScroll } from "@/sections/CinematicScroll";
import { EventsIndex } from "@/sections/EventsIndex";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { HorizontalGallery } from "@/sections/HorizontalGallery";
import { Manifesto } from "@/sections/Manifesto";
import { SelectedStories } from "@/sections/SelectedStories";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Ir para o conteúdo</a>
      <Preloader />
      <SiteHeader />
      <main id="main-content">
        <div id="top" />
        <Hero />
        <Manifesto />
        <SelectedStories />
        <BrandEvents />
        <CinematicScroll />
        <HorizontalGallery />
        <EventsIndex />
        <Approach />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}


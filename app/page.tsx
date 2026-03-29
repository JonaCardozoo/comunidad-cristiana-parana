import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MarqueeBanner } from "@/components/marquee-banner";
import { AboutSection } from "@/components/about-section";
import { MeetingsSection } from "@/components/meetings-section";
import { PredicasDomingoSection } from "@/components/predicas-domingo-section";
import { EventsSection } from "@/components/events-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <AboutSection />
      <MeetingsSection />
      <PredicasDomingoSection />
      <EventsSection />
      {/* <TestimonialsSection /> */}
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

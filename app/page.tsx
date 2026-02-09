import { HeroSection } from "@/components/home/hero-section";
import { EmpathySection } from "@/components/home/empathy-section";
import { ServicesSection } from "@/components/home/services-section";
import { AcneSection } from "@/components/home/acne-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ProcessSection } from "@/components/home/process-section";
import { AboutSection } from "@/components/home/about-section";
import { BonosSection } from "@/components/home/bonos-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EmpathySection />
      <ServicesSection />
      <AcneSection />
      <TestimonialsSection />
      <ProcessSection />
      <AboutSection />
      <BonosSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

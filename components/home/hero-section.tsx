import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Interior del centro de estetica natural"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>


      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
            Centro de estetica natural en Malaga &middot; Desde 2005
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Tu belleza cuidada de forma natural, con resultados que se ven
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-xl">
            Tratamientos faciales, corporales y especialistas en acne con
            ingredientes 100% naturales. Consulta gratuita y personalizada para
            entender que necesita tu piel antes de proponerte nada.
          </p>

          <div className="mt-10">
            <WhatsAppButton
              text="Pide tu consulta gratuita"
              microcopy="Sin compromiso. Te respondemos hoy mismo."
              className="items-start"
            />
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-primary-foreground/80">
              4.9 de media en Google &middot; Mas de 15 anos en Malaga
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

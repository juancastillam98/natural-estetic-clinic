import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function AcneSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Nuestro diferenciador
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Especialistas en acne natural desde hace mas de 15 anos — y
              nuestros resultados hablan solos
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                El acne no es solo un problema de piel. Afecta a como te sientes
                cuando te miras al espejo, a tu confianza y a tu dia a dia. Lo
                sabemos porque nuestra directora empezo a especializarse en
                tratamientos naturales de acne por inquietud personal hace mas de
                una decada.
              </p>
              <p>
                Desde entonces, hemos ayudado a cientos de personas a recuperar
                una piel limpia y la confianza que viene con ella. No con
                productos quimicos agresivos ni con promesas vacias — con
                tratamientos botanicos personalizados, seguimiento real y la
                experiencia de anos viendo que funciona de verdad.
              </p>
            </div>

            <div className="mt-8">
              <WhatsAppButton
                text="Pide tu valoracion gratuita de acne"
                microcopy="Analizamos tu piel y te explicamos que podemos hacer por ti. Sin coste ni compromiso."
                className="items-start"
                message="Hola, me gustaria pedir una valoracion gratuita para acne."
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/acne-treatment.jpg"
                alt="Tratamiento natural de acne en nuestro centro"
                width={600}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Before/After placeholder */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center rounded-xl bg-card p-4 text-center border border-border">
                <span className="text-3xl font-serif font-semibold text-primary">+500</span>
                <span className="mt-1 text-sm text-muted-foreground">
                  Tratamientos de acne realizados
                </span>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-card p-4 text-center border border-border">
                <span className="text-3xl font-serif font-semibold text-primary">98%</span>
                <span className="mt-1 text-sm text-muted-foreground">
                  Clientes satisfechos con resultados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

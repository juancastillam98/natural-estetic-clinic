import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Fotodepilacion Indolora en Malaga | Estetica Natural",
  description:
    "Fotodepilacion IPL indolora en Malaga. Tecnologia avanzada con sistema de enfriamiento. Primera consulta gratuita. Sesiones rapidas y sin dolor.",
};

const zones = [
  { name: "Ingles", sessions: "6 sesiones", benefit: "Olvidate del vello en la zona bikini" },
  { name: "Axilas", sessions: "6 sesiones", benefit: "Axilas limpias sin irritacion" },
  { name: "Piernas completas", sessions: "Consultar", benefit: "Piernas suaves de forma definitiva" },
  { name: "Brazos", sessions: "Consultar", benefit: "Brazos libres de vello" },
  { name: "Labio superior", sessions: "Consultar", benefit: "Sin vello facial visible" },
  { name: "Linea alba", sessions: "Consultar", benefit: "Abdomen limpio y suave" },
];

export default function FotodepilacionPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                Fotodepilacion IPL
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl text-balance">
                Fotodepilacion indolora en Malaga — olvidate del vello de una
                vez
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto">
                Tecnologia IPL con sistema de enfriamiento para sesiones
                comodas y resultados duraderos. Primera consulta gratuita para
                valorar tu piel y proponerte el plan adecuado.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  text="Reserva tu consulta gratuita"
                  message="Hola, me gustaria informacion sobre fotodepilacion."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Cansada de depilarte cada semana (y de que vuelva a crecer)
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cera, cuchilla, crema depilatoria... y vuelta a empezar. Si estas
              buscando una solucion definitiva que no duela y que funcione de
              verdad, la fotodepilacion con IPL es probablemente lo que necesitas.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                Tecnologia que funciona sin que duela
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Nuestra tecnologia combina luz pulsada con un sistema de
                enfriamiento para que no sientas nada. Las sesiones son rapidas
                y el vello se reduce progresivamente hasta que dejas de
                necesitar cualquier otro metodo.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Luz Pulsada Intensa", desc: "Tecnologia IPL de ultima generacion con resultados probados" },
                { title: "Sistema de enfriamiento", desc: "Sesiones comodas e indoloras gracias al enfriamiento integrado" },
                { title: "Sesiones rapidas", desc: "Dependiendo de la zona, entre 10 y 30 minutos por sesion" },
                { title: "Resultados progresivos", desc: "El vello se reduce desde las primeras sesiones hasta desaparecer" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones & bonos */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                Zonas y bonos de fotodepilacion
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {zones.map((zone) => (
                <div key={zone.name} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{zone.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{zone.sessions}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{zone.benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <WhatsAppButton
                text="Pregunta por tu bono de fotodepilacion"
                variant="outline"
                message="Hola, me gustaria informacion sobre los bonos de fotodepilacion."
              />
            </div>
          </div>
        </section>

        {/* Pain objection */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              {"La pregunta que todo el mundo nos hace: ¿duele?"}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              No. Y no es solo porque nosotros lo digamos. Nuestra tecnologia
              incluye un sistema de enfriamiento integrado que mantiene la piel
              comoda durante toda la sesion. Si alguna vez probaste otro tipo
              de depilacion laser y te dolio, esto es completamente diferente.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl text-balance">
              Primera consulta gratuita — valoramos tu piel y te recomendamos
              el plan perfecto para ti
            </h2>
            <div className="mt-10">
              <WhatsAppButton
                text="Reserva por WhatsApp"
                variant="secondary"
                message="Hola, me gustaria reservar una consulta gratuita para fotodepilacion."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Tratamientos Faciales y Corporales Naturales en Malaga | Estetica Natural",
  description:
    "Tratamientos faciales y corporales con ingredientes naturales y organicos. Limpieza facial, anti-edad, hidratacion, drenaje linfatico. Consulta gratuita en Malaga.",
};

const facialTreatments = [
  {
    name: "Limpieza facial profunda",
    desc: "Eliminamos impurezas con productos naturales y vapor de hierbas aromaticas. Tu piel respira y se regenera sin quimicos agresivos.",
  },
  {
    name: "Tratamiento anti-edad natural",
    desc: "Combinamos acido hialuronico vegetal, vitamina C natural y masaje facial para reducir lineas de expresion de forma no invasiva.",
  },
  {
    name: "Hidratacion profunda botanica",
    desc: "Con aloe vera, rosa mosqueta y aceites esenciales devolvemos la hidratacion que tu piel necesita. Ideal para pieles secas o castigadas.",
  },
  {
    name: "Peeling enzimatico natural",
    desc: "Sin acidos sinteticos. Utilizamos enzimas de frutas para renovar la capa superficial de la piel y lograr un tono uniforme y luminoso.",
  },
  {
    name: "Tratamiento calmante y reparador",
    desc: "Para pieles sensibles, reactivas o con rojeces. Productos con calendula, manzanilla y centella asiatica que calman y restauran la barrera cutanea.",
  },
  {
    name: "Radiofrecuencia facial",
    desc: "Estimulamos la produccion natural de colageno con radiofrecuencia. Resultados visibles desde la primera sesion, sin inyecciones ni cirugia.",
  },
];

const bodyTreatments = [
  {
    name: "Drenaje linfatico manual",
    desc: "Tecnica manual que activa la circulacion, reduce la retencion de liquidos y mejora la sensacion de pesadez. Ideal para piernas cansadas.",
  },
  {
    name: "Envolturas corporales naturales",
    desc: "Con arcilla verde, algas marinas y aceites esenciales. Desintoxican, nutren y reafirman la piel de forma completamente natural.",
  },
  {
    name: "Tratamiento reafirmante corporal",
    desc: "Combinamos radiofrecuencia con cosmetica natural para tonificar la piel y mejorar su elasticidad en zonas como abdomen, brazos y muslos.",
  },
  {
    name: "Masaje relajante aromaterapeutico",
    desc: "Masaje completo con aceites esenciales seleccionados segun tu necesidad. Libera tension, reduce el estres y mejora tu bienestar general.",
  },
];

export default function TratamientosPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                Tratamientos faciales y corporales
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl text-balance">
                Tu piel merece ingredientes reales, no quimicos
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Cada tratamiento esta formulado con ingredientes botanicos,
                aceites esenciales y productos organicos. Sin parabenos, sin
                siliconas, sin compromiso con tu salud.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  text="Consulta gratuita por WhatsApp"
                  message="Hola, me gustaria informacion sobre tratamientos faciales y corporales."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/images/natural-treatment.jpg"
                  alt="Tratamiento facial con ingredientes naturales"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                  Nuestra filosofia: lo que le pones a tu piel importa
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Llevamos mas de 20 anos trabajando con cosmetica natural y
                  hemos comprobado que los mejores resultados llegan cuando
                  respetas la piel en lugar de agredirla.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Cada tratamiento empieza con un diagnostico personalizado
                  para entender que necesita tu piel, no lo que dice la moda.
                  Porque cada persona es diferente y su cuidado deberia serlo
                  tambien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facial treatments */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Rostro
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                Tratamientos faciales naturales
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Formulaciones botanicas y tecnicas avanzadas para cada tipo de
                piel y cada necesidad.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {facialTreatments.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <WhatsAppButton
                text="Pregunta por tratamientos faciales"
                variant="outline"
                message="Hola, me gustaria informacion sobre tratamientos faciales naturales."
              />
            </div>
          </div>
        </section>

        {/* Body treatments */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Cuerpo
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                Tratamientos corporales naturales
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Bienestar, descanso y resultados reales con ingredientes
                organicos y tecnicas manuales.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {bodyTreatments.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <WhatsAppButton
                text="Pregunta por tratamientos corporales"
                variant="outline"
                message="Hola, me gustaria informacion sobre tratamientos corporales naturales."
              />
            </div>
          </div>
        </section>

        {/* Bonos */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Bonos de tratamiento: ahorra cuidandote
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              La piel mejora con constancia, no con tratamientos sueltos. Por
              eso ofrecemos bonos que te permiten mantener tu rutina de
              cuidado profesional a un precio mas accesible. Pregunta por los
              bonos disponibles y te recomendamos el que mejor se adapte a ti.
            </p>
            <div className="mt-10">
              <WhatsAppButton
                text="Consulta los bonos disponibles"
                message="Hola, me gustaria informacion sobre los bonos de tratamientos."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl text-balance">
              Primera consulta gratuita — te decimos exactamente lo que tu
              piel necesita
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Sin compromiso. Sin presion. Solo un diagnostico honesto y un
              plan personalizado con tratamientos naturales que funcionan.
            </p>
            <div className="mt-10">
              <WhatsAppButton
                text="Reserva tu consulta gratuita"
                variant="secondary"
                message="Hola, me gustaria reservar una consulta gratuita para tratamientos faciales o corporales."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

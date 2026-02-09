import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Tratamiento Natural de Acne en Malaga | Especialistas en Acne Natural",
  description:
    "Especialistas en tratamiento natural de acne en Malaga. Mas de 15 anos de resultados reales con ingredientes 100% naturales. Consulta gratuita.",
};

const faqs = [
  {
    q: "¿En cuantas sesiones vere resultados?",
    a: "Depende del tipo y severidad del acne, pero en la mayoria de casos se ven mejoras visibles en las primeras sesiones. En la valoracion gratuita te damos una estimacion realista para tu caso.",
  },
  {
    q: "¿Funciona en acne adulto?",
    a: "Si. El acne no es solo cosa de adolescentes. Tratamos acne adulto con la misma especializacion natural y los mismos resultados.",
  },
  {
    q: "¿Los tratamientos naturales son igual de efectivos?",
    a: "Los ingredientes naturales que utilizamos son principios activos con eficacia demostrada. La diferencia es que no agreden tu piel con quimicos. Tu piel mejora y se fortalece, no solo superficialmente.",
  },
  {
    q: "¿Puedo seguir con mi rutina normal?",
    a: "Te daremos indicaciones especificas para tu caso, pero en general nuestros tratamientos naturales son compatibles con tu vida diaria.",
  },
];

const steps = [
  {
    title: "Valoracion gratuita de tu piel",
    desc: "Analizamos tu tipo de piel, tu historial con el acne y lo que has probado antes. Sin coste.",
  },
  {
    title: "Plan de tratamiento natural personalizado",
    desc: "Disenamos un protocolo botanico especifico para tu caso. Te explicamos que vamos a hacer, cuantas sesiones estimamos y que resultados puedes esperar.",
  },
  {
    title: "Sesiones de tratamiento",
    desc: "Sesiones profesionales con ingredientes naturales en nuestro centro. Seguimos tu evolucion y ajustamos el tratamiento segun responda tu piel.",
  },
  {
    title: "Tu piel limpia",
    desc: "Resultados visibles desde las primeras sesiones. Seguimiento para mantener tu piel sana a largo plazo de forma natural.",
  },
];

export default function AcnePage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                  Nuestra especialidad
                </p>
                <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl text-balance">
                  Especialistas en tratamiento natural de acne en Malaga — mas
                  de 15 anos de resultados reales
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
                  Si llevas tiempo luchando contra el acne sin encontrar una
                  solucion que funcione y que no agreda tu piel, estas en el
                  sitio correcto. Mas de una decada tratando casos como el tuyo
                  con ingredientes 100% naturales.
                </p>
                <div className="mt-8 flex items-center gap-3">
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
                  <span className="text-sm text-muted-foreground">
                    Especialistas en acne natural desde 2005
                  </span>
                </div>
                <div className="mt-8">
                  <WhatsAppButton
                    text="Pide tu valoracion gratuita de acne"
                    microcopy="Analizamos tu piel y te explicamos exactamente que podemos hacer. Sin coste ni compromiso."
                    className="items-start"
                    message="Hola, me gustaria pedir una valoracion gratuita para acne."
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/acne-treatment.jpg"
                  alt="Tratamiento natural de acne"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Empathy */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Sabemos que el acne no es solo un problema de piel
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Es mirarte al espejo y no sentirte tu. Es evitar fotos,
                cancelar planes, probar cremas quimicas que no funcionan y
                escuchar consejos que no sirven. Es la frustracion de que algo
                tan visible sea tan dificil de solucionar.
              </p>
              <p>
                Si estas aqui, probablemente ya has intentado muchas cosas.
                Productos de farmacia, remedios caseros, incluso otros
                tratamientos profesionales cargados de quimicos que no dieron
                el resultado que esperabas. Lo entendemos. Y por eso hacemos
                las cosas diferente — con la naturaleza como aliada.
              </p>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                No tratamos el acne como un servicio mas del catalogo
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Nuestra directora se especializo en tratamientos naturales de
                acne por inquietud personal. No fue un curso de fin de semana
                ni un servicio anadido al menu. Fue una dedicacion consciente
                que la llevo a formarse en fitoterapia aplicada y a
                perfeccionar tratamientos botanicos durante mas de 15 anos.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Mas de 15 anos especializados en acne natural",
                  desc: "No es lo mismo tratar acne de vez en cuando que haber dedicado mas de una decada a perfeccionarlo con ingredientes naturales.",
                },
                {
                  title: "Valoracion personalizada antes de todo",
                  desc: "Analizamos tu piel en profundidad antes de proponerte nada. Sin tratamientos estandar.",
                },
                {
                  title: "Resultados documentados",
                  desc: "Tenemos casos con fotos antes/despues que demuestran lo que conseguimos. Resultados reales, no promesas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                Tu camino hacia una piel limpia, paso a paso
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-3xl space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-6">
                  <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Preguntas frecuentes sobre el tratamiento natural de acne
            </h2>
            <div className="mt-12 divide-y divide-border">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-foreground [&::-webkit-details-marker]:hidden list-none">
                    {faq.q}
                    <svg
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl text-balance">
              Mas de 15 anos ayudando a personas como tu a recuperar su piel —
              y su confianza — de forma natural
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              El primer paso es el mas facil: cuentanos tu caso y te asesoramos
              sin compromiso.
            </p>
            <div className="mt-10">
              <WhatsAppButton
                text="Pide tu valoracion gratuita"
                variant="secondary"
                message="Hola, me gustaria pedir una valoracion gratuita para acne."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

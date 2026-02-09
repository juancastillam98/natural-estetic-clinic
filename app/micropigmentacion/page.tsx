import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Micropigmentacion Natural en Malaga | Estetica Natural",
  description:
    "Micropigmentacion de cejas, labios y ojos con pigmentos naturales en Malaga. Tecnica pelo a pelo, resultados naturales. Consulta gratuita.",
};

const techniques = [
  {
    name: "Cejas pelo a pelo",
    desc: "Dibujamos pelo a pelo imitando el crecimiento natural. El resultado es tan real que nadie nota la diferencia. Ideal si has perdido densidad o quieres redefinir la forma.",
    duration: "Aproximadamente 2 horas",
  },
  {
    name: "Cejas con sombreado",
    desc: "Efecto polvo o degradado que aporta volumen y definicion. Perfecto si quieres un look mas maquillado pero natural. Se puede combinar con pelo a pelo.",
    duration: "Aproximadamente 2 horas",
  },
  {
    name: "Micropigmentacion de labios",
    desc: "Aportamos color, definicion y volumen visual a los labios. Corregimos asimetrias y devolvemos el color natural que se pierde con el tiempo.",
    duration: "Aproximadamente 1.5 horas",
  },
  {
    name: "Micropigmentacion de ojos",
    desc: "Linea fina o gruesa en el parpado superior que realza la mirada sin necesidad de delineador diario. Sutil, elegante y duradero.",
    duration: "Aproximadamente 1.5 horas",
  },
];

const process = [
  {
    step: "01",
    title: "Consulta y diseno",
    desc: "Te escuchamos, analizamos tu rostro y disenamos juntas la forma, el grosor y el color perfecto para ti. No empezamos hasta que estes 100% conforme.",
  },
  {
    step: "02",
    title: "Preparacion",
    desc: "Aplicamos anestesia topica para que no sientas nada durante el procedimiento. Preparamos la zona y los pigmentos seleccionados.",
  },
  {
    step: "03",
    title: "Micropigmentacion",
    desc: "Con precision milimetrica, implantamos los pigmentos naturales capa a capa. El resultado es inmediato pero se perfecciona en las semanas siguientes.",
  },
  {
    step: "04",
    title: "Retoque y seguimiento",
    desc: "A las 4-6 semanas hacemos un retoque gratuito para perfeccionar el resultado. Te damos pautas de cuidado para que dure lo maximo posible.",
  },
];

export default function MicropigmentacionPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                Micropigmentacion
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl text-balance">
                Micropigmentacion natural en Malaga — cejas, labios y ojos que
                parecen de verdad
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Con pigmentos de origen natural y tecnicas de precision,
                conseguimos resultados tan reales que solo tu sabras que llevas
                micropigmentacion. Primera consulta y diseno gratuito.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  text="Reserva tu consulta gratuita"
                  message="Hola, me gustaria informacion sobre micropigmentacion."
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is it */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Que es la micropigmentacion (y por que la nuestra es diferente)
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              La micropigmentacion es una tecnica de maquillaje semipermanente
              que deposita pigmentos en la capa superficial de la piel. En
              nuestro centro utilizamos exclusivamente pigmentos de origen
              natural, libres de metales pesados, que evolucionan con tu piel
              de forma armoniosa en lugar de cambiar a tonos no deseados.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Cada rostro es unico. Por eso hacemos un estudio facial completo
              antes de empezar, teniendo en cuenta la simetria, el tono de
              piel, el color de pelo y tus preferencias personales.
            </p>
          </div>
        </section>

        {/* Techniques */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
                Tecnicas disponibles
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Cada tecnica esta pensada para un resultado diferente. Te
                ayudamos a elegir la que mejor se adapta a lo que buscas.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
              {techniques.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
                    {t.duration}
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
                Como es el proceso paso a paso
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p) => (
                <div key={p.step} className="text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {p.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="bg-card py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Para quien es la micropigmentacion
            </h2>
            <div className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
              {[
                "Has perdido densidad en las cejas",
                "Quieres dejar de maquillarte cada dia",
                "Has pasado por quimioterapia y quieres recuperar tu imagen",
                "Tienes cicatrices o alopecia en las cejas",
                "Quieres corregir la forma o simetria",
                "Tus labios han perdido color con el tiempo",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objections */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              {"¿Duele? ¿Queda natural? Resolvemos tus dudas"}
            </h2>
            <div className="mt-10 space-y-6 text-left">
              {[
                {
                  q: "¿Es doloroso el procedimiento?",
                  a: "Aplicamos anestesia topica antes de empezar, asi que la mayoria de clientas describen la experiencia como una ligera molestia, no dolor. Muchas incluso se relajan durante la sesion.",
                },
                {
                  q: "¿El resultado se ve natural?",
                  a: "Si, y esa es nuestra prioridad. Trabajamos pelo a pelo, capa a capa, con colores que se integran con tu tono de piel. El objetivo es que mejore tu imagen sin que nadie note que llevas micropigmentacion.",
                },
                {
                  q: "¿Cuanto dura?",
                  a: "Dependiendo de la zona y el tipo de piel, entre 1 y 3 anos. Ofrecemos retoques de mantenimiento para que siempre se vea perfecto.",
                },
                {
                  q: "¿Que pigmentos utilizais?",
                  a: "Solo pigmentos de origen natural, certificados y libres de metales pesados. Esto garantiza que el color evolucione de forma armoniosa y no cambie a tonos no deseados con el tiempo.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl text-balance">
              Consulta y diseno gratuito — ven a vernos y disenamos juntas tu
              nueva imagen
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Sin compromiso. Te mostramos como quedaria antes de empezar y
              solo procedemos cuando estas completamente segura.
            </p>
            <div className="mt-10">
              <WhatsAppButton
                text="Reserva tu cita por WhatsApp"
                variant="secondary"
                message="Hola, me gustaria reservar una consulta gratuita para micropigmentacion."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

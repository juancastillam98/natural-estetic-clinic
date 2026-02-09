import { WhatsAppButton } from "@/components/whatsapp-button";

const steps = [
  {
    number: "01",
    title: "Escribenos por WhatsApp",
    description:
      "Cuentanos que te preocupa o que tratamiento te interesa. Te respondemos hoy mismo.",
  },
  {
    number: "02",
    title: "Consulta gratuita y personalizada",
    description:
      "Valoramos tu piel en persona, te explicamos las opciones naturales y te recomendamos lo mejor para tu caso. Sin compromiso de ningun tipo.",
  },
  {
    number: "03",
    title: "Tu plan de tratamiento natural a medida",
    description:
      "Si decides seguir adelante, disenamos un plan con ingredientes 100% naturales adaptado a ti, a tu piel y a tu ritmo. Tu decides cuando empezar.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
            Asi de facil es empezar a cuidar tu piel de forma natural
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 hidden h-px w-full bg-border md:block" />
                )}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-serif font-semibold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton
            text="Escribenos por WhatsApp y empezamos"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
}

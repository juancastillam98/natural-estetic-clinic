import { WhatsAppButton } from "@/components/whatsapp-button";

const bonos = [
  {
    name: "Tratamiento de Acne Natural",
    sessions: "4 sesiones",
    benefit: "Piel limpia desde la primera sesion",
    popular: true,
  },
  {
    name: "Facial Completo Botanico",
    sessions: "8 sesiones",
    benefit: "Piel luminosa y cuidada todo el ano",
    popular: false,
  },
  {
    name: "Termoestimulacion Natural",
    sessions: "8 sesiones + 2 gratis",
    benefit: "Reducir centimetros y reafirmar",
    popular: false,
  },
  {
    name: "Presoterapia",
    sessions: "10 sesiones",
    benefit: "Piernas ligeras y circulacion",
    popular: false,
  },
  {
    name: "Fotodepilacion Ingles",
    sessions: "6 sesiones",
    benefit: "Olvidate del vello definitivamente",
    popular: false,
  },
  {
    name: "Fotodepilacion Axilas",
    sessions: "6 sesiones",
    benefit: "Olvidate del vello definitivamente",
    popular: false,
  },
];

export function BonosSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
            Bonos de tratamiento: cuida tu piel con ventaja
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Porque los mejores resultados se consiguen con constancia, nuestros
            bonos te permiten seguir tu plan de tratamiento natural a un precio
            especial.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bonos.map((bono) => (
            <div
              key={bono.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:shadow-md ${
                bono.popular
                  ? "border-primary/30 bg-primary/5 ring-1 ring-primary/10"
                  : "border-border bg-background"
              }`}
            >
              {bono.popular && (
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Mas popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">
                {bono.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-primary">
                {bono.sessions}
              </p>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {bono.benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton
            text="Preguntanos por tu bono ideal"
            microcopy="Te ayudamos a elegir el que mejor se adapta a ti."
            variant="secondary"
            message="Hola, me gustaria saber mas sobre los bonos de tratamiento."
          />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const services = [
  {
    title: "Especialistas en Acne Natural",
    description:
      "Resultados visibles con tratamientos 100% naturales desde las primeras sesiones. Botanica y ciencia al servicio de tu piel.",
    href: "/acne",
    linkText: "Ver resultados reales",
    featured: true,
    badge: "Nuestra especialidad",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Tratamientos Faciales Naturales",
    description:
      "Limpieza profunda, hidratacion y peeling con extractos botanicos. Tu piel limpia, luminosa y cuidada de forma natural.",
    href: "/tratamientos",
    linkText: "Conoce los tratamientos",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Tratamientos Corporales",
    description:
      "Anticelulíticos, reafirmantes y reduccion con tecnicas naturales. Resultados progresivos respetando tu cuerpo.",
    href: "/tratamientos",
    linkText: "Conoce los tratamientos",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Fotodepilacion Indolora",
    description:
      "Eliminacion de vello con tecnologia IPL de ultima generacion. Sesiones rapidas y sin dolor.",
    href: "/fotodepilacion",
    linkText: "Mas informacion",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Micropigmentacion Natural",
    description:
      "Cejas y labios con aspecto natural. Pigmentos organicos y definicion profesional.",
    href: "/micropigmentacion",
    linkText: "Mas informacion",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
            Tratamientos naturales que se adaptan a ti, no al reves
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Desde tratamientos faciales hasta soluciones corporales y
            eliminacion de vello. Todo empieza con una valoracion gratuita para
            entender que necesita tu piel.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg ${
                service.featured
                  ? "border-primary/30 bg-primary/5 sm:col-span-2 lg:col-span-1 ring-1 ring-primary/10"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {service.badge && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {service.badge}
                </span>
              )}
              <div className={`mb-4 ${service.featured ? "text-primary" : "text-muted-foreground"}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {service.linkText}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

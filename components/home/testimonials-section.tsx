const testimonials = [
  {
    text: "Despues de anos probando productos quimicos sin resultado, encontre este centro y todo cambio. Mi piel esta limpia y sana gracias a los tratamientos naturales. No puedo estar mas agradecida.",
    name: "Maria G.",
    detail: "Tratamiento de acne natural",
  },
  {
    text: "El trato es increible. Te escuchan, te explican todo y no te presionan. Me encanta que usen solo productos naturales. Llevo un ano viniendo y mi piel esta mejor que nunca.",
    name: "Carmen R.",
    detail: "Tratamientos faciales",
  },
  {
    text: "La diferencia con otros centros es abismal. Aqui realmente se preocupan por tu piel y por tu bienestar. Los ingredientes naturales que usan son de primera calidad y los resultados se notan.",
    name: "Laura M.",
    detail: "Tratamiento corporal natural",
  },
  {
    text: "Mi micropigmentacion quedo perfecta, super natural. La experiencia y la delicadeza con la que trabajan me dieron toda la confianza. Ademas, usan pigmentos organicos que me encantan.",
    name: "Ana P.",
    detail: "Micropigmentacion",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
            Lo que dicen nuestras clientas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resennas reales de personas que confiaron en nosotros y en la estetica natural.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 text-accent">
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
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground italic">
                {`"${t.text}"`}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authority note */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="text-base leading-relaxed text-foreground">
            Nuestra directora no solo ejerce como esteticista — fue{" "}
            <strong>profesora de estetica natural</strong> durante anos. La
            misma exigencia que aplicaba ensenando es la que aplica en cada
            tratamiento.
          </p>
        </div>
      </div>
    </section>
  );
}

import { WhatsAppButton } from "@/components/whatsapp-button";

export function CtaSection() {
  return (
    <section id="contacto" className="relative bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* CTA */}
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-background sm:text-4xl text-balance">
              Tu piel merece cuidados naturales de manos expertas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-background/70">
              Pide tu consulta gratuita y descubre lo que podemos hacer por ti.
              Sin compromiso, sin presion — solo una profesional que escucha
              primero y propone despues, siempre con ingredientes naturales.
            </p>

            <div className="mt-10">
              <WhatsAppButton
                text="Reserva tu consulta gratuita"
                className="items-start"
              />
            </div>

            <div className="mt-6">
              <a
                href="tel:+34600000000"
                className="text-base text-background/60 hover:text-background transition-colors"
              >
                O llamanos: +34 600 000 000
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-8 text-background/80">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-background/50">
                Direccion
              </h3>
              <p className="mt-2 text-base text-background/80">
                Centro de Malaga
                <br />
                Malaga, Espana
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-background/50">
                Horario
              </h3>
              <p className="mt-2 text-base text-background/80">
                Lunes a Viernes: 10:00 - 20:00
                <br />
                Sabados: 10:00 - 14:00
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-background/50">
                Contacto
              </h3>
              <div className="mt-2 space-y-1">
                <p className="text-base text-background/80">
                  WhatsApp: +34 600 000 000
                </p>
                <p className="text-base text-background/80">
                  Telefono: +34 600 000 000
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-2 overflow-hidden rounded-xl border border-background/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0!2d-4.42!3d36.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQzJzEyLjAiTiA0wrAyNScxMi4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion del centro de estetica natural en Malaga"
                className="grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

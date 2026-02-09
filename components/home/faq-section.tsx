"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿La primera consulta es realmente gratuita?",
    answer:
      "Si, completamente. Valoramos tu piel, te explicamos las opciones naturales y te recomendamos lo mejor para tu caso. Si decides seguir adelante, genial. Si no, no pasa nada. Sin presion, sin compromiso.",
  },
  {
    question: "¿Cuantas sesiones necesito para ver resultados?",
    answer:
      "Depende del tratamiento y de tu piel. Por eso empezamos siempre con una valoracion personalizada. Pero en la mayoria de tratamientos naturales, los primeros resultados se notan en las primeras sesiones.",
  },
  {
    question: "¿Que significa que usais ingredientes 100% naturales?",
    answer:
      "Todos nuestros tratamientos se basan en extractos botanicos, aceites esenciales y principios activos de origen natural. No utilizamos quimicos agresivos, parabenos ni siliconas. Tu piel recibe solo lo mejor de la naturaleza.",
  },
  {
    question: "¿La fotodepilacion duele?",
    answer:
      "No. Nuestra tecnologia IPL incluye un sistema de enfriamiento integrado que hace que la sesion sea comoda e indolora. Si alguna vez has probado otros metodos y te dolio, esto no tiene nada que ver.",
  },
  {
    question: "¿Es segura la micropigmentacion con pigmentos organicos?",
    answer:
      "Totalmente. Utilizamos pigmentos organicos certificados de maxima calidad y tecnicas depuradas con anos de experiencia. El resultado es natural y duradero.",
  },
  {
    question: "¿Donde estais y como llego?",
    answer:
      "En pleno centro de Malaga. Facil acceso en transporte publico y con aparcamiento cercano. Te enviamos la ubicacion exacta por WhatsApp cuando reserves tu cita.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
            Resolvemos tus dudas antes de que vengas
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="py-5">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-foreground">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
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
              </button>
              {openIndex === index && (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

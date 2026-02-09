import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Directora del centro de estetica natural"
                width={600}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              Mas de 15 anos dedicados a una sola cosa: que te sientas bien con
              tu piel, de forma natural
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Nuestra directora abrio el centro de Estetica Natural con una
                idea clara: que cada persona que cruzara su puerta se sintiera
                escuchada antes de ser tratada. Y que la naturaleza fuera
                siempre la primera opcion.
              </p>
              <p>
                Tecnico Especialista en Estetica, profesora del sector durante
                anos y con formacion continua en fitoterapia y cosmetica
                natural, ha dedicado mas de una decada a perfeccionar lo que
                hace. Su especializacion en tratamientos naturales de acne
                nacio de una inquietud personal, y hoy es una de las
                profesionales con mas experiencia en Malaga en este campo.
              </p>
              <p className="text-foreground font-medium">
                En un sector donde las franquicias crecen y el trato personal
                desaparece, nuestro centro sigue siendo lo que siempre fue: un
                espacio donde te conocen por tu nombre, entienden tu piel y te
                cuidan de verdad — con lo que la naturaleza nos ofrece.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <span className="text-2xl font-serif font-semibold text-primary">+15</span>
                <p className="mt-1 text-xs text-muted-foreground">Anos de experiencia</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-serif font-semibold text-primary">100%</span>
                <p className="mt-1 text-xs text-muted-foreground">Ingredientes naturales</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-serif font-semibold text-primary">+2.000</span>
                <p className="mt-1 text-xs text-muted-foreground">Clientas satisfechas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground border-t border-background/10 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="text-lg font-serif font-semibold text-background">
              Estetica Natural
            </span>
            <p className="mt-1 text-sm text-background/50">
              Centro de estetica natural en Malaga
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Paginas del sitio">
            <Link
              href="/acne"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              Tratamiento Acne
            </Link>
            <Link
              href="/fotodepilacion"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              Fotodepilacion
            </Link>
            <Link
              href="/tratamientos"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              Tratamientos
            </Link>
            <Link
              href="/micropigmentacion"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              Micropigmentacion
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/40">
            Estetica Natural &middot; Centro de Malaga, Espana &middot;
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

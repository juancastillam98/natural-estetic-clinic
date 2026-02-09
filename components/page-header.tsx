import Link from "next/link";

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-serif font-semibold tracking-wide text-foreground">
            Estetica Natural
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegacion principal">
          <Link
            href="/acne"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Acne
          </Link>
          <Link
            href="/fotodepilacion"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Fotodepilacion
          </Link>
          <Link
            href="/tratamientos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Tratamientos
          </Link>
          <Link
            href="/micropigmentacion"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Micropigmentacion
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+34600000000"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground transition-colors sm:block"
          >
            +34 600 000 000
          </a>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Pide tu cita
          </a>
        </div>
      </div>
    </header>
  );
}

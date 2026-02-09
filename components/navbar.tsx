"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const treatments = [
  { name: "Todos los tratamientos", href: "/tratamientos" },
  { name: "Acné", href: "/acne" },
  { name: "Fotodepilación", href: "/fotodepilacion" },
  { name: "Micropigmentación", href: "/micropigmentacion" },
];

const mainNavigation = [
  { name: "Sobre Nosotros", href: "/#sobre-nosotros" },
  { name: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar appearance
  const isTransparent = isHome && !isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent py-5"
          : "bg-white/95 backdrop-blur-md shadow-sm py-3"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <span
              className={cn(
                "text-xl font-serif font-bold tracking-tight transition-colors",
                isTransparent ? "text-primary-foreground" : "text-foreground group-hover:text-primary"
              )}
            >
              Estética Natural
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Tratamientos Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                  isTransparent ? "text-primary-foreground/90" : "text-foreground/80"
                )}
              >
                Tratamientos
                <ChevronDown className={cn("h-4 w-4 transition-transform", isDropdownOpen && "rotate-180")} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute left-0 mt-2 w-56 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 transition-all duration-200 ease-in-out",
                  isDropdownOpen 
                    ? "visible translate-y-0 opacity-100" 
                    : "invisible translate-y-2 opacity-0"
                )}
              >
                {treatments.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isTransparent ? "text-primary-foreground/90" : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 shadow-md"
            >
              Pide tu cita
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:+34600000000"
              className={cn(
                "p-2 rounded-full transition-colors",
                isTransparent ? "text-primary-foreground" : "text-foreground"
              )}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                isTransparent ? "text-primary-foreground" : "text-foreground"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full px-6 py-20 overflow-y-auto bg-white">
          <div className="space-y-8">
            {/* Tratamientos Group in Mobile */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 mb-4">Tratamientos</p>
              <div className="grid gap-4 pl-2">
                {treatments.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif font-medium text-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            <div className="space-y-6">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-4 pb-10">
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-primary py-4 text-center text-lg font-medium text-primary-foreground shadow-lg"
            >
              Pide tu cita por WhatsApp
            </a>
            <a
              href="tel:+34600000000"
              className="block w-full text-center text-muted-foreground"
            >
              Llamar al +34 600 000 000
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

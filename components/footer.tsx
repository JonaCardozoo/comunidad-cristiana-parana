import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Reuniones", href: "#reuniones" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/comunidadcristianaparana/",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <p className=" text-2xl font-bold text-primary-foreground">
              Comunidad Cristiana Paraná
            </p>
            <p className="mt-1 text-sm text-primary-foreground/60">
              Un lugar donde encontrar fe, esperanza y amor.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/50">
              {`\u00A9 ${new Date().getFullYear()} Comunidad Cristiana Paraná. Todos los derechos reservados.`}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/60 transition-colors hover:border-warm hover:text-warm"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

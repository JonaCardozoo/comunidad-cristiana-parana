import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _dmSans = DM_Sans({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comunidad Cristiana Paraná - Bienvenido a Casa",
  description:
    "Somos una comunidad de fe en Paraná. Te invitamos a conocer a Dios, encontrar libertad, descubrir tu proposito y hacer la diferencia.",
  icons: {
    icon: [
      {
        url: "/images/icono.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/icono.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

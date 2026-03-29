/**
 * Prédicas del domingo (reunión general).
 * Orden: más reciente primero.
 *
 * - contenido: texto largo; separá párrafos con \n\n
 * - imagenes: fotos de ese domingo (rutas en /public)
 * - versiculos: referencias trabajadas (ej. "Juan 1:12-13; 2 Corintios 5:17")
 */
export type PredicaDomingo = {
  id: string;
  fecha: string;
  titulo: string;
  predicador?: string;
  contenido: string;
  imagenes?: string[];
  versiculos?: string;
};

export const predicacionesDomingo: PredicaDomingo[] = [
  {
    id: "2026-03-29",
    fecha: "Domingo 29 de marzo, 2026",
    titulo: "Dios ha hablado por su hijo",
    predicador: "Claudio Cardozo",
    versiculos: "Hebreos 1 y 2",
    imagenes: [
      "/images/reunion29marzo1.webp",
      "/images/reunion29marzo2.webp",
      "/images/reunion29marzo3.webp",
    ],
    contenido: `
      Este domingo Claudio nos habló sobre 
    `
  },
];

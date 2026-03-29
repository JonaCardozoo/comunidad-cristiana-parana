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
      Este domingo Claudio predicó la introducción de la carta de los hebreos centrandoce en el capitulo 1 versiculo 1 al 4.
      Lo que se resaltó en la predica es que es estos postreros dias nos ha hablado por el hijo (Cristo) y la exaltación de su persona como hijo, siendo el sumo sacerdote perfecto, "Hebreos 4:14"
      El sacrificio perfecto de Cristo, "Hebreos 9:12", y tenemos acceso a Dios, "Hebreos 10:19-20".
    `,
  },
];

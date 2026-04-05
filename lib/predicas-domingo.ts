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
  {
    id: "2026-04-03",
    fecha: "Viernes 3 de abril, 2026",
    titulo: "El sentir de Cristo",
    predicador: "Ariel Gómez",
    versiculos: "Filipenses 2:5 al 11; Gálatas 2:20 ; Romanos 6:5 al 11 ; 1 Corintios 2 ; Efesios 2:3 ; 2 Pedro 1:4 ; Colosenses 1:27 ; Filipenses 2:12 ; Juan 12:24 ; Isaias 43:7 ; Romanos 11:36 ",
    imagenes: [
      "/images/reunio3-3foto1.webp",
      "/images/reunion3-3foto2.webp",
      "/images/reunion3-3foto3.webp",
    ],
    contenido: `
      Filipenses 2:5 al 11
Sentir no es un sentimiento es un lugar.

El sentir de Cristo es bajar.
Dios no amó desde el cielo sino que bajo.
La forma en que se demuestra el amor de Dios es bajando.
Bajó se hizo hombre.

✝️ La cruz

La cruz es el sentir es el lugar.

Todo aquel que quiera seguir a Jesus tiene que estar crucificado juntamente con el.
Gálatas 2:20

La cruz no es un proceso es un punto de partida.

Todos hablan de la cruz donde el llevo nuestros pecados pero se quedan ahi, la cruz es para que muera yo,
mis sueños, mis derechos, mis planes, mi voluntad.

¡No nos bajemos de la cruz!

🌱 La cruz produce fruto

La cruz permite que la vida de fruto.
Pablo dijo no predicamos otra cosa mas que la cruz.
1 Corintios 2

Semejantes a el en su muerte.
Filipenses 3:10 y Romanos 6:5 al 11

Es el justo muriendo por los injustos.

🔄 Arrepentimiento

Arrepentimiento no es remordimiento es un cambio de direccion,
pero para ir para el lado contrario tengo que ir a la cruz.
Es una obra del Espiritu Santo.

🧠 Nueva naturaleza

Son cosas que ojo no vio ni oido oyo ni ha subido a corazon de hombre.
1 Corintios 2:9

No se puede con la misma naturaleza.
Efesios 2:3

Es un cambio de mente no es una lista de conductas o enseñanzas a cumplir,
es una vida nueva con una nueva naturaleza.
2 Pedro 1:4

Que se expresa a si misma.

Que es Cristo en nosotros.
Colosenses 1:27

Que vive.
Que se alimenta, come del pan de vida.

🤝 El cuerpo

No es individual.

Es una mente para todo el cuerpo.
Produce el sentir.

Todo sentir tiene que ser puesto en revision, o es de Cristo o es de la carne.

¿Cual es tu actitud en el cuerpo con los demas?

❤️ El amor

Amar a Dios es imposible con la mente humana.
Amar al projimo tambien.

Si no podemos amar al otro, ocupemonos de nuestra salvacion.
Filipenses 2:12

Si nos arrepentimos el produce en nosotros el querer como el hacer.

⬇️ El camino

El sentir es bajar lo mas abajo posible,
para que el sea todo en nosotros.

Juan 12:24
Si el grano de trigo no cae a tierra y muere se queda solo,
pero si muere lleva mucho fruto.

🌟 Proposito

Creados para manifestar su gloria.
Isaias 43:7

Porque de el, por el y para el son todas las cosas.
Romanos 11:36 
    `,
  },
];

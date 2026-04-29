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
  {
    id: "2026-04-11",
    fecha: "Domingo 12 de abril, 2026",
    titulo: "Génesis 2:9-17 — El hombre destituido sin Cristo",
    predicador: "Claudio Cardozo",
    versiculos: "Génesis 2:9-17, Mateo 7:22, 2 Timoteo 4:1, 1 Pedro 4:5",
    imagenes: [
      "/images/martinpagina.jpg",
      "/images/orlandopagina.jpg",
      "/images/santipagina.jpg",
    ],
    contenido: `
      En este pasaje se presenta al hombre frente a dos realidades: el bien y el mal. Dios coloca delante de él la vida y la muerte, marcando un principio espiritual fundamental.

Sin embargo, la justicia de Cristo no se basa simplemente en juzgar entre lo bueno y lo malo. Su juicio va más profundo: distingue entre lo que está vivo y lo que está muerto espiritualmente.

Las Escrituras muestran que llegará un día en que todos serán juzgados (Mateo 7:22; 2 Timoteo 4:1; 1 Pedro 4:5). En ese momento, la pregunta clave no será solo lo que hicimos, sino si realmente fuimos conocidos por Dios.

Por eso surge una verdad esencial:
¿Somos conocidos por Dios?

Nuestra vida espiritual no depende solo de conocer acerca de Él, sino de tener una relación real con su persona. En ese conocimiento verdadero está la vida.
    `,
  },
  {
    id: "2026-04-11",
    fecha: "Jueves 16 de abril, 2026",
    titulo: "La familia",
    predicador: "En comunión",
    versiculos: "",
    imagenes: [
      "/images/reunionvarones.jpg",
    ],
    contenido: `
      Durante este encuentro nos centramos en la familia, compartiendo diversos testimonios de vida sobre los hijos y el rol de la familia en la sociedad. Reafirmamos los valores cristianos establecidos, fortaleciendo así nuestros vínculos y el crecimiento mutuo en la relación con los demás.
    `,
  },
  {
    id: "2026-04-26",
    fecha: "Domingo 26 de abril, 2026",
    titulo: "2 Corintios 10:1-18",
    predicador: "Ariel Gómez",
    versiculos: "2 Corintios 10:1-18",
    imagenes: [
      "/images/fotoiglesia2.webp",
    ],
    contenido: `
      Contexto

La autoridad de Pablo estaba siendo cuestionada (rebelión) con medidas humanas, y Pablo se defiende con la verdad (las armas espirituales).

1. Humanizar la iglesia

Querer humanizar la iglesia es impedir que Cristo sea conocido. Es volver a poner el velo.

2. Armas de Dios

Las armas poderosas de Dios son espirituales: la oración, la fe, la comunión, la verdad revelada libre de emociones y manipulación.

Y la manifestación de Cristo (fruto) en nuestra vida: amor, gozo, paz, paciencia, etc.

3. Armas del mundo

Las armas del mundo son: las emociones, las medias verdades, las suposiciones, las presunciones, la murmuración.

4. Derribar

Derribar es limpiar, quitar obstáculos.

El razonamiento humano es un obstáculo que se aferra como una fortaleza, la cual hay que destruir y quitar.

5. Argumentos falsos

Destruir argumentos falsos basados en experiencias propias (el yo) y no según Cristo.

6. Obstáculos de arrogancia

La arrogancia es no reconocer la autoridad o cuestionarla (exaltación del yo).

7. Consecuencia

Impide que la gente conozca a Dios porque se encuentra con el hombre, y este no puede salvar a nadie.

La arrogancia, el orgullo, es rebeldía; es la antítesis del amor.

Genera incertidumbre, expresa muerte espiritual.

8. Pensamientos

Capturar los pensamientos rebeldes mediante la palabra revelada.

9. Obediencia

Enseñar a obedecer a Cristo es permitir que esa vida se exprese, que encuentre el lugar para crecer (vivir en el espíritu).

10. Autoridad

La autoridad es para edificar.

11. Arrogancia

Los arrogantes quieren destacarse, buscan ser reconocidos, tenidos en cuenta.

La arrogancia viene de la carne del viejo hombre. Es un principio de caída, es una altivez que destruye el cuerpo, que es la iglesia.

12. Nueva vida

La vida nueva (Cristo en nosotros) tiene otra naturaleza: le agrada ser obediente, se deleita, se goza.

Es un placer estar en la cruz (negarme a mí mismo).

Dice: el placer de estar en la cruz es mi paz.

13. Enfoque correcto

La autocomplacencia y el reconocimiento de los hombres no es importante. Lo más importante es que Dios reconozca a Cristo en mí.
    `,
  },
];

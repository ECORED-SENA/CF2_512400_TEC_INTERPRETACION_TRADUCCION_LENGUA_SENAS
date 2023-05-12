<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Niveles de estudio del español y de la LSC (definiciones)
    .row.bg-c10.mb-4
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img2.svg', style="width: 90px").m-auto
            .col-lg
              p Para entender el idioma español, es necesario conocer a detalle cada una de las partes que lo componen, por ende, se han establecido algunas categorías de análisis que permiten determinar sus características, procesos, elementos y funcionalidades.
              p.mb-0 #[b.txt-c1 A continuación, se exponen los niveles de estudio del idioma español.]
          .row.justify-content-center.mb-2
            .col-lg-10.d-none.d-lg-block
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="9%" y="23%" numero="+")
                  p #[b 1. Fonética]
                  p.mb-0 Es el estudio que se realiza a los sonidos físicos de una lengua desde una perspectiva acústica y fonológica; también el lugar y el modo cómo se produce y su clasificación: fonética articulatoria, fonética acústica y fonética auditiva o perceptiva.
                .tarjeta.color-acento-botones.p-3(x="91%" y="23%" numero="+")
                  p #[b 2. Fonología]
                  p.mb-0 Se encarga de estudiar los sonidos de una lengua y se enfoca en cómo se produce dicho sonido; incluye las sílabas, la entonación, la acentuación, etc.
                .tarjeta.color-acento-botones.p-3(x="9%" y="50%" numero="+")
                  p #[b 3. Morfología]
                  p.mb-0 Esta rama de la lingüística se enfoca en estudiar las normas que rigen una lengua para determinar la estructura interna de las palabras, sus derivaciones y la creación de nuevos términos.
                .tarjeta.color-acento-botones.p-3(x="91%" y="50%" numero="+")
                  p #[b 4. Sintaxis]
                  p.mb-0 Es la parte de la gramática que estudia y determina qué reglas dan orden a las palabras dentro de la oración; la relación que hay entre ellas y las funciones que cumplen.
                .tarjeta.color-acento-botones.p-3(x="9%" y="77%" numero="+")
                  p #[b 5. Lexicografía]
                  p.mb-0 Disciplina aplicada en la lingüística a la producción de diccionarios. Teniendo en cuenta qué principios teóricos y metodológicos, además de los propios, intervienen en dicha elaboración.
                .tarjeta.color-acento-botones.p-3(x="91%" y="77%" numero="+")
                  p #[b 6. Semántica]
                  p.mb-0 El término semántica involucra el estudio del significado de las expresiones lingüísticas en la sintaxis, dando interpretación a las palabras, los símbolos y las representaciones formales.
            .col-md-10.d-block.d-lg-none
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/img3m.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="24%" y="12%" numero="+")
                  p #[b 1. Fonética]
                  p.mb-0 Es el estudio que se realiza a los sonidos físicos de una lengua desde una perspectiva acústica y fonológica; también el lugar y el modo cómo se produce y su clasificación: fonética articulatoria, fonética acústica y fonética auditiva o perceptiva.
                .tarjeta.color-acento-botones.p-3(x="75%" y="12%" numero="+")
                  p #[b 2. Fonología]
                  p.mb-0 Se encarga de estudiar los sonidos de una lengua y se enfoca en cómo se produce dicho sonido; incluye las sílabas, la entonación, la acentuación, etc.
                .tarjeta.color-acento-botones.p-3(x="24%" y="29%" numero="+")
                  p #[b 3. Morfología]
                  p.mb-0 Esta rama de la lingüística se enfoca en estudiar las normas que rigen una lengua para determinar la estructura interna de las palabras, sus derivaciones y la creación de nuevos términos.
                .tarjeta.color-acento-botones.p-3(x="75%" y="29%" numero="+")
                  p #[b 4. Sintaxis]
                  p.mb-0 Es la parte de la gramática que estudia y determina qué reglas dan orden a las palabras dentro de la oración; la relación que hay entre ellas y las funciones que cumplen.
                .tarjeta.color-acento-botones.p-3(x="24%" y="45%" numero="+")
                  p #[b 5. Lexicografía]
                  p.mb-0 Disciplina aplicada en la lingüística a la producción de diccionarios. Teniendo en cuenta qué principios teóricos y metodológicos, además de los propios, intervienen en dicha elaboración.
                .tarjeta.color-acento-botones.p-3(x="75%" y="45%" numero="+")
                  p #[b 6. Semántica]
                  p.mb-0 El término semántica involucra el estudio del significado de las expresiones lingüísticas en la sintaxis, dando interpretación a las palabras, los símbolos y las representaciones formales.
    p.mb-4 Así como existen niveles de estudio para el español, para el lenguaje de señas hay elementos y características particulares que cada área de estudio contempla; a continuación, se describen en detalle cada uno de estos niveles.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ARhIv-3odAU" title="Niveles de estudio de la LSC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Niveles de estudio de la LSC.

    .row
      .col-lg-9.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          p(numero="1" titulo="Fonética de la lengua de señas") Hay una marcada diferencia entre las lenguas orales y las lenguas de señas evidenciadas en sus orígenes y en la manera de percibirlas. En una lengua oral intervienen diferentes sistemas del habla que emiten la variedad de sonidos conocidos como palabras; mientras que en una lengua de señas esa coordinación se nota en el movimiento de las manos, los brazos, los movimientos del torso, la gestualidad facial, movimientos de la cabeza, entre otros, para producir ese conjunto de gestos identificables como señas. Los receptores que intervienen en la comprensión del lenguaje varían. Para una lengua oral, el sistema auditivo identifica la variedad de las ondas sonoras y en una lengua de señas se perciben a través del sistema visual que identifica las ondas de luz.
          p(numero="2" titulo="Fonología de la lengua de señas") Cuando se habla de fonología enfocada en la lengua de señas, se hace desde el enfoque en cómo se producen las señas: configuración manual, ubicación, orientación, movimiento y rasgos no manuales; aunque hay autores que hablan de más parámetros como el uso de una o las dos manos, el punto de contacto, la acentuación de la seña, duración y la frecuencia de repetición de ella.
          p(numero="3" titulo="Morfología de la lengua de señas") Teniendo en cuenta el papel que cumple la morfología en las lenguas habladas, se puede entender cómo esta rama lingüística tiene un rol que cumplir en la lengua de señas. La lengua de señas, al contener una estructura gramatical, se puede determinar en ella qué normas la rigen, su transformación a través del tiempo y los nuevos neologismos que surgen a medida que la comunidad sorda va ganando terreno en las diferentes disciplinas laborales, educativas, etc.
          p(numero="4" titulo="Sintaxis de la lengua de señas") La sintaxis en la gramática de la lengua de señas se refiere al análisis de la estructura interna de las palabras en la oración, también han de considerarse aspectos fundamentales como el uso del espacio, los contrastes espaciales y los marcadores no manuales que entre ellos figuran los movimientos del cuerpo y las expresiones faciales.
          p(numero="5" titulo="Lexicografía de la lengua de señas") En Colombia la disciplina de la lengua de señas ha sido poco explorada, pues son pocas las instituciones que se han dedicado a la creación de diccionarios. Entendiendo lo complejo que es esta tarea ya que es una lengua ágrafa y que para su producción deben articularse tanto la comunidad sorda como entidades académicas especializadas en esta disciplina.#[br] #[br]En Colombia,  el  Instituto Nacional para Sordos (Insor) ha creado un diccionario de esta lengua; por su parte la Federación Nacional de Sordos de Colombia (Fenascol), elaboró un compendio de niveles básicos y avanzados de vocabulario de Lengua de Señas Colombiana; la Fundación Árbol de Vida se ha dedicado a desarrollar un vocabulario para el área académica en formato de video; y, por último, el Instituto de Audiología Integral creó el #[em Diccionario de Visagr].
          p(numero="6" titulo="Semántica de la lengua de señas") En la lengua de señas se requiere comprender la estructura de las configuraciones manuales y gestuales, la razón de por qué una determinada seña se realiza de esa manera, qué variaciones tiene y cómo se ha modificado con el paso del tiempo. También es importante comprender la variación de usos y significados contextuales en la que una seña se pudiera encontrar.
      .col-lg-3
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 280px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

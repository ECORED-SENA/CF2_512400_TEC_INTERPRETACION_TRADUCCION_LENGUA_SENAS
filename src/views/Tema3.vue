<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Desarrollo de habilidades comunicativas
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Las habilidades comunicativas hacen referencia al conjunto de elementos lingüísticos que adquiere el ser humano durante el desarrollo de su vida y que le permiten hacer parte de una sociedad de manera eficiente: hablar, leer, escribir, moverse, son habilidades comunicativas que se utilizan a diario para expresar ideas, pensamientos, reflexiones etc. y que permiten establecer relaciones con el otro.
    Separador
    #t_3_1
    .titulo-segundo.color-secundario
      h2 3.1 Conceptos
    .row.align-items-center.mb-4
      .col-lg-4.mb-4
        p La competencia comunicativa es la capacidad que tiene un individuo para comportarse dentro de una comunidad de habla, lo que implica acatar las reglas gramaticales, otros niveles de la descripción lingüística (léxico, fonética, semántica) y las normas de uso de la lengua, relacionadas con el contexto sociohistórico y cultural en el que tiene lugar la comunicación.
        p.mb-0 #[b.txt-c1 Hymes (1971), define a la competencia comunicativa como la capacidad de:]
      .col-lg-8
        .row
          .col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img2.png', style="width: 210px").m-auto
          .col-lg.px-0
            .bloque-texto-c.color-primario.p-4.h-100
              i.fas.fa-quote-right
              h2.mb-2 Saber cuándo hablar, cuándo no, y de qué hablar, con quién, cuándo, dónde, en qué forma.
              span Hymes (1971).
    p.mb-5 La competencia comunicativa, además de ser la capacidad de pronunciar enunciados gramaticalmente correctos, es la habilidad de hacerlo de tal forma que socialmente sean apropiados. Para ello, propone cuatro criterios que permiten la descripción de los diversos modos de comunicación, y que, al aplicarlos a una manifestación comunicativa específica, establece si esta es:
    .row.bg-c11.mb-5
      .col-12
        .px-5.pt-5
          .row
            .col-12.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="")
            .col-12.d-block.d-lg-none
              figure
                img(src='@/assets/curso/tema3/img1m.svg', style="")
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b.txt-c1 De acuerdo con la Ley 324 de 1996], por medio de la cual se crean algunas normas a favor de la población sorda, se aclara que, las habilidades comunicativas en lengua de señas del intérprete para sordos, se dan bajo amplios conocimientos de la Lengua Manual Colombiana que le permiten realizar la interpretación simultánea del español hablado en la Lengua Manual y viceversa. Entendiendo que también son intérpretes para sordos aquellas personas que realicen la interpretación simultánea del castellano hablado a otras formas de comunicación de la población sorda, distintas a la Lengua Manual, y viceversa. También, que ese auspicio estatal no excluye el apoyo estatal a la investigación, la enseñanza y la difusión de otras formas de comunicación de la población sorda, como la oralidad.
    .row.align-items-center.mb-4
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width:100px").m-auto
      .col
        p.mb-0 Además, después de que se sancionó la Ley 982 de 2005, se reconoció la LSC como lengua natural de los sordos, y la interpretación de Lengua de Señas Colombiana como un servicio inherente a los derechos de acceso a la información de las personas sordas. Esto ha llevado a la necesidad de construir diferentes propuestas en torno a programas de formación de intérpretes, e instrumentos de cualificación, evaluación y acreditación de estos.
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p.mb-0 La #[b.txt-c1 Ley 324 de 1996] declara que:
        .bloque-texto-d.color-secundario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p La comunicación es un proceso social en el cual es necesario como mínimo que haya dos personas en situación de interrelación de ideas o mensajes, un emisor o locutor y un receptor. Para que la comunicación se produzca es necesario que exista entre los interlocutores motivación para transmitir y recibir. Es preciso que haya intervenido explícita o implícitamente, un acuerdo entre los interlocutores respecto de la utilización de un código que permita la organización de los mensajes transmitidos tomando un medio o canal de comunicación determinado.
            i.fas.fa-quote-right
          .bloque-texto-d__autor
            .h5.mb-0 Ley 324 de 1996.
        p.mb-0 A partir de la Ley 324 de 1996 se deja entrever que la comunicación, parte de un proceso de cognición que involucra un conjunto de operaciones mentales o procesos como la transmisión, el análisis, la organización, la transformación, la elaboración, el archivo, la recuperación y el uso de información contenida en señales de entrada y salida de diferente naturaleza.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img4.png', style="width: 480px").m-auto
    p.mb-4 Es así como el lenguaje y cerebro, guardan una relación funcional incuestionable. El pensamiento se expresa mediante el lenguaje, la capacidad de expresar ideas, emociones y sentimientos con las palabras es una realidad que diferencia al ser humano de los animales. A continuación, se exponen la tipificación, funciones y niveles del lenguaje.
    .row.bg-c10.mb-5
      .col-12
        .p-5
          .row
            .col-12.d-none.d-lg-block
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/img3.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="17%" numero="+")
                  p.mb-1 #[b Mímico]
                  p.mb-0 Nombrado también gesticular, funciona por medio de señas.
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="26.4%" numero="+")
                  p.mb-1 #[b Gutural]
                  p.mb-0 Llamado también “onomatopéyico” o “sonidos desarticulados” que significa imitación de sonidos.
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="35.5%" numero="+")
                  p.mb-1 #[b Fónico escrito]
                  p.mb-0 Código que conoce cada hablante y utiliza cuando lo necesita.
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="58.7%" numero="+")
                  p.mb-1 #[b Vulgar]
                  p.mb-0 Utilizado por grupos de baja escolaridad, presenta errores idiomáticos, expresiones fuertes, pobreza lexical, oraciones breves y sentido incompleto.
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="68%" numero="+")
                  p.mb-1 #[b Coloquial]
                  p.mb-0 Empleado de manera cotidiana y familiar, es espontáneo, además contiene la presencia de un matiz afectivo y de cercanía.
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="77.4%" numero="+")
                  p.mb-1 #[b Convencional o estándar]
                  p.mb-0 Intercambio de una comunidad lingüística, formal y su codificación es rígida.
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="86.7%" numero="+")
                  p.mb-1 #[b Técnico]
                  p.mb-0 Convenciones lingüísticas propias de cada profesión, disciplina o campo de estudio.
                .tarjeta.color-acento-botones.p-3(x="18.2%" y="96%" numero="+")
                  p.mb-1 #[b Formal]
                  p.mb-0 Indica distancia entre los interlocutores y se caracteriza por la ausencia de familiaridad en el trato.
                .tarjeta.color-acento-botones.p-3(x="82%" y="18.5%" numero="+")
                  p.mb-1 #[b Representativa]
                  p.mb-0 Función específicamente humana que se utiliza para hacer afirmaciones o plantear preguntas.
                .tarjeta.color-acento-botones.p-3(x="82%" y="34%" numero="+")
                  p.mb-1 #[b Conativa]
                  p.mb-0 El hablante trata de hablar sobre el oyente de manera influyente sobre su conducta o llamando la atención.
                .tarjeta.color-acento-botones.p-3(x="82%" y="50%" numero="+")
                  p.mb-1 #[b Emotiva]
                  p.mb-0 O expresiva se utiliza para expresar sentimientos o emociones.
                .tarjeta.color-acento-botones.p-3(x="82%" y="65.5%" numero="+")
                  p.mb-1 #[b Poética]
                  p.mb-0 Se utiliza para limar la atención del receptor sobre el mensaje y crear belleza con las palabras.
                .tarjeta.color-acento-botones.p-3(x="82%" y="81%" numero="+")
                  p.mb-1 #[b Fática]
                  p.mb-0 Se utiliza para asegurar que el circuito de la comunicación está intacto.
                .tarjeta.color-acento-botones.p-3(x="82%" y="96%" numero="+")
                  p.mb-1 #[b Metalingüística]
                  p.mb-0 Actúa cuando utilizamos el lenguaje, sus códigos, reglas y componentes.
          .row
            .col-12.d-block.d-lg-none
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/img3m.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="44%" y="17.6%" numero="+")
                  p.mb-1 #[b Mímico]
                  p.mb-0 Nombrado también gesticular, funciona por medio de señas.
                .tarjeta.color-acento-botones.p-3(x="44%" y="23%" numero="+")
                  p.mb-1 #[b Gutural]
                  p.mb-0 Llamado también “onomatopéyico” o “sonidos desarticulados” que significa imitación de sonidos.
                .tarjeta.color-acento-botones.p-3(x="44%" y="28%" numero="+")
                  p.mb-1 #[b Fónico escrito]
                  p.mb-0 Código que conoce cada hablante y utiliza cuando lo necesita.
                .tarjeta.color-acento-botones.p-3(x="44%" y="41%" numero="+")
                  p.mb-1 #[b Vulgar]
                  p.mb-0 Utilizado por grupos de baja escolaridad, presenta errores idiomáticos, expresiones fuertes, pobreza lexical, oraciones breves y sentido incompleto.
                .tarjeta.color-acento-botones.p-3(x="44%" y="46%" numero="+")
                  p.mb-1 #[b Coloquial]
                  p.mb-0 Empleado de manera cotidiana y familiar, es espontáneo, además contiene la presencia de un matiz afectivo y de cercanía.
                .tarjeta.color-acento-botones.p-3(x="44%" y="51.4%" numero="+")
                  p.mb-1 #[b Convencional o estándar]
                  p.mb-0 Intercambio de una comunidad lingüística, formal y su codificación es rígida.
                .tarjeta.color-acento-botones.p-3(x="44%" y="56.5%" numero="+")
                  p.mb-1 #[b Técnico]
                  p.mb-0 Convenciones lingüísticas propias de cada profesión, disciplina o campo de estudio.
                .tarjeta.color-acento-botones.p-3(x="44%" y="62%" numero="+")
                  p.mb-1 #[b Formal]
                  p.mb-0 Indica distancia entre los interlocutores y se caracteriza por la ausencia de familiaridad en el trato.
                .tarjeta.color-acento-botones.p-3(x="56%" y="17.6%" numero="+")
                  p.mb-1 #[b Representativa]
                  p.mb-0 Función específicamente humana que se utiliza para hacer afirmaciones o plantear preguntas.
                .tarjeta.color-acento-botones.p-3(x="56%" y="28%" numero="+")
                  p.mb-1 #[b Conativa]
                  p.mb-0 El hablante trata de hablar sobre el oyente de manera influyente sobre su conducta o llamando la atención.
                .tarjeta.color-acento-botones.p-3(x="56%" y="41%" numero="+")
                  p.mb-1 #[b Emotiva]
                  p.mb-0 O expresiva se utiliza para expresar sentimientos o emociones.
                .tarjeta.color-acento-botones.p-3(x="56%" y="46%" numero="+")
                  p.mb-1 #[b Poética]
                  p.mb-0 Se utiliza para limar la atención del receptor sobre el mensaje y crear belleza con las palabras.
                .tarjeta.color-acento-botones.p-3(x="56%" y="56.5%" numero="+")
                  p.mb-1 #[b Fática]
                  p.mb-0 Se utiliza para asegurar que el circuito de la comunicación está intacto.
                .tarjeta.color-acento-botones.p-3(x="56%" y="62%" numero="+")
                  p.mb-1 #[b Metalingüística]
                  p.mb-0 Actúa cuando utilizamos el lenguaje, sus códigos, reglas y componentes.
    p Pero, entonces, #[b.txt-c1 ¿qué es la lengua?]
    p Es un sistema de signos lingüísticos, conformado en la interacción comunicativa. De esta manera, se encuentra la compresión de la comunicación como producción, circulación y apropiación de sentidos.
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img5.png', style="width: 600px").m-auto
      .col-lg-6
        p Para la lengua de señas, desde la Ley 324 de 1996, se define la Lengua Manual Colombiana como la que se expresa en la modalidad visomanual, el medio de expresión de su código es el visual más que el auditivo. Como cualquier otra lengua tiene su propio vocabulario, expresiones idiomáticas, gramáticas, sintaxis diferentes al español.
        .cajon.color-primario.p-4
          p.mb-0 Los elementos de esta lengua (las señas individuales) son la configuración, la posición y la orientación de las manos en relación con el cuerpo y con el individuo, la lengua también utiliza el espacio, dirección y velocidad de movimientos, así como la expresión facial para ayudar a transmitir el significado del mensaje, esta es una lengua visogestual.
    p La Lengua de Señas Colombiana (LSC) no solo es una lengua polimorfémica, sino también monosilábica. Barreto (2015), explica que la LSC tiene segmentos homologables a los consonánticos y a los vocálicos, llamados segmentos posturales y segmentos de transformación llamados así por Johnson y Liddell (2011). La lengua de señas tiene segmentos similares, aunque no idénticos a los consonánticos y vocálicos que podrían ser homologables con una lengua hablada.
    .row.bg-c12
      .col-12
        .px-5
          p #[b.txt-c1 Aquí se ingresa al tema del habla:]
          .row.align-items-center.mb-4
            .col-lg-7.mb-4.mb-lg-0
              .cajon.color-secundario.p-4.mb-4
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema3/img4.svg', style="width: 80px").m-auto
                  .col
                    h3 Habla
                    p.mb-0 Acto individual por medio del cual una persona hace uso de una lengua para comunicarse, elaborando un mensaje según las reglas y convenciones gramaticales que comparte con una comunidad lingüística determinada.
              p.mb-0 Para Giraldo (2016), las palabras, como manifestación de la actividad simbólica del ser humano, nacen de la voluntad de representar las cosas, las ideas y los hechos mediante sonidos y signos que son sus representaciones. Cualquiera que sea la interpretación de la lengua: metafísica, biológica o lingüística, siempre se inscribe en un proceso creativo del lenguaje y, por consiguiente, neológico.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema3/img6.png', style="width: 600px").m-auto
          p La palabra, el gesto y todas las formas mediante las cuales el hombre ha intentado siempre compartir signos comunes, evocar sentidos, relacionar realidad y representación, mundo y expresión, es el acercamiento a un signo lingüístico que se convierte en una unidad que puede ser percibida por el ser humano mediante los sentidos y que permite representar completamente un evento comunicativo en sus propios términos. Es una construcción social que funciona dentro de un sistema lingüístico y que pone un elemento en lugar de otro.
          p.mb-5 #[b.txt-c1 El campo de estudio abarca diferentes disciplinas, las cuales se podrán identificar revisando el material que se propone a continuación:]
          .row.justify-content-center.mb-5
            .col-lg-10.d-none.d-lg-block
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/img5.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="20.5%" y="14%" numero="+")
                  p.mb-1 #[b Filosofía]
                  p.mb-0 Son diversas áreas de esta disciplina que se ven involucradas en el desarrollo de las ciencias cognitivas: la filosofía de la mente, de la ciencia y del lenguaje; la lógica formal y filosófica; la metafísica y la epistemología.
                .tarjeta.color-acento-botones.p-3(x="20.5%" y="39%" numero="+")
                  p.mb-1 #[b Psicología]
                  p.mb-0 Como ciencia de la representación y el procesamiento de la información de los seres vivos, forma parte de la psicología cognitiva.
                .tarjeta.color-acento-botones.p-3(x="20.5%" y="64%" numero="+")
                  p.mb-1 #[b Ciencia cognitiva]
                  p.mb-0 Entre las subdivisiones de la psicología que tienen implicaciones directas con la ciencia cognitiva están: psicología cognitiva que se ocupa en las representaciones y el procesamiento de la información; psicología evolutiva, que se ocupa del desarrollo del proceso cognitiva; psicología social que tiene que ver cómo los individuos entienden las mentes y las emociones del otro.
                .tarjeta.color-acento-botones.p-3(x="20.5%" y="89%" numero="+")
                  p.mb-1 #[b Inteligencia artificial]
                  p.mb-0 En la cual existen dos versiones complementarias que tienen acercamientos importantes con la cognición como ciencia empírica que se interesa por la simulación computacional de la inteligencia humana.
                .tarjeta.color-acento-botones.p-3(x="79%" y="14%" numero="+")
                  p.mb-1 #[b Lingüística y lenguaje]
                  p.mb-0 Son disciplinas consideradas piedra angular de la ciencia cognitiva, no solo desde el estudio de la estructura, el significado y el uso del lenguaje, sino de este en sí mismo como vehículo del pensamiento.
                .tarjeta.color-acento-botones.p-3(x="79%" y="39%" numero="+")
                  p.mb-1 #[b Neurociencia]
                  p.mb-0 O neurolingüística, reunión de la biología y la lingüística en un esfuerzo por discernir los procesos del orden neurofisiológico que están en la base del lenguaje.
                .tarjeta.color-acento-botones.p-3(x="79%" y="64%" numero="+")
                  p.mb-1 #[b Psicolingüística]
                  p.mb-0 Trata de esclarecer los procesos de orden psíquico que median la producción lingüística.
                .tarjeta.color-acento-botones.p-3(x="79%" y="89%" numero="+")
                  p.mb-1 #[b Sociolingüística]
                  p.mb-0 Examina la relación entre lenguaje y sociedad.
            .col-12.d-block.d-lg-none
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/img5m.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="4%" y="59%" numero="+")
                  p.mb-1 #[b Filosofía]
                  p.mb-0 Son diversas áreas de esta disciplina que se ven involucradas en el desarrollo de las ciencias cognitivas: la filosofía de la mente, de la ciencia y del lenguaje; la lógica formal y filosófica; la metafísica y la epistemología.
                .tarjeta.color-acento-botones.p-3(x="4%" y="71%" numero="+")
                  p.mb-1 #[b Psicología]
                  p.mb-0 Como ciencia de la representación y el procesamiento de la información de los seres vivos, forma parte de la psicología cognitiva.
                .tarjeta.color-acento-botones.p-3(x="4%" y="83%" numero="+")
                  p.mb-1 #[b Ciencia cognitiva]
                  p.mb-0 Entre las subdivisiones de la psicología que tienen implicaciones directas con la ciencia cognitiva están: psicología cognitiva que se ocupa en las representaciones y el procesamiento de la información; psicología evolutiva, que se ocupa del desarrollo del proceso cognitiva; psicología social que tiene que ver cómo los individuos entienden las mentes y las emociones del otro.
                .tarjeta.color-acento-botones.p-3(x="4%" y="95%" numero="+")
                  p.mb-1 #[b Inteligencia artificial]
                  p.mb-0 En la cual existen dos versiones complementarias que tienen acercamientos importantes con la cognición como ciencia empírica que se interesa por la simulación computacional de la inteligencia humana.
                .tarjeta.color-acento-botones.p-3(x="96%" y="59%" numero="+")
                  p.mb-1 #[b Lingüística y lenguaje]
                  p.mb-0 Son disciplinas consideradas piedra angular de la ciencia cognitiva, no solo desde el estudio de la estructura, el significado y el uso del lenguaje, sino de este en sí mismo como vehículo del pensamiento.
                .tarjeta.color-acento-botones.p-3(x="96%" y="71%" numero="+")
                  p.mb-1 #[b Neurociencia]
                  p.mb-0 O neurolingüística, reunión de la biología y la lingüística en un esfuerzo por discernir los procesos del orden neurofisiológico que están en la base del lenguaje.
                .tarjeta.color-acento-botones.p-3(x="96%" y="83%" numero="+")
                  p.mb-1 #[b Psicolingüística]
                  p.mb-0 Trata de esclarecer los procesos de orden psíquico que median la producción lingüística.
                .tarjeta.color-acento-botones.p-3(x="96%" y="95%" numero="+")
                  p.mb-1 #[b Sociolingüística]
                  p.mb-0 Examina la relación entre lenguaje y sociedad.
    Separador
    #t_3_2
    .titulo-segundo.color-secundario
      h2 3.2 Técnicas de comunicación en la expresión del discurso
    p.mb-3.mb-lg-5 De acuerdo con Aguilar y Vargas (2010), la clasificación de los modos de asumir las relaciones interpersonales se realiza a partir de la respuesta del interlocutor, de la siguiente manera:
    figure.d-block.d-lg-none.mb-4
      img(src='@/assets/curso/tema3/img7m.svg', style="width: 300px").m-auto
    .row.mb-5
      .col-lg-11.position-relative
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 1]. Modos de asumir las relaciones interpersonales
        .avatar1
          figure
            img(src="@/assets/curso/tema3/img7.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first1.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img8.svg", alt="alt").img100
            .col
              p #[b La huida ansiosa]
              p.mb-0 Respuesta en la que las personas se comportan de manera pasiva, no logran sus objetivos, permiten que violen sus derechos y que los demás se aprovechen de ellos, dejan que los demás decidan por ellos y, por lo tanto, se siente frustrados, infelices, heridos y ansiosos.
        .crd.crd--avatarHorizontal.crd--second1.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img9.svg", alt="alt").img100
            .col
              p #[b La respuesta asertiva]
              p.mb-0 Los hablantes protegen sus derechos y respetan los de los demás, logran sus objetivos sin detrimento de los otros. Se muestran sociables y emocionalmente expresivos, deciden por sí mismos, por lo que se sienten bien consigo mismos y tienen confianza.
        .crd.crd--avatarHorizontal.crd--third1.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img10.svg", alt="alt").img100
            .col
              p #[b La respuesta agresiva]
              p.mb-0 Los hablantes violan el derecho de los demás, logran sus objetivos a costa de los demás, son explosivos y se meten en las decisiones de los demás, por lo tanto, son beligerantes, humillan y desprecian a los demás.
    p.mb-5.text-center Se debe tener siempre presente que:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop' style="width:125px")
          .tarjeta.color-primario
            .p-4
              p.mb-0 Comunicar tiene como finalidad transmitir un mensaje específico, que será recibido por un interlocutor de quien se espera reaccione de determinada manera: reflexionando, riendo, respondiendo, acercándose. Aunque muchas veces la respuesta no es visible, porque puede expresarse en un pensamiento o un sentimiento o puede ser diferente de la que se esperaba.
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img11b.svg' alt='AvatarTop' style="width:125px")
          .tarjeta.color-primario
            .p-4
              p.mb-0 Una comunicación asertiva tiene resultados adecuados, porque facilita y mejora las relaciones, ya que permite compartir sentimientos, pensamientos y creencias, lo que conlleva evidentemente a contactar con el otro. Para lograrlo, se necesita estar atento a las diversas manifestaciones del otro. Cuando esto no sucede, se habla y no se comunica y los resultados son superficiales. Se debe comunicar con palabras, tono de voz, el silencio, la mirada, la postura del cuerpo, las caricias, etc.
      .col-md-8.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img11c.svg' alt='AvatarTop' style="width:125px")
          .tarjeta.color-primario
            .p-4
              p.mb-0 La comunicación puede ser verbal (lo que se pronuncia) y corporal o no verbal (cómo se pronuncia). Por lo que muchas veces, de manera verbal se dice una cosa, pero de manera corporal se dice otra. Y con frecuencia quien suele enviar un doble mensaje no percibe que su conducta aumenta o provoca reacciones diversas. Y, obviamente, quien lo recibe capta los dos y no sabe a cuál hacerle caso, por lo que la interpretación del mensaje se dificulta.
    h4.t1 Habilidades y barreras en la comunicación asertiva
    p La comunicación asertiva como habilidad es una forma de expresión consciente, mediante la cual se manifiestan las ideas, deseos, opiniones, sentimientos o derechos de forma congruente, clara, directa, equilibrada, honesta y respetuosa, sin la intención de herir o perjudicar, y actuando desde una perspectiva de autoconfianza.
    p.mb-4 #[b.txt-c1 Conozca a continuación algunas de las principales habilidades que permiten la comunicación asertiva:]
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          p(numero="1" titulo="Reflexión") Cuando la persona emisora estructura el contenido del mensaje adecuándose a las circunstancias concretas del receptor, al entorno y buscando el canal de transmisión más adecuado.
          p(numero="2" titulo="Habla y escritura") Habilidades exclusivas de la persona emisora, qué mensaje desea transmitir de forma oral o escrita.
          p(numero="3" titulo="Intereses") Habilidad de la persona emisora y receptora. Debe haber interés por comunicar de la persona emisora e interés de escuchar de la persona receptora.
          p(numero="4" titulo="Nivel de conocimientos") Tanto la persona emisora y la persona receptora, deben tener unos conocimientos similares para producir el mensaje y que este sea entendido.
          p(numero="5" titulo="Sistema sociocultural") Si la persona emisora y la persona receptora pertenecen a grupos sociales y culturas muy diferentes, puede haber complicaciones para entender el mensaje.
          p(numero="6" titulo="Personalidad") Las características personales son importantes en ambos extremos. La persona emisora y la persona receptora deben conocerse para ubicar el mensaje en su sentido exacto.
          p(numero="7" titulo="Lectura y escucha") Habilidades propias de la persona receptora para poder asimilar y comprender el mensaje, bien sea escrito u oral.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img12.svg', style="width: 450px").m-auto
    p Existen múltiples barreras que pueden presentarse en la comunicación; las siguientes son algunas de ellas:
    .row.bg-c13
      .col-12
        .p-5
          .row
            .col-12
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/img13.svg', alt='')
                .tarjeta.color-acento-botones.p-3(x="9%" y="74%" numero="+")
                  p.mb-1 #[b La filtración]
                  p.mb-0 Hace referencia a la manipulación de la información para que esta sea vista de manera favorable por el receptor.
                .tarjeta.color-acento-botones.p-3(x="15%" y="46%" numero="+")
                  p.mb-1 #[b La percepción selectiva]
                  p.mb-0 Surge cuando los receptores, durante el proceso de comunicación, reciben el mensaje de manera selectiva y lo decodifican.
                .tarjeta.color-acento-botones.p-3(x="26%" y="23%" numero="+")
                  p.mb-1 #[b La defensa]
                  p.mb-0 Hace referencia a la acción - reacción; el sentimiento de amenaza hacia el individuo produce un resultado.
                .tarjeta.color-acento-botones.p-3(x="39.5%" y="10%" numero="+")
                  p.mb-1 #[b El lenguaje]
                  p.mb-0 “El significado de las palabras no está en la palabra, está en nosotros” (de acuerdo con: la edad, la educación y los antecedentes culturales).
                .tarjeta.color-acento-botones.p-3(x="50.5%" y="7%" numero="+")
                  p.mb-1 #[b La deformación]
                  p.mb-0 Es un problema semántico influenciado por la forma de pensar o la crianza.
                .tarjeta.color-acento-botones.p-3(x="61.5%" y="10%" numero="+")
                  p.mb-1 #[b La sobrecarga]
                  p.mb-0 Tiene que ver con recibir demasiada información.
                .tarjeta.color-acento-botones.p-3(x="74.5%" y="23%" numero="+")
                  p.mb-1 #[b La sincronización]
                  p.mb-0 Coordinación entre el tiempo y la información.
                .tarjeta.color-acento-botones.p-3(x="84.8%" y="45%" numero="+")
                  p.mb-1 #[b Falta de aceptación]
                  p.mb-0 Negación.
                .tarjeta.color-acento-botones.p-3(x="91%" y="74%" numero="+")
                  p.mb-1 #[b El cortocircuito]
                  p.mb-0 Ocurre cuando se salta algún nivel estructural de la organización.
    Separador
    #t_3_3
    .titulo-segundo.color-secundario
      h2 3.3 Métodos nemotécnicos, de atención y concentración
    p.mb-4 Un método o regla mnemotécnica es un sistema sencillo utilizado para recordar una secuencia de datos, nombres, números, y en general para recordar listas de datos relacionando palabras, imágenes, etc.
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row.mb-4
          .col-12.bg-c6
            .p-4
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img15.svg', style="width: 60px").m-auto
                .col
                  p.mb-0 Memorizar un mismo material para quien piensa en conceptos, es decir, con ayuda del análisis abstracto, es distinto, aunque semejante al memorizar de quien lo hace en complejos (mediante relaciones concretas).
        p.mb-0 Mediante una revisión en diferentes teorías sobre la estructura y la funcionalidad de la memoria, Lieury (1985), propone una clasificación de los procedimientos mnemotécnicos en tres grandes categorías: códigos, índices de recuerdo y planes de recuerdo. A continuación, se expone cada uno de ellos.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema3/img7.png', style="width: 650px").m-auto
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img16.svg', style="width: 20px").m-auto
      .col
        h4.mb-0 Categoría códigos
    p.mb-5 Esta categoría involucra la retención de la información y la agrupación con el objetivo de disminuir el número de elementos a retener. Comprende diferentes formas de utilización de códigos, así:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-4.mb-4
        .row.m-1
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema3/img8.png', style="width: 650px").m-auto
          .col-12.bg-c14
            .p-4
              h4.text-center Código verbal
              p.text-center Se refiere a la integración de sílabas (en una sigla o una palabra), o a la integración misma de palabras.
      .col-md-8.col-lg-4.mb-4
        .row.m-1
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema3/img9.png', style="width: 650px").m-auto
          .col-12.bg-c6
            .p-4
              h4.text-center Código de imágenes
              p.text-center Los dibujos de objetos son más fáciles de recordar, puesto que sufren una doble codificación.
      .col-md-8.col-lg-4
        .row.m-1
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema3/img10.png', style="width: 650px").m-auto
          .col-12.bg-c14
            .p-4
              h4.text-center Código de cifra-letra
              p.text-center Consiste en transformar las cifras de un número (p. ej. número telefónico) en letras para formar una o varias palabras.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema3/img16.svg', style="width: 20px").m-auto
      .col
        h4.mb-0 Categoría índice de recuerdo o recuperación
    p.mb-4 En esta categoría, las combinaciones de información permiten recobrar un conjunto estructurado ya almacenado en la memoria. La memoria a corto plazo almacena información morfológica, fonológica y sintáctica, mientras que la memoria a largo plazo almacena la información de tipo semántico.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .cajon.color-primario.p-4
          p.mb-0 La dimensión fonética juega un papel importante en la memoria a corto plazo, mientras que la dimensión semántica en la memoria a largo plazo, ya que aquí la codificación suele ser más completa. Desde el punto de vista funcional, es difícil diferenciar estos dos tipos de memoria, debido a que en la memoria a largo plazo se puede almacenar información de estructura superficial (un texto oral dicho por otro, la letra de una canción, etc.) igual que en la memoria a corto plazo. Inversamente, se puede suponer que hay informaciones semánticas disponibles en la memoria a corto plazo o por lo menos por un breve espacio de tiempo.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema3/img11.png', style="width: 650px").m-auto
    h4.t1 Categoría planes de recuerdo
    p.mb-5 Se refiere a la creación de vínculos entre los elementos a recordar cuando existe gran cantidad de información y se clasifican en:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
      .row(titulo="Planes basados en la imagen").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 En informaciones concretas y simultáneas de elementos generales se elabora una representación organizada de estos, por medio de un esquema. Este método permite aprender una lista de elementos en orden.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img17.svg', style="width: 250px").m-auto
      .row(titulo="Planes basados en el lenguaje").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 En la memorización de listas de palabras, o las principales palabras de un texto, se pueden formar palabras, frases o historias uniendo las letras iniciales de tales listas. La eficacia de estos planes basados en el lenguaje depende en último término, del grado de conexión semántica.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img18.svg', style="width: 250px").m-auto
      .row(titulo="Planes basados en la lógica").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 En el curso de cualquier aprendizaje se utilizan operaciones lógicas. El adulto usa, a menudo, tres tipos de organización lógica: categorización, clasificación jerárquica y matrices.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img19.svg', style="width: 250px").m-auto
      .row(titulo="Planes basados en el código cifra-letra").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 En la memorización de palabras, frases y secuencias grandes de números se emplean fórmulas derivadas de la codificación de secuencias de cifras. Tablas de recuerdo: en la memorización de listas de palabras y de números, los índices de recuerdo numéricos permiten añadir palabras nuevas y codificar su posición numérica en la lista.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img20.svg', style="width: 250px").m-auto
    p.mb-5 En concreto, la clave de la memorización es la organización de la información utilizando estrategias mnemotécnicas de codificación, de índices, de planes de recuerdo, que permiten retener la información por un tiempo prolongado.
    h4.t1 Métodos de atención y concentración
    p.mb-4 El concepto metacognición hace referencia a la capacidad del ser humano para evaluar su propio proceso de aprendizaje con el propósito de hacerlo más consciente y eficiente, lo que hoy se resume con el lema de aprender a aprender. Ayala y Yuste (2005), consideran que actuar de forma metacognitiva, repercutirá en la capacidad para planificar, seleccionar estrategias y evaluar proceso de aprendizaje propio en diferentes contextos.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img12.png', style="width: 550px").m-auto
      .col-lg-6
        .row.mb-4
          .col-12.bg-c6
            .p-4
              .row
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img15.svg', style="width: 60px").m-auto
                .col
                  p.mb-0 Existen diferentes tipos de atención que van desde procesos internos hasta aquellos externos que suceden alrededor; otros tienen que ver con aquellos voluntarios o aquellos que se realizan en forma involuntaria, por ejemplo, como cuando se reacciona sin pensarlo frente a un ruido fuerte o una impresión visual no esperada.
        p.mb-0 El proceso de atención moviliza una gran cantidad de recursos cognitivos que llevan a un aprendizaje a partir de los objetivos y forma de aprender. Para estimular la atención y la concentración se debe activar inicialmente el estímulo, además de considerar todos los elementos físicos y también emocionales que pueden estar interviniendo en el momento específico. El proceso de atención moviliza una gran cantidad de recursos cognitivos que llevan a un aprendizaje a partir de los objetivos y forma de aprender.
    h4.t1 Técnicas de expresión del discurso
    .row.align-items-center.justify-content-center.mb-4
      .col-xl-6.col-lg-9.col-md-12.mb-4.mb-lg-0.order-2.order-xl-0
        p En el discurso en LSC se han estudiado fenómenos específicos. Algunas de las categorías más nombradas son:
        ul.lista-ul--color.lista-ul--separador
          li
            i.fas.fa-hand-point-up(style="color: #ED9AA9")
            | Espacios mentales sucedáneos (aplicados a las lenguas señadas).
          li
            i.fas.fa-hand-point-up(style="color: #ED9AA9")
            | Boyas (#[i bouys]).
          li
            i.fas.fa-hand-point-up(style="color: #ED9AA9")
            | Sectores simbólicos (#[i tokens]).
          li
            i.fas.fa-hand-point-up(style="color: #ED9AA9")
            | Verbos descriptivos (#[i depicting verbs]).
          li
            i.fas.fa-hand-point-up(style="color: #ED9AA9")
            | Concordancia verbal (#[i verb agreement]).
          li
            i.fas.fa-hand-point-up(style="color: #ED9AA9")
            | Cambios del cuerpo (#[i body shifting]).
          li
            i.fas.fa-hand-point-up(style="color: #ED9AA9")
            | Diálogo y la acción construida (DCAC, por sus siglas en inglés).
      .col-xl-6.col-lg-8.col-md-12
        figure.p-4.p-xl-0
          img(src='@/assets/curso/tema3/img22.svg', style="width: 600px").m-auto
    p.mb-4 Gran parte de la dispersión conceptual en torno a los elementos discursivos de las lenguas señadas se debe a la compleja interacción mencionada anteriormente entre el gesto y los elementos fonológicos, a continuación, se podrán reconocer algunas técnicas de expresión del lenguaje de señas.
    .row.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img13.png', style="width: 600px").m-auto
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="1" titulo="<em>Depicting</em>") Es una técnica en la que se agrupan las principales categorías de elementos discursivos de las lenguas señadas a las estrechamente relacionadas con las tradicionales coherencia y cohesión.
          p(numero="2" titulo="<em>Depictions</em> abstractos") Son aquellas representaciones visuales que simbolizan el espacio con información lingüística en formas particulares: como una línea imaginaria de tiempo horizontal, como un plano calendario (x, y) frente al señante o como sectores determinados <em>(tokens)</em>. Los <em>tokens</em> son sectores del espacio frente al señante que codifican contenido lingüístico específico con miras a la cohesión textual.
          p(numero="3" titulo="<em>Depictions</em> a escala") Incluyen una amplia cantidad de señas que representan visualmente entidades, incorporando gran cantidad de información sobre la forma de estas, los movimientos y la disposición topológica general de la ‘escena’ interpretada en el enunciado.
          p(numero="4" titulo="<em>Depictions</em> a tamaño real") La LSC tiene la posibilidad de incorporar representaciones en el discurso utilizando el cuerpo: el rostro y la inclinación-rotación del torso (|cuerpo| dinámico), alguna locación específica del cuerpo como territorio (|cuerpo| estático), y el cuerpo como punto de observación panorámica (#[i vantage point]).

</template>

<script>
export default {
  name: 'Tema3',
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

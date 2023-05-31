<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aspectos generales de la lingüística y comunicación
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .row.align-items-center.mb-4
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img2.svg', style="width: 90px").m-auto
          .col
            p.mb-0 El ser humano, desde el momento mismo de su nacimiento, busca todas las estrategias necesarias para comunicarse, el lenguaje forma parte del desarrollo natural de hombre y contiene características y propiedades que le permiten ser diferentes a los demás seres vivos; la forma de comunicación de las comunidades sordas abarcan aspectos lingüísticos y comunicativos que son importantes reconocer y diferenciar, pero que estrictamente están ligados con todas las teóricas lingüísticas y sociolingüísticas que se han dado a través de tiempo.
        .cajon.color-primario.p-4
          p.mb-0 De acuerdo con Burad (2010), el proceso de interpretación en Lengua de Señas Colombiana (por sus siglas LSC), surgió para cubrir una necesidad de carácter lingüístico y cultural en el contexto global, es decir, para posibilitar la comunicación entre personas sordas usuarias de la lengua de señas y personas oyentes que no conocen dicha lengua.
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 350px").m-auto


    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Lingüística

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Es la disciplina científica que se encarga de investigar el comienzo, evolución y disposición del lenguaje que se utiliza para comprender o transmitir un mensaje. El objetivo de la lingüística implica la formulación de una teoría general de las lenguas naturales y del sistema cognitivo que las hace posibles.
    p El estudio lingüístico se puede dividir en un conjunto de campos o niveles, dependiendo de qué aspecto específico del lenguaje resulte del interés particular, entre estos campos se encuentran:
    .row.justify-content-center.mb-4
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .row
          .col-12
            .p-4.bg-c3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 #[b La fonética y la fonología.]
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .row
          .col-12
            .p-4.bg-c3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img4.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 #[b La morfosintaxis.]
      .col-md-8.col-lg-4
        .row
          .col-12
            .p-4.bg-c3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', style="width: 90px").m-auto
                .col
                  p.mb-0 #[b La semántica y la pragmática.]
    .row.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Como ocurre con las lenguas orales, en cada país, las personas sordas tienen una lengua de señas con su propia historia y evolución; una estructura gramatical y elementos sociolingüísticos con sus reglas comunicativas, pero con variedades lingüísticas, como pasa con las lenguas orales. La llamada lingüística histórica (o lingüística diacrónica, comparativa o comparada) es la disciplina de la lingüística que se encarga de estudiar el cambio de las lenguas a través del tiempo y el proceso del cambio lingüístico, ocupando un lugar destacado en el estudio diacrónico de las lenguas.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img6.svg', style="width: 550px").m-auto
    p.mb-5 A continuación, se realizará una breve aproximación desde la historia, que ha incluido el estudio de las lenguas de señas utilizadas y estudiadas por comunidades sordas y oyentes en el mundo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-12.bg-c4.shadow-sm
            .p-4
              h3 Línea de tiempo
              LineaTiempoB.color-secundario(:datos="datosLineaTiempoB")
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Funciones de la lingüística
    p La lingüística está a la orden del día de todas las personas que tienen un sistema de comunicación. Un simple saludo, la lectura de un libro o de la pantalla del celular, un recuerdo, una canción, palabras de la persona amada o el buen consejo de un amigo; todo, absolutamente todo lo que nos rodea día a día tiene palabras, gestos o señas.
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Mientras la lingüística estudia la lengua y el lenguaje, quien esté pensando aprender o trabajar con una lengua, debe conocer sobre su funcionamiento y es aquí donde la lingüística puede hacer esta tarea más sencilla. El intérprete que conoce el funcionamiento de la lengua de señas, puede valerse de diversas herramientas, haciendo de su labor un trabajo más práctico y productivo.
        p.mb-0 La lingüística permite comparar lenguas para encontrar puntos en común y puntos que las diferencian. Así, se conoce la historia, identidad, evolución y cultura de una comunidad específica y, además, cómo se ha desarrollado dentro de una sociedad.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img21.png', style="width: 550px").m-auto
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Modelos de la lingüística
    p.mb-5 De nuevo la evolución histórica juega un papel importante en la lingüística y en la mirada de los expertos que han basado sus teorías en diferentes modelos para construir sus recursos lingüísticos, dichos modelos son:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            p #[b Lingüística teórica]
            p Se enfoca en la estructura de las lenguas y en cómo el conocimiento lingüístico de los hablantes puede caracterizarse. Comprende la fonología, la morfología, la sintaxis y la semántica, y busca esquemas teóricos universales que sean aceptables para todas las lenguas del mundo.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/img22.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            p #[b Lingüística científica]
            p Nace en 1916 con el suizo Ferdinand de Saussure, cuando convierte la lingüística en una ciencia integrada a la semiología, que es una disciplina más amplia y también forma parte de la psicología social. Se hace una distinción entre lengua y habla y tiene como fundamento la definición del signo lingüístico.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/img23.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            p #[b Lingüística generativa]
            p El lingüista, filósofo, politólogo y activista estadounidense, Avram Noam Chomsky, no estudió las lenguas particulares, sino la capacidad del lenguaje. Propuso la gramática generativa, disciplina que situó la sintaxis en el centro de la investigación lingüística.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/img24.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            p #[b Lingüística sistémica funcional]
            p Por su parte, Michael Alexander Halliday, en el año de 1968, desarrolla la teoría sobre la gramática sistémica funcional, en la cual se considera al lenguaje como un sistema de múltiples opciones.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/img25.png', style="width: 650px").m-auto
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-md-0
            p #[b Lingüística cognitiva]
            p Hacia el año de 1972, surge la teoría de la variación lingüística, en la cual se hace uso de un elemento lingüístico en lugar de otro, sin que esto implique ningún cambio de significado referencial. La lingüística cognitiva concibe el lenguaje como un fenómeno integrado dentro de las capacidades cognitivas humanas y propone unas teorías generales y unos modelos gramaticales para abordar el estudio del lenguaje.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema1/img26.png', style="width: 650px").m-auto
    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Sociolingüística y enfoques
    p.mb-4 Desde el primer uso del término sociolingüística en 1952, sus seguidores han estudiado las lenguas en su contexto social y establecen correlaciones entre el comportamiento lingüístico y el contexto sociosituacional. Aunque aquí se privilegia la perspectiva social, también se determinan las variantes lingüísticas que caracterizan los distintos grupos sociales. Este rasgo es justamente lo que distingue la sociolingüística de la lingüística.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .row.mb-4
          .col-12.bg-c6
            .p-3
              .row
                .col-lg-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img8.svg', style="width: 70px").m-auto
                .col-lg
                  p.mb-0 En su artículo sobre #[i El Congreso de Milán y el efecto dominó en la República Argentina], Burad (2008), hace referencia a dos enfoques que crean dos formas diferentes de ver y entender a las personas sordas: desde el punto de vista de los oyentes hay un #[b.txt-c1 modelo que llaman clínico], médico o patológico, que cimienta sus bases en el imaginario que el sordo es un ser defectuoso y debe ayudársele para que sea normal, como lo es el oyente, por lo que la lengua de señas es una desviación de la oralidad. Desde este #[b.txt-c1 punto de vista fisiológico] se tiene la necesidad de rehabilitar el oído y el habla, desde el campo de la salud y la educación.
        p.mb-0 Por otro lado, está el punto de vista de los sordos, que es el modelo sociocultural o también conocido como #[b.txt-c1 sociolingüístico]. Se enfoca en la lengua de señas, independiente de la lengua de los oyentes y con características propias; en la cultura del sordo, en su identidad y en sus valores. Resalta también la vida social de la comunidad sorda, sus luchas y sus necesidades particulares.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img27.png', style="width: 450px").m-auto
    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.5 Psicolingüística y modelos
    p.mb-4 La psicolingüística nace gracias a los estudios del lingüista francés Gustave Guillaume (1909) y puede definirse de la siguiente manera:
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img9.svg', style="width: 450px").m-auto
      .col-lg-8
        .row.mb-4.mx-0
          .col-12.bg-c6
            .p-4
              p #[b Psicolingüística]
              p.mb-0 Rama de la psicología interesada en descubrir qué mecanismos cognitivos intervienen para producir y comprender el lenguaje, y cómo se adquiere o se pierde dicho lenguaje. Esta disciplina contrasta datos basados en la observación de la conducta real de los hablantes en situaciones diversas.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Es importante tener en cuenta que la lingüística estudia el lenguaje analizado como un elemento sistemático, mientras que la psicolingüística estudia cómo se utiliza el lenguaje desde actividades cognitivas.
        p.mb-0 Aunque existen tantos modelos como teorías lingüísticas que se han dado a través de las ideas creadas por los expertos en el tiempo, a continuación, se pretende ofrecer una panorámica de algunos de los fundamentos psicolingüísticos que han animado la metodología para su enseñanza.
    p Los modelos teóricos se centran en operaciones que tienen que ver con el procesamiento de la forma de la palabra más que con su significado. Los modelos cognitivistas analizan la parte funcional del comportamiento lingüístico, es decir, el lenguaje como estructura cognitiva y determina los factores que hacen posibles dichos comportamientos.
    p.mb-5 #[b.txt-c1 Se invita a conocer algunos modelos psicolingüísticos, a saber:]
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
      .row(titulo="Modelo de Logogén").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 Fue desarrollado por John Morton entre las décadas de 1960 y 1970. Su unidad básica es el logogén: un mecanismo que acumula información sensorial proveniente tanto de una fuente visual como auditiva. Se plantea una diferencia entre el procesamiento de la palabra aislada y el de la palabra en contexto.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img10.svg', style="width: 250px").m-auto
      .row(titulo="Modelo de búsqueda").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 Se apoya en una metáfora bibliotecaria: las palabras se buscan en la memoria de forma serial, igual que cuando se busca una palabra en el diccionario. Es un modelo indirecto, serial, autónomo y compuesto por etapas, donde la información fluye de forma unidireccional.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img11.svg', style="width: 250px").m-auto
      .row(titulo="Modelos por etapas o modelo de Frith").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 Estipula que el desarrollo del lenguaje se da a través de tres etapas: primera, la logográfica; segunda, la etapa fonológica o alfabética; y tercera, la etapa visual u ortográfica. También, uno de los primeros logros de los niños es diferenciar una ilustración de una palabra.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img12.svg', style="width: 250px").m-auto
      .row(titulo="Modelo constructivista").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 El padre de este modelo es Jean Piaget, utilizado en la psicolingüística y describe la forma en la que entendemos e interpretamos el mundo que nos rodea y cómo una misma situación puede tener diferentes lecturas en cada individuo.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img13.svg', style="width: 250px").m-auto
      .row(titulo="Modelos conexionistas").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 Son los más influyentes en la actualidad y se relacionan con el estudio de la cognición, la memoria, la percepción, la atención, los patrones de reconocimiento y el lenguaje. En este modelo se desarrollan hipótesis de cómo la adquisición del lenguaje se produce por conexiones entre las neuronas. A estas hipótesis se les conoce como conexionismo.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img14.svg', style="width: 250px").m-auto
      .row(titulo="Modelos neurológicos clásicos").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 Sirven para descubrir con qué parte del cerebro está relacionado el lenguaje. El lenguaje está representado en múltiples áreas del cerebro, aunque por lo general se diga que es responsabilidad del hemisferio izquierdo.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img15.svg', style="width: 250px").m-auto
      .row(titulo="Modelo de procesamiento del lenguaje").justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0
          p.mb-0 Se compone de una ruta ventral que analiza el sonido, determina el origen, reconoce la palabra con el léxico disponible, conecta la palabra conceptualmente, le da formato a la palabra y combina elementos para generar estructura y una ruta dorsal, consiste en articular las palabras y traduce la información auditiva a motora.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema1/img16.svg', style="width: 250px").m-auto


    h4.t1 Psicolingüística aplicada a la LSC y al español
    p A principios del siglo XX, el lingüista francés Gustave Guillaume, realizó algunos estudios en su teoría del psicosistema, donde vinculó elementos lingüísticos y psicológicos, por lo que algunos llamaron a este estudio el #[b.txt-c1 guillaumismo], hoy conocido por su equivalente como la #[b.txt-c1 psicolingüística]. Esta disciplina estudia cualquier proceso que tenga que ver con la adquisición y procesamiento cognitivo de la información lingüística, es decir, la comunicación del ser humano a través del lenguaje, sea oral, escrito, gestual, corporal o manual.
    .row.bg-c7.mb-4
      .col-12
        .px-5
          p.mb-5 #[b.txt-c1 A través de la historia muchos lingüistas se han centrado en las lenguas orales. A continuación, se exponen los datos más notables: ]

          .d-flex.justify-content-center.mb-5
            .btn-titulo-info
              span #[b Lenguas orales]

          .row.mb-4.align-items-xl-center.align-items-xxl-stretch
            .col-xxl-4.col-lg-7.col-md-12.col-sm-12.order-2.order-md-1
              .bg-c16.mb-4.p-3
                p.mb-0 El lingüista y neurólogo alemán Lenneberg, quien fue un pionero en las ideas de la adquisición del lenguaje, en 1967 demostró cómo la fisiología humana se adapta al habla, señalando cómo un centenar de músculos producen entre 200 y 500 sílabas por minuto, dándole así más relevancia a la oralidad.

              .bg-c16.mb-4.p-3.d-md-none.d-lg-block.d-block
                p.mb-0 Antes de 1980 los académicos que enfatizaban en la psicolingüística afirmaban que el lenguaje humano era de naturaleza sonora, es decir, oral y escrito. Unos años antes, en 1977, Trybus y Karchmer descubrieron que el nivel de vocabulario de los estudiantes sordos tenía un retraso de uno o más años en relación con su nivel de comprensión escrita. También señalaron que su vocabulario puede mejorar si las palabras tienen un solo significado.

              .bg-c16.mb-4.p-3.d-md-none.d-lg-none.d-xl-block.d-xxl-none
                p.mb-0 En la década de 1970 el profesor, autor y conferencista sordo Tom Humphries creó un neologismo en lengua de señas relacionado con la psicolingüística y la situación de las personas sordas: el audismo. Este término parece tener varios significados y usos en la actualidad.

            .col-xxl-4.col-lg-5.col-md-6.col-sm-12.order-1.order-md-2
              figure.mb-4.mb-xxl-0.p-xl-4.p-xxl-1
                img(src='@/assets/curso/tema1/img28.svg', style="").m-auto

            .col-md-6.order-md-3.d-none.d-md-block.d-lg-none
              .bg-c16.mb-4.p-3
                p.mb-0 Antes de 1980 los académicos que enfatizaban en la psicolingüística afirmaban que el lenguaje humano era de naturaleza sonora, es decir, oral y escrito. Unos años antes, en 1977, Trybus y Karchmer descubrieron que el nivel de vocabulario de los estudiantes sordos tenía un retraso de uno o más años en relación con su nivel de comprensión escrita. También señalaron que su vocabulario puede mejorar si las palabras tienen un solo significado.
            .col-xxl-4.col-md-12.col-sm-12.order-4
              .d-flex.flex-md-column.flex-lg-row.flex-xl-column
                .bg-c16.mb-4.p-3.d-none.d-md-block.d-lg-block.me-lg-4.me-xl-0.d-xl-none.d-xxl-block
                  p.mb-0 En la década de 1970 el profesor, autor y conferencista sordo Tom Humphries creó un neologismo en lengua de señas relacionado con la psicolingüística y la situación de las personas sordas: el audismo. Este término parece tener varios significados y usos en la actualidad.

                .bg-c16.mb-4.p-3
                  p.mb-0 En el año 1994 la neurocientífica cognitiva del desarrollo Laura-Ann Petitto señaló que la lengua de señas tiene la misma condición y características de otras lenguas. Encontró que el cerebro de los niños sordos que son expuestos a la lengua de señas adquiere la lengua y la madurez, y llegan a ser igual a la de los niños oyentes. Más adelante, en el 2001, habló de su estudio sobre el balbuceo manual de los bebés sordos.


          p Desde entonces, muchos académicos han defendido la psicolingüística aplicada a la lengua de señas, demostrando cómo el proceso cognitivo de la comunidad sorda se ha visto atropellado con intentos bruscos de oralizarlos y evitar su adquisición lingüística natural. Algunos de ellos son:
    .row.justify-content-center.mb-5
      .col-lg-10.position-relative
        .row.d-none.d-md-block.d-lg-none
          .col-12
            figure
              img(src='@/assets/curso/tema1/img27.svg', style="width: 250px").m-auto
        .row.justify-content-center
          .col-md-8.col-lg-auto.bg-c9.py-3.px-4.mb-4.mb-sm-0
            h3.text-center.mb-0.text-white Psicolingüística aplicada a la lengua de señas
        .avatar
          figure
            img(src="@/assets/curso/tema1/img21.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img22.svg", alt="alt").img100
            .col
              p #[b Lionel Antonio Tovar Macchi]: mencionó en el 2001 que las lenguas de señas de los sordos son lenguas naturales que se diferencian de las lenguas orales solamente en que utilizan el canal de comunicación visogestual en lugar del audiovocal.
        .crd.crd--avatarHorizontal.crd--second.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img23.svg", alt="alt").img100
            .col
              p #[b María Ignacia Massone]: en el 2003 defendió la comunidad sorda mencionando que el oralismo los ha colonizado violentamente tratando de utilizar un modelo ideal de ser humano que estigmatiza y esconde las diferencias, haciendo parecer que la lengua de señas es anormal.
        .crd.crd--avatarHorizontal.crd--third.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img24.svg", alt="alt").img100
            .col
              p #[b Alejandro Oviedo]: en el 2006 argumentó que el oralismo no es otra cosa más que la manifestación de la mentalidad colonialista mundial.
        .crd.crd--avatarHorizontal.crd--fourt.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img25.svg", alt="alt").img100
            .col
              p #[b Carlos Skliar]: en el 2007 mencionó que la discapacidad pone en evidencia que no existe un cuerpo único y normal, una lengua única y normal, un aprendizaje único y normal, un comportamiento único y normal.
        .crd.crd--avatarHorizontal.crd--last.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img26.svg", alt="alt").img100
            .col
              p #[b Viviana Burad]: esta especialista en docencia universitaria, en el año 2010, reiteró que una imposición lingüística y cultural, para ejercer el control sobre el colectivo sordo y esta forma de relacionarse solo, concluye si es que ese otro logra su liberación.
    .row
      .col-12.bg-c8
        .p-4
          p.mb-0 Así es como algunos han manifestado la inconformidad frente a la tendencia general de privilegiar en sus procesos la enseñanza oral, porque consideran que va en detrimento de su desarrollo cognitivo. Es por eso, que como respuesta a los requerimientos de la comunidad sorda y muchas veces a las preocupaciones de los docentes de esta población con respecto a los logros académicos obtenidos, algunas instituciones educativas implementaron la lengua de señas para acompañar la enseñanza de las lenguas orales, en lo que se conoce como método de Comunicación Total (por sus siglas, CT), en oposición a las prácticas oralistas, permitiendo una fluidez natural en la adquisición y procesamiento cognitivo de la información lingüística.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1750 a. de C.',
        texto:
          'El código de Hammurabi fue creado en la antigua Mesopotamia, en él aparece por primera vez el término erróneo sordomudo.',
        icono: require('@/assets/curso/tema1/img2.png'),
      },
      {
        titulo: 'Siglo III a. de C.',
        texto:
          'Los padres cometían infanticidio, es decir, mataban a los hijos que nacían con algún tipo de discapacidad, incluidas las personas sordas. Se creía que los sordos y las personas con retraso mental eran iguales.',
        icono: require('@/assets/curso/tema1/img3.png'),
      },
      {
        titulo: 'Siglo IV',
        texto:
          'Aristóteles dijo que la persona ciega “puede ser mejor instruida que el sordo”, afirmando que los sordos estaban incapacitados para comunicarse y pensar por sí mismos y  agregó que no podían pronunciar palabras.',
        icono: require('@/assets/curso/tema1/img4.png'),
      },
      {
        titulo: 'Año 27',
        texto:
          'En Roma arrojaban a los niños sordos en el río Tíber o los vendían como esclavos.',
        icono: require('@/assets/curso/tema1/img5.png'),
      },
      {
        titulo: 'Siglo III',
        texto:
          'En la obra hebrea El <em>Talmud</em>, se establece que el sordo no puede estar en una categoría inferior y que puede instruirse.',
        icono: require('@/assets/curso/tema1/img6.png'),
      },
      {
        titulo: '322 A.C',
        texto:
          'San Agustín de Hipona afirmó que los sordos no podían alcanzar la salvación divina, que nacían sordos por culpa de la ira de Dios y los pecados de sus padres.',
        icono: require('@/assets/curso/tema1/img7.png'),
      },
      {
        titulo: 'Año 340',
        texto:
          'El estudioso del latín San Jerónimo de Estridón dijo que a los sordos se les podía enseñar la Biblia por medio de mímica.',
        icono: require('@/assets/curso/tema1/img8.png'),
      },
      {
        titulo: 'Año 400',
        texto:
          'La Iglesia católica estableció que las personas sordas no podían tener derecho a las herencias, no debían casarse ni ir a la iglesia.',
        icono: require('@/assets/curso/tema1/img9.png'),
      },
      {
        titulo: 'Año 1252',
        texto:
          'Alfonso X, llamado comúnmente en España, “El Sabio”, establece el código de las siete partidas para regular los derechos de las personas sordas relacionadas con el tema del matrimonio. Además, hace una distinción entre sordomudo, sordo de nacimiento y sordo por enfermedad.',
        icono: require('@/assets/curso/tema1/img10.png'),
      },
      {
        titulo: 'Año 1453',
        texto:
          'A los sordos se les consideraba embrujados y debían morir en la hoguera o apedreados. Si alcanzaban la oralidad, podían ejercer el derecho a heredar sus tierras.',
        icono: require('@/assets/curso/tema1/img11.png'),
      },
      {
        titulo: 'Año 1521',
        texto:
          'El humanista Rudolf Agrícola, dijo que los sordos podían comunicarse por medio de la escritura. Pensaba que hablar y escuchar estaban separadas entre sí.',
        icono: require('@/assets/curso/tema1/img12.png'),
      },
      {
        titulo: 'Año 1620',
        texto:
          'Ponce de León es conocido como el primer educador de sordos del mundo, les enseñó a escribir, señalando con el dedo objetos o dibujos del alfabeto manual. Juan Pablo Bonet es uno de los personajes más influyentes de la historia de la lingüística de la lengua de señas. Fue la “edad de oro” de los sordos.',
        icono: require('@/assets/curso/tema1/img13.png'),
      },
      {
        titulo: 'Año 1779',
        texto:
          'Desloges fue el primer sordo que publicó un libro y argumentó que sin la lengua de señas no sería posible educar a los sordos.',
        icono: require('@/assets/curso/tema1/img14.png'),
      },
      {
        titulo: 'Año 1795',
        texto:
          'Hervás y Panduro, lingüista y filólogo español conocido como el padre de la lingüística comparada, fundó la Escuela Municipal de Sordomudos. Su tratado supone un hito en el esfuerzo lingüístico para integrar a las personas sordas.',
        icono: require('@/assets/curso/tema1/img15.png'),
      },
      {
        titulo: 'Año 1832',
        texto:
          'En este año se tomó la decisión de excluir a los maestros sordos de las escuelas precisamente para que los maestros oyentes enfatizaran el habla. Un gran obstáculo para la lingüística de la lengua de señas.',
        icono: require('@/assets/curso/tema1/img16.png'),
      },
      {
        titulo: 'Año 1923',
        texto:
          'Comunidades religiosas iniciaron procesos educativos en Colombia con métodos oralistas del congreso de Milán. Por ejemplo, en Medellín con la I.E. Francisco Luis Hernández Betancur (1943) y en Bogotá con el I. de Nuestra Señora de la Sabiduría (1986).',
        icono: require('@/assets/curso/tema1/img17.png'),
      },
      {
        titulo: 'Año 1951',
        texto:
          'DMA es una de las organizaciones internacionales sobre discapacidad más antiguas del mundo. Al primer congreso que se realizó solo asistieron 25 asociaciones de sordos, en el último asistieron 125 países.',
        icono: require('@/assets/curso/tema1/img18.png'),
      },
      {
        titulo: 'Año 1959',
        texto:
          'Las Naciones Unidas y la Organización Mundial de la Salud le otorgan el estatus consultivo a la DMA para trabajar en conjunto y presentar sus puntos de vista como comunidad lingüística.',
        icono: require('@/assets/curso/tema1/img19.png'),
      },
      {
        titulo: 'Año 1960',
        texto:
          'El lingüista Stokoe demostró que las lenguas de señas son lenguas naturales con rasgos lingüísticos como cualquier otra, con un código y un sistema de comunicación. En aquel tiempo los lingüistas aún no se interesaban en las lenguas de señas.',
        icono: require('@/assets/curso/tema1/img20.png'),
      },
    ],
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

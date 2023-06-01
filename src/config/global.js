export default {
  global: {
    componenteFormativo:
      'Fundamentos de la lingüística y comunicación en la LSC y español',
    descripcionCurso:
      'Aquí se explican los aspectos generales que todo intérprete de lengua de señas colombiana debe tener en cuenta sobre la lingüística, su función, modelos, enfoques sociolingüísticos y psicolingüísticos, se aclaran términos de fonética, fonología, morfología, sintaxis, lexicografía y semántica de la lengua de señas y el español escrito. Finalmente, se enuncian algunos aspectos generales de la comunicación y las técnicas de expresión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aspectos generales de la lingüística y comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Lingüística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funciones de la lingüística',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Modelos de la lingüística',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Sociolingüística y enfoques',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Psicolingüística y modelos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Psicolingüística aplicada a la LSC y al español',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Niveles de estudio de la LSC (definiciones)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Desarrollo de habilidades comunicativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de comunicación en la expresión del discurso',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métodos nemotécnicos, de atención y concentración',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ayala, C, Yuste, C. (2005). <em>Programa para la estimulación de las habilidades de la inteligencia.</em> CEPE',
      link: '',
    },
    {
      referencia:
        'Barreto, A. (2015). Fundarvid: una contextualización de sus neologismos en la lengua de señas colombiana. <em>Antropología.</em>',
      link: '',
    },
    {
      referencia:
        'Caamaño, C. (2018). <em>Claves para potenciar la atención/concentración.</em> Universidad de Chile.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1996). Ley 324 de 1996. Por la cual se crean algunas normas a favor de la población sorda. ',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2005). Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Giraldo, J. (2016). La neología: indicador de la vitalidad de una lengua y su cultura. <em>Revista Interamericana de Bibliotecología</em>, 39(1), 39-46.',
      link: '',
    },
    {
      referencia:
        'Hervás, L. (1795). <em>Escuela española de sordomudos, o arte para enseñarles a escribir y hablar el idioma español</em> (Vol. 2). Imprenta Real.',
      link: '',
    },
    {
      referencia:
        'Hymes, D. (1972). <em>Competencia comunicativa</em>. Editorial Pride and Holmes, 42.',
      link: '',
    },
    {
      referencia:
        'Johnson, R., Liddell, S. (2016). Hacia una representación fonética de las señas: secuencialidad y contraste. <em>Forma y Función</em>, 29(2), 247-279.',
      link: '',
    },
    {
      referencia:
        'Lieury, A. (1985). <em>Los métodos mnemotécnicos ¿ciencia o charlatanería?</em> Herder.',
      link: '',
    },
    {
      referencia:
        'Martínez, R. A. (2017). Semántica y morfosintaxis del adjetivo en la Lengua de Señas Argentina desde un enfoque cognitivo. <em>Lengua y Habla</em>, (21), 151-174.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Audismo',
      significado:
        'la discriminación negativa o arbitraria o la marginación sufrida por las personas sordas a lo largo de la historia hasta la actualidad (Humphries, 1970).',
    },
    {
      termino: 'Bilingüismo',
      significado:
        'capacidad de desarrollar algún nivel de competencia (hablar, leer, entender, escribir) en una segunda lengua.',
    },
    {
      termino: 'Fonética',
      significado:
        'estudio que se realiza a los sonidos físicos de una lengua desde una perspectiva acústica y fonológica; también el lugar y el modo de cómo se produce; además su clasificación, que se divide en tres principales ramas: fonética articulatoria, fonética acústica y fonética auditiva o perceptiva.',
    },
    {
      termino: 'Lengua',
      significado:
        'sistema de signos lingüísticos, conformado en la interacción comunicativa y cuyo fin es la comunicación misma. Como sistema de signos, estos conforman un conjunto de oposiciones funcionales, que son constantes y que subyacen a la materialidad fónica.',
    },
    {
      termino: 'Lengua de señas',
      significado:
        'lengua de signos es una lengua natural de expresión y configuración gesto-espacial y percepción visual, gracias a la cual, los sordos pueden establecer un canal de comunicación.',
    },
    {
      termino: 'Lenguaje',
      significado:
        'sistema de comunicación estructurado para el que existe un contexto de uso y ciertos principios combinatorios formales. ',
    },
    {
      termino: 'Lingüística',
      significado:
        'disciplina científica que investiga el origen, la evolución y las estructuras fundamentales del lenguaje.',
    },
    {
      termino: 'Metacognición',
      significado:
        'capacidad del ser humano para evaluar su propio proceso de aprendizaje con el propósito de hacerlo más consciente y eficiente.',
    },
    {
      termino: 'Mnemotecnia',
      significado:
        'deriva del griego <em>mnéemee</em> (memoria), y <em>téchnee</em> (arte). Una regla mnemotécnica es un sistema sencillo utilizado para recordar una secuencia de datos, nombres, números, y en general para recordar listas de datos relacionando palabras, imágenes, etc.',
    },
    {
      termino: 'Psicolingüística',
      significado:
        'rama de la psicología interesada en descubrir qué mecanismos cognitivos intervienen para producir y comprender el lenguaje, y cómo se adquiere o se pierde dicho lenguaje.',
    },
    {
      termino: 'Signo lingüístico',
      significado:
        'construcción social que funciona dentro de un sistema lingüístico y que pone un elemento en lugar de otro.',
    },
    {
      termino: 'Sociolingüística',
      significado:
        'estudio de las lenguas en su contexto social. Establece correlaciones entre el comportamiento lingüístico y el contexto sociosituacional.',
    },
  ],
  complementario: [
    {
      tema: 'Aspectos generales de la lingüística y comunicación',
      referencia: 'Burad, V. (2010). <em>El audismo</em>. Cultura sorda.',
      tipo: 'Artículo',
      link: 'https://cultura-sorda.org/el-audismo/ ',
    },
    {
      tema: 'Aspectos generales de la lingüística y comunicación',
      referencia:
        'Escobar, J. (2019). <em>Alfabetización de modelos lingüísticos jóvenes y adultos par la comunidad sorda: la historia de la lengua de señas colombiana.</em> (Anteproyecto de trabajo de grado). Universidad Pedagógica Nacional.',
      tipo: 'PDF',
      link:
        'http://repository.pedagogica.edu.co/bitstream/handle/20.500.12209/10768/TE-23503.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Niveles de estudio del español y de la LSC (Definiciones)',
      referencia:
        'Hervás, L. (1795). <em>Escuela española de sordomudos, o arte para enseñarles a escribir y hablar el idioma español</em> (Vol. 2). Imprenta Real. ',
      tipo: 'Artículo',
      link:
        'https://www.cervantesvirtual.com/obra/escuela-espanola-de-sordomudos-o-arte-para-ensenarles-a-escribir-y-hablar-el-idioma-espanol-dividida-en-dos-tomos-tomo-i--0/',
    },
    {
      tema: 'Niveles de estudio del español y de la LSC (Definiciones)',
      referencia:
        'Martínez, R. A. (2017). Semántica y morfosintaxis del adjetivo en la Lengua de Señas Argentina desde un enfoque cognitivo. <em>Lengua y Habla</em>, (21), 151-174. ',
      tipo: 'Artículo',
      link: 'https://ri.conicet.gov.ar/handle/11336/74928',
    },
    {
      tema: 'Desarrollo de habilidades comunicativas',
      referencia:
        'Herrera, V., Puente, A., Alvarado, J., & Ardila, A. (2010). Códigos de lectura en sordos: la dactilología y otras estrategias visuales y kinestésicas. Revista Latinoamericana de Psicología, 39(2), 269-286',
      tipo: 'Artículo ',
      link: 'http://www.scielo.org.co/pdf/rlps/v39n2/v39n2a05.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta Temática',
          centro:
            'Centro de Formación en Talento Humano y Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de Estilo ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

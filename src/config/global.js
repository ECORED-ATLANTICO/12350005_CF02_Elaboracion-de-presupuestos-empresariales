export default {
  global: {
    Name: 'Elaboración y presentación del presupuesto empresarial',
    Description:
      'Este componente formativo permite al aprendiz aplicar criterios técnicos y financieros para la elaboración y presentación del presupuesto empresarial. Se profundiza en los métodos de estimación y proyección de ingresos, egresos y resultados, considerando las particularidades de distintos tipos de organización. Asimismo, se desarrollan competencias para utilizar herramientas tecnológicas, especialmente Excel, en la estructuración, análisis y presentación de presupuestos. El enfoque práctico fortalece la capacidad de consolidar información presupuestal mediante formatos dinámicos, automatizados y visualmente comprensibles, facilitando la toma de decisiones informadas dentro de un entorno organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Prónosticos financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métodos de calculo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fijación de factores y proyecciones',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ingresos, costos y gastos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de estimación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Variables presupuestales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Unidades de medida',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Parámetros técnicos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas TIC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Hoja de cálculo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Funciones estadísticas y gráficos ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presentación de Informes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estructura',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: '5.2.	Técnicas de redacción y visualización de datos',
            hash: 't_5_2',
          },
        ],
      },
    ],

    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Caso práctico: presupuesto empresarial simulado',
      referencia:
        'M&C Consultores. (2024). Anexo 1. CINE FUTURO 2023–2024 [Archivo de Excel]. Elaboración de presupuestos empresariales.',
      tipo: 'Archivo Excel',
      link: 'Anexo 1 CINE FUTURO',
    },
    {
      tema: '¿Cómo calcular un presupuesto empresarial?',
      referencia:
        '¿Cómo Calcular un Presupuesto Empresarial? (2024). [Video]. YouTube. https://youtu.be/UqzDPBqDW6E',
      tipo: 'Video',
      link: 'https://youtu.be/UqzDPBqDW6E',
    },
    {
      tema: 'Presupuestos económicos y financieros (tesorería)',
      referencia:
        'Qué es un presupuesto de tesorería? (2024). [Video]. YouTube. https://youtu.be/kUtTJ11iaMY',
      tipo: 'Video',
      link: 'https://youtu.be/kUtTJ11iaMY',
    },
  ],
  glosario: [
    {
      termino: 'Presupuesto',
      significado:
        'proyección financiera que estima los ingresos y egresos de una organización durante un periodo determinado.',
    },
    {
      termino: 'Proyección',
      significado:
        'estimación anticipada de cifras futuras basada en datos históricos y supuestos técnicos.',
    },
    {
      termino: 'Ingresos',
      significado:
        'entradas de dinero generadas por las operaciones de una empresa, como ventas o servicios.',
    },
    {
      termino: 'Egresos',
      significado:
        'salidas de dinero correspondientes a los costos y gastos necesarios para operar.',
    },
    {
      termino: 'Herramientas TIC',
      significado:
        'tecnologías de la información y comunicación utilizadas para la gestión y análisis financiero.',
    },
    {
      termino: 'Excel',
      significado:
        '<em>software</em> de hoja de cálculo ampliamente usado para presupuestación, análisis y presentación de datos.',
    },
    {
      termino: 'Informe presupuestal',
      significado:
        'documento que presenta la estructura y resultados de un presupuesto, incluyendo análisis y justificación.',
    },
    {
      termino: 'Supuestos técnicos',
      significado:
        'criterios o variables consideradas al proyectar cifras en un presupuesto, como inflación o crecimiento esperado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano Ruiz, J. E. (2011). <em>Presupuestos: un enfoque estratégico, gestión y control de recursos. </em>(4.a ed.). McGraw-Hill Latinoamericana.',
      link: '',
    },
    {
      referencia:
        'Hanke, J. E., & Wichern, D. W. (2010). <em>Pronósticos en los negocios</em> (9.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Licata, M. (Ed.). (2024).<em> Budgeting and Forecasting. </em>SAGE Publications.',
      link: '',
    },
    {
      referencia:
        'Investopedia. (s.f.).<em>Revenue: Definition, Formula, Calculation, and Examples</em>',
      link: '',
    },
    {
      referencia:
        'Corporate Finance Institute. (s.f.).<em> Expenses – Definition, Types of Expenses. </em>   ',
      link:
        'https://corporatefinanceinstitute.com/resources/accounting/expenses/?utm_source  ',
    },
    {
      referencia:
        'ADEN Business Magazine. (s.f.). <em>Guía esencial de presupuestos empresariales.  </em> ',
      link:
        'https://www.aden.org/business-magazine/guia-presupuestos-empresariales ',
    },
    {
      referencia:
        'FasterCapital. (s.f.).<em> Componentes del presupuesto operativo. </em>',
      link:
        'https://fastercapital.com/es/tema/componentes-de-un-presupuesto-operativo.html',
    },
    {
      referencia:
        'Alexander, M., & Kusleika, D. (2025).<em> Microsoft Excel 365 Bible</em> (2.ª ed.). Hoboken, NJ: John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'León García, O. (2009).<em> Administración Financiera, </em>Prensa Moderna Editores.',
      link: '',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2018).<em> Análisis Financiero Aplicado,</em> Universidad Externado.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (2023).<em> Clasificación Nacional de Ocupaciones. Diccionario ocupacional e índice alfabético de denominaciones ocupacionales. </em>',
      link: 'https://observatorio.sena.edu.co/clasificacion/cno',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Meriño',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
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
}

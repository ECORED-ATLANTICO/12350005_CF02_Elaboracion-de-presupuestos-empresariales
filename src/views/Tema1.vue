<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Pronósticos financieros
    
    
    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 Los pronósticos financieros son estimaciones sistemáticas y fundamentadas que permiten proyectar el comportamiento futuro de las variables económicas y financieras de una organización (ingresos, costos, gastos, utilidades, flujo de caja, entre otros), con base en datos históricos, tendencias del mercado, factores internos y externos, y el uso de métodos estadísticos, matemáticos y/o cualitativos. Son una herramienta de anticipación que le permite a la empresa reducir la incertidumbre y tomar decisiones informadas sobre la administración de recursos, la viabilidad de proyectos y la sostenibilidad del negocio.
   
    separador
   
    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 1.1 Métodos de calculo
    
    p.mb-5 Existen varios enfoques para realizar pronósticos financieros, dependiendo del horizonte temporal, la disponibilidad de información y la naturaleza del negocio:
    
    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative a. Métodos cualitativos
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')


    //- Columnas con slider
    .container.mb-5
      .row.justify-content-center.align-items-center
          .col-12.col-lg-4
            figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema1/img02.png', alt='imagen decorativa')
          .col-lg-8
            .tarjeta.p-4.bg02.p-lg-5.p-md-4
              .tarjeta.bg-white.p-2.p-lg-3
                SlyderA(tipo="b").tarjeta--blanca.p-3.p-lg-4.rounded
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Método Delphi.
                        p.mb-0 Se basa en la opinión de especialistas que aportan estimaciones sobre la evolución futura del mercado o de la empresa.
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema1/img03.svg', alt='Imagen Decorativa').mx-auto
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Encuestas de intención.
                        p.mb-0 Obtienen información directa de clientes, proveedores o consumidores para proyectar la demanda futura.
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema1/img04.svg', alt='Imagen Decorativa').mx-auto
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Juicio de expertos.
                        p.mb-0 Basado en la experiencia del equipo directivo o especialistas.
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema1/img05.svg', alt='Imagen Decorativa').mx-auto
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Analogías históricas.
                        p.mb-0 Comparan situaciones presentes con experiencias pasadas de empresas o sectores similares para prever resultados.
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema1/img06.svg', alt='Imagen Decorativa').mx-auto

    p.mb-5 Estos métodos se usan cuando no existen suficiente información histórica o cuando el entorno es muy incierto.

    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative b. Métodos cuantitativos.
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')

  
    //- Tabs A
    TabsA.color-terciario.mb-5(data-aos="fade-right")
      .tarjeta.p-4(titulo="Series de tiempo.")
        .row.mx-auto.align-items-center.justify-content-center
          .col-12.col-xl-7.mb-4.mb-xl-0
            h4 Series de tiempo.
            p.mb-0 Analizan datos históricos (ventas, costos, utilidades) para identificar tendencias, estacionalidad o ciclos que puedan proyectarse hacia el futuro.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen Decorativa').mx-auto
      .tarjeta.p-4(titulo="Modelos de regresión.")
        .row.mx-auto.align-items-center.justify-content-center
          .col-12.col-xl-7.mb-4.mb-xl-0
            h4 Modelos de regresión.
            p.mb-0 Relacionan variables dependientes (por ejemplo, ventas) con factores explicativos (como precio, ingreso del consumidor, publicidad) para estimar su comportamiento futuro.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen Decorativa').mx-auto
      .tarjeta.p-4(titulo="Modelos econométricos.")
        .row.mx-auto.align-items-center.justify-content-center
          .col-12.col-xl-7.mb-4.mb-xl-0
            h4 Modelos econométricos.
            p.mb-0 Incorporan varias ecuaciones que explican de manera integral el comportamiento de diferentes variables económicas y financieras.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen Decorativa').mx-auto
      .tarjeta.p-4(titulo="Promedios móviles y suavización exponencial.")
        .row.mx-auto.align-items-center.justify-content-center
          .col-12.col-xl-7.mb-4.mb-xl-0
            h4 Promedios móviles y suavización exponencial.
            p.mb-0 Métodos estadísticos simples para suavizar fluctuaciones y predecir valores futuros a corto plazo.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen Decorativa').mx-auto
       
    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_2 1.2. Fijación de factores y proyecciones

    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img12.png', alt='imagen decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p La fijación de factores y proyecciones es un proceso fundamental dentro de la elaboración de presupuestos empresariales, mediante el cual se determinan y cuantifican los elementos internos y externos que inciden en el comportamiento financiero de la organización. La fijación de factores consiste en identificar variables como costos de producción, precios de insumos, niveles de demanda, capacidad operativa, tasas de inflación, políticas fiscales y condiciones del mercado, para establecer parámetros de referencia confiables. Posteriormente, las proyecciones implican la estimación de resultados futuros a partir de dichos factores, aplicando técnicas estadísticas, históricas y de análisis de tendencias con el fin de anticipar ingresos, egresos y necesidades de inversión. Este proceso permite generar escenarios financieros realistas, apoyar la toma de decisiones estratégicas y garantizar que el presupuesto se convierta en una herramienta de planificación, control y sostenibilidad empresarial.
          p.mb-0 El esquema para la fijación de factores y proyecciones es el siguiente:
        
    //- Col10 e Imagen
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.col-lg-10.mx-auto
        //- Figura
        .titulo-sexto.mb-4
          h5 Figura 1. 
            span Fijación de factores y proyecciones 
        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema1/img13.svg', alt='La figura presenta las características de la analítica web. Permite identificar tendencias de comportamiento de los usuarios. Facilita la medición de la efectividad de estrategias digitales. Proporciona datos para la optimización de contenidos. Ayuda a mejorar la experiencia del usuario en plataformas digitales.').mx-auto.d-none.d-md-block
            img(src='@/assets/curso/temas/tema1/img13m.svg', alt='La figura presenta las características de la analítica web. Permite identificar tendencias de comportamiento de los usuarios. Facilita la medición de la efectividad de estrategias digitales. Proporciona datos para la optimización de contenidos. Ayuda a mejorar la experiencia del usuario en plataformas digitales.').mx-auto.d-block.d-md-none

          figcaption 
            b Fuente: 
            | SENA, 2025.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

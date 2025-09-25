<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Presentación de informes

    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img01.png', alt='imagen decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          .container
            p Es el proceso de estructurar, organizar y comunicar de manera clara, precisa y comprensible la información resultante del presupuesto elaborado. Esto no solo se limita a mostrar cifras de ingresos, costos y gastos, sino que también integra análisis comparativos, proyecciones, desviaciones y recomendaciones estratégicas, con el fin de facilitar la toma de decisiones por parte de los directivos y demás actores de la empresa. 
            .row.align-items-center(data-aos="fade-left")
              .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
                p.mb-0 Un informe presupuestal bien diseñado debe contener información verificada, representada tanto en formatos numéricos (tablas, balances, indicadores) como en recursos visuales (gráficos, diagramas, 
                  i dashboards)
                  | , lo que permite interpretar tendencias y escenarios financieros de forma ágil. Además, la presentación debe adaptarse al público objetivo, garantizando que el lenguaje, los indicadores y las conclusiones respondan a las necesidades de cada nivel organizacional.
              .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img02.svg', alt='imagen decorativa')

    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_5_1 5.1 Estructura

    .container.mb-3
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-7.mb-4.mb-lg-0
          p Son los apartados, criterios y elementos formales que determinan la manera en que se expone la información presupuestal para su análisis y toma de decisiones. La estructura cumple la función de dar orden, claridad y coherencia a los resultados del proceso de presupuestación, garantizando que los datos sobre ingresos, costos, gastos y proyecciones sean comprensibles y útiles para los diferentes niveles de la organización.
          p.mb-3 Una estructura adecuada debe incluir elementos fundamentales como:
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img03.png', alt='imagen decorativa')


    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right").p-4.bg-color-primario-p5.mb-5
      .row.justify-content-center.align-items-center
        .col-12.col-lg-4.order-2.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema5/img04.png', alt='imagen decorativa')
        .col-12.col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0.custom-slider
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-gris.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema5/img05.svg' alt='AvatarTop').w-auto.mx-auto
              h5.text-center Portada y datos de identificación:
              p.text-center título, fecha, área responsable y destinatarios.

            .tarjeta.color-gris.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema5/img06.svg' alt='AvatarTop').w-auto.mx-auto
              h5.text-center Introducción o resumen ejecutivo: 
              p.text-center visión general del propósito y hallazgos principales.
            
            .tarjeta.color-gris.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema5/img07.svg' alt='AvatarTop').w-auto.mx-auto
              h5.text-center Metodología o criterios aplicados: 
              p.text-center supuestos, parámetros técnicos y fuentes de información.

            .tarjeta.color-gris.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema5/img08.svg' alt='AvatarTop').w-auto.mx-auto
              h5.text-center Representación visual: 
              p.text-center tablas, gráficos y cuadros que permitan interpretar tendencias y variaciones.
            .tarjeta.color-gris.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema5/img09.svg' alt='AvatarTop').w-auto.mx-auto
              h5.text-center Conclusiones y recomendaciones: 
              p.text-center interpretación de los resultados y propuestas de acción.
        
            .tarjeta.color-gris.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src='@/assets/curso/temas/tema5/img10.svg' alt='AvatarTop').w-auto.mx-auto
              h5.text-center Anexos: 
              p.text-center información complementaria o de soporte técnico.


    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_5_2 5.2 Técnicas de redacción y visualización de datos

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema5/img11.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 Consisten en la aplicación de herramientas gráficas y recursos visuales que permiten representar la información presupuestal de manera intuitiva y accesible. Estas técnicas convierten los datos en elementos visuales como tablas, gráficos de barras, líneas, circulares, diagramas de flujo, 
                i dashboards 
                | o infografías, que facilitan la identificación de tendencias, comparaciones y desviaciones en los ingresos, costos y gastos. La visualización no solo mejora la comprensión de la información, sino que también optimiza la comunicación entre las diferentes áreas de la empresa, ya que transforma datos complejos en representaciones rápidas de interpretar. En consecuencia, se convierte en un elemento clave para la efectividad de los informes presupuestales.


</template>

<script>
export default {
  name: 'Tema5',
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

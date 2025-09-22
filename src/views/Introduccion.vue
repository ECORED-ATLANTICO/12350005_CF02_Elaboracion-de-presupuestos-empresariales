<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    //- col4 y col8
    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/intro/img01.png', alt='imagen decorativa')
        .col-lg-8
          p El componente formativo “Elaboración y presentación del presupuesto empresarial” tiene como propósito fortalecer las competencias técnicas necesarias para construir, proyectar y comunicar presupuestos organizacionales de manera precisa y fundamentada. A partir del análisis de información histórica, se desarrollan habilidades para estimar ingresos, egresos y resultados esperados, utilizando criterios técnicos y métodos de proyección ajustados a las necesidades de distintos tipos de empresa.
          .tarjeta.bg-color-primario-p5.p-4.mb-4(data-aos="fade-left")
            .container
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.order-2.order-lg-1
                  p.mb-0 En este proceso, se orienta al aprendiz en el uso adecuado de herramientas tecnológicas básicas para consolidar y organizar información presupuestal de forma estructurada. Así mismo, se enfatiza en la presentación clara del informe presupuestal, integrando técnicas de redacción y estándares técnicos que faciliten su comprensión y aplicación en la gestión financiera. Este componente articula teoría y práctica mediante un caso empresarial simulado, permitiendo aplicar los conocimientos adquiridos y desarrollar criterio profesional en el análisis presupuestal.
                .col-8.col-md-6.col-lg-2.mx-auto.order-1.order-lg-2
                  figure
                    img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/intro/img02.png', alt='imagen decorativa')
               
    
    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10
          .text-white.bg-color-secundario.px-3.py-2.curvas 
            p.mb-0
              b Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/JjPV3D5FpuU?si=gRyQeJjkd69-L9Tbnpm" title="Análisis estratégico del mercado internacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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

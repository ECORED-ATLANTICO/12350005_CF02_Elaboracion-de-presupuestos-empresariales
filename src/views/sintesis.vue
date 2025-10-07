<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p El componente formativo “Elaboración y presentación del presupuesto empresarial” tiene como propósito fortalecer las competencias técnicas necesarias para construir, proyectar y comunicar presupuestos organizacionales de manera precisa y fundamentada. A partir del análisis de información histórica, se desarrollan habilidades para estimar ingresos, egresos y resultados esperados, utilizando criterios técnicos y métodos de proyección ajustados a las necesidades de distintos tipos de empresa.
          p En este proceso, se orienta al aprendiz en el uso adecuado de herramientas tecnológicas básicas para consolidar y organizar información presupuestal de forma estructurada. Así mismo, se enfatiza en la presentación clara del informe presupuestal, integrando técnicas de redacción y estándares técnicos que faciliten su comprensión y aplicación en la gestión financiera. Este componente articula teoría y práctica mediante un caso empresarial simulado, permitiendo aplicar los conocimientos adquiridos y desarrollar criterio profesional en el análisis presupuestal.
          p Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/img01.png', alt='imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo: Elaboración y presentación del presupuesto empresarial, desarrolla técnicas de estimación, proyección y estructuración de presupuestos. Asimismo, fomenta el análisis de ingresos, egresos y resultados esperados. Integra la construcción de presupuestos operativos, financieros y de inversión; además, impulsa el uso de herramientas como Excel para organizar y presentar datos. Finalmente, resalta la importancia de los informes financieros para el análisis y la toma de decisiones. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

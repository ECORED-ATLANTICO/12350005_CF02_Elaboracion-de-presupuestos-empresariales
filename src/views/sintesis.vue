<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p El componente formativo “Elaboración y presentación del presupuesto empresarial” permite al aprendiz aplicar técnicas de estimación, proyección y estructuración de presupuestos organizacionales con base en información histórica y criterios técnicos. A través del análisis de ingresos, egresos y resultados esperados, se construyen presupuestos operativos, financieros y de inversión que responden a los objetivos de diferentes tipos de empresa.
          p Se fortalece el uso de herramientas tecnológicas como Excel para organizar la información y estructurar formatos presupuestales, así como la capacidad de redactar e interpretar informes financieros de manera clara, coherente y profesional.
          p Así mismo relaciona además la manera de presentar los informes, lo cual es de gran relevancia para el proceso formativo; teniendo en cuenta que es la forma de como presentar, analizar y tomar decisiones con respecto a la información presentada.
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p El componente “Elaboración y presentación del presupuesto empresarial” busca desarrollar en los aprendices las competencias necesarias para planear, estructurar y comunicar de manera efectiva los presupuestos dentro de una organización, como herramienta clave para la gestión financiera y la toma de decisiones estratégicas.
          p En primer lugar, se abordan los pronósticos financieros, los cuales constituyen la base para la elaboración del presupuesto, ya que permiten anticipar escenarios económicos y proyectar el desempeño de la empresa. Posteriormente, se analizan los ingresos, costos y gastos, diferenciando sus tipos (fijos, variables, directos, indirectos, operativos y no operativos)
          p El componente también profundiza en las variables presupuestales, las unidades de medida y los parámetros técnicos que aseguran coherencia, exactitud y comparabilidad en la información presupuestal.
          p Lo correspondiente al apoyo tecnológico, se promueve el uso de herramientas TIC que facilitan la construcción y el análisis de presupuestos. Entre ellas, la hoja de cálculo se convierte en un recurso esencial para organizar datos, aplicar fórmulas y automatizar operaciones
          p Finalmente, se orienta la correcta presentación de informes presupuestales, como producto final del proceso. Para ello, se define la estructura que deben tener dichos reportes y se aplican técnicas de redacción y visualización de datos
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/img01.png', alt='imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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

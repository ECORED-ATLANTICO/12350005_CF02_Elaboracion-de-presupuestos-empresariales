<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ingresos y egresos


    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 Las variables presupuestales son los factores cuantitativos y cualitativos que intervienen en la planeación, elaboración, ejecución y control de un presupuesto empresarial, y que determinan la estimación de los ingresos, costos, gastos y resultados esperados en un periodo determinado. Estas variables permiten proyectar de manera ordenada los recursos financieros, identificar restricciones y evaluar escenarios que afectan la gestión económica de la organización. La adecuada identificación y análisis de estas variables facilita la construcción de presupuestos realistas y estratégicos, que sirven como herramienta de control y soporte en la toma de decisiones empresariales.

    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_3_1 3.1 Componentes.


    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-5.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='imagen decorativa')
        .col-12.col-lg-7.mb-4.mb-lg-0
          p Representan los distintos elementos que intervienen en la elaboración y control de un presupuesto empresarial, integrando tanto factores internos como externos que inciden en los resultados financieros. Los componentes internos están relacionados con aspectos propios de la organización, como los ingresos, costos, gastos, capacidad productiva y políticas de gestión; mientras que los componentes externos incluyen variables del entorno económico y social, como la inflación, tasas de interés, tipo de cambio, políticas fiscales, competencia y comportamiento del mercado. A estos se suman los componentes de gestión y control, que permiten evaluar el cumplimiento de metas, aplicar indicadores de desempeño, construir escenarios y establecer mecanismos de retroalimentación. 


    .tarjeta.p-4.bg02.p-lg-5.p-md-4
      .tarjeta.bg-white.p-2.p-lg-3
          SlyderA(tipo="b").tarjeta--blanca.p-3.p-lg-4.rounded
            .tarjeta
              .row.justify-content-center.align-items-center.p-1.mx-auto
                .col-md-12.col-lg-7.mb-3
                  p
                    b Componentes internos. 
                    | Factores propios de la empresa, bajo control directo de la administración.
                  ul.bullets
                    li Ingresos operacionales: ventas de bienes y servicios.
                    li Costos de producción: materias primas, mano de obra, costos indirectos.
                    li Gastos administrativos y de operación: sueldos, papelería, arrendamientos.
                    li Capacidad productiva: nivel máximo de producción alcanzable con los recursos disponibles.
                    li Políticas internas: lineamientos de inversión, ahorro, precios y distribución.
                .col-12.col-md-6.col-lg-4.mb-3 
                  figure
                    img(src='@/assets/curso/temas/tema3/img03.svg', alt='Imagen Decorativa').mx-auto
            
            .tarjeta
              .row.justify-content-center.align-items-center.p-1.mx-auto
                .col-md-12.col-lg-7.mb-3
                  p
                    b Componentes externos. 
                    | Factores del entorno, fuera del control directo de la organización, pero que afectan la planeación.
                  ul.bullets
                    li Inflación: variación en los precios de bienes y servicios.
                    li Tasas de interés: costo del financiamiento o rendimiento de las inversiones.
                    li Tipo de cambio: impacto en operaciones internacionales o importación de insumos. Políticas fiscales y tributarias: impuestos, incentivos o regulaciones estatales.
                    li Comportamiento del mercado: oferta, demanda, tendencias de consumo.
                    li Competencia: influencia en precios, participación de mercado y estrategias.
                .col-12.col-md-6.col-lg-4.mb-3 
                  figure
                    img(src='@/assets/curso/temas/tema3/img04.svg', alt='Imagen Decorativa').mx-auto
        
            .tarjeta
              .row.justify-content-center.align-items-center.p-1.mx-auto
                .col-md-12.col-lg-7.mb-3
                  p
                    b Componentes de gestión y control. 
                    | Factores que permiten evaluar el cumplimiento del presupuesto.
                  ul.bullets
                    li Metas financieras: objetivos de rentabilidad, liquidez y crecimiento.
                    li Indicadores de desempeño: métricas para comparar lo proyectado con lo ejecutado. Escenarios de simulación: análisis optimista, pesimista y realista.
                    li Mecanismos de retroalimentación: ajustes a proyecciones y corrección de desviaciones.
                .col-12.col-md-6.col-lg-4.mb-3 
                  figure
                    img(src='@/assets/curso/temas/tema3/img05.svg', alt='Imagen Decorativa').mx-auto
  

    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_3_2 3.2 Unidades de medida

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 Constituyen la base cuantitativa para la correcta elaboración y presentación del presupuesto empresarial, ya que permiten expresar en términos monetarios, físicos o porcentuales los ingresos, costos y gastos que intervienen en la planificación financiera. Estas unidades son esenciales para proyectar escenarios realistas, facilitar la comparación entre lo planeado y lo ejecutado, y garantizar la claridad en la toma de decisiones estratégicas dentro de la gestión empresarial.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10.mx-auto
        .titulo-sexto
          h5 Tabla 1. 
          span 
            i Unidades de Medida

        .tabla-a
          table.w-100
            caption <strong>Fuente:</strong> SENA, 2025.
            thead
              tr
                th Categoría
                th Unidades de medida
            tbody
              tr
                td Ingresos.
                td 
                  ul.bullets 
                    li Moneda local o extranjera (COP, USD, EUR). 
                    li Volumen de ventas: unidades, toneladas, litros, paquete. 
                    li Indicadores financieros: márgenes (%) o ingresos por cliente.

              tr
                td Costos.
                td 
                  ul.bullets 
                    li Pesos/dólares por periodo o por unidad producida.
                    li Unidades físicas: kilogramos, litros, horas-hombre.  
                    li Porcentajes aplicados sobre producción o ventas.
                    li Valor monetario del costo de oportunidad.

              tr
                td Gastos.
                td 
                  ul.bullets 
                    li Pesos por mes, trimestre o año. 
                    li Tasas de interés (%), comisiones bancarias.
                    li Porcentajes sobre ventas (ej. publicidad, distribución).
 
              tr
                td Variables externas.
                td 
                  ul.bullets 
                    li Inflación (% anual)
                    li Tasas de interés (% nominal o efectivo) 
                    li Tipo de cambio (COP/USD, COP/EUR)
                    li Crecimiento del mercado (%)
 
              tr
                td Gestión y control.
                td 
                  ul.bullets 
                    li Cumplimiento de metas (% de ejecución).
                    li Desviaciones: diferencia en pesos o porcentajes.
                    li Indicadores financieros: EBITDA, ROI, margen neto (%).
                    li Escenarios proyectados: valores monetarios bajo supuestos optimista, realista y pesimista.
    
    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_3_3 3.3 Parámetros técnicos.

    p.mb-5 Los parámetros técnicos en la elaboración de presupuestos empresariales son aquellos lineamientos que determinan cómo se calculan, registran y controlan las variables presupuestales, con el fin de obtener proyecciones confiables y comparables. Estos se aplican en distintas etapas del proceso presupuestal y abarcan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10.mx-auto
        .titulo-sexto
          h5 Tabla 2. 
            span 
              i Tipos de parámetros técnicos.
        .tabla-a
          table.w-100
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr
                th Nombre
                th Tipo de Parámetro
            tbody
              tr
                td Unidades de medida.
                td 
                  p.mb-2 Define la forma de cuantificar ingresos, costos y gastos.
                  ul.bullets 
                    li Monetarios: pesos, dólares, euros.
                    li Físicos: unidades, litros, kilogramos, horas-hombre.
                    li Porcentuales: márgenes, tasas de interés, inflación.

              tr
                td Horizonte temporal.
                td 
                  p.mb-2 Determina el período de análisis y planificación del presupuesto.
                  ul.bullets 
                    li Corto plazo: mensual o trimestral.
                    li Mediano plazo: anual.
                    li Largo plazo: superior a un año, usualmente estratégico.

              tr
                td Supuestos macroeconómicos y financieros.
                td 
                  p.mb-2 Son parámetros que contextualizan el presupuesto frente al entorno externo.
                  ul.bullets 
                    li Inflación proyectada (%).
                    li Tasas de interés nominales o efectivas.
                    li Tipo de cambio esperado (COP/USD).
                    li Crecimiento económico del sector (%)
              tr
                td Criterios de clasificación de los rubros.
                td 
                  p.mb-2 Son parámetros que contextualizan el presupuesto frente al entorno externo.
                  ul.bullets 
                    li Ingresos: operacionales y no operacionales.
                    li Costos: fijos, variables, directos, indirectos.
                    li Gastos: administrativos, financieros, de ventas, extraordinario

              tr
                td Métodos de estimación.
                td 
                  p.mb-2 Se refieren a las técnicas utilizadas para proyectar ingresos, costos y gastos.
                  ul.bullets 
                    li Proyecciones estadísticas (series de tiempo, tendencias).
                    li Método de porcentajes sobre ventas.
                    li Método de presupuestación base cero. 
                    li Método incremental.

              tr
                td Establece cómo se mide la ejecución del presupuesto.
                td 
                  p.mb-2 Define la forma de cuantificar ingresos, costos y gastos.
                  ul.bullets 
                    li Cumplimiento de metas (% de ejecución).
                    li Desviaciones entre lo presupuestado y lo real (en pesos o %).
                    li Ratios financieros: margen neto, EBITDA, ROI.







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

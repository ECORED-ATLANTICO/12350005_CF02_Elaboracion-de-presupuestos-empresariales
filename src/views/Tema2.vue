<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ingresos, costos y gastos


    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 La correcta identificación, clasificación y proyección de estos tres componentes constituye la base para la elaboración de presupuestos confiables, permitiendo medir la rentabilidad, controlar los recursos y facilitar la toma de decisiones estratégicas orientadas a la sostenibilidad empresarial. En ese sentido tenemos: 

    .row.mb-5
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0.d-flex
        .tarjeta.color-gris.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img02.svg' alt='AvatarTop').w-auto.mx-auto
          h5.text-center Ingresos.
          p.text-center Representan las entradas de recursos derivados de las actividades operativas, comerciales o de inversión.
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0.d-flex
        .tarjeta.color-gris.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img03.svg' alt='AvatarTop').w-auto.mx-auto
          h5.text-center Costos.
          p.text-center Corresponden al valor de los recursos utilizados en la producción de bienes o servicios.
      .col-12.col-md-6.offset-md-3.col-lg-4.offset-lg-0.mb-3.mb-lg-0.d-flex
        .tarjeta.color-gris.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop').w-auto.mx-auto
          h5.text-center Gastos.
          p.text-center Reflejan los desembolsos necesarios para la administración, operación y sostenimiento de la empresa.

    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_2_1 2.1 Tipos
    
    //- 4Col - 8Col con tarjeta icono derecha
    .container.mb-5
      .row.justify-content-center.align-items-center
          .col-12.col-lg-4
            figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img05.png', alt='imagen decorativa')
          .col-lg-8

            .container
              .row
                //- Tarjeta con Icono a la derecha
                .col-lg-12.position-relative
                  .crd.crd--avatarHorizontal.py-3.py-lg-0
                    .row.align-items-center
                      .col
                        p.mb-4.mb-lg-0 En el ámbito de la elaboración de presupuestos empresariales, la correcta identificación de los tipos de ingresos, costos y gastos resulta esencial para garantizar una planificación financiera sólida. Reconocer y clasificar estos elementos en sus distintas categorías permite construir presupuestos realistas, evaluar la rentabilidad y facilitar la toma de decisiones estratégicas.
                      .col-auto
                        figure
                          img(src='@/assets/curso/temas/tema2/img06.svg', alt='Imagen decorativa')


    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Tipos de Ingresos.
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')

    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-4.order-2.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img07.png', alt='imagen decorativa')
          .col-12.col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
            .custom-slider
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-gris.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop')
                  h5.text-center Operacionales.
                  p.text-center Provienen de la actividad principal de la empresa (ejemplo: ventas de productos, prestación de servicios).

                .tarjeta.color-gris.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img09.svg' alt='AvatarTop')
                  h5.text-center No operacionales.
                  p.text-center Recursos que no corresponden a la actividad central, como arriendos recibidos, dividendos o rendimientos financieros.
                
                .tarjeta.color-gris.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
                  h5.text-center Extraordinarios.
                  p.text-center Aquellos eventuales o poco frecuentes, como indemnizaciones, venta de activos o donaciones.

                .tarjeta.color-gris.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop')
                  h5.text-center Recurrentes.
                  p.text-center Se perciben de manera periódica y estable (suscripciones, contratos de largo plazo)
                
                .tarjeta.color-gris.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src='@/assets/curso/temas/tema2/img12.svg' alt='AvatarTop')
                  h5.text-center No recurrentes.
                  p.text-center Se presentan en momentos puntuales y no forman parte de la operación continua.
          

    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Tipos de costos.
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')


    //- TabsB
    TabsB.color-gris.mb-5(data-aos="fade-right")
        .py-4.py-md-5(titulo="Fijos" :icono="require('@/assets/curso/temas/tema2/img13.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Fijos.
              p Permanecen constantes sin importar el volumen de producción (arriendos, salarios administrativos, seguros).
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img19.png', alt='Texto que describa la imagen')
              
        .py-4.py-md-5(titulo="Variables" :icono="require('@/assets/curso/temas/tema2/img14.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Variables.
              p Cambian de acuerdo con el nivel de actividad o producción (materias primas, comisiones por ventas, energía de producción).
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img20.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Directos" :icono="require('@/assets/curso/temas/tema2/img15.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Directos.
              p Se asocian directamente con un producto o servicio (mano de obra directa, materiales).
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img21.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Indirectos" :icono="require('@/assets/curso/temas/tema2/img16.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Indirectos.
              p No pueden asignarse a un producto específico, pero son necesarios para la operación (mantenimiento, supervisión, servicios generales).
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img22.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Mixtos" :icono="require('@/assets/curso/temas/tema2/img17.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Mixtos.
              p Se presentan en momentos puntuales y no forman parte de la operación continua.
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img23.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Oportunidad" :icono="require('@/assets/curso/temas/tema2/img18.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Oportunidad.
              p No pueden asignarse a un producto específico, pero son necesarios para la operación (mantenimiento, supervisión, servicios generales).
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img24.png', alt='Texto que describa la imagen')
        
      
    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Tipos de gastos.
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')


    //- Columnas con slider
    .container.mb-5
      .row.justify-content-center.align-items-center
          .col-12.col-lg-4
            figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img25.png', alt='imagen decorativa')
          .col-lg-8
            .tarjeta.p-4.bg02.p-lg-5.p-md-4
              .tarjeta.bg-white.p-2.p-lg-3
                SlyderA(tipo="b").tarjeta--blanca.p-3.p-lg-4.rounded
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Administrativos.
                        p.mb-0 Relacionados con la gestión y dirección de la empresa (sueldos administrativos, papelería, arrendamientos de oficina).
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema2/img26.svg', alt='Imagen Decorativa').mx-auto
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Ventas o comerciales.
                        p.mb-0 Asociados a la promoción, publicidad, logística de distribución y fuerza de ventas.
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa').mx-auto
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Financieros.
                        p.mb-0 Desembolsos por intereses, comisiones bancarias, pagos de créditos o servicios financieros.
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa').mx-auto
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Extraordinarios.
                        p.mb-0 Aquellos inusuales o no recurrentes, como multas, sanciones o pérdidas por siniestros.
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema2/img29.svg', alt='Imagen Decorativa').mx-auto

                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Fijos.
                        p.mb-0 Permanecen constantes en el tiempo (salarios administrativos, alquileres).
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema2/img30.svg', alt='Imagen Decorativa').mx-auto
                  .tarjeta
                    .row.justify-content-center.align-items-center.p-1
                      .col-md-12.col-xl-10.mb-3
                        p
                          b Variables.
                        p.mb-0 Fluctúan de acuerdo con el nivel de ventas o actividad comercial (bonificaciones, comisiones).
                      .col-8.col-md-6.col-xl-2.mb-3 
                        figure
                          img(src='@/assets/curso/temas/tema2/img31.svg', alt='Imagen Decorativa').mx-auto

    separador

    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_2_2 2.2 Técnicas de estimación

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema2/img32.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 La estimación es un proceso clave en la construcción de presupuestos, ya que permite proyectar de manera realista los recursos financieros que entrarán y saldrán de la empresa. Para lograrlo, se aplican diversas técnicas de estimación, que varían según el nivel de información disponible, el horizonte de planeación y la naturaleza del negocio. De acuerdo con el proceso (ingresos, costos y gastos) las técnicas se clasifican de la siguiente manera:


    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Técnicas de estimación de ingreso.
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')


    //- Tabs A
    TabsA.color-terciario.mb-5(data-aos="fade-right")
      .tarjeta.p-4(titulo="Proyecciones históricas")
        .row.mx-auto.align-items-center.justify-content-center.h-100
          .col-12.col-xl-5.mb-4.mb-xl-0
            h4 Proyecciones históricas.
            p.mb-0 Basadas en el comportamiento de ventas pasadas ajustadas por inflación, estacionalidad o crecimiento esperado.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema2/img34.png', alt='Imagen Decorativa').mx-auto
      
      .tarjeta.p-4(titulo="Método de tendencia o series de tiempo")
        .row.mx-auto.align-items-center.justify-content-center.h-100
          .col-12.col-xl-5.mb-4.mb-xl-0
            h4 Método de tendencia o series de tiempo.
            p.mb-0 Usa datos históricos para identificar patrones y proyectar ventas futuras.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema2/img33.png', alt='Imagen Decorativa').mx-auto
      
      .tarjeta.p-4(titulo="Método de participación en el mercado")
        .row.mx-auto.align-items-center.justify-content-center.h-100
          .col-12.col-xl-5.mb-4.mb-xl-0
            h4 Método de participación en el mercado.
            p.mb-0 Estima ingresos a partir de la cuota de mercado proyectada frente a la demanda total.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema2/img35.png', alt='Imagen Decorativa').mx-auto
      
      .tarjeta.p-4(titulo="Encuestas y estudios de mercado.")
        .row.mx-auto.align-items-center.justify-content-center.h-100
          .col-12.col-xl-5.mb-4.mb-xl-0
            h4 Encuestas y estudios de mercado.
            p.mb-0 Recoge información directa de consumidores y competidores para proyectar ingresos realistas.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema2/img36.png', alt='Imagen Decorativa').mx-auto
      
      .tarjeta.p-4(titulo="Escenarios de proyección")
        .row.mx-auto.align-items-center.justify-content-center.h-100
          .col-12.col-xl-5.mb-4.mb-xl-0
            h4 Escenarios de proyección
            p.mb-0 Construcción de escenarios optimistas, pesimistas y realistas para prever ingresos en distintos contextos.
          .col-12.col-xl-5.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/temas/tema2/img37.png', alt='Imagen Decorativa').mx-auto


    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Técnicas de estimación de costos.
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')



    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-4.mb-3.mb-md-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img38.png', alt='imagen decorativa')
          .col-12.col-lg-8.custom-slider
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img39.svg' alt='AvatarTop')
                h5.text-center Método histórico.
                p.text-center Proyección basada en registros de costos pasados ajustados por variaciones de precios o eficiencia productiva.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img40.svg' alt='AvatarTop')
                h5.text-center Costeo estándar.
                p.text-center Se establecen costos predeterminados para materiales, mano de obra y gastos indirectos, con base en estudios técnico
              
              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img41.svg' alt='AvatarTop')
                h5.text-center Costeo por actividades<br>(ABC – 
                  i activity based costing).
                p.text-center Distribuye costos indirectos según el consumo de recursos en cada proceso o actividad.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img42.svg' alt='AvatarTop')
                h5.text-center Método del punto de equilibrio.
                p.text-center Estima costos en función del nivel mínimo de producción o ventas necesarias para cubrir gastos.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img43.svg' alt='AvatarTop')
                h5.text-center Regresión estadística.
                p.text-center Relaciona costos con variables clave (ejemplo: materia prima según nivel de producción).

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img44.svg' alt='AvatarTop')
                h5.text-center Simulación de escenarios
                p.text-center Proyecciones considerando cambios en precios de insumos, volúmenes de producción o eficiencia operativa.

              
    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Técnicas de estimación de gastos.
            img.image(src='@/assets/curso/temas/img01.svg', alt='Imagen decorativa')


    .container(data-aos="fade-right")
      .row.align-items-center
        .col-12.col-md-12.col-lg-10.mx-auto
          PasosA.color-primario.mb-5(tipo="n")
            .row.align-items-center.justify-content-center
              .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                h3 Método porcentual sobre ventas.
                p Los gastos (administrativos, de ventas y financieros) se calculan como un porcentaje histórico de las ventas proyectadas.
              .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema2/img45.svg', alt='Texto que describa la imagen')

            .row.align-items-center.justify-content-center
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img46.svg', alt='Texto que describa la imagen')
              .col-md-8.text-left
                h3 Presupuesto base cero (PBC).
                p Cada gasto debe justificarse desde cero, sin depender de periodos anteriores, eliminando ineficiencias.
                
            .row.align-items-center.justify-content-center
              .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                h3 Análisis incremental.
                p Parte de los gastos históricos y les aplica un ajuste por inflación o crecimiento
              .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema2/img47.svg', alt='Texto que describa la imagen')

            .row.align-items-center.justify-content-center
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img48.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.text-left
                h3 Método comparativo.
                p Se realiza un análisis de gastos con empresas similares del sector para estimar promedios realistas.
            
            .row.align-items-center.justify-content-center
              .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                h3 Juicio de expertos.
                p Consultar a especialistas internos o externos para prever necesidades de gasto en áreas críticas.
              .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema2/img49.svg', alt='Texto que describa la imagen')
             
            .row.align-items-center.justify-content-center
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img50.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.text-left
                h3 Escenarios de proyección.
                p Construcción de escenarios de gasto en función de distintas estrategias de expansión, recorte o estabilidad.




</template>

<script>
export default {
  name: 'Tema2',
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

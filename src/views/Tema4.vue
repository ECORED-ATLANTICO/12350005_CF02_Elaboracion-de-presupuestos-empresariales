<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas TIC

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 Las herramientas TIC (tecnologías de la información y la comunicación) son aplicaciones, plataformas y recursos digitales diseñados para optimizar la recolección, procesamiento, análisis y presentación de la información financiera. Estas herramientas permiten automatizar cálculos, simular escenarios, generar reportes en tiempo real y facilitar la toma de decisiones estratégicas, garantizando mayor precisión, eficiencia y transparencia en la gestión presupuestal.


    .container.mb-5
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10
          .text-white.bg-color-secundario.px-3.py-2.curvas 
            p.mb-0.text-center
              b Entre las principales herramientas TIC aplicadas se encuentran:

    //- TabsB
    TabsB.color-gris.mb-5(data-aos="fade-right")
        .py-4.py-md-5(titulo="Hojas de cálculo avanzadas." :icono="require('@/assets/curso/temas/tema4/img02.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Hojas de cálculo avanzadas.
              p Las más usadas están: Microsoft Excel, Google Sheets útiles para para cálculos y proyecciones.
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img07.png', alt='Texto que describa la imagen')
              
        .py-4.py-md-5(titulo="Software especializados en planeación y presupuestos." :icono="require('@/assets/curso/temas/tema4/img03.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 
                i Software 
                | especializados en planeación y presupuestos.
              p Integran módulos contables, financieros y de control. Los 
                i software 
                | más utilizados son por ejemplo: SAP, Oracle Hyperion, Odoo.
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img08.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Plataformas colaborativas en la nube." :icono="require('@/assets/curso/temas/tema4/img04.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Plataformas colaborativas en la nube.
              p Permiten el trabajo en tiempo real y la validación conjunta de información.
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img09.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Sistemas de inteligencia de negocios." :icono="require('@/assets/curso/temas/tema4/img05.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Sistemas de inteligencia de negocios. 
                i (business intelligence).
              p Generan tableros de control y análisis de indicadores presupuestales.
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img10.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Aplicaciones de presentación y visualización." :icono="require('@/assets/curso/temas/tema4/img06.svg')")
          .row.py-3.px-4.px-md-5.align-items-center.justify-content-center
            .col-12.col-lg-5.mb-4.mb-lg-0
              h4 Aplicaciones de presentación y visualización.
              p Facilitan la exposición clara y comprensible de los presupuestos ante la gerencia o grupos de interés. Las plataformas más empleadas son: Power BI, Tableau, Google Data Studio.
            .col-12.col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema4/img11.png', alt='Texto que describa la imagen')
        
       
        
    separador


    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_4_1 4.1 Hoja de cálculo


    //- Cajon
    .cajon.color-contenido.p-4.mb-5
      p Las hojas de cálculo son herramientas informáticas que permiten organizar, procesar y analizar datos en formato tabular, mediante filas y columnas, facilitando la realización de cálculos matemáticos, financieros y estadísticos de manera rápida y precisa. Se constituyen un recurso fundamental, ya que posibilitan la construcción de proyecciones de ingresos, costos y gastos; la simulación de escenarios; y el control del cumplimiento de metas presupuestales. 
      p.mb-0 Su utilidad radica en que integran funciones automatizadas, fórmulas lógicas, gráficos y tablas dinámicas que permiten transformar la información financiera en reportes claros y visuales. Además, favorecen la toma de decisiones empresariales al brindar resultados en tiempo real y facilitar la comparación entre lo presupuestado y lo ejecutado. Las más utilizadas en las organizaciones tanto de forma individual como colaborativa son: 

    //- 3 Columnas con tarjetas
    .row.mb-5
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0.d-flex
        .tarjeta.color-gris.p-4.dots
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img12.svg' alt='AvatarTop').w-auto.mx-auto
          h5.text-center Microsoft Excel.
          p.text-center Es un programa de hoja de cálculo de Microsoft, ampliamente usado para realizar cálculos, análisis de datos, creación de gráficos y elaboración de presupuestos de manera profesional.
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0.d-flex
        .tarjeta.color-gris.p-4.dots
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img13.svg' alt='AvatarTop').w-auto.mx-auto
          h5.text-center Google Sheet.
          p.text-center Es una hoja de cálculo en línea de Google que permite trabajar en la nube, colaborar en tiempo real y acceder desde cualquier dispositivo con conexión a internet.
      .col-12.col-md-6.offset-md-3.col-lg-4.offset-lg-0.mb-3.mb-lg-0.d-flex
        .tarjeta.color-gris.p-4.dots
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img14.svg' alt='AvatarTop').w-auto.mx-auto
          h5.text-center LibreOffice Calc.
          p.text-center Es la hoja de cálculo del paquete libre LibreOffice, que ofrece funciones similares a Excel, pero de código abierto y gratuito, ideal para análisis y gestión de datos.

    separador


    //- Titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_4_2 4.2 Funciones estadísticas y gráficos

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema4/img16.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 Son herramientas esenciales para el análisis y la presentación de la información financiera dentro del proceso de elaboración de presupuestos empresariales. Mientras que las funciones estadísticas permiten resumir, organizar e interpretar los datos mediante cálculos como promedios, medianas, variaciones o tendencias, los gráficos transforman esos resultados en representaciones visuales que facilitan la comprensión y la comparación de los indicadores presupuestales. Juntas, estas herramientas hacen más eficiente la toma de decisiones al convertir grandes volúmenes de datos en información clara, precisa y fácil de interpretar.


    //- Tabla
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10.mx-auto
        .titulo-sexto
          h5 Tabla 3. 
            span Funciones estadísticas
        .tabla-a
          table.w-100
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr
                th Nombre
                th Descripción
            tbody
              tr
                td PROMEDIO ()
                td Obtiene el valor medio de ingresos, costos o gastos.
              tr
                td MEDIANA ()  
                td Identifica el valor central de un rango de datos.
              tr
                td MAX () y MIN ()
                td Muestran el valor más alto y el más bajo (ej. ventas máximas y mínimas).
              tr
                td DESVEST () 
                td Mide la dispersión o variabilidad de los datos (útil en análisis de gastos).
              tr
                td CONTAR () y CONTARA () 
                td Cuentan valores o celdas con datos.

              tr
                td SUMAR.SI () 
                td Suma valores que cumplen una condición (ej. ventas de un producto específico).


    //- Tabla
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-12.col-lg-10.mx-auto
        .titulo-sexto
          h5 Tabla 4. 
            span Gráficos más utilizados en presupuestos

        .tabla-a
          table.w-100
            caption 
              b Fuente: 
              | SENA, 2025.
            thead
              tr
                th Tipo de grafico 
                th Descripción
            tbody
              tr
                td 
                  p 
                    b Gráfico de columnas/barras 
                td Compara ingresos, costos y gastos por periodos.

              tr
                td
                  p
                    b Gráfico de líneas 
                td Analiza tendencias en ventas o gastos a lo largo del tiempo.

              tr
                td
                  p
                    b Gráfico circular (pastel) 
                td Muestra la distribución porcentual de los gastos o ingresos
                 
              tr
                td 
                  p
                    b Gráfico combinado
                td Compara ingresos y egresos en una misma visualización.

              tr
                td 
                  p
                    b Tablas y gráficos dinámicos 
                td Resume y analiza grandes volúmenes de datos de manera interactiva.


</template>

<script>
export default {
  name: 'Tema4',
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

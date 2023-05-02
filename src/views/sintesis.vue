<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Toda persona que quiera interpretar el lenguaje de señas debe conocer la estructuras básicas del lenguaje español, por ende, es fundamental conocer todos aquellos aspectos de la lingüística, sus características, niveles, ramas etc., esto permitirá la comprensión del funcionamiento de los procesos de comunicación del ser humano, lo que facilitará entender su aplicación en el contexto del lenguaje de señas que es, precisamente, el principal objetivo de este componente formativo.
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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

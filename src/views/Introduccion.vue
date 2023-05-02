<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-12.bg-c1
        .p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/intro/img1.svg', style="width: 110px").m-auto
            .col
              p.mb-0 Bienvenido a este componente formativo denominado #[b.txt-c1 “Fundamentos de la lingüística y comunicación en la LSC y español”]; para comenzar el recorrido por el mismo, se invita a revisar la siguiente información.

    .bg-c15
      .px-5

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/HCOvGerL9tg" title="Reconociendo la relación de la metalingüística y la LSC (Lengua de Señas Colombiana)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Reconociendo la relación de la metalingüística y la LSC (Lengua de Señas Colombiana).

        br

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

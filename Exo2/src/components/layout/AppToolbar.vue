<template>
  <VToolbar dense tag="nav" class="secondary flex-grow-0">
    <VTabs dark background-color="transparent" active-class="cadet">
      <v-tabs-slider color="transparent"></v-tabs-slider>
      <VTab v-for="link in links" :key="link.label">
        {{ link.label }}
      </VTab>
    </VTabs>
  </VToolbar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AppToolbar extends Vue {
  get links() {
    return this.url;
  }
  url = [
    {
      label: "Carousel",
      to: {
        name: "home",
      },
      options: {
        exact: true,
      },
    },
    {
      label: "Vignette large",
      to: {
        name: "large",
      },
    },
    {
      label: "Vignette flip",
      to: {
        name: "flip",
      },
    },
  ];
}
</script>

<style lang="scss" scoped>
.v-tab {
  text-transform: capitalize;
	font-family: 'Amaranth', sans-serif;
	font-weight: bold;
  color:white!important
}
.v-application .v-tabs-slider {
  background-color: transparent;
  height: 100%;
  width: 100%;
}
</style>

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
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: 0 1 auto;
    font-size: 0.875rem;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 0.0892857143em;
    line-height: normal;
    min-width: 90px;
    max-width: 360px;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    transition: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	font-family: 'Amaranth', sans-serif;
	font-weight: bold;
}
.v-application .secondary {
  background-color: #282d32 !important;
  border-color: #282d32 !important;
}
.v-application .cadet {
  background-color: #392f5a !important;
  border-color: #392f5a !important;
}
.v-application .v-tabs-slider {
  background-color: transparent;
  height: 100%;
  width: 100%;
}
</style>

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

import { Links } from '../../assets/db/data';

@Component
export default class AppToolbar extends Vue {
  url = Links
  get links() {
    return this.url;
  }
}
</script>

<style lang="scss" scoped>
.fixed {position:fixed;width:100%;top:0;left:0;}
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

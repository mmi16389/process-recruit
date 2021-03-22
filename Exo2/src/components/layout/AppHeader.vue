<template>
  <div class="app-header">
    <div
      class="app-header-title"
    >
	    The Galactic Center
	</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
 
/** The Header of the application */
@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
.app-header {
  box-shadow: none;
  height:200px;
  background-image: url("../../assets/head_bg.jpg");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.app-header-title {
	position:aboslute;
	width:70%;
	text-align:center;
	color: white;
	margin: auto;
	font-family: 'Amaranth', sans-serif;
	font-size: 4em;
}
</style>

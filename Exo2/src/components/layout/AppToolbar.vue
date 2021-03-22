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
  mounted(){
    document.addEventListener('scroll', ()=>{
      /*const elmToolbar = document.getElementById('toolbar');
      const elmHeader = document.getElementById('header');
      const barY = elmToolbar?.getBoundingClientRect().top;
      const headerY = elmHeader?.getBoundingClientRect().top;
      const calc=160-Number(headerY)
      if(elmToolbar !==null  && headerY ===-154){
           elmToolbar.style.position='fixed';
           elmToolbar.style.left='0';
           elmToolbar.style.right='0';
           elmToolbar.style.zIndex='10'; 
           elmToolbar.style.top=`${calc}px`
      }*/

      const header = document.getElementById("header");
      const windowHeight = document.body.clientHeight,
		  currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const cal = windowHeight - header.offsetHeight;
	    // console.log(currentScroll);
    	// header.className = (currentScroll >= header.offsetHeight) ? "fixed" : "";
      if(currentScroll >= header.offsetHeight){
        header.style.position='fixed';
        header.style.left='0';
        header.style.right='0';
      }
    },false);
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

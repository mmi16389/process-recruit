<template>
<v-container fill-height>
     <div>{{title}}</div>
     <div id="box-vignette">
        <div v-for="k in 20" :key="k">
         <div class="list-wrapper">
                <v-card>
                <v-img
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-text> </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-actions>fdfdf </v-card-actions>
              </v-card>
             </div>
    </div> 
     </div>
</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
const Props = Vue.extend({
  props: {
    /** The title of the Vignettes */
    title: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: undefined,
    },
  },
});
const MixinsDeclaration = mixins(Props);
@Component({
  components: {},
})
export default class VignetteCarousel extends MixinsDeclaration {}
</script>
<style scoped>
#box-vignette {
  display: flex; 
  margin:auto;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
}
.list-wrapper {
  margin: 0 3px;
  height: 100%;
  box-sizing:content-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  padding: 15px 15px 15px 15px;
}
</style>
<template>
  <div class="home-container">
    <!-- Example vignette Simple: carousel //-->
     <Vignettes
      id="simple"
      title="Caroussel - vignette simple"
      type="simple"
      :cards="simple"
      @vignette:popin="showdialog($event)"
    />
    <!-- //-->

     <!-- Example vignette Simple: carousel //-->
     <Vignettes
      id="large"
      title="vignette large"
      type="large"
      :cards="large"
      @vignette:popin="showdialog($event)"
    />
    <!-- //-->

     <!-- Example vignette Simple: Flip //-->
     <Vignettes
      id="flip"
      title="vignette Flip"
      type="flip"
      :cards="flip"
      @vignette:popin="showdialog($event)"
    />
    <!-- //-->

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title >
             Voir Plus
          </v-card-title>
           <v-divider></v-divider>
          <v-card-text>
        {{textCard}}
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Accepter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Vignettes } from "../components/global/vignettes"; 
import { vignetteSimple, vignetteLarge, vignetteFlip} from '../assets/db/data';

@Component({
  components: {
    Vignettes,
  },
})
export default class Home extends Vue {
    textCard = '';
    simple = vignetteSimple;
    large = vignetteLarge;
    flip = vignetteFlip;

    dialog = false; 
    
    showdialog(payload:string){
         this.textCard = payload;
         this.dialog=true;
    }
}
</script>

<style scoped>
.home-container {
  margin: auto;
  padding: 30px 30px 30px 30px;
  min-height: 300px;
  overflow: auto;
  width:90%
}
</style>

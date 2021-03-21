<template>
<v-container fill-height>
  <div class="title">{{title}}</div>
     <div id="box-vignette">
        <div v-for="card in __cards" :key="card.id">
         <div class="list-wrapper">
            <v-card :width=" __width" :class="{'flip-card': type==='flip','card-transform':type==='simple' || type==='large'}">
              <v-row :class="{'flip-card-inner': type==='flip'}">
               <v-col :class="{'flip-card-front': type==='flip'}">
               <v-img
                  :src="card.img"
                  height=100%
                ></v-img>
                 </v-col>
                <v-col :class="{'flip-card-back': type==='flip'}">
                  <v-card-title :class="{'large':type==='large'}">{{card.title}}</v-card-title>
                  <v-card-subtitle :class="{'large':type==='large'}">{{card.subtitle}}</v-card-subtitle>
                  <v-card-text :class="{'large':type==='large'}">{{card.text}}</v-card-text>
               </v-col>
               </v-row>
               <v-row>
                <v-col v-if="type=='large' || type=='simple'">
                  <v-divider></v-divider>
                  <v-card-actions>
                  <slot name="actions"> 
                      <a :href="card.url">voir plus </a>  
                   </slot>
                  </v-card-actions>
                </v-col>
                </v-row>
              </v-card>   
             </div>
     </div> 
     </div>
</v-container>
</template>

<script lang="ts">
import Vue , {PropType} from "vue";
import Component, { mixins } from "vue-class-component";

import { Card } from './types';

const Props = Vue.extend({
  props: {
    cards: {
        type: null as unknown as PropType<Card | Array<Card> | null>,
        default: undefined,
    },
    /** The title of the Vignettes */
    title: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: undefined,
    },
    width: {
      type: Number,
      default: 360
    }
  },
});
const MixinsDeclaration = mixins(Props);
@Component({
  components: {},
})
export default class VignetteCarousel extends MixinsDeclaration {
  
  get __cards(): any{
    if(this.type==='simple'){
      return this.cards;
    }
    else if((this.type ==='large' || this.type ==='flip')) {
      return [this.cards]
    }
  }

  get __width(): number {
    return this.width
  }

  created():void{
    if(this.type ==='large') this.width = 950;
  }
}
</script>

<style scoped>
#box-vignette {
  display: flex; 
  margin:auto;
  margin-top: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
}
.title{
  text-align:center;
	font-family: 'Amaranth', sans-serif;
	font-size: 4em;
  width:90%;margin:auto
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
.v-card__title,.v-card__subtitle, .v-card__text, .v-card__actions a{
   display: block;
   width:80%;
   margin:auto;
   font-family: 'Amaranth', sans-serif;
   text-align:center;
   text-decoration: none;
   color:black                                                                                                                                                              
}
.v-card__title{
     font-weight:bold;
     text-transform: uppercase; 
}
.card-transform:hover{
  cursor: pointer;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3) !important;
  top:-4px
}
.v-card{
  cursor: pointer;
}
#box-vignette .row, #box-vignette .col{
    margin: 0;
    padding:0;
}
.large{
 text-align:left
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  margin: auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
<template>
<v-container fill-height>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
     <div id="box-vignette" v-bind="$attrs">
        <div v-for="card in __cards" :key="card.id">
         <div class="list-wrapper">
            <v-card 
               v-customize="type"
               :width="width"
            >
              <v-row >
               <v-col>
               <v-img
                  :src="card.img"
                  height=100%
                ></v-img>
                </v-col>
                <v-col>
                  <v-card-title>{{card.title}}</v-card-title>
                  <v-card-subtitle 
                     v-flag="card.flag"
                   >{{card.subtitle}}
                   </v-card-subtitle>
                  <v-card-text>{{card.text}}</v-card-text>
               </v-col>
               </v-row>
               <v-row>
                <v-col v-if="type=='large' || type=='simple'">
                  <v-divider></v-divider>
                  <v-card-text @click="$emit('vignette:popin',card.text)">
                      {{locales.actionText}} 
                  </v-card-text>
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

import { Flag, Customize } from './directives';
import { locales } from './locales';

import { Card } from './types';

const Props = Vue.extend({
  props: {
    /** Value/items content of card */
    cards: {
        type: null as unknown as PropType<Card | Array<Card> | null>,
        default: undefined,
    },
    /** The title of the Vignettes */
    title: {
      type: String,
      default: undefined,
    },
    /** Define type of vignette: simple|large|flip */
    type: {
      type: String,
      default: undefined,
    },
    /** Set the size of the card */
    width: {
      type: Number,
      default: 360
    }
  },
});

const MixinsDeclaration = mixins(Props);

@Component({
  inheritAttrs: false,
  directives: {
    flag : Flag,
    customize:Customize
  },
  components: {},
})
export default class VignetteCarousel extends MixinsDeclaration {
  // Locales
	locales = locales;

  /** Compute value of cards */
  get __cards(): any{
    if(this.type==='simple'){
      return this.cards;
    }
    else if((this.type ==='large' || this.type ==='flip')) {
      return [this.cards]
    }
  }
}
</script>

<style scoped>
#box-vignette {
  display: flex; 
  margin:auto;
  margin-top: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
}
.large{
  text-align:left!important
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
.flip-card {
  width: 300px;
  height: 300px;
  perspective: 1000px;
  margin: auto;
  background: transparent!important;
  box-shadow:0!important;
}
.flip-card:hover{
  box-shadow:0!important;
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
   box-shadow:0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-back {
  background-color:lightgrey;
  color: white;
  transform: rotateY(180deg);
}
</style>
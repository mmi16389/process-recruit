<template>
  <div class="home">
    <div class="title">{{ title }}</div>
    <slot name="content">
      <div v-if="type === 'carrousel'">
          <v-row
          no-gutters
          style="height:400px;float:right;border:1px solid red; overflow-y:auto"
          >
            <v-col v-for="k in 6" :key="k">
              <v-card max-width="300">
                <v-img
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-text> </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-actions>fdfdf </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
      </div>
      <div v-if="type === 'simple'">
        <div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  alt="Avatar"
                  style="height: 300px"
                />
              </div>
              <v-card-text class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </v-card-text>
            </div>
          </div>
        </div>
      </div>
    </slot>
  </div>
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
.title {
  width: 90%;
  text-align: center;
  margin-bottom: 20px;
  color: #515151;
  font-family: "Amaranth", sans-serif !important;
  font-weight: bold;
  font-size: 1.5em !important;
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
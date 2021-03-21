<template>
  <div class="home-container">
    <Vignettes
      title="vignette simple"
      type="simple"
      :cards="cards"
    />

     <Vignettes
      title="vignette large"
      type="large"
      :cards="card"

    />

    <Vignettes
      title="vignette flip"
      type="flip"
      :cards="card"

    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Vignettes } from "@/components/vignettes";

@Component({
  components: {
    Vignettes,
  },
})
export default class Home extends Vue {
  cards = [
    {
      id: "1",
      img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
      title: "Bienvenue aux invalides",
      subtitle: "genenn",
      text: "belle monde de jalousie et de perte",
      action: ()=>{}
    },
    {
      id: "2",
      img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
      title: "Bienvenue aux invalides",
      subtitle: "genenn",
      text: "belle monde deelle monde deelle monde deelle monde deelle monde deelle monde de jalousie et de perte",
      action: ()=>{}
    },
    {
      id: "3",
      img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
      title: "Bienvenue aux invalides",
      subtitle: "genenn",
      text: "belle monde de jalousie et de perte",
      action: ()=>{}
    },
    {
      id: "4",
      img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
      title: "Bienvenue aux invalides",
      subtitle: "genenn",
      text: "belle monde de jalousie et de perte",
      action: ()=>{}
    },{
      id: "5",
      img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
      title: "Bienvenue aux invalides",
      subtitle: "genenn",
      text: "belle monde de jalousie et de perte",
      action: ()=>{}
    },
    {
      id: "6",
      img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
      title: "Bienvenue aux invalides",
      subtitle: "genenn",
      text: "belle monde de jalousie et de perte",
      action: ()=>{}
    }
    ] 
    card =
    {
      id: "1",
      img:"https://cdn.vuetifyjs.com/images/cards/cooking.png",
      title: "Bienvenue aux invalides",
      subtitle: "genenn",
      text: "pmonde de jalousie et de pertebelle monde de jalousie et de pertebellede pertebelle monde de jalousie et de pertebelle monde de jalousie et de pertebelle monde de jalousie et de pertebelle monde de jalousie et de pertebelle monde de jalousie et de pertebelle monde de jalousie et de perte",
      action: ()=>{}
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

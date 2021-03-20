<template>
  <div class="home-container">
    <Vignettes
      title="Carrousel - vignette simple"
      type="carrousel"
    />
   <Vignettes title="Vignette simple" type="simple" />
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
export default class Home extends Vue {}
</script>

<style scoped>
.home-container {
  margin: auto;
  padding: 30px 30px 30px 30px;
  border: 1px solid green;
  min-height: 300px;
  overflow: auto;
}
</style>

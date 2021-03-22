<template>
  <!-- VApp is an element which is required to use Vuetify. See https://vuetifyjs.com/en/ for help -->
  <VApp v-cloak>
    <div id="app-header">
       <AppHeader /> 
       <AppToolbar />
    </div>
    <VMain>
      <!-- Transition between routes -->
      <transition name="fade" mode="out-in">
        <!-- Load the component defined in the router for the current route -->
         <RouterView />
      </transition>
    </VMain>

    <AppFooter />
  </VApp>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Static import for faster rendering
import { AppHeader, AppToolbar, AppFooter } from "@/components/layout";

/** App is the main component */
@Component({
  components: {
    AppHeader,
    AppToolbar,
    AppFooter,
  },
})
export default class App extends Vue {
}
</script>

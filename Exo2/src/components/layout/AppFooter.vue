<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="secondary lighten-1 white--text text-center full-width"
    >
      <div class="container-footer">
        <v-row>
          <v-col class="col-sm-12 col-md-6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Services</v-list-item-title>
                <v-list-item-subtitle>
                  Secondary line text Lorem ipsum dolor sit amet,
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  consectetur adipiscing elit.
                </v-list-item-subtitle>
                <v-list-item-subtitle> Premier ordre </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-col class="col-xs-6 col-md-3">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
                <v-list-item-subtitle>
                  Secondary line text Lorem ipsum dolor sit amet,
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  consectetur adipiscing elit.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-col class="col-xs-6 col-md-3">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Galactic center</v-list-item-title>
                <v-list-item-subtitle>
                  Wikipedia is an online free-content encyclopedia project
                  helping to create a world in which everyone can freely share
                  in the sum of all knowledge. It is supported by the Wikimedia
                  Foundation and based on a model of freely editable content.
                  The name "Wikipedia" is a blending of the words wiki (a
                  technology for creating collaborative websites, from the
                  Hawaiian word wiki, meaning "quick") and encyclopedia.
                  Wikipedia's articles provide links designed to guide the user
                  to related pages with additional information.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-text>
              <div class="footer-btn">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
                >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

/** The application footer */
@Component({
  components: {},
})
export default class AppFooter extends Vue {
  icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
}
</script>
<style lang="scss">
.full-width {
  width: 100% !important;
}
.footer-btn {
  text-align: center;
}
.container-footer {
  .v-card__title,
  .v-card__subtitle,
  .v-card__text,
  .v-list-item__title,
  .v-list-item__subtitle {
    font-family: "Amaranth", sans-serif !important;
    text-align: left !important;
    color: white !important;
  }
}
</style>
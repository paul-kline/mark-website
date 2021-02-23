<template>
  <v-app-bar
    fixed
    app
    fade-img-on-scrolls
    shrink-on-scroll
    elevate-on-scroll
    center-active
    prominent
    :src="require('~/assets/guitar1.jpg')"
  >
    <!-- https://photos.google.com/photo/AF1QipNr1FarCTSi5aSck40FOCc9Yfz0pULP1Wg62XOG  tractor at debbie daves
      https://photos.google.com/photo/AF1QipNTJcL4lxUop2FQkFOghTv_vSWTDGK5VnQD4vNe fireworks 
      https://photos.google.com/photo/AF1QipMT98M6Cpo2jJbaujs-Tiw3rhfWFL-bDxENjAPr circuit board
      https://photos.google.com/photo/AF1QipMzyNWU8gGOuWeT5A8Fwc6m1xyE-RGUP1Hx1cB5 light behind tree
      https://photos.google.com/photo/AF1QipOckWYPtyJqLmvGnAC9HltwR9UmMILpsHCFJvvN sunset from car
      https://photos.google.com/photo/AF1QipP-dia8S-E52_i19Qfowa5548VdbajosMGli_lc pretty wood from car
      https://photos.google.com/photo/AF1QipMiubr-JzcTdE_O1eTOJkAdpyMHFXi5tvlckEOQ colorado stump
      https://photos.google.com/photo/AF1QipPZ9_wwyzSKp38NrBypTx-S5PW0hBfiPQGV_Bqx running with Perry
      https://photos.google.com/photo/AF1QipNVLP9rrUtymtPHFjOHCsTFW2R56ox0AnwMN_zA Me sunflowers-->
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to bottom left, rgba(255,255,255,.18), rgba(0,0,0,.6)"
      ></v-img>
    </template>
    <v-toolbar-title class="myfont">Mark Kline</v-toolbar-title>
    <v-spacer />

    <template v-slot:extension>
      <v-tabs
        align-with-title
        grow
        center-active
        active-class="blackie"
        color="light-green"
      >
        <v-tab to="music" active-class="blackie">Music</v-tab>
        <v-tab to="song-coaching" active-class="blackie">Song-coaching</v-tab>
        <v-tab to="comission" active-class="blackie">Comission</v-tab>
        <v-tab to="news" active-class="blackie">News</v-tab>
        <v-tab to="bio" active-class="blackie">Bio</v-tab>
        <v-tab to="performances" active-class="blackie">Performances</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  @Prop() name!: string;
  @Prop() initialEnthusiasm!: number;

  enthusiasm = this.initialEnthusiasm;

  increment() {
    this.enthusiasm++;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join("!");
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
.blackie {
  color: white !important;
}
.myfont {
  font-family: "Playfair Display", serif;
}
</style>

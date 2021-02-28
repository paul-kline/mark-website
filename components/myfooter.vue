<template>
  <span>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <!-- <v-footer app -->
    <v-footer app>
      <!-- <v-col> -->
      <MarkPlayer />
      <div>PaulKlineLabs &copy; {{ new Date().getFullYear() }}</div>
      <!-- </v-col> -->
    </v-footer>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MarkPlayer from "~/components/MarkPlayer.vue";
@Component({ components: { MarkPlayer } })
export default class HelloDecorator extends Vue {
  fab: boolean = false;
  onScroll(e: any) {
    if (typeof window === "undefined") return;
    const top = window.pageYOffset || e.target.scrollTop || 0;
    this.fab = top > 20;
  }
  toTop() {
    //@ts-ignore;
    this.$vuetify.goTo(0);
  }
  mounted() {
    console.log("footer mounted");
  }
}
</script>

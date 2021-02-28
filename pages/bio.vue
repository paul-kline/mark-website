<template>
  <div class="mt-5">
    <div class="pt-3">
      <p class="container center">
        Mark Kline is a songwriter and performer from the Peoria area. He
        completed an Advanced Professional Certificate in Songwriting from
        Berklee Online College of Music, complementing his undergrad degree in
        music from Eureka College, where he studied piano and voice.
      </p>
    </div>
    <mform />
    <div
      v-show="global.bottomPlayerDisplayed"
      style="height:50px; background: #121212"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import mform from "~/components/mform.vue";
import Global from "~/ts/global";
@Component({ components: { mform } })
export default class HelloDecorator extends Vue {
  global = Global.getInstance();
  mounted() {
    console.log("bio mounted");
    console.log("globalplaying", this.global.nowPlayingSongHolder);
  }
  created() {
    console.log("bio created");
  }
}
</script>
<style>
.center {
  text-align: center;
}
</style>

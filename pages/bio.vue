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
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {}
</script>
<style>
.center {
  text-align: center;
}
</style>

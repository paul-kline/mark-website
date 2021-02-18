<template>
  <v-app dark>
    <myheader />
    <v-main>
      <v-container>
        <keep-alive>
          <nuxt />
        </keep-alive>
      </v-container>
    </v-main>
    <myfooter />
  </v-app>
</template>

<script lang="ts">
import myheader from "~/components/myheader.vue";
import myfooter from "~/components/myfooter.vue";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: { myheader, myfooter } })
export default class DefaultLayout extends Vue {}
</script>

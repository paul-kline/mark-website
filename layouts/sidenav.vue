<template>
  <v-app dark>
    <myheader />

    <v-main>
      <v-container fluid class="d-flex">
        <v-navigation-drawer
          permanent
          style="min-width: min-content; background: #121212"
          class="fixed-tabies"
        >
          <v-tabs
            dense
            vertical
            rounded
            v-model="tab"
            class="fixed-tabies"
            style="background: #121212 !important"
          >
            <v-tab
              style="background: #121212"
              v-for="(item, i) in global.verticalTabs"
              :key="i"
              link
              @click="tabClicked(global.verticalTabFunctions[i])"
            >
              {{ item }}
              <v-icon
                v-if="global.songPlaying && i == global.songPlayingTab"
                dark
                right
              >
                mdi-volume-medium
              </v-icon>
            </v-tab>
          </v-tabs>
        </v-navigation-drawer>
        <keep-alive>
          <nuxt class="mr-4" />
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
import Global from "~/ts/global";
@Component({ components: { myheader, myfooter } })
export default class SideNavLayout extends Vue {
  global = Global.getInstance();
  tab: number = 0;
  mounted() {
    const me = this;
    this.global.setActiveTab = (i: number) => (me.tab = i);
    this.global.songPlayClicked = (i: number) => {
      console.log("executing global.songPlayClicked");
      me.global.songPlaying = true;
      me.global.songPlayingTab = i;
      me.global.setActiveTab(i);
      //set active tab, and add playing icon
    };
    this.global.songPauseClicked = (i: number) => {
      console.log("executing global.songPauseClicked");
      me.global.songPlaying = false;
      // me.global.setActiveTab(i);
      //set active tab, and add playing icon
    };
  }

  tabClicked(f: any) {
    console.log("tabclicked", f);
    const me = this;
    me.global.allowVisibilityChange = false;
    // console.log('setting allowVisibilityChange to false;')
    setTimeout(() => {
      // console.log('setting allowVisibilityChange to true;')

      me.global.allowVisibilityChange = true;
    }, 500);
    f();
  }
}
</script>
<style>
.fixed-tabies {
  position: sticky !important;
  top: 6em !important;
  z-index: 2;
}
</style>

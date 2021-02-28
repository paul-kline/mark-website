<template>
  <div class="flex">
    <v-navigation-drawer floating permanent>
      <v-tabs
        dense
        vertical
        v-model="tab"
        class="fixed-tabies"
        style="background: #121212 !important; height:100%"
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
    <v-virtual-scroll height="100vh" item-height="20"></v-virtual-scroll>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Global from "~/ts/global";
// @Component({ components: { myheader, myfooter } })
@Component
export default class SideNavComponent extends Vue {
  global = Global.getInstance();
  tab: number = 0;
  mounted() {
    const me = this;
    // this.global.setActiveTab = (i: number) => (me.tab = i);
    this.global.songPlayClicked = (i: number) => {
      console.log("executing global.songPlayClicked");
      me.global.songPlaying = true;
      me.global.songPlayingTab = i;
      // me.global.setActiveTab(i);
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
    // me.global.allowVisibilityChange = false;
    // console.log('setting allowVisibilityChange to false;')
    setTimeout(() => {
      // console.log('setting allowVisibilityChange to true;')
      // me.global.allowVisibilityChange = true;
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
.flex {
  display: flex;
}
</style>

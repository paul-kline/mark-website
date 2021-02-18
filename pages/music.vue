<template>
  <div class="d-fdlex " style="width:80vw">
    <v-tabs-items v-if="orderedSongs.length > 0">
      <template v-for="(song, i) in orderedSongs">
        <songc
          v-observe-visibility="
            (isVisible, song) => visibilityChanged(isVisible, song, i)
          "
          :song="song"
          :key="song.title"
          class="mb-1"
          :id="song._title"
          v-on:playing="playing"
        />
      </template>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import songc from "~/components/song.vue";
import { Song, songs } from "~/ts/songs.ts";
import Global from "~/ts/global";
@Component({ layout: "sidenav", components: { songc } })
export default class Music extends Vue {
  global = Global.getInstance();
  currentlyPlaying: HTMLAudioElement | null = null;
  songs: Song[] = songs;
  get orderedSongs() {
    return songs;
  }
  //@ts-ignore
  visibilityChanged(isVisible, song, index) {
    console.log("visibility changed!!!", isVisible, song, index);
    if (isVisible && this.global.allowVisibilityChange) {
      // console.log('visibility changed trigger. setting index', index)
      this.global.setActiveTab(index);
    }
  }
  playing(audio: HTMLAudioElement) {
    if (this.currentlyPlaying) {
      this.currentlyPlaying.pause();
    }
    this.currentlyPlaying = audio;
    console.log("event received with payload:", audio);
  }

  mounted() {
    const nms: string[] = []; // this.orderedSongs.map(x => x.title);
    this.orderedSongs.forEach(x => {
      nms.push(x.title);
      x._title = x.title.toLowerCase().replaceAll(" ", "");
    });
    console.log("nms", nms);
    this.global.verticalTabs = nms;
    const me = this;
    this.global.verticalTabFunctions = nms.map(x => () => {
      //@ts-ignore
      me.$vuetify.goTo("#" + x.toLowerCase().replaceAll(" ", ""));
      //   const elem = me.$refs[x.replaceAll(" ", "") + "whole"];
      //   console.log("elem", elem);
      //   //@ts-ignore
      //   const div: HtmlDivElement = document.querySelector(
      //     "#" + x.replaceAll(" ", "") + "whole"
      //   );

      //   div.style.border = "1px solid yellow";
      //   setTimeout(() => (div.style.border = ""), 1000);
    });
    this.$forceUpdate(); //without this, nav to id clicks fail. idk idk.
  }
}
</script>
<style>
.fixed-tabies {
  position: sticky;
  top: 6rem;
  z-index: 2;
}
.invisible-border {
  border: 1px solid transparent;
}
</style>

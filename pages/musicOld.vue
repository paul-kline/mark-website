<template>
  <div>
    <div class="d-fdlex " style="width:80vw">
      <v-tabs-items v-if="orderedSongs.length > 0">
        <songc
          v-observe-visibility="
            (isVisible, song) => visibilityChanged(isVisible, song, 0)
          "
          :song="firstSong"
          :index="0"
          :key="firstSong.title"
          class="mb-1"
          :id="firstSong._title"
          v-on:playing="playing"
          v-on:paused="paused"
        />
        <mform />
        <template v-for="(song, i) in restOfSongs">
          <songc
            v-observe-visibility="
              (isVisible, song) => visibilityChanged(isVisible, song, i + 1)
            "
            :song="song"
            :index="i + 1"
            :key="song.title"
            class="mb-1"
            :id="song._title"
            v-on:playing="playing"
            v-on:paused="paused"
          />
        </template>
      </v-tabs-items>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import songc from "~/components/song.vue";
import mform from "~/components/mform.vue";
import sidenavcomp from "~/components/sidenavcomp.vue";
import { Song, songs } from "~/ts/songs.ts";
import Global, { SongHolder } from "~/ts/global";
@Component({ layout: "sidenav", components: { songc, mform, sidenavcomp } })
export default class Music extends Vue {
  global = Global.getInstance();
  currentlyPlaying: HTMLAudioElement | null = null;
  songs: Song[] = songs;
  get orderedSongs() {
    return songs;
  }
  get firstSong() {
    return this.orderedSongs[0];
  }
  get restOfSongs() {
    return this.orderedSongs.slice(1);
  }
  //@ts-ignore
  visibilityChanged(isVisible, song, index) {
    // console.log("visibility changed!!!", isVisible, song, index);
    // if (isVisible && this.global.allowVisibilityChange) {
    //   // console.log('visibility changed trigger. setting index', index)
    //   this.global.setActiveTab(index);
    // }
  }
  playing(audio: HTMLAudioElement, song: Song, index: number) {
    if (this.currentlyPlaying) {
      this.currentlyPlaying.pause();
      // this.currentlyPlaying = null;
      // this.global.songPauseClicked(index);
    }
    this.currentlyPlaying = audio;
    this.global.songPlayClicked(index);
    console.log("event received with payload:", audio, song, index);
  }
  paused(audio: HTMLAudioElement, song: Song, index: number) {
    if (this.currentlyPlaying == audio) {
      //only go through the trouble if song is getting paused/
      //otherwise this pause shouldn't remove icon on other playing song.
      console.log("music.vue paused event");
      this.currentlyPlaying = null;
      this.global.songPauseClicked(index);
    }
  }

  mounted() {
    //set the tabs to have the title of the songs.
    const nms: string[] = []; // this.orderedSongs.map(x => x.title);
    this.orderedSongs.forEach(x => {
      nms.push(x.title);
      x._title = x.title.toLowerCase().replaceAll(" ", "");
    });
    console.log("nms", nms);
    // this.global.verticalTabs = nms;
    const me = this;

    //set what to do when vertical tab gets clicked.
    //need to do it here to have access to elements.
    // this.global.verticalTabFunctions = nms.map(x => () => {
    //   //@ts-ignore
    //   me.$vuetify.goTo("#" + x.toLowerCase().replaceAll(" ", ""));
    //   //   const elem = me.$refs[x.replaceAll(" ", "") + "whole"];
    //   //   console.log("elem", elem);
    //   //   //@ts-ignore
    //   //   const div: HtmlDivElement = document.querySelector(
    //   //     "#" + x.replaceAll(" ", "") + "whole"
    //   //   );

    //   //   div.style.border = "1px solid yellow";
    //   //   setTimeout(() => (div.style.border = ""), 1000);
    // });

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

<template>
  <div class="mobile-zoomer" style="position: absolute; left: 0; width:100%; ">
    <div class="flex black">
      <div class="side black" style="position:sticky; top:40; left:0; ">
        <v-tabs
          vertical
          background-color="#121212"
          v-model="tab"
          class="ml-2 black"
          style=" height:100%; "
        >
          <v-tab
            v-for="(song, i) in orderedSongs"
            :key="i"
            link
            @click="tabClicked(i)"
          >
            {{ song.title }}
            <v-icon
              v-show="global.songPlaying && i == songPlayingTab"
              dark
              right
            >
              mdi-volume-medium
            </v-icon>
          </v-tab>
        </v-tabs>
      </div>
      <div class="" style="width:100%; height:100%;">
        <v-tabs-items v-if="orderedSongs.length > 0">
          <songc
            :song="firstSong"
            :index="0"
            :key="firstSong.title"
            class="mb-1 asong"
            :id="firstSong._title"
            v-on:playing="playing"
            v-on:paused="paused"
          />
          <mform class="" />
          <template v-for="(song, i) in restOfSongs">
            <songc
              :song="song"
              :index="i + 1"
              :key="song.title"
              class="mb-1 asong"
              :id="song._title"
              :ref="song._title"
              v-on:playing="playing"
              v-on:paused="paused"
            />
          </template>
        </v-tabs-items>
        <div style="height:25px; background: #121212"></div>
        <div style="height:50px; background: #121212"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import songc from "~/components/song.vue";
import mform from "~/components/mform.vue";
import { Song, songs } from "~/ts/songs.ts";
import Global, { SongHolder } from "~/ts/global";
@Component({ components: { songc, mform } })
export default class Music extends Vue {
  currentlyPlaying: HTMLAudioElement | null = null;
  allowVisibilityChange: boolean = true;

  songPlayingTab: number = 0;
  global = Global.getInstance();
  songs: Song[] = songs;
  tab: number = 0;
  verticalTabFunctions: any[] = [];

  get orderedSongs() {
    return songs;
  }
  get firstSong() {
    return this.orderedSongs[0];
  }
  get restOfSongs() {
    return this.orderedSongs.slice(1);
  }

  playing(audio: HTMLAudioElement, song: Song, index: number) {
    this.global.songPlaying = true;
    this.global.bottomPlayerDisplayed = true;
    this.songPlayingTab = index;
    if (this.currentlyPlaying) {
      this.currentlyPlaying.pause();
      // this.currentlyPlaying = null;
      // this.global.songPauseClicked(index);
    }
    this.currentlyPlaying = audio;
    // this.global.songPlayClicked(index);
    console.log("event received with payload:", audio, song, index);
  }
  paused(audio: HTMLAudioElement, song: Song, index: number) {
    if (this.currentlyPlaying == audio) {
      //only go through the trouble if song is getting paused/
      //otherwise this pause shouldn't remove icon on other playing song.
      console.log("music.vue paused event");
      this.currentlyPlaying = null;
      this.global.songPlaying = false;
      // this.songPauseClicked(index);
    }
  }

  mounted() {
    console.log("globalsongs", this.global.songHolders);
    console.log("music mounted");

    //set the tabs to have the title of the songs.
    const nms: string[] = []; // this.orderedSongs.map(x => x.title);
    this.orderedSongs.forEach(x => {
      nms.push(x.title);
      x._title = x.title.toLowerCase().replaceAll(" ", "");
    });
    console.log("nms", nms);
    // this.global.verticalTabs = nms;
    const me = this;
    let options = {
      rootMargin: "0px",
      threshold: 0.2
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(e => {
        const _title = e.target.id;
        if (e.isIntersecting && this.allowVisibilityChange) {
          let ii = 0;
          for (let i = 0; i < this.orderedSongs.length; i++) {
            const s = this.orderedSongs[i];
            if (s._title == _title) {
              ii = i;
              break;
            }
          }
          this.tab = ii;
        }
        console.log("e", e.target.id, e.isIntersecting);
      });
    }, options);
    const els = document.querySelectorAll(".asong");
    els.forEach(el => {
      observer.observe(el);
    });

    //set what to do when vertical tab gets clicked.
    //need to do it here to have access to elements.
    this.verticalTabFunctions = nms.map(x => () => {
      //@ts-ignore
      me.$vuetify.goTo("#" + x.toLowerCase().replaceAll(" ", ""));
    });
    console.log("this.verticalTabFunctions", this.verticalTabFunctions);

    this.$forceUpdate(); //without this, nav to id clicks fail. idk idk.
  }
  tabClicked(i: number) {
    {
      console.log("tabclicked", i);
      const me = this;
      this.allowVisibilityChange = false;
      // console.log('setting allowVisibilityChange to false;')
      setTimeout(() => {
        // console.log('setting allowVisibilityChange to true;')

        this.allowVisibilityChange = true;
      }, 500);
      console.log("funct", JSON.stringify(this.verticalTabFunctions[i]));
      this.verticalTabFunctions[i]();
      // f();
    }
  }
}
</script>
<style>
.flex {
  display: flex;
  flex-direction: row;
}
.black {
  background: #121212 !important;
}
.side {
  position: sticky !important;
  top: 6.5rem;
  left: 0;

  height: max-content;
  z-index: 0;
  background: #121212;
}

.invisible-border {
  border: 1px solid transparent;
}
@media only screen and (max-device-width: 600px) {
  .mobile-zoomer {
    zoom: 0.9;
  }
}
</style>

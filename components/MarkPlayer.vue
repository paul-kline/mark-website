<template>
  <div class="text-center" style="width:100%">
    <v-bottom-navigation v-if="global.nowPlayingSongHolder">
      <v-card tile width="100%">
        <v-progress-linear
          :value="progress"
          class="my-0"
          height="3"
        ></v-progress-linear>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ title }}</v-list-item-title>
              <v-list-item-subtitle>{{ artist }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-spacer></v-spacer>

            <v-list-item-icon>
              <v-btn icon @click="prev">
                <v-icon>mdi-rewind</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
              <v-btn icon>
                <v-icon v-if="global.songPlaying" @click="pause"
                  >mdi-pause</v-icon
                >
                <v-icon v-else @click="play">mdi-play</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              class="ml-0"
              :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
            >
              <v-btn icon @click="next">
                <v-icon>mdi-fast-forward</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Global, { SongHolder } from "~/ts/global";
@Component
export default class MarkPlayer extends Vue {
  @Prop() name!: string;
  @Prop() initialEnthusiasm!: number;
  global = Global.getInstance();
  setProgressRunning: boolean = false;
  progress: number = 0;
  get audioElem() {
    return this.global.nowPlayingSongHolder?.audio;
  }
  get songHolder() {
    return this.global.nowPlayingSongHolder;
  }
  get title() {
    return this.songHolder?.title;
  }
  get artist() {
    return this.songHolder?.artists;
  }

  play() {
    const holder = this.global.nowPlayingSongHolder;
    if (holder && holder.audio) {
      holder.audio.play();
    }
  }

  prev() {
    const holder = this.global.nowPlayingSongHolder;
    if (holder && holder.audio) {
      //only change song if less than 2 seconds in.
      if (holder.audio) {
        if (holder.audio.currentTime > 2) {
          holder.audio.currentTime = 0;
          return;
        }
      }
      this.global.sentFromBottomPlayer = true;
      holder.audio.pause();
      setTimeout(() => {
        this.global.sentFromBottomPlayer = false;
      }, 0);
      const index = holder.index;
      const len = this.global.songHolders.length;
      const indexToFind = (index + len - 1) % len;
      const r = this.global.songHolders.find(x => x.index == indexToFind);
      if (r) {
        this.global.nowPlayingSongHolder = r;
        if (r.audio) {
          r.audio.play();
        }
      }
    }
  }
  next() {
    const holder = this.global.nowPlayingSongHolder;
    if (holder && holder.audio) {
      this.global.sentFromBottomPlayer = true;
      holder.audio.pause();
      setTimeout(() => {
        this.global.sentFromBottomPlayer = false;
      }, 0);
      const index = holder.index;
      const len = this.global.songHolders.length;
      const indexToFind = (index + 1) % len;
      const r = this.global.songHolders.find(x => x.index == indexToFind);
      if (r) {
        this.global.nowPlayingSongHolder = r;
        if (r.audio) {
          console.log("attemping to press play on next.");
          setTimeout(() => {
            //@ts-ignore
            r.audio.play();
          }, 1);
        }
      }
    }
  }
  pause() {
    const holder = this.global.nowPlayingSongHolder;
    if (holder && holder.audio) {
      this.global.sentFromBottomPlayer = true;
      console.log(
        "sending from bottom player",
        this.global.sentFromBottomPlayer
      );
      //@ts-ignore
      holder.audio.pause();
      setTimeout(() => {
        this.global.sentFromBottomPlayer = false;
      }, 1);
    }
  }
  setProgress() {
    this.setProgressRunning = true;
    if (this.audioElem) {
      this.progress =
        (100 * this.audioElem.currentTime) / this.audioElem.duration;
    }
    const me = this;
    setTimeout(me.setProgress, 100);
  }
  mounted() {
    console.error("starting music player counter");
    this.setProgress();
  }
}
</script>

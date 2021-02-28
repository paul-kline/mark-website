<template>
  <v-card v-if="song && song.file" class="center">
    <!-- <v-btn class="ml-2 mt-3" fab icon height="40px" right width="40px">
      <v-icon>mdi-play</v-icon> </v-btn
    > -->
    <!-- <v-card-title class="center">{{ song.title }}</v-card-title> -->
    <h2 class="center mt-2">{{ song.title }}</h2>
    <v-card-subtitle class="mt-0 pt-0">
      <strong>by {{ by }}</strong>
    </v-card-subtitle>
    <audio
      controls
      :src="require(`~/assets/music/${song.file}`)"
      @play="played"
      @pause="paused"
      ref="audios"
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <v-card-text v-html="lyrics"></v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Song } from "~/ts/songs.ts";
import Global, { SongHolder } from "~/ts/global";
@Component
export default class SongCComponent extends Vue {
  @Prop() song!: Song;
  @Prop() index!: number;
  global = Global.getInstance();
  songHolder: SongHolder | null = null;
  mounted() {
    const song = this.song;
    this.songHolder = {
      title: song.title,
      artists:
        song.wordsmusic instanceof Array
          ? song.wordsmusic.join(", ")
          : song.wordsmusic,
      index: this.index,
      audio: this.$refs["audios"] as any
    };
    this.global.songHolders.push(this.songHolder);
  }
  get lyrics() {
    return this.song.lyrics.replaceAll("\n", "<br />");
  }
  get by() {
    if (this.song.wordsmusic instanceof Array) {
      return this.song.wordsmusic.join(", ");
    } else {
      return this.song.wordsmusic;
    }
  }
  played(x: any) {
    // console.log(
    //   "play audio event triggered. emitting playing: ",
    //   this.song.title
    // );
    this.global.nowPlayingSongHolder = this.songHolder;
    this.$emit("playing", this.$refs["audios"], this.song, this.index);
  }
  paused(x: any) {
    console.error("pause path", x.path.length);
    console.log(x);
    console.log("sent from bottom player", this.global.sentFromBottomPlayer);
    const hr = this.global.nowPlayingSongHolder;
    if (
      hr &&
      hr.audio &&
      Math.abs(hr.audio.currentTime - hr.audio.duration) < 0.001
    ) {
      console.log(
        "I THINK THE END OF THE SONG IS HERE AND WILL NOW TRY TO PLAY THE NEXT ONE"
      );
      const len = this.global.songHolders.length;
      const index = (hr.index + 1) % len;
      const newsh = this.global.songHolders.find(x => x.index == index);
      if (newsh) {
        this.global.nowPlayingSongHolder = newsh;
        if (newsh.audio) {
          newsh.audio.play();
        }
      }
    } else if (x.path.length < 10 && !this.global.sentFromBottomPlayer) {
      console.log("playing anyway!!!!");
      //@ts-ignore
      this.$refs["audios"].play();
    }

    // console.log("paused event in song sourceElementis ", x);
    // console.log("pause audio event triggered. emitting paused ", this.song);
    this.$emit("paused", this.$refs["audios"], this.song, this.index);
  }
}
</script>
<style>
.center {
  text-align: center !important;
}
</style>

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
@Component
export default class SongCComponent extends Vue {
  @Prop() song!: Song;
  @Prop() index!: number;
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
  played() {
    console.log(
      "play audio event triggered. emitting playing: ",
      this.song.title
    );
    this.$emit("playing", this.$refs["audios"], this.song, this.index);
  }
  paused() {
    console.log("pause audio event triggered. emitting paused ", this.song);
    this.$emit("paused", this.$refs["audios"], this.song, this.index);
  }
}
</script>
<style>
.center {
  text-align: center !important;
}
</style>

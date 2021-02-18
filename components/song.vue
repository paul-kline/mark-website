<template>
  <v-card v-if="song && song.file">
    <audio
      controls
      :src="require(`~/assets/music/${song.file}`)"
      @play="played"
      ref="audios"
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <!-- <v-btn class="ml-2 mt-3" fab icon height="40px" right width="40px">
      <v-icon>mdi-play</v-icon> </v-btn
    > -->
    <v-card-title>{{ song.title }}</v-card-title>
    <v-card-subtitle
      ><div>Words and music by:</div>
      <div>{{ by }}</div></v-card-subtitle
    >
    <v-card-text v-html="lyrics" class="center"></v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Song } from "~/ts/songs.ts";
@Component
export default class HelloDecorator extends Vue {
  @Prop() song!: Song;
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
    console.log("playing: ", this.song.title);
    this.$emit("playing", this.$refs["audios"]);
  }
}
</script>
<style>
.center {
  text-align: center;
}
</style>

type SongHolder = {
  title: string;
  artists: string;
  index: number;
  audio?: HTMLAudioElement; //optional so each song component can set it.
};
export default class Global {
  static _instance: Global | null;
  static getInstance(): Global {
    if (!Global._instance) Global._instance = new Global();
    return Global._instance;
  }
  bottomPlayerDisplayed: boolean = false;
  sentFromBottomPlayer: boolean = false;
  songPlaying: boolean = false;
  songPlayingTab: number = 0;
  songPlayClicked: any; //this is a method to show volume icon by playing song.

  songPauseClicked: any;
  songHolders: SongHolder[] = [];
  nowPlayingSongHolder: SongHolder | null = null;
}

export { SongHolder };

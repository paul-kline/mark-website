export default class Global {
  static _instance: Global | null;
  static getInstance(): Global {
    if (!Global._instance) Global._instance = new Global();
    return Global._instance;
  }
  verticalTabs: string[] = [];
  verticalTabFunctions: any[] = [];
  setActiveTab: any;
  songPlaying: boolean = false;
  songPlayingTab: number = 0;
  songPlayClicked: any; //this is a method to show volume icon by playing song.
  allowVisibilityChange: boolean = true;
  songPauseClicked: any;
}

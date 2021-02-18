export default class Global {
  static _instance: Global | null;
  static getInstance(): Global {
    if (!Global._instance) Global._instance = new Global();
    return Global._instance;
  }
  verticalTabs: string[] = [];
  verticalTabFunctions: any[] = [];
  setActiveTab: any;
  allowVisibilityChange: boolean = true;
}

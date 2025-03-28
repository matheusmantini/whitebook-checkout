declare module "cypress-mochawesome-reporter/plugin" {
  import { PluginEvents } from "cypress";
  const reporter: (on: PluginEvents) => void;
  export = reporter;
}

import {Mission} from "./Mission";
import moment from "moment";

class NightMission extends Mission{
  public setName(name: string) {
    if(name.indexOf("-na-night") !== -1) {
      super.setName(name);
    } else {
      super.setName(name + "-na-night")
    }
  }
}

export const nightMission = new NightMission('2', moment('18/02/2020', 'DD/MM/YYYY'), moment('18/08/2020', 'DD/MM/YYYY'), [], []);
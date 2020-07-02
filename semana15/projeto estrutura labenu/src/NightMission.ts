import { Missions } from "./Missions";

export class NightMission extends Missions{
    public setName(name: string) {
        if(name.indexOf("-na-night") !== -1) {
            super.setName(name)
        } else {
            super.setName(name + "-na-night")
        }
    }
}
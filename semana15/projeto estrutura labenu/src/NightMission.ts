import { Missions } from "./Missions";
import moment from "moment";

export class NightMission extends Missions{
    public setName(name: string) {
        if(name.indexOf("-na-night") !== -1) {
            super.setName(name)
        } else {
            super.setName(name + "-na-night")
        }
    }
}

export const nightMission = new NightMission(
    '1',
    moment('10/03/2020', 'DD/MM/YYYY'),
    moment('10/09/2021', 'DD/MM/YYYY'),
    [],
    [],
    4
)
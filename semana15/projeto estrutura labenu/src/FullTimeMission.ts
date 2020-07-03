import { Missions } from "./Missions";
import moment from "moment"

export class FullTimeMission extends Missions{
    
}

export const fullTimeMission = new FullTimeMission(
    '2',
    moment('01/07/2020', 'DD/MM/YYYY'),
    moment('31/01/2021', 'DD/MM/YYYY'),
    [],
    [],
    1
)
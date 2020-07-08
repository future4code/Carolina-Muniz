"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nightMission = exports.NightMission = void 0;
const Missions_1 = require("./Missions");
const moment_1 = __importDefault(require("moment"));
class NightMission extends Missions_1.Missions {
    setName(name) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
        else {
            super.setName(name + "-na-night");
        }
    }
}
exports.NightMission = NightMission;
exports.nightMission = new NightMission('1', moment_1.default('10/03/2020', 'DD/MM/YYYY'), moment_1.default('10/09/2021', 'DD/MM/YYYY'), [], [], 4);
//# sourceMappingURL=NightMission.js.map
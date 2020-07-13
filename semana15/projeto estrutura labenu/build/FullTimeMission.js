"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullTimeMission = exports.FullTimeMission = void 0;
const Missions_1 = require("./Missions");
const moment_1 = __importDefault(require("moment"));
class FullTimeMission extends Missions_1.Missions {
}
exports.FullTimeMission = FullTimeMission;
exports.fullTimeMission = new FullTimeMission('2', moment_1.default('01/07/2020', 'DD/MM/YYYY'), moment_1.default('31/01/2021', 'DD/MM/YYYY'), [], [], 1);
//# sourceMappingURL=FullTimeMission.js.map
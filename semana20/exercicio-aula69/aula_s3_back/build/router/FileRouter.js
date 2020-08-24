"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
var express_1 = require("express");
var FileController_1 = require("../controller/FileController");
exports.fileRouter = express_1.Router();
exports.fileRouter.put('/upload', new FileController_1.FileController().fileUpload);

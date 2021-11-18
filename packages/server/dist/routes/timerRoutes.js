"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timerRouter = void 0;
var controllers_1 = require("../controllers");
var express_1 = require("express");
exports.timerRouter = (0, express_1.Router)();
exports.timerRouter.get("", controllers_1.getTotalTime);

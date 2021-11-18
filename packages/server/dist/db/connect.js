"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("../config");
function connect() {
    return mongoose_1.default.connect(config_1.config.db.url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}
exports.connect = connect;

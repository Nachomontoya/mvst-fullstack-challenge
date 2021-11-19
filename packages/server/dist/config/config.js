"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, _b = _a.NODE_ENV, NODE_ENV = _b === void 0 ? "production" : _b, MONGO_DB_URL_PRODUCTION = _a.MONGO_DB_URL_PRODUCTION, MONGO_DB_URL_DEVELOPMENT = _a.MONGO_DB_URL_DEVELOPMENT, MONGO_DB_URL_TEST = _a.MONGO_DB_URL_TEST, PORT = _a.PORT;
var CONFIG = {
    production: {
        app: {
            port: PORT || 4000,
        },
        db: {
            url: MONGO_DB_URL_PRODUCTION,
        },
    },
    development: {
        app: {
            port: PORT || 4000,
        },
        db: {
            url: MONGO_DB_URL_DEVELOPMENT,
        },
    },
    test: {
        app: {
            port: PORT || 4000,
        },
        db: {
            url: MONGO_DB_URL_TEST,
        },
    },
};
exports.config = CONFIG[NODE_ENV];

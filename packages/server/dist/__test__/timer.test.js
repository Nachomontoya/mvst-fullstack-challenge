"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-disabled-tests */
var request = __importStar(require("supertest"));
var config_1 = require("../config");
var requestApi = request.agent("http://localhost:".concat(config_1.config.app.port, "/timer"));
describe("Backend 'timer' API testing", function () {
    // test("POST / create timer", () => {
    //   return requestApi
    //     .post("/new")
    //     .set("Accept", "application/json")
    //     .field("timer", 1)
    //     .expect("Content-Type", /json/)
    //     .expect(200)
    //     .then((response) => {
    //       expect(response.body.message).toBe("New timer successfully created");
    //     })
    //     .catch((err) => {
    //       throw err;
    //     });
    // });
    test("GET / get all timers", function () {
        return requestApi
            .get("/all")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(function (response) {
            expect(response.body.message).toBe("All Timers Loaded");
        })
            .catch(function (err) {
            throw err;
        });
    });
    test("GET / get timers sum", function () {
        return requestApi
            .get("/")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(function (response) {
            expect(response.body.message).toBe("Total time summarized and loaded");
        })
            .catch(function (err) {
            throw err;
        });
    });
});

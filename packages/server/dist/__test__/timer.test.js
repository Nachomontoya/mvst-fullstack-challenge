"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var requestApi = (0, supertest_1.default)("http://localhost:4000/timer");
describe("Backend 'Timer' api testing", function () {
    test("GET / Get Total time", function () {
        return requestApi
            .get("")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(function (response) {
            expect(response.body.message).toBe("Total time loaded");
        })
            .catch(function (err) {
            throw err;
        });
    });
    test("POST / Create a new time log", function () {
        return requestApi
            .post("/new")
            .send({ timer: 2 })
            .expect("Content-Type", /json/)
            .expect(200)
            .then(function (response) {
            expect(response.body.message).toBe("New timer successfully created and total time updated");
        })
            .catch(function (err) {
            throw err;
        });
    });
});

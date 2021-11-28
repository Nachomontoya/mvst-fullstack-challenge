"use strict";
var request = require("supertest");
var requestApi = request("http://localhost:4000/timer");
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
});

const request = require("supertest");

const requestApi = request(`http://localhost:4000/timer`);

describe("Backend 'Timer' api testing", function () {
  test("GET / Get Total time", () => {
    return requestApi
      .get(``)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Total time loaded");
      })
      .catch((err) => {
        throw err;
      });
  });
});

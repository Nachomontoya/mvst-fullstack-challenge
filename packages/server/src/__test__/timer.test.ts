import request from "supertest";

const requestApi = request(`http://localhost:4000/timer`);

describe("Backend 'Timer' api testing", function () {
  test("GET / Get Total time", () => {
    return requestApi
      .get(``)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response: { body: { message: any } }) => {
        expect(response.body.message).toBe("Total time loaded");
      })
      .catch((err: any) => {
        throw err;
      });
  });

  test("POST / Create a new time log", () => {
    return requestApi
      .post(`/new`)
      .send({ timer: 2 })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response: { body: { message: any } }) => {
        expect(response.body.message).toBe(
          "New timer successfully created and total time updated",
        );
      })
      .catch((err: any) => {
        throw err;
      });
  });
});

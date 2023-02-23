const request = require("supertest");
const app = require("../../app");

describe("Networks controller", () => {
  describe("GET Networks", () => {
    describe("happy path", () => {
      test("returns a status code 200", async () => {
        const response = await request(app).get('/api/v1/networks');
        expect(response.statusCode).toBe(200)
      });
    });
  });
});

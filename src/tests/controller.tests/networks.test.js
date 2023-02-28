// "pretest": "cross-env NODE_ENV=test npm run db:reset",

const request = require("supertest");
const app = require("../../app");

describe("Networks controller", () => {
  describe("GET Networks", () => {
    describe("happy path", () => {
      it('should return all networks', async () => {
        const res = await request(app).get("/api/v1/networks")
        console.log(res)
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('networks')
      })
    });
  });
});

const request = require("supertest");
const app = require("../../app");

describe("Provider_packages controller", () => {
  describe("getAllPackages", () => {
    describe("happy path", () => {
      it("should return all packages", async () => {
        const res = await request(app).get("/api/v1/packages");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("packages");
        expect(res.body.packages[0]).toHaveProperty("id");
        expect(res.body.packages[0]).toHaveProperty("title");
        expect(res.body.packages[0]).toHaveProperty("price");
        expect(res.body.packages[0]).toHaveProperty("createdAt");
        expect(res.body.packages[0]).toHaveProperty("updatedAt");
      })
    })
  })
})
// "pretest": "cross-env NODE_ENV=test npm run db:reset",

const request = require("supertest");
const app = require("../../app");

describe("Networks controller", () => {
  describe("getAllNetworks", () => {
    describe("happy path", () => {
      it("should return all networks", async () => {
        const res = await request(app).get("/api/v1/networks");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("networks");
        expect(res.body.networks[0]).toHaveProperty("id");
        expect(res.body.networks[0]).toHaveProperty("title");
        expect(res.body.networks[0]).toHaveProperty("createdAt");
        expect(res.body.networks[0]).toHaveProperty("updatedAt");
      });
    });
  });
  describe("getNetwork", () => {
    describe("happy path", () => {
      it("should return the correct network", async () => {
        const res = await request(app).get("/api/v1/networks/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("foundNetwork");
        expect(res.body.foundNetwork).toHaveProperty("id");
        expect(res.body.foundNetwork).toHaveProperty("title");
        expect(res.body.foundNetwork).toHaveProperty("createdAt");
        expect(res.body.foundNetwork).toHaveProperty("updatedAt");
      });
    });
  });
  describe("createNetwork", () => {
    describe("happy path", () => {
      it("should successfully create a network", async () => {
        const res = await request(app).post("/api/v1/networks").send({
          title: "Cartoon Network",
        });
        expect(res.status).toEqual(201);
        expect(res.body).toHaveProperty("newNetwork");
      });
    });
  });
});

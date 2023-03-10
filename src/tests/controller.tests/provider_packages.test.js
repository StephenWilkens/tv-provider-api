const request = require("supertest");
const app = require("../../app");

describe("providerPackages controller", () => {
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
      });
    });
  });
  describe("getPackage", () => {
    describe("happy path", () => {
      it("should return the correct package", async () => {
        const res = await request(app).get("/api/v1/packages/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("foundPackage");
        expect(res.body.foundPackage).toHaveProperty("id");
        expect(res.body.foundPackage).toHaveProperty("title");
        expect(res.body.foundPackage).toHaveProperty("price");
        expect(res.body.foundPackage).toHaveProperty("createdAt");
        expect(res.body.foundPackage).toHaveProperty("updatedAt");
      });
    });
  });
  describe("createPackage", () => {
    describe("happy path", () => {
      it("should successfully create a package", async () => {
        const res = await request(app).post("/api/v1/packages").send({
          title: "The Works",
          price: 1000000,
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("newPackage");
      });
    });
  });
  describe("updatePackage", () => {
    describe("happy path", () => {
      it("should successfully update the title and price of a package", async () => {
        const res = await request(app).put("/api/v1/packages/1").send({
          title: "Primo Package",
          price: 2000000,
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("providerPackage");
        expect(res.body.providerPackage.title).toBe("Primo Package");
        expect(res.body.providerPackage.price).toBe("2000000");
      });
    });
  });
  describe("deletePackage", () => {
    describe("happy path", () => {
      it("should delete the given package", async () => {
        const res = await request(app).del("/api/v1/packages/1");
        expect(res.statusCode).toBe(204);
      });
    });
  });
});

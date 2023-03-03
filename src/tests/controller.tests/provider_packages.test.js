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
        const res = await (
          await request(app).put("/api/v1/packages/1")
        ).setEncoding({
          title: "Primo Package",
          price: 2000000,
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("package");
        expect(res.body.package.title).toBe("Primo Package");
        expect(res.body.package.price).toBe(2000000);
      });
    });
  });
});

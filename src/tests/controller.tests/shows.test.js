const request = require("supertest");
const app = require("../../app");

describe("Shows controller", () => {
  describe("getAllShows", () => {
    describe("happy path", () => {
      it("should return all shows", async () => {
        const res = await request(app).get("/api/v1/shows");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("shows");
        expect(res.body.shows[0].toHaveProperty("title"));
        expect(res.body.shows[0].toHaveProperty("imdbRating"));
        expect(res.body.shows[0].toHaveProperty("createdAt"));
        expect(res.body.shows[0].toHaveProperty("updatedAt"));
      });
    });
  });
});

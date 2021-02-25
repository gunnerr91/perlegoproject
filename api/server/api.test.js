const request = require("supertest");
const { server } = require("./server");

describe("get all books", () => {
  it("returns array of content", async (done) => {
    await request(server)
      .get("/api/books")
      .set("Accept", "application/json")
      .expect(200)
      .then((response) => {
        expect(response.body.length).not.toBe(0);
        expect(response.body[0].title).not.toBeNull();
        expect(response.body[0].coverFile).not.toBeNull();
        expect(response.body[0].author).not.toBeNull();
        expect(response.body[0].location).not.toBeNull();
      });
    done();
  });

  it("returns 25 books for limited request", async (done) => {
    await request(server)
      .get("/api/books/withlimit")
      .set("Accept", "application/json")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(25);
      });
    done();
  });
});

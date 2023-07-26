const request = require("supertest");
const mongoose = require("mongoose");
const { Quote } = require("../../model/quote");
let server;
describe("/api/quote", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await server.close();
    await Quote.remove({});
  });

  describe("POST /", () => {
    it("return 400 if user send invalid inputs", async () => {
      const res = await request(server).post("/api/quote").send({ name: "aa" });
      expect(res.status).toBe(400);
    });

    it("return quote if it is valid", async () => {
      const quote = {
        name: "amar",
        phone: 8939293716,
        email: "amar@gmail.com",
        from: "ponmar",
        to: "ponmar",
      };
      const res = await request(server).post("/api/quote").send(quote);

      expect(res.status).toBe(200);
    });
  });
});

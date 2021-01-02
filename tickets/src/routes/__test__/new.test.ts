import request from "supertest";
import { app } from "../../app";

it("has a route handler listening to /api/tickets for post rewuest ", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).not.toEqual(404);
});
it("can only be access if the user signed in", async () => {
  const response = await request(app).post("/api/tickets").send({}).expect(401);
});
it("returns a status other than 401 if user signed in", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({});
  console.log(response.status);

  expect(response.status).not.toEqual(401);
});
it("return an error if invalid title is provided", async () => {});
it("return an error if invalid price is provided ", async () => {});
it("create a ticket with valid input", async () => {});

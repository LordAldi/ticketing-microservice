import request from "supertest";
import { app } from "../../app";

const createTicket = (title: string, price: number) => {
  return request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title,
      price,
    })
    .expect(201);
};

it("can fetch a list of ticket", async () => {
  await createTicket("adaefa", 20);
  await createTicket("adaeas", 22);
  await createTicket("asdea", 30);
  const response = await request(app).get("/api/tickets").send().expect(200);

  expect(response.body.length).toEqual(3);
});

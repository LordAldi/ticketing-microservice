import request from "supertest";
import { app } from "../../app";

it("it response with details about the current user", async () => {
  const email = "test@test.com";
  const password = "password";
  const authResponse = await request(app)
    .post("/api/users/signup")
    .send({
      email: email,
      password: password,
    })
    .expect(201);
  const cookie = authResponse.get("Set-Cookie");

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  //   console.log(response.body);
  expect(response.body.currentUser.email).toEqual(email);
});

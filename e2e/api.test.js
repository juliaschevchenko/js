import test, { expect } from "@playwright/test";
import { describe } from "node:test";

describe("Get requests", () => {
  test("get users", async ({ request }) => {
    const users = await request.get("/users");
    expect(users.ok()).toBeTruthy();
  });

  test("get user by id", async ({ request }) => {
    const userId = 1;
    const user = await request.get(`/users/${userId}`);
    expect(user.ok()).toBeTruthy();
    const data = await user.json();
    expect(data).toMatchObject(
      expect.objectContaining({
        id: userId,
        name: "Leanne Graham",
      })
    );
  });
});

describe("Post requests", () => {
  test("create new user with all data", async ({ request }) => {
    const data = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    const response = await request.post("/posts", { data: data });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toMatchObject(data);
    expect(body).toHaveProperty("id");
  });

  test("create new user without title", async ({ request }) => {
    const data = {
      body: "bar",
      userId: 1,
    };
    const response = await request.post("/posts", { data: data });
    expect(response.status()).toBe(201); // нет валидации
    const body = await response.json();
    expect(body).toMatchObject(data);
    expect(body).toHaveProperty("id", "body", "userId");
  });
});

describe("Patch requests", () => {
  test("update post", async ({ request }) => {
    const data = {
      title: "обновлённый заголовок",
    };
    const response = await request.patch("/posts/1", { data: data });
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body).toMatchObject(data);
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");
    expect(body).toHaveProperty("userId");
  });
});

describe("Put requests", () => {
  test("change post", async ({ request }) => {
    const data = {
      title: "обновлённый заголовок",
    };
    const response = await request.put("/posts/1", { data: data });
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body).toMatchObject(data);
  });
});

describe("Delete requests", () => {
  test("Delete post", async ({ request }) => {
    const response = await request.delete("/posts/1");
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body).toEqual({});
  });
});

describe("Throw errors", () => {
  test("get a non-existent resource", async ({ request }) => {
    const response = await request.get("users/999");
    expect(response.status()).toBe(404);
    expect(await response.json()).toEqual({});
  });
});

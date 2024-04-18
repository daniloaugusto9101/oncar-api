const app = require("./app");
const request = require("supertest");

describe("Testes da API", () => {
  it("Verificar se o servidor esta rodando ", async () => {
    const response = await request(app).get("/api/v1/");
    expect(response.statusCode).toEqual(200);
  });
  it("Verificar endpoint inicial ", async () => {
    const response = await request(app).get("/api/v1/");
    expect(response.body).toStrictEqual({
      message: "Welcome",
      author: "Danilo Augusto",
      version: "API V1",
      endpoint: "/api/v1/cars",
    });
  });
  it("Verificar endpoint carros ", async () => {
    const response = await request(app).get("/api/v1/cars");
    expect(response.statusCode).toEqual(200);
  });
});

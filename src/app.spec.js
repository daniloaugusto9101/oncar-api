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
      author: "Danilo Augusto|Rafael Lucas",
      version: "API V1",
      endpoint: "/api/v1/cars",
    });
  });
  it("Verificar endpoint carros ", async () => {
    const response = await request(app).get("/api/v1/cars");
    expect(response.statusCode).toEqual(200);
  });
  // // Teste para o método getAll
  // it('Deve retornar uma lista de carros', async () => {
  //   const response = await request(app).get('/api/v1/cars');
  //   expect(response.status).toBe(200);
  //   expect(response.body.length).toBeGreaterThan(0);
  // });
  // // Teste para o método getCar
  // it('Deve retornar um carro específico', async () => {
  //   const carId = 296;
  //   const response = await request(app).get(`/api/v1/cars/${carId}`);
  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty('message', 'Carro obtido com sucesso');
  //   expect(response.body).toHaveProperty('data');
  // });
  // // Teste para o método deleteCar
  // it('Deve excluir um carro existente', async () => {
  //   const carId = 304;
  //   const response = await request(app).delete(`/api/v1/cars/${carId}`);
  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty('message', 'Carro excluído com sucesso');
  // });
  // // Teste para o método postCar
  // it('Deve adicionar um novo carro', async () => {
  //   const newCar = {
  //     img: "https://cdn.motor1.com/images/mgl/1ZQ94w/s1/fiat-fastback-abarth---lancamento.webp",
  //     modelo: "Fiat Fastback Abarth",
  //     marca: "Fiat",
  //     ano: "2024",
  //     totkm: "0",
  //     valor: "159990"
  //   };
  //   const response = await request(app).post('/api/v1/cars').send(newCar);
  //   expect(response.status).toBe(201);
  //   expect(response.body).toHaveProperty('message', 'Carro adicionado com sucesso');
  // });
  // // Teste para o método updateCar
  // it('Deve atualizar um carro existente', async () => {
  //   const carId = 296;
  //   const updatedCarData = {
  //     id: carId,
  //     img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240209/volkswagen-gol-1.0-12v-mpi-totalflex-4p-manual-wmimagem07261400242.jpg?s=fill&w=552&h=414&q=60",
  //     modelo: "GOL 1.0 12V MPI TOTALFLEX 4P MANUAL",
  //     marca: "VOLKSWAGEN TESTE",
  //     ano: "2022/2023",
  //     totkm: "45616",
  //     valor: "56990.00"
  //   };
  //   const response = await request(app).put(`/api/v1/cars/${carId}`).send(updatedCarData);
  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty('message', 'Carro atualizado com sucesso');
  // });
});

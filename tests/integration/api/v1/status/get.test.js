const axios = require("axios");
const API_URL = "http://localhost:3000/api/v1/status";

describe("status API", () => {
  test("GET API should return OK (200) status code", async () => {
    const response = await axios(API_URL);
    const status = response.status;
    const expected = 200;
    expect(status).toBe(expected);
  });

  test("GET API should return status property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const expected = "status";
    expect(responseBody).toHaveProperty(expected);
  });

  test("GET API should return updated_at property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const expectedProperty = new Date(responseBody.updated_at).toISOString();

    expect(expectedProperty).toBeDefined();
  });

  test("GET API should return server_version property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const expectedProperty = responseBody.server_version;

    expect(expectedProperty).toBeDefined();
  });

  test("GET API should return max_connections property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const expectedProperty = responseBody.max_connections;

    expect(expectedProperty).toBeDefined();
  });

  test("GET API should return used_connections property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const expectedProperty = responseBody.used_connections;

    expect(expectedProperty).toBeDefined();
  });
});

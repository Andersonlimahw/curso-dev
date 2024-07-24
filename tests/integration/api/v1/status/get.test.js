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
    const expectedProperty = responseBody.updated_at;
    const parsedData = new Date(expectedProperty).toISOString();

    expect(parsedData).toBeDefined();
  });

  test("GET API should return server_version property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const { dependencies } = responseBody;
    const expectedProperty = dependencies.database.server_version;

    expect(expectedProperty).toBeDefined();
  });

  test("GET API should return max_connections property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const { dependencies } = responseBody;
    const expectedProperty = dependencies.database.max_connections;

    expect(expectedProperty).toBeDefined();
  });

  test("GET API should return opened_connections property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const { dependencies } = responseBody;
    const expectedProperty = dependencies.database.opened_connections;

    expect(expectedProperty).toBeDefined();
  });

  test("GET API should return checkpoint_timeout property", async () => {
    const response = await axios(API_URL);
    const responseBody = response.data;
    const { dependencies } = responseBody;
    const expectedProperty = dependencies.database.checkpoint_timeout;

    expect(expectedProperty).toBeDefined();
  });
});

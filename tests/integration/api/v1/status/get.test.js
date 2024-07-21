const axios = require("axios");

describe("status API", () => {
  test("GET API should return OK (200) status code", async () => {
    const response = await axios("http://localhost:3000/api/v1/status");
    console.log(response);
    expect(response.statusText).toBe("OK");
  });
});

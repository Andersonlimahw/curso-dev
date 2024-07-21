const { calculadora } = require("../../models/calculadora");

describe("calculadora", () => {
  test("somar 1 + 2 deve retornar 3", () => {
    expect(calculadora.somar(1, 2)).toBe(3);
  });

  test("somar 2 + 2 deve retornar 4", () => {
    expect(calculadora.somar(2, 2)).toBe(4);
  });

  test("subtrair 2 - 1 deve retornar 1", () => {
    expect(calculadora.substrair(2, 1)).toBe(1);
  });

  test("multiplicar 2 * 4 deve retornar 8", () => {
    expect(calculadora.multiplicar(2, 4)).toBe(8);
  });

  test("dividir 4 por 2 deve retornar 2", () => {
    expect(calculadora.dividir(4, 2)).toBe(2);
  });
});

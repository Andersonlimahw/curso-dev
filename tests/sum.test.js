function sum(a, b) {
  return a + b;
}

test("sum sample", () => {
  expect(sum(1, 2)).toBe(3);
});

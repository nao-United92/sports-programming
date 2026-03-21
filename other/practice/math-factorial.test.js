const factorial = require("./math-factorial");
test("factorial calculates correctly", () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(0)).toBe(1);
});
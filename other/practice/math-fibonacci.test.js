const fibonacci = require("./math-fibonacci");
test("fibonacci generates sequence", () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
});
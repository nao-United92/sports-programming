const clamp = require("./math-clamp");
test("clamp restricts value to range", () => {
  expect(clamp(5, 1, 10)).toBe(5);
  expect(clamp(0, 1, 10)).toBe(1);
  expect(clamp(15, 1, 10)).toBe(10);
});
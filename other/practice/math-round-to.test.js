const roundTo = require("./math-round-to");
test("roundTo rounds number", () => {
  expect(roundTo(1.005, 2)).toBe(1.01);
});
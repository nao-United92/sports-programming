const compose = require("./function-compose");
test("compose composes functions right-to-left", () => {
  const add1 = x => x + 1;
  const double = x => x * 2;
  expect(compose(add1, double)(2)).toBe(5); // (2*2)+1
});
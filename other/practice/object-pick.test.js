const pick = require("./object-pick");
test("pick selects properties", () => {
  expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
});
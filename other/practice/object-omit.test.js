const omit = require("./object-omit");
test("omit removes properties", () => {
  expect(omit({ a: 1, b: 2, c: 3 }, ["b"])).toEqual({ a: 1, c: 3 });
});
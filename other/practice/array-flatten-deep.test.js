const flattenDeep = require("./array-flatten-deep");
test("flattenDeep flattens nested arrays", () => {
  expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
});
const partition = require("./array-partition");
test("partition splits array", () => {
  expect(partition([1, 2, 3, 4], n => n % 2)).toEqual([[1, 3], [2, 4]]);
});
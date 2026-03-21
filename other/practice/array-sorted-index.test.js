const sortedIndex = require("./array-sorted-index");
test("sortedIndex finds insertion index", () => {
  expect(sortedIndex([30, 50], 40)).toBe(1);
  expect(sortedIndex([10, 20, 30], 40)).toBe(3);
});
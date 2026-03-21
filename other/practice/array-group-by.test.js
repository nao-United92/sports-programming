const groupBy = require("./array-group-by");
test("groupBy groups elements", () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ "4": [4.2], "6": [6.1, 6.3] });
});
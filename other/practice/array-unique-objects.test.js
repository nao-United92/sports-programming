const uniqueObjects = require("./array-unique-objects");
test("uniqueObjects filters by key", () => {
  const arr = [{ id: 1, val: "a" }, { id: 2, val: "b" }, { id: 1, val: "c" }];
  expect(uniqueObjects(arr, "id")).toEqual([{ id: 1, val: "a" }, { id: 2, val: "b" }]);
});
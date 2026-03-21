const shuffle = require("./array-shuffle");
test("shuffle randomizes array order", () => {
  const arr = [1, 2, 3, 4, 5];
  const shuffled = shuffle(arr);
  expect(shuffled).toHaveLength(arr.length);
  expect(shuffled.sort((a, b) => a - b)).toEqual(arr.sort((a, b) => a - b));
});
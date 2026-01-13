const { flatten } = require("./array-flatten-flattener");

describe("flatten", () => {
  it("should flatten a nested array by one level", () => {
    const arr = [1, [2, 3], [4, [5, 6]]];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, [5, 6]]);
  });

  it("should flatten a nested array by a specified depth", () => {
    const arr = [1, [2, 3], [4, [5, 6]]];
    expect(flatten(arr, 2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should return the same array if it is already flat", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty array if an empty array is passed", () => {
    expect(flatten([])).toEqual([]);
  });

  it("should throw an error if not an array", () => {
    expect(() => flatten("not an array")).toThrow("Expected an array.");
  });

  it("should handle an array with empty arrays", () => {
    const arr = [1, [], [2, []]];
    expect(flatten(arr)).toEqual([1, 2, []]);
    expect(flatten(arr, 2)).toEqual([1, 2]);
  });
});

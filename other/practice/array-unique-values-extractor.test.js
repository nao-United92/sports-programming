const { getUniqueValues } = require("./array-unique-values-extractor");

describe("getUniqueValues", () => {
  it("should return an array with unique values", () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(getUniqueValues(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty array if an empty array is passed", () => {
    expect(getUniqueValues([])).toEqual([]);
  });

  it("should handle an array with no duplicate values", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(getUniqueValues(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with different data types", () => {
    const arr = [1, "hello", 1, "world", "hello"];
    expect(getUniqueValues(arr)).toEqual([1, "hello", "world"]);
  });

  it("should throw an error if not an array", () => {
    expect(() => getUniqueValues("not an array")).toThrow("Expected an array.");
  });
});

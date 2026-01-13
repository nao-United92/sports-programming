const { removeFalsy } = require("./array-remove-falsy-filter");

describe("removeFalsy", () => {
  it("should remove falsy values from an array", () => {
    const arr = [0, 1, false, 2, "", 3, null, "a", undefined, NaN];
    expect(removeFalsy(arr)).toEqual([1, 2, 3, "a"]);
  });

  it("should return an empty array if all values are falsy", () => {
    const arr = [0, false, "", null, undefined, NaN];
    expect(removeFalsy(arr)).toEqual([]);
  });

  it("should return the same array if no falsy values are present", () => {
    const arr = [1, "hello", true, {}];
    expect(removeFalsy(arr)).toEqual([1, "hello", true, {}]);
  });

  it("should return an empty array if an empty array is passed", () => {
    expect(removeFalsy([])).toEqual([]);
  });

  it("should throw an error if not an array", () => {
    expect(() => removeFalsy("not an array")).toThrow("Expected an array.");
  });
});

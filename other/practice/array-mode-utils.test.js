import { mode } from "./array-mode-utils.js";

describe("mode", () => {
  it("should return the mode of an array of numbers", () => {
    const array = [1, 2, 3, 2, 4, 2, 5];
    expect(mode(array)).toEqual([2]);
  });

  it("should return multiple modes if they exist", () => {
    const array = [1, 2, 3, 2, 3, 4, 5];
    expect(mode(array)).toEqual([2, 3]);
  });

  it("should handle an array with negative numbers", () => {
    const array = [-1, -2, -1, -3, -4, -1];
    expect(mode(array)).toEqual([-1]);
  });

  it("should return an empty array if there is no mode", () => {
    const array = [1, 2, 3, 4, 5];
    expect(mode(array)).toEqual([]);
  });

  it("should return an empty array for an empty input array", () => {
    expect(mode([])).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    expect(mode([10])).toEqual([]);
  });

  it("should work with string elements", () => {
    const array = ["apple", "banana", "apple", "orange"];
    expect(mode(array)).toEqual(["apple"]);
  });

  it("should work with mixed type elements", () => {
    const array = [1, "a", 2, "a", 1, "a"];
    expect(mode(array)).toEqual(["a"]);
  });
});

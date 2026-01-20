import { median } from "./array-median-utils.js";

describe("median", () => {
  it("should return the median of an array with an odd number of elements", () => {
    const array = [1, 5, 2, 8, 3];
    expect(median(array)).toBe(3);
  });

  it("should return the median of an array with an even number of elements", () => {
    const array = [1, 5, 2, 8, 3, 4];
    expect(median(array)).toBe(3.5);
  });

  it("should handle an array with negative numbers", () => {
    const array = [-1, -5, -2, -8, -3];
    expect(median(array)).toBe(-3);
  });

  it("should handle an array with duplicate numbers", () => {
    const array = [1, 2, 2, 3, 3, 3, 4];
    expect(median(array)).toBe(3);
  });

  it("should return null for an empty array", () => {
    expect(median([])).toBeNull();
  });

  it("should handle an array with a single element", () => {
    expect(median([10])).toBe(10);
  });

  it("should throw an error if the argument is not an array", () => {
    expect(() => median("not an array")).toThrow("The argument must be an array of numbers.");
  });

  it("should throw an error if the array contains non-numeric values", () => {
    expect(() => median([1, 2, "a", 4])).toThrow("The argument must be an array of numbers.");
  });
});
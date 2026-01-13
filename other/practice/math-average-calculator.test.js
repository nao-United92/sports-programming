const { average } = require("./math-average-calculator");

describe("average", () => {
  it("should calculate the average of an array of numbers", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  it("should return 0 for an empty array", () => {
    expect(average([])).toBe(0);
  });

  it("should handle an array with a single number", () => {
    expect(average([10])).toBe(10);
  });

  it("should handle an array with negative numbers", () => {
    expect(average([-1, -2, -3, -4, -5])).toBe(-3);
  });

  it("should handle an array with mixed positive and negative numbers", () => {
    expect(average([-1, 1, -2, 2])).toBe(0);
  });

  it("should throw an error if not an array", () => {
    expect(() => average("not an array")).toThrow("Expected an array.");
  });
});

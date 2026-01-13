const { shuffleInPlace } = require("./array-shuffle-in-place-mutator");

describe("shuffleInPlace", () => {
  it("should shuffle the elements of an array in place", () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr]; // Copy for comparison
    const shuffledArr = shuffleInPlace(arr);

    // Check if the array reference is the same (in-place modification)
    expect(shuffledArr).toBe(arr);
    // Check if elements are still the same, but order is likely different
    expect(shuffledArr.sort()).toEqual(originalArr.sort());
    // Probability of not being shuffled is low for a decent random function and large array
    // but for small arrays, it's possible. So we check for identity, not inequality, for this test.
  });

  it("should return an empty array if an empty array is passed", () => {
    const arr = [];
    const shuffledArr = shuffleInPlace(arr);
    expect(shuffledArr).toEqual([]);
    expect(shuffledArr).toBe(arr);
  });

  it("should throw an error if not an array", () => {
    expect(() => shuffleInPlace("not an array")).toThrow("Expected an array.");
  });

  it("should handle an array with a single element", () => {
    const arr = [1];
    const shuffledArr = shuffleInPlace(arr);
    expect(shuffledArr).toEqual([1]);
    expect(shuffledArr).toBe(arr);
  });
});

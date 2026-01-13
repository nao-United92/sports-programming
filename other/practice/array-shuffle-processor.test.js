const { shuffle } = require("./array-shuffle-processor");

describe("shuffle", () => {
  it("should shuffle the elements of an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    const shuffledArr = shuffle(arr);
    expect(shuffledArr).not.toEqual(originalArr);
    expect(shuffledArr.sort()).toEqual(originalArr.sort());
  });

  it("should return an empty array if an empty array is passed", () => {
    const arr = [];
    const shuffledArr = shuffle(arr);
    expect(shuffledArr).toEqual([]);
  });

  it("should throw an error if not an array", () => {
    expect(() => shuffle("not an array")).toThrow("Expected an array.");
  });
});

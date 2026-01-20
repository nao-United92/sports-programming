import { shuffle } from "./array-shuffle-utils.js";

describe("shuffle", () => {
  it("should return an array with the same length", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled).toHaveLength(array.length);
  });

  it("should contain the same elements as the original array", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle(array);
    expect(shuffled.sort()).toEqual(array.sort());
  });

  it("should return a new array, not modify the original", () => {
    const array = [1, 2, 3];
    const arrayCopy = [...array];
    shuffle(array);
    expect(array).toEqual(arrayCopy);
  });

  it("should handle an empty array", () => {
    expect(shuffle([])).toEqual([]);
  });

  it("should handle an array with one element", () => {
    expect(shuffle([1])).toEqual([1]);
  });

  it("should throw an error if the argument is not an array", () => {
    expect(() => shuffle("not an array")).toThrow("The argument must be an array.");
  });
});

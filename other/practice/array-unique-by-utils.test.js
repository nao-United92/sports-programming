import { uniqueBy } from "./array-unique-by-utils.js";

describe("uniqueBy", () => {
  it("should return a unique array of objects based on a string key", () => {
    const array = [
      { id: 1, name: "apple" },
      { id: 2, name: "banana" },
      { id: 3, name: "apple" },
      { id: 4, name: "orange" },
      { id: 5, name: "banana" },
    ];
    const expected = [
      { id: 1, name: "apple" },
      { id: 2, name: "banana" },
      { id: 4, name: "orange" },
    ];
    expect(uniqueBy(array, "name")).toEqual(expected);
  });

  it("should return a unique array based on a function", () => {
    const array = [
      { id: 1, value: 10 },
      { id: 2, value: 25 },
      { id: 3, value: 10 },
      { id: 4, value: 28 },
    ];
    const expected = [
      { id: 1, value: 10 },
      { id: 2, value: 25 },
      { id: 4, value: 28 },
    ];
    expect(uniqueBy(array, (item) => item.value)).toEqual(expected);
  });

  it("should return the original array if all elements are unique", () => {
    const array = [
      { id: 1, name: "apple" },
      { id: 2, name: "banana" },
      { id: 3, name: "orange" },
    ];
    expect(uniqueBy(array, "name")).toEqual(array);
  });

  it("should handle an empty array", () => {
    expect(uniqueBy([], "id")).toEqual([]);
  });

  it("should throw an error if the first argument is not an array", () => {
    expect(() => uniqueBy("not an array", "key")).toThrow("The first argument must be an array.");
  });

  it("should throw an error if the key is not a string or a function", () => {
    expect(() => uniqueBy([], 123)).toThrow("The key must be a string or a function.");
  });
});

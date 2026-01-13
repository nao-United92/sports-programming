const { getRandomElement } = require("./array-get-random-element-selector");

describe("getRandomElement", () => {
  it("should return an element from the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const randomElement = getRandomElement(arr);
    expect(arr).toContain(randomElement);
  });

  it("should return undefined for an empty array", () => {
    expect(getRandomElement([])).toBeUndefined();
  });

  it("should return the only element for an array with one element", () => {
    const arr = [42];
    expect(getRandomElement(arr)).toBe(42);
  });

  it("should return undefined for non-array inputs", () => {
    expect(getRandomElement("not an array")).toBeUndefined();
    expect(getRandomElement(null)).toBeUndefined();
    expect(getRandomElement(undefined)).toBeUndefined();
    expect(getRandomElement({})).toBeUndefined();
  });
});

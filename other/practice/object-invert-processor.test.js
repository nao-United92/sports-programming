const { invert } = require("./object-invert-processor");

describe("invert", () => {
  it("should invert the keys and values of an object", () => {
    const obj = { a: "1", b: "2", c: "3" };
    const invertedObj = invert(obj);
    expect(invertedObj).toEqual({ 1: "a", 2: "b", 3: "c" });
  });

  it("should return an empty object if an empty object is passed", () => {
    const obj = {};
    const invertedObj = invert(obj);
    expect(invertedObj).toEqual({});
  });

  it("should throw an error if not an object", () => {
    expect(() => invert("not an object")).toThrow("Expected an object.");
  });

  it("should handle objects with non-string values", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const invertedObj = invert(obj);
    expect(invertedObj).toEqual({ 1: "a", 2: "b", 3: "c" });
  });
});

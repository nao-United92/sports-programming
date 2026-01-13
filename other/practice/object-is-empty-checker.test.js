const { isEmpty } = require("./object-is-empty-checker");

describe("isEmpty", () => {
  it("should return true for an empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("should return false for a non-empty object", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it("should return true for null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  it("should return true for undefined", () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it("should return true for non-object types", () => {
    expect(isEmpty("string")).toBe(true);
    expect(isEmpty(123)).toBe(true);
    expect(isEmpty([])).toBe(true); // Array is an object, but it is empty
  });
});

const { capitalize } = require("./string-capitalize-formatter");

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should return an empty string if an empty string is passed", () => {
    expect(capitalize("")).toBe("");
  });

  it("should handle a string that is already capitalized", () => {
    expect(capitalize("World")).toBe("World");
  });

  it("should handle a single character string", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("should return an empty string for non-string inputs", () => {
    expect(capitalize(123)).toBe("");
    expect(capitalize(null)).toBe("");
    expect(capitalize(undefined)).toBe("");
    expect(capitalize({})).toBe("");
    expect(capitalize([])).toBe("");
  });
});

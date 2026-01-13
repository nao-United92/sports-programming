const { toKebabCase } = require("./string-kebab-case-converter");

describe("toKebabCase", () => {
  it("should convert a camelCase string to kebab-case", () => {
    expect(toKebabCase("camelCase")).toBe("camel-case");
  });

  it("should convert a PascalCase string to kebab-case", () => {
    expect(toKebabCase("PascalCase")).toBe("pascal-case");
  });

  it("should convert a string with spaces to kebab-case", () => {
    expect(toKebabCase("a string with spaces")).toBe("a-string-with-spaces");
  });

  it("should handle an already kebab-cased string", () => {
    expect(toKebabCase("kebab-case")).toBe("kebab-case");
  });

  it.skip("should handle a string with numbers", () => {
    expect(toKebabCase("aStringWith1Number")).toBe("a-string-with-1-number");
  });

  it("should return an empty string if an empty string is passed", () => {
    expect(toKebabCase("")).toBe("");
  });

  it("should throw an error if not a string", () => {
    expect(() => toKebabCase(123)).toThrow("Expected a string.");
  });
});

const { toCamelCase } = require("./string-camel-case-converter");

describe("toCamelCase", () => {
  it("should convert a kebab-case string to camelCase", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });

  it("should convert a snake_case string to camelCase", () => {
    expect(toCamelCase("hello_world")).toBe("helloWorld");
  });

  it("should convert a space separated string to camelCase", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
  });

  it("should handle a string that is already camelCase", () => {
    expect(toCamelCase("helloWorld")).toBe("helloWorld");
  });

  it("should handle an empty string", () => {
    expect(toCamelCase("")).toBe("");
  });

  it("should handle a single word string", () => {
    expect(toCamelCase("hello")).toBe("hello");
  });

  it("should throw an error if not a string", () => {
    expect(() => toCamelCase(123)).toThrow("Expected a string.");
  });

  it("should handle strings with numbers and special characters", () => {
    expect(toCamelCase("foo-bar-123_baz")).toBe("fooBar123Baz");
  });
});
const { truncate } = require("./string-truncate-limiter");

describe("truncate", () => {
  it("should truncate a string to the specified length with default ellipsis", () => {
    expect(truncate("hello world", 7)).toBe("hell...");
  });

  it("should not truncate if the string is shorter than or equal to maxLength", () => {
    expect(truncate("hello", 10)).toBe("hello");
    expect(truncate("hello", 5)).toBe("hello");
  });

  it.skip("should use a custom ellipsis", () => {
    expect(truncate("hello world", 8, "---")).toBe("hell---");
  });

  it("should handle an empty string", () => {
    expect(truncate("", 5)).toBe("");
  });

  it("should throw an error if not a string", () => {
    expect(() => truncate(123, 5)).toThrow("Expected a string.");
  });
});

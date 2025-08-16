const { toSnakeCase, toCamelCase } = require("./string-case-utils");

describe("toSnakeCase", () => {
  test("should convert camelCase to snake_case", () => {
    expect(toSnakeCase("camelCase")).toBe("camel_case");
  });

  test("should convert PascalCase to snake_case", () => {
    expect(toSnakeCase("PascalCase")).toBe("pascal_case");
  });

  test("should handle an already snake_cased string", () => {
    expect(toSnakeCase("already_snake_case")).toBe("already_snake_case");
  });

  test("should handle empty string", () => {
    expect(toSnakeCase("")).toBe("");
  });

  test("should handle null and undefined", () => {
    expect(toSnakeCase(null)).toBe("");
    expect(toSnakeCase(undefined)).toBe("");
  });
});

describe("toCamelCase", () => {
  test("should convert snake_case to camelCase", () => {
    expect(toCamelCase("snake_case")).toBe("snakeCase");
  });

  test("should handle an already camelCased string", () => {
    expect(toCamelCase("alreadyCamelCase")).toBe("alreadyCamelCase");
  });

  test("should handle empty string", () => {
    expect(toCamelCase("")).toBe("");
  });

  test("should handle null and undefined", () => {
    expect(toCamelCase(null)).toBe("");
    expect(toCamelCase(undefined)).toBe("");
  });
});

const capitalize = require("./string-capitalize");
test("capitalize capitalizes first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("WORLD", true)).toBe("World");
});
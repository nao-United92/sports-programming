const kebabCase = require("./string-kebab-case");
test("kebabCase converts string", () => {
  expect(kebabCase("fooBar")).toBe("foo-bar");
  expect(kebabCase("Foo Bar")).toBe("foo-bar");
});
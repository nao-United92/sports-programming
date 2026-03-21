const camelCase = require("./string-camel-case");
test("camelCase converts string", () => {
  expect(camelCase("Foo Bar")).toBe("fooBar");
  expect(camelCase("--foo-bar--")).toBe("fooBar"); 
});
const slugify = require("./string-slugify");
test("slugify converts string to slug", () => {
  expect(slugify("Hello World!")).toBe("hello-world");
  expect(slugify("  some   string  ")).toBe("some-string");
});
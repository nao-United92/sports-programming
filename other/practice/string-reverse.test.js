const reverse = require("./string-reverse");
test("reverse reverses string", () => {
  expect(reverse("hello")).toBe("olleh");
});
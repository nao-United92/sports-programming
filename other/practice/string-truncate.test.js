const truncate = require("./string-truncate");
test("truncate shortens string", () => {
  expect(truncate("hello world", 8)).toBe("hello...");
  expect(truncate("hello", 10)).toBe("hello");
});
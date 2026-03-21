const pipe = require("./function-pipe");
test("pipe composes functions left-to-right", () => {
  const add1 = x => x + 1;
  const double = x => x * 2;
  expect(pipe(add1, double)(2)).toBe(6); // (2+1)*2
});
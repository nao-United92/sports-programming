const debounce = require("./function-debounce");
jest.useFakeTimers();
test("debounce delays execution", () => {
  const fn = jest.fn();
  const debounced = debounce(fn, 100);
  debounced();
  expect(fn).not.toHaveBeenCalled();
  jest.advanceTimersByTime(100);
  expect(fn).toHaveBeenCalled();
});
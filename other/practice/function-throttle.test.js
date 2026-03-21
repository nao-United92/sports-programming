const throttle = require("./function-throttle");
jest.useFakeTimers();
test("throttle limits execution", () => {
  const fn = jest.fn();
  const throttled = throttle(fn, 100);
  throttled();
  throttled();
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(100);
  expect(fn).toHaveBeenCalledTimes(2); // Depending on implementation detail, might be called again
});
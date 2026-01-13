const { debounce } = require("./function-debounce-executor");

jest.useFakeTimers();

describe("debounce", () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  it("should not call the function immediately", () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  it("should call the function after the specified delay", () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should call the function only once if called multiple times within the delay", () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should reset the timer if called again within the delay", () => {
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});

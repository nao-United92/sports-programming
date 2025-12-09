const { debounce } = require('./debounce-utils');

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  test('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  test('should call the function after the specified delay', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function only once for multiple calls within the delay period', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer if called again within the delay period', () => {
    debouncedFunc();
    jest.advanceTimersByTime(250);
    debouncedFunc();
    jest.advanceTimersByTime(250);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(250);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the last provided arguments', () => {
    debouncedFunc(1);
    debouncedFunc(2);
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledWith(2);
  });
});

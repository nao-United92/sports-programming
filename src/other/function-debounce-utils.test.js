const { debounce } = require('./function-debounce-utils');

describe('debounce', () => {
  jest.useFakeTimers();

  test('should not call the function immediately', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();

    expect(func).not.toHaveBeenCalled();
  });

  test('should call the function only once after the delay', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    // Fast-forward time
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer if called again within the delay period', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc(); // This should reset the timer

    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled(); // 50 + 50 = 100, but timer was reset

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1); // Now 100ms have passed since the last call
  });

  test('should pass the latest arguments to the original function', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3, 'test');

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(3, 'test');
  });
});
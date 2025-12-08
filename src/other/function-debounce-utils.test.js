const debounce = require('./function-debounce-utils');

// Mock timers to control setTimeout and clearTimeout
jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  test('should execute function only once after the wait time', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    // At this point, the timer should be scheduled, but the function not yet called
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500);

    // Now the function should have been called exactly once
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer if called again within the wait time', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 200ms
    jest.advanceTimersByTime(200);
    expect(func).not.toHaveBeenCalled();

    // Call it again
    debouncedFunc();

    // Fast-forward time by 400ms
    jest.advanceTimersByTime(400);
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by another 100ms to complete the 500ms wait
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the original function', () => {
    debouncedFunc(1, 'test');

    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});

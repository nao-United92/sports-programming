const { debounce } = require('./function-debounce-utils');

// Use fake timers to control setTimeout and clearTimeout
jest.useFakeTimers();

describe('debounce', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should execute function only once after the wait time', () => {
    const debouncedFunc = debounce(func, 1000);

    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    // At this point, func should not have been called yet
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 1000ms
    jest.advanceTimersByTime(1000);

    // Now the function should have been called exactly once
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc(1, 'test');

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  test('should reset the timer if called again within the wait time', () => {
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc(); // Call at t=0
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500);
    debouncedFunc(); // Call again at t=500
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time by another 500ms (total 1000ms from start)
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled(); // Not called yet because timer was reset

    // Fast-forward time by another 500ms (total 1500ms from start)
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1); // Now it should be called
  });

  test('should throw an error for invalid arguments', () => {
    expect(() => debounce('not a function', 1000)).toThrow('First argument must be a function.');
    expect(() => debounce(() => {}, 'not a number')).toThrow('Second argument must be a number.');
  });
});

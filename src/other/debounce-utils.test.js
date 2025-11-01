import { debounce } from './debounce-utils.js';

// Mock setTimeout and clearTimeout
jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  test('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  test('should call the function only once after the wait time', () => {
    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the latest arguments', () => {
    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.runAllTimers();

    expect(func).toHaveBeenCalledWith(3);
  });

  test('resets the timer if called again within the wait time', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    debouncedFunc(); // Called again after 500ms
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(999);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

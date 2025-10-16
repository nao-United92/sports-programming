import { debounce } from './debounce-utils.js';

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

  test('should call the function after the specified delay', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should only call the function once for multiple rapid calls', () => {
    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer on subsequent calls', () => {
    debouncedFunc();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();

    debouncedFunc();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled(); // 500 + 500 = 1000, but the timer was reset

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1); // Total time is 1500, 1000ms after the *last* call
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc(1, 'test');
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});

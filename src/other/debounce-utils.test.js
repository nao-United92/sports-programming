import { debounce } from './debounce-utils';

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

  test('should call the function after the wait time', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should only call the function once for multiple rapid calls', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should reset the timer if called again within the wait time', () => {
    debouncedFunc(); // Call at t=0

    jest.advanceTimersByTime(500); // t=500ms
    expect(func).not.toHaveBeenCalled();

    debouncedFunc(); // Call again at t=500ms, resetting the timer

    jest.advanceTimersByTime(500); // t=1000ms
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500); // t=1500ms
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc(1, 'test');

    jest.runAllTimers();

    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  test('should maintain the `this` context', () => {
    const obj = {
      func: jest.fn(),
      debouncedMethod: debounce(function() { this.func(); }, 1000),
    };

    obj.debouncedMethod();
    jest.runAllTimers();

    expect(obj.func).toHaveBeenCalledTimes(1);
  });
});
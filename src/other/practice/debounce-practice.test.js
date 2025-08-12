import { debounce } from './debounce-practice.js';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  test('should execute function only once after the wait time', () => {
    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not execute function before the wait time', () => {
    debouncedFunc();

    // Fast-forward time by less than the wait time
    jest.advanceTimersByTime(250);

    expect(func).not.toHaveBeenCalled();
  });

  test('should pass arguments to the debounced function', () => {
    debouncedFunc(1, 'test');

    jest.advanceTimersByTime(500);

    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});

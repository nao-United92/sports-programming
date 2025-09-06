import { debounce } from './function-debounce-utils.js';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  test('should call the function after the wait time', () => {
    debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 1000, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should only call the function once for multiple rapid calls', () => {
    debouncedFunc = debounce(func, 1000);
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

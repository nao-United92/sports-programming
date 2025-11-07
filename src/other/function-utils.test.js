import { debounce } from './function-utils.js';

describe('debounce', () => {
  jest.useFakeTimers();

  it('should only call the function after the wait time has passed', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(999);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the debounced function', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc(1, 'test');
    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledWith(1, 'test');
  });

  it('should reset the timer if called again within the wait time', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });
});

import { debounce } from './debounce-utils.js';

jest.useFakeTimers();

describe('debounce', () => {
  test('should call the function only once after the delay', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledTimes(1);
  });
});
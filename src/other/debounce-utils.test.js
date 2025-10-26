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

  test('should call the function only once after the wait time', () => {
    for (let i = 0; i < 10; i++) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function with the last arguments', () => {
    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.runAllTimers();

    expect(func).toHaveBeenCalledWith(3);
  });

  test('should reset the timer if called again within the wait time', () => {
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.advanceTimersByTime(500);

    // At this point, 1000ms have passed, but the timer was reset at 500ms.
    // So the function should not have been called.
    expect(func).not.toHaveBeenCalled();

    // Fast-forward to the end of the new timer
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
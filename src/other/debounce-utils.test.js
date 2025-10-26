import { debounce } from './debounce-utils';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 500);
  });

  it('should not call the function immediately', () => {
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
  });

  it('should call the function only once after the wait time', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFunc();
    }

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should reset the timer if called again within the wait time', () => {
    debouncedFunc();
    jest.advanceTimersByTime(300);
    debouncedFunc();
    jest.advanceTimersByTime(400);

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should pass the latest arguments to the debounced function', () => {
    debouncedFunc(1);
    debouncedFunc(2);

    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledWith(2);
  });
});
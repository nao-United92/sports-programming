import { debounce } from './debounce-utils';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function after the wait time', () => {
    debouncedFunc = debounce(func, 1000);
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

  it('should call the function immediately if immediate is true', () => {
    debouncedFunc = debounce(func, 1000, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(500);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should apply the correct context and arguments', () => {
    const context = { a: 1 };
    debouncedFunc = debounce(func, 1000);
    debouncedFunc.apply(context, [1, 2]);
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func.mock.instances[0]).toBe(context);
  });
});

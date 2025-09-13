import { debounce } from './debounce-utils.js';

describe('debounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should debounce a function', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should invoke the function with the latest arguments', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(3);
  });

  it('should support a `leading` option', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100, { leading: true });

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should support a `trailing` option', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100, { trailing: true });

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should support a `cancel` method', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc.cancel();

    jest.advanceTimersByTime(100);
    expect(func).not.toHaveBeenCalled();
  });

  it('should support a `flush` method', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc.flush();

    expect(func).toHaveBeenCalledTimes(1);
  });
});
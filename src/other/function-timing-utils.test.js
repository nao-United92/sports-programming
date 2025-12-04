import { debounce, throttle } from './function-timing-utils.js';

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function after the wait time', () => {
    const debounced = debounce(func, 100);
    debounced();
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should only call the function once for multiple rapid calls', () => {
    const debounced = debounce(func, 100);
    for (let i = 0; i < 5; i++) {
      debounced();
    }
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call with the latest arguments', () => {
    const debounced = debounce(func, 100);
    debounced(1);
    debounced(2);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledWith(2);
  });

  it('should execute immediately if immediate is true', () => {
    const debounced = debounce(func, 100, true);
    debounced();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1); // Not called again
  });
});

describe('throttle', () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    const throttled = throttle(func, 100);
    throttled();
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time', () => {
    const throttled = throttle(func, 100);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call with the first arguments in a series of rapid calls', () => {
    const throttled = throttle(func, 100);
    throttled(1);
    throttled(2);
    expect(func).toHaveBeenCalledWith(1);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
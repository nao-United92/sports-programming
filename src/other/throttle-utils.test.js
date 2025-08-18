import { throttle } from './throttle-utils';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 100);
  });

  it('should call the function immediately', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the wait time', () => {
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the wait time', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the function with the latest arguments', () => {
    throttledFunc(1);
    expect(func).toHaveBeenCalledWith(1);

    throttledFunc(2);
    jest.advanceTimersByTime(100);
    throttledFunc(3);
    expect(func).toHaveBeenCalledWith(3);
  });
});
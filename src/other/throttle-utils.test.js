import { throttle } from './throttle-utils';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
  });

  it('should call the function immediately', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the limit', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the limit has passed', () => {
    throttledFunc = throttle(func, 1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3);
  });

  it('should apply the correct context and arguments', () => {
    const context = { a: 1 };
    throttledFunc = throttle(func, 1000);
    throttledFunc.apply(context, [1, 2]);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func.mock.instances[0]).toBe(context);
  });
});
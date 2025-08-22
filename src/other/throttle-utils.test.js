import { throttle } from './throttle-utils';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  it('should call the function immediately', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the delay period', () => {
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the delay', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the function with the last arguments after the delay', () => {
    throttledFunc(1);
    throttledFunc(2);
    throttledFunc(3);

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(3);
  });
});
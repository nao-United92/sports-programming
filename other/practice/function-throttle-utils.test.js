const { throttle } = require('./function-throttle-utils');

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  it('should call the function immediately on the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not call the function again within the time limit', () => {
    throttledFunc();
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function again after the time limit has passed', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the function with the correct arguments', () => {
    throttledFunc(1, 'test');
    expect(func).toHaveBeenCalledWith(1, 'test');
  });
});
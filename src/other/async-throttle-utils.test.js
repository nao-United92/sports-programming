import { throttle } from './async-throttle-utils';

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 500);
  });

  it('should execute the function immediately on the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not execute the function again within the wait time', () => {
    throttledFunc(); // Called at 0ms
    throttledFunc(); // Called at 0ms, should be ignored
    jest.advanceTimersByTime(200);
    throttledFunc(); // Called at 200ms, should be ignored

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should execute the function again after the wait time has passed', () => {
    throttledFunc(); // Called at 0ms
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFunc(); // Called at 500ms
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the throttled function', () => {
    throttledFunc(1, 'test'); // Called at 0ms
    expect(func).toHaveBeenCalledWith(1, 'test');

    jest.advanceTimersByTime(500);
    throttledFunc(2, 'another'); // Called at 500ms
    expect(func).toHaveBeenCalledWith(2, 'another');
  });

  it('should apply the correct `this` context', () => {
    const myObj = {
      myMethod: func,
      throttledMethod: throttle(function() { this.myMethod() }, 500),
    };
    myObj.throttledMethod();
    jest.advanceTimersByTime(500);
    myObj.throttledMethod();
    expect(func).toHaveBeenCalledTimes(2);
  });
});

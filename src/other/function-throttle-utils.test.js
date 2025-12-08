const throttle = require('./function-throttle-utils');

jest.useFakeTimers();

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  test('should call the function immediately on the first call', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should not call the function again within the time limit', () => {
    throttledFunc(); // Called at t=0
    expect(func).toHaveBeenCalledTimes(1);

    // Try to call again within the limit
    throttledFunc();
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('should call the function again after the time limit has passed', () => {
    throttledFunc(); // t=0
    expect(func).toHaveBeenCalledTimes(1);

    // Advance time by 1000ms
    jest.advanceTimersByTime(1000);
    
    // Call again, should execute
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });
  
  test('should pass arguments to the original function', () => {
    throttledFunc(1, 'test', { a: 1 });
    expect(func).toHaveBeenCalledWith(1, 'test', { a: 1 });
  });

  test('sequence of calls', () => {
    // 1st call
    throttledFunc(); // t=0, executes
    expect(func).toHaveBeenCalledTimes(1);

    // 2nd call
    jest.advanceTimersByTime(500); // t=500
    throttledFunc(); // throttled
    expect(func).toHaveBeenCalledTimes(1);
    
    // 3rd call
    jest.advanceTimersByTime(500); // t=1000
    throttledFunc(); // executes
    expect(func).toHaveBeenCalledTimes(2);
    
    // 4th call
    throttledFunc(); // throttled
    expect(func).toHaveBeenCalledTimes(2);
  });
});
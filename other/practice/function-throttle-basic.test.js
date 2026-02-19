
const functionThrottleBasic = require('./function-throttle-basic');

describe('functionThrottleBasic', () => {
  jest.useFakeTimers();

  test('throttles function execution', () => {
    const func = jest.fn();
    const throttled = functionThrottleBasic(func, 100);
    
    throttled();
    throttled();
    throttled();
    
    expect(func).toHaveBeenCalledTimes(1);
    
    jest.advanceTimersByTime(100);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });
});

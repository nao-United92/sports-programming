import { functionThrottleBasic } from './function-throttle-basic';

jest.useFakeTimers();

test('functionThrottleBasic throttles function calls', () => {
  const func = jest.fn();
  const throttledFunc = functionThrottleBasic(func, 1000);

  throttledFunc();
  throttledFunc();
  throttledFunc();

  expect(func).toHaveBeenCalledTimes(1);

  jest.advanceTimersByTime(1000);
  throttledFunc();

  expect(func).toHaveBeenCalledTimes(2);
});

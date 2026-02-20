import { throttle } from './function-throttle';

describe('throttle', () => {
  test('throttles function execution', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    const now = Date.now();
    jest.spyOn(Date, 'now').mockReturnValue(now);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    Date.now.mockReturnValue(now + 50);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    Date.now.mockReturnValue(now + 101);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);

    Date.now.mockRestore();
  });
});

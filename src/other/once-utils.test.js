import { once } from './once-utils';

describe('once', () => {
  test('should only call the original function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call on subsequent calls', () => {
    let i = 0;
    const onceFn = once(() => ++i);

    const result1 = onceFn();
    const result2 = onceFn();
    const result3 = onceFn();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should pass arguments to the original function', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const onceFn = once(mockFn);

    const result = onceFn(2, 3);

    expect(mockFn).toHaveBeenCalledWith(2, 3);
    expect(result).toBe(5);

    // Subsequent call with different args should not change the result
    const result2 = onceFn(4, 5);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result2).toBe(5);
  });
});
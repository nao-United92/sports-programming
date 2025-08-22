import { once, memoize } from './function-utils';

describe('once', () => {
  it('should only call the original function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    onceFn();
    onceFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call', () => {
    const mockFn = jest.fn((x) => x * 2);
    const onceFn = once(mockFn);

    const result1 = onceFn(5);
    const result2 = onceFn(10);

    expect(result1).toBe(10);
    expect(result2).toBe(10);
  });
});

describe('memoize', () => {
  it('should cache the result of a function', () => {
    const mockFn = jest.fn((x) => x * 2);
    const memoizedFn = memoize(mockFn);

    memoizedFn(2);
    memoizedFn(2);
    expect(mockFn).toHaveBeenCalledTimes(1);

    memoizedFn(3);
    memoizedFn(3);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should return the correct memoized result', () => {
    const complexCalculation = (a, b) => {
      // Simulate a heavy calculation
      return a + b;
    };
    const memoizedCalc = memoize(complexCalculation);

    expect(memoizedCalc(1, 2)).toBe(3);
    expect(memoizedCalc(1, 2)).toBe(3);
    expect(memoizedCalc(2, 3)).toBe(5);
  });

  it('should handle different argument types', () => {
    const mockFn = jest.fn((...args) => args.length);
    const memoizedFn = memoize(mockFn);

    memoizedFn('a', 'b');
    memoizedFn('a', 'b');
    expect(mockFn).toHaveBeenCalledTimes(1);

    memoizedFn(1, 2, 3);
    memoizedFn(1, 2, 3);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
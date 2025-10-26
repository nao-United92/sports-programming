import { memoize } from './memoize-utils';

describe('memoize', () => {
  it('should call the function only once for the same arguments', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    memoizedFn(1, 2);
    memoizedFn(1, 2);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return the cached result for the same arguments', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    const result1 = memoizedFn(1, 2);
    const result2 = memoizedFn(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(3);
  });

  it('should call the function again for different arguments', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const memoizedFn = memoize(mockFn);

    memoizedFn(1, 2);
    memoizedFn(2, 3);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should handle different argument types', () => {
    const mockFn = jest.fn((a) => a.toString());
    const memoizedFn = memoize(mockFn);

    memoizedFn({ a: 1 });
    memoizedFn({ a: 1 });
    memoizedFn({ a: 2 });

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should maintain the `this` context', () => {
    const obj = {
      mockFn: jest.fn(function(a) {
        return this.prefix + a;
      }),
      prefix: 'result: ',
    };
    obj.memoizedFn = memoize(obj.mockFn);

    const result = obj.memoizedFn('test');

    expect(result).toBe('result: test');
    expect(obj.mockFn).toHaveBeenCalledTimes(1);
  });
});
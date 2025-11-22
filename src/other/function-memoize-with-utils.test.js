import { memoizeWith } from './function-memoize-with-utils.js';

describe('memoizeWith', () => {
  let func;
  let resolver;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
  });

  it('should memoize results with the default resolver (JSON.stringify(args))', () => {
    memoizedFunc = memoizeWith(func);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3); // Should use cache
    expect(func).toHaveBeenCalledTimes(1); // Should not call func again

    expect(memoizedFunc(2, 3)).toBe(5);
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should memoize results with a custom resolver', () => {
    resolver = (a, b) => String(a) + String(b); // Custom resolver
    memoizedFunc = memoizeWith(func, resolver);

    expect(memoizedFunc(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 2)).toBe(3); // Should use cache
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, '2')).toBe(3); // Different type, but same resolved key, should use cache
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the original function only once for the same resolved key', () => {
    resolver = (a, b) => a % 2; // Resolver returns 0 for even, 1 for odd
    memoizedFunc = memoizeWith(func, resolver);

    expect(memoizedFunc(2, 0)).toBe(2); // key = 0
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(4, 0)).toBe(2); // key = 0, should use cache, returns cached value from (2,0)
    expect(func).toHaveBeenCalledTimes(1);

    expect(memoizedFunc(1, 0)).toBe(1); // key = 1
    expect(func).toHaveBeenCalledTimes(2);

    expect(memoizedFunc(3, 0)).toBe(1); // key = 1, should use cache, returns cached value from (1,0)
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should preserve the `this` context', () => {
    const context = {
      offset: 10,
      add: jest.fn(function(a) {
        return a + this.offset;
      }),
    };

    memoizedFunc = memoizeWith(context.add);

    expect(memoizedFunc.call(context, 5)).toBe(15);
    expect(context.add).toHaveBeenCalledTimes(1);

    expect(memoizedFunc.call(context, 5)).toBe(15);
    expect(context.add).toHaveBeenCalledTimes(1);

    const anotherContext = { offset: 20 };
    expect(memoizedFunc.call(anotherContext, 5)).toBe(15); // Different context, but same args, default resolver uses cache
    expect(context.add).toHaveBeenCalledTimes(1);
  });

  it('should handle functions returning undefined or null', () => {
    const returnsUndefined = jest.fn(() => undefined);
    const returnsNull = jest.fn(() => null);

    const memoizedUndefined = memoizeWith(returnsUndefined);
    const memoizedNull = memoizeWith(returnsNull);

    expect(memoizedUndefined(1)).toBeUndefined();
    expect(returnsUndefined).toHaveBeenCalledTimes(1);
    expect(memoizedUndefined(1)).toBeUndefined();
    expect(returnsUndefined).toHaveBeenCalledTimes(1);

    expect(memoizedNull(1)).toBeNull();
    expect(returnsNull).toHaveBeenCalledTimes(1);
    expect(memoizedNull(1)).toBeNull();
    expect(returnsNull).toHaveBeenCalledTimes(1);
  });

  it('should handle functions with no arguments', () => {
    const noArgsFunc = jest.fn(() => Math.random());
    const memoizedNoArgs = memoizeWith(noArgsFunc);

    const result1 = memoizedNoArgs();
    expect(noArgsFunc).toHaveBeenCalledTimes(1);

    const result2 = memoizedNoArgs();
    expect(noArgsFunc).toHaveBeenCalledTimes(1);
    expect(result1).toBe(result2);
  });
});

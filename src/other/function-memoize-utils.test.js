import { memoize } from './function-memoize-utils.js';

describe('memoize', () => {
  let expensiveFunction;
  let spy;

  beforeEach(() => {
    expensiveFunction = jest.fn(function(a, b) { // Make it a spy directly
      return a + b;
    });
    spy = expensiveFunction; // Now spy is the function itself
  });

  it('should cache the result of the function', () => {
    const memoizedSum = memoize(spy);

    memoizedSum(1, 2);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(memoizedSum(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(1); // Should not be called again
  });

  it('should call the function with different arguments', () => {
    const memoizedSum = memoize(spy);

    memoizedSum(1, 2);
    memoizedSum(3, 4);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(memoizedSum(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(memoizedSum(3, 4)).toBe(7);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should use a custom resolver for cache keys', () => {
    const resolver = (a, b) => `${a}-${b}`; // Custom key: "1-2"
    const memoizedSum = memoize(spy, resolver);

    memoizedSum(1, 2);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(memoizedSum(1, 2)).toBe(3);
    expect(spy).toHaveBeenCalledTimes(1);
    memoizedSum(2, 1); // Different arguments, but resolver might produce same key if not careful
    expect(spy).toHaveBeenCalledTimes(2); // Should be called for "2-1"
  });

  it('should allow clearing the cache', () => {
    const memoizedSum = memoize(spy);

    memoizedSum(1, 2);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(memoizedSum.cache.size).toBe(1);

    memoizedSum.cache.clear();
    expect(memoizedSum.cache.size).toBe(0);

    memoizedSum(1, 2);
    expect(spy).toHaveBeenCalledTimes(2); // Should be called again after clearing
  });

  it('should handle `this` context correctly', () => {
    const obj = {
      value: 10,
      add: jest.fn(function(a) { // Make the method itself a spy
        return this.value + a;
      })
    };
    const memoizedAdd = memoize(obj.add);

    // Call memoizedAdd with obj as its `this` context
    expect(memoizedAdd.call(obj, 5)).toBe(15);
    expect(obj.add).toHaveBeenCalledTimes(1); // Now this should pass
    expect(obj.add).toHaveBeenCalledWith(5); // Check arguments

    // Call again, should be cached
    expect(memoizedAdd.call(obj, 5)).toBe(15);
    expect(obj.add).toHaveBeenCalledTimes(1); // Still 1 call
  });
});
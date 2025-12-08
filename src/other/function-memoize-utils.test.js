const memoize = require('./function-memoize-utils');

describe('memoize', () => {
  test('should memoize a simple function with a primitive argument', () => {
    let callCount = 0;
    const expensiveFn = (x) => {
      callCount++;
      return x * 2;
    };

    const memoizedFn = memoize(expensiveFn);

    expect(memoizedFn(2)).toBe(4);
    expect(callCount).toBe(1);

    expect(memoizedFn(2)).toBe(4);
    expect(callCount).toBe(1); // Should not be called again for the same input

    expect(memoizedFn(3)).toBe(6);
    expect(callCount).toBe(2);

    expect(memoizedFn(3)).toBe(6);
    expect(callCount).toBe(2);
  });

  test('should work with functions that return undefined', () => {
    const fn = jest.fn().mockReturnValue(undefined);
    const memoizedFn = memoize(fn);

    memoizedFn('a');
    memoizedFn('a');

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('should use a custom resolver function', () => {
    let callCount = 0;
    const expensiveFn = (obj) => {
      callCount++;
      return obj.value;
    };
    
    // Use a resolver that creates a cache key from the object's id property
    const memoizedFn = memoize(expensiveFn, (obj) => obj.id);

    const obj1 = { id: 'a', value: 1 };
    const obj2 = { id: 'b', value: 2 };
    const obj3 = { id: 'a', value: 3 }; // Same id as obj1

    expect(memoizedFn(obj1)).toBe(1);
    expect(callCount).toBe(1);

    expect(memoizedFn(obj2)).toBe(2);
    expect(callCount).toBe(2);

    // This should hit the cache because the resolver will produce the same key 'a'
    expect(memoizedFn(obj3)).toBe(1);
    expect(callCount).toBe(2);
  });

  test('should expose the cache', () => {
    const memoizedFn = memoize(() => {});
    expect(memoizedFn.cache).toBeInstanceOf(Map);
  });

  test('should allow clearing the cache', () => {
    let callCount = 0;
    const fn = (x) => {
      callCount++;
      return x;
    };
    const memoizedFn = memoize(fn);

    memoizedFn(1);
    expect(callCount).toBe(1);

    memoizedFn(1);
    expect(callCount).toBe(1);

    memoizedFn.cache.clear();

    memoizedFn(1);
    expect(callCount).toBe(2);
  });
  
  test('should throw an error if the first argument is not a function', () => {
    expect(() => memoize(null)).toThrow(TypeError);
    expect(() => memoize({})).toThrow(TypeError);
  });
});

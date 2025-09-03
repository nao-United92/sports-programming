const assert = require('assert');
const { memoize } = require('./memoize-utils.js');

describe('memoize', () => {
  it('should memoize the result of a function', () => {
    let callCount = 0;
    const expensiveFunction = (x) => {
      callCount++;
      return x * 2;
    };

    const memoizedFn = memoize(expensiveFunction);

    assert.strictEqual(memoizedFn(2), 4);
    assert.strictEqual(callCount, 1);

    assert.strictEqual(memoizedFn(2), 4);
    assert.strictEqual(callCount, 1, 'Function should not be called again for the same input');

    assert.strictEqual(memoizedFn(3), 6);
    assert.strictEqual(callCount, 2, 'Function should be called for a new input');

    assert.strictEqual(memoizedFn(3), 6);
    assert.strictEqual(callCount, 2);
  });

  it('should use a custom resolver function', () => {
    let callCount = 0;
    const identity = (x) => {
        callCount++;
        return x;
    };
    const resolver = (obj) => obj.key;
    const memoizedFn = memoize(identity, resolver);

    const obj1 = { key: 'a', value: 1 };
    const obj2 = { key: 'a', value: 2 };
    const obj3 = { key: 'b', value: 3 };

    assert.deepStrictEqual(memoizedFn(obj1), obj1);
    assert.strictEqual(callCount, 1);

    // obj2 has the same key as obj1, so it should return the cached result for obj1
    assert.deepStrictEqual(memoizedFn(obj2), obj1, 'Should return cached value based on resolver');
    assert.strictEqual(callCount, 1);

    assert.deepStrictEqual(memoizedFn(obj3), obj3);
    assert.strictEqual(callCount, 2);
  });

  it('should expose the cache', () => {
    const memoizedFn = memoize((a) => a);
    memoizedFn(1);
    memoizedFn(2);

    assert.ok(memoizedFn.cache instanceof Map, 'Cache should be a Map');
    assert.strictEqual(memoizedFn.cache.get(1), 1);
    assert.strictEqual(memoizedFn.cache.get(2), 2);

    memoizedFn.cache.clear();
    assert.strictEqual(memoizedFn.cache.size, 0, 'Cache should be clearable');
  });

  it('should throw a type error if func is not a function', () => {
    assert.throws(() => memoize(undefined), TypeError);
    assert.throws(() => memoize(null), TypeError);
    assert.throws(() => memoize('string'), TypeError);
  });
});
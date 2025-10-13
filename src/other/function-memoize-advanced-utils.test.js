const { memoizeAdvanced } = require('./function-memoize-advanced-utils.js');
const { LRUCache } = require('./lru-cache.js');

describe('memoizeAdvanced', () => {
  let expensiveFn;

  beforeEach(() => {
    expensiveFn = jest.fn(x => x * 2);
  });

  test('should work with a default Map cache', () => {
    const memoized = memoizeAdvanced(expensiveFn);
    memoized(2); // call 1
    memoized(2); // should be cached
    memoized(3); // call 2
    memoized(3); // should be cached

    expect(expensiveFn).toHaveBeenCalledTimes(2);
    expect(memoized(2)).toBe(4);
  });

  test('should work with a custom resolver', () => {
    const memoized = memoizeAdvanced(expensiveFn, { resolver: (x, y) => `${x}-${y}` });
    memoized(1, 2);
    memoized(1, 2);
    expect(expensiveFn).toHaveBeenCalledTimes(1);
  });

  test('should work with a provided LRUCache', () => {
    const lru = new LRUCache(2);
    const memoized = memoizeAdvanced(expensiveFn, { cache: lru });

    memoized(1); // cache: {1 => 2}
    memoized(2); // cache: {1 => 2, 2 => 4}
    expect(expensiveFn).toHaveBeenCalledTimes(2);

    memoized(1); // should be cached, a is now most recent
    expect(expensiveFn).toHaveBeenCalledTimes(2);

    memoized(3); // should evict 2. cache: {1 => 2, 3 => 6}
    expect(expensiveFn).toHaveBeenCalledTimes(3);
    expect(lru.has(2)).toBe(false);

    memoized(2); // call again, should be a new call
    expect(expensiveFn).toHaveBeenCalledTimes(4);
    expect(lru.has(1)).toBe(false); // 1 is now evicted
  });
});

import { memoizeWith } from './function-memoize-utils.js';

describe('memoizeWith', () => {
  test('should memoize function with a custom key generator', () => {
    const add = (a, b) => a + b;
    const keyGen = (a, b) => `${a}-${b}`;
    const memoizedAdd = memoizeWith(keyGen, add);

    expect(memoizedAdd(1, 2)).toBe(3);
    expect(memoizedAdd(1, 2)).toBe(3); // Should be from cache
  });

  test('should call the original function only once for the same key', () => {
    const myFn = jest.fn(x => x * 2);
    const keyGen = x => x;
    const memoizedFn = memoizeWith(keyGen, myFn);

    memoizedFn(2);
    memoizedFn(2);

    expect(myFn).toHaveBeenCalledTimes(1);
  });

  test('should differentiate calls based on the generated key', () => {
    const myFn = jest.fn((obj) => obj.a + obj.b);
    const keyGen = (obj) => obj.a;
    const memoizedFn = memoizeWith(keyGen, myFn);

    memoizedFn({ a: 1, b: 2 }); // key is 1
    memoizedFn({ a: 1, b: 3 }); // key is 1, should be cached
    memoizedFn({ a: 2, b: 4 }); // key is 2

    expect(myFn).toHaveBeenCalledTimes(2);
  });
});

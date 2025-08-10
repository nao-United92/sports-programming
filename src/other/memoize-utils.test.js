import { memoize } from './memoize-utils';

describe('memoize', () => {
  let func;
  let memoizedFunc;

  beforeEach(() => {
    func = jest.fn((a, b) => a + b);
    memoizedFunc = memoize(func);
  });

  test('should return the cached result for the same arguments', () => {
    memoizedFunc(1, 2);
    memoizedFunc(1, 2);
    memoizedFunc(1, 2);

    expect(func).toHaveBeenCalledTimes(1);
    expect(memoizedFunc(1, 2)).toBe(3);
  });

  test('should call the original function for different arguments', () => {
    memoizedFunc(1, 2);
    memoizedFunc(3, 4);

    expect(func).toHaveBeenCalledTimes(2);
    expect(memoizedFunc(1, 2)).toBe(3);
    expect(memoizedFunc(3, 4)).toBe(7);
  });

  test('should handle functions with no arguments', () => {
    const noArgFunc = jest.fn(() => Math.random());
    const memoizedNoArgFunc = memoize(noArgFunc);

    const result1 = memoizedNoArgFunc();
    const result2 = memoizedNoArgFunc();

    expect(noArgFunc).toHaveBeenCalledTimes(1);
    expect(result1).toBe(result2);
  });

  test('should handle functions with object arguments (simple JSON.stringify)', () => {
    const objFunc = jest.fn((obj) => obj.value);
    const memoizedObjFunc = memoize(objFunc);

    const obj1 = { value: 10 };
    const obj2 = { value: 10 }; // Different object, but same stringified key

    memoizedObjFunc(obj1);
    memoizedObjFunc(obj2); // This will hit the cache if JSON.stringify is used

    expect(objFunc).toHaveBeenCalledTimes(1); // Called only once because JSON.stringify({value:10}) is the same for both
    expect(memoizedObjFunc(obj1)).toBe(10);
  });

  test('should handle functions with multiple argument types', () => {
    const multiArgFunc = jest.fn((a, b, c) => `${a}-${b}-${c}`);
    const memoizedMultiArgFunc = memoize(multiArgFunc);

    memoizedMultiArgFunc(1, 'hello', true);
    memoizedMultiArgFunc(1, 'hello', true);
    memoizedMultiArgFunc(2, 'world', false);

    expect(multiArgFunc).toHaveBeenCalledTimes(2);
    expect(memoizedMultiArgFunc(1, 'hello', true)).toBe('1-hello-true');
    expect(memoizedMultiArgFunc(2, 'world', false)).toBe('2-world-false');
  });
});

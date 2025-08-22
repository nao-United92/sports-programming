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

describe('before', () => {
  it('should call the function until the limit is reached', () => {
    const mockFn = jest.fn();
    const limitedFn = before(3, mockFn);
    limitedFn();
    limitedFn();
    limitedFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should return the last result after the limit is reached', () => {
    const mockFn = jest.fn(a => a);
    const limitedFn = before(3, mockFn);
    expect(limitedFn(1)).toBe(1);
    expect(limitedFn(2)).toBe(2);
    expect(limitedFn(3)).toBe(2); // Returns the last result
  });
});

describe('after', () => {
  it('should only call the function after being called n times', () => {
    const mockFn = jest.fn();
    const delayedFn = after(3, mockFn);
    delayedFn();
    delayedFn();
    expect(mockFn).not.toHaveBeenCalled();
    delayedFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
    delayedFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});

describe('curry', () => {
  const add = (a, b, c) => a + b + c;

  it('should curry a function', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
  });

  it('should work with functions with fewer arguments', () => {
    const multiply = (a, b) => a * b;
    const curriedMultiply = curry(multiply);
    expect(curriedMultiply(2)(3)).toBe(6);
  });
});

describe('compose', () => {
  const addOne = (x) => x + 1;
  const multiplyTwo = (x) => x * 2;
  const toString = (x) => String(x);

  it('should compose functions from right to left', () => {
    const composedFn = compose(toString, multiplyTwo, addOne);
    expect(composedFn(5)).toBe('12'); // (5 + 1) * 2 = 12 -> '12'
  });

  it('should handle functions with multiple arguments in the first (rightmost) function', () => {
    const add = (a, b) => a + b;
    const composedFn = compose(toString, add);
    expect(composedFn(1, 2)).toBe('3');
  });

  it('should handle no functions', () => {
    const noop = compose();
    expect(noop(1, 2, 3)).toEqual([1, 2, 3]);
  });
});

describe('defer', () => {
  it('should defer the execution of a function', (done) => {
    const mockFn = jest.fn();
    defer(mockFn, 1, 2);
    expect(mockFn).not.toHaveBeenCalled();
    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledWith(1, 2);
      done();
    }, 10);
  });
});

describe('noop', () => {
  it('should do nothing', () => {
    expect(noop()).toBeUndefined();
  });
});

describe('identity', () => {
  it('should return the value passed to it', () => {
    expect(identity(1)).toBe(1);
    expect(identity('hello')).toBe('hello');
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });
});

describe('property', () => {
  const obj = {
    a: {
      b: {
        c: 3
      }
    },
    d: [1, 2]
  };

  it('should create a function that returns a property at a given path', () => {
    const getC = property('a.b.c');
    expect(getC(obj)).toBe(3);
  });

  it('should work with array paths', () => {
    const getSecondD = property(['d', '1']);
    expect(getSecondD(obj)).toBe(2);
  });

  it('should return undefined for non-existent paths', () => {
    const getX = property('a.b.x');
    expect(getX(obj)).toBeUndefined();
  });

  it('should return undefined for null or undefined objects', () => {
    const getC = property('a.b.c');
    expect(getC(null)).toBeUndefined();
    expect(getC(undefined)).toBeUndefined();
  });
});

describe('matches', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  it('should return true if object matches source properties', () => {
    const matcher = matches({ 'active': true });
    expect(matcher(users[0])).toBe(true);
    expect(matcher(users[1])).toBe(false);
  });

  it('should handle multiple properties', () => {
    const matcher = matches({ 'age': 36, 'active': true });
    expect(matcher(users[0])).toBe(true);
    expect(matcher(users[1])).toBe(false);
  });

  it('should return true for empty source', () => {
    const matcher = matches({});
    expect(matcher(users[0])).toBe(true);
  });
});

describe('matchesProperty', () => {
  const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  it('should return true if property at path matches value', () => {
    const matcher = matchesProperty('active', true);
    expect(matcher(users[0])).toBe(true);
    expect(matcher(users[1])).toBe(false);
  });

  it('should work with nested paths', () => {
    const obj = { a: { b: { c: 1 } } };
    const matcher = matchesProperty('a.b.c', 1);
    expect(matcher(obj)).toBe(true);
  });

  it('should return false for non-matching values', () => {
    const matcher = matchesProperty('age', 30);
    expect(matcher(users[0])).toBe(false);
  });

  it('should return false for non-existent paths', () => {
    const matcher = matchesProperty('x.y', 1);
    expect(matcher(users[0])).toBe(false);
  });
});
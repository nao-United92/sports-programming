import isPromise from './is-promise';

describe('isPromise', () => {
  test('should return true for a native Promise', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise(new Promise(() => {}))).toBe(true);
  });

  test('should return true for a thenable object (duck-typed Promise)', () => {
    const thenable = {
      then: () => {},
      catch: () => {}
    };
    expect(isPromise(thenable)).toBe(true);

    const thenableNoCatch = {
      then: () => {}
    };
    // While some definitions allow thenables without catch, for practical purposes,
    // a catch method is usually expected for promise-like behavior.
    expect(isPromise(thenableNoCatch)).toBe(false);
  });

  test('should return false for non-promise values', () => {
    expect(isPromise(123)).toBe(false);
    expect(isPromise('hello')).toBe(false);
    expect(isPromise(true)).toBe(false);
    expect(isPromise(null)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise([])).toBe(false);
    expect(isPromise(() => {})).toBe(false);
  });

  test('should return false for objects with only "then" method', () => {
    const obj = {
      then: function() {}
    };
    expect(isPromise(obj)).toBe(false);
  });

  test('should return false for objects with only "catch" method', () => {
    const obj = {
      catch: function() {}
    };
    expect(isPromise(obj)).toBe(false);
  });

  test('should return false for objects with non-function "then" or "catch"', () => {
    const obj = {
      then: 'not a function',
      catch: () => {}
    };
    expect(isPromise(obj)).toBe(false);

    const obj2 = {
      then: () => {},
      catch: 'not a function'
    };
    expect(isPromise(obj2)).toBe(false);
  });
});

const omit = require('./object-omit-utils');

describe('omit', () => {
  test('should omit specified keys from an object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(omit(obj, ['b', 'c'])).toEqual({
      a: 1
    });
  });

  test('should return the original object if no keys are omitted', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(omit(obj, [])).toEqual({
      a: 1,
      b: 2
    });
    expect(omit(obj, ['d'])).toEqual({
      a: 1,
      b: 2
    });
  });

  test('should return an empty object for an empty input object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  test('should handle non-object input by returning an empty object', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit(123, ['a'])).toEqual({});
    expect(omit('string', ['a'])).toEqual({});
    expect(omit([1, 2], ['a'])).toEqual({});
  });

  test('should not mutate the original object', () => {
    const obj = {
      a: 1,
      b: 2
    };
    omit(obj, ['b']);
    expect(obj).toEqual({
      a: 1,
      b: 2
    });
  });

  test('should handle nested objects and arrays within properties (shallow omit)', () => {
    const obj = {
      a: 1,
      b: {
        c: 2
      },
      d: [1, 2]
    };
    expect(omit(obj, ['b'])).toEqual({
      a: 1,
      d: [1, 2]
    });
  });

  test('should handle keys that do not exist in the object', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(omit(obj, ['c', 'd'])).toEqual({
      a: 1,
      b: 2
    });
  });

  test('should treat non-array keys argument as empty array', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(omit(obj, null)).toEqual({
      a: 1,
      b: 2
    });
    expect(omit(obj, undefined)).toEqual({
      a: 1,
      b: 2
    });
    expect(omit(obj, 'a')).toEqual({
      a: 1,
      b: 2
    }); // 'a' is not an array
  });
});

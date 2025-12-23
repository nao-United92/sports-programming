const pick = require('./object-pick-utils');

describe('pick', () => {
  test('should pick specified keys from an object', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(pick(obj, ['a', 'c'])).toEqual({
      a: 1,
      c: 3
    });
  });

  test('should return an empty object if no keys are picked', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(pick(obj, [])).toEqual({});
    expect(pick(obj, ['d'])).toEqual({});
  });

  test('should return an empty object for an empty input object', () => {
    expect(pick({}, ['a'])).toEqual({});
  });

  test('should handle non-object input by returning an empty object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
    expect(pick([1, 2], ['a'])).toEqual({});
  });

  test('should not mutate the original object', () => {
    const obj = {
      a: 1,
      b: 2
    };
    pick(obj, ['a']);
    expect(obj).toEqual({
      a: 1,
      b: 2
    });
  });

  test('should handle nested objects and arrays within properties (shallow pick)', () => {
    const obj = {
      a: 1,
      b: {
        c: 2
      },
      d: [1, 2]
    };
    expect(pick(obj, ['b'])).toEqual({
      b: {
        c: 2
      }
    });
  });

  test('should handle keys that do not exist in the object', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(pick(obj, ['a', 'c'])).toEqual({
      a: 1
    });
  });

  test('should treat non-array keys argument as empty array', () => {
    const obj = {
      a: 1,
      b: 2
    };
    expect(pick(obj, null)).toEqual({});
    expect(pick(obj, undefined)).toEqual({});
    expect(pick(obj, 'a')).toEqual({}); // 'a' is not an array
  });
});

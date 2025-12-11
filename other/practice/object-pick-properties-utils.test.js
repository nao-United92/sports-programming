const pick = require('./object-pick-properties-utils');

describe('pick', () => {
  const obj = {
    a: 1,
    b: 'hello',
    c: true,
    d: {
      e: 2
    },
    f: undefined,
    g: null
  };

  test('should pick specified properties from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({
      a: 1,
      c: true
    });
  });

  test('should ignore non-existent properties', () => {
    expect(pick(obj, ['a', 'x', 'c'])).toEqual({
      a: 1,
      c: true
    });
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('should return an empty object if the input object is not an object', () => {
    expect(pick(123, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
    expect(pick([1, 2, 3], ['0'])).toEqual({}); // Arrays should return empty object
  });

  test('should pick properties that are undefined or null', () => {
    expect(pick(obj, ['f', 'g'])).toEqual({
      f: undefined,
      g: null
    });
  });

  test('should pick nested objects by reference', () => {
    const picked = pick(obj, ['d']);
    expect(picked).toEqual({
      d: {
        e: 2
      }
    });
    expect(picked.d).toBe(obj.d); // Should be same reference
  });

  test('should handle picking all properties', () => {
    const allKeys = Object.keys(obj);
    expect(pick(obj, allKeys)).toEqual(obj);
    expect(pick(obj, allKeys)).not.toBe(obj); // Should be a new object
  });
});

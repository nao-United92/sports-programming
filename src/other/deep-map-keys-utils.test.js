import { deepMapKeys } from './deep-map-keys-utils.js';

describe('deepMapKeys', () => {
  test('should recursively map keys of an object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };
    const result = deepMapKeys(obj, (value, key) => key.toUpperCase());
    expect(result).toEqual({
      A: 1,
      B: {
        C: 2,
        D: {
          E: 3,
        },
      },
    });
  });

  test('should handle arrays correctly', () => {
    const obj = {
      a: [
        { b: 1 },
        { c: 2 },
      ],
    };
    const result = deepMapKeys(obj, (value, key) => key.toUpperCase());
    expect(result).toEqual({
      A: [
        { B: 1 },
        { C: 2 },
      ],
    });
  });

  test('should handle empty objects', () => {
    const result = deepMapKeys({}, (value, key) => key.toUpperCase());
    expect(result).toEqual({});
  });

  test('should handle non-object values', () => {
    expect(deepMapKeys(null, () => {})).toBeNull();
    expect(deepMapKeys(123, () => {})).toBe(123);
    expect(deepMapKeys('abc', () => {})).toBe('abc');
  });

  test('should handle key collisions by taking the last value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = deepMapKeys(obj, (value, key) => (value > 1 ? 'over1' : 'under1'));
    expect(result).toEqual({ under1: 1, over1: 3 });
  });
});

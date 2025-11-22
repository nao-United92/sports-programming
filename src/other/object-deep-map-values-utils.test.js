import { deepMapValues } from './object-deep-map-values-utils.js';

describe('deepMapValues', () => {
  it('should map values in a simple object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const doubler = (val) => (typeof val === 'number' ? val * 2 : val);
    const result = deepMapValues(obj, doubler);
    expect(result).toEqual({ a: 2, b: 4, c: 6 });
  });

  it('should map values in a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };
    const addTen = (val) => (typeof val === 'number' ? val + 10 : val);
    const result = deepMapValues(obj, addTen);
    expect(result).toEqual({
      a: 11,
      b: {
        c: 12,
        d: {
          e: 13,
        },
      },
    });
  });

  it('should map values in an array of objects', () => {
    const arr = [
      { a: 1, b: 'hello' },
      { a: 2, b: 'world' },
    ];
    const transform = (val) => {
      if (typeof val === 'number') return val + 1;
      if (typeof val === 'string') return val.toUpperCase();
      return val;
    };
    const result = deepMapValues(arr, transform);
    expect(result).toEqual([
      { a: 2, b: 'HELLO' },
      { a: 3, b: 'WORLD' },
    ]);
  });

  it('should not mutate the original object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const objCopy = JSON.parse(JSON.stringify(obj));
    const doubler = (val) => (typeof val === 'number' ? val * 2 : val);
    deepMapValues(obj, doubler);
    expect(obj).toEqual(objCopy);
  });

  it('should handle a top-level array', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const doubler = (val) => (typeof val === 'number' ? val * 2 : val);
    const result = deepMapValues(arr, doubler);
    expect(result).toEqual([2, { a: 4 }, [6, 8]]);
  });

  it('should handle empty objects and arrays', () => {
    const doubler = (val) => val * 2;
    expect(deepMapValues({}, doubler)).toEqual({});
    expect(deepMapValues([], doubler)).toEqual([]);
  });

  it('should handle null and other primitives', () => {
    const identity = (val) => val;
    expect(deepMapValues(null, identity)).toBeNull();
    expect(deepMapValues(undefined, identity)).toBeUndefined();
    expect(deepMapValues('string', (s) => s.toUpperCase())).toBe('STRING');
  });
});

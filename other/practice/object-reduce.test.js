// other/practice/object-reduce.test.js
const objectReduce = require('./object-reduce');

describe('objectReduce', () => {
  test('should reduce object values to a single value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const sum = objectReduce(obj, (acc, value) => acc + value, 0);
    expect(sum).toBe(6);
  });

  test('should pass value, key, and object to the callback', () => {
    const obj = { x: 10, y: 20 };
    const mapped = objectReduce(obj, (acc, value, key, originalObj) => {
      expect(originalObj).toBe(obj);
      acc[key + '_doubled'] = value * 2;
      return acc;
    }, {});
    expect(mapped).toEqual({ x_doubled: 20, y_doubled: 40 });
  });

  test('should return initialValue for an empty object', () => {
    expect(objectReduce({}, (acc, value) => acc + value, 0)).toBe(0);
    expect(objectReduce({}, (acc, value) => acc.concat(value), [])).toEqual([]);
  });

  test('should return initialValue for null or non-object inputs', () => {
    expect(objectReduce(null, () => {}, 0)).toBe(0);
    expect(objectReduce(undefined, () => {}, 'default')).toBe('default');
    expect(objectReduce(123, () => {}, 0)).toBe(0);
    expect(objectReduce('string', () => {}, '')).toBe('');
  });

  test('should return initialValue for array inputs', () => {
    expect(objectReduce([1, 2, 3], () => {}, 0)).toBe(0);
  });

  test('should return initialValue if callback is not a function', () => {
    const obj = { a: 1, b: 2 };
    expect(objectReduce(obj, null, 0)).toBe(0);
    expect(objectReduce(obj, undefined, [])).toEqual([]);
    expect(objectReduce(obj, 'not a function', {})).toEqual({});
  });

  test('should not include inherited properties', () => {
    const proto = { inherited: 10 };
    const obj = Object.create(proto);
    obj.own = 5;
    const sum = objectReduce(obj, (acc, value) => acc + value, 0);
    expect(sum).toBe(5); // Only 'own' property should be reduced
  });

  test('should handle initialValue as an object or array', () => {
    const obj = { a: 1, b: 2 };
    const result = objectReduce(obj, (acc, val, key) => {
      acc[key] = val * 10;
      return acc;
    }, {});
    expect(result).toEqual({ a: 10, b: 20 });
  });
});

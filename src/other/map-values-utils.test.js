import mapValues from './map-values-utils.js';

describe('mapValues', () => {
  test('should map values of an object', () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (value) => value * 2);
    expect(result).toEqual({ a: 2, b: 4 });
  });

  test('should pass correct arguments to iteratee', () => {
    const obj = { a: 1 };
    const iteratee = jest.fn();
    mapValues(obj, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  test('should handle an empty object', () => {
    expect(mapValues({}, (x) => x)).toEqual({});
  });

  test('should handle null or undefined input', () => {
    expect(mapValues(null, (x) => x)).toEqual({});
    expect(mapValues(undefined, (x) => x)).toEqual({});
  });

  test('should not iterate over inherited properties', () => {
    function MyObject() {
      this.a = 1;
    }
    MyObject.prototype.b = 2;
    const obj = new MyObject();
    const result = mapValues(obj, (value) => value);
    expect(result).toEqual({ a: 1 });
  });
});

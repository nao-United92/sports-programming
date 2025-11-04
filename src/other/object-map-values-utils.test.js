import { mapValues } from './object-map-values-utils.js';

describe('mapValues', () => {
  test('should map values of an object', () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (value) => value * 2);
    expect(result).toEqual({ a: 2, b: 4 });
  });

  test('should provide value, key, and object to the iteratee', () => {
    const obj = { a: 1 };
    const iteratee = jest.fn();
    mapValues(obj, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  test('should return an empty object for null or undefined input', () => {
    expect(mapValues(null, () => {})).toEqual({});
    expect(mapValues(undefined, () => {})).toEqual({});
  });

  test('should map values to a different type', () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (value) => String(value));
    expect(result).toEqual({ a: '1', b: '2' });
  });
});
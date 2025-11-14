import { mapValues } from './object-map-values-utils.js';

describe('mapValues', () => {
  it('should map values of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const square = n => n * n;
    expect(mapValues(obj, square)).toEqual({ a: 1, b: 4, c: 9 });
  });

  it('should pass key and object to the function', () => {
    const obj = { a: 1, b: 2 };
    const fn = (val, key, o) => key + val + Object.keys(o).length;
    expect(mapValues(obj, fn)).toEqual({ a: 'a12', b: 'b22' });
  });

  it('should return an empty object for an empty object', () => {
    expect(mapValues({}, val => val * 2)).toEqual({});
  });
});

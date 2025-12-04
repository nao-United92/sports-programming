import { invert, mapKeys } from './object-key-utils.js';

describe('invert', () => {
  it('should invert the keys and values of an object', () => {
    const obj = { a: '1', b: '2', c: '3' };
    expect(invert(obj)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  it('should handle objects with duplicate values by overwriting', () => {
    const obj = { a: '1', b: '2', c: '1' };
    expect(invert(obj)).toEqual({ '1': 'c', '2': 'b' });
  });

  it('should return an empty object for null or non-object input', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
    expect(invert(123)).toEqual({});
  });

  it('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });
});

describe('mapKeys', () => {
  it('should map keys of an object based on the iteratee function', () => {
    const obj = { a: 1, b: 2 };
    const iteratee = (value, key) => key + value;
    expect(mapKeys(obj, iteratee)).toEqual({ a1: 1, b2: 2 });
  });

  it('should handle iteratee that produces colliding keys', () => {
    const obj = { a: 1, b: 1 };
    const iteratee = (value) => 'key' + value;
    expect(mapKeys(obj, iteratee)).toEqual({ key1: 1 });
  });

  it('should provide value, key, and object to the iteratee', () => {
    const obj = { a: 1 };
    const iteratee = jest.fn();
    mapKeys(obj, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  it('should return an empty object for null or non-object input', () => {
    const iteratee = () => {};
    expect(mapKeys(null, iteratee)).toEqual({});
    expect(mapKeys(undefined, iteratee)).toEqual({});
    expect(mapKeys('test', iteratee)).toEqual({});
  });
});

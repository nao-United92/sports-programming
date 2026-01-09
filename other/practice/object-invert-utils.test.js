import { invert } from './object-invert-utils.js';

describe('invert', () => {
  test('should invert the keys and values of an object', () => {
    const obj = { a: '1', b: '2', c: '3' };
    const invertedObj = { '1': 'a', '2': 'b', '3': 'c' };
    expect(invert(obj)).toEqual(invertedObj);
  });

  test('should handle objects with non-string values', () => {
    const obj = { a: 1, b: 2 };
    const invertedObj = { '1': 'a', '2': 'b' };
    expect(invert(obj)).toEqual(invertedObj);
  });

  test('should overwrite keys if values are not unique', () => {
    const obj = { a: '1', b: '1', c: '2' };
    const invertedObj = { '1': 'b', '2': 'c' };
    expect(invert(obj)).toEqual(invertedObj);
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
    expect(invert('string')).toEqual({});
    expect(invert(123)).toEqual({});
    expect(invert([])).toEqual({});
  });

  test('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });
});
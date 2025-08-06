import { keyBy } from './key-by-utils.js';

describe('keyBy', () => {
  const array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
  ];

  test('should create an object keyed by a property name', () => {
    const result = keyBy(array, 'dir');
    expect(result).toEqual({
      'left': { 'dir': 'left', 'code': 97 },
      'right': { 'dir': 'right', 'code': 100 }
    });
  });

  test('should create an object keyed by the result of a function', () => {
    const result = keyBy(array, (o) => String.fromCharCode(o.code));
    expect(result).toEqual({
      'a': { 'dir': 'left', 'code': 97 },
      'd': { 'dir': 'right', 'code': 100 }
    });
  });

  test('should handle an empty array', () => {
    expect(keyBy([], 'key')).toEqual({});
  });

  test('should return an empty object for non-array inputs', () => {
    expect(keyBy(null, 'key')).toEqual({});
    expect(keyBy(undefined, 'key')).toEqual({});
    expect(keyBy({}, 'key')).toEqual({});
  });

  test('should overwrite keys with the last encountered value', () => {
    const arrayWithDuplicates = [
      { 'id': 'a', 'value': 1 },
      { 'id': 'b', 'value': 2 },
      { 'id': 'a', 'value': 3 }
    ];
    const result = keyBy(arrayWithDuplicates, 'id');
    expect(result).toEqual({
      'a': { 'id': 'a', 'value': 3 },
      'b': { 'id': 'b', 'value': 2 }
    });
  });
});

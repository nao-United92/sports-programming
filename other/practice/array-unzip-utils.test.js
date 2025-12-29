import { unzip } from './array-unzip-utils';

describe('unzip', () => {
  test('should ungroup elements from corresponding positions', () => {
    expect(unzip([
      ['a', 1, true],
      ['b', 2, false]
    ])).toEqual([
      ['a', 'b'],
      [1, 2],
      [true, false]
    ]);
  });

  test('should handle arrays of different lengths within the grouped array', () => {
    expect(unzip([
      ['a', 1],
      ['b', 2],
      ['c', undefined]
    ])).toEqual([
      ['a', 'b', 'c'],
      [1, 2, undefined]
    ]);
  });

  test('should handle single inner array', () => {
    expect(unzip([
      [1],
      [2],
      [3]
    ])).toEqual([
      [1, 2, 3]
    ]);
  });

  test('should handle empty input array', () => {
    expect(unzip([])).toEqual([]);
  });

  test('should handle empty inner arrays', () => {
    expect(unzip([
      [],
      []
    ])).toEqual([]);
  });

  test('should handle mixed data types', () => {
    expect(unzip([
      [1, true],
      ['a', null]
    ])).toEqual([
      [1, 'a'],
      [true, null]
    ]);
  });

  test('should handle input with undefined or null inner arrays', () => {
    expect(unzip([
      ['a', 1], null, ['c', 3]
    ])).toEqual([
      ['a', undefined, 'c'],
      [1, undefined, 3]
    ]);
  });
});
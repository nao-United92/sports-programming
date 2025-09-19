import { keyBy } from './array-keyby-utils.js';

describe('keyBy', () => {
  test('should create an object with keys from a property string', () => {
    const array = [
      { id: 'a', value: 1 },
      { id: 'b', value: 2 },
      { id: 'c', value: 3 },
    ];
    const result = keyBy(array, 'id');
    expect(result).toEqual({
      a: { id: 'a', value: 1 },
      b: { id: 'b', value: 2 },
      c: { id: 'c', value: 3 },
    });
  });

  test('should create an object with keys from an iteratee function', () => {
    const array = [6.1, 4.2, 8.3];
    const result = keyBy(array, Math.floor);
    expect(result).toEqual({
      4: 4.2,
      6: 6.1,
      8: 8.3,
    });
  });

  test('should overwrite keys with the last element found', () => {
    const array = [
      { dir: 'left', code: 97 },
      { dir: 'right', code: 100 },
      { dir: 'left', code: 98 },
    ];
    const result = keyBy(array, 'dir');
    expect(result).toEqual({
      left: { dir: 'left', code: 98 },
      right: { dir: 'right', code: 100 },
    });
  });

  test('should return an empty object for an empty array', () => {
    const result = keyBy([], 'id');
    expect(result).toEqual({});
  });
});
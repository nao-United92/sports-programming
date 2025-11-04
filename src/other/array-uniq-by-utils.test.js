
import { uniqBy } from './array-uniq-by-utils.js';

describe('uniqBy', () => {
  test('should work with a simple iteratee', () => {
    const array = [2.1, 1.2, 2.3];
    expect(uniqBy(array, Math.floor)).toEqual([2.1, 1.2]);
  });

  test('should work with an array of objects', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }];
    const result = uniqBy(array, item => item.x);
    expect(result).toEqual([{ 'x': 1 }, { 'x': 2 }]);
  });

  test('should return an empty array if input is not an array', () => {
    expect(uniqBy(null, item => item)).toEqual([]);
    expect(uniqBy({}, item => item)).toEqual([]);
  });

  test('should return a new array instance', () => {
    const array = [{ 'x': 1 }];
    const result = uniqBy(array, item => item.x);
    expect(result).not.toBe(array);
  });

  test('should handle an empty array', () => {
    expect(uniqBy([], item => item.x)).toEqual([]);
  });
});

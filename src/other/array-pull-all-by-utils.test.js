
import { pullAllBy } from './array-pull-all-by-utils.js';

describe('pullAllBy', () => {
  test('should remove all specified values from an array based on iteratee', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], o => o.x);
    expect(array).toEqual([{ 'x': 2 }]);
  });

  test('should modify the original array', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }];
    const originalArray = JSON.parse(JSON.stringify(array)); // Deep copy
    pullAllBy(array, [{ 'x': 1 }], o => o.x);
    expect(array).not.toEqual(originalArray);
  });

  test('should return the modified array', () => {
    const array = [{ 'x': 1 }];
    const result = pullAllBy(array, [{ 'x': 1 }], o => o.x);
    expect(result).toBe(array);
  });

  test('should handle values not present in the array', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }];
    pullAllBy(array, [{ 'x': 4 }], o => o.x);
    expect(array).toEqual([{ 'x': 1 }, { 'x': 2 }]);
  });

  test('should handle empty values array', () => {
    const array = [{ 'x': 1 }];
    pullAllBy(array, [], o => o.x);
    expect(array).toEqual([{ 'x': 1 }]);
  });

  test('should handle empty array', () => {
    const array = [];
    pullAllBy(array, [{ 'x': 1 }], o => o.x);
    expect(array).toEqual([]);
  });
});


import { groupBy } from './group-by-utils.js';

describe('groupBy', () => {
  test('should group by a key string', () => {
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 },
      { 'dir': 'left', 'code': 97 }
    ];
    const grouped = groupBy(array, 'dir');
    expect(grouped).toEqual({
      'left': [{ 'dir': 'left', 'code': 97 }, { 'dir': 'left', 'code': 97 }],
      'right': [{ 'dir': 'right', 'code': 100 }]
    });
  });

  test('should group by the result of a function', () => {
    const array = [6.1, 4.2, 6.3];
    const grouped = groupBy(array, Math.floor);
    expect(grouped).toEqual({
      '4': [4.2],
      '6': [6.1, 6.3]
    });
  });

  test('should return an empty object for an empty array', () => {
    const array = [];
    const grouped = groupBy(array, 'length');
    expect(grouped).toEqual({});
  });

  test('should handle various data types in the array', () => {
    const array = ['one', 'two', 'three'];
    const grouped = groupBy(array, 'length');
    expect(grouped).toEqual({
      '3': ['one', 'two'],
      '5': ['three']
    });
  });

  test('should work with objects that have different properties', () => {
    const array = [
      { category: 'A', value: 1 },
      { category: 'B', value: 2 },
      { category: 'A', value: 3 }
    ];
    const grouped = groupBy(array, 'category');
    expect(grouped).toEqual({
      'A': [{ category: 'A', value: 1 }, { category: 'A', value: 3 }],
      'B': [{ category: 'B', value: 2 }]
    });
  });
});

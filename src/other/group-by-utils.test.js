import { groupBy } from './group-by-utils.js';

describe('groupBy', () => {
  test('should group by a function iteratee', () => {
    const array = [6.1, 4.2, 6.3];
    const result = groupBy(array, Math.floor);
    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  test('should group by a string iteratee (property name)', () => {
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    const result = groupBy(array, 'dir');
    expect(result).toEqual({ 'left': [{ 'dir': 'left', 'code': 97 }], 'right': [{ 'dir': 'right', 'code': 100 }] });
  });

  test('should handle an empty array', () => {
    expect(groupBy([], 'length')).toEqual({});
  });

  test('should handle non-array input', () => {
    expect(groupBy(null, 'length')).toEqual({});
    expect(groupBy(undefined, 'length')).toEqual({});
    expect(groupBy({}, 'length')).toEqual({});
  });

  test('should group objects with a common property', () => {
    const array = [
      { type: 'fruit', name: 'apple' },
      { type: 'vegetable', name: 'carrot' },
      { type: 'fruit', name: 'banana' }
    ];
    const result = groupBy(array, 'type');
    expect(result).toEqual({
      'fruit': [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }],
      'vegetable': [{ type: 'vegetable', name: 'carrot' }]
    });
  });
});
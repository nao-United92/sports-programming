import { groupWith } from './array-group-by-utils.js';

describe('groupWith', () => {
  test('should group consecutive equal elements', () => {
    const list = [1, 1, 2, 2, 2, 3];
    const result = groupWith((a, b) => a === b, list);
    expect(result).toEqual([[1, 1], [2, 2, 2], [3]]);
  });

  test('should group by a property', () => {
    const list = [{ type: 'A' }, { type: 'A' }, { type: 'B' }];
    const result = groupWith((a, b) => a.type === b.type, list);
    expect(result).toEqual([[{ type: 'A' }, { type: 'A' }], [{ type: 'B' }]]);
  });

  test('should return a new list for each element if predicate is always false', () => {
    const list = [1, 2, 3];
    const result = groupWith(() => false, list);
    expect(result).toEqual([[1], [2], [3]]);
  });

  test('should return a single group if predicate is always true', () => {
    const list = [1, 2, 3];
    const result = groupWith(() => true, list);
    expect(result).toEqual([[1, 2, 3]]);
  });

  test('should handle an empty list', () => {
    expect(groupWith(() => true, [])).toEqual([]);
  });
});

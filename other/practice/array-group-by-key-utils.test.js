import groupByKey from './array-group-by-key-utils';

describe('groupByKey', () => {
  test('should group an array of objects by a key', () => {
    const array = [
      { id: 1, category: 'a' },
      { id: 2, category: 'b' },
      { id: 3, category: 'a' },
    ];
    const expected = {
      a: [
        { id: 1, category: 'a' },
        { id: 3, category: 'a' },
      ],
      b: [{ id: 2, category: 'b' }],
    };
    expect(groupByKey(array, 'category')).toEqual(expected);
  });

  test('should handle an empty array', () => {
    expect(groupByKey([], 'category')).toEqual({});
  });

  test('should handle objects with missing key', () => {
    const array = [
      { id: 1, category: 'a' },
      { id: 2 },
      { id: 3, category: 'a' },
    ];
    const expected = {
      a: [
        { id: 1, category: 'a' },
        { id: 3, category: 'a' },
      ],
      undefined: [{ id: 2 }],
    };
    expect(groupByKey(array, 'category')).toEqual(expected);
  });
});

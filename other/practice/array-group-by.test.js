const groupBy = require('./array-group-by');

describe('groupBy', () => {
  test('should group an array of objects by a key', () => {
    const array = [
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
      { id: 5, category: 'A' },
    ];
    const expected = {
      A: [
        { id: 1, category: 'A' },
        { id: 3, category: 'A' },
        { id: 5, category: 'A' },
      ],
      B: [
        { id: 2, category: 'B' },
        { id: 4, category: 'B' },
      ],
    };
    expect(groupBy(array, 'category')).toEqual(expected);
  });

  test('should return an empty object for an empty array', () => {
    expect(groupBy([], 'category')).toEqual({});
  });

  test('should handle items without the specified key', () => {
    const array = [
      { id: 1, category: 'A' },
      { id: 2, name: 'Item 2' },
      { id: 3, category: 'A' },
    ];
    const expected = {
      A: [
        { id: 1, category: 'A' },
        { id: 3, category: 'A' },
      ],
      undefined: [
        { id: 2, name: 'Item 2' },
      ],
    };
    expect(groupBy(array, 'category')).toEqual(expected);
  });
});

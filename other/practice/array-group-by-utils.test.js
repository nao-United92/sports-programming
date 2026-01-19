const { groupBy } = require('./array-group-by-utils');

describe('groupBy', () => {
  it('should group an array of objects by a given key', () => {
    const array = [
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'C' },
      { id: 5, category: 'B' },
    ];
    const expected = {
      A: [
        { id: 1, category: 'A' },
        { id: 3, category: 'A' },
      ],
      B: [
        { id: 2, category: 'B' },
        { id: 5, category: 'B' },
      ],
      C: [{ id: 4, category: 'C' }],
    };
    expect(groupBy(array, 'category')).toEqual(expected);
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'category')).toEqual({});
  });

  it('should handle items without the specified key', () => {
    const array = [
      { id: 1, category: 'A' },
      { id: 2 },
      { id: 3, category: 'A' },
    ];
    const expected = {
      A: [
        { id: 1, category: 'A' },
        { id: 3, category: 'A' },
      ],
      undefined: [{ id: 2 }],
    };
    expect(groupBy(array, 'category')).toEqual(expected);
  });
});
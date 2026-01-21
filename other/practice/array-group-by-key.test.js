import groupByKey from './array-group-by-key.js';

describe('groupByKey', () => {
  it('should group objects by the specified key', () => {
    const array = [
      { id: 1, category: 'a' },
      { id: 2, category: 'b' },
      { id: 3, category: 'a' },
      { id: 4, category: 'b' },
      { id: 5, category: 'c' },
    ];
    const expected = {
      a: [
        { id: 1, category: 'a' },
        { id: 3, category: 'a' },
      ],
      b: [
        { id: 2, category: 'b' },
        { id: 4, category: 'b' },
      ],
      c: [{ id: 5, category: 'c' }],
    };
    expect(groupByKey(array, 'category')).toEqual(expected);
  });

  it('should return an empty object for an empty array', () => {
    expect(groupByKey([], 'category')).toEqual({});
  });

  it('should handle items without the specified key', () => {
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

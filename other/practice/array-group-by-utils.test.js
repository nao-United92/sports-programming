import groupBy from './array-group-by-utils';

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

  it('should handle non-existent keys', () => {
    const array = [
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
    ];
    const expected = {
      undefined: [
        { id: 1, category: 'A' },
        { id: 2, category: 'B' },
      ],
    };
    expect(groupBy(array, 'nonExistentKey')).toEqual(expected);
  });

  it('should return an empty object for non-array input', () => {
    expect(groupBy(null, 'key')).toEqual({});
    expect(groupBy(undefined, 'key')).toEqual({});
    expect(groupBy({}, 'key')).toEqual({});
  });

  it('should group by a numeric key', () => {
    const array = [
      { id: 1, value: 100 },
      { id: 2, value: 200 },
      { id: 3, value: 100 },
    ];
    const expected = {
      '100': [
        { id: 1, value: 100 },
        { id: 3, value: 100 },
      ],
      '200': [{ id: 2, value: 200 }],
    };
    expect(groupBy(array, 'value')).toEqual(expected);
  });
});

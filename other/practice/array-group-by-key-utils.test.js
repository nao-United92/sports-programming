import { groupByKey } from './array-group-by-key-utils';

describe('groupByKey', () => {
  it('should group an array of objects by a key', () => {
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
    expect(groupByKey(array, 'category')).toEqual(expected);
  });

  it('should return an empty object for an empty array', () => {
    expect(groupByKey([], 'category')).toEqual({});
  });

  it('should handle items without the specified key', () => {
    const array = [
      { id: 1, category: 'A' },
      { id: 2, name: 'No Category' },
      { id: 3, category: 'A' },
    ];
    const expected = {
      A: [
        { id: 1, category: 'A' },
        { id: 3, category: 'A' },
      ],
      undefined: [{ id: 2, name: 'No Category' }],
    };
    expect(groupByKey(array, 'category')).toEqual(expected);
  });
});

import { groupBy } from './array-group-by.js';

describe('groupBy', () => {
  it('should group objects by a key', () => {
    const array = [
      { id: 1, category: 'a' },
      { id: 2, category: 'b' },
      { id: 3, category: 'a' },
      { id: 4, category: 'b' },
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
    };
    expect(groupBy(array, 'category')).toEqual(expected);
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'category')).toEqual({});
  });

  it('should handle arrays with a single element', () => {
    const array = [{ id: 1, category: 'a' }];
    const expected = { a: [{ id: 1, category: 'a' }] };
    expect(groupBy(array, 'category')).toEqual(expected);
  });
});
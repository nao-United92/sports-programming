import { uniqueBy } from './array-unique-by.js';

describe('uniqueBy', () => {
  it('returns unique elements based on a provided function', () => {
    expect(uniqueBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
  });

  it('returns unique elements based on a property name', () => {
    expect(uniqueBy([{ id: 1 }, { id: 2 }, { id: 1 }], 'id')).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('handles empty arrays', () => {
    expect(uniqueBy([], Math.floor)).toEqual([]);
  });
});

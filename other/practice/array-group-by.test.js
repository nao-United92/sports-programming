import { groupBy } from './array-group-by.js';

describe('groupBy', () => {
  it('groups elements of an array based on a given function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
  });

  it('groups elements based on a property name', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], 5: ['three'] });
  });

  it('handles empty arrays', () => {
    expect(groupBy([], Math.floor)).toEqual({});
  });
});

import groupBy from './array-group-by-utils';

describe('groupBy', () => {
  it('should group an array of numbers by a function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
      '4': [4.2],
      '6': [6.1, 6.3]
    });
  });
  it('should group an array of strings by length', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({
      '3': ['one', 'two'],
      '5': ['three']
    });
  });
});

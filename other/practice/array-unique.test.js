import unique from './array-unique';

describe('unique', () => {
  it('should remove duplicate values from an array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with no duplicates', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(unique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(unique(arr)).toEqual([]);
  });

  it('should handle an array with all same elements', () => {
    const arr = [1, 1, 1, 1, 1];
    expect(unique(arr)).toEqual([1]);
  });

  it('should work with strings', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    expect(unique(arr)).toEqual(['a', 'b', 'c']);
  });
});

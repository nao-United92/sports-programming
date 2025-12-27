import initial from './array-initial-all-utils';

describe('initial', () => {
  it('should return all but the last element of an array', () => {
    expect(initial([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(initial([])).toEqual([]);
  });

  it('should return an empty array if the input array has only one element', () => {
    expect(initial([1])).toEqual([]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(initial(null)).toEqual([]);
    expect(initial(undefined)).toEqual([]);
    expect(initial('string')).toEqual([]);
    expect(initial({})).toEqual([]);
  });

  it('should work with arrays of different types', () => {
    expect(initial([1, 'a', true, null])).toEqual([1, 'a', true]);
  });
});
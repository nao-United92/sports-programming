import lastAll from './array-last-all-utils';

describe('lastAll', () => {
  it('should return all but the first element of an array', () => {
    expect(lastAll([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(lastAll([])).toEqual([]);
  });

  it('should return an empty array if the input array has only one element', () => {
    expect(lastAll([1])).toEqual([]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(lastAll(null)).toEqual([]);
    expect(lastAll(undefined)).toEqual([]);
    expect(lastAll('string')).toEqual([]);
    expect(lastAll({})).toEqual([]);
  });

  it('should work with arrays of different types', () => {
    expect(lastAll([1, 'a', true, null])).toEqual(['a', true, null]);
  });
});
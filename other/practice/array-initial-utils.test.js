const initial = require('./array-initial-utils');

describe('initial', () => {
  it('should return all but the last element of an array', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  it('should return an empty array when given a single-element array', () => {
    expect(initial([1])).toEqual([]);
  });

  it('should return an empty array for an empty array', () => {
    expect(initial([])).toEqual([]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(initial(null)).toEqual([]);
    expect(initial(undefined)).toEqual([]);
    expect(initial({})).toEqual([]);
    expect(initial('hello')).toEqual([]);
  });
});

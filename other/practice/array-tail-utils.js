const { tail } = require('./array-tail-utils');

describe('tail', () => {
  it('should return all but the first element of an array', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  it('should return an empty array if given an empty array', () => {
    expect(tail([])).toEqual([]);
  });

  it('should return an empty array if given an array with one element', () => {
    expect(tail([1])).toEqual([]);
  });

  it('should return an empty array if given null or undefined', () => {
    expect(tail(null)).toEqual([]);
    expect(tail(undefined)).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const original = [1, 2, 3];
    tail(original);
    expect(original).toEqual([1, 2, 3]);
  });
});

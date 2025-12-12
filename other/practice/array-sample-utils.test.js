const { sample } = require('./array-sample-utils');

describe('array-sample-utils', () => {
  it('should return an element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  it('should return undefined for an empty array', () => {
    const arr = [];
    const result = sample(arr);
    expect(result).toBeUndefined();
  });

  it('should return undefined for non-array input', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
    expect(sample({})).toBeUndefined();
    expect(sample('string')).toBeUndefined();
  });
});

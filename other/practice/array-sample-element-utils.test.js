const { sample } = require('./array-sample-element-utils');

describe('sample', () => {
  test('should return an element that is present in the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr);
    expect(arr).toContain(result);
  });

  test('should return undefined for an empty array', () => {
    const arr = [];
    const result = sample(arr);
    expect(result).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    const arr = ['a'];
    const result = sample(arr);
    expect(result).toBe('a');
  });

  test('should work with different data types', () => {
    const arr = [
      { id: 1 },
      'hello',
      null,
      undefined,
      5,
    ];
    const result = sample(arr);
    expect(arr).toContain(result);
  });
});

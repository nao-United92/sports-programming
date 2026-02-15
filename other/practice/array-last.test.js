const last = require('./array-last');

describe('last', () => {
  test('should return the last element of an array', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5);
  });

  test('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  test('should return the only element for a single-element array', () => {
    expect(last([42])).toBe(42);
  });

  test('should handle arrays with mixed data types', () => {
    expect(last([1, 'a', null, {
      key: 'value'
    }])).toEqual({
      key: 'value'
    });
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => last(null)).toThrow('Argument must be an array.');
    expect(() => last('string')).toThrow('Argument must be an array.');
    expect(() => last(123)).toThrow('Argument must be an array.');
  });
});

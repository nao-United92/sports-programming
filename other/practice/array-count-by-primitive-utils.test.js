const countByPrimitive = require('./array-count-by-primitive-utils');

describe('countByPrimitive', () => {
  it('should count occurrences of numbers in an array', () => {
    expect(countByPrimitive([1, 2, 3, 1, 2, 1])).toEqual({ '1': 3, '2': 2, '3': 1 });
  });

  it('should count occurrences of strings in an array', () => {
    expect(countByPrimitive(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({ 'a': 3, 'b': 2, 'c': 1 });
  });

  it('should handle an empty array', () => {
    expect(countByPrimitive([])).toEqual({});
  });

  it('should handle an array with mixed primitive types', () => {
    expect(countByPrimitive([1, 'a', 1, 'b', 'a'])).toEqual({ '1': 2, 'a': 2, 'b': 1 });
  });
});

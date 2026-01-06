const pluralize = require('./string-pluralize-utils');

describe('pluralize', () => {
  test('should return the singular word if count is 1', () => {
    expect(pluralize('apple', 1)).toBe('apple');
    expect(pluralize('box', 1)).toBe('box');
  });

  test('should return the plural word by adding "s" if count is not 1', () => {
    expect(pluralize('apple', 0)).toBe('apples');
    expect(pluralize('apple', 2)).toBe('apples');
    expect(pluralize('apple', 10)).toBe('apples');
  });

  test('should use custom suffix if provided', () => {
    expect(pluralize('bush', 2, 'es')).toBe('bushes');
    expect(pluralize('city', 2, 'ies')).toBe('cities');
  });

  test('should handle negative counts as plural', () => {
    expect(pluralize('apple', -1)).toBe('apples');
  });

  test('should handle zero count as plural', () => {
    expect(pluralize('item', 0)).toBe('items');
  });

  test('should return empty string for empty word', () => {
    expect(pluralize('', 5)).toBe('');
  });

  test('should return original word for non-numeric count', () => {
    expect(pluralize('apple', 'two')).toBe('apple');
    expect(pluralize('apple', null)).toBe('apple');
    expect(pluralize('apple', undefined)).toBe('apple');
    expect(pluralize('apple', NaN)).toBe('apple');
  });

  test('should handle edge cases for word length', () => {
    expect(pluralize('a', 2)).toBe('as');
    expect(pluralize('z', 2)).toBe('zs');
  });
});

import decapitalize from './string-decapitalize-utils';

describe('decapitalize', () => {
  test('should decapitalize the first letter of a string', () => {
    expect(decapitalize('HelloWorld')).toBe('helloWorld');
  });

  test('should work with an already decapitalized string', () => {
    expect(decapitalize('helloWorld')).toBe('helloWorld');
  });

  test('should return an empty string if input is empty', () => {
    expect(decapitalize('')).toBe('');
  });

  test('should handle single-character strings', () => {
    expect(decapitalize('A')).toBe('a');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(decapitalize(null)).toBe('');
    expect(decapitalize(undefined)).toBe('');
    expect(decapitalize(123)).toBe('');
  });
});

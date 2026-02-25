import { stringCapitalize } from './string-capitalize-utils';

describe('stringCapitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(stringCapitalize('hello')).toBe('Hello');
  });

  test('returns empty string for non-string input', () => {
    expect(stringCapitalize(123)).toBe('');
  });

  test('does not change already capitalized string', () => {
    expect(stringCapitalize('Hello')).toBe('Hello');
  });
});

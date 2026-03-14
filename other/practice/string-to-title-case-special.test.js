const toTitleCaseSpecial = require('./string-to-title-case-special');

describe('toTitleCaseSpecial', () => {
  test('converts string to title case with exceptions', () => {
    expect(toTitleCaseSpecial('the quick brown fox jumps over the lazy dog'))
      .toBe('The Quick Brown Fox Jumps Over the Lazy Dog');
  });

  test('capitalizes the first word even if it is an exception', () => {
    expect(toTitleCaseSpecial('a tale of two cities')).toBe('A Tale of Two Cities');
  });

  test('handles empty string', () => {
    expect(toTitleCaseSpecial('')).toBe('');
  });

  test('allows custom exceptions', () => {
    expect(toTitleCaseSpecial('hello world from mars', ['mars'])).toBe('Hello World From mars');
  });
});

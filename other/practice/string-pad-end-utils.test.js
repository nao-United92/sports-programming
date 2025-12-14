import padEnd from './string-pad-end-utils';

describe('padEnd', () => {
  test('should pad a string to the right', () => {
    expect(padEnd('abc', 5)).toBe('abc  ');
  });

  test('should pad with a custom character', () => {
    expect(padEnd('abc', 5, '*')).toBe('abc**');
  });

  test('should not pad if string is already long enough', () => {
    expect(padEnd('abcde', 5)).toBe('abcde');
  });

  test('should handle empty string', () => {
    expect(padEnd('', 5, '*')).toBe('*****');
  });
});

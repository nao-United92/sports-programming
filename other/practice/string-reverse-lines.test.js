const reverseLines = require('./string-reverse-lines');

describe('reverseLines', () => {
  test('reverses the order of lines', () => {
    const text = 'Line 1\nLine 2\nLine 3';
    expect(reverseLines(text)).toBe('Line 3\nLine 2\nLine 1');
  });

  test('handles Windows line endings', () => {
    const text = 'A\r\nB\r\nC';
    expect(reverseLines(text)).toBe('C\nB\nA');
  });

  test('returns empty for empty string', () => {
    expect(reverseLines('')).toBe('');
  });

  test('handles single line', () => {
    expect(reverseLines('Hello')).toBe('Hello');
  });
});

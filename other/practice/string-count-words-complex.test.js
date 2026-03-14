const countWords = require('./string-count-words-complex');

describe('countWords', () => {
  test('counts simple words', () => {
    expect(countWords('hello world')).toBe(2);
  });

  test('handles extra spaces', () => {
    expect(countWords('  a  b  c  ')).toBe(3);
  });

  test('uses custom delimiters', () => {
    expect(countWords('apple,banana;orange', /[,;]/)).toBe(3);
  });

  test('returns 0 for empty or blank strings', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });

  test('works with newline characters', () => {
    expect(countWords('line 1\nline 2')).toBe(4);
  });
});

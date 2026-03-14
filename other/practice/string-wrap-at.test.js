const wrapAt = require('./string-wrap-at');

describe('wrapAt', () => {
  test('wraps a long string at spaces', () => {
    const text = 'The quick brown fox jumps over the lazy dog';
    expect(wrapAt(text, 10)).toBe('The quick\nbrown fox\njumps over\nthe lazy\ndog');
  });

  test('handles very narrow width', () => {
    expect(wrapAt('a b c', 1)).toBe('a\nb\nc');
  });

  test('returns original string if empty', () => {
    expect(wrapAt('', 10)).toBe('');
  });

  test('handles width zero or negative', () => {
    expect(wrapAt('test', 0)).toBe('test');
    expect(wrapAt('test', -1)).toBe('test');
  });
});

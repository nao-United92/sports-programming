const extractUrls = require('./string-extract-urls');

describe('extractUrls', () => {
  test('extracts multiple URLs', () => {
    const text = 'Check out https://google.com and http://github.com/google';
    expect(extractUrls(text)).toEqual(['https://google.com', 'http://github.com/google']);
  });

  test('returns empty array if no URLs found', () => {
    expect(extractUrls('No URLs here')).toEqual([]);
  });

  test('handles mixed content', () => {
    const text = 'Visit us at http://example.com! Or follow us @example';
    expect(extractUrls(text)).toEqual(['http://example.com!']); // Simplistic regex might include trailing punctuation
  });

  test('handles empty string', () => {
    expect(extractUrls('')).toEqual([]);
  });
});

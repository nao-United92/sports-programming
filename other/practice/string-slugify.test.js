const slugify = require('./string-slugify');

describe('slugify', () => {
  test('converts a string to a lowercase slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('replaces spaces and underscores with hyphens', () => {
    expect(slugify('Hello_World from_JS')).toBe('hello-world-from-js');
  });

  test('removes special characters', () => {
    expect(slugify('Hello World! @2026')).toBe('hello-world-2026');
  });

  test('trims leading and trailing whitespace and hyphens', () => {
    expect(slugify('  - Hello World -  ')).toBe('hello-world');
  });

  test('returns empty string for non-string input', () => {
    expect(slugify(null)).toBe('');
  });
});

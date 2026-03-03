const slugify = require('./string-slugify');

describe('string-slugify', () => {
  test('converts a string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('handles multiple spaces and underscores', () => {
    expect(slugify('Hello   World__Test')).toBe('hello-world-test');
  });

  test('removes special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  test('trims leading and trailing hyphens', () => {
    expect(slugify('  -Hello World-  ')).toBe('hello-world');
  });

  test('handles non-string inputs', () => {
    expect(slugify(null)).toBe(null);
  });
});

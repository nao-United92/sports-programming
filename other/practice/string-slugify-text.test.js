
const stringSlugifyText = require('./string-slugify-text');

describe('stringSlugifyText', () => {
  test('converts string to slug', () => {
    expect(stringSlugifyText('Hello World')).toBe('hello-world');
  });

  test('removes special characters', () => {
    expect(stringSlugifyText('Hello World!')).toBe('hello-world');
  });

  test('handles multiple spaces', () => {
    expect(stringSlugifyText('Hello   World')).toBe('hello-world');
  });
});

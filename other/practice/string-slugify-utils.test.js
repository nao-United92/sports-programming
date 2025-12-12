const slugify = require('./string-slugify-utils');

describe('slugify', () => {
  test('should convert a simple string', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('should handle special characters', () => {
    expect(slugify('àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż')).toBe('aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz');
  });

  test('should handle ampersands', () => {
    expect(slugify('salt & pepper')).toBe('salt-and-pepper');
  });

  test('should replace non-word characters with hyphens', () => {
    expect(slugify('foo@bar#baz')).toBe('foo-bar-baz');
  });

  test('should replace multiple hyphens with a single one', () => {
    expect(slugify('foo--bar')).toBe('foo-bar');
  });

  test('should trim hyphens from the start and end', () => {
    expect(slugify('-foo-bar-')).toBe('foo-bar');
  });

  test('should handle a complex string', () => {
    expect(slugify('  A-B/C D_E&F!G?H*I J  ')).toBe('a-b-c-d_e-and-f-g-h-i-j');
  });
});

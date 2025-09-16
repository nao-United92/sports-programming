const { slugify } = require('./string-slugify-utils.js');

describe('slugify', () => {
  it('should convert a string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('should handle special characters', () => {
    expect(slugify('àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż')).toBe('aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz');
  });

  it('should handle ampersands', () => {
    expect(slugify('foo & bar')).toBe('foo-and-bar');
  });

  it('should remove non-word characters', () => {
    expect(slugify('foo! bar?')).toBe('foo-bar');
  });

  it('should handle multiple spaces and dashes', () => {
    expect(slugify('foo  bar--baz')).toBe('foo-bar-baz');
  });

  it('should trim dashes from the start and end', () => {
    expect(slugify('-foo-bar-')).toBe('foo-bar');
  });

  it('should handle an empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('should handle non-string input', () => {
    expect(slugify(null)).toBe('');
    expect(slugify(undefined)).toBe('');
    expect(slugify(123)).toBe('123');
  });
});

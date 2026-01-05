import stripHtml from './string-strip-html-utils';

describe('stripHtml', () => {
  test('should strip simple HTML tags', () => {
    expect(stripHtml('<p>Hello</p>')).toBe('Hello');
    expect(stripHtml('<div><span>World</span></div>')).toBe('World');
    expect(stripHtml('<b>Bold Text</b>')).toBe('Bold Text');
  });

  test('should strip HTML tags with attributes', () => {
    expect(stripHtml('<a href="#">Link</a>')).toBe('Link');
    expect(stripHtml('<img src="test.jpg" alt="Test Image">')).toBe('');
    expect(stripHtml('<div class="container" id="main">Content</div>')).toBe('Content');
  });

  test('should handle multiple HTML tags', () => {
    expect(stripHtml('<h1>Title</h1><p>Paragraph</p>')).toBe('TitleParagraph');
    expect(stripHtml('Text with <b>bold</b> and <i>italic</i>')).toBe('Text with bold and italic');
  });

  test('should handle malformed HTML tags gracefully', () => {
    expect(stripHtml('Text with <p tag')).toBe('Text with <p tag'); // Unclosed tag is not stripped by this regex
    expect(stripHtml('Text with >tag<')).toBe('Text with >tag<'); // Not a tag
  });

  test('should return an empty string for empty input', () => {
    expect(stripHtml('')).toBe('');
  });

  test('should return the original string if no HTML tags are present', () => {
    expect(stripHtml('Plain text')).toBe('Plain text');
    expect(stripHtml('123 Testing')).toBe('123 Testing');
  });

  test('should throw an error if the argument is not a string', () => {
    expect(() => stripHtml(null)).toThrow(TypeError);
    expect(() => stripHtml(undefined)).toThrow(TypeError);
    expect(() => stripHtml(123)).toThrow(TypeError);
    expect(() => stripHtml({})).toThrow(TypeError);
  });
});

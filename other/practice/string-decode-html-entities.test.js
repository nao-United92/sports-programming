const { decodeHTMLEntities } = require('./string-decode-html-entities');

describe('decodeHTMLEntities', () => {
  test('should decode common HTML entities', () => {
    expect(decodeHTMLEntities('&#x2F;')).toBe('/');
    expect(decodeHTMLEntities('&lt;div&gt;')).toBe('<div>');
    expect(decodeHTMLEntities('&#x27;s &amp; &#x2F; &#x22;quot&#x22;')).toBe("'s & / \"quot\"");
  });

  test('should decode multiple entities in a single string', () => {
    expect(decodeHTMLEntities('&amp;&amp; &lt;&lt;')).toBe('&& <<');
  });

  test('should handle string with no entities', () => {
    expect(decodeHTMLEntities('Hello World')).toBe('Hello World');
  });

  test('should handle empty string', () => {
    expect(decodeHTMLEntities('')).toBe('');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => decodeHTMLEntities(123)).toThrow(TypeError);
    expect(() => decodeHTMLEntities(null)).toThrow(TypeError);
    expect(() => decodeHTMLEntities(undefined)).toThrow(TypeError);
    expect(() => decodeHTMLEntities({})).toThrow(TypeError);
  });

  test('should handle entities that are part of words', () => {
    expect(decodeHTMLEntities('R&amp;D')).toBe('R&D');
  });
});

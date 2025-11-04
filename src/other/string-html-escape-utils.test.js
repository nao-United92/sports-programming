import { escapeHTML, unescapeHTML } from './string-html-escape-utils.js';

describe('escapeHTML and unescapeHTML', () => {
  const unescaped = '<a>"Hello" & \'World\'</a>';
  const escaped = '&lt;a&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/a&gt;';

  test('escapeHTML should convert special characters to HTML entities', () => {
    expect(escapeHTML(unescaped)).toBe(escaped);
  });

  test('escapeHTML should return an empty string for null or undefined input', () => {
    expect(escapeHTML(null)).toBe('');
    expect(escapeHTML(undefined)).toBe('');
  });

  test('escapeHTML should not change a string with no special characters', () => {
    expect(escapeHTML('Hello World')).toBe('Hello World');
  });

  test('unescapeHTML should convert HTML entities back to special characters', () => {
    expect(unescapeHTML(escaped)).toBe(unescaped);
  });

  test('unescapeHTML should return an empty string for null or undefined input', () => {
    expect(unescapeHTML(null)).toBe('');
    expect(unescapeHTML(undefined)).toBe('');
  });

  test('unescapeHTML should not change a string with no HTML entities', () => {
    expect(unescapeHTML('Hello World')).toBe('Hello World');
  });
});
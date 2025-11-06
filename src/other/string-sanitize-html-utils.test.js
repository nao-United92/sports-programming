import { sanitizeHtml } from './string-sanitize-html-utils.js';

describe('sanitizeHtml', () => {
  test('should remove script tags', () => {
    const html = '<div><script>alert("xss")</script>Hello</div>';
    expect(sanitizeHtml(html)).toBe('<div>Hello</div>');
  });

  test('should remove script tags with attributes', () => {
    const html = '<div><script type="text/javascript">alert("xss")</script>Hello</div>';
    expect(sanitizeHtml(html)).toBe('<div>Hello</div>');
  });

  test('should remove event handlers', () => {
    const html = '<img src="x" onerror="alert('xss')">Hello';
    expect(sanitizeHtml(html)).toBe('<img src="x">Hello');
  });

  test('should remove javascript: links', () => {
    const html = '<a href="javascript:alert('xss')">Click me</a>';
    expect(sanitizeHtml(html)).toBe('<a href="">Click me</a>'); // href remains but javascript: is removed
  });

  test('should remove iframe tags', () => {
    const html = '<div><iframe src="malicious.com"></iframe></div>';
    expect(sanitizeHtml(html)).toBe('<div></div>');
  });

  test('should remove other dangerous tags', () => {
    const html = '<div><embed src="malicious.swf"></embed><object data="malicious.swf"></object></div>';
    expect(sanitizeHtml(html)).toBe('<div></div>');
  });

  test('should handle multiple vulnerabilities', () => {
    const html = '<img src="x" onerror="alert(1)"><script>alert(2)</script><a href="javascript:alert(3)">Link</a>';
    expect(sanitizeHtml(html)).toBe('<img src="x"><a href="">Link</a>');
  });

  test('should return empty string for non-string input', () => {
    expect(sanitizeHtml(null)).toBe('');
    expect(sanitizeHtml(undefined)).toBe('');
    expect(sanitizeHtml(123)).toBe('');
  });

  test('should return original string if no dangerous content', () => {
    const html = '<div><p>Safe content</p></div>';
    expect(sanitizeHtml(html)).toBe(html);
  });
});

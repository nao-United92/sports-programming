import { escape, unescape } from './string-escape-utils';

describe('escape', () => {
  it('should escape special HTML characters', () => {
    const text = '<script>alert("xss & stuff")</script>';
    const expected = '&lt;script&gt;alert(&quot;xss &amp; stuff&quot;)&lt;/script&gt;';
    expect(escape(text)).toBe(expected);
  });

  it('should not change a string with no special characters', () => {
    const text = 'hello world';
    expect(escape(text)).toBe('hello world');
  });

  it('should handle all special characters', () => {
    const text = `fred, barney, & pebbles's "favorite" > <`;
    const expected = `fred, barney, &amp; pebbles&#39;s &quot;favorite&quot; &gt; &lt;`;
    expect(escape(text)).toBe(expected);
  });

  it('should return an empty string for null or undefined input', () => {
    expect(escape(null)).toBe('');
    expect(escape(undefined)).toBe('');
  });
});

describe('unescape', () => {
  it('should unescape HTML entities', () => {
    const text = '&lt;script&gt;alert(&quot;xss &amp; stuff&quot;)&lt;/script&gt;';
    const expected = '<script>alert("xss & stuff")</script>';
    expect(unescape(text)).toBe(expected);
  });

  it('should not change a string with no HTML entities', () => {
    const text = 'hello world';
    expect(unescape(text)).toBe('hello world');
  });

  it('should handle all HTML entities', () => {
    const text = `fred, barney, &amp; pebbles&#39;s &quot;favorite&quot; &gt; &lt;`;
    const expected = `fred, barney, & pebbles's "favorite" > <`;
    expect(unescape(text)).toBe(expected);
  });

  it('should return an empty string for null or undefined input', () => {
    expect(unescape(null)).toBe('');
    expect(unescape(undefined)).toBe('');
  });
});
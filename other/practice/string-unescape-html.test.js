import { unescapeHtml } from './string-unescape-html';

describe('unescapeHtml', () => {
  test('unescapes HTML entities', () => {
    expect(unescapeHtml(`&lt;b&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/b&gt;`)).toBe(`<b>"Hello" & 'World'</b>`);
  });

  test('returns the same string if no entities', () => {
    expect(unescapeHtml('hello')).toBe('hello');
  });
});

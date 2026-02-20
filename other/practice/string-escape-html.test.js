import { escapeHtml } from './string-escape-html';

describe('escapeHtml', () => {
  test('escapes special characters', () => {
    expect(escapeHtml(`<b>"Hello" & 'World'</b>`)).toBe(`&lt;b&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/b&gt;`);
  });

  test('returns the same string if no special characters', () => {
    expect(escapeHtml('hello')).toBe('hello');
  });
});

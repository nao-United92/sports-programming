import { template } from './string-template-utils.js';

describe('template', () => {
  it('should replace placeholders with given values', () => {
    const str = 'Hello, {{name}}! Welcome to {{place}}.';
    const values = { name: 'World', place: 'our app' };
    const expected = 'Hello, World! Welcome to our app.';
    expect(template(str, values)).toBe(expected);
  });

  it('should not replace placeholders if values are not provided', () => {
    const str = 'Hello, {{name}}!';
    const values = {};
    const expected = 'Hello, {{name}}!';
    expect(template(str, values)).toBe(expected);
  });

  it('should handle multiple occurrences of the same placeholder', () => {
    const str = '{{greeting}}, {{name}}. How is {{name}}?';
    const values = { greeting: 'Hi', name: 'Alice' };
    const expected = 'Hi, Alice. How is Alice?';
    expect(template(str, values)).toBe(expected);
  });

  it('should return the original string if no placeholders are present', () => {
    const str = 'Just a regular string.';
    const values = { name: 'Test' };
    expect(template(str, values)).toBe(str);
  });

  it('should handle an empty string', () => {
    const str = '';
    const values = { name: 'Test' };
    expect(template(str, values)).toBe('');
  });

  it('should handle a template with no values', () => {
    const str = 'Hello, {{name}}!';
    expect(template(str, {})).toBe('Hello, {{name}}!');
  });

  it('should handle a template with a null value', () => {
    const str = 'Value: {{val}}';
    const values = { val: null };
    expect(template(str, values)).toBe('Value: null');
  });

  it('should handle a template with an undefined value', () => {
    const str = 'Value: {{val}}';
    const values = { val: undefined };
    expect(template(str, values)).toBe('Value: undefined');
  });
});

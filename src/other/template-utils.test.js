
import { template } from './template-utils.js';

describe('template', () => {
  it('should replace a single placeholder', () => {
    const str = 'Hello, <%= name %>!';
    const data = { name: 'World' };
    expect(template(str, data)).toBe('Hello, World!');
  });

  it('should replace multiple placeholders', () => {
    const str = 'My name is <%= firstName %> <%= lastName %>.';
    const data = { firstName: 'John', lastName: 'Doe' };
    expect(template(str, data)).toBe('My name is John Doe.');
  });

  it('should handle missing data by replacing with an empty string', () => {
    const str = 'Hello, <%= name %>!';
    const data = {};
    expect(template(str, data)).toBe('Hello, !');
  });

  it('should handle templates with no placeholders', () => {
    const str = 'This is a plain string.';
    const data = { name: 'World' };
    expect(template(str, data)).toBe('This is a plain string.');
  });

  it('should handle different spacing in placeholders', () => {
    const str = 'Hello, <%=name%>!';
    const data = { name: 'Spaced' };
    expect(template(str, data)).toBe('Hello, Spaced!');
  });

  it('should handle multiple occurrences of the same placeholder', () => {
    const str = 'Hi <%= user %>. Welcome, <%= user %>!';
    const data = { user: 'Alex' };
    expect(template(str, data)).toBe('Hi Alex. Welcome, Alex!');
  });
});

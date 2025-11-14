import { formatString } from './string-format-utils.js';

describe('formatString', () => {
  it('should replace a single placeholder with its corresponding value', () => {
    const template = 'Hello, {name}!';
    const data = { name: 'World' };
    expect(formatString(template, data)).toBe('Hello, World!');
  });

  it('should replace multiple placeholders with their corresponding values', () => {
    const template = 'Hello, {firstName} {lastName}!';
    const data = { firstName: 'John', lastName: 'Doe' };
    expect(formatString(template, data)).toBe('Hello, John Doe!');
  });

  it('should replace multiple occurrences of the same placeholder', () => {
    const template = '{greeting}, {name}! How are you, {name}?';
    const data = { greeting: 'Hi', name: 'Alice' };
    expect(formatString(template, data)).toBe('Hi, Alice! How are you, Alice?');
  });

  it('should replace placeholders with empty string if key is missing in data', () => {
    const template = 'Hello, {name}! Your age is {age}.';
    const data = { name: 'Bob' };
    expect(formatString(template, data)).toBe('Hello, Bob! Your age is .');
  });

  it('should handle an empty template string', () => {
    const template = '';
    const data = { name: 'Test' };
    expect(formatString(template, data)).toBe('');
  });

  it('should return an empty string if template is not a string', () => {
    const data = { name: 'Test' };
    expect(formatString(null, data)).toBe('');
    expect(formatString(undefined, data)).toBe('');
    expect(formatString(123, data)).toBe('');
    expect(formatString({}, data)).toBe('');
  });

  it('should return the original template if data is not an object or is null', () => {
    const template = 'Hello, {name}!';
    expect(formatString(template, null)).toBe(template);
    expect(formatString(template, undefined)).toBe(template);
    expect(formatString(template, 'string')).toBe(template);
    expect(formatString(template, 123)).toBe(template);
  });

  it('should handle placeholders with numeric values', () => {
    const template = 'The answer is {number}.';
    const data = { number: 42 };
    expect(formatString(template, data)).toBe('The answer is 42.');
  });

  it('should handle placeholders with boolean values', () => {
    const template = 'Is it {boolean}?';
    const data = { boolean: true };
    expect(formatString(template, data)).toBe('Is it true?');
  });

  it('should handle placeholders with object values (stringified)', () => {
    const template = 'User details: {user}.';
    const data = { user: { id: 1, name: 'Charlie' } };
    // Objects are stringified by String(data[key])
    expect(formatString(template, data)).toBe('User details: [object Object].');
  });

  it('should handle placeholders with array values (stringified)', () => {
    const template = 'Items: {items}.';
    const data = { items: ['apple', 'banana'] };
    // Arrays are stringified by String(data[key])
    expect(formatString(template, data)).toBe('Items: apple,banana.');
  });
});

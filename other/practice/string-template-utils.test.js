import template from './string-template-utils';

describe('template', () => {
  it('should replace placeholders with corresponding data values', () => {
    const str = 'Hello, {{name}}! You are {{age}} years old.';
    const data = { name: 'John', age: 30 };
    expect(template(str, data)).toBe('Hello, John! You are 30 years old.');
  });

  it('should ignore placeholders for which no data is provided', () => {
    const str = 'Hello, {{name}}! Your city is {{city}}.';
    const data = { name: 'John' };
    expect(template(str, data)).toBe('Hello, John! Your city is {{city}}.');
  });

  it('should handle multiple occurrences of the same placeholder', () => {
    const str = 'Hello, {{name}}! Good morning, {{name}}.';
    const data = { name: 'Alice' };
    expect(template(str, data)).toBe('Hello, Alice! Good morning, Alice.');
  });

  it('should return the original string if no data is provided', () => {
    const str = 'Hello, {{name}}!';
    expect(template(str, null)).toBe('Hello, {{name}}!');
    expect(template(str, undefined)).toBe('Hello, {{name}}!');
    expect(template(str, {})).toBe('Hello, {{name}}!');
  });

  it('should return an empty string if input string is not a string', () => {
    expect(template(null, { name: 'John' })).toBe('');
    expect(template(undefined, { name: 'John' })).toBe('');
    expect(template(123, { name: 'John' })).toBe('');
  });

  it('should handle placeholders with non-string values', () => {
    const str = 'The answer is {{answer}}.';
    const data = { answer: 42 };
    expect(template(str, data)).toBe('The answer is 42.');
  });

  it('should handle boolean values', () => {
    const str = 'Is it true? {{isTrue}}.';
    const data = { isTrue: true };
    expect(template(str, data)).toBe('Is it true? true.');
  });
});
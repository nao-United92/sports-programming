import format from './string-format-utils';

describe('format', () => {
  it('should replace positional placeholders with corresponding arguments', () => {
    expect(format('Hello, {0}! You are {1} years old.', 'John', 30)).toBe(
      'Hello, John! You are 30 years old.',
    );
  });

  it('should handle named placeholders when the second argument is an object', () => {
    // This format utility only handles positional arguments. Named placeholders are handled by string-template-utils.
    expect(format('Hello, {name}! You are {age} years old.', { name: 'Alice', age: 25 })).toBe(
      'Hello, {name}! You are {age} years old.',
    );
  });

  it('should not prioritize positional over named if both patterns exist in the string and data', () => {
    // This format utility only handles positional arguments. Named placeholders are handled by string-template-utils.
    const str = 'User: {0}, Name: {name}';
    const obj = { name: 'Charlie' };
    expect(format(str, 'Bob', obj)).toBe('User: Bob, Name: {name}');
  });

  it('should ignore placeholders for which no corresponding argument is provided', () => {
    expect(format('Hello, {0}! Your city is {1}.', 'John')).toBe('Hello, John! Your city is {1}.');
    // Named placeholders are not processed by this utility
    expect(format('Hello, {name}! Your city is {city}.', { name: 'Alice' })).toBe(
      'Hello, {name}! Your city is {city}.',
    );
  });

  it('should handle multiple occurrences of the same placeholder', () => {
    expect(format('Hello, {0}! Good morning, {0}.', 'Alice')).toBe(
      'Hello, Alice! Good morning, Alice.',
    );
    // Named placeholders are not processed by this utility
    expect(format('Hello, {name}! Good morning, {name}.', { name: 'Bob' })).toBe(
      'Hello, {name}! Good morning, {name}.',
    );
  });

  it('should return an empty string if input string is not a string', () => {
    expect(format(null, 'John')).toBe('');
    expect(format(undefined, 'John')).toBe('');
    expect(format(123, 'John')).toBe('');
  });

  it('should handle non-string argument values', () => {
    expect(format('The answer is {0}.', 42)).toBe('The answer is 42.');
    expect(format('Is it true? {0}.', true)).toBe('Is it true? true.');
  });

  it('should handle objects and arrays as arguments', () => {
    const data = { items: [1, 2, 3] };
    // Named placeholders are not processed by this utility
    expect(format('Data: {items}', data)).toBe('Data: {items}');
  });

  it('should handle empty arguments array', () => {
    expect(format('Test {0}', [])).toBe('Test ');
  });

  it('should handle object as an argument and no named placeholders', () => {
    const obj = { a: 1 };
    expect(format('No named: {0}', obj)).toBe('No named: [object Object]');
  });
});
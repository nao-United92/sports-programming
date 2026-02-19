
const stringToCamelCase = require('./string-to-camel-case');

describe('stringToCamelCase', () => {
  test('converts space separated string to camelCase', () => {
    expect(stringToCamelCase('Hello World')).toBe('helloWorld');
  });

  test('converts hyphenated string to camelCase', () => {
    expect(stringToCamelCase('my-variable-name')).toBe('myVariableName');
  });
    
  test('handles mixed case input', () => {
    expect(stringToCamelCase('Make This camel Case')).toBe('makeThisCamelCase');
  });
});

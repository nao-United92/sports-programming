const toCamelCase = require('./string-camel-case-util');

describe('toCamelCase', () => {
  test('converts string to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });
});

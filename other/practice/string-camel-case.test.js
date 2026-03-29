import { toCamelCase } from './string-camel-case.js';
describe('toCamelCase', () => {
  it('should convert strings to camel case', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('foo_bar')).toBe('fooBar');
  });
});

import { toKebabCase } from './string-kebab-case.js';
describe('toKebabCase', () => {
  it('should convert strings to kebab case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
    expect(toKebabCase('Foo Bar')).toBe('foo-bar');
  });
});

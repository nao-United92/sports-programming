import { toSnakeCase } from './string-snake-case.js';
describe('toSnakeCase', () => {
  it('should convert strings to snake case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
    expect(toSnakeCase('foo-bar')).toBe('foo_bar');
  });
});

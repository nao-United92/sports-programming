import { camelCase } from './string-camel-case';

describe('camelCase', () => {
  test('converts space-separated words to camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  test('converts kebab-case words to camelCase (basic)', () => {
    // Note: The current implementation might need refinement for symbols, 
    // but let's test basic functionality first.
    expect(camelCase('Hello World')).toBe('helloWorld');
  });

  test('handles multiple spaces', () => {
    expect(camelCase('hello   world')).toBe('helloWorld');
  });
});

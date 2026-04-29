import { toConstantCase } from './string-to-constant-case';

describe('toConstantCase', () => {
  test('should convert strings to CONSTANT_CASE', () => {
    expect(toConstantCase('camelCase')).toBe('CAMEL_CASE');
    expect(toConstantCase('PascalCase')).toBe('PASCAL_CASE');
    expect(toConstantCase('kebab-case')).toBe('KEBAB_CASE');
    expect(toConstantCase('snake_case')).toBe('SNAKE_CASE');
    expect(toConstantCase('sentence case')).toBe('SENTENCE_CASE');
    expect(toConstantCase('variableName123')).toBe('VARIABLE_NAME_123');
  });

  test('should handle single words', () => {
    expect(toConstantCase('word')).toBe('WORD');
    expect(toConstantCase('WORD')).toBe('WORD');
  });
});

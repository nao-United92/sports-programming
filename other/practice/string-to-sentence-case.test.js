import { toSentenceCase } from './string-to-sentence-case';

describe('toSentenceCase', () => {
  test('should convert strings to Sentence case', () => {
    expect(toSentenceCase('camelCase')).toBe('Camel case');
    expect(toSentenceCase('PascalCase')).toBe('Pascal case');
    expect(toSentenceCase('kebab-case')).toBe('Kebab case');
    expect(toSentenceCase('snake_case')).toBe('Snake case');
    expect(toSentenceCase('variableName123')).toBe('Variable name 123');
  });

  test('should handle single words', () => {
    expect(toSentenceCase('word')).toBe('Word');
    expect(toSentenceCase('WORD')).toBe('Word');
  });
});

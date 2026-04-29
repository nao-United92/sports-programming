import { toTrainCase } from './string-to-train-case';

describe('toTrainCase', () => {
  test('should convert strings to Train-Case', () => {
    expect(toTrainCase('camelCase')).toBe('Camel-Case');
    expect(toTrainCase('PascalCase')).toBe('Pascal-Case');
    expect(toTrainCase('kebab-case')).toBe('Kebab-Case');
    expect(toTrainCase('snake_case')).toBe('Snake-Case');
    expect(toTrainCase('variableName123')).toBe('Variable-Name-123');
  });

  test('should handle single words', () => {
    expect(toTrainCase('word')).toBe('Word');
    expect(toTrainCase('WORD')).toBe('Word');
  });
});

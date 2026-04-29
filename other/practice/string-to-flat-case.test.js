import { toFlatCase } from './string-to-flat-case';

describe('toFlatCase', () => {
  test('should convert strings to flatcase', () => {
    expect(toFlatCase('camelCase')).toBe('camelcase');
    expect(toFlatCase('PascalCase')).toBe('pascalcase');
    expect(toFlatCase('snake_case')).toBe('snakecase');
  });
});

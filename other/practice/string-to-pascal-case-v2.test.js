import { toPascalCaseV2 } from './string-to-pascal-case-v2';

describe('toPascalCaseV2', () => {
  test('should convert strings to PascalCase', () => {
    expect(toPascalCaseV2('camelCase')).toBe('CamelCase');
    expect(toPascalCaseV2('kebab-case')).toBe('KebabCase');
    expect(toPascalCaseV2('sentence case')).toBe('SentenceCase');
  });
});

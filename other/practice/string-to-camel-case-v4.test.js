import { toCamelCaseV4 } from './string-to-camel-case-v4';

describe('toCamelCaseV4', () => {
  test('should convert strings to camelCase', () => {
    expect(toCamelCaseV4('Snake_Case')).toBe('snakeCase');
    expect(toCamelCaseV4('kebab-case')).toBe('kebabCase');
    expect(toCamelCaseV4('Sentence case')).toBe('sentenceCase');
  });
});

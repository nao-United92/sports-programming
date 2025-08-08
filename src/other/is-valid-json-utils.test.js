import { isValidJson } from './is-valid-json-utils.js';

describe('isValidJson', () => {
  test('should return true for a valid JSON string', () => {
    expect(isValidJson('{"name":"John","age":30}')).toBe(true);
    expect(isValidJson('["apple","banana"]')).toBe(true);
    expect(isValidJson('"hello"')).toBe(true);
    expect(isValidJson('123')).toBe(true);
    expect(isValidJson('true')).toBe(true);
    expect(isValidJson('null')).toBe(true);
  });

  test('should return false for an invalid JSON string', () => {
    expect(isValidJson('{'name':'John'}')).toBe(false);
    expect(isValidJson('[1,2,]')).toBe(false);
    expect(isValidJson('undefined')).toBe(false);
    expect(isValidJson('NaN')).toBe(false);
    expect(isValidJson('Infinity')).toBe(false);
    expect(isValidJson('')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isValidJson({a: 1})).toBe(false);
    expect(isValidJson([1, 2])).toBe(false);
    expect(isValidJson(123)).toBe(false);
    expect(isValidJson(true)).toBe(false);
    expect(isValidJson(null)).toBe(false);
    expect(isValidJson(undefined)).toBe(false);
  });
});

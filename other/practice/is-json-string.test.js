import isJsonString from './is-json-string';

describe('isJsonString', () => {
  test('should return true for a valid JSON string', () => {
    expect(isJsonString('{}')).toBe(true);
    expect(isJsonString('{"key": "value"}')).toBe(true);
    expect(isJsonString('[]')).toBe(true);
    expect(isJsonString('[1, 2, "three"]')).toBe(true);
    expect(isJsonString('true')).toBe(true);
    expect(isJsonString('false')).toBe(true);
    expect(isJsonString('null')).toBe(true);
    expect(isJsonString('123')).toBe(true);
    expect(isJsonString('"hello world"')).toBe(true);
    expect(isJsonString('{"a": 1, "b": {"c": 2}}')).toBe(true);
  });

  test('should return false for an invalid JSON string', () => {
    expect(isJsonString('{key: "value"}')).toBe(false); // Unquoted key
    expect(isJsonString('{"key": "value",}')).toBe(false); // Trailing comma
    expect(isJsonString('{"key": "value"')).toBe(false); // Unclosed bracket
    expect(isJsonString('undefined')).toBe(false);
    expect(isJsonString('function() {}')).toBe(false);
    expect(isJsonString('abc')).toBe(false);
    expect(isJsonString('1,2,3')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isJsonString(null)).toBe(false);
    expect(isJsonString(undefined)).toBe(false);
    expect(isJsonString(123)).toBe(false);
    expect(isJsonString({})).toBe(false);
    expect(isJsonString([])).toBe(false);
    expect(isJsonString(true)).toBe(false);
  });

  test('should return false for empty or whitespace-only strings', () => {
    expect(isJsonString('')).toBe(false);
    expect(isJsonString('   ')).toBe(false);
    expect(isJsonString(' \n\t ')).toBe(false); // Corrected to be a single-line string with whitespace
  });
}); // Closing for describe block
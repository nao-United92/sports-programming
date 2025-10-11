import { isValidJson } from './is-valid-json-utils.js';

describe('isValidJson', () => {
  test('should return true for valid JSON strings', () => {
    expect(isValidJson('{"name":"John","age":30}')).toBe(true);
    expect(isValidJson('[1,2,3]')).toBe(true);
    expect(isValidJson('"hello"')).toBe(true);
    expect(isValidJson('true')).toBe(true);
    expect(isValidJson('null')).toBe(true);
  });

  test('should return false for invalid JSON strings', () => {
    expect(isValidJson("{'name':'John'}")).toBe(false); // single quotes are invalid
    expect(isValidJson('{name:"John"}')).toBe(false); // unquoted key
    expect(isValidJson('[1,2,]')).toBe(false); // trailing comma
    expect(isValidJson('undefined')).toBe(false);
    expect(isValidJson('NaN')).toBe(false);
    expect(isValidJson('abc')).toBe(false);
    expect(isValidJson('')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isValidJson(123)).toBe(false);
    expect(isValidJson(null)).toBe(false);
    expect(isValidJson(undefined)).toBe(false);
    expect(isValidJson({})).toBe(false);
    expect(isValidJson([])).toBe(false);
  });
});
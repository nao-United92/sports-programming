const { safeJsonParse } = require('./json-parse-utils');

describe('safeJsonParse', () => {
  test('should parse a valid JSON object string', () => {
    const jsonString = '{"a":1,"b":"hello"}';
    expect(safeJsonParse(jsonString)).toEqual({ a: 1, b: 'hello' });
  });

  test('should parse a valid JSON array string', () => {
    const jsonString = '[1, "test", true]';
    expect(safeJsonParse(jsonString)).toEqual([1, 'test', true]);
  });

  test('should return null for an invalid JSON string', () => {
    const invalidJsonString = '{"a":1,"b":}';
    expect(safeJsonParse(invalidJsonString)).toBeNull();
  });

  test('should return the custom default value for an invalid JSON string', () => {
    const invalidJsonString = '{"a":1,b:2}';
    const defaultValue = { error: true };
    expect(safeJsonParse(invalidJsonString, defaultValue)).toBe(defaultValue);
  });

  test('should return the default value for non-string input', () => {
    expect(safeJsonParse(123)).toBeNull();
    expect(safeJsonParse({})).toBeNull();
    expect(safeJsonParse(null)).toBeNull();
    expect(safeJsonParse(undefined)).toBeNull();
  });
  
  test('should return a custom default value for non-string input', () => {
    const defaultValue = [];
    expect(safeJsonParse(123, defaultValue)).toBe(defaultValue);
    expect(safeJsonParse({}, defaultValue)).toBe(defaultValue);
    expect(safeJsonParse(null, defaultValue)).toBe(defaultValue);
    expect(safeJsonParse(undefined, defaultValue)).toBe(defaultValue);
  });

  test('should correctly parse a JSON string containing only a primitive value', () => {
    expect(safeJsonParse('"hello world"')).toBe('hello world');
    expect(safeJsonParse('123.45')).toBe(123.45);
    expect(safeJsonParse('true')).toBe(true);
    expect(safeJsonParse('null')).toBeNull();
  });
});

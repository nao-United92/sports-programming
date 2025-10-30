const { parseSafe } = require('./json-parse-safe-utils.js');

describe('parseSafe', () => {
  // Mock console.error to prevent test output pollution
  let consoleErrorSpy;
  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should parse a valid JSON string successfully', () => {
    const json = '{"a": 1, "b": "hello"}';
    expect(parseSafe(json)).toEqual({ a: 1, b: 'hello' });
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('should return undefined for an invalid JSON string by default', () => {
    const invalidJson = '{"a": 1, "b": "hello"'; // Missing closing brace
    expect(parseSafe(invalidJson)).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });

  it('should return the specified default value for an invalid JSON string', () => {
    const invalidJson = 'invalid json';
    const defaultValue = { error: true };
    expect(parseSafe(invalidJson, defaultValue)).toEqual(defaultValue);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });

  it('should return null for an invalid JSON string if null is the default value', () => {
    const invalidJson = 'not json';
    expect(parseSafe(invalidJson, null)).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle empty string as invalid JSON', () => {
    expect(parseSafe('', {})).toEqual({});
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle non-string input as invalid JSON', () => {
    expect(parseSafe(123, null)).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(parseSafe(null, [])).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(2); // Called twice for two invalid inputs
  });

  it('should parse JSON with arrays', () => {
    const json = '[1, 2, {"c": 3}]';
    expect(parseSafe(json)).toEqual([1, 2, { c: 3 }]);
  });
});
const { safeParse, safeStringify } = require('./safe-json');

describe('Safe JSON', () => {
  describe('safeParse', () => {
    test('should parse a valid JSON string', () => {
      const json = '{"a":1,"b":"hello","c":true}';
      expect(safeParse(json)).toEqual({ a: 1, b: 'hello', c: true });
    });

    test('should return null for an invalid JSON string', () => {
      const invalidJson = '{a:1}'; // keys must be strings
      expect(safeParse(invalidJson)).toBeNull();
    });

    test('should return a custom default value for invalid JSON', () => {
      const invalidJson = 'not a json';
      const defaultValue = { error: true };
      expect(safeParse(invalidJson, defaultValue)).toEqual(defaultValue);
    });

    test('should return default value for non-string inputs', () => {
      const defaultValue = { default: true };
      expect(safeParse(null, defaultValue)).toEqual(defaultValue);
      expect(safeParse(undefined, defaultValue)).toEqual(defaultValue);
      expect(safeParse(123, defaultValue)).toEqual(defaultValue);
      expect(safeParse({}, defaultValue)).toEqual(defaultValue);
    });
  });

  describe('safeStringify', () => {
    test('should stringify a valid object', () => {
      const obj = { a: 1, b: 'hello', c: true };
      expect(safeStringify(obj)).toBe('{"a":1,"b":"hello","c":true}');
    });

    test('should return null for an object with circular references', () => {
      const obj = { a: 1 };
      obj.b = obj; // Circular reference
      expect(safeStringify(obj)).toBeNull();
    });

    test('should return a custom default value for circular references', () => {
      const obj = { a: 1 };
      obj.b = obj;
      const defaultValue = '{"error":"circular reference"}';
      expect(safeStringify(obj, defaultValue)).toBe(defaultValue);
    });
    
    test('should return null for BigInt which cannot be stringified by default', () => {
        const obj = { a: BigInt(9007199254740991) };
        expect(safeStringify(obj)).toBeNull();
    });
  });
});

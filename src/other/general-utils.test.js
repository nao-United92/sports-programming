import { isNullOrUndefined, isPlainObject, generateUniqueId, deepCloneJson, uuid, noop } from './general-utils.js';

describe('general-utils', () => {
  describe('isNullOrUndefined', () => {
    it('should return true for null or undefined', () => {
      expect(isNullOrUndefined(null)).toBe(true);
      expect(isNullOrUndefined(undefined)).toBe(true);
    });

    it('should return false for other values', () => {
      expect(isNullOrUndefined(0)).toBe(false);
      expect(isNullOrUndefined('')).toBe(false);
      expect(isNullOrUndefined(false)).toBe(false);
      expect(isNullOrUndefined({})).toBe(false);
      expect(isNullOrUndefined([])).toBe(false);
    });
  });

  describe('isPlainObject', () => {
    it('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject(new Object())).toBe(true);
    });

    it('should return false for non-plain objects', () => {
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject(null)).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
      expect(isPlainObject(function() {})).toBe(false);
      expect(isPlainObject(123)).toBe(false);
      expect(isPlainObject('string')).toBe(false);
    });
  });

  describe('generateUniqueId', () => {
    it('should generate a unique ID', () => {
      const id1 = generateUniqueId();
      const id2 = generateUniqueId();
      expect(id1).not.toBe(id2);
      expect(typeof id1).toBe('string');
    });

    it('should generate a unique ID with a prefix', () => {
      const id = generateUniqueId('prefix-');
      expect(id).toMatch(/^prefix-/);
    });
  });

  describe('deepCloneJson', () => {
    it('should deep clone a JSON-serializable object', () => {
      const obj = { a: 1, b: { c: 'hello' }, d: [1, 2, { e: true }] };
      const clonedObj = deepCloneJson(obj);
      expect(clonedObj).toEqual(obj);
      expect(clonedObj).not.toBe(obj);
      expect(clonedObj.b).not.toBe(obj.b);
      expect(clonedObj.d[2]).not.toBe(obj.d[2]);
    });

    it('should return null for non-JSON-serializable objects', () => {
      const obj = { a: 1, b: () => {} };
      expect(deepCloneJson(obj)).toBeNull();
    });

    it('should handle null and undefined', () => {
      expect(deepCloneJson(null)).toBeNull();
      expect(deepCloneJson(undefined)).toBeUndefined();
    });
  });

  describe('uuid', () => {
    it('should generate a valid UUID v4', () => {
      const id = uuid();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    it('should generate unique UUIDs', () => {
      const id1 = uuid();
      const id2 = uuid();
      expect(id1).not.toBe(id2);
    });
  });

  describe('noop', () => {
    it('should do nothing', () => {
      expect(noop()).toBeUndefined();
    });

    it('should not throw an error', () => {
      expect(() => noop()).not.toThrow();
    });
  });
});
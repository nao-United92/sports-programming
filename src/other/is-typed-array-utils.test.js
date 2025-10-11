import { isTypedArray } from './is-typed-array-utils.js';

describe('isTypedArray', () => {
  test('should return true for Int8Array', () => {
    expect(isTypedArray(new Int8Array())).toBe(true);
  });

  test('should return true for Uint8Array', () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
  });

  test('should return true for Uint8ClampedArray', () => {
    expect(isTypedArray(new Uint8ClampedArray())).toBe(true);
  });

  test('should return true for Int16Array', () => {
    expect(isTypedArray(new Int16Array())).toBe(true);
  });

  test('should return true for Uint16Array', () => {
    expect(isTypedArray(new Uint16Array())).toBe(true);
  });

  test('should return true for Int32Array', () => {
    expect(isTypedArray(new Int32Array())).toBe(true);
  });

  test('should return true for Uint32Array', () => {
    expect(isTypedArray(new Uint32Array())).toBe(true);
  });

  test('should return true for Float32Array', () => {
    expect(isTypedArray(new Float32Array())).toBe(true);
  });

  test('should return true for Float64Array', () => {
    expect(isTypedArray(new Float64Array())).toBe(true);
  });

  test('should return false for a regular array', () => {
    expect(isTypedArray([])).toBe(false);
  });

  test('should return false for an object', () => {
    expect(isTypedArray({})).toBe(false);
  });

  test('should return false for null', () => {
    expect(isTypedArray(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isTypedArray(undefined)).toBe(false);
  });
});

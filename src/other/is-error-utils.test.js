import { isError } from './is-error-utils';

describe('isError', () => {
  it('should return true for an Error object', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError(new TypeError())).toBe(true);
    expect(isError(new RangeError())).toBe(true);
  });

  it('should return true for a DOMException', () => {
    // DOMException is not available in Node.js by default, so we mock it.
    // In a browser environment, this would be a native object.
    class DOMException extends Error {
      constructor(message, name) {
        super(message);
        this.name = name;
      }
    }
    Object.defineProperty(DOMException.prototype, Symbol.toStringTag, {
      value: 'DOMException',
      configurable: true,
    });

    expect(isError(new DOMException('message', 'name'))).toBe(true);
  });

  it('should return false for non-Error objects', () => {
    expect(isError({})).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError(new Map())).toBe(false);
    expect(isError(new Set())).toBe(false);
  });

  it('should return false for null and undefined', () => {
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isError(123)).toBe(false);
    expect(isError('string')).toBe(false);
    expect(isError(true)).toBe(false);
    expect(isError(Symbol('a'))).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isError(() => {})).toBe(false);
    expect(isError(function() {})).toBe(false);
  });
});

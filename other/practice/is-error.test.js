import isError from './is-error';

describe('isError', () => {
  test('should return true for a standard Error object', () => {
    expect(isError(new Error())).toBe(true);
    expect(isError(new Error('something went wrong'))).toBe(true);
  });

  test('should return true for subclasses of Error (e.g., TypeError, RangeError)', () => {
    expect(isError(new TypeError())).toBe(true);
    expect(isError(new RangeError('out of range'))).toBe(true);
  });

  test('should return false for non-Error values', () => {
    expect(isError('error string')).toBe(false);
    expect(isError(123)).toBe(false);
    expect(isError(true)).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
    expect(isError({})).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError(() => {})).toBe(false);
  });

  test('should return true for a custom Error class instance', () => {
    class CustomError extends Error {
      constructor(message) {
        super(message);
        this.name = 'CustomError';
      }
    }
    expect(isError(new CustomError('custom message'))).toBe(true);
  });

  test('should return false for objects mimicking Error behavior but not actual Error objects', () => {
    const fakeError = {
      name: 'FakeError',
      message: 'This is not a real error',
      stack: '...'
    };
    expect(isError(fakeError)).toBe(false);
  });
});

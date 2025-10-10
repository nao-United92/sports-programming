const { noop } = require('./function-noop-utils.js');

describe('noop', () => {
  test('should be a function', () => {
    expect(typeof noop).toBe('function');
  });

  test('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });

  test('should not throw an error when called with arguments', () => {
    expect(() => noop(1, 2, 3)).not.toThrow();
  });

  });

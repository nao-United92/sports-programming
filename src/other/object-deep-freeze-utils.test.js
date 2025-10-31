const { deepFreeze } = require('./object-deep-freeze-utils');

describe('deepFreeze', () => {
  it('should freeze a simple object', () => {
    const obj = { a: 1, b: 2 };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
  });

  it('should not allow properties to be added', () => {
    const obj = { a: 1 };
    deepFreeze(obj);
    // In strict mode, this would throw a TypeError. In non-strict mode, it fails silently.
    // Jest runs in strict mode.
    expect(() => {
      obj.b = 2;
    }).toThrow(TypeError);
  });

  it('should not allow properties to be modified', () => {
    const obj = { a: 1 };
    deepFreeze(obj);
    expect(() => {
      obj.a = 2;
    }).toThrow(TypeError);
  });

  it('should freeze nested objects', () => {
    const obj = {
      a: 1,
      b: {
        c: 3,
        d: {
          e: 4,
        },
      },
    };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.b)).toBe(true);
    expect(Object.isFrozen(obj.b.d)).toBe(true);
  });

  it('should not allow nested properties to be modified', () => {
    const obj = {
      a: 1,
      b: {
        c: 3,
      },
    };
    deepFreeze(obj);
    expect(() => {
      obj.b.c = 4;
    }).toThrow(TypeError);
  });

  it('should handle arrays in objects', () => {
    const obj = {
      a: [1, { b: 2 }],
    };
    deepFreeze(obj);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(Object.isFrozen(obj.a[1])).toBe(true);
    expect(() => {
      obj.a[0] = 99;
    }).toThrow(TypeError);
    expect(() => {
      obj.a[1].b = 99;
    }).toThrow(TypeError);
  });

  it('should handle null and undefined values gracefully', () => {
    const obj = { a: null, b: undefined };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
  });
});

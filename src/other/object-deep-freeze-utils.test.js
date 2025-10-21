const { deepFreeze } = require('./object-deep-freeze-utils.js');

describe('deepFreeze', () => {
  it('should freeze a simple object', () => {
    const obj = { a: 1, b: 2 };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(() => { obj.a = 3; }).toThrow();
    expect(() => { obj.c = 4; }).toThrow();
  });

  it('should freeze a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.b)).toBe(true);
    expect(Object.isFrozen(obj.b.d)).toBe(true);
    expect(() => { obj.b.c = 99; }).toThrow();
    expect(() => { obj.b.d.e = 100; }).toThrow();
  });

  it('should freeze objects within an array', () => {
      const obj = {
          a: [ {b:1}, {c:2} ]
      };
      deepFreeze(obj);
      expect(Object.isFrozen(obj)).toBe(true);
      expect(Object.isFrozen(obj.a)).toBe(true);
      expect(Object.isFrozen(obj.a[0])).toBe(true);
      expect(Object.isFrozen(obj.a[1])).toBe(true);
      expect(() => { obj.a[0].b = 3; }).toThrow();
      expect(() => { obj.a[1].c = 4; }).toThrow();
  });

  it('should handle arrays of primitives', () => {
    const obj = {
        a: [1, 2, 3]
    };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.a)).toBe(true);
    // Primitives themselves cannot be frozen, only the array containing them
    expect(() => { obj.a[0] = 99; }).toThrow();
  });

  it('should return the frozen object', () => {
    const obj = { a: 1 };
    const frozenObj = deepFreeze(obj);
    expect(frozenObj).toBe(obj);
    expect(Object.isFrozen(frozenObj)).toBe(true);
  });

  it('should not throw error for null or undefined', () => {
    expect(() => deepFreeze(null)).not.toThrow();
    expect(() => deepFreeze(undefined)).not.toThrow();
  });

  it('should not freeze non-object types', () => {
    const num = 123;
    const frozenNum = deepFreeze(num);
    expect(frozenNum).toBe(num);
    expect(Object.isFrozen(frozenNum)).toBe(false);

    const str = 'hello';
    const frozenStr = deepFreeze(str);
    expect(frozenStr).toBe(str);
    expect(Object.isFrozen(frozenStr)).toBe(false);
  });
});
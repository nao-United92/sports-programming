const { deepFreeze } = require('./object-deep-freeze-utils');

describe('deepFreeze', () => {
  it('should freeze a simple object', () => {
    const obj = { a: 1, b: 2 };
    deepFreeze(obj);
    expect(() => { obj.a = 3; }).toThrow();
  });

  it('should freeze a nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: { e: 3 }
      }
    };
    deepFreeze(obj);
    expect(() => { obj.b.c = 4; }).toThrow();
    expect(() => { obj.b.d.e = 5; }).toThrow();
  });

  it('should freeze an object with an array', () => {
    const obj = {
      a: [1, 2, 3],
      b: { c: [4, 5] }
    };
    deepFreeze(obj);
    expect(() => { obj.a.push(4); }).toThrow();
    expect(() => { obj.b.c[0] = 99; }).toThrow();
  });

  it('should not throw on null or undefined properties', () => {
    const obj = { a: null, b: undefined };
    const frozenObj = deepFreeze(obj);
    expect(Object.isFrozen(frozenObj)).toBe(true);
  });
});

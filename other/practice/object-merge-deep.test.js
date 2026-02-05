const { mergeDeep } = require('./object-merge-deep');

describe('mergeDeep', () => {
  it('should deeply merge two objects', () => {
    const obj1 = {
      a: 1,
      b: { b1: 10, b2: 20 },
      c: [1, 2],
    };
    const obj2 = {
      a: 2,
      b: { b2: 200, b3: 300 },
      d: 4,
    };
    const expected = {
      a: 2,
      b: { b1: 10, b2: 200, b3: 300 },
      c: [1, 2],
      d: 4,
    };
    expect(mergeDeep(obj1, obj2)).toEqual(expected);
  });

  it('should deeply merge multiple objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const obj3 = { f: 5, b: { c: 5 } };
    const expected = { a: 1, d: 3, f: 5, b: { c: 5, e: 4 } };
    expect(mergeDeep(obj1, obj2, obj3)).toEqual(expected);
  });

  it('should not modify the original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3 };
    mergeDeep(obj1, obj2);
    expect(obj1).toEqual({ a: 1, b: { c: 2 } });
    expect(obj2).toEqual({ d: 3 });
  });

  it('should handle non-object properties correctly', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 'hello' };
    expect(mergeDeep(obj1, obj2)).toEqual({ a: 'hello' });
  });

  it('should handle arrays by replacing them, not merging their contents', () => {
    const obj1 = { arr: [1, 2] };
    const obj2 = { arr: [3, 4] };
    expect(mergeDeep(obj1, obj2)).toEqual({ arr: [3, 4] });
  });

  it('should handle empty objects', () => {
    expect(mergeDeep({}, {})).toEqual({});
  });
  
  it('should throw an error if target is not an object', () => {
    expect(() => mergeDeep(null, {})).toThrow(TypeError);
    expect(() => mergeDeep(1, {})).toThrow(TypeError);
    expect(() => mergeDeep('string', {})).toThrow(TypeError);
  });
});

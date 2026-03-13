const mergeDeepWith = require('./object-merge-deep-strategies');

describe('mergeDeepWith', () => {
  test('merges deeply with custom resolver (summing numbers)', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 10, b: { c: 20 }, d: 5 };
    const resolver = (objVal, srcVal) => (typeof objVal === 'number' ? objVal + srcVal : srcVal);
    
    expect(mergeDeepWith(resolver, obj1, obj2)).toEqual({
      a: 11,
      b: { c: 22 },
      d: 5,
    });
  });

  test('merges with "keep original" strategy', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2, b: 3 };
    const resolver = (objVal) => objVal;
    
    expect(mergeDeepWith(resolver, obj1, obj2)).toEqual({
      a: 1,
      b: 3,
    });
  });

  test('handles multiple sources', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 10 };
    const obj3 = { a: 100 };
    const resolver = (o, s) => o + s;
    
    expect(mergeDeepWith(resolver, obj1, obj2, obj3)).toEqual({ a: 111 });
  });
});

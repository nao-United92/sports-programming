const deepMapKeys = require('./object-deep-map-keys');

describe('deepMapKeys', () => {
  test('maps simple object keys', () => {
    const obj = { a: 1, b: 2 };
    const res = deepMapKeys(obj, (k) => k.toUpperCase());
    expect(res).toEqual({ A: 1, B: 2 });
  });

  test('maps nested object keys', () => {
    const obj = { a: { b: 1, c: { d: 2 } } };
    const res = deepMapKeys(obj, (k) => k.toUpperCase());
    expect(res).toEqual({ A: { B: 1, C: { D: 2 } } });
  });

  test('handles arrays within objects', () => {
    const obj = { a: [{ b: 1 }] };
    const res = deepMapKeys(obj, (k) => k.toUpperCase());
    expect(res).toEqual({ A: [{ B: 1 }] });
  });

  test('returns primitive values as is', () => {
    expect(deepMapKeys(1, (k) => k)).toBe(1);
    expect(deepMapKeys('s', (k) => k)).toBe('s');
    expect(deepMapKeys(null, (k) => k)).toBe(null);
  });
});

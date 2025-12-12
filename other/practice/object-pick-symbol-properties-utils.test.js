const pickSymbolProperties = require('./object-pick-symbol-properties-utils').default;

describe('pickSymbolProperties', () => {
  const sym1 = Symbol('foo');
  const sym2 = Symbol('bar');
  const sym3 = Symbol('baz');

  test('should pick only Symbol properties from an object', () => {
    const obj = {
      a: 1,
      [sym1]: 'value1',
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [1, 2],
      [sym2]: 123,
    };
    expect(pickSymbolProperties(obj)).toEqual({ [sym1]: 'value1', [sym2]: 123 });
  });

  test('should return an empty object if no Symbol properties exist', () => {
    const obj = {
      a: 1,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [1, 2],
    };
    expect(pickSymbolProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(pickSymbolProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(pickSymbolProperties(null)).toEqual({});
    expect(pickSymbolProperties(undefined)).toEqual({});
  });

  test('should handle an object with only Symbol properties', () => {
    const obj = { [sym1]: 'alpha', [sym2]: 'beta', [sym3]: 'gamma' };
    expect(pickSymbolProperties(obj)).toEqual({
      [sym1]: 'alpha',
      [sym2]: 'beta',
      [sym3]: 'gamma',
    });
  });

  test('should not modify the original object', () => {
    const originalObj = { a: 1, [sym1]: 'value' };
    pickSymbolProperties(originalObj);
    expect(originalObj).toEqual({ a: 1, [sym1]: 'value' });
  });

  test('should pick non-enumerable symbol properties', () => {
    const obj = { a: 1 };
    Object.defineProperty(obj, sym1, {
      value: 'non-enumerable symbol',
      enumerable: false,
    });
    expect(pickSymbolProperties(obj)).toEqual({ [sym1]: 'non-enumerable symbol' });
  });
});
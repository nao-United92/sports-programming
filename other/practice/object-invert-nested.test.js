const invertNested = require('./object-invert-nested');

describe('invertNested', () => {
  test('inverts a simple object', () => {
    expect(invertNested({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
  });

  test('inverts a nested object', () => {
    const obj = {
      a: {
        b: {
          c: 1,
        },
        d: 2,
      },
      e: 3,
    };
    expect(invertNested(obj)).toEqual({
      '1': 'a.b.c',
      '2': 'a.d',
      '3': 'e',
    });
  });

  test('handles mixed content', () => {
    const obj = { a: 1, b: { c: 1 } };
    // In our implementation, values are keys, so if they collide, the later one wins.
    const result = invertNested(obj);
    expect(result['1']).toBe('b.c');
  });

  test('returns empty for empty object', () => {
    expect(invertNested({})).toEqual({});
  });
});

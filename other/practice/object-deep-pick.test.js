const deepPick = require('./object-deep-pick');

describe('deepPick', () => {
  const obj = {
    a: {
      b: {
        c: 1,
        d: 2,
      },
      e: 3,
    },
    f: 4,
  };

  test('picks nested properties', () => {
    expect(deepPick(obj, ['a.b.c', 'f'])).toEqual({
      a: {
        b: {
          c: 1,
        },
      },
      f: 4,
    });
  });

  test('handles missing paths', () => {
    expect(deepPick(obj, ['a.b.x', 'z'])).toEqual({
      a: {
        b: {},
      },
    });
  });

  test('picks entire objects', () => {
    expect(deepPick(obj, ['a.b'])).toEqual({
      a: {
        b: {
          c: 1,
          d: 2,
        },
      },
    });
  });

  test('returns empty object for empty paths', () => {
    expect(deepPick(obj, [])).toEqual({});
  });
});

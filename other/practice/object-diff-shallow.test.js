const diffShallow = require('./object-diff-shallow');

describe('diffShallow', () => {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 20, d: 4 };

  test('identifies added, removed, and changed keys', () => {
    expect(diffShallow(obj1, obj2)).toEqual({
      added: ['d'],
      removed: ['c'],
      changed: ['b'],
    });
  });

  test('returns empty results for identical objects', () => {
    expect(diffShallow({ a: 1 }, { a: 1 })).toEqual({
      added: [],
      removed: [],
      changed: [],
    });
  });

  test('handles empty objects', () => {
    expect(diffShallow({}, {})).toEqual({
      added: [],
      removed: [],
      changed: [],
    });
  });
});

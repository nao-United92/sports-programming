const filterRecursive = require('./object-filter-recursive');

describe('filterRecursive', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: 'keep',
    },
    e: 'remove',
  };

  test('filters properties recursively', () => {
    const predicate = (val) => typeof val === 'number' || val === 'keep';
    expect(filterRecursive(obj, predicate)).toEqual({
      a: 1,
      b: {
        c: 2,
        d: 'keep',
      },
    });
  });

  test('removes empty objects after filtering', () => {
    const predicate = (val) => typeof val === 'number';
    const input = { a: 'str', b: { c: 'str' } };
    expect(filterRecursive(input, predicate)).toEqual({});
  });

  test('handles empty object', () => {
    expect(filterRecursive({}, () => true)).toEqual({});
  });
});

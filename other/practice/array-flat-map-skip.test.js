const flatMapSkip = require('./array-flat-map-skip');

describe('flatMapSkip', () => {
  test('skips null/undefined', () => {
    const result = flatMapSkip([1, 2, 3], x => x % 2 === 0 ? x : null);
    expect(result).toEqual([2]);
  });

  test('flattens arrays', () => {
    const result = flatMapSkip([1, 2], x => [x, x]);
    expect(result).toEqual([1, 1, 2, 2]);
  });
});


const arrayZipMultiple = require('./array-zip-multiple');

describe('arrayZipMultiple', () => {
  test('zips multiple arrays', () => {
    const a = [1, 2];
    const b = ['a', 'b'];
    expect(arrayZipMultiple(a, b)).toEqual([[1, 'a'], [2, 'b']]);
  });

  test('handles arrays of different lengths (filling undefined)', () => {
    const a = [1, 2, 3];
    const b = ['a'];
    expect(arrayZipMultiple(a, b)).toEqual([[1, 'a'], [2, undefined], [3, undefined]]);
  });

  test('handles empty arrays', () => {
    expect(arrayZipMultiple([], [])).toEqual([]);
  });
});

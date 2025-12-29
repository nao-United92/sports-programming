import { compact } from './array-compact-utils';

describe('compact', () => {
  test('should remove all falsey values from an array', () => {
    expect(compact([0, 1, false, 2, '', 3, null, 'a', undefined, NaN])).toEqual([1, 2, 3, 'a']);
  });

  test('should handle an array with only truthy values', () => {
    expect(compact([1, 'hello', true, {},
      []
    ])).toEqual([1, 'hello', true, {},
      []
    ]);
  });

  test('should handle an array with only falsey values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  test('should handle an empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = [0, 1, false, 2];
    compact(originalArray);
    expect(originalArray).toEqual([0, 1, false, 2]);
  });
});

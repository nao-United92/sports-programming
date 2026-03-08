import { moveElement } from './array-move-utils-v2';

describe('moveElement', () => {
  test('should move element to a new index', () => {
    expect(moveElement([1, 2, 3, 4], 0, 2)).toEqual([2, 3, 1, 4]);
    expect(moveElement([1, 2, 3, 4], 3, 1)).toEqual([1, 4, 2, 3]);
  });

  test('should handle same index', () => {
    expect(moveElement([1, 2], 0, 0)).toEqual([1, 2]);
  });
});

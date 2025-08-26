import { pull, pullAll, pullAllBy } from './array-pull-utils.js';

describe('pull', () => {
  it('should remove specified values from an array', () => {
    const array = [1, 2, 3, 1, 2, 3];
    pull(array, 2, 3);
    expect(array).toEqual([1, 1]);
  });

  it('should return the original array if not an array', () => {
    const notAnArray = null;
    expect(pull(notAnArray, 1)).toBeNull();
  });
});

describe('pullAll', () => {
  it('should remove all specified values from an array', () => {
    const array = [1, 2, 3, 1, 2, 3];
    pullAll(array, [2, 3]);
    expect(array).toEqual([1, 1]);
  });

  it('should handle empty values array', () => {
    const array = [1, 2, 3];
    pullAll(array, []);
    expect(array).toEqual([1, 2, 3]);
  });
});

describe('pullAllBy', () => {
  it('should remove values based on iteratee result', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], (o) => o.x);
    expect(array).toEqual([{ 'x': 2 }]);
  });

  it('should handle empty values array', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }];
    pullAllBy(array, [], (o) => o.x);
    expect(array).toEqual([{ 'x': 1 }, { 'x': 2 }]);
  });
});
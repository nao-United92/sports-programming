import { differenceBy } from './array-difference-by-simple';

describe('differenceBy', () => {
  test('should return difference based on an iteratee function', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  });

  test('should return difference based on a property name', () => {
    const data = [{ x: 1 }, { x: 2 }];
    const exclude = [{ x: 1 }];
    expect(differenceBy(data, exclude, 'x')).toEqual([{ x: 2 }]);
  });
});

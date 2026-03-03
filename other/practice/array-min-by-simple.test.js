import { minBy } from './array-min-by-simple';

describe('minBy', () => {
  test('should find the minimum based on a property', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(minBy(data, 'n')).toEqual({ n: 2 });
  });

  test('should find the minimum based on an iteratee function', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(minBy(data, o => o.n)).toEqual({ n: 2 });
  });

  test('should return undefined for an empty array', () => {
    expect(minBy([], 'n')).toBeUndefined();
  });
});

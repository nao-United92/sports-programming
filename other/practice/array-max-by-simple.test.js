import { maxBy } from './array-max-by-simple';

describe('maxBy', () => {
  test('should find the maximum based on a property', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(maxBy(data, 'n')).toEqual({ n: 8 });
  });

  test('should find the maximum based on an iteratee function', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(maxBy(data, o => o.n)).toEqual({ n: 8 });
  });

  test('should return undefined for an empty array', () => {
    expect(maxBy([], 'n')).toBeUndefined();
  });
});

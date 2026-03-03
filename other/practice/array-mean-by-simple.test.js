import { meanBy } from './array-mean-by-simple';

describe('meanBy', () => {
  test('should compute the mean based on a property', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 9 }];
    expect(meanBy(data, 'n')).toBe(5);
  });

  test('should compute the mean based on an iteratee function', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 9 }];
    expect(meanBy(data, o => o.n)).toBe(5);
  });

  test('should return NaN for an empty array', () => {
    expect(meanBy([], 'n')).toBeNaN();
  });
});

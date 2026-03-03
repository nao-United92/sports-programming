import { sumBy } from './array-sum-by-simple';

describe('sumBy', () => {
  test('should sum values based on a property name', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(sumBy(data, 'n')).toBe(14);
  });

  test('should sum values based on an iteratee function', () => {
    const data = [{ n: 4 }, { n: 2 }, { n: 8 }];
    expect(sumBy(data, o => o.n)).toBe(14);
  });

  test('should return 0 for an empty array', () => {
    expect(sumBy([], 'n')).toBe(0);
  });
});

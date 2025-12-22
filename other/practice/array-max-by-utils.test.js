import { maxBy } from './array-max-by-utils';

describe('maxBy', () => {
  it('should return the maximum value by a given function', () => {
    const arr = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    expect(maxBy(arr, o => o.n)).toEqual({ n: 8 });
  });

  it('should return undefined for an empty array', () => {
    expect(maxBy([], o => o.n)).toBeUndefined();
  });

  it('should return the first element if all are equal', () => {
    const arr = [{ n: 4 }, { n: 4 }, { n: 4 }];
    expect(maxBy(arr, o => o.n)).toEqual({ n: 4 });
  });
});

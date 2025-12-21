import countBy from './array-count-by-utils';

describe('countBy', () => {
  it('should count the occurrences of each value in an array', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
  });
  it('should count the occurrences of each value in an array of objects', () => {
    expect(countBy([{ n: 6.1 }, { n: 4.2 }, { n: 6.3 }], item => Math.floor(item.n))).toEqual({ '4': 1, '6': 2 });
  });
});

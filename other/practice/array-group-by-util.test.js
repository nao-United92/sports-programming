import { groupBy } from './array-group-by-util';

describe('groupBy', () => {
  it('should group the elements of an array based on a given function', () => {
    const array = [6.1, 4.2, 6.3];
    const grouped = groupBy(array, Math.floor);
    expect(grouped).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should group by string length', () => {
    const array = ['one', 'two', 'three'];
    const grouped = groupBy(array, 'length');
    expect(grouped).toEqual({ '3': ['one', 'two'], '5': ['three'] });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], Math.floor)).toEqual({});
  });

  it('should return an empty object for non-array values', () => {
    expect(groupBy(null, Math.floor)).toEqual({});
    expect(groupBy(undefined, Math.floor)).toEqual({});
  });
});

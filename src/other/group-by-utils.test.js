import { groupBy } from './group-by-utils.js';

describe('groupBy', () => {
  it('should group by a function', () => {
    const array = [6.1, 4.2, 6.3];
    const result = groupBy(array, Math.floor);
    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should group by a property name', () => {
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    const result = groupBy(array, 'dir');
    expect(result).toEqual({ 'left': [{ 'dir': 'left', 'code': 97 }], 'right': [{ 'dir': 'right', 'code': 100 }] });
  });

  it('should handle an empty array', () => {
    const array = [];
    const result = groupBy(array, 'length');
    expect(result).toEqual({});
  });

  it('should handle non-array input', () => {
    expect(groupBy(null, 'length')).toEqual({});
    expect(groupBy(undefined, 'length')).toEqual({});
    expect(groupBy({}, 'length')).toEqual({});
    expect(groupBy(123, 'length')).toEqual({});
  });
});
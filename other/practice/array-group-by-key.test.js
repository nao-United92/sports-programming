import { groupByKey } from './array-group-by-key';

describe('groupByKey', () => {
  test('should group an array by a simple key', () => {
    const data = [
      { id: 1, name: 'A', group: 'G1' },
      { id: 2, name: 'B', group: 'G2' },
      { id: 3, name: 'C', group: 'G1' },
    ];
    const result = groupByKey(data, 'group');
    expect(result).toEqual({
      G1: [{ id: 1, name: 'A', group: 'G1' }, { id: 3, name: 'C', group: 'G1' }],
      G2: [{ id: 2, name: 'B', group: 'G2' }],
    });
  });

  test('should group an array using a selector function', () => {
    const data = [1.1, 2.3, 1.4];
    const result = groupByKey(data, Math.floor);
    expect(result).toEqual({
      1: [1.1, 1.4],
      2: [2.3],
    });
  });
});

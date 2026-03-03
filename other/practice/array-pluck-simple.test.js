import { pluck } from './array-pluck-simple';

describe('pluck', () => {
  test('should pluck values of a specified key', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    const result = pluck(data, 'name');
    expect(result).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  test('should return undefined for missing keys', () => {
    const data = [{ a: 1 }, { b: 2 }];
    const result = pluck(data, 'a');
    expect(result).toEqual([1, undefined]);
  });
});

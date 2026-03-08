import { toDictionary } from './array-to-dictionary';

describe('toDictionary', () => {
  test('should convert array to dictionary by key', () => {
    const arr = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    expect(toDictionary(arr, 'id')).toEqual({
      '1': { id: 1, name: 'Alice' },
      '2': { id: 2, name: 'Bob' }
    });
  });

  test('should return empty object for empty array', () => {
    expect(toDictionary([], 'id')).toEqual({});
  });
});

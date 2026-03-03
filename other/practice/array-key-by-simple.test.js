import { keyBy } from './array-key-by-simple';

describe('keyBy', () => {
  test('should key an array of objects by a property', () => {
    const data = [
      { id: 'a', value: 1 },
      { id: 'b', value: 2 },
    ];
    const result = keyBy(data, 'id');
    expect(result).toEqual({
      a: { id: 'a', value: 1 },
      b: { id: 'b', value: 2 },
    });
  });

  test('should key an array of objects by an iteratee function', () => {
    const data = [
      { id: 'a', value: 1 },
      { id: 'b', value: 2 },
    ];
    const result = keyBy(data, o => o.id.toUpperCase());
    expect(result).toEqual({
      A: { id: 'a', value: 1 },
      B: { id: 'b', value: 2 },
    });
  });
});

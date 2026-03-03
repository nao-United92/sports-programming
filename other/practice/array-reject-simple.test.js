import { reject } from './array-reject-simple';

describe('reject', () => {
  test('should reject even numbers', () => {
    const isEven = n => n % 2 === 0;
    const result = reject([1, 2, 3, 4, 5], isEven);
    expect(result).toEqual([1, 3, 5]);
  });

  test('should return the same array if nothing is rejected', () => {
    const result = reject([1, 3, 5], n => n % 2 === 0);
    expect(result).toEqual([1, 3, 5]);
  });
});

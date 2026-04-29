import { stringToBinary } from './string-to-binary';

describe('stringToBinary', () => {
  test('should convert string to binary', () => {
    expect(stringToBinary('A')).toBe('01000001');
    expect(stringToBinary('ABC')).toBe('01000001 01000010 01000011');
  });
});


import { invert } from './object-invert-utils';

describe('invert', () => {
  test('should invert the keys and values of an object', () => {
    const obj = { a: '1', b: '2' };
    const invertedObj = { '1': 'a', '2': 'b' };
    expect(invert(obj)).toEqual(invertedObj);
  });

  test('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });
});

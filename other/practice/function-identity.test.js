import { identity } from './function-identity';

describe('identity', () => {
  test('returns the value passed to it', () => {
    expect(identity(1)).toBe(1);
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });
});

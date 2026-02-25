import { functionIdentity } from './function-identity-utils';

describe('functionIdentity', () => {
  test('returns the first argument given to it', () => {
    const object = { 'a': 1 };
    expect(functionIdentity(object)).toBe(object);
    expect(functionIdentity('a')).toBe('a');
  });
});

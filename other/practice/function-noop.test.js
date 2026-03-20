import { noop } from './function-noop';

describe('noop', () => {
  test('returns undefined', () => {
    expect(noop()).toBeUndefined();
  });
});

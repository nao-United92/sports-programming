import { functionNoop } from './function-noop-utils';

describe('functionNoop', () => {
  test('returns undefined', () => {
    expect(functionNoop()).toBeUndefined();
  });
});

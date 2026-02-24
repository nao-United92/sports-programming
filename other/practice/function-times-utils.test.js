import { functionTimes } from './function-times-utils';

describe('functionTimes', () => {
  test('invokes iteratee n times', () => {
    let count = 0;
    functionTimes(3, () => { count++; });
    expect(count).toBe(3);
  });

  test('returns array of results', () => {
    const result = functionTimes(3, (i) => i * 2);
    expect(result).toEqual([0, 2, 4]);
  });

  test('returns empty array if n is less than 1', () => {
    expect(functionTimes(0, () => {})).toEqual([]);
  });
});

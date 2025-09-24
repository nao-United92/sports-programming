import { once } from './once-utils';

describe('once', () => {
  it('should only call the function once', () => {
    const myFunction = jest.fn();
    const onceFunction = once(myFunction);

    onceFunction();
    onceFunction();
    onceFunction();

    expect(myFunction).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call', () => {
    const myFunction = jest.fn((x) => x * 2);
    const onceFunction = once(myFunction);

    const result1 = onceFunction(2);
    const result2 = onceFunction(3);

    expect(result1).toBe(4);
    expect(result2).toBe(4);
    expect(myFunction).toHaveBeenCalledTimes(1);
  });
});

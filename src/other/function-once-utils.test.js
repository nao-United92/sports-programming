import { once } from './function-once-utils';

describe('once', () => {
  it('should invoke the function only once', () => {
    const myFunc = jest.fn();
    const onceFunc = once(myFunc);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(myFunc).toHaveBeenCalledTimes(1);
  });

  it('should return the value of the first invocation', () => {
    let i = 0;
    const onceFunc = once(() => ++i);

    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  it('should pass arguments to the original function', () => {
    const myFunc = jest.fn();
    const onceFunc = once(myFunc);

    onceFunc(1, 2, 3);
    onceFunc(4, 5, 6);

    expect(myFunc).toHaveBeenCalledWith(1, 2, 3);
    expect(myFunc).not.toHaveBeenCalledWith(4, 5, 6);
  });

  it('should maintain the `this` context', () => {
    const myObj = {
      myMethod: jest.fn(),
      onceMethod: once(function() { this.myMethod() }),
    };

    myObj.onceMethod();
    myObj.onceMethod();

    expect(myObj.myMethod).toHaveBeenCalledTimes(1);
  });
});

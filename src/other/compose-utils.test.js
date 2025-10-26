import { compose } from './compose-utils';

describe('compose', () => {
  it('should compose the functions from right to left', () => {
    const add5 = (x) => x + 5;
    const multiplyBy2 = (x) => x * 2;
    const subtract10 = (x) => x - 10;

    const composed = compose(subtract10, multiplyBy2, add5);

    expect(composed(5)).toBe(10); // (5 + 5) * 2 - 10 = 10
  });

  it('should work with a single function', () => {
    const add5 = (x) => x + 5;
    const composed = compose(add5);

    expect(composed(5)).toBe(10);
  });

  it('should return the initial value if no functions are provided', () => {
    const composed = compose();
    expect(composed(5)).toBe(5);
  });

  it('should handle different types of data', () => {
    const toUpperCase = (str) => str.toUpperCase();
    const addExclamation = (str) => str + '!';
    const repeat = (str) => str.repeat(3);

    const composed = compose(repeat, addExclamation, toUpperCase);

    expect(composed('hello')).toBe('HELLO!HELLO!HELLO!');
  });
});
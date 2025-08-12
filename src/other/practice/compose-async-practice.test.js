import { composeAsync } from './compose-async-practice.js';

describe('composeAsync', () => {
  it('should compose async functions from right to left', async () => {
    const add5 = async (x) => x + 5;
    const multiplyBy2 = async (x) => x * 2;
    const subtract10 = async (x) => x - 10;

    const composed = composeAsync(subtract10, multiplyBy2, add5);
    await expect(composed(5)).resolves.toBe(10); // (5 + 5) * 2 - 10 = 10
  });

  it('should work with a mix of async and sync functions', async () => {
    const add5 = (x) => x + 5; // Sync
    const multiplyBy2 = async (x) => x * 2; // Async
    const subtract10 = (x) => x - 10; // Sync

    const composed = composeAsync(subtract10, multiplyBy2, add5);
    await expect(composed(5)).resolves.toBe(10);
  });

  it('should return the initial value if no functions are provided', async () => {
    const composed = composeAsync();
    await expect(composed(10)).resolves.toBe(10);
  });

  it('should handle errors in the pipeline', async () => {
    const add5 = async (x) => x + 5;
    const throwError = async (x) => { throw new Error('Test Error'); };
    const multiplyBy2 = async (x) => x * 2;

    const composed = composeAsync(multiplyBy2, throwError, add5); // Error in the middle
    await expect(composed(5)).rejects.toThrow('Test Error');
  });
});

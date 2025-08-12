import { pipeAsync } from './pipe-async-practice.js';

describe('pipeAsync', () => {
  it('should pipe async functions from left to right', async () => {
    const add5 = async (x) => x + 5;
    const multiplyBy2 = async (x) => x * 2;
    const subtract10 = async (x) => x - 10;

    const piped = pipeAsync(add5, multiplyBy2, subtract10);
    await expect(piped(5)).resolves.toBe(10); // (5 + 5) * 2 - 10 = 10
  });

  it('should work with a mix of async and sync functions', async () => {
    const add5 = (x) => x + 5; // Sync
    const multiplyBy2 = async (x) => x * 2; // Async
    const subtract10 = (x) => x - 10; // Sync

    const piped = pipeAsync(add5, multiplyBy2, subtract10);
    await expect(piped(5)).resolves.toBe(10);
  });

  it('should return the initial value if no functions are provided', async () => {
    const piped = pipeAsync();
    await expect(piped(10)).resolves.toBe(10);
  });

  it('should handle errors in the pipeline', async () => {
    const add5 = async (x) => x + 5;
    const throwError = async (x) => { throw new Error('Test Error'); };
    const multiplyBy2 = async (x) => x * 2;

    const piped = pipeAsync(add5, throwError, multiplyBy2);
    await expect(piped(5)).rejects.toThrow('Test Error');
  });
});

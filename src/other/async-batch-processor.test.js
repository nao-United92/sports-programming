const { processInBatches } = require('./async-batch-processor');

// A simple delay utility for testing
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('processInBatches', () => {
  it('should process items in batches and collect results', async () => {
    const items = [1, 2, 3, 4, 5, 6, 7];
    const batchSize = 3;
    const processor = jest.fn(async (batch) => {
      await delay(10);
      return batch.map(item => item * 2);
    });

    const results = await processInBatches(items, batchSize, processor);

    expect(processor).toHaveBeenCalledTimes(3);
    expect(processor).toHaveBeenCalledWith([1, 2, 3]);
    expect(processor).toHaveBeenCalledWith([4, 5, 6]);
    expect(processor).toHaveBeenCalledWith([7]);

    expect(results).toEqual([[2, 4, 6], [8, 10, 12], [14]]);
  });

  it('should handle an empty array of items', async () => {
    const processor = jest.fn();
    const results = await processInBatches([], 3, processor);
    expect(processor).not.toHaveBeenCalled();
    expect(results).toEqual([]);
  });

  it('should handle when item count is less than batch size', async () => {
    const items = [1, 2];
    const batchSize = 5;
    const processor = jest.fn(async (batch) => batch.map(item => item + 1));

    const results = await processInBatches(items, batchSize, processor);

    expect(processor).toHaveBeenCalledTimes(1);
    expect(processor).toHaveBeenCalledWith([1, 2]);
    expect(results).toEqual([[2, 3]]);
  });

  it('should throw an error if batchSize is not positive', async () => {
    const items = [1, 2, 3];
    const processor = jest.fn();
    await expect(processInBatches(items, 0, processor)).rejects.toThrow('batchSize must be greater than 0.');
    await expect(processInBatches(items, -1, processor)).rejects.toThrow('batchSize must be greater than 0.');
  });

  it('should propagate errors from the asyncProcessor', async () => {
    const items = [1, 2, 3, 4];
    const batchSize = 2;
    const error = new Error('Processing failed!');
    const processor = jest.fn()
      .mockResolvedValueOnce('success')
      .mockRejectedValueOnce(error);

    // Mock console.error to prevent logging during tests
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await expect(processInBatches(items, batchSize, processor)).rejects.toThrow(error);
    expect(processor).toHaveBeenCalledTimes(2);
    expect(processor).toHaveBeenCalledWith([1, 2]);
    expect(processor).toHaveBeenCalledWith([3, 4]);

    consoleErrorSpy.mockRestore();
  });
});

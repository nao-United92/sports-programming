/**
 * Processes an array of items in sequential batches.
 *
 * @param {Array<T>} items The array of items to process.
 * @param {number} batchSize The number of items to process in each batch.
 * @param {(batch: Array<T>) => Promise<U>} asyncProcessor An async function that processes a single batch.
 * @returns {Promise<Array<U>>} A promise that resolves to an array of results from each batch.
 * @template T, U
 */
async function processInBatches(items, batchSize, asyncProcessor) {
  if (!items || items.length === 0) {
    return [];
  }

  if (batchSize <= 0) {
    throw new Error('batchSize must be greater than 0.');
  }

  const allResults = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    try {
      const batchResult = await asyncProcessor(batch);
      allResults.push(batchResult);
    } catch (error) {
      console.error('Error processing batch:', error);
      // Re-throw the error to allow the caller to handle it
      throw error;
    }
  }

  return allResults;
}

module.exports = {
  processInBatches,
};

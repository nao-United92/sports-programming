const assert = require('assert');
const { promiseWithTimeout } = require('./promise-timeout-utils.js');

const runTests = async () => {
  try {
    // Test case 1: Promise resolves before timeout
    const fastPromise = new Promise(resolve => setTimeout(() => resolve('fast'), 50));
    const result1 = await promiseWithTimeout(fastPromise, 100);
    assert.strictEqual(result1, 'fast', 'Test 1 Failed: Should resolve before timeout');

    // Test case 2: Promise rejects before timeout
    try {
      const rejectingPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('rejected')), 50));
      await promiseWithTimeout(rejectingPromise, 100);
      assert.fail('Test 2 Failed: Should have rejected');
    } catch (error) {
      assert.strictEqual(error.message, 'rejected', 'Test 2 Failed: Incorrect rejection error');
    }

    // Test case 3: Promise times out
    try {
      const slowPromise = new Promise(resolve => setTimeout(() => resolve('slow'), 200));
      await promiseWithTimeout(slowPromise, 100);
      assert.fail('Test 3 Failed: Should have timed out');
    } catch (error) {
      assert.strictEqual(error.message, 'Promise timed out after 100 ms', 'Test 3 Failed: Incorrect timeout error');
    }

    console.log('All promise-timeout-utils tests passed!');
  } catch (error) {
    console.error('promise-timeout-utils tests failed:', error.message);
    process.exit(1);
  }
};

runTests();

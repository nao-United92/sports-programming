const assert = require('assert');
const { measureExecutionTime } = require('./performance-utils.js');

const runTests = async () => {
  try {
    // Test with a synchronous function
    const syncFn = (a, b) => {
      // Simulate some work
      for (let i = 0; i < 1000000; i++) {}
      return a + b;
    };
    const syncResult = await measureExecutionTime(syncFn, 5, 10);
    assert.strictEqual(syncResult.result, 15, 'Sync Test Failed: Incorrect result');
    assert.ok(syncResult.time >= 0, 'Sync Test Failed: Time should be a positive number');
    console.log(`Sync function took ${syncResult.time.toFixed(2)} ms`);

    // Test with an asynchronous function
    const asyncFn = (ms) => new Promise(resolve => setTimeout(() => resolve('done'), ms));
    const asyncResult = await measureExecutionTime(asyncFn, 100);
    assert.strictEqual(asyncResult.result, 'done', 'Async Test Failed: Incorrect result');
    assert.ok(asyncResult.time >= 100, 'Async Test Failed: Time should be at least 100ms');
    console.log(`Async function took ${asyncResult.time.toFixed(2)} ms`);

    console.log('All performance-utils tests passed!');
  } catch (error) {
    console.error('performance-utils tests failed:', error.message);
    process.exit(1);
  }
};

runTests();
const assert = require('assert');
const { throttle } = require('./throttle-utils.js');

const testThrottle = () => {
  return new Promise((resolve, reject) => {
    try {
      let callCount = 0;
      const throttled = throttle(() => {
        callCount++;
      }, 100);

      // Call 1: Should be executed immediately
      throttled();
      assert.strictEqual(callCount, 1, 'Test 1 Failed: Should be called immediately');

      // Call 2 & 3: Should be ignored
      throttled();
      throttled();
      assert.strictEqual(callCount, 1, 'Test 2 Failed: Should be ignored');

      // After 150ms
      setTimeout(() => {
        // Call 4: Should be executed
        throttled();
        assert.strictEqual(callCount, 2, 'Test 3 Failed: Should be called after wait time');

        // Call 5: Should be ignored
        throttled();
        assert.strictEqual(callCount, 2, 'Test 4 Failed: Should be ignored');
      }, 150);

      // After 300ms
      setTimeout(() => {
        // Call 6: Should be executed
        throttled();
        assert.strictEqual(callCount, 3, 'Test 5 Failed: Should be called after wait time again');
        resolve();
      }, 300);
    } catch (error) {
      reject(error);
    }
  });
};

testThrottle()
  .then(() => {
    console.log('All throttle-utils tests passed!');
  })
  .catch((error) => {
    console.error('throttle-utils tests failed:', error.message);
    process.exit(1);
  });

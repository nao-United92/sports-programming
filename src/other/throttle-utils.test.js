const assert = require('assert');
const { throttle } = require('./throttle-utils.js');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('throttle', () => {
  it('should call the function at most once per "wait" period', async () => {
    let callCount = 0;
    const throttled = throttle(() => {
      callCount++;
    }, 100);

    throttled();
    throttled();
    throttled();

    assert.strictEqual(callCount, 1, 'should be called once immediately');

    await delay(50);
    throttled();
    assert.strictEqual(callCount, 1, 'should not be called again before 100ms');

    await delay(60); // total > 100ms
    throttled();
    assert.strictEqual(callCount, 2, 'should be called again after 100ms');
  });

  it('should invoke the trailing call', async () => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      100,
      { leading: true, trailing: true }
    );

    throttled(); // leading call
    assert.strictEqual(callCount, 1);

    throttled(); // throttled
    throttled(); // throttled

    await delay(110);
    assert.strictEqual(callCount, 2, 'trailing call should be invoked');
  });

  it('should not invoke the trailing call when trailing is false', async () => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      100,
      { leading: true, trailing: false }
    );

    throttled(); // leading call
    assert.strictEqual(callCount, 1);

    throttled();
    throttled();

    await delay(110);
    assert.strictEqual(callCount, 1, 'trailing call should not be invoked');
  });

  it('should not invoke the leading call when leading is false', async () => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      100,
      { leading: false, trailing: true }
    );

    throttled();
    assert.strictEqual(callCount, 0, 'leading call should not be invoked');

    await delay(110);
    assert.strictEqual(callCount, 1, 'trailing call should be invoked after wait time');
  });

  it('cancel should prevent subsequent invocations', async () => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      100,
      { leading: true, trailing: true }
    );

    throttled();
    throttled();
    throttled.cancel();

    await delay(110);
    assert.strictEqual(callCount, 1, 'trailing call should be cancelled');
  });

  it('flush should invoke a pending trailing call immediately', async () => {
    let callCount = 0;
    const throttled = throttle(
      () => {
        callCount++;
      },
      100,
      { leading: true, trailing: true }
    );

    throttled();
    throttled();

    throttled.flush();
    assert.strictEqual(callCount, 2, 'trailing call should be flushed');
  });
});

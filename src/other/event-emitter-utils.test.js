const assert = require('assert');
const { EventEmitter } = require('./event-emitter-utils.js');

try {
  const emitter = new EventEmitter();
  let callCount = 0;
  let lastArgs = [];

  const listener1 = (arg1, arg2) => {
    callCount++;
    lastArgs = [arg1, arg2];
  };

  // Test 'on' and 'emit'
  emitter.on('test-event', listener1);
  emitter.emit('test-event', 'hello', 'world');
  assert.strictEqual(callCount, 1, 'on/emit: listener should be called once');
  assert.deepStrictEqual(lastArgs, ['hello', 'world'], 'on/emit: arguments should be passed correctly');

  // Test 'off'
  emitter.off('test-event', listener1);
  emitter.emit('test-event', 'foo', 'bar');
  assert.strictEqual(callCount, 1, 'off: listener should not be called after being removed');

  // Test 'once'
  callCount = 0;
  emitter.once('once-event', listener1);
  emitter.emit('once-event', 1, 2);
  emitter.emit('once-event', 3, 4);
  assert.strictEqual(callCount, 1, 'once: listener should be called only once');
  assert.deepStrictEqual(lastArgs, [1, 2], 'once: arguments should be correct for the single call');

  // Test unsubscribe function returned by 'on'
  callCount = 0;
  const unsubscribe = emitter.on('unsubscribe-event', listener1);
  emitter.emit('unsubscribe-event');
  assert.strictEqual(callCount, 1, 'unsubscribe: listener should be called before unsubscribe');
  unsubscribe();
  emitter.emit('unsubscribe-event');
  assert.strictEqual(callCount, 1, 'unsubscribe: listener should not be called after unsubscribe');

  console.log('All event-emitter-utils tests passed!');
} catch (error) {
  console.error('event-emitter-utils tests failed:', error.message);
  process.exit(1);
}

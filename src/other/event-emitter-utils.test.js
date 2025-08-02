import { EventEmitter } from './event-emitter-utils.js';

describe('EventEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  test('should register and call an event listener', () => {
    const listener = jest.fn();
    emitter.on('test-event', listener);
    emitter.emit('test-event');
    expect(listener).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the listener', () => {
    const listener = jest.fn();
    emitter.on('test-event', listener);
    emitter.emit('test-event', 1, 'hello', { a: 2 });
    expect(listener).toHaveBeenCalledWith(1, 'hello', { a: 2 });
  });

  test('should call multiple listeners for the same event', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('test-event', listener1);
    emitter.on('test-event', listener2);
    emitter.emit('test-event');
    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  test('should remove a specific listener with off()', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('test-event', listener1);
    emitter.on('test-event', listener2);
    
    emitter.off('test-event', listener1);
    emitter.emit('test-event');

    expect(listener1).not.toHaveBeenCalled();
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  test('should do nothing when emitting an event with no listeners', () => {
    expect(() => emitter.emit('non-existent-event')).not.toThrow();
  });

  test('should register and call a once listener only once', () => {
    const onceListener = jest.fn();
    emitter.once('once-event', onceListener);

    emitter.emit('once-event');
    emitter.emit('once-event');
    emitter.emit('once-event');

    expect(onceListener).toHaveBeenCalledTimes(1);
  });

  test('a listener should be able to remove itself without affecting others', () => {
    const listener1 = jest.fn(() => {
      emitter.off('test-event', listener1);
    });
    const listener2 = jest.fn();

    emitter.on('test-event', listener1);
    emitter.on('test-event', listener2);

    emitter.emit('test-event');

    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);

    // Emit again to make sure listener1 was removed
    emitter.emit('test-event');
    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(2);
  });
});

const { createEventEmitter } = require('./event-emitter-utils');

describe('createEventEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = createEventEmitter();
  });

  it('should call a listener when an event is emitted', () => {
    const listener = jest.fn();
    emitter.on('test-event', listener);
    emitter.emit('test-event');
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the listener', () => {
    const listener = jest.fn();
    emitter.on('test-event', listener);
    emitter.emit('test-event', 1, 'hello', { a: 2 });
    expect(listener).toHaveBeenCalledWith(1, 'hello', { a: 2 });
  });

  it('should call multiple listeners for the same event', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('test-event', listener1);
    emitter.on('test-event', listener2);
    emitter.emit('test-event');
    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  it('should stop calling a listener after it has been removed', () => {
    const listener = jest.fn();
    emitter.on('test-event', listener);
    emitter.emit('test-event');
    expect(listener).toHaveBeenCalledTimes(1);

    emitter.off('test-event', listener);
    emitter.emit('test-event');
    expect(listener).toHaveBeenCalledTimes(1); // Not called again
  });

  it('should not throw when emitting an event with no listeners', () => {
    expect(() => emitter.emit('non-existent-event')).not.toThrow();
  });
});
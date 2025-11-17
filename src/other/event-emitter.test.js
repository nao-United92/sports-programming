const { EventEmitter } = require('./event-emitter');

describe('EventEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should register and emit an event', () => {
    const listener = jest.fn();
    emitter.on('test-event', listener);
    emitter.emit('test-event');
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the listener', () => {
    const listener = jest.fn();
    emitter.on('data', listener);
    emitter.emit('data', 1, 'hello', { a: 2 });
    expect(listener).toHaveBeenCalledWith(1, 'hello', { a: 2 });
  });

  it('should call multiple listeners for the same event', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('multi', listener1);
    emitter.on('multi', listener2);
    emitter.emit('multi');
    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  it('should remove a specific listener with off()', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('remove', listener1);
    emitter.on('remove', listener2);
    emitter.off('remove', listener1);
    emitter.emit('remove');
    expect(listener1).not.toHaveBeenCalled();
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  it('should handle a one-time listener with once()', () => {
    const listener = jest.fn();
    emitter.once('once-event', listener);
    emitter.emit('once-event', 'arg1');
    emitter.emit('once-event', 'arg2');
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith('arg1');
  });

  it('should return false when emitting an event with no listeners', () => {
    const result = emitter.emit('no-listeners');
    expect(result).toBe(false);
  });

  it('should not throw when removing a non-existent listener', () => {
    const listener = jest.fn();
    expect(() => emitter.off('non-event', listener)).not.toThrow();
    expect(() => emitter.off('event-with-listeners', listener)).not.toThrow();
  });

  it('should allow chaining of on(), off(), and once()', () => {
    const listener = jest.fn();
    expect(emitter.on('chain', listener)).toBe(emitter);
    expect(emitter.once('chain-once', listener)).toBe(emitter);
    expect(emitter.off('chain', listener)).toBe(emitter);
  });
});
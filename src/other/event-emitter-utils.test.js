import EventEmitter from './event-emitter-utils.js';

describe('EventEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  test('should register and emit events', () => {
    const listener = jest.fn();
    emitter.on('testEvent', listener);
    emitter.emit('testEvent', 1, 2);
    expect(listener).toHaveBeenCalledWith(1, 2);
  });

  test('should register multiple listeners for the same event', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('testEvent', listener1);
    emitter.on('testEvent', listener2);
    emitter.emit('testEvent');
    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  test('should remove event listeners', () => {
    const listener = jest.fn();
    emitter.on('testEvent', listener);
    emitter.off('testEvent', listener);
    emitter.emit('testEvent');
    expect(listener).not.toHaveBeenCalled();
  });

  test('should not emit if no listeners are registered', () => {
    const listener = jest.fn();
    emitter.emit('anotherEvent');
    expect(listener).not.toHaveBeenCalled();
  });

  test('should handle events with no listeners registered', () => {
    expect(() => emitter.emit('nonExistentEvent')).not.toThrow();
  });

  test('should not remove other listeners when one is removed', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('testEvent', listener1);
    emitter.on('testEvent', listener2);
    emitter.off('testEvent', listener1);
    emitter.emit('testEvent');
    expect(listener1).not.toHaveBeenCalled();
    expect(listener2).toHaveBeenCalledTimes(1);
  });
});
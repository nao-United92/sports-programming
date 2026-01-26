const { EventEmitter } = require('./event-emitter');

describe('EventEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  test('should register and emit events', () => {
    const listener = jest.fn();
    emitter.on('testEvent', listener);
    emitter.emit('testEvent', 1, 2, 3);
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(1, 2, 3);
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

  test('should remove a registered listener', () => {
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

  test('unsubscribe function returned by on should work', () => {
    const listener = jest.fn();
    const unsubscribe = emitter.on('testEvent', listener);
    unsubscribe();
    emitter.emit('testEvent');
    expect(listener).not.toHaveBeenCalled();
  });
});
